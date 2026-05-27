import Image from 'next/image';
import ContactForm from '../components/contact/ContactForm';
import ContactInfoCards from '../components/contact/ContactInfoCards';
import ContactMap from '../components/contact/ContactMap';
import ContactWhatsAppCta from '../components/contact/ContactWhatsAppCta';

export default function ContactPage() {
  return (
    <main className="industrial-grid min-h-screen">
      <section className="relative flex h-[409px] items-end overflow-hidden md:h-[512px]">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Industrial precision"
            className="object-cover opacity-90"
            data-alt="close-up of industrial machinery components with warm amber lighting and sharp metallic textures in a dark workshop setting"
            fill
            src="/contact-us.png"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent"></div>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pb-12">
          <span className="mb-4 block text-sm font-headline uppercase tracking-[0.2em] text-primary">

          </span>
          <h1 className="font-body text-5xl font-bold leading-none tracking-tighter text-on-surface md:text-8xl">
            Contato &amp; <br />
            <span className="text-primary">Cotações</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-7">
            <ContactForm />
          </div>
          <div className="space-y-8 lg:col-span-5">
            <ContactInfoCards />
            {/* <ContactMap /> */}
          </div>
        </div >
        <div className="mt-16">
          <ContactWhatsAppCta />
        </div>

      </section>
      <section className="max-w-7xl mx-auto px-8 pb-24">
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface uppercase mb-12 tracking-tighter">Conheça nossas unidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-primary p-8 md:p-12 flex flex-col justify-between min-h-80 rounded-xl">
            <div>
              <h3 className="text-4xl font-headline font-black text-black uppercase tracking-tighter mb-4">Matriz</h3>
              <p className="text-xl  font-headline font-medium text-black/80 leading-snug">
                 Rua Caribas 305, Aviação, Praia Grande - SP
              </p>
            </div>
           <div className="flex items-center rounded-lg bg-zinc-900 p-4 backdrop-blur-md md:p-6">
              <span className="px-5 material-symbols-outlined text-primary">location_On</span>

              <a
                href="https://maps.app.goo.gl/1oy5a8WP33zEYeR49"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold uppercase tracking-widest text-primary hover:underline"
              >
                abrir no Google Maps
              </a>
            </div>
          </div>
          <div className="bg-primary p-8 md:p-12 flex flex-col justify-between min-h-80 rounded-xl">
            <div>
              <h3 className="text-4xl font-headline font-black text-black uppercase tracking-tighter mb-4">Loja Santos</h3>
              <p className="text-xl  font-headline font-medium text-black/80 leading-snug">
                Av Campos Sales 146, Santos - SP
              </p>
            </div>
            <div className="flex items-center rounded-lg bg-zinc-900 p-4 backdrop-blur-md md:p-6">
              <span className="px-5 material-symbols-outlined text-primary">location_On</span>

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
        </div>
      </section>
    </main>
  );
}
