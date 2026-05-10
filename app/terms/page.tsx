import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of service for online coaching subscriptions."
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      sections={[
        ["Coaching scope", "Programs provide fitness, nutrition and accountability guidance. They do not replace medical advice."],
        ["Subscriptions", "Subscriptions renew through Stripe until cancelled. Access depends on an active payment status."],
        ["Client responsibility", "Clients are responsible for accurate health information, safe execution and honest check-ins."],
        ["Digital delivery", "Training plans, videos and onboarding are delivered digitally through email and dashboard access."]
      ]}
    />
  );
}

function LegalPage({ title, sections }: { title: string; sections: [string, string][] }) {
  return (
    <section className="container-px mx-auto max-w-4xl pb-20 pt-32 sm:pb-28 sm:pt-40">
      <p className="text-xs font-bold uppercase tracking-[.28em] text-ember">Legal</p>
      <h1 className="mt-5 text-5xl font-black uppercase leading-none text-bone">{title}</h1>
      <div className="mt-10 grid gap-6">
        {sections.map(([heading, body]) => (
          <div key={heading} className="border-t border-white/10 pt-6">
            <h2 className="text-xl font-bold uppercase tracking-[.12em]">{heading}</h2>
            <p className="mt-3 text-sm leading-7 text-white/58">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
