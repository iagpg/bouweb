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
    description: 'Todos os nossos produtos atendem rigorosamente às normas NR nacionais, internacionais e possuem CA, certificado de aprovação homologada pelo Ministério do Trabalho.',
  },
  {
    icon: 'support_agent',
    title: 'Consultoria Técnica',
    description: 'Nossos especialistas ajudam você a escolher o EPI ideal para cada função.',
  },
];

export default function ValuesSection() {
  return (
    <section className="py-32 px-8 bg-surface-container-low border-t border-outline-variant/10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {values.map((value, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
              <span className="material-symbols-outlined text-4xl">{value.icon}</span>
            </div>
            <h3 className="text-2xl font-headline font-bold text-white mb-4">
              {value.title}
            </h3>
            <p className="text-on-surface-variant font-body leading-relaxed">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
