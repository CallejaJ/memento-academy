-- =============================================
-- CRYPTO-101 QUIZ QUESTIONS - PART 3 (Sections 7-9)
-- 15 questions per section
-- =============================================

-- SECTION 7: Trading Basics (15 questions)
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is a market order?", "es": "¿Qué es una orden de mercado?"}',
  '[{"en": "An order to buy at a specific price", "es": "Una orden para comprar a un precio específico"}, {"en": "An order to buy/sell immediately at current price", "es": "Una orden para comprar/vender inmediatamente al precio actual"}, {"en": "A scheduled future order", "es": "Una orden programada futura"}, {"en": "A cancelled order", "es": "Una orden cancelada"}]',
  1,
  '{"en": "Market orders execute immediately at the best available current price.", "es": "Las órdenes de mercado se ejecutan inmediatamente al mejor precio disponible actual."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'trading-basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is a limit order?", "es": "¿Qué es una orden límite?"}',
  '[{"en": "Immediate execution", "es": "Ejecución inmediata"}, {"en": "An order that only executes at your specified price", "es": "Una orden que solo se ejecuta a tu precio especificado"}, {"en": "Maximum daily orders", "es": "Órdenes máximas diarias"}, {"en": "A restricted account", "es": "Una cuenta restringida"}]',
  1,
  '{"en": "Limit orders let you set the exact price at which you want to buy or sell.", "es": "Las órdenes límite te permiten establecer el precio exacto al que quieres comprar o vender."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'trading-basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is a stop-loss order?", "es": "¿Qué es una orden stop-loss?"}',
  '[{"en": "An order to buy more", "es": "Una orden para comprar más"}, {"en": "An order to auto-sell if price drops to a level", "es": "Una orden para vender automáticamente si el precio baja a un nivel"}, {"en": "A winning trade", "es": "Una operación ganadora"}, {"en": "An order that never executes", "es": "Una orden que nunca se ejecuta"}]',
  1,
  '{"en": "Stop-loss orders automatically sell when price drops to your set level, limiting losses.", "es": "Las órdenes stop-loss venden automáticamente cuando el precio baja a tu nivel establecido, limitando pérdidas."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'trading-basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is DCA (Dollar Cost Averaging)?", "es": "¿Qué es DCA (Dollar Cost Averaging)?"}',
  '[{"en": "Investing all at once", "es": "Invertir todo de una vez"}, {"en": "Investing fixed amounts regularly regardless of price", "es": "Invertir cantidades fijas regularmente sin importar el precio"}, {"en": "Day trading strategy", "es": "Estrategia de day trading"}, {"en": "A type of cryptocurrency", "es": "Un tipo de criptomoneda"}]',
  1,
  '{"en": "DCA means investing a fixed amount regularly (weekly/monthly), removing emotion from timing.", "es": "DCA significa invertir una cantidad fija regularmente (semanal/mensualmente), eliminando emoción del timing."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'trading-basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What does HODL mean?", "es": "¿Qué significa HODL?"}',
  '[{"en": "High Order Daily Limits", "es": "High Order Daily Limits"}, {"en": "Buy and hold long-term", "es": "Comprar y mantener a largo plazo"}, {"en": "Sell everything quickly", "es": "Vender todo rápidamente"}, {"en": "A trading bot", "es": "Un bot de trading"}]',
  1,
  '{"en": "HODL (Hold On for Dear Life) means buying and holding long-term, ignoring volatility.", "es": "HODL (Hold On for Dear Life) significa comprar y mantener a largo plazo, ignorando la volatilidad."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'trading-basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is FOMO in crypto trading?", "es": "¿Qué es FOMO en trading crypto?"}',
  '[{"en": "A trading platform", "es": "Una plataforma de trading"}, {"en": "Fear Of Missing Out", "es": "Fear Of Missing Out (Miedo a Perderse)"}, {"en": "A cryptocurrency", "es": "Una criptomoneda"}, {"en": "A wallet type", "es": "Un tipo de wallet"}]',
  1,
  '{"en": "FOMO = Fear Of Missing Out - the urge to buy when prices are rising rapidly.", "es": "FOMO = Fear Of Missing Out - el impulso de comprar cuando los precios suben rápidamente."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'trading-basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Why is FOMO dangerous for traders?", "es": "¿Por qué es peligroso el FOMO para traders?"}',
  '[{"en": "It leads to careful decisions", "es": "Lleva a decisiones cuidadosas"}, {"en": "It often leads to buying high and losing money", "es": "A menudo lleva a comprar alto y perder dinero"}, {"en": "It guarantees profits", "es": "Garantiza ganancias"}, {"en": "Its not dangerous", "es": "No es peligroso"}]',
  1,
  '{"en": "FOMO causes people to buy at peaks, often right before prices drop.", "es": "El FOMO causa que la gente compre en picos, a menudo justo antes de que los precios bajen."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'trading-basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is the advantage of DCA over lump sum investing?", "es": "¿Cuál es la ventaja de DCA sobre invertir todo de una vez?"}',
  '[{"en": "Higher returns guaranteed", "es": "Mayores retornos garantizados"}, {"en": "Removes emotion and timing risk", "es": "Elimina emoción y riesgo de timing"}, {"en": "Lower taxes", "es": "Menos impuestos"}, {"en": "Faster profits", "es": "Ganancias más rápidas"}]',
  1,
  '{"en": "DCA averages your purchase price and removes the stress of trying to time the market.", "es": "DCA promedia tu precio de compra y elimina el estrés de intentar hacer timing del mercado."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'trading-basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What does slippage mean in crypto trading?", "es": "¿Qué significa slippage en trading crypto?"}',
  '[{"en": "Your phone dropping", "es": "Tu teléfono cayéndose"}, {"en": "Difference between expected and actual execution price", "es": "Diferencia entre precio esperado y precio de ejecución real"}, {"en": "A type of order", "es": "Un tipo de orden"}, {"en": "Trading fees", "es": "Tarifas de trading"}]',
  1,
  '{"en": "Slippage occurs when the execution price differs from the expected price, common in volatile markets.", "es": "El slippage ocurre cuando el precio de ejecución difiere del esperado, común en mercados volátiles."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'trading-basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is a good beginner strategy?", "es": "¿Cuál es una buena estrategia para principiantes?"}',
  '[{"en": "Day trading with leverage", "es": "Day trading con apalancamiento"}, {"en": "HODL with DCA", "es": "HODL con DCA"}, {"en": "Following Twitter tips", "es": "Seguir tips de Twitter"}, {"en": "All-in on one coin", "es": "Todo en una sola moneda"}]',
  1,
  '{"en": "HODLing with DCA is a low-stress strategy perfect for beginners.", "es": "HODLing con DCA es una estrategia de bajo estrés perfecta para principiantes."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'trading-basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Why should you set profit targets?", "es": "¿Por qué deberías establecer objetivos de ganancias?"}',
  '[{"en": "Its legally required", "es": "Es requerido legalmente"}, {"en": "To avoid greed and lock in gains", "es": "Para evitar codicia y asegurar ganancias"}, {"en": "To pay more taxes", "es": "Para pagar más impuestos"}, {"en": "Exchanges require it", "es": "Los exchanges lo requieren"}]',
  1,
  '{"en": "Setting targets helps you take profits systematically instead of holding through downturns.", "es": "Establecer objetivos te ayuda a tomar ganancias sistemáticamente en vez de mantener durante caídas."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'trading-basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is volatility in crypto markets?", "es": "¿Qué es la volatilidad en mercados crypto?"}',
  '[{"en": "Stable prices", "es": "Precios estables"}, {"en": "Rapid and significant price changes", "es": "Cambios de precio rápidos y significativos"}, {"en": "Slow trading", "es": "Trading lento"}, {"en": "Market closure", "es": "Cierre de mercado"}]',
  1,
  '{"en": "Volatility means prices can change dramatically in short periods - both up and down.", "es": "La volatilidad significa que los precios pueden cambiar dramáticamente en cortos períodos - tanto arriba como abajo."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'trading-basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "When might a market order slip?", "es": "¿Cuándo podría deslizarse una orden de mercado?"}',
  '[{"en": "In stable markets", "es": "En mercados estables"}, {"en": "During high volatility or low liquidity", "es": "Durante alta volatilidad o baja liquidez"}, {"en": "Never", "es": "Nunca"}, {"en": "Only on weekends", "es": "Solo en fines de semana"}]',
  1,
  '{"en": "Market orders can slip when markets are volatile or theres not enough liquidity at the current price.", "es": "Las órdenes de mercado pueden deslizarse cuando los mercados son volátiles o no hay suficiente liquidez al precio actual."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'trading-basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What emotional mistake do many traders make?", "es": "¿Qué error emocional cometen muchos traders?"}',
  '[{"en": "Being too patient", "es": "Ser muy pacientes"}, {"en": "Buying high in FOMO, selling low in panic", "es": "Comprar alto en FOMO, vender bajo en pánico"}, {"en": "Reading too much", "es": "Leer demasiado"}, {"en": "Setting stop-losses", "es": "Establecer stop-losses"}]',
  1,
  '{"en": "Emotional trading leads to buying peaks (FOMO) and selling dips (panic) - the opposite of profitable.", "es": "El trading emocional lleva a comprar picos (FOMO) y vender bajadas (pánico) - lo opuesto a profitable."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'trading-basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Why is patience important in crypto?", "es": "¿Por qué es importante la paciencia en crypto?"}',
  '[{"en": "Markets are always fast", "es": "Los mercados siempre son rápidos"}, {"en": "Good investments often take time to grow", "es": "Buenas inversiones a menudo toman tiempo en crecer"}, {"en": "To wait for customer support", "es": "Para esperar soporte al cliente"}, {"en": "Exchanges are slow", "es": "Los exchanges son lentos"}]',
  1,
  '{"en": "Crypto is volatile short-term but has historically rewarded patient long-term holders.", "es": "Crypto es volátil a corto plazo pero históricamente ha recompensado a holders pacientes a largo plazo."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'trading-basics';

