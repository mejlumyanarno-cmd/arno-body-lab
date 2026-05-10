import { AnimatedSection } from "@/components/marketing/animated-section";
import { FinalCTA } from "@/components/marketing/final-cta";
import { HeroSection } from "@/components/marketing/hero-section";
import { PricingSection } from "@/components/marketing/pricing-section";
import { ReelsSection } from "@/components/marketing/reels-section";
import { ResultsGallery } from "@/components/marketing/results-gallery";
import { ServicesGrid } from "@/components/marketing/services-grid";
import { TrainerIntro } from "@/components/marketing/trainer-intro";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AnimatedSection>
        <TrainerIntro />
      </AnimatedSection>
      <AnimatedSection>
        <ServicesGrid />
      </AnimatedSection>
      <AnimatedSection>
        <ResultsGallery />
      </AnimatedSection>
      <AnimatedSection>
        <ReelsSection />
      </AnimatedSection>
      <AnimatedSection>
        <PricingSection />
      </AnimatedSection>
      <AnimatedSection>
        <FinalCTA />
      </AnimatedSection>
    </>
  );
}
