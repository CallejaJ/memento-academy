-- Referral system: unique referral codes per user + referrals tracking table

-- 1. Add referral_code column to profiles
ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS referral_code TEXT UNIQUE;

-- 2. Function to auto-generate 8-char uppercase referral code
CREATE OR REPLACE FUNCTION generate_referral_code()
RETURNS TRIGGER AS $$
BEGIN
  NEW.referral_code := UPPER(LEFT(MD5(NEW.id::text || NOW()::text), 8));
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 3. Trigger: set referral_code on new profile insert if not provided
DROP TRIGGER IF EXISTS set_referral_code ON profiles;
CREATE TRIGGER set_referral_code
  BEFORE INSERT ON profiles
  FOR EACH ROW
  WHEN (NEW.referral_code IS NULL)
  EXECUTE FUNCTION generate_referral_code();

-- 4. Backfill existing profiles that have no referral_code
UPDATE profiles
SET referral_code = UPPER(LEFT(MD5(id::text || created_at::text), 8))
WHERE referral_code IS NULL;

-- 5. Referrals table
CREATE TABLE IF NOT EXISTS referrals (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  referrer_user_id UUID NOT NULL REFERENCES profiles(id),
  referred_user_id UUID REFERENCES profiles(id),
  status           TEXT NOT NULL DEFAULT 'completed',  -- completed | rewarded
  reward_signature TEXT,
  reward_deadline  BIGINT,
  created_at       TIMESTAMPTZ DEFAULT NOW(),
  completed_at     TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS referrals_referrer_idx ON referrals(referrer_user_id);
CREATE INDEX IF NOT EXISTS referrals_referred_idx ON referrals(referred_user_id);
CREATE INDEX IF NOT EXISTS referrals_status_idx   ON referrals(referrer_user_id, status);

-- 6. RLS: users can only read their own referrals
ALTER TABLE referrals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "referrals_select_own" ON referrals
  FOR SELECT USING (auth.uid()::text = referrer_user_id::text OR auth.uid()::text = referred_user_id::text);
