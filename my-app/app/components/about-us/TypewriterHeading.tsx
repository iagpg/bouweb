'use client';

import { useEffect, useState } from 'react';

const firstLine = 'QUEM';
const secondLine = 'SOMOS';
const fullText = `${firstLine} ${secondLine}`;

export default function TypewriterHeading() {
  const [visibleCharacters, setVisibleCharacters] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReducedMotion) {
      const frameId = window.requestAnimationFrame(() => {
        setVisibleCharacters(fullText.length);
      });

      return () => window.cancelAnimationFrame(frameId);
    }

    let characterIndex = 0;
    const intervalId = window.setInterval(() => {
      characterIndex += 1;
      setVisibleCharacters(characterIndex);

      if (characterIndex >= fullText.length) {
        window.clearInterval(intervalId);
      }
    }, 120);

    return () => window.clearInterval(intervalId);
  }, []);

  const visibleText = fullText.slice(0, visibleCharacters);
  const visibleFirstLine = visibleText.slice(0, firstLine.length);
  const visibleSecondLine = visibleText.slice(firstLine.length + 1);

  return (
    <h1
      className="mb-8 font-headline text-6xl font-bold leading-[0.9] tracking-tighter text-white md:text-8xl"
      aria-label={fullText}
    >
      <span aria-hidden="true">
        {visibleFirstLine}
        <span className="inline-block w-[0.35ch]" />
      </span>
      <br />
      <span className="text-primary text-glow" aria-hidden="true">
        {visibleSecondLine}
      </span>
      <span
        className="ml-2 inline-block h-[0.82em] w-[0.08em] translate-y-[0.08em] animate-pulse bg-primary"
        aria-hidden="true"
      />
    </h1>
  );
}