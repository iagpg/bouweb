const values = [
  {
    icon: 'gavel',
    title: 'Integridade',
    description:
      'Mantemos transparência em cada negociação, especificação técnica e compromisso assumido.',
  },
  {
    icon: 'verified',
    title: 'Qualidade',
    description:
      'Trabalhamos com produtos selecionados para suportar rotinas intensas e padrões industriais exigentes.',
  },
  {
    icon: 'health_and_safety',
    title: 'Segurança',
    description:
      'Acreditamos que desempenho começa com proteção adequada para cada pessoa envolvida na operação.',
  },
];

export default function AboutValuesSection() {
  return (
    <section className="bg-surface-container-low py-24">
      <div className="mb-16 px-8 md:px-24">
        <h2 className="font-headline text-4xl font-bold uppercase tracking-tight text-white">
          Nossos <span className="text-primary">Valores</span>
        </h2>
        <div className="mt-4 h-1 w-20 bg-primary" />
      </div>

      <div className="grid grid-cols-1 border-y border-outline-variant/20 md:grid-cols-3">
        {values.map((value, index) => (
          <div
            key={value.title}
            className={`group border-outline-variant/20 p-16 transition-colors hover:bg-surface ${
              index < values.length - 1 ? 'md:border-r' : ''
            }`}
          >
            <span className="material-symbols-outlined mb-8 block text-5xl text-primary transition-transform group-hover:scale-110">
              {value.icon}
            </span>
            <h4 className="mb-4 font-headline text-2xl font-bold uppercase text-white">
              {value.title}
            </h4>
            <p className="leading-relaxed text-on-surface-variant">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
