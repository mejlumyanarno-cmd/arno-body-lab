import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { programs } from "@/lib/programs";

export const metadata: Metadata = {
  title: "Programs",
  description: "Premium online coaching programs for fat loss, muscle gain, beginners and personal coaching."
};

export default function ProgramsPage() {
  return (
    <section className="container-px mx-auto max-w-7xl pb-20 pt-32 sm:pb-28 sm:pt-40">
      <SectionHeading
        eyebrow="Programs"
        title="Every program has a goal, a structure and a clear coaching flow"
        body="Select a program to understand who it is for, what it includes, how coaching works and what result it is built to create."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {programs.map((program) => (
          <article
            key={program.slug}
            className="group grid overflow-hidden border border-white/10 bg-white/[.035] md:grid-cols-[.86fr_1.14fr]"
          >
            <div className="relative min-h-72 overflow-hidden">
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 44vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abyss/80 to-transparent" />
            </div>
            <div className="flex flex-col p-6">
              <div className="mb-6 flex items-center justify-between gap-4">
                <p className="text-xs font-bold uppercase tracking-[.24em] text-ember">
                  {program.eyebrow}
                </p>
                <ArrowUpRight className="text-white/28 group-hover:text-ember" />
              </div>
              <h2 className="text-3xl font-black uppercase leading-none text-bone">{program.title}</h2>
              <p className="mt-4 text-sm leading-6 text-white/60">{program.summary}</p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/58">
                <div className="border border-white/10 p-3">
                  <span className="block text-[10px] font-bold uppercase tracking-[.2em] text-white/35">
                    Duration
                  </span>
                  {program.duration}
                </div>
                <div className="border border-white/10 p-3">
                  <span className="block text-[10px] font-bold uppercase tracking-[.2em] text-white/35">
                    Price
                  </span>
                  {program.price}
                </div>
              </div>
              <LinkButton href={`/programs/${program.slug}`} variant="danger" className="mt-7 w-full">
                Learn more
              </LinkButton>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
