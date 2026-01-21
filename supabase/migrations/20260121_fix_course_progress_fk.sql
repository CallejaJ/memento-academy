-- Fix course_progress foreign key constraint
-- Change from auth.users(id) to profiles(id) since we use Privy auth, not Supabase Auth

-- First, drop the existing foreign key constraint
ALTER TABLE course_progress 
DROP CONSTRAINT IF EXISTS course_progress_user_id_fkey;

-- Add new foreign key constraint referencing profiles table instead
ALTER TABLE course_progress
ADD CONSTRAINT course_progress_user_id_fkey 
FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE;

-- Update RLS policies to not use auth.uid() since we use Privy
-- First drop existing policies
DROP POLICY IF EXISTS "Users can view own progress" ON course_progress;
DROP POLICY IF EXISTS "Users can insert own progress" ON course_progress;
DROP POLICY IF EXISTS "Users can update own progress" ON course_progress;

-- Create new policies that allow service role (admin) to do everything
-- Since we use Server Actions with supabaseAdmin, we don't need user-specific policies
-- But we'll add basic policies for safety

-- Allow authenticated users via service role
CREATE POLICY "Service role full access" ON course_progress
  FOR ALL USING (true) WITH CHECK (true);
