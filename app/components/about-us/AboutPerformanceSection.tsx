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
    <div className="flex items-start gap-6">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-surface-container-highest text-primary">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div>
        <h5 className="mb-1 font-headline text-xl font-bold uppercase text-white">
          {title}
        </h5>
        <p className="text-sm text-on-surface-variant">{description}</p>
      </div>
    </div>
  );
}

export default function AboutPerformanceSection() {
  return (
    <section className="flex flex-col items-center gap-20 px-8 py-32 md:flex-row md:px-24">
      <div className="flex-1 space-y-12">
        <h2 className="font-headline text-5xl font-extrabold uppercase leading-none tracking-tighter text-white">
          Projetado para <br />
          <span className="text-primary">Performance</span>
        </h2>

        <div className="space-y-8">
          {performanceItems.map((item) => (
            <PerformanceItem key={item.title} {...item} />
          ))}
        </div>
      </div>

      <div className="relative flex-1">
        <div className="relative aspect-square overflow-hidden rounded-xl bg-surface-container-low p-4">
          <div className="pointer-events-none absolute inset-0 m-4 border-[20px] border-primary/5" />
          <Image
            alt="Homem com braços cruzados parado"
            className="rounded-lg object-cover shadow-2xl"
            src="/about-us.png"
            fill
            sizes="(min-width: 768px) 50vw, 180vw"
          />
        </div>

        <div className="absolute -right-12 top-6 z-10 max-w-[240px] border border-primary/30 bg-black/75 p-5 shadow-2xl backdrop-blur-md">
          <p className="mb-1 font-headline text-xl font-bold leading-tight text-white">
            Carlos Forgnone
          </p>
          <p className="font-label text-xs font-bold uppercase tracking-widest text-primary">
            Sócio-Diretor Operacional
          </p>
        </div>

        <div className="absolute -bottom-10 -left-10 hidden max-w-xs border border-primary/20 bg-surface-container-highest p-8 shadow-2xl backdrop-blur-md md:block">
          <p className="mb-2 font-headline text-lg font-bold italic text-white">
            &quot;Nosso compromisso é garantir que cada obra, empresa e
            profissional tenha acesso aos EPIs e ferramentas certas para
            trabalhar com mais segurança, eficiência e confiança.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
