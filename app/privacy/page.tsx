import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for online coaching client data."
};

export default function PrivacyPage() {
  return (
    <section className="container-px mx-auto max-w-4xl pb-20 pt-32 sm:pb-28 sm:pt-40">
      <p className="text-xs font-bold uppercase tracking-[.28em] text-ember">Privacy</p>
      <h1 className="mt-5 text-5xl font-black uppercase leading-none text-bone">Privacy Policy</h1>
      <div className="mt-10 grid gap-6">
        {[
          ["Data collected", "Account data, email, progress metrics, check-ins, payment references and program activity are stored to deliver coaching."],
          ["Payment data", "Card details are processed by Stripe. This platform stores subscription references, not raw card data."],
          ["Training media", "Progress photos and check-ins are private client records protected by Supabase policies."],
          ["Email automation", "Resend is used for onboarding, payment and program delivery emails."],
          ["Deletion", "Clients can request account and progress data deletion unless retention is required for legal or billing purposes."]
        ].map(([heading, body]) => (
          <div key={heading} className="border-t border-white/10 pt-6">
            <h2 className="text-xl font-bold uppercase tracking-[.12em]">{heading}</h2>
            <p className="mt-3 text-sm leading-7 text-white/58">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
