create table if not exists public.blog_posts (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  content text not null,
  image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  slug text not null unique,
  excerpt text not null
);

-- Enable Row Level Security
alter table public.blog_posts enable row level security;

-- Create policies
create policy "Enable read access for all users" on public.blog_posts
  for select using (true);

create policy "Enable insert for authenticated users only" on public.blog_posts
  for insert with check (auth.role() = 'authenticated');

create policy "Enable update for authenticated users only" on public.blog_posts
  for update using (auth.role() = 'authenticated');

create policy "Enable delete for authenticated users only" on public.blog_posts
  for delete using (auth.role() = 'authenticated'); 