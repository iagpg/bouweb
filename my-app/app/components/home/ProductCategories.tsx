'use client';

import Image from 'next/image';
import { CATALOG_HREF } from '@/app/lib/whatsapp';

const categories = [
  {
    title: 'Botinas & Sapatos',
    description:
      'Calcados de seguranca para alta aderencia, conforto e protecao no canteiro.',
    icon: 'steps',
    image: '/products/boot.png',
  },
  {
    title: 'Capacetes',
    description:
      'Protecao craniana resistente para rotinas industriais e obras pesadas.',
    icon: 'engineering',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAXLtnlvYJoQ60xhQ4mevpLqSpSM_1kYiNyNADXct7CnSntvoWlt8WbLUTWyQDl4aUxssosQrRG22dr-gWTBQzAC9OalqtsTutYVDUeY7Wo9Sb07cyzHScxTAksEtlsHPZy5g_W3aFbpcVlvk4hW1lsOLhPdml4X6xfBLLu3VeLSIMWYDwxL7Ywha5PcLkwnVH21HfyYiLjB5XiBqXJPV950a9YMeYcWNCI-vXr535ivA2TqvTfL_5KpZusLehuDAzETsiWV12uAfQ',
  },
  {
    title: 'Luvas',
    description:
      'Modelos para protecao mecanica, abrasao, corte e manuseio seguro.',
    icon: 'front_hand',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAoF5OkbGjHDOUSGwvu_XvFOZBYNPMcR9Ve6cEUqYyJkywSyOLDBF2BIa3B1dQPlBjDcHnIwy1tNIyvI7aYIpkX43eYggjoyIfcurqAuMdIYHzXeCS0hrf2B9Qk8gRnTvvPrI4mbcXv7MLlO79U6yl8iLXMN7_uMag1_fP36eYTy8gvVTkIcvImTf9btekxVItAvD2CG9f0ykEqNTsKN28zaghRgYkDKOpR3a7EOJIwsLYEfJlhpe86gEop9CrfZgiQDOMq8X_J4BA',
  },
  {
    title: 'Oculos de Protecao',
    description:
      'Barreira visual contra particulas, respingos e riscos em operacao.',
    icon: 'visibility',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCYSclHtfQ1uz50YoJSP3NIq1gey-Bd9Q4Z6f6oHemZBLx9id_x73V5MXUa2Pf1mbOZSPgcN2cJgEAOeWjiNQTy0vFOeHTj6nol1jc_KjmMt9x_LutT0vn_m__1_P58t_Y-cvtejDMswDKw2EjaMy8zNDVYUa9EFgW7o6KDFzDrb5BL7FvA1FRAsd1GSaTTDBkgk7mkQhfa7wMbMV_nUNWP23hXnu41XxK8ivT8vjUglYfCgWzVK-lGO3BmZSaDk_hUXF-Pt9En1YI',
  },
  {
    title: 'Acessorios',
    description:
      'Itens complementares para organizacao, sinalizacao e suporte no trabalho.',
    icon: 'construction',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCYSclHtfQ1uz50YoJSP3NIq1gey-Bd9Q4Z6f6oHemZBLx9id_x73V5MXUa2Pf1mbOZSPgcN2cJgEAOeWjiNQTy0vFOeHTj6nol1jc_KjmMt9x_LutT0vn_m__1_P58t_Y-cvtejDMswDKw2EjaMy8zNDVYUa9EFgW7o6KDFzDrb5BL7FvA1FRAsd1GSaTTDBkgk7mkQhfa7wMbMV_nUNWP23hXnu41XxK8ivT8vjUglYfCgWzVK-lGO3BmZSaDk_hUXF-Pt9En1YI',
  },
  {
    title: 'Vestimentas',
    description:
      'Roupas tecnicas para visibilidade, resistencia e protecao diaria.',
    icon: 'checkroom',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDgQ1e0eb0DyRto6j0j3UDly-IplLY3w1A31kEy0CN8l4M_8c1scvI11rn25ppfbHnyGH6IKYXpBQQCNcc3TsAyLOczqp6Bf7s4wcaaB1IxXI1-uPV5vUWOvLvv9ck7ARPIYhcwuu9nwjH9AHeE7_VuEPOqQc0SaKu8lGE6odfmEqyvYkDp12FW6NX_w0UkNrsvqZJJGhKExt7lzWbwY2n153WB8ChVZyMnDOQEZ-OUtmx1McXEx0qexMbJRHmmNDj7Ak7IKbO7u8o',
  },
];

export default function ProductCategories() {
  return (
    <section className="industrial-grid bg-surface px-8 py-24">
      <div className="container mx-auto h-px-200">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <h2 className="font-headline text-4xl font-bold tracking-tighter text-white">
              Nossos Produtos
            </h2>
            <p className="mt-2 text-on-surface-variant">
              Tecnologia avancada em cada detalhe do seu EPI.
            </p>
          </div>

          <div className="mx-12 hidden h-px flex-1 bg-outline-variant/20 md:block"></div>
          <a
            className="flex items-center gap-2 font-headline text-sm font-bold uppercase tracking-widest text-primary transition-all hover:gap-4"
            href={CATALOG_HREF}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explorar Tudo
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              className="group relative flex aspect-video overflow-hidden rounded-xl border border-primary/10 bg-primary/20 p-8 text-left transition-all hover:border-primary/30 hover:bg-primary/30"
              key={category.title}
            >
              <Image
                alt={category.title}
                className="object-cover opacity-35 grayscale transition duration-500 group-hover:scale-105 group-hover:opacity-45"
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                src={category.image}
              />
              <div className="absolute inset-0 bg-primary/45 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

              <div className="relative z-10 mt-auto max-w-sm">
                <span className="material-symbols-outlined mb-4 block text-5xl text-primary">
                  {category.icon}
                </span>
                <h3 className="font-headline text-xl font-bold text-white">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
