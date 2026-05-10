import Stripe from "stripe";

export function getStripe() {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    throw new Error("STRIPE_SECRET_KEY is missing.");
  }

  return new Stripe(secretKey, {
    apiVersion: "2025-08-27.basil",
    typescript: true
  });
}

export function getConfiguredPriceId(plan?: string, fallback?: string) {
  if (fallback) {
    return fallback;
  }

  const normalized = plan?.toLowerCase() ?? "";

  if (normalized.includes("6")) {
    return process.env.STRIPE_PRICE_6_MONTHS;
  }

  if (normalized.includes("3")) {
    return process.env.STRIPE_PRICE_3_MONTHS;
  }

  return process.env.STRIPE_PRICE_1_MONTH;
}
