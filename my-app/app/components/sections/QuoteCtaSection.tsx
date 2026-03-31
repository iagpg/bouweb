'use client';

import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export default function QuoteCtaSection() {
  return (
    <section className="py-24 px-8 relative overflow-hidden">
      <div className="container mx-auto bg-primary rounded-2xl p-12 md:p-20 flex flex-col items-center text-center relative z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 rounded-2xl"></div>

        <h2 className="text-4xl md:text-6xl font-headline font-bold text-on-primary-container tracking-tighter mb-6 relative z-10">
          Pronto para elevar o nível <br />
          da sua segurança?
        </h2>

        <p className="text-on-primary-container/80 text-xl max-w-2xl mb-10 font-medium relative z-10">
          Fale agora com nosso time comercial e receba um orçamento personalizado em minutos.
        </p>

        <Link
          href="#"
          className="bg-surface text-white px-12 py-5 rounded-md font-headline font-bold uppercase tracking-widest text-lg flex items-center gap-4 hover:bg-surface-bright transition-all shadow-2xl relative z-10"
        >
          <FaWhatsapp className="text-4xl text-green-500" />
          Solicitar via WhatsApp
        </Link>

        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[150px]"></div>
      </div>
    </section>
  );
}
