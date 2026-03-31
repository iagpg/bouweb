import HeroSection from './components/sections/HeroSection';
import ProductCategories from './components/sections/ProductCategories';
import TopBrandPartners from './components/sections/TopBrandPartners';
import BrandMarquee from './components/sections/BrandMarquee';
import ValuesSection from './components/sections/ValuesSection';
import QuoteCtaSection from './components/sections/QuoteCtaSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductCategories />
      <TopBrandPartners />
      <BrandMarquee />
      <ValuesSection />
      <QuoteCtaSection />
    </>
  );
}
