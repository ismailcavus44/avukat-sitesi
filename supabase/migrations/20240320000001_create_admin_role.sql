-- Create admin role
create role admin;

-- Create admin_users table
create table if not exists public.admin_users (
  id uuid references auth.users on delete cascade primary key,
  email text unique not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.admin_users enable row level security;

-- Create policies
create policy "Admin users can be viewed only by themselves"
  on public.admin_users for select
  using (auth.uid() = id);

-- Update blog_posts policies
drop policy if exists "Enable insert for authenticated users only" on public.blog_posts;
drop policy if exists "Enable update for authenticated users only" on public.blog_posts;
drop policy if exists "Enable delete for authenticated users only" on public.blog_posts;

create policy "Enable insert for admin users only" on public.blog_posts
  for insert with check (
    auth.uid() in (select id from public.admin_users)
  );

create policy "Enable update for admin users only" on public.blog_posts
  for update using (
    auth.uid() in (select id from public.admin_users)
  );

create policy "Enable delete for admin users only" on public.blog_posts
  for delete using (
    auth.uid() in (select id from public.admin_users)
  ); 