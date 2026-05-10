import type { Metadata } from "next";
import Image from "next/image";
import { Award, CheckCircle2, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the coach behind the premium online transformation system."
};

export default function AboutPage() {
  return (
    <section className="container-px mx-auto max-w-7xl pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
        <div className="relative min-h-[560px] overflow-hidden border border-white/10">
          <Image
            src="https://images.unsplash.com/photo-1605296867424-35fc25c9212a?auto=format&fit=crop&w=1400&q=88"
            alt={`${siteConfig.coachName} training coaching environment`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 48vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-abyss via-transparent to-transparent" />
        </div>
        <div>
          <SectionHeading
            eyebrow="About the coach"
            title="This is not motivational noise. It is a controlled coaching system."
            body={`${siteConfig.coachName} has spent 10 years building transformations through strength training, nutrition precision and weekly accountability. The method is direct: assess the client, set the target, remove confusion, execute, measure, adjust.`}
          />
          <div className="mt-8 grid gap-4">
            {[
              ["10 years of experience", "Coaching beginners, busy professionals and advanced lifters."],
              ["Transformation focus", "Fat loss, muscle gain, recomposition and lifestyle discipline."],
              ["Premium delivery", "Dashboard, video guidance, check-ins, nutrition and program automation."]
            ].map(([title, body]) => (
              <Card key={title} className="grid grid-cols-[44px_1fr] gap-4 p-5">
                <span className="grid size-11 place-items-center bg-ember/14 text-ember">
                  <CheckCircle2 size={20} />
                </span>
                <div>
                  <h2 className="font-bold uppercase tracking-[.14em]">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-white/58">{body}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {[
          { icon: Award, title: "Expertise", body: "Programs are built from assessment, not random exercise lists." },
          { icon: ShieldCheck, title: "Accountability", body: "Weekly check-ins make the plan react to the client's real life." },
          { icon: CheckCircle2, title: "Results", body: "Progress is tracked through training, nutrition, photos and body metrics." }
        ].map((item) => (
          <Card key={item.title} className="p-6">
            <item.icon className="text-ember" size={24} />
            <h3 className="mt-6 text-2xl font-black uppercase leading-none">{item.title}</h3>
            <p className="mt-4 text-sm leading-6 text-white/58">{item.body}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
