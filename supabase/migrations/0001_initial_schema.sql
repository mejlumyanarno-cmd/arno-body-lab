create extension if not exists "pgcrypto";

create type public.user_role as enum ('client', 'admin');
create type public.subscription_status as enum ('trialing', 'active', 'past_due', 'canceled', 'unpaid', 'incomplete');
create type public.program_goal as enum ('fat_loss', 'muscle_gain', 'beginner', 'women_transformation', 'personal_coaching', 'nutrition');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  full_name text,
  phone text,
  role public.user_role not null default 'client',
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, role)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name'),
    'client'
  )
  on conflict (id) do update
  set email = excluded.email,
      full_name = coalesce(excluded.full_name, public.profiles.full_name),
      updated_at = now();
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

create table public.programs (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  goal public.program_goal not null,
  summary text not null,
  description text not null,
  duration_weeks integer not null check (duration_weeks > 0),
  price_monthly numeric(10,2) not null check (price_monthly >= 0),
  stripe_price_id text,
  cover_image_url text,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.exercises (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  muscle_group text not null,
  video_url text,
  rest_seconds integer not null default 90,
  typical_errors text[] not null default '{}',
  alternatives text[] not null default '{}',
  notes text,
  created_at timestamptz not null default now()
);

create table public.workouts (
  id uuid primary key default gen_random_uuid(),
  program_id uuid not null references public.programs(id) on delete cascade,
  title text not null,
  week integer not null check (week > 0),
  day integer not null check (day > 0),
  focus text not null,
  estimated_minutes integer not null default 60,
  created_at timestamptz not null default now()
);

create table public.workout_exercises (
  id uuid primary key default gen_random_uuid(),
  workout_id uuid not null references public.workouts(id) on delete cascade,
  exercise_id uuid not null references public.exercises(id) on delete restrict,
  position integer not null,
  sets integer not null check (sets > 0),
  reps text not null,
  tempo text,
  notes text
);

create table public.client_programs (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.profiles(id) on delete cascade,
  program_id uuid not null references public.programs(id) on delete restrict,
  started_at timestamptz not null default now(),
  ends_at timestamptz,
  is_active boolean not null default true,
  unique (client_id, program_id, started_at)
);

create table public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.profiles(id) on delete cascade,
  stripe_customer_id text not null,
  stripe_subscription_id text not null unique,
  stripe_price_id text not null,
  status public.subscription_status not null,
  current_period_start timestamptz,
  current_period_end timestamptz,
  cancel_at_period_end boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.nutrition_plans (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.profiles(id) on delete cascade,
  calories integer not null,
  protein_g integer not null,
  carbs_g integer not null,
  fat_g integer not null,
  water_l numeric(4,1) not null default 3.0,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.progress_entries (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.profiles(id) on delete cascade,
  weight_kg numeric(5,2),
  body_fat_percent numeric(5,2),
  waist_cm numeric(5,2),
  chest_cm numeric(5,2),
  hips_cm numeric(5,2),
  photo_url text,
  notes text,
  logged_at timestamptz not null default now()
);

create table public.check_ins (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.profiles(id) on delete cascade,
  energy integer check (energy between 1 and 10),
  sleep_hours numeric(3,1),
  adherence integer check (adherence between 1 and 100),
  message text,
  trainer_reply text,
  created_at timestamptz not null default now()
);

create table public.notifications (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references public.profiles(id) on delete cascade,
  title text not null,
  body text not null,
  read_at timestamptz,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.programs enable row level security;
alter table public.exercises enable row level security;
alter table public.workouts enable row level security;
alter table public.workout_exercises enable row level security;
alter table public.client_programs enable row level security;
alter table public.subscriptions enable row level security;
alter table public.nutrition_plans enable row level security;
alter table public.progress_entries enable row level security;
alter table public.check_ins enable row level security;
alter table public.notifications enable row level security;

create policy "profiles self read" on public.profiles for select using (auth.uid() = id);
create policy "profiles self update" on public.profiles for update using (auth.uid() = id);
create policy "public programs read" on public.programs for select using (is_active = true);
create policy "clients read assigned programs" on public.client_programs for select using (auth.uid() = client_id);
create policy "clients read own subscriptions" on public.subscriptions for select using (auth.uid() = client_id);
create policy "clients manage own progress" on public.progress_entries for all using (auth.uid() = client_id);
create policy "clients manage own checkins" on public.check_ins for all using (auth.uid() = client_id);
create policy "clients read own nutrition" on public.nutrition_plans for select using (auth.uid() = client_id);
create policy "clients read own notifications" on public.notifications for select using (auth.uid() = client_id);

create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

create policy "admins manage profiles" on public.profiles for all using (public.is_admin());
create policy "admins manage programs" on public.programs for all using (public.is_admin());
create policy "admins manage exercises" on public.exercises for all using (public.is_admin());
create policy "admins manage workouts" on public.workouts for all using (public.is_admin());
create policy "admins manage workout exercises" on public.workout_exercises for all using (public.is_admin());
create policy "admins manage client programs" on public.client_programs for all using (public.is_admin());
create policy "admins manage subscriptions" on public.subscriptions for all using (public.is_admin());
create policy "admins manage nutrition" on public.nutrition_plans for all using (public.is_admin());
create policy "admins manage progress" on public.progress_entries for all using (public.is_admin());
create policy "admins manage checkins" on public.check_ins for all using (public.is_admin());
create policy "admins manage notifications" on public.notifications for all using (public.is_admin());