-- SECTION 8: Building Your Portfolio (15 questions)
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What does portfolio diversification mean?", "es": "¿Qué significa diversificación de portafolio?"}',
  '[{"en": "Putting all money in one coin", "es": "Poner todo el dinero en una moneda"}, {"en": "Spreading investments across different assets", "es": "Distribuir inversiones entre diferentes activos"}, {"en": "Only using one exchange", "es": "Solo usar un exchange"}, {"en": "Avoiding all crypto", "es": "Evitar todo crypto"}]',
  1,
  '{"en": "Diversification spreads risk by investing in multiple assets instead of just one.", "es": "La diversificación distribuye el riesgo invirtiendo en múltiples activos en vez de solo uno."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'portfolio';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is a conservative crypto portfolio allocation?", "es": "¿Qué es una asignación de portafolio crypto conservadora?"}',
  '[{"en": "100% altcoins", "es": "100% altcoins"}, {"en": "70% BTC, 20% ETH, 10% stablecoins", "es": "70% BTC, 20% ETH, 10% stablecoins"}, {"en": "50% memecoins", "es": "50% memecoins"}, {"en": "All in new tokens", "es": "Todo en tokens nuevos"}]',
  1,
  '{"en": "Conservative portfolios focus on established coins like Bitcoin and Ethereum.", "es": "Portafolios conservadores se enfocan en monedas establecidas como Bitcoin y Ethereum."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'portfolio';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Why keep some stablecoins in your portfolio?", "es": "¿Por qué mantener algunas stablecoins en tu portafolio?"}',
  '[{"en": "They earn the highest returns", "es": "Ganan los mayores retornos"}, {"en": "To buy dips when prices drop", "es": "Para comprar bajadas cuando los precios caen"}, {"en": "Legal requirement", "es": "Requisito legal"}, {"en": "They never change value", "es": "Nunca cambian de valor"}]',
  1,
  '{"en": "Stablecoins give you dry powder to buy when markets dip, without selling other assets.", "es": "Las stablecoins te dan capital disponible para comprar cuando los mercados bajan, sin vender otros activos."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'portfolio';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What does rebalancing a portfolio mean?", "es": "¿Qué significa rebalancear un portafolio?"}',
  '[{"en": "Selling everything", "es": "Vender todo"}, {"en": "Adjusting allocations back to target percentages", "es": "Ajustar asignaciones de vuelta a porcentajes objetivo"}, {"en": "Adding more money", "es": "Añadir más dinero"}, {"en": "Changing exchanges", "es": "Cambiar exchanges"}]',
  1,
  '{"en": "Rebalancing sells winners and buys losers to maintain your target allocation.", "es": "Rebalancear vende ganadores y compra perdedores para mantener tu asignación objetivo."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'portfolio';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "How often should you consider rebalancing?", "es": "¿Con qué frecuencia deberías considerar rebalancear?"}',
  '[{"en": "Every day", "es": "Cada día"}, {"en": "Quarterly or when allocations drift significantly", "es": "Trimestralmente o cuando las asignaciones se desvían significativamente"}, {"en": "Never", "es": "Nunca"}, {"en": "Every hour", "es": "Cada hora"}]',
  1,
  '{"en": "Quarterly rebalancing is a common approach to maintain target allocations.", "es": "Rebalancear trimestralmente es un enfoque común para mantener asignaciones objetivo."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'portfolio';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is an aggressive portfolio allocation?", "es": "¿Qué es una asignación de portafolio agresiva?"}',
  '[{"en": "80% stablecoins", "es": "80% stablecoins"}, {"en": "30% BTC, 30% ETH, 35% alts, 5% stables", "es": "30% BTC, 30% ETH, 35% alts, 5% stables"}, {"en": "100% Bitcoin", "es": "100% Bitcoin"}, {"en": "Cash only", "es": "Solo efectivo"}]',
  1,
  '{"en": "Aggressive portfolios have higher altcoin exposure for potentially higher returns (and risk).", "es": "Portafolios agresivos tienen mayor exposición a altcoins para potencialmente mayores retornos (y riesgo)."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'portfolio';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What should determine your portfolio allocation?", "es": "¿Qué debería determinar tu asignación de portafolio?"}',
  '[{"en": "What influencers recommend", "es": "Lo que recomiendan influencers"}, {"en": "Your personal risk tolerance and goals", "es": "Tu tolerancia personal al riesgo y objetivos"}, {"en": "Random selection", "es": "Selección aleatoria"}, {"en": "Most popular coins only", "es": "Solo monedas más populares"}]',
  1,
  '{"en": "Your allocation should match your risk tolerance - only you know your situation.", "es": "Tu asignación debería coincidir con tu tolerancia al riesgo - solo tú conoces tu situación."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'portfolio';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is an income-focused crypto strategy?", "es": "¿Qué es una estrategia crypto enfocada en ingresos?"}',
  '[{"en": "Day trading", "es": "Day trading"}, {"en": "Holding staking coins for passive yield", "es": "Mantener monedas de staking para rendimiento pasivo"}, {"en": "Buying NFTs", "es": "Comprar NFTs"}, {"en": "Mining Bitcoin", "es": "Minar Bitcoin"}]',
  1,
  '{"en": "Some cryptocurrencies offer staking rewards, providing passive income for holders.", "es": "Algunas criptomonedas ofrecen recompensas de staking, proporcionando ingresos pasivos a holders."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'portfolio';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Why not put 100% in one coin?", "es": "¿Por qué no poner 100% en una sola moneda?"}',
  '[{"en": "Its illegal", "es": "Es ilegal"}, {"en": "Single point of failure - that coin could crash", "es": "Punto único de fallo - esa moneda podría colapsar"}, {"en": "Exchanges dont allow it", "es": "Los exchanges no lo permiten"}, {"en": "You get less rewards", "es": "Obtienes menos recompensas"}]',
  1,
  '{"en": "Putting all your money in one coin means that coins failure could wipe you out.", "es": "Poner todo tu dinero en una moneda significa que el fallo de esa moneda podría eliminarte."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'portfolio';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What are altcoins in a portfolio context?", "es": "¿Qué son las altcoins en contexto de portafolio?"}',
  '[{"en": "Only Bitcoin", "es": "Solo Bitcoin"}, {"en": "Cryptocurrencies other than Bitcoin and sometimes Ethereum", "es": "Criptomonedas que no son Bitcoin y a veces Ethereum"}, {"en": "Fake coins", "es": "Monedas falsas"}, {"en": "Stable coins", "es": "Monedas estables"}]',
  1,
  '{"en": "Altcoins are alternative cryptocurrencies beyond Bitcoin (and sometimes ETH).", "es": "Las altcoins son criptomonedas alternativas más allá de Bitcoin (y a veces ETH)."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'portfolio';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is a balanced portfolio allocation?", "es": "¿Qué es una asignación de portafolio balanceada?"}',
  '[{"en": "100% one coin", "es": "100% una moneda"}, {"en": "50% BTC, 30% ETH, 15% alts, 5% stables", "es": "50% BTC, 30% ETH, 15% alts, 5% stables"}, {"en": "Only memecoins", "es": "Solo memecoins"}, {"en": "0% crypto", "es": "0% crypto"}]',
  1,
  '{"en": "A balanced portfolio mixes established coins with some altcoin exposure and stablecoin reserves.", "es": "Un portafolio balanceado mezcla monedas establecidas con algo de exposición a altcoins y reservas de stablecoins."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'portfolio';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What role do stablecoins play in rebalancing?", "es": "¿Qué papel juegan las stablecoins en el rebalanceo?"}',
  '[{"en": "No role", "es": "Ningún papel"}, {"en": "Act as dry powder to buy when prices drop", "es": "Actúan como capital disponible para comprar cuando los precios bajan"}, {"en": "They automatically rebalance", "es": "Rebalancean automáticamente"}, {"en": "Only for withdrawals", "es": "Solo para retiros"}]',
  1,
  '{"en": "Stablecoins let you buy opportunities without selling other assets at potentially bad times.", "es": "Las stablecoins te permiten comprar oportunidades sin vender otros activos en momentos potencialmente malos."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'portfolio';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What should you do when one coin grows to dominate your portfolio?", "es": "¿Qué deberías hacer cuando una moneda crece hasta dominar tu portafolio?"}',
  '[{"en": "Buy more of it", "es": "Comprar más de ella"}, {"en": "Consider selling some to rebalance", "es": "Considerar vender algo para rebalancear"}, {"en": "Ignore it", "es": "Ignorarlo"}, {"en": "Move all to that coin", "es": "Mover todo a esa moneda"}]',
  1,
  '{"en": "When one coin outperforms, selling some locks in gains and rebalances risk.", "es": "Cuando una moneda supera, vender algo asegura ganancias y rebalancea el riesgo."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'portfolio';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Does everyone need the same portfolio allocation?", "es": "¿Todos necesitan la misma asignación de portafolio?"}',
  '[{"en": "Yes, one size fits all", "es": "Sí, una talla para todos"}, {"en": "No, it depends on individual risk tolerance", "es": "No, depende de la tolerancia al riesgo individual"}, {"en": "Government decides", "es": "El gobierno decide"}, {"en": "Only experts can decide", "es": "Solo expertos pueden decidir"}]',
  1,
  '{"en": "Everyone has different goals, timelines, and risk tolerance - personalize your portfolio.", "es": "Todos tienen diferentes metas, horizontes temporales, y tolerancia al riesgo - personaliza tu portafolio."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'portfolio';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is the risk of an aggressive portfolio?", "es": "¿Cuál es el riesgo de un portafolio agresivo?"}',
  '[{"en": "No risk", "es": "Sin riesgo"}, {"en": "Higher potential losses along with higher potential gains", "es": "Mayores pérdidas potenciales junto con mayores ganancias potenciales"}, {"en": "Lower returns", "es": "Menores retornos"}, {"en": "More stable", "es": "Más estable"}]',
  1,
  '{"en": "Aggressive portfolios can gain more but also lose more during market downturns.", "es": "Portafolios agresivos pueden ganar más pero también perder más durante caídas del mercado."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'portfolio';

