import HeroSection from "@/components/hero-section";
import InjectableVitamins from "@/components/InjectableVitamins";
import FAQ from "@/components/FAQ";
import Footer from "@/app/Footer";
import ServicesWeProvide from "@/components/ServicesWeProvide";
import TestimonialSection from "@/components/TestimonialSection";
  
export default function Home() {
  return <>
  <HeroSection />
  {/* <GeneticTestingSection /> */}
  <InjectableVitamins />
  <ServicesWeProvide />
  <TestimonialSection />
  <FAQ />
  <Footer />
  </>
}