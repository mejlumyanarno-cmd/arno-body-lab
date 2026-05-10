import { NextResponse } from "next/server";
import { absoluteUrl } from "@/lib/utils";
import { getConfiguredPriceId, getStripe } from "@/lib/stripe/client";
import { createClient } from "@/lib/supabase/server";
import { checkoutSchema } from "@/lib/validators/checkout";

export async function POST(request: Request) {
  const payload = checkoutSchema.safeParse(await request.json());

  if (!payload.success) {
    return NextResponse.json({ error: "Invalid checkout request" }, { status: 400 });
  }

  const supabase = await createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user?.email) {
    return NextResponse.json({ error: "Authentication required" }, { status: 401 });
  }

  const priceId = getConfiguredPriceId(payload.data.plan, payload.data.priceId);

  if (!priceId) {
    return NextResponse.json({ error: "Stripe price is not configured" }, { status: 500 });
  }

  const stripe = getStripe();
  const programSlug = payload.data.programSlug ?? "personal-coaching";
  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "subscription",
    customer_email: user.email,
    client_reference_id: user.id,
    allow_promotion_codes: true,
    success_url: absoluteUrl("/dashboard?checkout=success"),
    cancel_url: absoluteUrl(`/pricing?checkout=cancelled`),
    line_items: [
      {
        price: priceId,
        quantity: 1
      }
    ],
    metadata: {
      userId: user.id,
      programSlug
    },
    subscription_data: {
      metadata: {
        userId: user.id,
        programSlug
      }
    }
  });

  return NextResponse.json({ url: checkoutSession.url });
}
