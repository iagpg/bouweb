import Image from 'next/image';

const performanceItems = [
  {
    icon: 'engineering',
    title: 'Conhecimento Técnico',
    description:
      'Entendemos as demandas práticas de obras, manutenção, segurança e operações industriais.',
  },
  {
    icon: 'local_shipping',
    title: 'Agilidade na Entrega',
    description:
      'Priorizamos disponibilidade, resposta rápida e logística alinhada à urgência do cliente.',
  },
  {
    icon: 'stars',
    title: 'Portfólio Selecionado',
    description:
      'Reunimos marcas e soluções pensadas para durabilidade, segurança e desempenho consistente.',
  },
];

function PerformanceItem({
  description,
  icon,
  title,
}: {
  description: string;
  icon: string;
  title: string;
}) {
  return (
    <div className="flex items-start gap-4 sm:gap-6">
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-surface-container-highest text-primary sm:h-12 sm:w-12">
        <span className="material-symbols-outlined text-[24px] sm:text-[28px]">
          {icon}
        </span>
      </div>
      <div>
        <h5 className="mb-1 font-headline text-lg font-bold uppercase leading-tight text-white sm:text-xl">
          {title}
        </h5>
        <p className="text-sm leading-relaxed text-on-surface-variant">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function AboutPerformanceSection() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-24 md:px-24 md:py-32">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-stretch gap-14 md:flex-row md:items-center md:gap-20">
        <div className="w-full flex-1 space-y-8 sm:space-y-12">
          <h2 className="font-headline text-4xl font-extrabold uppercase leading-none tracking-tighter text-white sm:text-5xl lg:text-6xl">
            Projetado para <br />
            <span className="text-primary">Performance</span>
          </h2>

          <div className="space-y-6 sm:space-y-8">
            {performanceItems.map((item) => (
              <PerformanceItem key={item.title} {...item} />
            ))}
          </div>
        </div>

        <div className="relative w-full flex-1 self-center md:self-auto">
          <div className="relative mx-auto w-full max-w-sm sm:max-w-md md:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-low p-3 sm:aspect-square sm:p-4">
              <div className="pointer-events-none absolute inset-3 border-[12px] border-primary/5 sm:inset-4 sm:border-[20px]" />
              <Image
                alt="Homem com braços cruzados parado"
                className="rounded-lg object-cover shadow-2xl"
                loading="eager"
                src="/about-us.png"
                fill
                sizes="(min-width: 768px) 50vw, (min-width: 640px) 448px, calc(100vw - 40px)"
              />
            </div>

            <div className="absolute inset-x-3 bottom-3 z-10 border border-primary/30 bg-black/75 p-4 shadow-2xl backdrop-blur-md sm:inset-x-auto sm:right-4 sm:top-6 sm:bottom-auto sm:max-w-[240px] sm:p-5 md:-right-8 lg:-right-12">
              <p className="mb-1 font-headline text-lg font-bold leading-tight text-white sm:text-xl">
                Carlos Forgnone
              </p>
              <p className="font-label text-[11px] font-bold uppercase tracking-widest text-primary sm:text-xs">
                Sócio-Diretor Operacional
              </p>
            </div>
          </div>

          <div className="mt-5 border border-primary/20 bg-surface-container-highest p-5 shadow-2xl backdrop-blur-md sm:p-6 md:absolute md:-bottom-10 md:-left-10 md:mt-0 md:max-w-xs md:p-8">
            <p className="font-headline text-base font-bold italic leading-snug text-white sm:text-lg">
              &quot;Nosso compromisso é garantir que cada obra, empresa e
              profissional tenha acesso aos EPIs e ferramentas certas para
              trabalhar com mais segurança, eficiência e confiança.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
