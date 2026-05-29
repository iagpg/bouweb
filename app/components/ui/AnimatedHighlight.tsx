import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

type AnimatedHighlightProps = {
  children: ReactNode;
  delay?: string;
} & HTMLAttributes<HTMLSpanElement>;

type HighlightStyle = CSSProperties & {
  '--highlight-delay'?: string;
};

export default function AnimatedHighlight({
  children,
  className = '',
  delay,
  style,
  ...props
}: AnimatedHighlightProps) {
  const highlightStyle: HighlightStyle = {
    ...style,
    ...(delay ? { '--highlight-delay': delay } : {}),
  };

  return (
    <span
      className={`animate-text-highlight inline ${className}`}
      style={highlightStyle}
      {...props}
    >
      {children}
    </span>
  );
}
