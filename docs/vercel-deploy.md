# Public Deployment

This project is ready to publish on Vercel as a Next.js app.

## Recommended Path

1. Push the project to GitHub.
2. Import the GitHub repository in Vercel.
3. Keep the default Vercel framework settings for Next.js.
4. Add the environment variables below in Vercel Project Settings.
5. Deploy a preview first, then promote to production.
6. Connect the final domain after the preview is approved.

## Required Environment Variables

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_PRICE_1_MONTH=
STRIPE_PRICE_3_MONTHS=
STRIPE_PRICE_6_MONTHS=

RESEND_API_KEY=
RESEND_FROM="Arno Body Lab <hello@your-domain.com>"
ADMIN_EMAIL=hello@your-domain.com

VIDEO_PROVIDER=vimeo
CLOUDFLARE_R2_PUBLIC_URL=
```

## CLI Alternative

If the Vercel CLI is installed and authenticated:

```bash
vercel link
vercel env pull .env.local
vercel deploy
vercel deploy --prod
```

## Before Going Live

- Replace `NEXT_PUBLIC_SITE_URL` with the real production URL.
- Replace `ADMIN_EMAIL` and `RESEND_FROM` with the real business email.
- Configure Supabase Auth redirect URLs for the production domain.
- Configure Stripe webhook URL after the production domain is known.
- Add the custom domain in Vercel after the first successful deployment.
