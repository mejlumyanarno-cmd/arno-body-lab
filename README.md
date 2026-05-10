# Arno Body Lab

Premium online fitness coaching platform built with Next.js 15, React, TypeScript, Tailwind CSS, Framer Motion, Supabase, Stripe and Resend.

## Core Features

- Cinematic mobile-first marketing site
- Program catalogue and detailed program pages
- Pricing and conversion flows
- Supabase Auth with protected dashboard and admin routes
- Stripe subscription checkout and webhook activation
- Resend transactional onboarding and program delivery emails
- Client dashboard: workout, nutrition, calories, weight, check-ins, photos, calendar, notifications
- Trainer admin cockpit: programs, clients, videos, subscriptions, analytics, nutrition, notifications
- Supabase PostgreSQL schema with RLS policies
- SEO routes, Open Graph image, robots and sitemap
- Security headers and basic API rate limiting

## Setup

1. Install dependencies:

```bash
npm install
```

2. Copy `.env.example` to `.env.local` and set Supabase, Stripe and Resend variables.

3. Apply the Supabase migration:

```bash
supabase db push
```

4. Seed the initial programs:

```bash
supabase db reset
```

5. Start development:

```bash
npm run dev
```

## Stripe Webhook

Point Stripe to:

```text
https://your-domain.com/api/stripe/webhook
```

Required events:

- `checkout.session.completed`
- `customer.subscription.updated`
- `customer.subscription.deleted`

## Production Notes

- Use private Vimeo links or Cloudflare R2 for exercise videos.
- Set `profiles.role = 'admin'` manually for the trainer account after registration.
- Replace public imagery with the coach's professional photo/video assets before launch.
- Confirm Supabase email confirmation settings match the checkout flow.
- Add domain authentication in Resend before sending from the production address.

## Public Deployment

The recommended public host is Vercel because this is a Next.js application. See
`docs/vercel-deploy.md` for the deployment checklist and required environment variables.
