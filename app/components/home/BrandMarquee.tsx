'use client';

const brandNames = [
  'Marluvas',
  'Bracol',
  'Delta Plus',
  'Âncora',
  'Calfor',
  'Camper',
  'Irwin',
  'Walsywa',
  'Volk',
  'Danny',
  'Nutriex',
  'Athenas',
  'Tekbond',
  'Norton',
];

export default function BrandMarquee() {
  return (
    <section className="bg-surface-container-low px-5 py-10 sm:px-8 sm:py-12">
      <div className="container mx-auto">
        <h2 className="relative z-10 mb-10 text-center font-headline text-2xl font-bold leading-tight tracking-tighter text-on-primary-container sm:mb-15 sm:text-4xl">
          <span className="text-primary">Parcerias </span>
          sólidas com marcas rigorosamente certificadas
        </h2>
        <div
          className="overflow-hidden"
          style={{
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
            maskImage:
              'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          }}
        >
          <div className="flex w-max select-none items-center gap-10 animate-scroll hover:[animation-play-state:paused] sm:gap-16">
            {[...brandNames, ...brandNames].map((name, index) => (
              <div
                key={`${name}-${index}`}
                className="flex h-8 items-center justify-center opacity-40 transition-opacity duration-300 hover:opacity-100 md:h-10"
              >
                <span className="text-xl font-bold tracking-tighter text-white opacity-50 sm:text-2xl">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
