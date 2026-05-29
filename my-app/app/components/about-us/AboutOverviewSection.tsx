import ScrollNumberFlow from '../ui/ScrollNumberFlow';

const metrics = [
  {
    value: 3,
    suffix: '+',
    label: 'Anos de Experiência',
  },
  {
    value: 439,
    label: 'Empresas atendidas',
  },
  {
    value: 102854,
    label: 'Vendas Concluídas',
  },
];

function MetricCard({
  label,
  suffix,
  value,
}: {
  label: string;
  suffix?: string;
  value: number;
}) {
  return (
    <div className="flex min-h-[220px] w-full flex-col items-center justify-center border border-outline-variant/10 bg-surface-container-high p-8 text-center">
      <span className="mb-2 font-headline text-5xl font-bold text-primary">
        <ScrollNumberFlow value={value} />
        {suffix}
      </span>
      <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
        {label}
      </span>
    </div>
  );
}

export default function AboutOverviewSection() {
  return (
    <section className="bg-surface px-8 py-24 md:px-24">
      <div className="grid auto-rows-[300px] grid-cols-1 gap-6 md:grid-cols-12">
        <div className="group relative flex flex-col justify-end overflow-hidden border border-outline-variant/10 bg-surface-container-low p-10 md:col-span-8">
          <h3 className="mb-4 font-headline text-3xl font-bold text-white">
            Nossa História
          </h3>
          <p className="max-w-xl leading-relaxed text-on-surface-variant">
            Nascemos com foco em soluções industriais confiáveis. Hoje,
            conectamos empresas a equipamentos, EPIs e ferramentas preparados
            para as exigências reais do canteiro e da operação.
          </p>
        </div>

        <div className="group flex flex-col justify-between bg-primary p-10 md:col-span-4">
          <span
            className="material-symbols-outlined text-4xl text-on-primary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            target
          </span>
          <div>
            <h3 className="mb-2 font-headline text-3xl font-bold text-on-primary">
              Missão
            </h3>
            <p className="font-medium text-on-primary/80">
              Fornecer soluções industriais resistentes que ajudem equipes a
              trabalhar com mais segurança, velocidade e precisão.
            </p>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:col-span-12 md:grid-cols-3">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
}
