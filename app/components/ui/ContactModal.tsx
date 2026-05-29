'use client';

import Image from 'next/image';
import { useEffect } from 'react';

type ContactModalProps = {
  onClose: () => void;
};

const contacts = [
  {
    name: 'João Barros',
    role: 'Vendas',
    image:
      '/contacts/joao.png',
    whatsapp: "https://wa.me/5513974126760?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es",

  },
  {
    name: 'Matheus Gama',
    role: 'Vendas',
    image:
      '/contacts/matheus.png',
    whatsapp: "https://wa.me/5513991828699?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es",
  },
  {
    name: 'Patrícia Gomes',
    role: 'Vendas Externas',
    image:
      '/contacts/patricia_gomes.jpeg',

    whatsapp: "https://wa.me/+5513997022669?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es",
  }

  // {
  //   name: 'Patricia Luna',
  //   role:'Compras',
  //   image:
  //     '/contacts/patricia_luna.png',
  //   whatsapp: "https://wa.me/+5513991265194?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es",
  // }
];

export default function ContactModal({ onClose }: ContactModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/60 px-3 py-3 backdrop-blur-md sm:items-center sm:px-5 sm:py-8"
      role="dialog"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[calc(100dvh-24px)] w-full max-w-5xl flex-col rounded-xl border border-outline-variant/20 bg-surface/95 shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:max-h-[calc(100dvh-64px)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          aria-label="Fechar modal"
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant/30 bg-surface/90 text-neutral-300 transition-colors hover:border-primary/60 hover:text-primary focus:outline-none focus:ring-4 focus:ring-primary/20 sm:right-4 sm:top-4"
          type="button"
          onClick={onClose}
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        <div className="shrink-0 px-5 pb-5 pt-6 pr-14 sm:px-6 sm:pb-6 sm:pt-7 md:px-8">
          <p className="mb-2 font-label text-xs uppercase tracking-widest text-primary">
            Atendimento
          </p>
          <h2 className="font-headline text-2xl font-bold uppercase leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
            Com quem você gostaria de falar?
          </h2>
        </div>
        {/* modal */}
        <div className="grid flex-1 grid-cols-1 gap-4 overflow-y-auto px-5 pb-5 sm:gap-6 sm:px-6 sm:pb-6 md:grid-cols-3 md:px-8 md:pb-8">
          {contacts.map((contact) => (
            <div
              className="group flex flex-col items-center rounded-xl border border-outline-variant/20 bg-surface-container p-5 text-center transition-all hover:border-primary/50 sm:p-6"
              key={contact.name}
            >
              <div className="relative mb-4 h-20 w-20 overflow-hidden rounded-full border-2 border-primary/20 sm:h-24 sm:w-24">
                <Image
                  alt={contact.name}
                  className="object-cover"
                  fill
                  sizes="(min-width: 640px) 96px, 80px"
                  src={contact.image}
                />
              </div>
              <h3 className="font-headline text-base font-bold text-white sm:text-lg">
                {contact.name}
              </h3>
              <p className="mb-5 font-label text-[11px] uppercase tracking-widest text-primary sm:mb-6 sm:text-xs">
                {contact.role}
              </p>
              <a
                className="flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-3 py-3 font-headline text-xs font-bold uppercase tracking-wider text-on-primary transition-all hover:bg-primary-dim"
                href={contact.whatsapp}
                rel="noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                Iniciar Conversa
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
