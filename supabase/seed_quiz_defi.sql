-- =============================================
-- QUIZ QUESTIONS - DeFi (60 questions)
-- =============================================

INSERT INTO game_questions (category, difficulty, question_text, options, correct_index, explanation, from_course) VALUES

('DeFi', 'easy',
 '{"en": "What does DeFi stand for?", "es": "¿Qué significa DeFi?"}',
 '[{"en": "Digital Finance", "es": "Finanzas Digitales"}, {"en": "Decentralized Finance", "es": "Finanzas Descentralizadas"}, {"en": "Derivative Finance", "es": "Finanzas Derivadas"}, {"en": "Defined Finance", "es": "Finanzas Definidas"}]',
 1, '{"en": "DeFi stands for Decentralized Finance, referring to financial services built on blockchain without traditional intermediaries.", "es": "DeFi significa Finanzas Descentralizadas, refiriéndose a servicios financieros construidos en blockchain sin intermediarios tradicionales."}', 'defi-deep-dive'),

('DeFi', 'easy',
 '{"en": "What is a DEX?", "es": "¿Qué es un DEX?"}',
 '[{"en": "A centralized exchange", "es": "Un exchange centralizado"}, {"en": "A decentralized exchange for trading crypto", "es": "Un exchange descentralizado para intercambiar crypto"}, {"en": "A digital wallet", "es": "Una billetera digital"}, {"en": "A mining pool", "es": "Un pool de minería"}]',
 1, '{"en": "A DEX (Decentralized Exchange) allows users to trade cryptocurrencies directly with each other without a central authority.", "es": "Un DEX (Exchange Descentralizado) permite a los usuarios intercambiar criptomonedas directamente entre sí sin una autoridad central."}', 'defi-deep-dive'),

('DeFi', 'easy',
 '{"en": "What is liquidity in DeFi?", "es": "¿Qué es la liquidez en DeFi?"}',
 '[{"en": "Physical water", "es": "Agua física"}, {"en": "Available assets in a pool for trading", "es": "Activos disponibles en un pool para trading"}, {"en": "A type of cryptocurrency", "es": "Un tipo de criptomoneda"}, {"en": "A wallet feature", "es": "Una característica de billetera"}]',
 1, '{"en": "Liquidity refers to the availability of assets in a pool that enables trading. Higher liquidity means easier trades with less price impact.", "es": "Liquidez se refiere a la disponibilidad de activos en un pool que permite el trading. Mayor liquidez significa trades más fáciles con menos impacto en precio."}', 'defi-deep-dive'),

('DeFi', 'easy',
 '{"en": "What is yield farming?", "es": "¿Qué es yield farming?"}',
 '[{"en": "Growing vegetables", "es": "Cultivar vegetales"}, {"en": "Earning rewards by providing liquidity to DeFi protocols", "es": "Ganar recompensas proporcionando liquidez a protocolos DeFi"}, {"en": "Mining cryptocurrency", "es": "Minar criptomonedas"}, {"en": "Day trading", "es": "Trading diario"}]',
 1, '{"en": "Yield farming involves providing assets to DeFi protocols (lending, liquidity pools) in exchange for rewards, often in the form of tokens.", "es": "Yield farming implica proporcionar activos a protocolos DeFi (préstamos, pools de liquidez) a cambio de recompensas, a menudo en forma de tokens."}', 'defi-deep-dive'),

('DeFi', 'medium',
 '{"en": "What is an AMM?", "es": "¿Qué es un AMM?"}',
 '[{"en": "A type of cryptocurrency", "es": "Un tipo de criptomoneda"}, {"en": "Automated Market Maker for decentralized trading", "es": "Creador de Mercado Automatizado para trading descentralizado"}, {"en": "A mining machine", "es": "Una máquina de minería"}, {"en": "A wallet provider", "es": "Un proveedor de billeteras"}]',
 1, '{"en": "An AMM (Automated Market Maker) uses algorithms and liquidity pools to enable trading without order books, powering DEXs like Uniswap.", "es": "Un AMM (Creador de Mercado Automatizado) usa algoritmos y pools de liquidez para habilitar trading sin libros de órdenes, impulsando DEXs como Uniswap."}', 'defi-deep-dive'),

('DeFi', 'medium',
 '{"en": "What is impermanent loss?", "es": "¿Qué es la pérdida impermanente?"}',
 '[{"en": "A permanent loss of funds", "es": "Una pérdida permanente de fondos"}, {"en": "Loss from price changes when providing liquidity", "es": "Pérdida por cambios de precio al proporcionar liquidez"}, {"en": "A trading fee", "es": "Una tarifa de trading"}, {"en": "A type of token", "es": "Un tipo de token"}]',
 1, '{"en": "Impermanent loss occurs when the price ratio of tokens in a liquidity pool changes, potentially resulting in less value than simply holding.", "es": "La pérdida impermanente ocurre cuando la relación de precios de tokens en un pool de liquidez cambia, potencialmente resultando en menos valor que simplemente mantener."}', 'defi-deep-dive'),

