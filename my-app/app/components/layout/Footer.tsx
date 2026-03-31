'use client';

import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 bg-black border-t border-neutral-800">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-8">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1">
          <div className="text-xl font-black text-white font-headline mb-4 uppercase tracking-tighter">
            Bouwobra
          </div>
          <p className="text-neutral-500 font-body text-sm mb-6">
            Equipamentos industriais de alta performance. Onde a engenharia encontra a segurança absoluta.
          </p>
          <div className="flex gap-4">
            <Link 
              href="https://www.instagram.com/bouwobra/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neutral-500 hover:text-orange-500 transition-colors"
            >
              <FaInstagram className="text-2xl" />
              <span>@bouwobra</span>
            </Link>
          </div>
        </div>

        {/* Company Links */}
        <div className="flex flex-col gap-3">
          <h5 className="text-white font-headline font-bold uppercase text-xs tracking-widest mb-2">
            Empresa
          </h5>
          <Link
            href="#"
            className="text-neutral-600 hover:text-orange-400 transition-colors font-body text-xs"
          >
            Sobre Nós
          </Link>
          <Link
            href="#"
            className="text-neutral-600 hover:text-orange-400 transition-colors font-body text-xs"
          >
            Equipe Bouw Obra
          </Link>
         
        </div>

        {/* Support Links */}
        <div className="flex flex-col gap-3">
          <h5 className="text-white font-headline font-bold uppercase text-xs tracking-widest mb-2">
            Suporte
          </h5>
          <Link
            href="#"
            className="text-neutral-600 hover:text-orange-400 transition-colors font-body text-xs"
          >
            Fale Conosco
          </Link>
        </div>
       
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-['Inter'] text-xs text-neutral-500">
          © 2026 Bouwobra LTDA.
        </p>
        <div className="flex gap-6">
         
          <span className="text-[10px] text-neutral-700 font-bold tracking-[0.3em] uppercase">
            Desenvolvido por{' '}
            <Link 
              href="https://www.linkedin.com/in/iago-gama-7137201b6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
            >
              @iagpg
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
