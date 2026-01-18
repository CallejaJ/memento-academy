-- Add game_mode column to game_sessions
ALTER TABLE game_sessions ADD COLUMN IF NOT EXISTS game_mode TEXT DEFAULT 'classic';

-- Add columns for extended stats if they don't exist
ALTER TABLE game_sessions ADD COLUMN IF NOT EXISTS max_streak INTEGER DEFAULT 0;
ALTER TABLE game_sessions ADD COLUMN IF NOT EXISTS time_bonus_score INTEGER DEFAULT 0;

-- Index for performance
CREATE INDEX IF NOT EXISTS idx_game_sessions_mode ON game_sessions(game_mode);
