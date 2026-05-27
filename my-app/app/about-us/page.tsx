import Image from 'next/image';
import ScrollNumberFlow from '../components/ui/ScrollNumberFlow';

const heroImage =
  '/banner_home.png';

export default function AboutUsPage() {
  return (
    <>
      <section className="relative flex min-h-[640px] items-center overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Planta industrial e engrenagens em ambiente escuro com detalhes em laranja"
            className="object-cover opacity-40 grayscale transition-all duration-700 hover:grayscale-0"
            src={heroImage}
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl px-8 md:px-24">
          <span className="mb-4 block font-headline font-bold uppercase tracking-widest text-primary">
           EPIs & Ferramentas
          </span>
          <h1 className="mb-8 font-headline text-6xl font-bold leading-[0.9] tracking-tighter text-white md:text-8xl">
            QUEM <br />
            <span className="text-primary text-glow">SOMOS</span>
          </h1>
          <p className="max-w-2xl font-body text-xl leading-relaxed text-on-surface-variant">
            Desde o início, a Bouwobra atua como parceira de quem precisa de
            segurança, precisão e confiabilidade no ambiente industrial.
          </p>
        </div>
      </section>

      <section className="bg-surface px-8 py-24 md:px-24">
        <div className="grid auto-rows-[300px] grid-cols-1 gap-6 md:grid-cols-12">
          <div className="group relative flex flex-col justify-end overflow-hidden border border-outline-variant/10 bg-surface-container-low p-10 md:col-span-8">
        
            <h3 className="mb-4 font-headline text-3xl font-bold text-white">
              Nossa História
            </h3>
            <p className="max-w-xl leading-relaxed text-on-surface-variant">
              Nascemos com foco em soluções industriais confiáveis. Hoje,
              conectamos empresas a equipamentos, EPIs e ferramentas preparados
              para as exigências reais do canteiro e da operação.
            </p>
          </div>

          <div className="group flex flex-col justify-between bg-primary p-10 md:col-span-4">
            <span
              className="material-symbols-outlined text-4xl text-on-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              target
            </span>
            <div>
              <h3 className="mb-2 font-headline text-3xl font-bold text-on-primary">
                Missão
              </h3>
              <p className="font-medium text-on-primary/80">
                Fornecer soluções industriais resistentes que ajudem equipes a
                trabalhar com mais segurança, velocidade e precisão.
              </p>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 md:col-span-12 md:grid-cols-3">

       
          <div className="flex min-h-[220px] w-full flex-col items-center justify-center border border-outline-variant/10 bg-surface-container-high p-8 text-center">
            <span className="mb-2 font-headline text-5xl font-bold text-primary">
                 <ScrollNumberFlow value={3} />+
            </span>
            <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
              Anos de Experiência
            </span>
          </div>

            <div className="flex min-h-[220px] w-full flex-col items-center justify-center border border-outline-variant/10 bg-surface-container-high p-8 text-center">
            <span className="mb-2 font-headline text-5xl font-bold text-primary">
                 <ScrollNumberFlow value={239} />
            </span>
            <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
              Empresas atendidas
            </span>
          </div>

        

          <div className="flex min-h-[220px] w-full flex-col items-center justify-center border border-outline-variant/10 bg-surface-container-high p-8 text-center">
            <span className="mb-2 font-headline text-5xl font-bold text-primary">
                 <ScrollNumberFlow  value={102854} />
            </span>
            <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
             Vendas Concluídas
            </span>
          </div>
        </div>
       </div>
      </section>

      <section className="bg-surface-container-low py-24">
        <div className="mb-16 px-8 md:px-24">
          <h2 className="font-headline text-4xl font-bold uppercase tracking-tight text-white">
            Nossos <span className="text-primary">Valores</span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-primary" />
        </div>

        <div className="grid grid-cols-1 border-y border-outline-variant/20 md:grid-cols-3">
          <div className="group border-outline-variant/20 p-16 transition-colors hover:bg-surface md:border-r">
            <span className="material-symbols-outlined mb-8 block text-5xl text-primary transition-transform group-hover:scale-110">
              gavel
            </span>
            <h4 className="mb-4 font-headline text-2xl font-bold uppercase text-white">
              Integridade
            </h4>
            <p className="leading-relaxed text-on-surface-variant">
              Mantemos transparência em cada negociação, especificação técnica
              e compromisso assumido.
            </p>
          </div>

          <div className="group border-outline-variant/20 p-16 transition-colors hover:bg-surface md:border-r">
            <span className="material-symbols-outlined mb-8 block text-5xl text-primary transition-transform group-hover:scale-110">
              verified
            </span>
            <h4 className="mb-4 font-headline text-2xl font-bold uppercase text-white">
              Qualidade
            </h4>
            <p className="leading-relaxed text-on-surface-variant">
              Trabalhamos com produtos selecionados para suportar rotinas
              intensas e padrões industriais exigentes.
            </p>
          </div>

          <div className="group p-16 transition-colors hover:bg-surface">
            <span className="material-symbols-outlined mb-8 block text-5xl text-primary transition-transform group-hover:scale-110">
              health_and_safety
            </span>
            <h4 className="mb-4 font-headline text-2xl font-bold uppercase text-white">
              Segurança
            </h4>
            <p className="leading-relaxed text-on-surface-variant">
              Acreditamos que desempenho começa com proteção adequada para cada
              pessoa envolvida na operação.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center gap-20 px-8 py-32 md:flex-row md:px-24">
        <div className="flex-1 space-y-12">
          <h2 className="font-headline text-5xl font-extrabold uppercase leading-none tracking-tighter text-white">
            Projetado para <br />
            <span className="text-primary">Performance</span>
          </h2>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-surface-container-highest text-primary">
                <span className="material-symbols-outlined">engineering</span>
              </div>
              <div>
                <h5 className="mb-1 font-headline text-xl font-bold uppercase text-white">
                  Conhecimento Técnico
                </h5>
                <p className="text-sm text-on-surface-variant">
                  Entendemos as demandas práticas de obras, manutenção,
                  segurança e operações industriais.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-surface-container-highest text-primary">
                <span className="material-symbols-outlined">local_shipping</span>
              </div>
              <div>
                <h5 className="mb-1 font-headline text-xl font-bold uppercase text-white">
                  Agilidade na Entrega
                </h5>
                <p className="text-sm text-on-surface-variant">
                  Priorizamos disponibilidade, resposta rápida e logística
                  alinhada à urgência do cliente.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-surface-container-highest text-primary">
                <span className="material-symbols-outlined">stars</span>
              </div>
              <div>
                <h5 className="mb-1 font-headline text-xl font-bold uppercase text-white">
                  Portfólio Selecionado
                </h5>
                <p className="text-sm text-on-surface-variant">
                  Reunimos marcas e soluções pensadas para durabilidade,
                  segurança e desempenho consistente.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex-1">
          <div className="relative aspect-square overflow-hidden rounded-xl bg-surface-container-low p-4">
            <div className="pointer-events-none absolute inset-0 m-4 border-[20px] border-primary/5" />
            <Image
              alt="Homem com braços cruzados parado"
              className="rounded-lg object-cover shadow-2xl"
              src="/about-us.png"
              fill
              sizes="(min-width: 768px) 50vw, 180vw"
            />

          </div>
            <div className="absolute -right-12 top-6 z-10 max-w-[240px] border border-primary/30 bg-black/75 p-5 shadow-2xl backdrop-blur-md">
              <p className="mb-1 font-headline text-xl font-bold leading-tight text-white">
                Carlos Forgnone
              </p>
              <p className="font-label text-xs font-bold uppercase tracking-widest text-primary">
                Sócio-Diretor Operacional
              </p>
            </div>

          <div className="absolute -bottom-10 -left-10 hidden max-w-xs border border-primary/20 bg-surface-container-highest p-8 shadow-2xl backdrop-blur-md md:block">
            <p className="mb-2 font-headline text-lg font-bold italic text-white">
              &quot;Nosso compromisso é garantir que cada obra, empresa e profissional tenha acesso aos EPIs e ferramentas certas para trabalhar com mais segurança, eficiência e confiança.&quot;
            </p>
            
          </div>
        </div>
      </section>
    </>
  );
}
