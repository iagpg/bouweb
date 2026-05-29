import Link from 'next/link';

const quickLinks = [
  { href: '/', label: 'Home', icon: 'home' },
  { href: '/#brands', label: 'Brands', icon: 'verified' },
  { href: '/contact', label: 'Contato', icon: 'support_agent' },
];

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-surface px-6 py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,175,44,0.18),transparent_32%),linear-gradient(135deg,rgba(255,175,44,0.08)_0_1px,transparent_1px_22px)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative">
          <p className="mb-5 font-headline text-sm font-bold uppercase tracking-[0.28em] text-primary">
            Erro 404
          </p>
          <h1 className="max-w-4xl font-headline text-5xl font-black uppercase leading-[0.95] tracking-tight text-on-surface md:text-7xl">
            P&aacute;gina n&atilde;o encontrada
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-on-surface-variant md:text-lg">
            O endere&ccedil;o pode ter mudado ou n&atilde;o existe mais. Volte para uma
            &aacute;rea ativa da Bouwobra e siga navegando.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-7 font-headline text-sm font-bold uppercase tracking-wider text-on-primary shadow-[0_10px_30px_-10px_rgba(254,174,43,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dim"
            >
              Voltar para Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md border border-primary/50 px-7 font-headline text-sm font-bold uppercase tracking-wider text-primary transition-colors hover:border-primary hover:bg-primary/10"
            >
              Falar com equipe
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute inset-6 rounded-full border border-primary/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-lg border border-outline-variant bg-surface-container/80 p-6 shadow-[0_24px_80px_-40px_rgba(255,175,44,0.5)] backdrop-blur">
            <div className="mb-8 flex items-center justify-between border-b border-outline-variant pb-5">
              <span className="font-headline text-xs font-bold uppercase tracking-[0.22em] text-on-surface-variant">
                Navega&ccedil;&atilde;o
              </span>
              <span className="material-symbols-outlined text-primary">construction</span>
            </div>

            <div className="flex items-end gap-4">
              <span className="font-headline text-[7rem] font-black leading-none tracking-tight text-primary md:text-[10rem]">
                404
              </span>
              <span className="mb-5 h-16 w-2 rounded-full bg-primary" />
            </div>

            <div className="mt-8 grid gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex min-h-14 items-center justify-between rounded-md border border-outline-variant bg-surface-container-high px-4 transition-colors hover:border-primary/60 hover:bg-surface-container-highest"
                >
                  <span className="flex items-center gap-3 font-headline text-sm font-bold uppercase tracking-wider text-on-surface">
                    <span className="material-symbols-outlined text-primary">{link.icon}</span>
                    {link.label}
                  </span>
                  <span className="material-symbols-outlined text-on-surface-variant transition-transform group-hover:translate-x-1 group-hover:text-primary">
                    arrow_forward
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
