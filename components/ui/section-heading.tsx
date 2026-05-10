import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, body, align = "left" }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p className="mb-4 text-xs font-bold uppercase tracking-[.28em] text-ember">{eyebrow}</p>
      <h2 className="text-balance text-4xl font-black uppercase leading-[.92] text-bone sm:text-5xl lg:text-7xl">
        {title}
      </h2>
      {body ? <p className="mt-5 text-base leading-7 text-white/62 sm:text-lg">{body}</p> : null}
    </div>
  );
}
