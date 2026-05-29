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
    <div className="flex min-h-40 w-full flex-col items-center justify-center border border-outline-variant/10 bg-surface-container-high p-6 text-center sm:min-h-[220px] sm:p-8">
      <span className="mb-2 font-headline text-4xl font-bold leading-none text-primary sm:text-5xl">
        <ScrollNumberFlow value={value} />
        {suffix}
      </span>
      <span className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant sm:text-xs">
        {label}
      </span>
    </div>
  );
}

export default function AboutOverviewSection() {
  return (
    <section className="bg-surface px-5 py-20 sm:px-8 sm:py-24 md:px-24">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-5 sm:gap-6 md:grid-cols-12 md:auto-rows-[300px]">
        <div className="group relative flex min-h-72 flex-col justify-end overflow-hidden border border-outline-variant/10 bg-surface-container-low p-6 sm:p-8 md:col-span-8 md:min-h-0 md:p-10">
          <h3 className="mb-3 font-headline text-2xl font-bold text-white sm:mb-4 sm:text-3xl">
            Nossa História
          </h3>
          <p className="max-w-xl text-sm leading-relaxed text-on-surface-variant sm:text-base">
            Nascemos com foco em soluções industriais confiáveis. Hoje,
            conectamos empresas a equipamentos, EPIs e ferramentas preparados
            para as exigências reais do canteiro e da operação.
          </p>
        </div>

        <div className="group flex min-h-64 flex-col justify-between bg-primary p-6 sm:p-8 md:col-span-4 md:min-h-0 md:p-10">
          <span
            className="material-symbols-outlined text-4xl text-on-primary sm:text-5xl md:text-4xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            target
          </span>
          <div>
            <h3 className="mb-2 font-headline text-2xl font-bold text-on-primary sm:text-3xl">
              Missão
            </h3>
            <p className="text-sm font-medium leading-relaxed text-on-primary/80 sm:text-base">
              Fornecer soluções industriais resistentes que ajudem equipes a
              trabalhar com mais segurança, velocidade e precisão.
            </p>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-5 sm:gap-6 md:col-span-12 md:grid-cols-3">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
}
