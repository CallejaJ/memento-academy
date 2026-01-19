-- Force add category column to game_sessions if it's missing causes errors
-- This script ensures the column exists and reloads the schema cache

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'game_sessions' AND column_name = 'category') THEN
        ALTER TABLE game_sessions ADD COLUMN category TEXT DEFAULT 'random';
    END IF;
END $$;

-- Force schema cache reload (usually happens on DDL, but explicit comment helps debug)
COMMENT ON TABLE game_sessions IS 'Game sessions tracking (Schema Cache Reloaded)';
