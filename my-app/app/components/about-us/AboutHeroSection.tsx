import Image from 'next/image';
import ConstellationParticles from './ConstellationParticles';
import TypewriterHeading from './TypewriterHeading';

const heroImage = '/banner_home2.png';

export default function AboutHeroSection() {
  return (
    <section className="relative flex min-h-[640px] items-center overflow-hidden bg-surface-container-lowest">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Planta industrial e engrenagens em ambiente escuro com detalhes em laranja"
          className="object-cover "
          src={heroImage}
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent" />
        <ConstellationParticles />
      </div>
      <div className="absolute right-17 top-8 z-10 max-w-[240px] border border-primary/30 bg-black/75 p-5 shadow-2xl backdrop-blur-md">
          <p className="mb-1 font-headline text-xl font-bold leading-tight text-white">
            Marcelo Chapeta
          </p>
          <p className="font-label text-xs font-bold uppercase tracking-widest text-primary">
            Diretor Comercial
          </p>
        </div>

      <div className="relative z-10 max-w-5xl px-8 md:px-24">
        <span className="mb-4 block font-headline font-bold uppercase tracking-widest text-primary">
          EPIs & Ferramentas
        </span>
        {/* quem somos */}
        <TypewriterHeading />
        <p className="max-w-2xl font-body text-xl leading-relaxed text-on-surface-variant">
          Desde o início, a Bouwobra atua como parceira de quem precisa de
          segurança, precisão e confiabilidade no ambiente industrial.
        </p>
      </div>
    </section>
  );
}
