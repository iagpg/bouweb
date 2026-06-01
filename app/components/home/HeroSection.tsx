import { CATALOG_HREF } from '../../lib/whatsapp';
import AnimatedHighlight from '../ui/AnimatedHighlight';
import ContactModalTrigger from '../ui/ContactModalTrigger';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[720px] items-center overflow-hidden py-24 sm:min-h-[780px] md:min-h-[870px] md:py-0">
      {/* Background Video with Gradient */}
      <div className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover object-center opacity-80 grayscale"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/new.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30 md:bg-gradient-to-r md:from-black md:via-black/80 md:to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <span
            className="animate-fade-up mb-4 block font-headline text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm"
            style={{ ['--delay' as string]: '1s' }}
          >
            Epi & Equipamentos
          </span>
          <h1
            className="animate-fade-up mb-6 font-headline text-5xl font-bold leading-[0.92] tracking-tighter text-white sm:text-6xl md:mb-8 md:text-8xl"
            style={{ ['--delay' as string]: '2s' }}
          >
            Proteção que <br />
            <AnimatedHighlight className="text-primary" delay="2.7s">
              Constroi Confiança
            </AnimatedHighlight>
          </h1>

          <p
            className="animate-fade-up mb-8 max-w-xl font-body text-base leading-relaxed text-on-surface-variant sm:text-lg md:mb-10 md:text-xl"
            style={{ ['--delay' as string]: '3s' }}
          >
            Equipamentos de alta performance para quem exige o maximo em seguranca e durabilidade para sua obra.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <ContactModalTrigger
              className="animate-fade-up group relative isolate w-full overflow-hidden rounded-md bg-primary px-6 py-4 font-headline text-sm font-bold uppercase tracking-wider text-on-primary shadow-[0_10px_30px_-10px_rgba(254,174,43,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dim hover:shadow-[0_18px_45px_-18px_rgba(254,174,43,0.55)] sm:w-auto sm:px-10 sm:text-base"
              style={{ ['--delay' as string]: '3.5s' }}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <span className="material-symbols-outlined transition-transform duration-300 group-hover:scale-110">
                  chat
                </span>
                Solicitar Orcamento
              </span>
            </ContactModalTrigger>

            <a
              href={CATALOG_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-fade-up relative inline-flex w-full items-center justify-center rounded-md border border-outline-variant px-6 py-4 font-headline text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white/5 sm:w-auto sm:px-10 sm:text-base"
              style={{ ['--delay' as string]: '4s' }}
            >
              <span className="absolute -right-1 -top-1 flex size-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-primary"></span>
              </span>
              Ver Catalogo
            </a>
          </div>
        </div>
      </div>

      {/* Side Decorations */}
      <div className="absolute bottom-0 right-0 h-px w-1/2 bg-primary/30 md:w-1/3" />
      <div className="absolute right-12 bottom-12 hidden lg:block">
        <div className="flex flex-col items-end gap-2">
          <div className="h-1 w-24 bg-primary" />
          <span className="select-none font-headline text-4xl font-black text-white/10">
            BouwObra.26
          </span>
        </div>
      </div>
    </section>
  );
}
