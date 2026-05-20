import { Nav } from "@/components/Nav";
import { HeroSection } from "@/components/HeroSection";
import { LogoGrid } from "@/components/LogoGrid";
import { ServicesSection } from "@/components/ServicesSection";
import { HowWeWorkSection } from "@/components/HowWeWorkSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { FullSuiteSection } from "@/components/FullSuiteSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTAAndFooter } from "@/components/CTAAndFooter";

export default function Home() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 64 }}>
        <HeroSection />
        <LogoGrid />
        <ServicesSection />
        <HowWeWorkSection />
        <CaseStudiesSection />
        <FullSuiteSection />
        <TestimonialsSection />
      </main>
      <CTAAndFooter />
    </>
  );
}
