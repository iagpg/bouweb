import Image from 'next/image';
import ContactForm from '../components/contact/ContactForm';
import ContactInfoCards from '../components/contact/ContactInfoCards';
import ContactMap from '../components/contact/ContactMap';
import ContactWhatsAppCta from '../components/contact/ContactWhatsAppCta';

export default function ContactPage() {
  return (
    <main className="industrial-grid pt-20">
      <section className="relative flex h-[409px] items-end overflow-hidden md:h-[512px]">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Industrial precision"
            className="object-cover opacity-40"
            data-alt="close-up of industrial machinery components with warm amber lighting and sharp metallic textures in a dark workshop setting"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ0mJ00rRZ8wRJNOsZQfTHF2EsNIGoqUfoNC-ojKvySoUiixuEZDR_btXHKLy19Cjg4GE5UL1r97MPqV7TNMmldDIY_zgAA6nS6jtTNk3pLFxlh9xBprHAJ6DOE-SBlyjIpRK0ndDyTPz95ZXfle61b3Bh0K_bVxhUgz2n8LpUoC5nWOkUAoeRZ9jaeQlWw_6OuGXLOKB_MX5mnvq127fQycf2TLBBRwkwiE_cwUrFVs6AYgJwEAPCtk1sbKP1M3zoMy99RQNHDAI"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent"></div>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pb-12">
          <span className="mb-4 block text-sm font-headline uppercase tracking-[0.2em] text-primary">
            Precision Logistics
          </span>
          <h1 className="font-headline text-5xl font-bold leading-none tracking-tighter text-on-surface md:text-8xl">
            Contato &amp; <br />
            <span className="text-primary">Cotacoes</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-7">
            <ContactForm />
            <ContactWhatsAppCta />
          </div>

          <div className="space-y-8 lg:col-span-5">
            <ContactInfoCards />
            <ContactMap />
          </div>
        </div>
      </section>
    </main>
  );
}
