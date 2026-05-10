export const pricingPlans = [
  {
    title: "1 Month",
    price: "$149",
    cadence: "month",
    stripeEnv: "STRIPE_PRICE_1_MONTH",
    description: "Start the system, get structure and build momentum.",
    features: ["Training plan", "Nutrition targets", "Dashboard access", "Weekly check-in"]
  },
  {
    title: "3 Months",
    price: "$399",
    cadence: "3 months",
    stripeEnv: "STRIPE_PRICE_3_MONTHS",
    description: "The strongest option for a visible transformation phase.",
    featured: true,
    features: [
      "Full transformation plan",
      "Priority adjustments",
      "Progress photo review",
      "Program sent by email"
    ]
  },
  {
    title: "6 Months",
    price: "$699",
    cadence: "6 months",
    stripeEnv: "STRIPE_PRICE_6_MONTHS",
    description: "Deep coaching for lifestyle change and long-term physique development.",
    features: ["Advanced periodization", "Nutrition cycles", "Monthly strategy calls", "VIP support"]
  }
];
