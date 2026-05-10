import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";

const results = [
  {
    title: "12 week recomposition",
    metric: "-9.4 kg",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "Lean muscle phase",
    metric: "+6 kg lean mass",
    image:
      "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "Lifestyle reset",
    metric: "94% adherence",
    image:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=900&q=85"
  }
];

export function ResultsGallery() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20 sm:py-28">
      <SectionHeading
        eyebrow="Client Results"
        title="Before-and-after results are built through weekly execution"
        body="The dashboard tracks weight, photos, adherence, training completion and check-ins, so progress is visible and coachable."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {results.map((result) => (
          <div key={result.title} className="group overflow-hidden border border-white/10 bg-white/[.035]">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={result.image}
                alt={result.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abyss via-transparent to-transparent" />
              <div className="absolute left-4 top-4 border border-white/14 bg-abyss/72 px-3 py-2 text-[10px] font-bold uppercase tracking-[.2em] text-white/68">
                Before / After
              </div>
            </div>
            <div className="p-5">
              <p className="text-xs font-bold uppercase tracking-[.22em] text-white/40">
                {result.title}
              </p>
              <p className="mt-3 font-display text-3xl uppercase text-bone">{result.metric}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
