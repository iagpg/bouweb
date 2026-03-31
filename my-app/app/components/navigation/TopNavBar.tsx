'use client';

import Link from 'next/link';

export default function TopNavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-900/80 backdrop-blur-md shadow-[0px_40px_40px_-15px_rgba(254,174,43,0.04)]">
      <div className="container mx-auto relative flex items-center h-20 px-8">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tighter text-white font-['Space_Grotesk']">
          Bouwobra
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8 font-['Space_Grotesk'] uppercase tracking-tight text-sm">
          <Link
            href="#"
            className="text-orange-400 border-b-2 border-orange-500 pb-1 hover:text-orange-300 transition-colors"
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
        </div>

       
      </div>
    </nav>
  );
}
