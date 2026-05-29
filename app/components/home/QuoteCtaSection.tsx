'use client';

import { FaWhatsapp } from 'react-icons/fa';
import ContactModalTrigger from '../ui/ContactModalTrigger';

export default function QuoteCtaSection() {
  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-24">
      <div className="container relative z-10 mx-auto flex flex-col items-center overflow-hidden rounded-xl bg-primary p-6 text-center sm:p-10 md:p-20">
        <div className="animate-diagonal-parallax absolute left-0 top-0 h-full w-full scale-150 rounded-xl bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

        <h2 className="relative z-10 mb-5 font-headline text-3xl font-bold leading-tight tracking-tighter text-on-primary-container sm:text-4xl md:mb-6 md:text-6xl">
          Pronto para elevar o nível <br />
          da sua segurança?
        </h2>

        <p className="relative z-10 mb-8 max-w-2xl text-base font-medium leading-relaxed text-on-primary-container/80 sm:text-lg md:mb-10 md:text-xl">
          Fale agora com nosso time comercial e receba um orçamento
          personalizado em minutos.
        </p>

        <ContactModalTrigger className="relative z-10 flex w-full max-w-sm items-center justify-center gap-3 rounded-md bg-surface px-5 py-4 font-headline text-sm font-bold uppercase tracking-widest text-white shadow-2xl transition-all hover:bg-surface-bright sm:w-auto sm:max-w-none sm:gap-4 sm:px-12 sm:py-5 sm:text-lg">
          <FaWhatsapp className="text-3xl text-green-500 sm:text-4xl" />
          Solicitar via WhatsApp
        </ContactModalTrigger>

        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary/10 blur-[150px]"></div>
      </div>
    </section>
  );
}
