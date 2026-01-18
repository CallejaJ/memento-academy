-- Create daily_challenges table
CREATE TABLE IF NOT EXISTS daily_challenges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  challenge_date DATE UNIQUE NOT NULL,
  category TEXT NOT NULL,
  title JSONB NOT NULL, -- { "en": "...", "es": "..." }
  reward_multiplier NUMERIC DEFAULT 2.0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- RLS Policies for daily_challenges
ALTER TABLE daily_challenges ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Daily challenges are viewable by everyone"
  ON daily_challenges FOR SELECT
  USING (true);

-- Only admins/service_role can insert (for now, we'll seed via SQL)
CREATE POLICY "Service role can insert daily challenges"
  ON daily_challenges FOR INSERT
  WITH CHECK (auth.role() = 'service_role');

-- Create user_ranks view (as planned in implementation_plan)
CREATE OR REPLACE VIEW user_ranks AS
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

-- Seed some initial daily challenges for testing
INSERT INTO daily_challenges (challenge_date, category, title, reward_multiplier)
VALUES
  (CURRENT_DATE, 'security', '{"en": "Security First", "es": "Seguridad Primero"}', 2.0),
  (CURRENT_DATE + INTERVAL '1 day', 'defi', '{"en": "DeFi Master", "es": "Maestro DeFi"}', 2.0),
  (CURRENT_DATE + INTERVAL '2 days', 'nfts', '{"en": "NFT Revolution", "es": "Revolución NFT"}', 2.0)
ON CONFLICT (challenge_date) DO NOTHING;
