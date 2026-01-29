-- =============================================
-- FIX: Allow server to read and update newsletter subscribers
-- Date: 2026-01-29
-- =============================================

-- Problem: Unsubscribe feature needs SELECT and UPDATE access
-- Solution: Add policies for service role (server-side)

-- Allow service role to select newsletter subscribers
CREATE POLICY "Service role can select newsletter subscribers"
ON public.newsletter_subscribers
FOR SELECT
TO service_role
USING (true);

-- Allow service role to update newsletter subscribers
CREATE POLICY "Service role can update newsletter subscribers"
ON public.newsletter_subscribers
FOR UPDATE
TO service_role
USING (true)
WITH CHECK (true);
