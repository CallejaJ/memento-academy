-- Redefine view to prioritize game_sessions as the source of truth for "active players"
-- and LEFT JOIN to authentication tables. This ensures users who exist in game_sessions
-- (via Privy or other means) but not in auth.users (Supabase Auth) still appear.

CREATE OR REPLACE VIEW game_leaderboard_modes AS
SELECT 
  gs.user_id,
  u.email, -- Can be null if not in auth.users
  -- Prioritize profile name, then metadata, then email part, then "Anonymous"
  COALESCE(
    p.full_name, 
    u.raw_user_meta_data->>'full_name',
    SPLIT_PART(u.email, '@', 1),
    'Anonymous'
  ) as display_name,
  -- Prioritize user_wallets, then fallback to something else if needed
  uw.wallet_address,
  COALESCE(gs.game_mode, 'classic') as game_mode,
  COUNT(gs.id) as games_played,
  COALESCE(SUM(gs.score), 0) as total_score,
  COALESCE(MAX(gs.score), 0) as best_score,
  COALESCE(AVG(gs.score), 0)::NUMERIC(4,1) as avg_score
FROM game_sessions gs
-- Join profiles (standard place for Privy user data)
LEFT JOIN profiles p ON gs.user_id = p.id
-- Join user_wallets (to get wallet address)
LEFT JOIN user_wallets uw ON gs.user_id = uw.user_id
-- Join auth.users (only if they exist there too)
LEFT JOIN auth.users u ON gs.user_id = u.id
WHERE gs.finished_at IS NOT NULL
GROUP BY gs.user_id, u.email, u.raw_user_meta_data, p.full_name, uw.wallet_address, gs.game_mode;

-- Grant access to the view
GRANT SELECT ON game_leaderboard_modes TO anon, authenticated, service_role;
