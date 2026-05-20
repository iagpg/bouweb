'use client';

import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_HREF } from '../../lib/whatsapp';

export default function QuoteCtaSection() {
  return (
    <section className="relative overflow-hidden px-8 py-24">
      <div className="container relative z-10 mx-auto flex flex-col items-center rounded-2xl bg-primary p-12 text-center md:p-20">
        <div className="absolute top-0 left-0 h-full w-full rounded-2xl bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

        <h2 className="relative z-10 mb-6 font-headline text-4xl font-bold tracking-tighter text-on-primary-container md:text-6xl">
          Pronto para elevar o nivel <br />
          da sua seguranca?
        </h2>

        <p className="relative z-10 mb-10 max-w-2xl text-xl font-medium text-on-primary-container/80">
          Fale agora com nosso time comercial e receba um orcamento personalizado em minutos.
        </p>

        <Link
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noreferrer"
          className="relative z-10 flex items-center gap-4 rounded-md bg-surface px-12 py-5 text-lg font-headline font-bold uppercase tracking-widest text-white shadow-2xl transition-all hover:bg-surface-bright"
        >
          <FaWhatsapp className="text-4xl text-green-500" />
          Solicitar via WhatsApp
        </Link>

        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary/10 blur-[150px]"></div>
      </div>
    </section>
  );
}
