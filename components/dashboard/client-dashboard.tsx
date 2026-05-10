"use client";

import {
  Activity,
  Bell,
  CalendarDays,
  Camera,
  CheckCircle2,
  Flame,
  LineChart,
  Play,
  Scale,
  Timer,
  Utensils
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useDashboardStore } from "@/store/dashboard-store";

const workout = [
  {
    title: "Incline dumbbell press",
    sets: "4",
    reps: "8-10",
    rest: "90 sec",
    note: "Control eccentric, no shoulder roll.",
    errors: "Half reps, elbows too wide",
    alternatives: "Machine chest press"
  },
  {
    title: "Lat pulldown",
    sets: "4",
    reps: "10-12",
    rest: "75 sec",
    note: "Drive elbows to ribs.",
    errors: "Swinging torso",
    alternatives: "Assisted pull-up"
  },
  {
    title: "Leg press",
    sets: "5",
    reps: "10",
    rest: "120 sec",
    note: "Full depth, stable pelvis.",
    errors: "Locking knees",
    alternatives: "Hack squat"
  }
];

const calendar = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export function ClientDashboard() {
  const { selectedDay, setSelectedDay, waterLogged, addWater } = useDashboardStore();

  return (
    <div className="container-px mx-auto max-w-7xl pb-20 pt-28">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.28em] text-ember">Client Dashboard</p>
          <h1 className="mt-4 text-5xl font-black uppercase leading-none text-bone">
            Today is execution day
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/58">
            Training, nutrition, progress and check-ins are centralized so the coach can adjust the
            plan with real data.
          </p>
        </div>
        <Button variant="danger">Weekly check-in</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Metric icon={Flame} label="Calories" value="2,350" detail="180g protein target" />
        <Metric icon={Scale} label="Weight" value="82.4 kg" detail="-0.7 kg this week" />
        <Metric icon={Activity} label="Adherence" value="92%" detail="6 of 7 targets hit" />
        <Metric icon={LineChart} label="Progress" value="Week 4" detail="Phase 1: control" />
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[1.25fr_.75fr]">
        <Card className="p-5 sm:p-6">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.24em] text-white/35">
                Today&apos;s workout
              </p>
              <h2 className="mt-2 text-3xl font-black uppercase leading-none text-bone">
                Upper body density
              </h2>
            </div>
            <span className="flex items-center gap-2 text-sm text-white/55">
              <Timer size={16} className="text-ember" /> 68 min
            </span>
          </div>

          <div className="grid gap-3">
            {workout.map((exercise, index) => (
              <div
                key={exercise.title}
                className="grid gap-4 border border-white/10 bg-abyss/35 p-4 lg:grid-cols-[44px_1fr_170px]"
              >
                <span className="grid size-11 place-items-center bg-white/[.06] text-xs font-black text-white/50">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-bold uppercase tracking-[.12em] text-bone">{exercise.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/56">{exercise.note}</p>
                  <p className="mt-2 text-xs text-white/36">
                    Common mistake: {exercise.errors} / Alternative: {exercise.alternatives}
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs uppercase tracking-[.12em] text-white/55 lg:grid-cols-1">
                  <span className="border border-white/10 p-2">{exercise.sets} sets</span>
                  <span className="border border-white/10 p-2">{exercise.reps}</span>
                  <span className="border border-white/10 p-2">{exercise.rest}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="grid gap-5">
          <Card className="p-5">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-black uppercase">Nutrition</h2>
              <Utensils className="text-ember" size={20} />
            </div>
            <div className="grid gap-3">
              {[
                ["Protein", "180g", "72%"],
                ["Carbs", "245g", "61%"],
                ["Fat", "70g", "48%"]
              ].map(([label, value, width]) => (
                <div key={label}>
                  <div className="mb-2 flex justify-between text-sm text-white/58">
                    <span>{label}</span>
                    <span>{value}</span>
                  </div>
                  <div className="h-2 bg-white/10">
                    <div className="h-full bg-ember" style={{ width }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">
              <span className="text-sm text-white/58">Water</span>
              <button
                onClick={addWater}
                className="rounded-sm border border-white/10 px-3 py-2 text-sm font-bold text-bone"
              >
                {waterLogged} L / 3.0 L
              </button>
            </div>
          </Card>

          <Card className="p-5">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-black uppercase">Training calendar</h2>
              <CalendarDays className="text-ember" size={20} />
            </div>
            <div className="grid grid-cols-7 gap-2">
              {calendar.map((day, index) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(index)}
                  className={`aspect-square border text-xs font-bold uppercase ${
                    selectedDay === index
                      ? "border-ember bg-ember text-white"
                      : "border-white/10 bg-white/[.04] text-white/50"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-3">
        <Panel icon={Camera} title="Progress photos" body="Front, side and back photos are due every Sunday before the weekly review." />
        <Panel icon={Bell} title="Notifications" body="Coach note: increase sleep target to 7.5h before the next lower-body session." />
        <Panel icon={Play} title="Exercise video" body="Open private video library for technique cues, typical errors and exercise alternatives." />
      </div>
    </div>
  );
}

function Metric({
  icon: Icon,
  label,
  value,
  detail
}: {
  icon: typeof Flame;
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <Card className="p-5">
      <Icon className="text-ember" size={22} />
      <p className="mt-6 text-xs font-bold uppercase tracking-[.22em] text-white/35">{label}</p>
      <p className="mt-2 font-display text-4xl uppercase text-bone">{value}</p>
      <p className="mt-2 text-sm text-white/48">{detail}</p>
    </Card>
  );
}

function Panel({
  icon: Icon,
  title,
  body
}: {
  icon: typeof CheckCircle2;
  title: string;
  body: string;
}) {
  return (
    <Card className="p-5">
      <Icon className="text-ember" size={22} />
      <h2 className="mt-5 text-xl font-black uppercase">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-white/56">{body}</p>
    </Card>
  );
}
