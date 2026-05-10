import Image from "next/image";
import { Award, Dumbbell, Flame, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site";

const stats = [
  { label: "Years coaching", value: "10+" },
  { label: "Client results", value: "500+" },
  { label: "Body focus", value: "Shape" },
  { label: "Online format", value: "Global" }
];

const principles = [
  {
    icon: Dumbbell,
    title: "Training that progresses",
    body: "Every block has clear workload, rest, exercise alternatives and measurable progression."
  },
  {
    icon: Target,
    title: "Nutrition without confusion",
    body: "Calories, macros and realistic meal structure are adjusted from real weekly data."
  },
  {
    icon: Flame,
    title: "Discipline over motivation",
    body: "The system removes guesswork and gives clients the next exact action every week."
  }
];

export function TrainerIntro() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20 sm:py-28">
      <div className="grid gap-10 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
        <div className="relative min-h-[520px] overflow-hidden rounded-sm border border-white/10 bg-graphite">
          <Image
            src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1400&q=88"
            alt={`${siteConfig.coachName} coaching portrait`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-abyss via-abyss/58 to-transparent p-6">
            <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[.2em] text-bone">
              <Award className="text-ember" size={19} />
              Personal premium coaching
            </div>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Who I Am"
            title="10 years of turning discipline into visible results"
            body={`I am ${siteConfig.coachName}, an online fitness coach focused on fat loss, muscle gain and complete body transformation. My work is not random workouts. It is a controlled system: training, nutrition, check-ins, corrections and accountability.`}
          />

          <div className="mt-8 grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <Card key={stat.label} className="min-w-0 p-4 sm:p-5">
                <p className="break-words font-display text-2xl uppercase leading-none text-bone min-[380px]:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[.18em] text-white/42">
                  {stat.label}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-8 grid gap-3">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="grid grid-cols-[44px_1fr] gap-4 border border-white/10 bg-white/[.03] p-4"
              >
                <span className="grid size-11 place-items-center rounded-sm bg-ember/14 text-ember">
                  <principle.icon size={20} />
                </span>
                <div>
                  <h3 className="font-bold uppercase tracking-[.12em] text-bone">{principle.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/56">{principle.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
