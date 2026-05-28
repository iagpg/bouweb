'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { CATALOG_HREF } from '@/app/lib/whatsapp';

const categories = [
  {
    title: 'Botinas & Sapatos',
    description:
      'Calcados de seguranca para alta aderencia, conforto e protecao no canteiro.',
    icon: 'steps',
    image: '/products/boot.png',
  },
  {
    title: 'Capacetes',
    description:
      'Protecao craniana resistente para rotinas industriais e obras pesadas.',
    icon: 'engineering',
    image:
      '/products/helmet.png',
  },
  {
    title: 'Luvas',
    description:
      'Modelos para protecao mecanica, abrasao, corte e manuseio seguro.',
    icon: 'front_hand',
    image:
      '/products/glove.png',
  },
  {
    title: 'Oculos de Protecao',
    description:
      'Barreira visual contra particulas, respingos e riscos em operacao.',
    icon: 'visibility',
    image:
      '/products/oculos.png',
  },
  {
    title: 'Acessorios',
    description:
      'Itens complementares para organizacao, sinalizacao e suporte no trabalho.',
    icon: 'construction',
    image:
      '/products/tool.png',
  },
  {
    title: 'Vestimentas',
    description:
      'Roupas tecnicas para visibilidade, resistencia e protecao diaria.',
    icon: 'checkroom',
    image:
      '/products/colete.png',
  },
];

export default function ProductCategories() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReducedMotion) {
      const frameId = window.requestAnimationFrame(() => setIsVisible(true));

      return () => window.cancelAnimationFrame(frameId);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.unobserve(entry.target);
      },
      {
        rootMargin: '0px 0px -18% 0px',
        threshold: 0.4,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="industrial-grid bg-surface px-8 py-24">
      <div className="container mx-auto h-px-200">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <h2 className="font-headline text-4xl font-bold tracking-tighter text-white">
              Nossos Produtos
            </h2>
            <p className="mt-2 text-on-surface-variant">
              Tecnologia avancada em cada detalhe do seu EPI.
            </p>
          </div>

          <div className="mx-12 hidden h-px flex-1 bg-outline-variant/20 md:block"></div>
          <a
            className="flex items-center gap-2 font-headline text-sm font-bold uppercase tracking-widest text-primary transition-all hover:gap-4"
            href={CATALOG_HREF}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explorar Tudo
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <div
              className={`group relative flex aspect-video overflow-hidden rounded-xl border border-primary/10 bg-primary/20 p-8 text-left transition-all duration-[1200ms] ease-out hover:border-primary/30 hover:bg-primary/30 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-12 opacity-0'
              }`}
              key={category.title}
              style={{ transitionDelay: `${index * 160}ms` }}
            >
              <Image
                alt={category.title}
                className="object-cover opacity-35 grayscale transition duration-500 group-hover:scale-105 group-hover:opacity-45"
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                src={category.image}
              />
              <div className="absolute inset-0 bg-primary/45 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

              <div className="relative z-10 mt-auto max-w-sm">
                <span className="material-symbols-outlined mb-4 block text-5xl text-primary">
                  {category.icon}
                </span>
                <h3 className="font-headline text-xl font-bold text-white">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
