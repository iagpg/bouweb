import HeroSection from './components/home/HeroSection';
import ProductCategories from './components/home/ProductCategories';
import TopBrandPartners from './components/home/TopBrandPartners';
import BrandMarquee from './components/home/BrandMarquee';
import ValuesSection from './components/home/ValuesSection';
import QuoteCtaSection from './components/home/QuoteCtaSection';

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
