-- =============================================
-- DEFI DEEP DIVE - QUIZ QUESTIONS SEED PART 1
-- Sections 1-3 (15 questions each)
-- =============================================

-- SECTION 1: DeFi Fundamentals
-- Questions 1-5
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is the primary difference between DeFi and TradFi?", "es": "¿Cuál es la principal diferencia entre DeFi y TradFi?"}$$,
  $$[{"en": "DeFi uses intermediaries", "es": "DeFi usa intermediarios"}, {"en": "DeFi operates without intermediaries", "es": "DeFi opera sin intermediarios"}, {"en": "DeFi is slower", "es": "DeFi es más lento"}, {"en": "TradFi uses blockchain", "es": "TradFi usa blockchain"}]$$,
  1,
  $${"en": "DeFi relies on code (Smart Contracts) instead of banks or brokers to manage financial transactions.", "es": "DeFi confía en código (Contratos Inteligentes) en lugar de bancos o corredores para gestionar transacciones."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'fundamentals';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What executes DeFi transactions automatically?", "es": "¿Qué ejecuta transacciones DeFi automáticamente?"}$$,
  $$[{"en": "Bankers", "es": "Banqueros"}, {"en": "Miners", "es": "Mineros"}, {"en": "Smart Contracts", "es": "Contratos Inteligentes"}, {"en": "Nodes", "es": "Nodos"}]$$,
  2,
  $${"en": "Smart contracts are self-executing code that enforce the rules of the protocol.", "es": "Los contratos inteligentes son código autoejecutable que hace cumplir las reglas del protocolo."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'fundamentals';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Does DeFi require ID verification (KYC)?", "es": "¿Requiere DeFi verificación de identidad (KYC)?"}$$,
  $$[{"en": "Always", "es": "Siempre"}, {"en": "Never", "es": "Nunca"}, {"en": "Usually no (Permissionless)", "es": "Usualmente no (Sin permiso)"}, {"en": "Only for withdrawals", "es": "Solo para retiros"}]$$,
  2,
  $${"en": "Most DeFi is permissionless, meaning anyone with a wallet can use it without revealing their identity.", "es": "La mayoría de DeFi es sin permiso, significando que cualquiera con una wallet puede usarlo sin revelar su identidad."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'fundamentals';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What does TVL stand for?", "es": "¿Qué significa TVL?"}$$,
  $$[{"en": "Total Value Lost", "es": "Valor Total Perdido"}, {"en": "Total Volume Locked", "es": "Volumen Total Bloqueado"}, {"en": "Total Value Locked", "es": "Valor Total Bloqueado"}, {"en": "True Value Locked", "es": "Valor Verdadero Bloqueado"}]$$,
  2,
  $${"en": "TVL represents the sum of all assets currently deposited in a specific DeFi protocol.", "es": "TVL representa la suma de todos los activos actualmente depositados en un protocolo DeFi específico."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'fundamentals';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Which metric includes compound interest?", "es": "¿Qué métrica incluye interés compuesto?"}$$,
  $$[{"en": "APR", "es": "APR"}, {"en": "APY", "es": "APY"}, {"en": "TVL", "es": "TVL"}, {"en": "ROI", "es": "ROI"}]$$,
  1,
  $${"en": "APY (Annual Percentage Yield) accounts for the effect of compounding, while APR does not.", "es": "APY (Rendimiento Porcentual Anual) toma en cuenta el efecto del interés compuesto, mientras que APR no."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'fundamentals';

-- Questions 6-10
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What acts as your bank account in DeFi?", "es": "¿Qué actúa como tu cuenta bancaria en DeFi?"}$$,
  $$[{"en": "Your email", "es": "Tu email"}, {"en": "Your Web3 Wallet", "es": "Tu Wallet Web3"}, {"en": "Your IP address", "es": "Tu dirección IP"}, {"en": "Your phone number", "es": "Tu número de teléfono"}]$$,
  1,
  $${"en": "Your wallet (like MetaMask) holds your keys and funds, and is used to sign transactions.", "es": "Tu wallet (como MetaMask) guarda tus llaves y fondos, y es usada para firmar transacciones."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'fundamentals';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is the main network for DeFi currently?", "es": "¿Cuál es la red principal para DeFi actualmente?"}$$,
  $$[{"en": "Bitcoin", "es": "Bitcoin"}, {"en": "Ethereum", "es": "Ethereum"}, {"en": "Dogecoin", "es": "Dogecoin"}, {"en": "Ripple", "es": "Ripple"}]$$,
  1,
  $${"en": "Ethereum is the primary home of DeFi due to its robust smart contract capabilities.", "es": "Ethereum es el hogar principal de DeFi debido a sus robustas capacidades de contratos inteligentes."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'fundamentals';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is a 'dApp'?", "es": "¿Qué es una 'dApp'?"}$$,
  $$[{"en": "Digital App", "es": "App Digital"}, {"en": "Decentralized Application", "es": "Aplicación Descentralizada"}, {"en": "Demo App", "es": "App Demo"}, {"en": "Direct App", "es": "App Directa"}]$$,
  1,
  $${"en": "dApps are applications that run on a decentralized network.", "es": "dApps son aplicaciones que corren en una red descentralizada."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'fundamentals';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Is DeFi available 24/7?", "es": "¿Está DeFi disponible 24/7?"}$$,
  $$[{"en": "No, closes on weekends", "es": "No, cierra fines de semana"}, {"en": "Yes, always open", "es": "Sí, siempre abierto"}, {"en": "Only during trading hours", "es": "Solo en horas de trading"}, {"en": "Depends on the bank", "es": "Depende del banco"}]$$,
  1,
  $${"en": "The blockchain never sleeps. DeFi protocols operate continuously without holidays.", "es": "La blockchain nunca duerme. Los protocolos DeFi operan continuamente sin feriados."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'fundamentals';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Transparency in DeFi means...", "es": "Transparencia en DeFi significa..."}$$,
  $$[{"en": "Everyone knows your name", "es": "Todos saben tu nombre"}, {"en": "Code and transactions are public", "es": "Código y transacciones son públicas"}, {"en": "Fees are hidden", "es": "Tarifas son ocultas"}, {"en": "Nothing is secure", "es": "Nada es seguro"}]$$,
  1,
  $${"en": "All logic (code) and history (transactions) are visible on-chain for anyone to audit.", "es": "Toda la lógica (código) e historia (transacciones) son visibles on-chain para que cualquiera audite."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'fundamentals';

-- Questions 11-15
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What replaces the 'Credit Score' in DeFi?", "es": "¿Qué reemplaza el 'Historial Crediticio' en DeFi?"}$$,
  $$[{"en": "Nothing", "es": "Nada"}, {"en": "Collateral", "es": "Garantía (Colateral)"}, {"en": "Social Media", "es": "Redes Sociales"}, {"en": "Trust", "es": "Confianza"}]$$,
  1,
  $${"en": "You don't need reputation; you just need to deposit assets (collateral) to secure your loan.", "es": "No necesitas reputación; solo necesitas depositar activos (garantía) para asegurar tu préstamo."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'fundamentals';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Can you use DeFi without a bank account?", "es": "¿Puedes usar DeFi sin cuenta bancaria?"}$$,
  $$[{"en": "Yes", "es": "Sí"}, {"en": "No", "es": "No"}, {"en": "Only for small amounts", "es": "Solo para montos pequeños"}, {"en": "Depends on country", "es": "Depende del país"}]$$,
  0,
  $${"en": "DeFi creates an alternative financial system that processes value transfer independently of banks.", "es": "DeFi crea un sistema financiero alternativo que procesa transferencia de valor independientemente de bancos."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'fundamentals';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What risk does 'Code is Law' imply?", "es": "¿Qué riesgo implica 'Code is Law'?"}$$,
  $$[{"en": "Laws are strict", "es": "Leyes son estrictas"}, {"en": "If code has a bug, money is lost", "es": "Si código tiene bug, dinero se pierde"}, {"en": "Lawyers are needed", "es": "Abogados son necesarios"}, {"en": "Code is slow", "es": "Código es lento"}]$$,
  1,
  $${"en": "Since there is no human intervention, a bug or exploit in the smart contract functions exactly as written, potentially draining funds.", "es": "Como no hay intervención humana, un bug o exploit en el contrato funciona exactamente como está escrito, potencialmente drenando fondos."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'fundamentals';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Is USDC a DeFi token?", "es": "¿Es USDC un token DeFi?"}$$,
  $$[{"en": "No, it is a stablecoin used in DeFi", "es": "No, es una stablecoin usada en DeFi"}, {"en": "Yes", "es": "Sí"}, {"en": "It is a dApp", "es": "Es una dApp"}, {"en": "It is a blockchain", "es": "Es una blockchain"}]$$,
  0,
  $${"en": "USDC is a centralized stablecoin token, but it is the most widely used asset WITHIN DeFi protocols.", "es": "USDC es un token stablecoin centralizado, pero es el activo más ampliamente usado DENTRO de protocolos DeFi."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'fundamentals';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Which of these is NOT a DeFi activity?", "es": "¿Cuál NO es una actividad DeFi?"}$$,
  $$[{"en": "Yield Farming", "es": "Yield Farming"}, {"en": "Lending", "es": "Lending"}, {"en": "Wire Transfer", "es": "Transferencia Bancaria"}, {"en": "DEX Trading", "es": "Trading en DEX"}]$$,
  2,
  $${"en": "Wire transfers happen in the traditional banking system (SWIFT/SEPA), not on blockchain.", "es": "Transferencias bancarias ocurren en el sistema bancario tradicional (SWIFT/SEPA), no en blockchain."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'fundamentals';


-- SECTION 2: Lending & Borrowing
-- Questions 1-5
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Who do you lend to in DeFi?", "es": "¿A quién le prestas en DeFi?"}$$,
  $$[{"en": "A specific person", "es": "A una persona específica"}, {"en": "A Liquidity Pool (Smart Contract)", "es": "A un Pool de Liquidez (Contrato)"}, {"en": "The bank", "es": "Al banco"}, {"en": "The government", "es": "Al gobierno"}]$$,
  1,
  $${"en": "DeFi lending is 'Peer-to-Pool'. You deposit into a shared pool, and borrowers borrow from that pool.", "es": "El préstamo DeFi es 'Peer-to-Pool'. Depositas en un pool compartido, y prestatarios piden de ese pool."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'lending-borrowing';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What protects lenders from borrower default?", "es": "¿Qué protege a prestamistas del impago?"}$$,
  $$[{"en": "Insurance", "es": "Seguro"}, {"en": "Over-Collateralization", "es": "Sobre-Colateralización"}, {"en": "KYC", "es": "KYC"}, {"en": "Trust", "es": "Confianza"}]$$,
  1,
  $${"en": "Borrowers must deposit MORE value than they borrow. If value drops, they are liquidated to pay lenders.", "es": "Prestatarios deben depositar MÁS valor del que piden. Si valor cae, son liquidados para pagar a prestamistas."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'lending-borrowing';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "If you supply ETH to Aave, what happens?", "es": "¿Si suministras ETH a Aave, qué pasa?"}$$,
  $$[{"en": "It is locked forever", "es": "Se bloquea por siempre"}, {"en": "You earn interest", "es": "Ganas interés"}, {"en": "You engage in trading", "es": "Haces trading"}, {"en": "You pay fees only", "es": "Pagas tarifas solo"}]$$,
  1,
  $${"en": "Suppliers earn APY paid by borrowers who use the funds.", "es": "Proveedores ganan APY pagado por prestatarios que usan los fondos."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'lending-borrowing';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is a 'Health Factor'?", "es": "¿Qué es el 'Factor de Salud'?"}$$,
  $$[{"en": "A metric of your physical health", "es": "Métrica de salud física"}, {"en": "Safety score of your loan", "es": "Puntaje de seguridad de tu préstamo"}, {"en": "Protocol popularity", "es": "Popularidad del protocolo"}, {"en": "Token price", "es": "Precio del token"}]$$,
  1,
  $${"en": "It measures collateral vs loan value. If it drops below 1.0, liquidation occurs.", "es": "Mide garantía vs valor de préstamo. Si cae bajo 1.0, ocurre liquidación."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'lending-borrowing';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is Aave known for?", "es": "¿Por qué es conocido Aave?"}$$,
  $$[{"en": "Being a DEX", "es": "Ser un DEX"}, {"en": "Flash Loans", "es": "Préstamos Flash"}, {"en": "NFTs", "es": "NFTs"}, {"en": "Bitcoin mining", "es": "Minería Bitcoin"}]$$,
  1,
  $${"en": "Aave pioneered Flash Loans, allowing uncollateralized borrowing if repaid in the same block.", "es": "Aave fue pionero en Préstamos Flash, permitiendo pedir sin garantía si se paga en el mismo bloque."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'lending-borrowing';

-- Questions 6-10
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What happens during Liquidation?", "es": "¿Qué pasa durante la Liquidación?"}$$,
  $$[{"en": "You get a bonus", "es": "Recibes un bono"}, {"en": "Your collateral is sold to pay debt", "es": "Tu garantía se vende para pagar deuda"}, {"en": "Protocol halts", "es": "Protocolo se detiene"}, {"en": "Interest rate drops", "es": "Tasa de interés cae"}]$$,
  1,
  $${"en": "To ensure solvency, the protocol automatically sells your collateral (with a penalty) to cover your debt.", "es": "Para asegurar solvencia, el protocolo vende automáticamente tu garantía (con multa) para cubrir tu deuda."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'lending-borrowing';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Why would someone borrow in DeFi?", "es": "¿Por qué alguien pediría prestado en DeFi?"}$$,
  $$[{"en": "They have no money", "es": "No tienen dinero"}, {"en": "To leverage or access liquidity without selling", "es": "Para apalancar o acceder liquidez sin vender"}, {"en": "It is free", "es": "Es gratis"}, {"en": "To hide funds", "es": "Para ocultar fondos"}]$$,
  1,
  $${"en": "Borrowing against assets allows you to get cash (USDT) without selling your appreciating asset (ETH), or to buy MORE ETH (leverage).", "es": "Pedir contra activos te permite tener cash (USDT) sin vender tu activo que se aprecia (ETH), o comprar MÁS ETH (apalancamiento)."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'lending-borrowing';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is a cToken (Compound)?", "es": "¿Qué es un cToken (Compound)?"}$$,
  $$[{"en": "Crypto Token", "es": "Crypto Token"}, {"en": "A receipt token representing your deposit", "es": "Un token recibo representando tu depósito"}, {"en": "Cash Token", "es": "Token Efectivo"}, {"en": "Computer Token", "es": "Token Computador"}]$$,
  1,
  $${"en": "When you deposit into Compound, you get cTokens (like cUSDC) that accrue interest automatically.", "es": "Cuando depositas en Compound, recibes cTokens (como cUSDC) que acumulan interés automáticamente."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'lending-borrowing';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Does credit score affect DeFi rates?", "es": "¿Afecta el historial crediticio tasas DeFi?"}$$,
  $$[{"en": "Yes", "es": "Sí"}, {"en": "No", "es": "No"}, {"en": "Only for big loans", "es": "Solo grandes préstamos"}, {"en": "In the future", "es": "En el futuro"}]$$,
  1,
  $${"en": "DeFi is blind to who you are. Rates are determined purely by supply and demand of the pool.", "es": "DeFi es ciego a quién eres. Las tasas se determinan puramente por oferta y demanda del pool."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'lending-borrowing';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Can you borrow 100% of your collateral?", "es": "¿Puedes pedir prestado 100% de tu garantía?"}$$,
  $$[{"en": "Yes", "es": "Sí"}, {"en": "No, usually up to 75-80% (LTV)", "es": "No, usualmente hasta 75-80% (LTV)"}, {"en": "Yes, with good credit", "es": "Sí, con buen crédito"}, {"en": "No, only 10%", "es": "No, solo 10%"}]$$,
  1,
  $${"en": "Max LTV (Loan To Value) is usually capped around 75-80% to leave a safety margin for price volatility.", "es": "El LTV Máximo (Loan To Value) se limita usualmente alrededor de 75-80% para dejar margen de seguridad ante volatilidad."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'lending-borrowing';

-- Questions 11-15
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Who sets the interest rates in Aave?", "es": "¿Quién define las tasas de interés en Aave?"}$$,
  $$[{"en": "The CEO", "es": "El CEO"}, {"en": "The Algorithm (Supply/Demand)", "es": "El Algoritmo (Oferta/Demanda)"}, {"en": "The borrowers", "es": "Los prestatarios"}, {"en": "The government", "es": "El gobierno"}]$$,
  1,
  $${"en": "Rates adjust automatically: low liquidity = high rates (to attract deposits), high liquidity = low rates.", "es": "Las tasas se ajustan automáticamente: baja liquidez = tasas altas (atraer depósitos), alta liquidez = tasas bajas."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'lending-borrowing';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What does 'Over-Collateralized' mean?", "es": "¿Qué significa 'Sobre-Colateralizado'?"}$$,
  $$[{"en": "Too much paperwork", "es": "Mucho papeleo"}, {"en": "Loan value < Collateral value", "es": "Valor Préstamo < Valor Garantía"}, {"en": "Loan value > Collateral value", "es": "Valor Préstamo > Valor Garantía"}, {"en": "Collateral is fake", "es": "Garantía es falsa"}]$$,
  1,
  $${"en": "You must lock up MORE value than you take out.", "es": "Debes bloquear MÁS valor del que sacas."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'lending-borrowing';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "How do you repay a DeFi loan?", "es": "¿Cómo pagas un préstamo DeFi?"}$$,
  $$[{"en": "Email support", "es": "Email a soporte"}, {"en": "Send tokens to contract via function", "es": "Enviar tokens a contrato vía función"}, {"en": "Wait for expiration", "es": "Esperar expiración"}, {"en": "It is automatic", "es": "Es automático"}]$$,
  1,
  $${"en": "You manually call the 'Repay' function on the dashboard and authorize the token transfer.", "es": "Llamas manualmente la función 'Repay' en el panel y autorizas la transferencia de tokens."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'lending-borrowing';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Is lending risk-free?", "es": "¿Es el lending libre de riesgos?"}$$,
  $$[{"en": "Yes, totally", "es": "Sí, totalmente"}, {"en": "No (Smart Contract Risk)", "es": "No (Riesgo Contrato Inteligente)"}, {"en": "Yes if stablecoins", "es": "Sí si son stablecoins"}, {"en": "No, you lose yield", "es": "No, pierdes rendimiento"}]$$,
  1,
  $${"en": "Even with collateral, bugs in the smart contract code could lead to total loss of funds.", "es": "Aún con garantía, bugs en el código del contrato podrían llevar a pérdida total de fondos."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'lending-borrowing';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is Flash Loan used for primarily?", "es": "¿Para qué se usa un Préstamo Flash principalmente?"}$$,
  $$[{"en": "Buying cars", "es": "Comprar autos"}, {"en": "Arbitrage and Liquidations", "es": "Arbitraje y Liquidaciones"}, {"en": "Long term holding", "es": "Holding largo plazo"}, {"en": "Staking", "es": "Staking"}]$$,
  1,
  $${"en": "Traders use them to profit from price differences (arbitrage) without needing their own massive capital.", "es": "Traders los usan para lucrar de diferencias de precio (arbitraje) sin necesitar capital masivo propio."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'lending-borrowing';

-- SECTION 3: Yield Farming
-- Questions 1-5
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is Yield Farming?", "es": "¿Qué es Yield Farming?"}$$,
  $$[{"en": "Growing crops", "es": "Cultivar cosechas"}, {"en": "Moving crypto to earn max return", "es": "Mover crypto para ganar max retorno"}, {"en": "Mining Bitcoin", "es": "Minar Bitcoin"}, {"en": "Buying NFTs", "es": "Comprar NFTs"}]$$,
  1,
  $${"en": "It refers to proactively managing your assets across protocols to hunt for the best yields.", "es": "Refiere a gestionar proactivamente tus activos entre protocolos para cazar los mejores rendimientos."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'yield-farming';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What extra reward do farmers usually seek?", "es": "¿Qué recompensa extra buscan usualmente los farmers?"}$$,
  $$[{"en": "T-Shirts", "es": "Camisetas"}, {"en": "Governance Tokens", "es": "Tokens de Gobernanza"}, {"en": "Fiat cash", "es": "Dinero Fiat"}, {"en": "Badges", "es": "Insignias"}]$$,
  1,
  $${"en": "Protocols incentivize usage by giving out their own Governance Tokens (like UNI, COMP, AAVE).", "es": "Protocolos incentivan uso dando sus propios Tokens de Gobernanza (como UNI, COMP, AAVE)."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'yield-farming';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is Liquidity Mining?", "es": "¿Qué es Minería de Liquidez?"}$$,
  $$[{"en": "Mining with GPU", "es": "Minar con GPU"}, {"en": "Earning tokens by providing liquidity", "es": "Ganar tokens proveyendo liquidez"}, {"en": "Mining water", "es": "Minar agua"}, {"en": "Hacking", "es": "Hackear"}]$$,
  1,
  $${"en": "It is the process of getting rewarded (mined tokens) for supplying assets to a DEX or lending pool.", "es": "Es el proceso de ser recompensado (tokens minados) por suministrar activos a un DEX o pool de préstamos."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'yield-farming';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is a Rug Pull?", "es": "¿Qué es un Rug Pull?"}$$,
  $$[{"en": "A carpet trick", "es": "Truco de alfombra"}, {"en": "Devs abandoning/draining a project", "es": "Devs abandonando/drenando un proyecto"}, {"en": "A good feature", "es": "Una buena función"}, {"en": "Market crash", "es": "Caída de mercado"}]$$,
  1,
  $${"en": "A malicious act where developers drain liquidity or sell all tokens, leaving investors with nothing.", "es": "Acto malicioso donde devs drenan liquidez o venden todo, dejando a inversores con nada."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'yield-farming';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is Staking?", "es": "¿Qué es Staking?"}$$,
  $$[{"en": "Eating stake", "es": "Comer carne"}, {"en": "Locking tokens to support network/protocol", "es": "Bloquear tokens para apoyar red/protocolo"}, {"en": "Trading fast", "es": "Trading rápido"}, {"en": "Selling tokens", "es": "Vender tokens"}]$$,
  1,
  $${"en": "Staking involves locking tokens (e.g., in a PoS chain or DAO) to receive rewards.", "es": "Staking involucra bloquear tokens (ej. en cadena PoS o DAO) para recibir recompensas."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'yield-farming';

-- Questions 6-10
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is 'Looping' in farming?", "es": "¿Qué es 'Looping' en farming?"}$$,
  $$[{"en": "Repeating audio", "es": "Repetir audio"}, {"en": "Deposit -> Borrow -> Deposit again", "es": "Depositar -> Pedir -> Depositar de nuevo"}, {"en": "Refreshing page", "es": "Refrescar página"}, {"en": "Losing money", "es": "Perder dinero"}]$$,
  1,
  $${"en": "It is a leverage strategy. You supply collateral, borrow more, swap, and supply again to multiply APY (and risk).", "es": "Es una estrategia de apalancamiento. Suministras garantía, pides más, swapeas, y suministras de nuevo para multiplicar APY (y riesgo)."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'yield-farming';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Does yield farming have high gas fees on Ethereum?", "es": "¿Tiene el yield farming altas tarifas de gas en Ethereum?"}$$,
  $$[{"en": "No, it is free", "es": "No, es gratis"}, {"en": "Yes, complex contracts cost more gas", "es": "Sí, contratos complejos cuestan más gas"}, {"en": "Only on Tuesdays", "es": "Solo los martes"}, {"en": "Never", "es": "Nunca"}]$$,
  1,
  $${"en": "Interaction with complex DeFi contracts is expensive on Ethereum mainnet. L2s solve this.", "es": "La interacción con contratos DeFi complejos es cara en mainnet Ethereum. L2s resuelven esto."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'yield-farming';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Why do APYs fluctuate?", "es": "¿Por qué fluctúan los APYs?"}$$,
  $$[{"en": "Randomly", "es": "Aleatoriamente"}, {"en": "Based on participation / TVL", "es": "Basado en participación / TVL"}, {"en": "Fixed by CEO", "es": "Fijado por CEO"}, {"en": "Weather", "es": "Clima"}]$$,
  1,
  $${"en": "As more people join a farm (TVL goes up), the reward share per person goes down, lowering APY.", "es": "Mientras más gente une a una farm (TVL sube), la parte de recompensa por persona baja, bajando APY."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'yield-farming';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is 'Impermanent Loss' primarily related to?", "es": "¿A qué se relaciona principalmente la 'Pérdida Impermanente'?"}$$,
  $$[{"en": "Lending", "es": "Lending"}, {"en": "Liquidity Pools (AMMs)", "es": "Pools de Liquidez (AMMs)"}, {"en": "Holding only", "es": "Solo holding"}, {"en": "Mining", "es": "Minería"}]$$,
  1,
  $${"en": "It occurs when providing liquidity to a dual-asset pool where prices diverge.", "es": "Ocurre cuando provees liquidez a un pool de doble activo donde los precios divergen."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'yield-farming';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What happens if a leveraged farm liquidates you?", "es": "¿Qué pasa si una farm apalancada te liquida?"}$$,
  $$[{"en": "You pay a small fee", "es": "Pagas pequeña tarifa"}, {"en": "You likely lose your entire principal", "es": "Probablemente pierdes todo tu capital"}, {"en": "Nothing", "es": "Nada"}, {"en": "You get a refund", "es": "Recibes reembolso"}]$$,
  1,
  $${"en": "Leverage magnifies losses. Liquidation typically leaves you with zero or near-zero.", "es": "El apalancamiento magnifica pérdidas. La liquidación típicamente te deja con cero o cerca de cero."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'yield-farming';

-- Questions 11-15
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Is Yield Farming passive income?", "es": "¿Es Yield Farming ingreso pasivo?"}$$,
  $$[{"en": "Yes, totally set and forget", "es": "Sí, ponlo y olvídalo"}, {"en": "No, it requires active management and monitoring", "es": "No, requiere gestión y monitoreo activo"}, {"en": "Only for banks", "es": "Solo para bancos"}, {"en": "It is a scam", "es": "Es una estafa"}]$$,
  1,
  $${"en": "Farms change rapidly. Rates drop, risks appear, and rewards end. You must pay attention.", "es": "Las farms cambian rápido. Tasas caen, riesgos aparecen, recompensas terminan. Debes poner atención."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'yield-farming';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is a 'Governance Token'?", "es": "¿Qué es un 'Token de Gobernanza'?"}$$,
  $$[{"en": "A stablecoin", "es": "Una stablecoin"}, {"en": "Token giving voting rights", "es": "Token dando derechos de voto"}, {"en": "A useless coin", "es": "Modena inútil"}, {"en": "A picture", "es": "Una imagen"}]$$,
  1,
  $${"en": "Holders can vote on protocol proposals (fees, upgrades), giving the token theoretical value.", "es": "Tenedores pueden votar en propuestas del protocolo (tarifas, mejoras), dando al token valor teórico."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'yield-farming';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Can smart contracts be updated?", "es": "¿Pueden actualizarse los contratos inteligentes?"}$$,
  $$[{"en": "Never", "es": "Nunca"}, {"en": "Yes, if they are upgradeable proxies", "es": "Sí, si son proxies actualizables"}, {"en": "By anyone", "es": "Por cualquiera"}, {"en": "Automatically", "es": "Automáticamente"}]$$,
  1,
  $${"en": "Many DeFi contracts are upgradable by admins (multisig). This is a trust vector/risk.", "es": "Muchos contratos DeFi son actualizables por admins (multisig). Esto es un vector de confianza/riesgo."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'yield-farming';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is 'Harvesting'?", "es": "¿Qué es 'Cosechar (Harvesting)'?"}$$,
  $$[{"en": "Deleting account", "es": "Borrar cuenta"}, {"en": "Claiming accumulated rewards", "es": "Reclamar recompensas acumuladas"}, {"en": "Selling all", "es": "Vender todo"}, {"en": "Buying seeds", "es": "Comprar semillas"}]$$,
  1,
  $${"en": "Harvesting is the transaction where you claim your pending reward tokens to your wallet.", "es": "Cosechar es la transacción donde reclamas tus tokens de recompensa pendientes a tu wallet."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'yield-farming';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Should you farm with large amounts first?", "es": "¿Deberías farmear con grandes montos primero?"}$$,
  $$[{"en": "Yes, all in", "es": "Sí, todo adentro"}, {"en": "No, test with small amount first", "es": "No, prueba con monto pequeño primero"}, {"en": "No matter", "es": "No importa"}, {"en": "Only ETH", "es": "Solo ETH"}]$$,
  1,
  $${"en": "Always test transactions with a small amount first to verify connection and contract safety.", "es": "Siempre prueba transacciones con monto pequeño primero para verificar conexión y seguridad del contrato."}$$
FROM course_sections WHERE course_id = 'defi-deep-dive' AND slug = 'yield-farming';
