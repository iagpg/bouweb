export default function ContactMap() {
  return (
    <div className="space-y-4">
      <div className="relative h-[400px] overflow-hidden rounded-lg border border-outline-variant bg-surface-container-low">
        <iframe
          title="Mapa da loja Bouwobra"
          src="https://www.google.com/maps?q=Av%20Campos%20Sales%20146%2C%20Vila%20Nova%2C%20Santos%20-%20SP&z=16&output=embed"
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="flex items-center justify-between rounded-lg bg-zinc-900/50 p-8 backdrop-blur-md md:p-6">
        <span className="text-xs font-headline font-bold uppercase tracking-widest">
          Av Campos Sales 146, Santos - SP
        </span>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Av%20Campos%20Sales%20146%2C%20Vila%20Nova%2C%20Santos%20-%20SP"
          target="_blank"
          rel="noreferrer"
          className="text-xs font-bold uppercase tracking-widest text-primary hover:underline"
        >
          abrir no Google Maps
        </a>
      </div>
    </div>
  );
}
