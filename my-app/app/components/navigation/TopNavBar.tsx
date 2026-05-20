'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function TopNavBar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isContact = pathname === '/contact';

  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-900/80 backdrop-blur-md shadow-[0px_40px_40px_-15px_rgba(254,174,43,0.04)]">
      <div className="container mx-auto relative flex items-center h-20 px-8">
        {/* Logo */}
        <Link href="/" className="relative block h-35 w-[130px]">
          <Image
            src="/bouw_logo.svg"
            alt="Bouwobra"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8 font-['Space_Grotesk'] uppercase tracking-tight text-sm">
          <Link
            href="/"
            className={`pb-1 transition-colors ${
              isHome
                ? 'border-b-2 border-orange-500 text-orange-400 hover:text-orange-300'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            Sobre
          </Link>
          <Link
            href="#"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            Produtos
          </Link>
          <Link
            href="#"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            Brands
          </Link>
          <Link
            href="/contact"
            className={`pb-1 transition-colors ${
              isContact
                ? 'border-b-2 border-orange-500 text-orange-400 hover:text-orange-300'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Contato
          </Link>
        </div>

       
      </div>
    </nav>
  );
}
