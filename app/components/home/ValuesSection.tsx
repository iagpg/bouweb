'use client';

const values = [
  {
    icon: 'speed',
    title: 'Logística Ágil',
    description: 'Entrega prioritária para obra em toda baixada Santista.',
  },
  {
    icon: 'verified',
    title: 'Qualidade Certificada',
    description:
      'Todos os nossos produtos atendem rigorosamente às normas NR nacionais, internacionais e possuem CA, certificado de aprovação homologada pelo Ministério do Trabalho.',
  },
  {
    icon: 'support_agent',
    title: 'Consultoria Técnica',
    description:
      'Nossos especialistas ajudam você a escolher o EPI ideal para cada função.',
  },
];

export default function ValuesSection() {
  return (
    <section className="border-t border-outline-variant/10 bg-surface-container-low px-5 py-20 sm:px-8 sm:py-24 md:py-32">
      <div className="container mx-auto grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-3 md:gap-16">
        {values.map((value) => (
          <div key={value.title} className="mx-auto max-w-sm text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary sm:mb-6 sm:h-16 sm:w-16">
              <span className="material-symbols-outlined text-3xl sm:text-4xl">
                {value.icon}
              </span>
            </div>
            <h3 className="mb-3 font-headline text-xl font-bold text-white sm:mb-4 sm:text-2xl">
              {value.title}
            </h3>
            <p className="font-body text-sm leading-relaxed text-on-surface-variant sm:text-base">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
