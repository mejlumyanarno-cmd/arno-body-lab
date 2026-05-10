import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="relative min-h-[92svh] overflow-hidden pt-16">
      <div className="absolute inset-0">
        <Image
          src="/images/coach-hero-main.jpg"
          alt="Coach portrait in a strength training studio"
          fill
          priority
          className="object-cover object-[73%_center] opacity-95 md:object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,.82)_34%,rgba(5,5,5,.34)_72%,rgba(5,5,5,.2)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,.08)_0%,rgba(5,5,5,.18)_46%,#050505_100%)]" />
      </div>

      <div className="container-px relative mx-auto flex min-h-[calc(92svh-4rem)] max-w-7xl items-end pb-10 pt-14 sm:items-center sm:pb-0">
        <div className="w-full max-w-4xl overflow-hidden">
          <div className="mb-6 inline-flex items-center gap-3 border border-white/12 bg-white/[.04] px-3 py-2 text-[11px] font-bold uppercase tracking-[.24em] text-white/68">
            <ShieldCheck size={16} className="text-ember" />
            10 Years of Experience
          </div>
          <h1 className="font-display max-w-full text-balance text-[1.46rem] uppercase leading-[.94] text-bone min-[380px]:text-[1.55rem] min-[420px]:text-[2.15rem] sm:text-6xl md:text-7xl lg:text-[6.6rem]">
            Real transformation system
          </h1>
          <p className="mt-6 w-full max-w-[22rem] text-base leading-7 text-white/70 sm:max-w-2xl sm:text-xl">
            Online coaching for fat loss, muscle gain and disciplined lifestyle execution.
            Built by {siteConfig.coachName}, a coach with 10 years of client transformation work.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/pricing" variant="danger" size="lg" className="w-full sm:w-auto">
              Start now <ArrowRight size={18} />
            </LinkButton>
            <LinkButton href="/programs" variant="secondary" size="lg" className="w-full sm:w-auto">
              View programs
            </LinkButton>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {["Online Coaching", "Fat Loss", "Muscle Gain", "Nutrition"].map((item) => (
              <div key={item} className="border-l border-ember/80 bg-white/[.035] px-4 py-3">
                <p className="text-xs font-bold uppercase tracking-[.18em] text-white/55">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
