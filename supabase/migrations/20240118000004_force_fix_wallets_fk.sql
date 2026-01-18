DO $$ 
BEGIN 
  -- 1. Try to drop the NEW constraint if it exists (to start clean)
  IF EXISTS (SELECT 1 FROM information_schema.table_constraints WHERE constraint_name = 'user_wallets_user_id_fkey_profiles') THEN 
    ALTER TABLE user_wallets DROP CONSTRAINT user_wallets_user_id_fkey_profiles; 
  END IF;

  -- 2. Try to drop the OLD constraint if it exists (the one causing errors)
  IF EXISTS (SELECT 1 FROM information_schema.table_constraints WHERE constraint_name = 'user_wallets_user_id_fkey') THEN 
    ALTER TABLE user_wallets DROP CONSTRAINT user_wallets_user_id_fkey; 
  END IF;

  -- 3. Now add the correct constraint freshly
  ALTER TABLE user_wallets 
  ADD CONSTRAINT user_wallets_user_id_fkey_profiles 
  FOREIGN KEY (user_id) 
  REFERENCES profiles(id) 
  ON DELETE CASCADE;
END $$;
