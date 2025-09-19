-- LifeTrack — Supabase schema + RLS (run in SQL editor)
create extension if not exists pgcrypto;

create table if not exists public.tasks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  title text not null,
  done boolean not null default false,
  inserted_at timestamptz not null default now()
);

-- Enable Row Level Security
alter table public.tasks enable row level security;

-- Policies: user can only access their own rows
create policy "read own tasks" on public.tasks
  for select to authenticated
  using (user_id = auth.uid());

create policy "insert own tasks" on public.tasks
  for insert to authenticated
  with check (user_id = auth.uid());

create policy "update own tasks" on public.tasks
  for update to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

create policy "delete own tasks" on public.tasks
  for delete to authenticated
  using (user_id = auth.uid());

create index if not exists idx_tasks_user_inserted on public.tasks (user_id, inserted_at desc);
