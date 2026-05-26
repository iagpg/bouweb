import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ShimmerButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function ShimmerButton({
  children,
  className = '',
  type = 'button',
  ...props
}: ShimmerButtonProps) {
  return (
    <>
      <style>
        {`
          @keyframes shimmer-button {
            0% { transform: translateX(-100%); }
            65% { transform: translateX(100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
      <button
        type={type}
        className={[
          'group relative isolate inline-flex items-center justify-center overflow-hidden rounded-md bg-primary px-10 py-4 font-headline font-bold uppercase tracking-wider text-on-primary shadow-[0_10px_30px_-10px_rgba(254,174,43,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dim disabled:pointer-events-none disabled:opacity-60',
          className,
        ].join(' ')}
        {...props}
      >
        <span
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,transparent_35%,rgba(255,255,255,0.55)_50%,transparent_65%,transparent_100%)]"
          style={{ animation: 'shimmer-button 5.4s cubic-bezier(0.7, 0, 1, 1) infinite' }}
        />
        <span className="relative z-10 inline-flex items-center justify-center gap-3">
          {children}
        </span>
      </button>
    </>
  );
}
