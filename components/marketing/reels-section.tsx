import { Play } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const reels = ["Leg day setup", "Meal control", "Back density", "Check-in review"];

export function ReelsSection() {
  return (
    <section className="bg-bone py-20 text-abyss sm:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="Video Content"
            title="Reels-style coaching that keeps clients locked in"
            body="Short-form technique, nutrition and mindset videos can live in the client dashboard through private Vimeo links or Cloudflare R2."
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {reels.map((reel, index) => (
              <div
                key={reel}
                className="relative flex aspect-[9/16] flex-col justify-between overflow-hidden rounded-sm bg-abyss p-4 text-bone shadow-hard-panel"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(199,31,45,.44),transparent_50%)]" />
                <div className="relative text-[10px] font-bold uppercase tracking-[.18em] text-white/42">
                  Reel 0{index + 1}
                </div>
                <div className="relative grid size-12 place-items-center rounded-full border border-white/20 bg-white/10">
                  <Play size={18} fill="currentColor" />
                </div>
                <p className="relative text-sm font-black uppercase leading-tight">{reel}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
