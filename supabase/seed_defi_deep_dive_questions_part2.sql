-- =============================================
-- DEFI DEEP DIVE - QUIZ QUESTIONS SEED PART 2
-- Sections 4-6 (15 questions each)
-- =============================================

-- SECTION 4: Liquidity Pools
-- Questions 1-5
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What did AMMs replace?", "es": "¿Qué reemplazaron los AMMs?"}$$,
  $$[{"en": "Blockchain", "es": "Blockchain"}, {"en": "Smart Contracts", "es": "Contratos Inteligentes"}, {"en": "Central Limit Order Books", "es": "Libros de Órdenes Límites Centrales"}, {"en": "Wallets", "es": "Wallets"}]$$,
  2,
  $${"en": "AMMs like Uniswap replaced the traditional buyer/seller order book with a specialized mathematical formula and pool.", "es": "AMMs como Uniswap reemplazaron el libro tradicional de comprador/vendedor con una fórmula matemática especializada y pool."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'liquidity-pools';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Who acts as the counterparty in an AMM trade?", "es": "¿Quién actúa como contraparte en un trade AMM?"}$$,
  $$[{"en": "Another trader", "es": "Otro trader"}, {"en": "The Liquidity Pool", "es": "El Pool de Liquidez"}, {"en": "The miner", "es": "El minero"}, {"en": "The developer", "es": "El desarrollador"}]$$,
  1,
  $${"en": "You trade against the smart contract (the pool), which automatically calculates the price.", "es": "Operas contra el contrato inteligente (el pool), que calcula automáticamente el precio."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'liquidity-pools';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is the standard AMM formula?", "es": "¿Cuál es la fórmula estándar AMM?"}$$,
  $$[{"en": "x + y = k", "es": "x + y = k"}, {"en": "x * y = k", "es": "x * y = k"}, {"en": "E = mc^2", "es": "E = mc^2"}, {"en": "x / y = k", "es": "x / y = k"}]$$,
  1,
  $${"en": "The Constant Product Formula (x * y = k) ensures that as one asset decreases, the other must increase in price.", "es": "La Fórmula de Producto Constante (x * y = k) asegura que mientras un activo baja, el otro debe subir de precio."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'liquidity-pools';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Where do trading fees go?", "es": "¿A dónde van las tarifas de trading?"}$$,
  $$[{"en": "To the CEO", "es": "Al CEO"}, {"en": "To Liquidity Providers (LPs)", "es": "A los Proveedores de Liquidez (LPs)"}, {"en": "To burn", "es": "A quemar"}, {"en": "To miners only", "es": "A mineros solo"}]$$,
  1,
  $${"en": "Fees are distributed to the people who deposited their assets into the pool (The LPs).", "es": "Las tarifas se distribuyen a las personas que depositaron sus activos en el pool (Los LPs)."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'liquidity-pools';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What happens if you buy massive amounts of ETH from a pool?", "es": "¿Qué pasa si compras cantidades masivas de ETH de un pool?"}$$,
  $$[{"en": "Price stays same", "es": "Precio sigue igual"}, {"en": "Price drops", "es": "Precio cae"}, {"en": "Price skyrockets (Slippage)", "es": "Precio se dispara (Slippage)"}, {"en": "Transaction fails", "es": "Transacción falla"}]$$,
  2,
  $${"en": "Buying huge amounts unbalances the pool (reduces x supply greatly), causing the price to curve upwards sharply.", "es": "Comprar cantidades enormes desequilibra el pool (reduce suministro x grandemente), causando que el precio curve hacia arriba bruscamente."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'liquidity-pools';

-- Questions 6-10
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "When does Impermanent Loss happen?", "es": "¿Cuándo pasa la Pérdida Impermanente?"}$$,
  $$[{"en": "When prices are stable", "es": "Cuando precios son estables"}, {"en": "When prices diverge significantly", "es": "Cuando precios divergen significativamente"}, {"en": "When you harvest", "es": "Cuando cosechas"}, {"en": "When you stake", "es": "Cuando haces staking"}]$$,
  1,
  $${"en": "It happens when the ratio of the two tokens changes in the market, leading arbitragers to rebalance your pooied funds.", "es": "Pasa cuando el ratio de los dos tokens cambia en el mercado, llevando a arbitrajistas a rebalancear tus fondos en pool."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'liquidity-pools';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Is Impermanent Loss always permanent?", "es": "¿Es la Pérdida Impermanente siempre permanente?"}$$,
  $$[{"en": "Yes, always", "es": "Sí, siempre"}, {"en": "No, if prices return to original ratio, it disappears", "es": "No, si precios vuelven al ratio original, desaparece"}, {"en": "Only for BTC", "es": "Solo para BTC"}, {"en": "Maybe", "es": "Tal vez"}]$$,
  1,
  $${"en": "It is impermanent because it is only realized if you withdraw while prices are diverged. If they return, loss vanishes.", "es": "Es impermanente porque solo se realiza si retiras mientras precios divergen. Si vuelven, la pérdida desaparece."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'liquidity-pools';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is a 'Pair'?", "es": "¿Qué es un 'Par'?"}$$,
  $$[{"en": "Two users", "es": "Dos usuarios"}, {"en": "Two assets combined in a pool", "es": "Dos activos combinados en un pool"}, {"en": "A token and a blockchain", "es": "Un token y una blockchain"}, {"en": "A wallet", "es": "Una wallet"}]$$,
  1,
  $${"en": "A pair like ETH/USDC allows trading between those two specific assets.", "es": "Un par como ETH/USDC permite trading entre esos dos activos específicos."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'liquidity-pools';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Why do LPs provide liquidity despite IL?", "es": "¿Por qué los LPs proveen liquidez a pesar de IL?"}$$,
  $$[{"en": "They like losing money", "es": "Les gusta perder dinero"}, {"en": "Trading fees yield farming rewards > IL", "es": "Tarifas de trading recompensas farming > IL"}, {"en": "Regulatory requirement", "es": "Requisito regulatorio"}, {"en": "No choice", "es": "Sin opción"}]$$,
  1,
  $${"en": "The goal is that the fees earned over time outweigh the temporary loss from price divergence.", "es": "La meta es que las tarifas ganadas en el tiempo superen la pérdida temporal por divergencia de precios."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'liquidity-pools';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is Slippage?", "es": "¿Qué es Slippage?"}$$,
  $$[{"en": "Falling down", "es": "Caerse"}, {"en": "Difference between expected and executed price", "es": "Diferencia entre precio esperado y ejecutado"}, {"en": "Gas fee", "es": "Tarifa de gas"}, {"en": "Token burn", "es": "Token burn"}]$$,
  1,
  $${"en": "Slippage occurs when your trade is large enough to move the market price during execution.", "es": "Slippage ocurre cuando tu operación es lo suficientemente grande para mover el precio de mercado durante ejecución."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'liquidity-pools';

-- Questions 11-15
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Can you provide liquidity with just one token in Uniswap V2?", "es": "¿Puedes proveer liquidez con solo un token en Uniswap V2?"}$$,
  $$[{"en": "Yes", "es": "Sí"}, {"en": "No, you need equal value of both", "es": "No, necesitas igual valor de ambos"}, {"en": "Only ETH", "es": "Solo ETH"}, {"en": "Only USDC", "es": "Solo USDC"}]$$,
  1,
  $${"en": "Standard AMMs require a 50/50 value split of both assets to enter the pool.", "es": "AMMs estándar requieren una división de valor 50/50 de ambos activos para entrar al pool."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'liquidity-pools';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is Uniswap?", "es": "¿Qué es Uniswap?"}$$,
  $$[{"en": "A centralized exchange", "es": "Un exchange centralizado"}, {"en": "A decentralized exchange (DEX)", "es": "Un exchange descentralizado (DEX)"}, {"en": "A wallet", "es": "Una wallet"}, {"en": "A coin", "es": "Una moneda"}]$$,
  1,
  $${"en": "Uniswap is the largest and most famous Decentralized Exchange protocol on Ethereum.", "es": "Uniswap es el protocolo de Exchange Descentralizado más grande y famoso en Ethereum."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'liquidity-pools';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Who controls a liquidity pool?", "es": "¿Quién controla un pool de liquidez?"}$$,
  $$[{"en": "Vitalik", "es": "Vitalik"}, {"en": "The Smart Contract Code", "es": "El Código de Contrato Inteligente"}, {"en": "The bank", "es": "El banco"}, {"en": "The LPs", "es": "Los LPs"}]$$,
  1,
  $${"en": "The pool is managed autonomously by the code. LPs own the shares, but the code controls the logic.", "es": "El pool es gestionado autónomamente por el código. LPs poseen las acciones, pero el código controla la lógica."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'liquidity-pools';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is Concentrated Liquidity (Uniswap V3)?", "es": "¿Qué es Liquidez Concentrada (Uniswap V3)?"}$$,
  $$[{"en": "Liquidity in one pile", "es": "Liquidez en un montón"}, {"en": "Liquidity provided only within specific price range", "es": "Liquidez proveída solo en rango de precio específico"}, {"en": "More water", "es": "Más agua"}, {"en": "Less fees", "es": "Menos tarifas"}]$$,
  1,
  $${"en": "V3 allows LPs to target a price range (e.g., USDC $0.99-$1.01) to maximize capital efficiency.", "es": "V3 permite a LPs apuntar a un rango de precio (ej. USDC $0.99-$1.01) para maximizar eficiencia de capital."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'liquidity-pools';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Does a stablecoin pair (USDC/DAI) have high Impermanent Loss?", "es": "¿Tiene un par de stablecoin (USDC/DAI) alta Pérdida Impermanente?"}$$,
  $$[{"en": "Yes, massive", "es": "Sí, masiva"}, {"en": "No, almost zero", "es": "No, casi cero"}, {"en": "Depends on ETH", "es": "Depende de ETH"}, {"en": "Only on weekends", "es": "Solo fines de semana"}]$$,
  1,
  $${"en": "Since both assets stay near $1.00, they don't diverge in price, so IL is negligible.", "es": "Como ambos activos se mantienen cerca de $1.00, no divergen en precio, así que IL es insignificante."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'liquidity-pools';


-- SECTION 5: Risks
-- Questions 1-5
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is the biggest risk in DeFi?", "es": "¿Cuál es el mayor riesgo en DeFi?"}$$,
  $$[{"en": "Price going up", "es": "Precio subiendo"}, {"en": "Smart Contract Exploits", "es": "Exploits de Contrato Inteligente"}, {"en": "Forgetting password", "es": "Olvidar contraseña"}, {"en": "Slow internet", "es": "Internet lento"}]$$,
  1,
  $${"en": "Bugs in code are irreversible. If compromised, funds are often lost forever.", "es": "Bugs en código son irreversibles. Si se compromete, los fondos suelen perderse para siempre."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'risks';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "How can you mitigate Smart Contract risk?", "es": "¿Cómo mitigar riesgo de Contrato Inteligente?"}$$,
  $$[{"en": "Pray", "es": "Rezar"}, {"en": "Check for Audits and Insurance", "es": "Revisar Auditorías y Seguro"}, {"en": "Ask support", "es": "Preguntar a soporte"}, {"en": "Use only Bitcoin", "es": "Usar solo Bitcoin"}]$$,
  1,
  $${"en": "Audits (by firms like Certik) and insurance (Nexus Mutual) reduce the likelihood/impact of hacks.", "es": "Auditorías (por firmas como Certik) y seguro (Nexus Mutual) reducen probabilidad/impacto de hackeos."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'risks';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is Oracle Manipulation?", "es": "¿Qué es Manipulación de Oráculo?"}$$,
  $$[{"en": "Lying to oracle", "es": "Mentir al oráculo"}, {"en": "Faking existing price to trigger liquidations", "es": "Falsear precio existente para gatillar liquidaciones"}, {"en": "Breaking crystal ball", "es": "Romper bola de cristal"}, {"en": "Using fake wallet", "es": "Usar wallet falsa"}]$$,
  1,
  $${"en": "Attackers can manipulate the price reference used by a DeFi protocol to steal funds or liquidate others cheaply.", "es": "Atacantes pueden manipular la referencia de precio usada por un protocolo DeFi para robar fondos o liquidar a otros barato."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'risks';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is Peg Risk?", "es": "¿Qué es Riesgo de Peg?"}$$,
  $$[{"en": "Risk of wood leg", "es": "Riesgo de pata de palo"}, {"en": "Stablecoin losing $1.00 value", "es": "Stablecoin perdiendo valor de $1.00"}, {"en": "Token going to zero", "es": "Token yendo a cero"}, {"en": "High fees", "es": "Tarifas altas"}]$$,
  1,
  $${"en": "If a stablecoin (like USDC or UST) loses its 1:1 backing or confidence, it can crash below $1.00 (de-peg).", "es": "Si una stablecoin (como USDC o UST) pierde su respaldo 1:1 o confianza, puede colapsar bajo $1.00 (de-peg)."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'risks';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What does a 'Timelock' do?", "es": "¿Qué hace un 'Timelock'?"}$$,
  $$[{"en": "Locks time", "es": "Congela el tiempo"}, {"en": "Forces delay before admin changes take effect", "es": "Fuerza retraso antes que cambios de admin tomen efecto"}, {"en": "Locks your wallet", "es": "Bloquea tu wallet"}, {"en": "Nothing", "es": "Nada"}]$$,
  1,
  $${"en": "It gives users time (e.g. 48 hours) to withdraw funds if they disagree with a malicious upgrade proposed by devs.", "es": "Da a usuarios tiempo (ej. 48 horas) para retirar fondos si desacuerdan con una mejora maliciosa propuesta por devs."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'risks';

-- Questions 6-10
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Is DeFi insured by government?", "es": "¿Está DeFi asegurado por el gobierno?"}$$,
  $$[{"en": "Yes, FDIC insured", "es": "Sí, asegurado FDIC"}, {"en": "No", "es": "No"}, {"en": "Only in USA", "es": "Solo en USA"}, {"en": "Only in Europe", "es": "Solo en Europa"}]$$,
  1,
  $${"en": "There is zero government protection. If you lose funds, there is no bailout.", "es": "Hay cero protección gubernamental. Si pierdes fondos, no hay rescate."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'risks';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is a Multisig?", "es": "¿Qué es un Multisig?"}$$,
  $$[{"en": "Single signature wallet", "es": "Wallet firma única"}, {"en": "Wallet requiring multiple keys to approve tx", "es": "Wallet requiriendo múltiples llaves para aprobar tx"}, {"en": "Many signals", "es": "Muchas señales"}, {"en": "Fake wallet", "es": "Wallet falsa"}]$$,
  1,
  $${"en": "It prevents a single rogue developer from stealing funds. E.g. 3 out of 5 admins must sign.", "es": "Previene que un solo desarrollador malicioso robe fondos. Ej. 3 de 5 admins deben firmar."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'risks';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Why diversify across protocols?", "es": "¿Por qué diversificar entre protocolos?"}$$,
  $$[{"en": "To pay more fees", "es": "Para pagar más tarifas"}, {"en": "To reduce risk of single hack wiping you out", "es": "Para reducir riesgo de que un solo hackeo te limpie"}, {"en": "It looks cool", "es": "Se ve genial"}, {"en": "No reason", "es": "Sin razón"}]$$,
  1,
  $${"en": "Don't put all eggs in one basket. If Aave gets hacked, your funds in Compound are safe.", "es": "No pongas todos los huevos en una canasta. Si Aave es hackeado, tus fondos en Compound están seguros."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'risks';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is an Administrative Key?", "es": "¿Qué es una Llave Administrativa?"}$$,
  $$[{"en": "Key to the office", "es": "Llave de oficina"}, {"en": "Master access to upgrade contract", "es": "Acceso maestro para actualizar contrato"}, {"en": "Password", "es": "Contraseña"}, {"en": "Seed phrase", "es": "Frase semilla"}]$$,
  1,
  $${"en": "If devs hold an admin key, the project is not fully decentralized. They could theoretically change the code.", "es": "Si devs tienen una llave admin, el proyecto no es full descentralizado. Teóricamente podrían cambiar el código."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'risks';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Can you reverse a DeFi transaction?", "es": "¿Puedes revertir una transacción DeFi?"}$$,
  $$[{"en": "Yes, call support", "es": "Sí, llama a soporte"}, {"en": "No, blockchain is immutable", "es": "No, blockchain es inmutable"}, {"en": "Within 10 minutes", "es": "Dentro de 10 minutos"}, {"en": "If fee is paid", "es": "Si se paga tarifa"}]$$,
  1,
  $${"en": "Once confirmed, it is final. No bank can reverse it.", "es": "Una vez confirmada, es final. Ningún banco puede revertirla."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'risks';

-- Questions 11-15
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What tools help check token safety?", "es": "¿Qué herramientas ayudan a verificar seguridad de token?"}$$,
  $$[{"en": "Token Sniffer / GoPlus", "es": "Token Sniffer / GoPlus"}, {"en": "Google Images", "es": "Google Images"}, {"en": "Facebook", "es": "Facebook"}, {"en": "TikTok", "es": "TikTok"}]$$,
  0,
  $${"en": "These tools scan the smart contract code for known malicious patterns like honeypots.", "es": "Estas herramientas escanean el código del contrato inteligente por patrones maliciosos conocidos como honeypots."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'risks';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Is high APY always good?", "es": "¿Es el APY alto siempre bueno?"}$$,
  $$[{"en": "Yes, free money", "es": "Sí, dinero gratis"}, {"en": "No, it implies high risk or inflation", "es": "No, implica alto riesgo o inflación"}, {"en": "Yes", "es": "Sí"}, {"en": "Always", "es": "Siempre"}]$$,
  1,
  $${"en": "High yield is a risk premium. If it looks too good to be true, it is.", "es": "Alto rendimiento es una prima de riesgo. Si se ve demasiado bueno para ser verdad, lo es."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'risks';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is 'Infinite Approval'?", "es": "¿Qué es 'Aprobación Infinita'?"}$$,
  $$[{"en": "Approving unlimited spend limit for a contract", "es": "Aprobar límite de gasto ilimitado para un contrato"}, {"en": "Loving crypto forever", "es": "Amar crypto por siempre"}, {"en": "Unlimited gas", "es": "Gas ilimitado"}, {"en": "Infinite money", "es": "Dinero infinito"}]$$,
  0,
  $${"en": "Many sites ask for this for convenience. If hacked, they can drain ALL your tokens, not just the ones you swapped.", "es": "Muchos sitios piden esto por conveniencia. Si son hackeados, pueden drenar TODOS tus tokens, no solo los que cambiaste."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'risks';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "How to revoke approvals?", "es": "¿Cómo revocar aprobaciones?"}$$,
  $$[{"en": "Delete wallet", "es": "Borrar wallet"}, {"en": "Use revoke.cash or etherscan", "es": "Usar revoke.cash o etherscan"}, {"en": "Send email", "es": "Enviar email"}, {"en": "Cannot be revoked", "es": "No se puede revocar"}]$$,
  1,
  $${"en": "You must send a transaction setting the approval allowance back to 0.", "es": "Debes enviar una transacción configurando el permiso de aprobación de vuelta a 0."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'risks';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is a Front-Running attack?", "es": "¿Qué es un ataque Front-Running?"}$$,
  $$[{"en": "Running fast", "es": "Correr rápido"}, {"en": "Bots seeing your tx and buying before you to raise price", "es": "Bots viendo tu tx y comprando antes que tú para subir precio"}, {"en": "Hacking frontend", "es": "Hackear frontend"}, {"en": "Using cache", "es": "Usar caché"}]$$,
  1,
  $${"en": "MEV bots see your pending transaction and bribe miners to place their transaction before yours.", "es": "Bots MEV ven tu transacción pendiente y sobornan mineros para poner su transacción antes de la tuya."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'risks';


-- SECTION 6: Strategies
-- Questions 1-5
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is a Conservative DeFi strategy?", "es": "¿Qué es una estrategia DeFi Conservadora?"}$$,
  $$[{"en": "100% into Memecoins", "es": "100% en Memecoins"}, {"en": "Mostly Stablecoins/Bluechips in established protocols", "es": "Mayormente Stablecoins/Bluechips en protocolos establecidos"}, {"en": "Leveraged farming", "es": "Farming apalancado"}, {"en": "Day trading", "es": "Day trading"}]$$,
  1,
  $${"en": "Conservative implies minimizing risk by using stable assets and battle-tested protocols like Aave.", "es": "Conservador implica minimizar riesgo usando activos estables y protocolos probados en batalla como Aave."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'strategies';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Why keep 70% in Stablecoins?", "es": "¿Por qué mantener 70% en Stablecoins?"}$$,
  $$[{"en": "To lose money", "es": "Para perder dinero"}, {"en": "To preserve capital and earn steady yield", "es": "Para preservar capital y ganar rendimiento constante"}, {"en": "Because they are fun", "es": "Porque son divertidas"}, {"en": "No reason", "es": "Sin razón"}]$$,
  1,
  $${"en": "Stablecoins protect you from crypto market volatility while still earning DeFi interest.", "es": "Las Stablecoins te protegen de la volatilidad del mercado crypto mientras ganas interés DeFi."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'strategies';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is a 'Degen' strategy?", "es": "¿Qué es una estrategia 'Degen'?"}$$,
  $$[{"en": "Safe and slow", "es": "Segura y lenta"}, {"en": "High risk, speculative plays", "es": "Alto riesgo, jugadas especulativas"}, {"en": "Governmental", "es": "Gubernamental"}, {"en": "Savings account", "es": "Cuenta de ahorros"}]$$,
  1,
  $${"en": "Degen (Degenerate) implies gambling on high-risk, unproven protocols for massive potential gains.", "es": "Degen (Degenerado) implica apostar en protocolos de alto riesgo no probados por ganancias potenciales masivas."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'strategies';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Why use L2 for farming?", "es": "¿Por qué usar L2 para farming?"}$$,
  $$[{"en": "Higher fees", "es": "Tarifas más altas"}, {"en": "Lower gas fees increase net profit", "es": "Bajas tarifas de gas incrementan ganancia neta"}, {"en": "Slower", "es": "Más lento"}, {"en": "Less security", "es": "Menos seguridad"}]$$,
  1,
  $${"en": "High gas fees on L1 can eat 100% of your profits if your capital is small. L2s are essential for small portfolios.", "es": "Altas tarifas de gas en L1 pueden comer 100% de tus ganancias si tu capital es pequeño. L2s son esenciales para portafolios pequeños."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'strategies';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "How often should you rebalance?", "es": "¿Qué tan seguido deberías rebalancear?"}$$,
  $$[{"en": "Every hour", "es": "Cada hora"}, {"en": "Periodically (e.g. Quarterly)", "es": "Periódicamente (ej. Trimestral)"}, {"en": "Never", "es": "Nunca"}, {"en": "Daily", "es": "Diario"}]$$,
  1,
  $${"en": "Over-trading leads to high fees and tax headaches. Quarterly allows you to adjust without over-managing.", "es": "Operar en exceso lleva a altas tarifas y dolores de cabeza fiscales. Trimestral permite ajustar sin sobre-gestionar."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'strategies';

-- Questions 6-10
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Why keep tax records?", "es": "¿Por qué llevar registros fiscales?"}$$,
  $$[{"en": "For fun", "es": "Por diversión"}, {"en": "To comply with laws and avoid fines", "es": "Para cumplir leyes y evitar multas"}, {"en": "To show friends", "es": "Para mostrar a amigos"}, {"en": "No need", "es": "Sin necesidad"}]$$,
  1,
  $${"en": "Crypto is taxable in most jurisdictions. Tracking DeFi swaps manually is impossible.", "es": "Crypto es imponible en la mayoría de jurisdicciones. Rastrear swaps DeFi manualmente es imposible."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'strategies';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is compounding?", "es": "¿Qué es el interés compuesto?"}$$,
  $$[{"en": "Reinvesting earnings to earn more earnings", "es": "Reinvertir ganancias para ganar más ganancias"}, {"en": "Spending earnings", "es": "Gastar ganancias"}, {"en": "Losing money", "es": "Perder dinero"}, {"en": "Exit scam", "es": "Exit scam"}]$$,
  1,
  $${"en": "Einstein called it the 8th wonder of the world. It accelerates portfolio growth significantly.", "es": "Einstein lo llamó la octava maravilla del mundo. Acelera el crecimiento del portafolio significativamente."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'strategies';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Should you chase the highest APY?", "es": "¿Deberías perseguir el APY más alto?"}$$,
  $$[{"en": "Always", "es": "Siempre"}, {"en": "No, sustainable APY > risky high APY", "es": "No, APY sostenible > APY alto riesgoso"}, {"en": "Yes, YOLO", "es": "Sí, YOLO"}, {"en": "Only on weekends", "es": "Solo fines de semana"}]$$,
  1,
  $${"en": "Chasing APY usually leads to Rug Pulls or buying tokens that dump -99%. Consistency wins.", "es": "Perseguir APY usualmente lleva a Rug Pulls o comprar tokens que caen -99%. La consistencia gana."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'strategies';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is 'Blue Chip' in DeFi?", "es": "¿Qué es 'Blue Chip' en DeFi?"}$$,
  $$[{"en": "A blue token", "es": "Un token azul"}, {"en": "Established, highly trusted project (Uniswap, Aave, Maker)", "es": "Proyecto establecido y altamente confiable (Uniswap, Aave, Maker)"}, {"en": "New project", "es": "Proyecto nuevo"}, {"en": "NFT", "es": "NFT"}]$$,
  1,
  $${"en": "Borrowed from stock markets, it refers to reliable, safe, and large-cap protocols.", "es": "Prestado de mercados de acciones, refiere a protocolos confiables, seguros y de gran capitalización."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'strategies';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Is Hardware Wallet necessary for small amounts?", "es": "¿Es necesaria una Hardware Wallet para pequeños montos?"}$$,
  $$[{"en": "Yes, mandatory", "es": "Sí, obligatorio"}, {"en": "Not strictly, but good practice", "es": "No estrictamente, pero buena práctica"}, {"en": "No, never", "es": "No, nunca"}, {"en": "Only for $1M+", "es": "Solo para $1M+"}]$$,
  1,
  $${"en": "For small amounts, a hot wallet is acceptable convenience. For life savings, hardware is mandatory.", "es": "Para pequeños montos, una hot wallet es conveniencia aceptable. Para ahorros de vida, hardware es obligatorio."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'strategies';

-- Questions 11-15
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is 'Layer 2' (L2)?", "es": "¿Qué es 'Capa 2' (L2)?"}$$,
  $$[{"en": "A new blockchain", "es": "Una nueva blockchain"}, {"en": "A scaling solution on top of Ethereum (Arbitrum/Optimism)", "es": "Una solución de escalado sobre Ethereum (Arbitrum/Optimism)"}, {"en": "A token", "es": "Un token"}, {"en": "A wallet", "es": "Una wallet"}]$$,
  1,
  $${"en": "L2s handle transactions off the main chain to save costs, inheriting L1 security (mostly).", "es": "L2s manejan transacciones fuera de la cadena principal para ahorrar costos, heredando seguridad L1 (mayormente)."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'strategies';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is 'Dry Powder'?", "es": "¿Qué es 'Pólvora Seca'?"}$$,
  $$[{"en": "Gunpowder", "es": "Pólvora"}, {"en": "Cash/Stablecoins kept ready to buy dips", "es": "Efectivo/Stablecoins listos para comprar caídas"}, {"en": "Dust attacks", "es": "Ataques de polvo"}, {"en": "Failed tx", "es": "Tx fallida"}]$$,
  1,
  $${"en": "It means having liquidity available to take advantage of market crashes.", "es": "Significa tener liquidez disponible para aprovechar caídas de mercado."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'strategies';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What does volatility mean for farming?", "es": "¿Qué significa volatilidad para farming?"}$$,
  $$[{"en": "Nothing", "es": "Nada"}, {"en": "Higher risk of Impermanent Loss", "es": "Mayor riesgo de Pérdida Impermanente"}, {"en": "More rewards always", "es": "Más recompensas siempre"}, {"en": "Less fees", "es": "Menos tarifas"}]$$,
  1,
  $${"en": "Highly volatile pairs diverge in price often, creating maximizing IL.", "es": "Pares altamente volátiles divergen en precio seguido, maximizando IL."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'strategies';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Is 'Looping' safer than simple lending?", "es": "¿Es 'Looping' más seguro que simple lending?"}$$,
  $$[{"en": "Yes", "es": "Sí"}, {"en": "No, it increases liquidation risk", "es": "No, incrementa riesgo de liquidación"}, {"en": "Same risk", "es": "Mismo riesgo"}, {"en": "Risk free", "es": "Libre de riesgo"}]$$,
  1,
  $${"en": "Looping increases leverage. If market moves against you, you get liquidated faster.", "es": "Looping incrementa apalancamiento. Si mercado mueve en contra, eres liquidado más rápido."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'strategies';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "When should you exit a farm?", "es": "¿Cuándo deberías salir de una farm?"}$$,
  $$[{"en": "Never", "es": "Nunca"}, {"en": "When thesis changes or risk > reward", "es": "Cuando tesis cambia o riesgo > recompensa"}, {"en": "When it rains", "es": "Cuando llueve"}, {"en": "Only at night", "es": "Solo de noche"}]$$,
  1,
  $${"en": "Have an exit plan. If rewards drop or TVL flees, get out.", "es": "Ten un plan de salida. Si recompensas caen o TVL huye, sal."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'strategies';
