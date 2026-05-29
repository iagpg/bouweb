import Image from 'next/image';
import ConstellationParticles from './ConstellationParticles';
import TypewriterHeading from './TypewriterHeading';

const heroImage = '/banner_home2.png';

export default function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden bg-surface-container-lowest">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Planta industrial e engrenagens em ambiente escuro com detalhes em laranja"
          className="object-cover object-[62%_center] md:object-center"
          src={heroImage}
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-surface/10 md:via-surface/10 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/60 to-transparent" />
        <ConstellationParticles />
      </div>
      <div className="relative z-10 flex min-h-[560px] flex-col justify-end px-5 pb-16 pt-32 sm:min-h-[620px] sm:px-8 sm:pb-20 md:min-h-[680px] md:justify-center md:px-24 md:py-32">
        <div className="max-w-5xl">
          <span className="mb-3 block font-headline text-sm font-bold uppercase tracking-widest text-primary sm:mb-4 sm:text-base">
            EPIs & Ferramentas
          </span>
          {/* quem somos */}
          <TypewriterHeading />
          <p className="max-w-2xl font-body text-base leading-relaxed text-on-surface-variant sm:text-lg md:text-xl">
            Desde o início, a Bouwobra atua como parceira de quem precisa de
            segurança, precisão e confiabilidade no ambiente industrial.
          </p>
        </div>

        <div className="mt-8 w-full max-w-[260px] border border-primary/30 bg-black/75 p-4 shadow-2xl backdrop-blur-md sm:p-5 md:absolute md:right-8 md:top-8 md:mt-0 lg:right-17">
          <p className="mb-1 font-headline text-lg font-bold leading-tight text-white sm:text-xl">
            Marcelo Chapeta
          </p>
          <p className="font-label text-[11px] font-bold uppercase tracking-widest text-primary sm:text-xs">
            Diretor Comercial
          </p>
        </div>
      </div>
    </section>
  );
}
