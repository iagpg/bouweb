'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CATALOG_HREF } from '@/app/lib/whatsapp';
import WorkButton from '../ui/AnimationCard';

const categories = [
  {
    id: 1,
    title: 'Luvas',
    label: 'Proteção Mecânica',
    span: 'md:col-span-2',
    aspect: 'aspect-[16/9]',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAoF5OkbGjHDOUSGwvu_XvFOZBYNPMcR9Ve6cEUqYyJkywSyOLDBF2BIa3B1dQPlBjDcHnIwy1tNIyvI7aYIpkX43eYggjoyIfcurqAuMdIYHzXeCS0hrf2B9Qk8gRnTvvPrI4mbcXv7MLlO79U6yl8iLXMN7_uMag1_fP36eYTy8gvVTkIcvImTf9btekxVItAvD2CG9f0ykEqNTsKN28zaghRgYkDKOpR3a7EOJIwsLYEfJlhpe86gEop9CrfZgiQDOMq8X_J4BA',
  },
  {
    id: 2,
    title: 'Capacetes',
    span: 'md:col-span-1',
    aspect: 'aspect-square',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAXLtnlvYJoQ60xhQ4mevpLqSpSM_1kYiNyNADXct7CnSntvoWlt8WbLUTWyQDl4aUxssosQrRG22dr-gWTBQzAC9OalqtsTutYVDUeY7Wo9Sb07cyzHScxTAksEtlsHPZy5g_W3aFbpcVlvk4hW1lsOLhPdml4X6xfBLLu3VeLSIMWYDwxL7Ywha5PcLkwnVH21HfyYiLjB5XiBqXJPV950a9YMeYcWNCI-vXr535ivA2TqvTfL_5KpZusLehuDAzETsiWV12uAfQ',
  },
  {
    id: 3,
    title: 'Botinas',
    span: 'md:col-span-1',
    aspect: 'aspect-square',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDgQ1e0eb0DyRto6j0j3UDly-IplLY3w1A31kEy0CN8l4M_8c1scvI11rn25ppfbHnyGH6IKYXpBQQCNcc3TsAyLOczqp6Bf7s4wcaaB1IxXI1-uPV5vUWOvLvv9ck7ARPIYhcwuu9nwjH9AHeE7_VuEPOqQc0SaKu8lGE6odfmEqyvYkDp12FW6NX_w0UkNrsvqZJJGhKExt7lzWbwY2n153WB8ChVZyMnDOQEZ-OUtmx1McXEx0qexMbJRHmmNDj7Ak7IKbO7u8o',
  },
  {
    id: 4,
    title: 'Ferramentas',
    span: 'md:col-span-1',
    aspect: 'aspect-square',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCYSclHtfQ1uz50YoJSP3NIq1gey-Bd9Q4Z6f6oHemZBLx9id_x73V5MXUa2Pf1mbOZSPgcN2cJgEAOeWjiNQTy0vFOeHTj6nol1jc_KjmMt9x_LutT0vn_m__1_P58t_Y-cvtejDMswDKw2EjaMy8zNDVYUa9EFgW7o6KDFzDrb5BL7FvA1FRAsd1GSaTTDBkgk7mkQhfa7wMbMV_nUNWP23hXnu41XxK8ivT8vjUglYfCgWzVK-lGO3BmZSaDk_hUXF-Pt9En1YI',
  },
];

export default function ProductCategories() {
  return (
    <section className="py-24 px-8 bg-surface industrial-grid">
      <div className="container mx-auto h-px-200">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-headline font-bold text-white tracking-tighter">Nossos Produtos</h2>
            <p className="text-on-surface-variant mt-2">Tecnologia avançada em cada detalhe do seu EPI.</p>
          </div>
        
          <div className="h-px flex-1 bg-outline-variant/20 mx-12 hidden md:block"></div>
          <a className="text-primary font-headline font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:gap-4 transition-all" href={CATALOG_HREF} target="_blank" rel="noopener noreferrer">
            Explorar Tudo <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="group relative overflow-hidden rounded-xl bg-primary/20 p-8 aspect-video flex flex-col items-start justify-end text-center transition-all hover:bg-primary/30 border border-primary/10">
            <span className="material-symbols-outlined text-5xl text-primary mb-4">Botin</span>
            <h3 className="text-xl font-headline font-bold text-white">Botinas & Sapatos</h3>
            <Image
              src="/products/detroit_lite.png"
              alt="Botinas"
              width={1000}
              height={1000}
              className="absolute bottom-4 right-4 w-60 h-60 object-cover -mx-10 -my-20"
            />
          </div>
          <div className="group relative overflow-hidden rounded-xl bg-primary/20 p-8 aspect-video flex flex-col items-start justify-end text-center transition-all hover:bg-primary/30 border border-primary/10">
            <span className="material-symbols-outlined text-5xl text-primary mb-4">hard_hat</span>
            <h3 className="text-xl font-headline font-bold text-white">Capacetes</h3>
            <Image
              src="/products/helmet.png"
              alt="Capacetes"
              width={1000}
              height={1000}
              className="absolute bottom-4 right-4 w-50 h-50 object-cover -mx-10 -my-10"
            />
          </div>
          <div className="group relative overflow-hidden rounded-xl bg-primary/40 p-8 aspect-video flex flex-col items-center justify-center text-center transition-all hover:bg-primary/50 border border-primary/10">
            <span className="material-symbols-outlined text-5xl text-primary mb-4">front_hand</span>
            <h3 className="text-xl font-headline font-bold text-white">Luvas</h3>
            <Image
              src="/detroit_lite.webp"
              alt="Luvas"
              width={84}
              height={84}
              className="absolute bottom-4 right-4 w-20 h-20 opacity-80 object-cover"
            />
          </div>
          <div className="group relative overflow-hidden rounded-xl bg-primary/50 p-8 aspect-video flex flex-col items-center justify-center text-center transition-all hover:bg-primary/60 border border-primary/10">
            <span className="material-symbols-outlined text-5xl text-primary mb-4">visibility</span>
            <h3 className="text-xl font-headline font-bold text-white">3%culos de Prote1#o</h3>
            <Image
              src="/detroit_lite.webp"
              alt="Óculos de Proteção"
              width={84}
              height={84}
              className="absolute bottom-4 right-4 w-20 h-20 opacity-80 object-cover"
            />
          </div>
          <div className="group relative overflow-hidden rounded-xl bg-primary/60 p-8 aspect-video flex flex-col items-center justify-center text-center transition-all hover:bg-primary/70 border border-primary/10">
            <span className="material-symbols-outlined text-5xl text-primary mb-4">construction</span>
            <h3 className="text-xl font-headline font-bold text-white">Acess3#rios</h3>
            <Image
              src="/detroit_lite.webp"
              alt="Acessórios"
              width={84}
              height={84}
              className="absolute bottom-4 right-4 w-20 h-20 opacity-80 object-cover"
            />
          </div>
          <div className="group relative overflow-hidden rounded-xl bg-primary/25 p-8 aspect-video flex flex-col items-center justify-center text-center transition-all hover:bg-primary/35 border border-primary/10">
            <span className="material-symbols-outlined text-5xl text-primary mb-4">checkroom</span>
            <h3 className="text-xl font-headline font-bold text-white">Vestimentas</h3>
            <Image
              src="/detroit_lite.webp"
              alt="Vestimentas"
              width={84}
              height={84}
              className="absolute bottom-4 right-4 w-20 h-20 opacity-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
