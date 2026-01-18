-- Add privy_user_id column to user_wallets table
ALTER TABLE user_wallets 
ADD COLUMN IF NOT EXISTS privy_user_id TEXT;

-- Add index for faster lookups since we query by this often
CREATE INDEX IF NOT EXISTS idx_user_wallets_privy_user_id 
ON user_wallets(privy_user_id);
