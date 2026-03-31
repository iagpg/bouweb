'use client';

import Image from 'next/image';

export default function TopBrandPartners() {
  return (
    <section className="px-6 py-24 max-w-screen-2xl mx-auto">
      <h2 className="font-headline text-3xl font-black text-on-background mb-12 uppercase border-l-4 border-orange-500 pl-4">
        Principais Parceiros de Marca
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 bg-zinc-900/50 border border-zinc-800 p-8 rounded-xl flex flex-col md:flex-row gap-8 items-center group">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-orange-500 font-black text-2xl">BRACOL</span>
              <span className="h-px flex-1 bg-zinc-800" />
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4 text-primary-fixed">Proteção de Calçados Inigualável</h3>
            <p className="text-zinc-400 leading-relaxed mb-6">
             A Bracol é referência em calçados industriais. Especializada em ergonomia avançada e materiais resistentes a impactos, a marca oferece a base para a segurança em ambientes extremos.
            </p>
            <ul className="text-zinc-500 text-sm space-y-2">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-orange-500 text-sm">check_circle</span>
                Norma principal
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-orange-500 text-sm">check_circle</span>
                2 norma principal
              </li>
            </ul>
          </div>
          <div className="w-full md:w-64 h-64 overflow-hidden rounded-lg">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqFiJEKfePUR06Fl0qUefLp_GOG7hgGBem0GvqrRHknk40Zc4bdPLArnVnXQ-V7xm0U4bxRbW8cOIKw--zNq_GsgNl66DEBaiwzwjNPplcqAD5Qwrr6Si5XTVnPBHZnyPZRkh4nIibBb-MunfaRDRQw3BEFzUFoUO_hPHKAGSOEpiWLZbGWox62X_LQfMAVqgMd-PKhM9yVJUEIAEyt4sjsUr4XS4pmBdEysHVOwzGnSb-4PvU7fD5SJ70Q_0Eg1xmepT6480N7xQ"
              data-alt="professional detail of a heavy duty safety boot sole with high-grip tread on a rugged industrial surface"
              alt="Bracol safety boot"
              width={500}
              height={500}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
            />
          </div>
        </div>

        <div className="md:col-span-4 bg-zinc-900 border border-zinc-800 p-8 rounded-xl flex flex-col justify-between group">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-orange-500 font-black text-2xl">ÂNCORA</span>
            </div>
            <h3 className="font-headline text-xl font-bold mb-4">Fixação de precisão</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Líder de mercado em ancoragens químicas e mecânicas. Projetadas para garantir a integridade estrutural nos projetos de construção mais exigentes.            </p>
          </div>
          <div className="bg-zinc-800 p-4 rounded-lg flex items-center justify-between group-hover:bg-zinc-700 transition-colors">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">View Catalog</span>
            <span className="material-symbols-outlined text-orange-500">arrow_forward</span>
          </div>
        </div>

        <div className="md:col-span-12 bg-zinc-900/50 border border-zinc-800 p-8 rounded-xl flex flex-col lg:flex-row-reverse gap-8 items-center group">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-orange-500 font-black text-2xl">DELTA PLUS</span>
              <span className="h-px flex-1 bg-zinc-800" />
            </div>
            <h3 className="font-headline text-3xl font-bold mb-4 text-on-background">Inovação global em EPI</h3>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Desde proteção respiratória até sistemas de proteção contra quedas, a Delta Plus oferece uma gama completa de equipamentos de proteção individual projetados para mitigar todos os riscos no local de trabalho. Seus laboratórios de pesquisa estão constantemente expandindo os limites da tecnologia de segurança.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-zinc-950 rounded">
                <div className="text-orange-500 font-bold">140+</div>
                <div className="text-[10px] text-zinc-500">COUNTRIES</div>
              </div>
              <div className="text-center p-4 bg-zinc-950 rounded">
                <div className="text-orange-500 font-bold">1500+</div>
                <div className="text-[10px] text-zinc-500">PRODUCTS</div>
              </div>
              <div className="text-center p-4 bg-zinc-950 rounded">
                <div className="text-orange-500 font-bold">40+</div>
                <div className="text-[10px] text-zinc-500">YEARS</div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 h-80 overflow-hidden rounded-lg">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrUMQuUYKoe8ulvmrhPVY1uAbCuwkiUQGXfCnsuGHbG6OEV8xbXWq-fZKbFHEXO0GVmy6iaL0eo9iGNgfcDmVZbxdb4R2nQS8FCZYCLn5Oi6NJOi2ybhY9Q4orh7JPq_eazLL-jUjNP9sQ5xarjSH4GP8me9ZU6NMH_Q_ppyfTQXxNV0Sfd_naG7OXdsN9e93raWxAmRoSWkJvhr34nP7trkHPnPXO6ym47iffRZqiJ2vY7lzt1q1FKk4kKAMpQTnMtkDyPGssvd8"
              data-alt="industrial safety engineer wearing full PPE gear and goggles looking over technical blueprints in a warehouse"
              alt="Delta Plus PPE"
              width={600}
              height={600}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
