import Link from 'next/link';
import Image from 'next/image';
import { WHATSAPP_HREF } from '../../lib/whatsapp';

export default function HeroSection() {
  return (
    <section className="relative flex h-[870px] items-center overflow-hidden">
      {/* Background Image with Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner_home.png"
          alt="Construction site at dusk"
          fill
          className="object-cover opacity-40 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-8">
        <div className="max-w-3xl">
          <span
            className="animate-fade-up mb-4 block text-sm font-headline font-bold uppercase tracking-[0.2em] text-primary"
            style={{ ['--delay' as string]: '1s' }}
          >
            Epi & Equipamentos
          </span>
          <h1
            className="animate-fade-up mb-8 font-headline text-7xl font-bold leading-[0.9] tracking-tighter text-white md:text-8xl"
            style={{ ['--delay' as string]: '2s' }}
          >
            Protecao que <br />
            <span className="text-primary">Constroi Confianca</span>
          </h1>

          <p className="mb-10 max-w-xl font-body text-xl leading-relaxed text-on-surface-variant">
            Equipamentos de alta performance para quem exige o maximo em seguranca e durabilidade para sua obra.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              className="group relative isolate overflow-hidden rounded-md bg-primary px-10 py-4 font-headline font-bold uppercase tracking-wider text-on-primary shadow-[0_10px_30px_-10px_rgba(254,174,43,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dim hover:shadow-[0_18px_45px_-18px_rgba(254,174,43,0.55)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span className="material-symbols-outlined transition-transform duration-300 group-hover:scale-110">
                  chat
                </span>
                Solicitar Orcamento
              </span>
            </Link>

            <button className="rounded-md border border-outline-variant px-10 py-4 font-headline font-bold uppercase tracking-wider text-white transition-all hover:bg-white/5">
              Ver Catalogo (em breve)
            </button>
          </div>
        </div>
      </div>

      {/* Side Decorations */}
      <div className="absolute right-0 bottom-0 h-px w-1/3 bg-primary/30"></div>
      <div className="absolute right-12 bottom-12 hidden lg:block">
        <div className="flex flex-col items-end gap-2">
          <div className="h-1 w-24 bg-primary"></div>
          <span className="select-none font-headline text-4xl font-black text-white/10">
            BouwObra.26
          </span>
        </div>
      </div>
    </section>
  );
}
