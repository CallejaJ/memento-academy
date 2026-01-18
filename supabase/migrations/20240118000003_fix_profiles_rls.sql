-- Enable RLS on profiles if not already enabled
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Drop existing policies that might be relying on auth.uid() = id
-- because we are now using custom UUIDs from Privy sync, not Supabase auth.uid()
DROP POLICY IF EXISTS "Users can insert their own profile." ON profiles;
DROP POLICY IF EXISTS "Users can update own profile." ON profiles;
DROP POLICY IF EXISTS "Public profiles are viewable by everyone." ON profiles;

-- 1. VIEW POLICY: Everyone can see profiles (needed for leaderboard, etc)
CREATE POLICY "Public profiles are viewable by everyone" ON profiles
    FOR SELECT USING (true);

-- 2. INSERT POLICY: We do inserts via SERVER SIDE Admin client, so RLS is bypassed automatically for inserts.
-- However, if we ever needed client-side insert (unlikely with our current flow), we'd need a policy.
-- For now, skipping explicit insert policy as sync-user.ts uses supabaseAdmin.

-- 3. UPDATE POLICY: challenging because current user has no Supabase session (auth.uid() is null).
-- For now, updates are done via client-side supabase client in profile-form.tsx.
-- Since we migrated to Privy, the user is technically "anon" to Supabase.
-- OPTION A: Use the Service Role for updates via a Server Action (Best Security)
-- OPTION B: Allow anon updates (Dangerous - temporary fix only, not recommended)

-- We will implement OPTION A by creating a server action for profile updates.
-- But to unblock the user IMMEDIATELY if they are stuck, we can create a temporary
-- policy that allows updates based on a trusted header or just fix the code to use a server action.

-- Let's NOT open RLS to anon. Instead, we should guide the user to a code fix.
-- But wait, the user's error says "new row violates row-level security policy".
-- This implies they are trying to UPDATE via client side.

-- Changing strategy: We must refactor profile updates to use a Server Action.
-- Changing RLS to allow anon updates is too risky. 
-- However, we can use the 'user_id' from the request if we verified it properly, but client-side RLS can't verify Privy tokens easily without custom auth.

-- CONCLUSION: We need to move profile updates to a Server Action using supabaseAdmin.
-- This migration ensures SELECT is open, but we won't add a dangerous UPDATE policy.
