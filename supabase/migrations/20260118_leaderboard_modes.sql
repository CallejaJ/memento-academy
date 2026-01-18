-- View for leaderboard filtered by game mode
CREATE OR REPLACE VIEW game_leaderboard_modes AS
SELECT 
  u.id as user_id,
  u.email,
  -- Prioritize profile name, then metadata, then null
  COALESCE(p.full_name, u.raw_user_meta_data->>'full_name') as display_name,
  uw.wallet_address,
  COALESCE(gs.game_mode, 'classic') as game_mode,
  COUNT(gs.id) as games_played,
  COALESCE(SUM(gs.score), 0) as total_score,
  COALESCE(MAX(gs.score), 0) as best_score,
  COALESCE(AVG(gs.score), 0)::NUMERIC(4,1) as avg_score
FROM auth.users u
JOIN game_sessions gs ON u.id = gs.user_id AND gs.finished_at IS NOT NULL
LEFT JOIN user_wallets uw ON u.id = uw.user_id
LEFT JOIN profiles p ON u.id = p.id
GROUP BY u.id, u.email, u.raw_user_meta_data, p.full_name, uw.wallet_address, gs.game_mode;

-- Grant access to the view
GRANT SELECT ON game_leaderboard_modes TO anon, authenticated, service_role;
