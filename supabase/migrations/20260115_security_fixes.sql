-- =============================================
-- SECURITY FIXES - Supabase Security Advisor
-- Date: 2026-01-15
-- =============================================

-- =============================================
-- 1. FIX: game_leaderboard - Exposed Auth Users & Security Definer
-- =============================================
-- Problem: Vista expone auth.users y usa SECURITY DEFINER
-- Solution: Recrear con SECURITY INVOKER sin exponer email completo

DROP VIEW IF EXISTS game_leaderboard;

CREATE VIEW game_leaderboard 
WITH (security_invoker = true)
AS
SELECT 
  gs.user_id,
  -- Truncar email para privacidad (solo primeros 3 caracteres + ***)
  LEFT(SPLIT_PART(
    COALESCE(u.email, 'anonymous'), 
    '@', 1
  ), 3) || '***' AS display_name,
  -- También incluimos email para compatibilidad con código existente (truncado)
  LEFT(SPLIT_PART(
    COALESCE(u.email, 'anonymous'), 
    '@', 1
  ), 3) || '***' AS email,
  uw.wallet_address,
  COUNT(gs.id) as games_played,
  COALESCE(SUM(gs.score), 0) as total_score,
  COALESCE(MAX(gs.score), 0) as best_score,
  COALESCE(AVG(gs.score), 0)::NUMERIC(4,1) as avg_score
FROM game_sessions gs
INNER JOIN auth.users u ON gs.user_id = u.id
LEFT JOIN user_wallets uw ON gs.user_id = uw.user_id
WHERE gs.finished_at IS NOT NULL
GROUP BY gs.user_id, u.email, uw.wallet_address
HAVING COUNT(gs.id) > 0
ORDER BY total_score DESC;

-- Comentario explicativo
COMMENT ON VIEW game_leaderboard IS 'Leaderboard view with privacy-safe display names. Uses SECURITY INVOKER.';

-- =============================================
-- 2. FIX: newsletter_subscribers - RLS Disabled
-- =============================================
-- Problem: Tabla pública sin RLS
-- Solution: Habilitar RLS con políticas para usuarios y service_role

-- Habilitar Row Level Security
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Política 1: Service role tiene acceso completo (para backend/email sending)
CREATE POLICY "Service role full access"
ON public.newsletter_subscribers
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Política 2: Usuarios pueden ver su propia suscripción
CREATE POLICY "Users can view own subscription"
ON public.newsletter_subscribers
FOR SELECT
TO authenticated
USING (auth.email() = email);

-- Política 3: Usuarios pueden eliminar su propia suscripción (unsubscribe)
CREATE POLICY "Users can unsubscribe"
ON public.newsletter_subscribers
FOR DELETE
TO authenticated
USING (auth.email() = email);

-- Política 4: Usuarios anónimos no pueden hacer nada 
-- (las suscripciones nuevas deben pasar por el backend con service_role)
-- No creamos política para anon, lo que significa acceso denegado por defecto

-- =============================================
-- VERIFICATION QUERIES (run manually to test)
-- =============================================
-- Test 1: Verificar que game_leaderboard usa SECURITY INVOKER
-- SELECT * FROM pg_views WHERE viewname = 'game_leaderboard';

-- Test 2: Verificar RLS está habilitado en newsletter_subscribers  
-- SELECT relname, relrowsecurity FROM pg_class WHERE relname = 'newsletter_subscribers';

-- Test 3: Ver políticas activas
-- SELECT * FROM pg_policies WHERE tablename = 'newsletter_subscribers';
