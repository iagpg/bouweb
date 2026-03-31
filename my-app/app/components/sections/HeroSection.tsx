'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-[870px] flex items-center overflow-hidden">
      {/* Background Image with Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsvJbvwjde4xNqY0lT38pLcIRLgGPwaNjoIB9VRsBcGBgaG9G9MImrDmbf99MWQcKf0LPYeeqh6PzYItOFLVr0AM053cjdtl8USsUvUV49R4V4aKdqDQYIDUrp5Jn07lidA-nd5lA3ZuBhtG9kNStCfQ3MhmRRElM1LR5pWWjY4QArtNV_YjnIC3ZvAugG25o1YKEFShcFWbG6wFxqkGAGgIL2EaXsxrIZOSgFll5BFkQOHvSSyxauJfbbKhmORutqTub-GzXbBM0"
          alt="Construction site at dusk"
          fill
          className="object-cover opacity-40 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-3xl">
          <span className="text-primary font-headline font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
           Epi & Equipamentos
          </span>

          <h1 className="text-7xl md:text-8xl font-headline font-bold text-white leading-[0.9] tracking-tighter mb-8">
            Proteção que <br />
            <span className="text-primary">Constrói Confiança</span>
          </h1>

          <p className="text-on-surface-variant text-xl max-w-xl mb-10 font-body leading-relaxed">
            Equipamentos de alta performance para quem exige o máximo em segurança e durabilidade para sua obra.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://wa.me/yourlink"
              className="bg-primary text-on-primary px-10 py-4 rounded-md font-headline font-bold uppercase tracking-wider flex items-center gap-3 hover:bg-primary-dim transition-all shadow-[0_10px_30px_-10px_rgba(254,174,43,0.3)]"
            >
              <span className="material-symbols-outlined">chat</span>
              Solicitar Orçamento
            </Link>

            <button className="border border-outline-variant text-white px-10 py-4 rounded-md font-headline font-bold uppercase tracking-wider hover:bg-white/5 transition-all">
              Ver Catálogo
            </button>
          </div>
        </div>
      </div>

      {/* Side Decorations */}
      <div className="absolute bottom-0 right-0 w-1/3 h-px bg-primary/30"></div>
      <div className="absolute bottom-12 right-12 hidden lg:block">
        <div className="flex flex-col items-end gap-2">
          <div className="w-24 h-1 bg-primary"></div>
          <span className="font-headline text-4xl font-black text-white/10 select-none">
           BouwObra.26
          </span>
        </div>
      </div>
    </section>
  );
}
