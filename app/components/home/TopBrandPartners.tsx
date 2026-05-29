'use client';

import { CATALOG_HREF } from '@/app/lib/whatsapp';
import Image from 'next/image';

export default function TopBrandPartners() {
  return (
    <section id="brands" className="scroll-mt-20 px-6 py-24 max-w-screen-2xl mx-auto">
      <h2 className="font-headline text-3xl font-black text-on-background mb-12 uppercase border-l-4 border-orange-500 pl-4">
        Principais Parceiros de Marca
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 bg-zinc-900/50 border border-zinc-800 p-8 rounded-xl flex flex-col md:flex-row gap-8 items-center group">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-red-500 font-black text-2xl">BRACOL</span>
              <span className="h-px flex-1 bg-zinc-800" />
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4 text-primary-fixed">Proteção de Calçados Inigualável</h3>
            <p className="text-zinc-400 leading-relaxed mb-6">
             A Bracol é referência em calçados industriais. Especializada em ergonomia avançada e materiais resistentes a impactos, a marca oferece a base para a segurança em ambientes extremos.
            </p>
            <ul className="text-zinc-500 text-sm space-y-2">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-orange-500 text-sm">check_circle</span>
                Marca especialista com tradição em produtos que garantem segurança a trabalhadores de diversos segmentos.
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-orange-500 text-sm">check_circle</span>
               Fugimos do comum e do trivial, assim seremos referência no segmento.
              </li>
            </ul>
          </div>
          <div className="w-full md:w-64 h-64 overflow-hidden rounded-lg">
            <Image
              src="/bracol_logo.png"
              data-alt="professional detail of a heavy duty safety boot sole with high-grip tread on a rugged industrial surface"
              alt="Bracol safety boot"
              width={500}
              height={500}
              className="scale-105 w-full h-full object-contain group-hover:scale-115 transition-transform duration-500 grayscale group-hover:grayscale-0"
            />
          </div>
        </div>

        <div className="md:col-span-4 bg-zinc-900 border border-zinc-800 p-8 rounded-xl flex flex-col justify-between group">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[rgb(0,106,178)] font-black text-2xl">ÂNCORA</span>
            </div>
            <h3 className="font-headline text-xl font-bold mb-4">Fixação de precisão</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Líder de mercado em ancoragens químicas e mecânicas. Projetadas para garantir a integridade estrutural nos projetos de construção mais exigentes.            </p>
          </div>
          <div className="bg-zinc-800 p-4 rounded-lg flex items-center justify-end group-hover:bg-zinc-700 transition-colors">
            <a href={CATALOG_HREF} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">

            <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">Veja nosso catálogo</span>
            <span className="material-symbols-outlined text-orange-500">arrow_forward</span>
            </a>
          </div>
        </div>

        <div className="md:col-span-12 bg-zinc-900/50 border border-zinc-800 p-8 rounded-xl flex flex-col lg:flex-row-reverse gap-8 items-center group">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-400 font-black text-2xl">DELTA PLUS</span>
              <span className="h-px flex-1 bg-zinc-800" />
            </div>
            <h3 className="font-headline text-3xl font-bold mb-4 text-on-background">Inovação global em EPI</h3>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Desde proteção respiratória até sistemas de proteção contra quedas, a Delta Plus oferece uma gama completa de equipamentos de proteção individual projetados para mitigar todos os riscos no local de trabalho. Seus laboratórios de pesquisa estão constantemente expandindo os limites da tecnologia de segurança.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-zinc-950 rounded">
                <div className="text-orange-500 font-bold">47</div>
                <div className="text-[10px] text-zinc-500">Filiais em 30 países</div>
              </div>
              <div className="text-center p-4 bg-zinc-950 rounded">
                <div className="text-orange-500 font-bold">17+</div>
                <div className="text-[10px] text-zinc-500">Centros de produção</div>
              </div>
              <div className="text-center p-4 bg-zinc-950 rounded">
                <div className="text-orange-500 font-bold">+7000</div>
                <div className="text-[10px] text-zinc-500">Referências</div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 h-80 overflow-hidden rounded-lg">
            <Image
              src="/deltaplus_logo.png"  
              data-alt="industrial safety engineer wearing full PPE gear and goggles looking over technical blueprints in a warehouse"
              alt="Delta Plus PPE"
              width={600}
              height={600}
              className=" scale-70 w-full h-full object-contain group-hover:scale-80 transition-transform duration-500 grayscale group-hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
