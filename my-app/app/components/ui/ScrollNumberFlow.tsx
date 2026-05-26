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
    const section = numberRef.current?.closest('section');

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimatedRef.current) {
          return;
        }

        hasAnimatedRef.current = true;
        setCurrentValue(value);
        observer.disconnect();
      },
      { threshold: 0.8 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={numberRef}>
      <NumberFlow format={{ notation: 'compact' }}  value={currentValue} />
    </span>
  );
}
