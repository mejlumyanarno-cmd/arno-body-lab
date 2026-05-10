# Premium Online Fitness Coaching Platform

## Product Architecture

This project is structured as a production SaaS platform for a personal premium fitness coach:

- Public acquisition layer: cinematic landing page, program catalogue, pricing, about, contact, legal pages.
- Commerce layer: Stripe Checkout subscriptions, webhook confirmation, plan activation, program assignment.
- Identity layer: Supabase Auth with protected dashboard and trainer-only admin access.
- Coaching layer: training programs, exercises, video references, nutrition targets, check-ins, progress photos, notifications.
- Automation layer: Resend transactional email for welcome, payment confirmation, onboarding, renewal and program delivery.
- Content layer: exercise videos should be stored as private Vimeo links or in Cloudflare R2, referenced from the database.

## Runtime Flow

1. User arrives from Instagram and opens the mobile-first public site.
2. User selects a program or pricing package and starts Stripe Checkout.
3. Stripe confirms payment via webhook.
4. Webhook resolves or creates the client profile, records the subscription, assigns a program and sends onboarding email through Resend.
5. Client logs in through Supabase Auth and lands in the premium dashboard.
6. Dashboard reads assigned program, today's workout, nutrition plan, progress metrics, check-ins and notifications.
7. Trainer manages programs, clients, subscriptions, videos, nutrition and analytics in the admin panel.

## Security Model

- Supabase Row Level Security is enabled on user-owned tables.
- Admin access is driven by `profiles.role = 'admin'`.
- Stripe webhook signature validation is mandatory.
- Service role key is used only in server-only code.
- Route middleware protects `/dashboard` and `/admin`.
- Forms are validated with Zod before server actions or API mutations.
- Sensitive config lives in environment variables only.

## Performance Model

- App Router and React Server Components for public pages.
- Static content and metadata for SEO-critical pages.
- Optimized responsive images through `next/image`.
- Minimal client components: Framer Motion is isolated to animated marketing wrappers.
- Mobile-first layout, reduced layout shift, small repeated cards, and no heavy global state.

## Deployment

- Vercel hosts the Next.js application.
- Supabase hosts PostgreSQL, Auth and Storage policies.
- Stripe handles recurring subscriptions.
- Resend sends transactional email.
- Private Vimeo links or Cloudflare R2 store training video assets.
