'use client';

import { CATALOG_HREF } from '@/app/lib/whatsapp';
import Image from 'next/image';

export default function TopBrandPartners() {
  return (
    <section
      id="brands"
      className="mx-auto max-w-screen-2xl scroll-mt-20 px-5 py-20 sm:px-6 sm:py-24"
    >
      <h2 className="mb-10 border-l-4 border-orange-500 pl-4 font-headline text-2xl font-black uppercase leading-tight text-on-background sm:mb-12 sm:text-3xl">
        Principais Parceiros de Marca
      </h2>

      <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-12">
        <div className="group flex flex-col items-center gap-6 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 sm:p-8 md:col-span-8 md:flex-row md:gap-8">
          <div className="flex-1">
            <div className="mb-4 flex items-center gap-2">
              <span className="text-2xl font-black text-red-500">BRACOL</span>
              <span className="h-px flex-1 bg-zinc-800" />
            </div>
            <h3 className="mb-4 font-headline text-xl font-bold leading-tight text-primary-fixed sm:text-2xl">
              Proteção de Calçados Inigualável
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-zinc-400 sm:text-base">
              A Bracol é referência em calçados industriais. Especializada em
              ergonomia avançada e materiais resistentes a impactos, a marca
              oferece a base para a segurança em ambientes extremos.
            </p>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined mt-0.5 text-sm text-orange-500">
                  check_circle
                </span>
                Marca especialista com tradição em produtos que garantem
                segurança a trabalhadores de diversos segmentos.
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined mt-0.5 text-sm text-orange-500">
                  check_circle
                </span>
                Fugimos do comum e do trivial, assim seremos referência no
                segmento.
              </li>
            </ul>
          </div>

          <div className="h-52 w-full overflow-hidden rounded-lg sm:h-64 md:w-64">
            <Image
              src="/bracol_logo.png"
              data-alt="professional detail of a heavy duty safety boot sole with high-grip tread on a rugged industrial surface"
              alt="Bracol safety boot"
              width={500}
              height={500}
              className="h-full w-full scale-105 object-contain grayscale transition-transform duration-500 group-hover:scale-115 group-hover:grayscale-0"
            />
          </div>
        </div>

        <div className="group flex flex-col justify-between gap-8 rounded-xl border border-zinc-800 bg-zinc-900 p-5 sm:p-8 md:col-span-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="text-2xl font-black text-[rgb(0,106,178)]">
                ÂNCORA
              </span>
            </div>
            <h3 className="mb-4 font-headline text-xl font-bold">
              Fixação de precisão
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-zinc-400">
              Líder de mercado em ancoragens químicas e mecânicas. Projetadas
              para garantir a integridade estrutural nos projetos de construção
              mais exigentes.
            </p>
          </div>

          <div className="flex items-center justify-start rounded-lg bg-zinc-800 p-4 transition-colors group-hover:bg-zinc-700 md:justify-end">
            <a
              href={CATALOG_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                Veja nosso catálogo
              </span>
              <span className="material-symbols-outlined text-orange-500">
                arrow_forward
              </span>
            </a>
          </div>
        </div>

        <div className="group flex flex-col items-center gap-6 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 sm:p-8 md:col-span-12 lg:flex-row-reverse lg:gap-8">
          <div className="flex-1">
            <div className="mb-4 flex items-center gap-2">
              <span className="text-2xl font-black text-yellow-400">
                DELTA PLUS
              </span>
              <span className="h-px flex-1 bg-zinc-800" />
            </div>
            <h3 className="mb-4 font-headline text-2xl font-bold leading-tight text-on-background sm:text-3xl">
              Inovação global em EPI
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-zinc-400 sm:text-base">
              Desde proteção respiratória até sistemas de proteção contra
              quedas, a Delta Plus oferece uma gama completa de equipamentos de
              proteção individual projetados para mitigar todos os riscos no
              local de trabalho. Seus laboratórios de pesquisa estão
              constantemente expandindo os limites da tecnologia de segurança.
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
              <div className="rounded bg-zinc-950 p-4 text-center">
                <div className="font-bold text-orange-500">47</div>
                <div className="text-[10px] text-zinc-500">
                  Filiais em 30 países
                </div>
              </div>
              <div className="rounded bg-zinc-950 p-4 text-center">
                <div className="font-bold text-orange-500">17+</div>
                <div className="text-[10px] text-zinc-500">
                  Centros de produção
                </div>
              </div>
              <div className="rounded bg-zinc-950 p-4 text-center">
                <div className="font-bold text-orange-500">+7000</div>
                <div className="text-[10px] text-zinc-500">Referências</div>
              </div>
            </div>
          </div>

          <div className="h-56 w-full overflow-hidden rounded-lg sm:h-80 lg:w-1/3">
            <Image
              src="/deltaplus_logo.png"
              data-alt="industrial safety engineer wearing full PPE gear and goggles looking over technical blueprints in a warehouse"
              alt="Delta Plus PPE"
              width={600}
              height={600}
              className="h-full w-full scale-70 object-contain grayscale transition-transform duration-500 group-hover:scale-80 group-hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
