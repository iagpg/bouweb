'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CATALOG_HREF } from '@/app/lib/whatsapp';
import ShimmerButton from '../ui/ShimmerButton';

export default function TopNavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const isContact = pathname === '/contact';
  const isAboutUs = pathname === '/about-us';

  const [hash, setHash] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isBrands = pathname === '/' && hash === '#brands';
  const isHome = pathname === '/' && !isBrands;

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const pendingScrollTarget = window.sessionStorage.getItem('pendingScrollTarget');

    if (pathname === '/' && pendingScrollTarget) {
      window.sessionStorage.removeItem('pendingScrollTarget');
      window.history.replaceState(null, '', `/#${pendingScrollTarget}`);

      window.requestAnimationFrame(() => {
        document.getElementById(pendingScrollTarget)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });
    }

    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [pathname]);

  const scrollToBrands = () => {
    const brandsSection = document.getElementById('brands');

    if (!brandsSection) return;

    window.history.pushState(null, '', '/#brands');
    setHash('#brands');
    brandsSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleBrandsClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsMenuOpen(false);

    if (pathname === '/') {
      scrollToBrands();
      return;
    }

    window.sessionStorage.setItem('pendingScrollTarget', 'brands');
    router.push('/');
  };

  const navLinkClass = (isActive = false) =>
    [
      'relative pb-1 transition-colors',
      isActive
        ? 'text-orange-400 hover:text-orange-300'
        : 'text-neutral-400 hover:text-white',
    ].join(' ');

  const mobileNavLinkClass = (isActive = false) =>
    [
      'flex min-h-12 items-center border-b border-white/10 px-6 font-headline text-sm uppercase tracking-tight transition-colors',
      isActive
        ? 'bg-orange-500/10 text-orange-300'
        : 'text-neutral-200 hover:bg-white/5 hover:text-white',
    ].join(' ');

  const activeLine = (
    <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left animate-[nav-active-line_500ms_ease-out_both] bg-orange-500" />
  );

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-neutral-900/90 shadow-[0px_40px_40px_-15px_rgba(254,174,43,0.04)] backdrop-blur-md md:border-b-0 md:bg-neutral-900/80">
      <style>
        {`
          @keyframes nav-active-line {
            from { transform: scaleX(0); opacity: 0; }
            to { transform: scaleX(1); opacity: 1; }
          }
        `}
      </style>

      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 md:grid md:h-20 md:grid-cols-[160px_1fr_160px] md:px-8">
        <Link
          href="/"
          className="relative block h-12 w-28 shrink-0 md:mt-3 md:h-15"
          onClick={() => setHash('/')}
        >
          <Image
            src="/bouw_logo.svg"
            alt="Bouwobra"
            fill
            className="scale-200 object-contain object-center md:scale-175 md:object-left"
            priority
          />
        </Link>

        <div className="hidden items-center justify-center gap-8 font-headline text-sm uppercase tracking-tight md:flex">
          <Link href="/" className={navLinkClass(isHome)} onClick={() => setHash('/')}>
            Home
            {isHome && activeLine}
          </Link>

          <Link href="/about-us" className={navLinkClass(isAboutUs)}>
            Sobre Nós
            {isAboutUs && activeLine}
          </Link>

          <Link
            href="/#brands"
            className={navLinkClass(isBrands)}
            onClick={handleBrandsClick}
            scroll={false}
          >
            Brands
            {isBrands && activeLine}
          </Link>

          <Link href="/contact" className={navLinkClass(isContact)}>
            Contato
            {isContact && activeLine}
          </Link>
        </div>

        <div className="hidden justify-end md:flex">
          <a href={CATALOG_HREF} target="_blank" rel="noopener noreferrer">
            <ShimmerButton className="h-10 px-7 py-3 text-sm">
              Catálogo
            </ShimmerButton>
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/10 text-neutral-100 transition-colors hover:border-orange-400/60 hover:text-orange-300 md:hidden"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className="material-symbols-outlined text-3xl">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-white/10 bg-neutral-950/95 transition-[max-height,opacity] duration-300 md:hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-4">
          <Link
            href="/"
            className={mobileNavLinkClass(isHome)}
            onClick={() => {
              setHash('/');
              setIsMenuOpen(false);
            }}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className={mobileNavLinkClass(isAboutUs)}
            onClick={() => setIsMenuOpen(false)}
          >
            Sobre Nós
          </Link>
          <Link
            href="/#brands"
            className={mobileNavLinkClass(isBrands)}
            onClick={handleBrandsClick}
            scroll={false}
          >
            Brands
          </Link>
          <Link
            href="/contact"
            className={mobileNavLinkClass(isContact)}
            onClick={() => setIsMenuOpen(false)}
          >
            Contato
          </Link>
          <a
            href={CATALOG_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-6 mt-4 flex min-h-12 items-center justify-center rounded-md bg-primary px-6 font-headline text-sm font-bold uppercase tracking-tight text-on-primary transition-colors hover:bg-primary-dim"
            onClick={() => setIsMenuOpen(false)}
          >
            Catálogo
          </a>
        </div>
      </div>
    </nav>
  );
}
