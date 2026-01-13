-- =============================================
-- Add reward_deadline column for signature expiration
-- Part of security enhancement for MementoQuizRewards contract
-- =============================================

ALTER TABLE game_sessions 
ADD COLUMN IF NOT EXISTS reward_deadline BIGINT;

-- Add comment explaining the column
COMMENT ON COLUMN game_sessions.reward_deadline IS 'Unix timestamp when the reward signature expires (for smart contract security)';
