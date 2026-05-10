import {
  BarChart3,
  Bell,
  CreditCard,
  Dumbbell,
  Film,
  ListChecks,
  Users,
  Utensils
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const adminModules = [
  {
    icon: Dumbbell,
    title: "Programs",
    body: "Create phases, workouts, exercise order, sets, reps, rest timers and alternatives.",
    metric: "6 active"
  },
  {
    icon: Users,
    title: "Clients",
    body: "Assign programs, review check-ins, monitor progress photos and adjust targets.",
    metric: "128 clients"
  },
  {
    icon: Film,
    title: "Video library",
    body: "Attach private Vimeo or Cloudflare R2 exercise videos to each movement.",
    metric: "240 videos"
  },
  {
    icon: CreditCard,
    title: "Subscriptions",
    body: "Track Stripe subscription status, renewals, failed payments and cancellations.",
    metric: "$18.4k MRR"
  },
  {
    icon: Utensils,
    title: "Nutrition",
    body: "Set calories, macros, water targets, food rules and weekly nutrition notes.",
    metric: "92% adherence"
  },
  {
    icon: Bell,
    title: "Notifications",
    body: "Send client reminders, weekly instructions, check-in prompts and renewal notices.",
    metric: "24 queued"
  }
];

export function AdminPanel() {
  return (
    <div className="container-px mx-auto max-w-7xl pb-20 pt-28">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.28em] text-ember">Trainer Admin</p>
          <h1 className="mt-4 text-5xl font-black uppercase leading-none text-bone">
            Coaching command center
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/58">
            Manage programs, clients, videos, nutrition, subscriptions, analytics and notifications
            from one trainer-focused control layer.
          </p>
        </div>
        <Button variant="danger">Create program</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-5">
          <BarChart3 className="text-ember" size={22} />
          <p className="mt-6 text-xs font-bold uppercase tracking-[.22em] text-white/35">Conversion</p>
          <p className="mt-2 font-display text-4xl uppercase text-bone">12.8%</p>
          <p className="mt-2 text-sm text-white/48">Instagram traffic to checkout</p>
        </Card>
        <Card className="p-5">
          <ListChecks className="text-ember" size={22} />
          <p className="mt-6 text-xs font-bold uppercase tracking-[.22em] text-white/35">Check-ins</p>
          <p className="mt-2 font-display text-4xl uppercase text-bone">34</p>
          <p className="mt-2 text-sm text-white/48">Waiting for trainer review</p>
        </Card>
        <Card className="p-5">
          <CreditCard className="text-ember" size={22} />
          <p className="mt-6 text-xs font-bold uppercase tracking-[.22em] text-white/35">Renewals</p>
          <p className="mt-2 font-display text-4xl uppercase text-bone">19</p>
          <p className="mt-2 text-sm text-white/48">Due in the next 7 days</p>
        </Card>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {adminModules.map((module) => (
          <Card key={module.title} className="p-6">
            <module.icon className="text-ember" size={23} />
            <div className="mt-7 flex items-start justify-between gap-5">
              <h2 className="text-2xl font-black uppercase leading-none">{module.title}</h2>
              <span className="shrink-0 border border-white/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[.16em] text-white/42">
                {module.metric}
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-white/56">{module.body}</p>
            <Button variant="secondary" className="mt-6 w-full">
              Manage
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
