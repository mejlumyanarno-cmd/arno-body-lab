import type { Metadata } from "next";
import { FinalCTA } from "@/components/marketing/final-cta";
import { PricingSection } from "@/components/marketing/pricing-section";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Subscription pricing for premium online fitness coaching."
};

export default function PricingPage() {
  return (
    <div className="pt-20">
      <PricingSection />
      <FinalCTA />
    </div>
  );
}
