import { type NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { welcomeProgramEmail } from "@/lib/email/templates";
import { getResend, resendFrom } from "@/lib/email/resend";
import { getStripe } from "@/lib/stripe/client";
import { createAdminClient } from "@/lib/supabase/admin";
import { absoluteUrl } from "@/lib/utils";

export const dynamic = "force-dynamic";

const statusMap = new Set([
  "trialing",
  "active",
  "past_due",
  "canceled",
  "unpaid",
  "incomplete"
]);

export async function POST(request: NextRequest) {
  const stripe = getStripe();
  const signature = request.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return NextResponse.json({ error: "Webhook signature config missing" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(await request.text(), signature, webhookSecret);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Invalid webhook signature";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session);
  }

  if (event.type === "customer.subscription.updated" || event.type === "customer.subscription.deleted") {
    await handleSubscriptionChanged(event.data.object as Stripe.Subscription);
  }

  return NextResponse.json({ received: true });
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const stripe = getStripe();
  const supabase = createAdminClient();
  const subscriptionId =
    typeof session.subscription === "string" ? session.subscription : session.subscription?.id;

  if (!subscriptionId) {
    return;
  }

  const subscription = await stripe.subscriptions.retrieve(subscriptionId);
  const userId = session.client_reference_id ?? session.metadata?.userId;
  const email = session.customer_details?.email ?? session.customer_email;

  if (!userId || !email) {
    return;
  }

  await supabase.from("profiles").upsert({
    id: userId,
    email,
    full_name: session.customer_details?.name,
    role: "client"
  });

  const priceId = subscription.items.data[0]?.price.id;
  const firstItem = subscription.items.data[0];
  const normalizedStatus = statusMap.has(subscription.status) ? subscription.status : "incomplete";

  if (priceId) {
    await supabase.from("subscriptions").upsert(
      {
        client_id: userId,
        stripe_customer_id:
          typeof subscription.customer === "string" ? subscription.customer : subscription.customer.id,
        stripe_subscription_id: subscription.id,
        stripe_price_id: priceId,
        status: normalizedStatus,
        current_period_start: timestampToIso(firstItem?.current_period_start),
        current_period_end: timestampToIso(firstItem?.current_period_end),
        cancel_at_period_end: subscription.cancel_at_period_end
      },
      { onConflict: "stripe_subscription_id" }
    );
  }

  const programSlug = session.metadata?.programSlug ?? subscription.metadata.programSlug;
  let programTitle = "Personal Coaching";

  if (programSlug) {
    const { data: program } = await supabase
      .from("programs")
      .select("id,title")
      .eq("slug", programSlug)
      .maybeSingle();

    if (program?.id) {
      programTitle = program.title;
      await supabase.from("client_programs").insert({
        client_id: userId,
        program_id: program.id
      });
    }
  }

  const resend = getResend();
  const emailPayload = welcomeProgramEmail({
    fullName: session.customer_details?.name,
    programTitle,
    loginUrl: absoluteUrl("/login"),
    email
  });

  await resend.emails.send({
    from: resendFrom,
    to: email,
    subject: emailPayload.subject,
    html: emailPayload.html
  });
}

async function handleSubscriptionChanged(subscription: Stripe.Subscription) {
  const supabase = createAdminClient();
  const normalizedStatus = statusMap.has(subscription.status) ? subscription.status : "incomplete";
  const firstItem = subscription.items.data[0];

  await supabase
    .from("subscriptions")
    .update({
      status: normalizedStatus,
      current_period_start: timestampToIso(firstItem?.current_period_start),
      current_period_end: timestampToIso(firstItem?.current_period_end),
      cancel_at_period_end: subscription.cancel_at_period_end,
      updated_at: new Date().toISOString()
    })
    .eq("stripe_subscription_id", subscription.id);
}

function timestampToIso(timestamp: number | null | undefined) {
  return timestamp ? new Date(timestamp * 1000).toISOString() : null;
}
