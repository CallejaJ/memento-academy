-- Add category column to game_sessions for tracking/filtering
ALTER TABLE game_sessions ADD COLUMN IF NOT EXISTS category TEXT;
