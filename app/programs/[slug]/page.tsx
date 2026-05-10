import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check, Clock, CreditCard } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getProgram, programs } from "@/lib/programs";

type ProgramPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: ProgramPageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);

  if (!program) {
    return {};
  }

  return {
    title: program.title,
    description: program.summary
  };
}

export default async function ProgramDetailPage({ params }: ProgramPageProps) {
  const { slug } = await params;
  const program = getProgram(slug);

  if (!program) {
    notFound();
  }

  return (
    <section className="pb-20 pt-16 sm:pb-28">
      <div className="relative min-h-[72svh] overflow-hidden">
        <Image
          src={program.image}
          alt={program.title}
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,.86)_45%,rgba(5,5,5,.38)_100%)]" />
        <div className="container-px relative mx-auto flex min-h-[72svh] max-w-7xl items-end py-12">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[.28em] text-ember">{program.eyebrow}</p>
            <h1 className="mt-5 font-display text-6xl uppercase leading-[.8] text-bone sm:text-8xl">
              {program.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">{program.summary}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href={`/register?program=${program.slug}`} variant="danger" size="lg">
                Pay and start
              </LinkButton>
              <LinkButton href="/contact" variant="secondary" size="lg">
                Ask a question
              </LinkButton>
            </div>
          </div>
        </div>
      </div>

      <div className="container-px mx-auto mt-12 grid max-w-7xl gap-6 lg:grid-cols-[1fr_380px]">
        <div className="grid gap-6">
          <InfoBlock title="Who this program is for" items={program.audience} />
          <InfoBlock title="What is included" items={program.includes} />
          <InfoBlock title="How coaching works" items={program.coaching} />
          <InfoBlock title="Expected results" items={program.results} />
        </div>

        <Card className="h-fit p-6 lg:sticky lg:top-24">
          <p className="text-xs font-bold uppercase tracking-[.24em] text-white/35">Program Summary</p>
          <div className="mt-6 grid gap-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="flex items-center gap-2 text-sm text-white/56">
                <Clock size={16} className="text-ember" /> Duration
              </span>
              <strong className="text-bone">{program.duration}</strong>
            </div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="flex items-center gap-2 text-sm text-white/56">
                <CreditCard size={16} className="text-ember" /> Price
              </span>
              <strong className="text-bone">{program.price}</strong>
            </div>
          </div>
          <p className="mt-6 text-sm leading-6 text-white/58">
            After payment, the client account is activated, the subscription is attached, the program
            is assigned, and the onboarding email is sent through Resend.
          </p>
          <LinkButton href={`/register?program=${program.slug}`} variant="danger" className="mt-7 w-full">
            Start this program
          </LinkButton>
        </Card>
      </div>
    </section>
  );
}

function InfoBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="p-6 sm:p-8">
      <h2 className="text-2xl font-black uppercase leading-none text-bone">{title}</h2>
      <div className="mt-6 grid gap-3">
        {items.map((item) => (
          <div key={item} className="flex gap-3 text-sm leading-6 text-white/64">
            <Check className="mt-1 shrink-0 text-ember" size={16} />
            {item}
          </div>
        ))}
      </div>
    </Card>
  );
}
