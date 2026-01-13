-- 1. Create Tables (If Not Exists)
CREATE TABLE IF NOT EXISTS game_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  session_token TEXT NOT NULL UNIQUE,
  started_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ DEFAULT NOW() + INTERVAL '10 minutes',
  finished_at TIMESTAMPTZ,
  score INTEGER DEFAULT 0,
  total_questions INTEGER DEFAULT 10,
  rewarded BOOLEAN DEFAULT FALSE,
  reward_tx_hash TEXT,
  reward_signature TEXT,
  ip_address INET,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS user_wallets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  wallet_address TEXT NOT NULL,
  is_embedded BOOLEAN DEFAULT TRUE,
  linked_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id)
);

-- 2. Add New Column for Security (If Not Exists)
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'game_sessions' AND column_name = 'reward_deadline') THEN
        ALTER TABLE game_sessions ADD COLUMN reward_deadline BIGINT;
        COMMENT ON COLUMN game_sessions.reward_deadline IS 'Unix timestamp when the reward signature expires';
    END IF;
END $$;

-- 3. Create/Replace View for Leaderboard (Fixes 500 Error)
CREATE OR REPLACE VIEW game_leaderboard AS
SELECT 
  u.id as user_id,
  u.email,
  uw.wallet_address,
  COUNT(gs.id) as games_played,
  COALESCE(SUM(gs.score), 0) as total_score,
  COALESCE(MAX(gs.score), 0) as best_score,
  COALESCE(AVG(gs.score), 0)::NUMERIC(4,1) as avg_score
FROM auth.users u
LEFT JOIN game_sessions gs ON u.id = gs.user_id AND gs.finished_at IS NOT NULL
LEFT JOIN user_wallets uw ON u.id = uw.user_id
GROUP BY u.id, u.email, uw.wallet_address
HAVING COUNT(gs.id) > 0
ORDER BY total_score DESC;
