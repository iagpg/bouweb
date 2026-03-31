'use client';

import Link from 'next/link';
import Image from 'next/image';

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
    <section className="py-24 px-8 bg-surface">
      <style>{`
        .industrial-grid {
          background-image: radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.05) 1px, transparent 0);
          background-size: 40px 40px;
        }
      `}</style>

      <div className="industrial-grid absolute inset-0"></div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-headline font-bold text-white tracking-tighter">
              Nossos produtos
            </h2>
            <p className="text-on-surface-variant mt-2">
              Tecnologia avançada em cada detalhe do seu EPI.
            </p>
          </div>

          <div className="h-px flex-1 bg-outline-variant/20 mx-12 hidden md:block"></div>

          <Link
            href="#"
            className="text-primary font-headline font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:gap-4 transition-all"
          >
            Explorar Tudo{' '}
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Category Cards */}
          {categories.map((category) => (
            <Link
              key={category.id}
              href="#"
              className={`${category.span} group relative overflow-hidden rounded-xl bg-surface-container-low ${category.aspect} transition-transform hover:scale-105`}
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                {category.label && (
                  <span className="text-primary font-label text-xs font-bold tracking-widest uppercase mb-2 block">
                    {category.label}
                  </span>
                )}
                <h3 className="text-2xl md:text-3xl font-headline font-bold text-white uppercase">
                  {category.title}
                </h3>
              </div>
            </Link>
          ))}

          {/* Featured Promo */}
          <div className="md:col-span-3 bg-surface-container-high rounded-xl p-12 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]"></div>

            <div className="flex-1 z-10">
              <h4 className="text-primary font-headline font-bold text-xl mb-4">
                Site Equipment
              </h4>
              <p className="text-white text-3xl font-headline font-medium leading-tight mb-6">
                Linha completa de sinalização e infraestrutura de site industrial.
              </p>
              <button className="bg-surface text-primary border border-primary/20 px-8 py-3 rounded-md font-headline font-bold uppercase text-sm hover:bg-primary hover:text-on-primary transition-all">
                Ver Coleção
              </button>
            </div>

            <div className="w-full md:w-1/3 aspect-video rounded-lg overflow-hidden z-10">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj1kVs_EyXgL3p0FWvffN1pZsfS9orWSxCOFUEnBYIItiJl1ODGpa5EMMkFkyEkUj5GpHDiTuJ_SLJGkwh9dPv2epJO1T3YxJLW7rtmF_LEb8fTjrtB-CSZeWkfspiiL7jo5VuSTrQchxquslBNY7YlLNBeIABpaD-GcH41PyZqI30uGf4z2_JjxR3jr-EWbpzWdjf5zzuGvzvecPxtHvCZJUGTAErHcygaZ-FxoEeooP5kBK-Hymonh-vo_04NcjfRR183EO5hGE"
                alt="Site equipment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