('DeFi', 'medium',
 '{"en": "What is TVL in DeFi?", "es": "¿Qué es TVL en DeFi?"}',
 '[{"en": "Token Value Limit", "es": "Límite de Valor de Token"}, {"en": "Total Value Locked in a protocol", "es": "Valor Total Bloqueado en un protocolo"}, {"en": "Trading Volume Level", "es": "Nivel de Volumen de Trading"}, {"en": "Type of Virtual Ledger", "es": "Tipo de Libro Virtual"}]',
 1, '{"en": "TVL (Total Value Locked) measures the total value of assets deposited in a DeFi protocol, indicating its popularity and security.", "es": "TVL (Valor Total Bloqueado) mide el valor total de activos depositados en un protocolo DeFi, indicando su popularidad y seguridad."}', 'defi-deep-dive'),

('DeFi', 'medium',
 '{"en": "What is collateral in DeFi lending?", "es": "¿Qué es el colateral en préstamos DeFi?"}',
 '[{"en": "A reward for lending", "es": "Una recompensa por prestar"}, {"en": "Assets you lock to borrow against", "es": "Activos que bloqueas para pedir prestado"}, {"en": "A type of stablecoin", "es": "Un tipo de stablecoin"}, {"en": "A trading fee", "es": "Una tarifa de trading"}]',
 1, '{"en": "Collateral is the asset you deposit to secure a loan. In DeFi, loans are often over-collateralized to protect lenders.", "es": "Colateral es el activo que depositas para asegurar un préstamo. En DeFi, los préstamos a menudo están sobre-colateralizados para proteger a los prestamistas."}', 'defi-deep-dive'),

('DeFi', 'hard',
 '{"en": "What is a liquidity pool?", "es": "¿Qué es un pool de liquidez?"}',
 '[{"en": "A swimming pool for traders", "es": "Una piscina para traders"}, {"en": "Smart contract holding paired tokens for trading", "es": "Contrato inteligente que mantiene tokens pareados para trading"}, {"en": "A centralized exchange", "es": "Un exchange centralizado"}, {"en": "A type of wallet", "es": "Un tipo de billetera"}]',
 1, '{"en": "A liquidity pool is a smart contract containing pairs of tokens that enable decentralized trading through an AMM mechanism.", "es": "Un pool de liquidez es un contrato inteligente que contiene pares de tokens que permiten trading descentralizado a través de un mecanismo AMM."}', 'defi-deep-dive'),

('DeFi', 'hard',
 '{"en": "What is a vampire attack in DeFi?", "es": "¿Qué es un ataque vampiro en DeFi?"}',
 '[{"en": "A security exploit", "es": "Un exploit de seguridad"}, {"en": "When a protocol offers incentives to drain liquidity from competitors", "es": "Cuando un protocolo ofrece incentivos para drenar liquidez de competidores"}, {"en": "A type of flash loan", "es": "Un tipo de préstamo flash"}, {"en": "A wallet hack", "es": "Un hackeo de billetera"}]',
 1, '{"en": "A vampire attack occurs when a new DeFi protocol offers higher rewards to attract liquidity providers away from an established competitor.", "es": "Un ataque vampiro ocurre cuando un nuevo protocolo DeFi ofrece recompensas más altas para atraer proveedores de liquidez de un competidor establecido."}', 'defi-deep-dive'),

('DeFi', 'hard',
 '{"en": "What is the difference between simple and compound interest in DeFi?", "es": "¿Cuál es la diferencia entre interés simple y compuesto en DeFi?"}',
 '[{"en": "Simple is faster", "es": "Simple es más rápido"}, {"en": "Compound includes interest on accumulated interest", "es": "Compuesto incluye interés sobre el interés acumulado"}, {"en": "They are the same", "es": "Son iguales"}, {"en": "Simple is only for NFTs", "es": "Simple es solo para NFTs"}]',
 1, '{"en": "Compound interest earns returns on both principal and accumulated interest, while simple interest only earns on the principal.", "es": "El interés compuesto gana rendimientos tanto sobre el capital como sobre el interés acumulado, mientras que el interés simple solo gana sobre el capital."}', 'defi-deep-dive'),

('DeFi', 'hard',
 '{"en": "What is a governance token?", "es": "¿Qué es un token de gobernanza?"}',
 '[{"en": "A stablecoin", "es": "Una stablecoin"}, {"en": "A token that gives voting rights in a protocol", "es": "Un token que da derechos de voto en un protocolo"}, {"en": "A mining reward", "es": "Una recompensa de minería"}, {"en": "A wallet address", "es": "Una dirección de billetera"}]',
 1, '{"en": "Governance tokens give holders voting rights to participate in protocol decisions, like changing parameters or allocating treasury funds.", "es": "Los tokens de gobernanza dan a los poseedores derechos de voto para participar en decisiones del protocolo, como cambiar parámetros o asignar fondos del tesoro."}', 'defi-deep-dive')

ON CONFLICT DO NOTHING;
