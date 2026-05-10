export type ProgramSlug =
  | "fat-loss"
  | "muscle-gain"
  | "beginner-program"
  | "women-transformation"
  | "personal-coaching"
  | "nutrition-support";

export type Program = {
  slug: ProgramSlug;
  title: string;
  eyebrow: string;
  price: string;
  monthlyPrice: number;
  duration: string;
  summary: string;
  image: string;
  audience: string[];
  includes: string[];
  coaching: string[];
  results: string[];
  checkoutPriceEnv: string;
};

export const programs: Program[] = [
  {
    slug: "fat-loss",
    title: "Fat Loss System",
    eyebrow: "Cut with control",
    price: "$149 / month",
    monthlyPrice: 149,
    duration: "8-12 weeks",
    summary:
      "A structured deficit, strength training and weekly check-ins built for visible fat loss without losing muscle.",
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1400&q=85",
    audience: [
      "Busy clients who want a leaner body",
      "People stuck after repeated diets",
      "Clients who need accountability and clear weekly targets"
    ],
    includes: [
      "Progressive gym or home training plan",
      "Calories, macros and meal structure",
      "Weekly check-ins with plan adjustments",
      "Exercise video library and rest timers"
    ],
    coaching: [
      "Initial assessment and goal mapping",
      "Weekly body-weight and photo review",
      "Nutrition changes based on adherence and progress"
    ],
    results: [
      "Sharper waist and lower body fat",
      "Better food control and less guesswork",
      "Stronger training discipline"
    ],
    checkoutPriceEnv: "STRIPE_PRICE_1_MONTH"
  },
  {
    slug: "muscle-gain",
    title: "Muscle Gain Blueprint",
    eyebrow: "Build dense muscle",
    price: "$179 / month",
    monthlyPrice: 179,
    duration: "12-24 weeks",
    summary:
      "Hypertrophy-focused programming, recovery standards and nutrition targets for clean muscle gain.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85",
    audience: [
      "Intermediate lifters who stopped progressing",
      "Lean clients who need structure for size",
      "Anyone ready to train with measurable progression"
    ],
    includes: [
      "Hypertrophy split with progressive overload",
      "Exercise substitutions for weak points",
      "Surplus nutrition and recovery targets",
      "Monthly program refinement"
    ],
    coaching: [
      "Lift tracking and volume control",
      "Recovery, sleep and soreness review",
      "Technique guidance through exercise video notes"
    ],
    results: [
      "Visible muscle fullness",
      "Higher training numbers",
      "Clear system for long-term growth"
    ],
    checkoutPriceEnv: "STRIPE_PRICE_1_MONTH"
  },
  {
    slug: "beginner-program",
    title: "Beginner Program",
    eyebrow: "Start correctly",
    price: "$99 / month",
    monthlyPrice: 99,
    duration: "6-8 weeks",
    summary:
      "A clean first phase for beginners who want technique, confidence and a serious routine from day one.",
    image:
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1400&q=85",
    audience: [
      "New clients who feel lost in the gym",
      "People returning after a long break",
      "Clients who need safe fundamentals"
    ],
    includes: [
      "Technique-first training calendar",
      "Simple nutrition targets",
      "Exercise video explanations",
      "Weekly habit score and check-in"
    ],
    coaching: [
      "Foundation movement progression",
      "Beginner-friendly workload control",
      "Direct support for questions and confidence"
    ],
    results: [
      "Confident gym routine",
      "Better posture and movement quality",
      "First visible changes without overwhelm"
    ],
    checkoutPriceEnv: "STRIPE_PRICE_1_MONTH"
  },
  {
    slug: "women-transformation",
    title: "Women's Transformation",
    eyebrow: "Strong, lean, confident",
    price: "$159 / month",
    monthlyPrice: 159,
    duration: "12 weeks",
    summary:
      "Training and nutrition for women who want a tighter shape, stronger lower body and sustainable lifestyle structure.",
    image:
      "https://images.unsplash.com/photo-1609899537878-88d5ba429bdb?auto=format&fit=crop&w=1400&q=85",
    audience: [
      "Women who want shape without extreme dieting",
      "Clients focused on legs, glutes and waist",
      "Women who need premium accountability"
    ],
    includes: [
      "Lower-body and full-body training cycles",
      "Cycle-aware intensity guidance",
      "Nutrition targets and lifestyle rules",
      "Weekly progress review"
    ],
    coaching: [
      "Shape-focused programming",
      "Food flexibility without losing control",
      "Check-ins that track energy, stress and adherence"
    ],
    results: [
      "Tighter waist and stronger lower body",
      "Improved energy and confidence",
      "A repeatable lifestyle system"
    ],
    checkoutPriceEnv: "STRIPE_PRICE_1_MONTH"
  },
  {
    slug: "personal-coaching",
    title: "Personal Coaching",
    eyebrow: "High-touch coaching",
    price: "$299 / month",
    monthlyPrice: 299,
    duration: "Monthly subscription",
    summary:
      "A premium one-to-one coaching experience with personalized programming, direct support and deeper accountability.",
    image:
      "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?auto=format&fit=crop&w=1400&q=85",
    audience: [
      "Clients who want the closest guidance",
      "Advanced transformations with complex schedules",
      "Executives and high-performers who need precision"
    ],
    includes: [
      "Custom training program",
      "Nutrition and supplement strategy",
      "Priority check-ins and direct coach support",
      "Monthly body composition review"
    ],
    coaching: [
      "Fully personalized training and nutrition",
      "Weekly adjustments based on real data",
      "Priority response and lifestyle strategy"
    ],
    results: [
      "Faster decision-making",
      "Higher accountability",
      "Premium transformation experience"
    ],
    checkoutPriceEnv: "STRIPE_PRICE_1_MONTH"
  },
  {
    slug: "nutrition-support",
    title: "Nutrition Support",
    eyebrow: "Food discipline",
    price: "$79 / month",
    monthlyPrice: 79,
    duration: "Monthly subscription",
    summary:
      "Nutrition-only coaching for clients who already train but need calories, macros and food structure that finally works.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1400&q=85",
    audience: [
      "Clients who train but cannot control food",
      "People who need simple eating rules",
      "Fat loss or muscle gain clients needing macro support"
    ],
    includes: [
      "Calories and macro targets",
      "Meal structure and food swaps",
      "Weekly nutrition check-ins",
      "Adjustments based on weight trend"
    ],
    coaching: [
      "Realistic diet setup",
      "Adherence tracking",
      "Weekly changes based on progress"
    ],
    results: [
      "Less food confusion",
      "Better body composition control",
      "Nutrition habits that fit real life"
    ],
    checkoutPriceEnv: "STRIPE_PRICE_1_MONTH"
  }
];

export function getProgram(slug: string) {
  return programs.find((program) => program.slug === slug);
}