-- SECTION 9: FAQs (15 questions)
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "How much money do you need to start investing in crypto?", "es": "¿Cuánto dinero necesitas para empezar a invertir en crypto?"}',
  '[{"en": "At least $1,000", "es": "Al menos $1,000"}, {"en": "As little as $10", "es": "Tan poco como $10"}, {"en": "At least one full Bitcoin", "es": "Al menos un Bitcoin completo"}, {"en": "$500 minimum", "es": "$500 mínimo"}]',
  1,
  '{"en": "You can start with very small amounts - most exchanges allow purchases as low as $10.", "es": "Puedes empezar con cantidades muy pequeñas - la mayoría de exchanges permiten compras desde $10."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Is cryptocurrency legal?", "es": "¿Es legal la criptomoneda?"}',
  '[{"en": "Illegal everywhere", "es": "Ilegal en todas partes"}, {"en": "Legal in most countries but regulations vary", "es": "Legal en la mayoría de países pero las regulaciones varían"}, {"en": "Only legal in USA", "es": "Solo legal en EE.UU."}, {"en": "Legal only for businesses", "es": "Legal solo para negocios"}]',
  1,
  '{"en": "Crypto is legal in most countries, but regulations vary - always check your local laws.", "es": "Crypto es legal en la mayoría de países, pero las regulaciones varían - siempre revisa tus leyes locales."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Can you lose all your money in crypto?", "es": "¿Puedes perder todo tu dinero en crypto?"}',
  '[{"en": "No, losses are limited", "es": "No, las pérdidas están limitadas"}, {"en": "Yes, crypto is volatile and risky", "es": "Sí, crypto es volátil y riesgoso"}, {"en": "Only if you trade daily", "es": "Solo si tradeas diariamente"}, {"en": "Never possible", "es": "Nunca es posible"}]',
  1,
  '{"en": "Crypto prices can drop significantly - never invest more than you can afford to lose completely.", "es": "Los precios de crypto pueden caer significativamente - nunca inviertas más de lo que puedas perder completamente."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What if you forget your exchange password?", "es": "¿Qué pasa si olvidas tu contraseña del exchange?"}',
  '[{"en": "Funds are lost forever", "es": "Los fondos se pierden para siempre"}, {"en": "You can reset it through the exchange", "es": "Puedes resetearla a través del exchange"}, {"en": "Call the police", "es": "Llamar a la policía"}, {"en": "Contact Bitcoin support", "es": "Contactar soporte de Bitcoin"}]',
  1,
  '{"en": "Exchange passwords can be reset through standard account recovery processes.", "es": "Las contraseñas del exchange pueden resetearse a través de procesos estándar de recuperación de cuenta."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What if you forget your personal wallet seed phrase?", "es": "¿Qué pasa si olvidas la frase semilla de tu wallet personal?"}',
  '[{"en": "Reset through customer support", "es": "Resetear a través de soporte al cliente"}, {"en": "Your funds may be lost forever", "es": "Tus fondos pueden perderse para siempre"}, {"en": "Bank can recover it", "es": "El banco puede recuperarlo"}, {"en": "Wait 30 days", "es": "Esperar 30 días"}]',
  1,
  '{"en": "Unlike exchanges, personal wallets have no password reset - lose the seed phrase, lose the funds.", "es": "A diferencia de exchanges, las wallets personales no tienen reset de contraseña - pierde la frase semilla, pierde los fondos."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Should you tell people you own cryptocurrency?", "es": "¿Deberías decirle a la gente que tienes criptomonedas?"}',
  '[{"en": "Yes, share with everyone", "es": "Sí, comparte con todos"}, {"en": "Be careful - it can make you a target", "es": "Ten cuidado - puede hacerte un objetivo"}, {"en": "Its mandatory to disclose", "es": "Es obligatorio divulgarlo"}, {"en": "Always post on social media", "es": "Siempre publica en redes sociales"}]',
  1,
  '{"en": "Disclosing crypto holdings can make you a target for scams and theft.", "es": "Divulgar tenencias de crypto puede hacerte objetivo de estafas y robos."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Is this course financial advice?", "es": "¿Este curso es asesoría financiera?"}',
  '[{"en": "Yes, follow everything exactly", "es": "Sí, sigue todo exactamente"}, {"en": "No, its educational content only - DYOR", "es": "No, es solo contenido educativo - DYOR"}, {"en": "Its certified financial advice", "es": "Es asesoría financiera certificada"}, {"en": "Government approved", "es": "Aprobado por el gobierno"}]',
  1,
  '{"en": "This is educational content, not financial advice - always do your own research.", "es": "Este es contenido educativo, no asesoría financiera - siempre haz tu propia investigación."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is gas in cryptocurrency?", "es": "¿Qué es el gas en criptomonedas?"}',
  '[{"en": "Fuel for your car", "es": "Combustible para tu coche"}, {"en": "Transaction fees paid to validators", "es": "Tarifas de transacción pagadas a validadores"}, {"en": "A type of cryptocurrency", "es": "Un tipo de criptomoneda"}, {"en": "Mining equipment", "es": "Equipo de minería"}]',
  1,
  '{"en": "Gas refers to the fees paid to process transactions on networks like Ethereum.", "es": "Gas se refiere a las tarifas pagadas para procesar transacciones en redes como Ethereum."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is a hot wallet best for?", "es": "¿Para qué es mejor una hot wallet?"}',
  '[{"en": "Long-term storage of large amounts", "es": "Almacenamiento a largo plazo de grandes cantidades"}, {"en": "Daily transactions and small amounts", "es": "Transacciones diarias y pequeñas cantidades"}, {"en": "Cold storage", "es": "Almacenamiento frío"}, {"en": "Physical storage", "es": "Almacenamiento físico"}]',
  1,
  '{"en": "Hot wallets are convenient for everyday use with smaller amounts you actively transact with.", "es": "Las hot wallets son convenientes para uso diario con cantidades más pequeñas con las que transaccionas activamente."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is a cold wallet best for?", "es": "¿Para qué es mejor una cold wallet?"}',
  '[{"en": "Daily trading", "es": "Trading diario"}, {"en": "Long-term storage of larger amounts", "es": "Almacenamiento a largo plazo de mayores cantidades"}, {"en": "Fast transactions", "es": "Transacciones rápidas"}, {"en": "Online shopping", "es": "Compras online"}]',
  1,
  '{"en": "Cold wallets provide maximum security for long-term holdings you dont frequently access.", "es": "Las cold wallets proporcionan máxima seguridad para tenencias a largo plazo que no accedes frecuentemente."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What does DYOR stand for?", "es": "¿Qué significa DYOR?"}',
  '[{"en": "Do Your Own Research", "es": "Do Your Own Research (Haz Tu Propia Investigación)"}, {"en": "Daily Yearly Output Rate", "es": "Daily Yearly Output Rate"}, {"en": "Discount Your Original Returns", "es": "Discount Your Original Returns"}, {"en": "Nothing", "es": "Nada"}]',
  0,
  '{"en": "DYOR = Do Your Own Research - always verify information before investing.", "es": "DYOR = Do Your Own Research (Haz Tu Propia Investigación) - siempre verifica información antes de invertir."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Why start with small amounts?", "es": "¿Por qué empezar con cantidades pequeñas?"}',
  '[{"en": "Regulations require it", "es": "Las regulaciones lo requieren"}, {"en": "To learn with low risk", "es": "Para aprender con bajo riesgo"}, {"en": "Small is more profitable", "es": "Pequeño es más profitable"}, {"en": "Exchanges prefer it", "es": "Los exchanges lo prefieren"}]',
  1,
  '{"en": "Starting small lets you learn how things work without risking significant losses.", "es": "Empezar pequeño te permite aprender cómo funcionan las cosas sin arriesgar pérdidas significativas."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is the safest approach for beginners?", "es": "¿Cuál es el enfoque más seguro para principiantes?"}',
  '[{"en": "Leverage trading", "es": "Trading con apalancamiento"}, {"en": "Learn, start small, diversify, secure seed phrase", "es": "Aprender, empezar pequeño, diversificar, asegurar frase semilla"}, {"en": "Follow influencer tips", "es": "Seguir tips de influencers"}, {"en": "All-in on trending coins", "es": "Todo en monedas trending"}]',
  1,
  '{"en": "Learn before investing, start small, diversify holdings, and secure your seed phrase.", "es": "Aprende antes de invertir, empieza pequeño, diversifica tenencias, y asegura tu frase semilla."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Can cryptocurrency be sent anywhere in the world?", "es": "¿Se puede enviar criptomoneda a cualquier parte del mundo?"}',
  '[{"en": "Only within your country", "es": "Solo dentro de tu país"}, {"en": "Yes, borderlessly in minutes", "es": "Sí, sin fronteras en minutos"}, {"en": "Only to approved countries", "es": "Solo a países aprobados"}, {"en": "Requires government approval", "es": "Requiere aprobación del gobierno"}]',
  1,
  '{"en": "Crypto can be sent globally without intermediaries, usually in minutes.", "es": "Crypto puede enviarse globalmente sin intermediarios, usualmente en minutos."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What should you never share with anyone?", "es": "¿Qué nunca deberías compartir con nadie?"}',
  '[{"en": "Your wallet address", "es": "Tu dirección de wallet"}, {"en": "Your seed phrase", "es": "Tu frase semilla"}, {"en": "The coins you own", "es": "Las monedas que posees"}, {"en": "Your favorite exchange", "es": "Tu exchange favorito"}]',
  1,
  '{"en": "Never share your seed phrase - it gives complete control of your wallet to whoever has it.", "es": "Nunca compartas tu frase semilla - da control completo de tu wallet a quien la tenga."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'faqs';
