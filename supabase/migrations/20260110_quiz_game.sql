-- =============================================
-- QUIZ GAME - Database Schema
-- Uses game_questions to avoid conflict with existing quiz_questions
-- =============================================

-- Quiz game sessions with anti-bot protection
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

-- Index for session lookups (daily counting done in query)
CREATE INDEX IF NOT EXISTS idx_game_sessions_user ON game_sessions(user_id, started_at);

-- Game questions bank (500+ questions) - separate from course quiz_questions
CREATE TABLE IF NOT EXISTS game_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category TEXT NOT NULL,
  difficulty TEXT CHECK (difficulty IN ('easy', 'medium', 'hard')) DEFAULT 'medium',
  question_text JSONB NOT NULL, -- {"en": "...", "es": "..."}
  options JSONB NOT NULL,        -- [{"en": "A", "es": "A"}, ...]
  correct_index INTEGER NOT NULL CHECK (correct_index >= 0 AND correct_index <= 3),
  explanation JSONB,             -- {"en": "...", "es": "..."}
  from_course TEXT,              -- course_id if from existing course, NULL if new
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Game answers (for anti-cheat and history)
CREATE TABLE IF NOT EXISTS game_answers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID NOT NULL REFERENCES game_sessions(id) ON DELETE CASCADE,
  question_id UUID NOT NULL REFERENCES game_questions(id),
  answer_index INTEGER NOT NULL,
  is_correct BOOLEAN NOT NULL,
  response_time_ms INTEGER,
  answered_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(session_id, question_id)
);

-- User game question history (for non-repetition)
CREATE TABLE IF NOT EXISTS game_question_history (
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  question_id UUID NOT NULL REFERENCES game_questions(id) ON DELETE CASCADE,
  seen_at TIMESTAMPTZ DEFAULT NOW(),
  was_correct BOOLEAN,
  PRIMARY KEY (user_id, question_id)
);

-- User wallet addresses (linked via Privy)
CREATE TABLE IF NOT EXISTS user_wallets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  wallet_address TEXT NOT NULL,
  is_embedded BOOLEAN DEFAULT TRUE,
  linked_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id)
);

-- Enable Row Level Security
ALTER TABLE game_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE game_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE game_answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE game_question_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_wallets ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view own game sessions" ON game_sessions
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own game sessions" ON game_sessions
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own game sessions" ON game_sessions
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Anyone can read active game questions" ON game_questions
  FOR SELECT USING (is_active = TRUE);

CREATE POLICY "Users can view own game answers" ON game_answers
  FOR SELECT USING (
    session_id IN (SELECT id FROM game_sessions WHERE user_id = auth.uid())
  );

CREATE POLICY "Users can insert own game answers" ON game_answers
  FOR INSERT WITH CHECK (
    session_id IN (SELECT id FROM game_sessions WHERE user_id = auth.uid())
  );

CREATE POLICY "Users can view own game history" ON game_question_history
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own game history" ON game_question_history
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view own wallet" ON user_wallets
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can manage own wallet" ON user_wallets
  FOR ALL USING (auth.uid() = user_id);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_game_questions_category ON game_questions(category);
CREATE INDEX IF NOT EXISTS idx_game_questions_difficulty ON game_questions(difficulty);
CREATE INDEX IF NOT EXISTS idx_game_questions_active ON game_questions(is_active);
CREATE INDEX IF NOT EXISTS idx_game_answers_session ON game_answers(session_id);
CREATE INDEX IF NOT EXISTS idx_game_history_user ON game_question_history(user_id);
CREATE INDEX IF NOT EXISTS idx_user_wallets_address ON user_wallets(wallet_address);

-- Leaderboard view
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
