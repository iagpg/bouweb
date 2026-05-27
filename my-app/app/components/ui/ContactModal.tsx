'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { WHATSAPP_HREF } from '../../lib/whatsapp';

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
      '/contacts/patricia_gomes.png',

    whatsapp: "https://wa.me/+5513997022669?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es",
  },
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
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 px-5 py-8 backdrop-blur-md"
      role="dialog"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl rounded-xl border border-outline-variant/20 bg-surface/95 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] md:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          aria-label="Fechar modal"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant/30 text-neutral-300 transition-colors hover:border-primary/60 hover:text-primary focus:outline-none focus:ring-4 focus:ring-primary/20"
          type="button"
          onClick={onClose}
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        <div className="mb-8 pr-12">
          <p className="mb-2 font-label text-xs uppercase tracking-widest text-primary">
            Atendimento
          </p>
          <h2 className="font-headline text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
            Com quem você gostaria de falar?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {contacts.map((contact) => (
            <div
              className="group flex flex-col items-center rounded-xl border border-outline-variant/20 bg-surface-container p-6 text-center transition-all hover:border-primary/50"
              key={contact.name}
            >
              <div className="relative mb-4 h-24 w-24 overflow-hidden rounded-full border-2 border-primary/20">
                <Image
                  alt={contact.name}
                  className="object-cover"
                  fill
                  sizes="96px"
                  src={contact.image}
                />
              </div>
              <h3 className="font-headline text-lg font-bold text-white">
                {contact.name}
              </h3>
              <p className="mb-6 font-label text-xs uppercase tracking-widest text-primary">
                {contact.role}
              </p>
              <a
                className="flex w-full items-center justify-center gap-2 rounded-md bg-primary py-3 font-headline text-xs font-bold uppercase tracking-wider text-on-primary transition-all hover:bg-primary-dim"
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
