-- Add daily challenges for the next 30 days
-- Starting from CURRENT_DATE (Jan 21, 2026) likely, but using ON CONFLICT to be safe

INSERT INTO daily_challenges (challenge_date, category, title, reward_multiplier)
VALUES
  -- Week 1
  (CURRENT_DATE, 'fundamentals', '{"en": "Blockchain Basics", "es": "Fundamentos Blockchain"}', 2.0),
  (CURRENT_DATE + INTERVAL '1 day', 'defi', '{"en": "DeFi Dynamics", "es": "Dinámicas DeFi"}', 2.0),
  (CURRENT_DATE + INTERVAL '2 days', 'nfts', '{"en": "NFT Spotlight", "es": "Destacado NFT"}', 2.5),
  (CURRENT_DATE + INTERVAL '3 days', 'security', '{"en": "Wallet Security", "es": "Seguridad de Wallet"}', 2.0),
  (CURRENT_DATE + INTERVAL '4 days', 'trading', '{"en": "Market Movers", "es": "Movimientos de Mercado"}', 2.0),
  (CURRENT_DATE + INTERVAL '5 days', 'fundamentals', '{"en": "Smart Contracts", "es": "Contratos Inteligentes"}', 2.0),
  (CURRENT_DATE + INTERVAL '6 days', 'defi', '{"en": "Yield Farming", "es": "Yield Farming"}', 2.5),
  
  -- Week 2
  (CURRENT_DATE + INTERVAL '7 days', 'nfts', '{"en": "Digital Art", "es": "Arte Digital"}', 2.0),
  (CURRENT_DATE + INTERVAL '8 days', 'security', '{"en": "Phishing Protection", "es": "Protección Phishing"}', 2.0),
  (CURRENT_DATE + INTERVAL '9 days', 'trading', '{"en": "Trading Psychology", "es": "Psicología del Trading"}', 2.0),
  (CURRENT_DATE + INTERVAL '10 days', 'fundamentals', '{"en": "Consensus Mechanisms", "es": "Mecanismos de Consenso"}', 2.0),
  (CURRENT_DATE + INTERVAL '11 days', 'defi', '{"en": "Stablecoins", "es": "Stablecoins"}', 2.0),
  (CURRENT_DATE + INTERVAL '12 days', 'nfts', '{"en": "NFT Utilities", "es": "Utilidades NFT"}', 2.5),
  (CURRENT_DATE + INTERVAL '13 days', 'security', '{"en": "Smart Contract Audits", "es": "Auditorías de Contratos"}', 2.0),

  -- Week 3
  (CURRENT_DATE + INTERVAL '14 days', 'trading', '{"en": "Chart Patterns", "es": "Patrones Gráficos"}', 2.0),
  (CURRENT_DATE + INTERVAL '15 days', 'fundamentals', '{"en": "Layer 2 Solutions", "es": "Soluciones de Capa 2"}', 2.0),
  (CURRENT_DATE + INTERVAL '16 days', 'defi', '{"en": "DEX Mechanics", "es": "Mecánicas DEX"}', 2.5),
  (CURRENT_DATE + INTERVAL '17 days', 'nfts', '{"en": "Metaverse Assets", "es": "Activos del Metaverso"}', 2.0),
  (CURRENT_DATE + INTERVAL '18 days', 'security', '{"en": "Private Keys", "es": "Claves Privadas"}', 2.0),
  (CURRENT_DATE + INTERVAL '19 days', 'trading', '{"en": "Risk Management", "es": "Gestión de Riesgos"}', 2.0),
  (CURRENT_DATE + INTERVAL '20 days', 'fundamentals', '{"en": "Web3 Infrastructure", "es": "Infraestructura Web3"}', 2.0),

  -- Week 4 & more
  (CURRENT_DATE + INTERVAL '21 days', 'defi', '{"en": "Lending & Borrowing", "es": "Préstamos y Créditos"}', 2.5),
  (CURRENT_DATE + INTERVAL '22 days', 'nfts', '{"en": "Gaming Tokens", "es": "Tokens de Juegos"}', 2.0),
  (CURRENT_DATE + INTERVAL '23 days', 'security', '{"en": "Social Engineering", "es": "Ingeniería Social"}', 2.0),
  (CURRENT_DATE + INTERVAL '24 days', 'trading', '{"en": "Technical Analysis", "es": "Análisis Técnico"}', 2.0),
  (CURRENT_DATE + INTERVAL '25 days', 'fundamentals', '{"en": "Tokenomics", "es": "Tokenomics"}', 2.0),
  (CURRENT_DATE + INTERVAL '26 days', 'defi', '{"en": "Liquidity Pools", "es": "Pools de Liquidez"}', 2.5),
  (CURRENT_DATE + INTERVAL '27 days', 'nfts', '{"en": "Generative Art", "es": "Arte Generativo"}', 2.0),
  (CURRENT_DATE + INTERVAL '28 days', 'security', '{"en": "Incident Response", "es": "Respuesta a Incidentes"}', 2.0),
  (CURRENT_DATE + INTERVAL '29 days', 'trading', '{"en": "Crypto Indicators", "es": "Indicadores Cripto"}', 2.0)
ON CONFLICT (challenge_date) 
DO UPDATE SET 
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  reward_multiplier = EXCLUDED.reward_multiplier;
