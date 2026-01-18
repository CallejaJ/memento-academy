-- Drop foreign key constraint on user_wallets.user_id if it exists
-- This allows us to link wallets to our custom profiles/IDs instead of strict auth.users
DO $$ 
BEGIN 
  IF EXISTS (SELECT 1 FROM information_schema.table_constraints WHERE constraint_name = 'user_wallets_user_id_fkey') THEN 
    ALTER TABLE user_wallets DROP CONSTRAINT user_wallets_user_id_fkey; 
  END IF; 
END $$;

-- Optionally, we can add a constraint to link to profiles instead, 
-- but for now removing the blocker is priority.
-- We want to ensure that if we delete a profile, the wallet is also cleaned up, 
-- so let's try to add a FK to profiles(id) if possible, but only after dropping the old one.

-- Add FK to profiles(id)
ALTER TABLE user_wallets 
ADD CONSTRAINT user_wallets_user_id_fkey_profiles 
FOREIGN KEY (user_id) 
REFERENCES profiles(id) 
ON DELETE CASCADE;
