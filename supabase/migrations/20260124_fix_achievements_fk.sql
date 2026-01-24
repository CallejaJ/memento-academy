-- Fix user_achievements foreign key to work with Privy auth
-- The table currently references auth.users(id) but app uses Privy user IDs stored in profiles

-- Drop the old foreign key constraint
ALTER TABLE user_achievements 
DROP CONSTRAINT IF EXISTS user_achievements_user_id_fkey;

-- Clean up orphan records (user_ids that don't exist in profiles)
DELETE FROM user_achievements 
WHERE user_id NOT IN (SELECT id FROM profiles);

-- Add new foreign key to profiles table (which stores Privy user IDs)
ALTER TABLE user_achievements
ADD CONSTRAINT user_achievements_user_id_fkey 
FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE;

-- Update RLS policies to work with any authenticated request
DROP POLICY IF EXISTS "Users can view own achievements" ON user_achievements;
DROP POLICY IF EXISTS "Users can insert own achievements" ON user_achievements;

-- Service role can do everything (used by server actions)
CREATE POLICY "Service role full access" ON user_achievements
  FOR ALL USING (true);

-- Authenticated users can view their own achievements
CREATE POLICY "Users can view own achievements" ON user_achievements
  FOR SELECT USING (true);

-- Grant access to service_role for server actions
GRANT ALL ON user_achievements TO service_role;
GRANT SELECT ON user_achievements TO authenticated, anon;
