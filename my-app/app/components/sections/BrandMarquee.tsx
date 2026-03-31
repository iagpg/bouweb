'use client';

const brandNames = ["Marluvas","Bracol","Delta Plus","Âncora","Calfor","Camper","Irwin","Walsywa","Volk","Danny","Nutriex","Athenas","Tekbond","Norton"];

export default function BrandMarquee() {
  return (
    <section className="py-12 px-8 bg-surface-container-low">
      <div className="container mx-auto overflow-hidden">
        <div className="select-none flex gap-16 items-center w-max animate-scroll hover:[animation-play-state:paused]">
          {brandNames.map((name, index) => (
            <div
              key={`${name}-${index}`}
              className="h-8 md:h-10 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300"
            >
              <span className="text-2xl font-bold text-white tracking-tighter opacity-50">{name}</span>
            </div>
          ))}
          {brandNames.map((name, index) => (
            <div
              key={`dup-${name}-${index}`}
              className="h-8 md:h-10 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300"
            >
              <span className=" text-2xl font-bold text-white tracking-tighter opacity-50">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
