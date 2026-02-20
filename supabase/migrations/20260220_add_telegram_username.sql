-- Add telegram_username field to profiles table
ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS telegram_username TEXT DEFAULT NULL;

COMMENT ON COLUMN profiles.telegram_username IS 'Telegram username (without @) for community identification';
