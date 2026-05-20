import { WHATSAPP_HREF } from '../../lib/whatsapp';

export default function ContactWhatsAppCta() {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-primary/20 bg-secondary-container p-8 transition-all hover:border-primary/40 md:p-12">
      <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-headline font-black uppercase leading-tight text-on-secondary-container md:text-3xl">
            Consulta via Whatsapp <br />
          </h3>
          <p className="mt-2 max-w-sm text-on-secondary-container/70">
            Entre em contato diretamente com nosso departamento de engenharia para obter especificacoes tecnicas e precos rapidamente.
          </p>
        </div>
        <a
          className="flex items-center gap-3 rounded-full bg-white px-8 py-4 font-headline font-bold uppercase tracking-tight text-black shadow-xl transition-transform group-hover:scale-105"
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noreferrer"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            chat
          </span>
          Solicitar Orcamento via WhatsApp
        </a>
      </div>
      <div className="absolute -right-12 -bottom-12 opacity-10 transition-transform duration-700 group-hover:scale-110">
        <span className="material-symbols-outlined text-[12rem]">construction</span>
      </div>
    </div>
  );
}
