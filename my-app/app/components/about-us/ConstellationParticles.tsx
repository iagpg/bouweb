'use client';

import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulse: number;
};

const particleColor = '255, 175, 44';

function createParticle(width: number, height: number): Particle {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.18,
    vy: (Math.random() - 0.5) * 0.18,
    radius: Math.random() * 1.4 + 0.6,
    pulse: Math.random() * Math.PI * 2,
  };
}

export default function ConstellationParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext('2d');

    if (!context) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const particles: Particle[] = [];
    let animationFrameId = 0;
    let width = 0;
    let height = 0;

    const resizeCanvas = () => {
      const { clientWidth, clientHeight } = canvas;
      const pixelRatio = window.devicePixelRatio || 1;

      width = clientWidth;
      height = clientHeight;
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      particles.length = 0;
      const particleCount = Math.min(86, Math.max(34, Math.floor(width / 18)));

      for (let index = 0; index < particleCount; index += 1) {
        particles.push(createParticle(width, height));
      }
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];

        if (!prefersReducedMotion) {
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.pulse += 0.015;
        }

        if (particle.x < -20) particle.x = width + 20;
        if (particle.x > width + 20) particle.x = -20;
        if (particle.y < -20) particle.y = height + 20;
        if (particle.y > height + 20) particle.y = -20;

        for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
          const nextParticle = particles[nextIndex];
          const distanceX = particle.x - nextParticle.x;
          const distanceY = particle.y - nextParticle.y;
          const distance = Math.hypot(distanceX, distanceY);
          const maxDistance = 145;

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.26;

            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(nextParticle.x, nextParticle.y);
            context.strokeStyle = `rgba(${particleColor}, ${opacity})`;
            context.lineWidth = 0.8;
            context.stroke();
          }
        }

        const glow = 0.45 + Math.sin(particle.pulse) * 0.18;

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(${particleColor}, ${glow})`;
        context.fill();
      }

      if (!prefersReducedMotion) {
        animationFrameId = window.requestAnimationFrame(draw);
      }
    };

    resizeCanvas();
    draw();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-80 mix-blend-screen"
    />
  );
}
