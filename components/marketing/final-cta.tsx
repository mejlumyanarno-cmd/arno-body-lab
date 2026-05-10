import { ArrowRight } from "lucide-react";
import { LinkButton } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="container-px mx-auto max-w-7xl pb-20 sm:pb-28">
      <div className="relative overflow-hidden rounded-sm border border-white/10 bg-ember px-6 py-12 shadow-luxury-red sm:px-10 lg:px-14">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,.42),transparent_58%)]" />
        <div className="relative max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[.28em] text-white/70">Start the system</p>
          <h2 className="mt-4 font-display text-5xl uppercase leading-[.82] text-white sm:text-7xl">
            Stop guessing. Train with a plan.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/76">
            Choose the program, complete checkout, receive your account and start executing inside the
            premium dashboard.
          </p>
          <LinkButton href="/pricing" className="mt-8" variant="primary" size="lg">
            Start now <ArrowRight size={18} />
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
