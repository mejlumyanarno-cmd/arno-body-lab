import { ArrowUpRight } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { programs } from "@/lib/programs";

export function ServicesGrid() {
  return (
    <section className="border-y border-white/10 bg-carbon py-20 sm:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="My Services"
            title="Choose the exact coaching system your body needs"
            body="Each program gives you the key details before checkout: goal, structure, coaching flow, duration and expected outcome."
          />
          <LinkButton href="/programs" variant="secondary" className="md:mb-2">
            All programs
          </LinkButton>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {programs.map((program, index) => (
            <Card
              key={program.slug}
              className="group relative overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-ember/60"
            >
              <div className="absolute right-0 top-0 h-24 w-24 bg-ember/10 blur-2xl transition group-hover:bg-ember/24" />
              <div className="mb-10 flex items-start justify-between">
                <span className="text-xs font-bold uppercase tracking-[.24em] text-white/35">
                  0{index + 1}
                </span>
                <ArrowUpRight className="text-white/26 transition group-hover:text-ember" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[.22em] text-ember">
                {program.eyebrow}
              </p>
              <h3 className="mt-4 text-2xl font-black uppercase leading-none text-bone">
                {program.title}
              </h3>
              <p className="mt-4 min-h-20 text-sm leading-6 text-white/58">{program.summary}</p>
              <div className="mt-8 flex items-center justify-between gap-4">
                <p className="font-display text-2xl uppercase text-bone">{program.price}</p>
                <LinkButton href={`/programs/${program.slug}`} size="sm" variant="danger">
                  Learn more
                </LinkButton>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
