import { Check } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { pricingPlans } from "@/lib/pricing";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20 sm:py-28">
      <SectionHeading
        eyebrow="Pricing"
        title="Subscription packages for serious execution"
        body="Start with one month, commit to a transformation phase, or build the full lifestyle system with long-term coaching."
        align="center"
      />
      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <Card
            key={plan.title}
            className={cn(
              "relative p-6",
              plan.featured && "border-ember/70 bg-ember/[.09] shadow-luxury-red"
            )}
          >
            {plan.featured ? (
              <span className="absolute right-5 top-5 bg-ember px-3 py-1 text-[10px] font-black uppercase tracking-[.2em] text-white">
                Best
              </span>
            ) : null}
            <p className="text-xs font-bold uppercase tracking-[.24em] text-white/42">{plan.title}</p>
            <div className="mt-6 flex items-end gap-2">
              <p className="font-display text-6xl uppercase text-bone">{plan.price}</p>
              <p className="pb-2 text-sm text-white/44">/{plan.cadence}</p>
            </div>
            <p className="mt-5 min-h-14 text-sm leading-6 text-white/58">{plan.description}</p>
            <div className="mt-8 grid gap-3">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-sm text-white/68">
                  <Check size={16} className="text-ember" />
                  {feature}
                </div>
              ))}
            </div>
            <LinkButton
              href={`/register?plan=${encodeURIComponent(plan.title)}`}
              variant={plan.featured ? "danger" : "secondary"}
              className="mt-9 w-full"
            >
              Start now
            </LinkButton>
          </Card>
        ))}
      </div>
    </section>
  );
}
