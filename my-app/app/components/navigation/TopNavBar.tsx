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

  const activeLine = (
    <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left animate-[nav-active-line_500ms_ease-out_both] bg-orange-500" />
  );

  return (
    <nav className="fixed top-0 z-50 w-full bg-neutral-900/80 shadow-[0px_40px_40px_-15px_rgba(254,174,43,0.04)] backdrop-blur-md">
      <style>
        {`
          @keyframes nav-active-line {
            from { transform: scaleX(0); opacity: 0; }
            to { transform: scaleX(1); opacity: 1; }
          }
        `}
      </style>

      <div className="container mx-auto grid h-20 grid-cols-[140px_1fr_140px] items-center px-8 md:grid-cols-[160px_1fr_160px]">
        <Link href="/" className="relative mt-3 block h-15 w-25object-top">
          <Image
            src="/bouw_logo.svg"
            alt="Bouwobra"
            fill
            className="scale-200 object-contain object-left"
            priority
          />
        </Link>

        <div className="hidden items-center justify-center gap-8 font-headline text-sm uppercase tracking-tight md:flex">
          <Link href="/" className={navLinkClass(isHome)} onClick={() => setHash('/') }>
            Home
            {isHome && activeLine}
          </Link>

          <Link href="/about-us" className={navLinkClass(isAboutUs)}>
            Sobre Nós
            {isAboutUs && activeLine}
          </Link>

          {/* <Link
            href="#"
            className="text-neutral-400 transition-colors hover:text-white"
          >
            Visita técnica
          </Link> */}

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
              Catalogo
            </ShimmerButton>
          </a>
        </div>
      </div>
    </nav>
  );
}
