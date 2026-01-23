-- Add avatar_url to leaderboard view for profile pictures
DROP VIEW IF EXISTS game_leaderboard_modes;

CREATE OR REPLACE VIEW game_leaderboard_modes WITH (security_invoker = true) AS
SELECT 
  gs.user_id,
  COALESCE(p.full_name, 'Anonymous') as display_name,
  p.avatar_url,  -- Add avatar URL from profiles
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
GROUP BY gs.user_id, p.full_name, p.avatar_url, uw.wallet_address, gs.game_mode;

GRANT SELECT ON game_leaderboard_modes TO anon, authenticated, service_role;
