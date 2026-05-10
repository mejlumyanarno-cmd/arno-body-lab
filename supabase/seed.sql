insert into public.programs (slug, title, goal, summary, description, duration_weeks, price_monthly, stripe_price_id, cover_image_url)
values
  ('fat-loss', 'Fat Loss System', 'fat_loss', 'Structured deficit, strength training and weekly check-ins.', 'A fat loss program built around training progression, calories, macros and accountability.', 12, 149, null, null),
  ('muscle-gain', 'Muscle Gain Blueprint', 'muscle_gain', 'Hypertrophy-focused programming and nutrition targets.', 'A muscle gain system for progressive overload, recovery and clean surplus nutrition.', 16, 179, null, null),
  ('beginner-program', 'Beginner Program', 'beginner', 'Technique-first onboarding for new gym clients.', 'A beginner system for safe movement, gym confidence and basic nutrition control.', 8, 99, null, null),
  ('women-transformation', 'Women''s Transformation', 'women_transformation', 'Shape-focused training and sustainable nutrition.', 'A transformation program for lower body strength, waist control and lifestyle structure.', 12, 159, null, null),
  ('personal-coaching', 'Personal Coaching', 'personal_coaching', 'High-touch one-to-one coaching.', 'Personal coaching with custom programming, priority support and detailed weekly adjustments.', 4, 299, null, null),
  ('nutrition-support', 'Nutrition Support', 'nutrition', 'Nutrition-only coaching for food discipline.', 'Calories, macros, meal structure and weekly nutrition review.', 4, 79, null, null)
on conflict (slug) do update
set title = excluded.title,
    goal = excluded.goal,
    summary = excluded.summary,
    description = excluded.description,
    duration_weeks = excluded.duration_weeks,
    price_monthly = excluded.price_monthly,
    updated_at = now();
