'use client';

import NumberFlow from '@number-flow/react';
import { useEffect, useRef, useState } from 'react';

type ScrollNumberFlowProps = {
  value: number;
};

export default function ScrollNumberFlow({ value }: ScrollNumberFlowProps) {
  const numberRef = useRef<HTMLSpanElement | null>(null);
  const hasAnimatedRef = useRef(false);
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const numberElement = numberRef.current;

    if (!numberElement) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReducedMotion) {
      const frameId = window.requestAnimationFrame(() => setCurrentValue(value));

      return () => window.cancelAnimationFrame(frameId);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimatedRef.current) {
          return;
        }

        hasAnimatedRef.current = true;
        setCurrentValue(value);
        observer.unobserve(entry.target);
      },
      {
        rootMargin: '0px 0px -18% 0px',
        threshold: 0.25,
      },
    );

    observer.observe(numberElement);

    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={numberRef}>
      <NumberFlow
        spinTiming={{
          direction: 'alternate',
          duration: 1750,
          easing: 'ease-in-out',
        }}
        format={{ notation: 'compact' }}
        value={currentValue}
      />
    </span>
  );
}
