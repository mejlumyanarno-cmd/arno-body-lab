import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description: "Apply for premium online fitness coaching."
};

export default function ContactPage() {
  return (
    <section className="container-px mx-auto grid max-w-7xl gap-10 pb-20 pt-32 sm:pb-28 sm:pt-40 lg:grid-cols-[.9fr_1.1fr]">
      <div>
        <SectionHeading
          eyebrow="Apply"
          title="Tell me the target. I will tell you the path."
          body="Use this form for coaching questions, program fit, personal coaching availability and transformation planning."
        />
        <div className="mt-10 grid gap-4 text-sm leading-6 text-white/58">
          <p>Response time: usually within one business day.</p>
          <p>For fastest onboarding, include your goal, current weight, training level and timeline.</p>
        </div>
      </div>
      <Card className="p-6 sm:p-8">
        <ContactForm />
      </Card>
    </section>
  );
}
