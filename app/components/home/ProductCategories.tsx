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
  const cardsGridRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cardsGrid = cardsGridRef.current;

    if (!cardsGrid) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReducedMotion) {
      const frameId = window.requestAnimationFrame(() => setIsVisible(true));

      return () => window.cancelAnimationFrame(frameId);
    }

    if (typeof IntersectionObserver === 'undefined') {
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
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.1,
      },
    );

    observer.observe(cardsGrid);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="industrial-grid bg-surface px-5 py-20 sm:px-8 sm:py-24">
      <div className="container mx-auto">
        <div className="mb-10 flex flex-col gap-5 sm:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-white sm:text-4xl">
              Nossos Produtos
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-on-surface-variant sm:text-base">
              Tecnologia avancada em cada detalhe do seu EPI.
            </p>
          </div>

          <div className="mx-12 hidden h-px flex-1 bg-outline-variant/20 md:block"></div>
          <a
            className="flex w-fit items-center gap-2 font-headline text-sm font-bold uppercase tracking-widest text-primary transition-all hover:gap-4"
            href={CATALOG_HREF}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explorar Tudo
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>

        <div
          ref={cardsGridRef}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((category, index) => (
            <div
              className={`group relative flex min-h-64 overflow-hidden rounded-xl border border-primary/10 bg-primary/20 p-6 text-left transition-all duration-[1200ms] ease-out hover:border-primary/30 hover:bg-primary/30 sm:aspect-video sm:min-h-0 sm:p-8 ${
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
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, calc(100vw - 40px)"
                src={category.image}
              />
              <div className="absolute inset-0 bg-primary/45 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

              <div className="relative z-10 mt-auto max-w-sm">
                <span className="material-symbols-outlined mb-4 block text-4xl text-primary sm:text-5xl">
                  {category.icon}
                </span>
                <h3 className="font-headline text-lg font-bold text-white sm:text-xl">
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
