-- =============================================
-- PERFORMANCE & SECURITY OPTIMIZATION
-- Date: 2026-01-15
-- Fixes: RLS policy performance, function search_path, duplicate policies
-- =============================================

-- =============================================
-- 1. FIX: handle_new_user function - Mutable search_path
-- =============================================
-- Note: If this function doesn't exist, this will create it with secure defaults
-- If it exists, it will be replaced with the secure version

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public  -- FIX: Set immutable search_path
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, avatar_url, membership_tier)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NULL),
    COALESCE(NEW.raw_user_meta_data->>'avatar_url', NULL),
    'free'
  );
  RETURN NEW;
END;
$$;

-- Create trigger if it doesn't exist
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- =============================================
-- 2. FIX: user_wallets - Remove duplicate SELECT policy
-- =============================================
-- "Users can manage own wallet" (FOR ALL) already covers SELECT
DROP POLICY IF EXISTS "Users can view own wallet" ON user_wallets;

-- =============================================
-- 3. FIX: Recreate all RLS policies with optimized (select auth.uid())
-- =============================================
-- Using (select auth.uid()) instead of auth.uid() for better performance
-- See: https://supabase.com/docs/guides/database/postgres/row-level-security#call-functions-with-select

-- =============================================
-- 3.1 profiles policies
-- =============================================
DROP POLICY IF EXISTS "Users can view their own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON profiles;

CREATE POLICY "Users can view their own profile" ON profiles
  FOR SELECT USING ((select auth.uid()) = id);

CREATE POLICY "Users can update their own profile" ON profiles
  FOR UPDATE USING ((select auth.uid()) = id);

CREATE POLICY "Users can insert their own profile" ON profiles
  FOR INSERT WITH CHECK ((select auth.uid()) = id);

-- =============================================
-- 3.2 course_progress policies
-- =============================================
DROP POLICY IF EXISTS "Users can view own progress" ON course_progress;
DROP POLICY IF EXISTS "Users can insert own progress" ON course_progress;
DROP POLICY IF EXISTS "Users can update own progress" ON course_progress;

CREATE POLICY "Users can view own progress" ON course_progress
  FOR SELECT USING ((select auth.uid()) = user_id);

CREATE POLICY "Users can insert own progress" ON course_progress
  FOR INSERT WITH CHECK ((select auth.uid()) = user_id);

CREATE POLICY "Users can update own progress" ON course_progress
  FOR UPDATE USING ((select auth.uid()) = user_id);

-- =============================================
-- 3.3 user_achievements policies
-- =============================================
DROP POLICY IF EXISTS "Users can view own achievements" ON user_achievements;
DROP POLICY IF EXISTS "Users can insert own achievements" ON user_achievements;

CREATE POLICY "Users can view own achievements" ON user_achievements
  FOR SELECT USING ((select auth.uid()) = user_id);

CREATE POLICY "Users can insert own achievements" ON user_achievements
  FOR INSERT WITH CHECK ((select auth.uid()) = user_id);

-- =============================================
-- 3.4 game_sessions policies
-- =============================================
DROP POLICY IF EXISTS "Users can view own game sessions" ON game_sessions;
DROP POLICY IF EXISTS "Users can insert own game sessions" ON game_sessions;
DROP POLICY IF EXISTS "Users can update own game sessions" ON game_sessions;

CREATE POLICY "Users can view own game sessions" ON game_sessions
  FOR SELECT USING ((select auth.uid()) = user_id);

CREATE POLICY "Users can insert own game sessions" ON game_sessions
  FOR INSERT WITH CHECK ((select auth.uid()) = user_id);

CREATE POLICY "Users can update own game sessions" ON game_sessions
  FOR UPDATE USING ((select auth.uid()) = user_id);

-- =============================================
-- 3.5 game_answers policies
-- =============================================
DROP POLICY IF EXISTS "Users can view own game answers" ON game_answers;
DROP POLICY IF EXISTS "Users can insert own game answers" ON game_answers;

CREATE POLICY "Users can view own game answers" ON game_answers
  FOR SELECT USING (
    session_id IN (SELECT id FROM game_sessions WHERE user_id = (select auth.uid()))
  );

CREATE POLICY "Users can insert own game answers" ON game_answers
  FOR INSERT WITH CHECK (
    session_id IN (SELECT id FROM game_sessions WHERE user_id = (select auth.uid()))
  );

-- =============================================
-- 3.6 game_question_history policies
-- =============================================
DROP POLICY IF EXISTS "Users can view own game history" ON game_question_history;
DROP POLICY IF EXISTS "Users can insert own game history" ON game_question_history;

CREATE POLICY "Users can view own game history" ON game_question_history
  FOR SELECT USING ((select auth.uid()) = user_id);

CREATE POLICY "Users can insert own game history" ON game_question_history
  FOR INSERT WITH CHECK ((select auth.uid()) = user_id);

-- =============================================
-- 3.7 user_wallets policies (only keep the ALL policy, already dropped SELECT above)
-- =============================================
DROP POLICY IF EXISTS "Users can manage own wallet" ON user_wallets;

CREATE POLICY "Users can manage own wallet" ON user_wallets
  FOR ALL USING ((select auth.uid()) = user_id);

-- =============================================
-- 3.8 newsletter_subscribers policies (from previous migration, also optimize)
-- =============================================
DROP POLICY IF EXISTS "Users can view own subscription" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Users can unsubscribe" ON newsletter_subscribers;

CREATE POLICY "Users can view own subscription" ON newsletter_subscribers
  FOR SELECT
  TO authenticated
  USING ((select auth.email()) = email);

CREATE POLICY "Users can unsubscribe" ON newsletter_subscribers
  FOR DELETE
  TO authenticated
  USING ((select auth.email()) = email);

-- =============================================
-- NOTE: Leaked Password Protection
-- =============================================
-- The "Leaked password protection" setting cannot be enabled via SQL.
-- Enable it in: Supabase Dashboard → Authentication → Providers → Email
-- Toggle ON: "Protect against compromised passwords"
-- =============================================
