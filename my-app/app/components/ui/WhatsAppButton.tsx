import { WHATSAPP_HREF } from "../../lib/whatsapp";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex h-15 w-15 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_rgba(37,211,102,0.35)] transition-transform duration-200 hover:scale-105 hover:bg-[#20ba59] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 sm:right-6 sm:bottom-6"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-7 w-7 fill-current"
      >
        <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.59 2 2.15 6.43 2.15 11.88c0 1.74.45 3.44 1.31 4.94L2 22l5.34-1.4a9.8 9.8 0 0 0 4.68 1.19h.01c5.44 0 9.87-4.43 9.87-9.88a9.8 9.8 0 0 0-2.85-7Zm-7.02 15.2h-.01a8.17 8.17 0 0 1-4.16-1.14l-.3-.18-3.17.83.85-3.09-.2-.32a8.16 8.16 0 0 1-1.26-4.33c0-4.5 3.67-8.17 8.19-8.17 2.18 0 4.23.85 5.77 2.39a8.1 8.1 0 0 1 2.4 5.78c0 4.5-3.68 8.17-8.18 8.17Zm4.48-6.11c-.24-.12-1.41-.69-1.63-.77-.22-.08-.38-.12-.54.12-.16.24-.61.77-.75.92-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.4-1.33-1.64-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.33.98 2.49.12.16 1.69 2.58 4.09 3.62.57.25 1.02.39 1.37.5.58.18 1.11.15 1.53.09.47-.07 1.41-.58 1.61-1.14.2-.56.2-1.05.14-1.14-.06-.1-.22-.16-.46-.28Z" />
      </svg>
      <span className="sr-only">WhatsApp</span>
    </a>
  );
}
