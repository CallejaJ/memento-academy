-- Fix Database Security Issues
-- 1. Drop potentially legacy/insecure view
DROP VIEW IF EXISTS game_leaderboard;

-- 2. Update game_leaderboard_modes to be SECURE
-- We must DROP the view first because we are removing the 'email' column,
-- and PostgreSQL's CREATE OR REPLACE VIEW does not support removing columns.
DROP VIEW IF EXISTS game_leaderboard_modes;

-- Changes:
-- - Removed join to auth.users (prevents exposure of email/metadata)
-- - Added WITH (security_invoker = true) to enforce RLS
-- - Fallback to 'Anonymous' if profile name is missing
CREATE OR REPLACE VIEW game_leaderboard_modes WITH (security_invoker = true) AS
SELECT 
  gs.user_id,
  -- Removed u.email to protect user privacy
  -- Prioritize profile name, then "Anonymous"
  COALESCE(
    p.full_name, 
    'Anonymous'
  ) as display_name,
  -- Prioritize user_wallets for web3 users
  uw.wallet_address,
  COALESCE(gs.game_mode, 'classic') as game_mode,
  COUNT(gs.id) as games_played,
  COALESCE(SUM(gs.score), 0) as total_score,
  COALESCE(MAX(gs.score), 0) as best_score,
  COALESCE(AVG(gs.score), 0)::NUMERIC(4,1) as avg_score
FROM game_sessions gs
LEFT JOIN profiles p ON gs.user_id = p.id
LEFT JOIN user_wallets uw ON gs.user_id = uw.user_id
WHERE gs.finished_at IS NOT NULL
GROUP BY gs.user_id, p.full_name, uw.wallet_address, gs.game_mode;

-- Grant access to the view
GRANT SELECT ON game_leaderboard_modes TO anon, authenticated, service_role;

-- 3. Update user_ranks to be SECURE
-- Dropping first to ensure clean recreation with security_invoker
DROP VIEW IF EXISTS user_ranks;

-- Changes:
-- - Added WITH (security_invoker = true) to enforce RLS
CREATE OR REPLACE VIEW user_ranks WITH (security_invoker = true) AS
SELECT
  user_id,
  total_score,
  CASE
    WHEN total_score >= 10000 THEN 'Leyenda'
    WHEN total_score >= 2000 THEN 'Maestro'
    WHEN total_score >= 500 THEN 'Experto'
    WHEN total_score >= 100 THEN 'Aprendiz'
    ELSE 'Novato'
  END as rank
FROM (
  SELECT user_id, COALESCE(SUM(score), 0) as total_score
  FROM game_sessions
  WHERE finished_at IS NOT NULL
  GROUP BY user_id
) scores;

-- Grant access to view
GRANT SELECT ON user_ranks TO anon, authenticated, service_role;
