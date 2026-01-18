-- =============================================
-- FIX: Allow anonymous newsletter subscriptions
-- Date: 2026-01-18
-- =============================================

-- Problem: Newsletter form is public but RLS blocks anonymous inserts
-- Solution: Add INSERT policy for anonymous users

-- Add policy for anonymous newsletter subscriptions
CREATE POLICY "Anyone can subscribe to newsletter"
ON public.newsletter_subscribers
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Note: This is safe because:
-- 1. We only allow INSERT (not SELECT, UPDATE, DELETE for anon)
-- 2. The email field has a UNIQUE constraint, preventing duplicates
-- 3. We validate email format in the application before inserting
