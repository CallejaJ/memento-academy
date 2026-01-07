-- Portfolio Management Questions Seed
-- Rewritten to use SELECT for section_id lookup to ensure valid UUIDs

-- 1. Portfolio Basics
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "What is the primary difference between a wallet and a portfolio?", "es": "¿Cuál es la principal diferencia entre una wallet y un portafolio?"}', 
  '{"en": ["A wallet holds keys, a portfolio implies a strategy", "A wallet is for cold storage only", "A portfolio is only for stocks", "None of the above"], "es": ["Una wallet guarda claves, un portafolio implica estrategia", "Una wallet es solo para almacenamiento en frío", "Un portafolio es solo para acciones", "Ninguna de las anteriores"]}', 
  0, 
  '{"en": "A wallet is a tool for storage, while a portfolio represents the collection of assets managed with a specific financial goal/strategy.", "es": "Una wallet es una herramienta de almacenamiento, mientras que un portafolio representa la colección de activos gestionados con un objetivo/estrategia financiera."}'
FROM course_sections WHERE course_id = 'portfolio-management' AND slug = 'portfolio-basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Which asset class is typically considered a ''Blue Chip'' in crypto?", "es": "¿Qué clase de activo se considera típicamente ''Blue Chip'' en cripto?"}', 
  '{"en": ["New meme coins", "Bitcoin and Ethereum", "NFTs only", "Micro-cap altcoins"], "es": ["Nuevas meme coins", "Bitcoin y Ethereum", "Solo NFTs", "Altcoins de micro-capitalización"]}', 
  1, 
  '{"en": "BTC and ETH are considered Blue Chips due to their established history, market cap, and relative stability compared to others.", "es": "BTC y ETH se consideran Blue Chips debido a su historia establecida, capitalización de mercado y estabilidad relativa comparada con otros."}'
FROM course_sections WHERE course_id = 'portfolio-management' AND slug = 'portfolio-basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "What characterizes a ''Small Cap'' asset?", "es": "¿Qué caracteriza a un activo ''Small Cap''?"}', 
  '{"en": ["Low risk, low reward", "High stability", "High risk, potential high reward", "Guaranteed returns"], "es": ["Bajo riesgo, baja recompensa", "Alta estabilidad", "Alto riesgo, potencial alta recompensa", "Retornos garantizados"]}', 
  2, 
  '{"en": "Small Caps are newer or smaller projects with higher volatility, offering higher potential returns but also higher risk of failure.", "es": "Las Small Caps son proyectos más nuevos o pequeños con mayor volatilidad, ofreciendo mayores retornos potenciales pero también mayor riesgo de fracaso."}'
FROM course_sections WHERE course_id = 'portfolio-management' AND slug = 'portfolio-basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "What is ''HODL'' as a strategy?", "es": "¿Qué es ''HODL'' como estrategia?"}', 
  '{"en": ["Selling at the first sign of a dip", "Day trading every hour", "Long-term holding regardless of short-term volatility", "Buying only stablecoins"], "es": ["Vender a la primera señal de caída", "Day trading cada hora", "Mantener a largo plazo sin importar la volatilidad a corto plazo", "Comprar solo stablecoins"]}', 
  2, 
  '{"en": "HODL involves holding assets for a long period, believing in their long-term value appreciation despite market swings.", "es": "HODL implica mantener activos por un largo periodo, creyendo en su apreciación de valor a largo plazo a pesar de los vaivenes del mercado."}'
FROM course_sections WHERE course_id = 'portfolio-management' AND slug = 'portfolio-basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "What is typically the largest allocation in a conservative crypto portfolio?", "es": "¿Cuál es típicamente la mayor asignación en un portafolio cripto conservador?"}', 
  '{"en": ["Small Caps", "NFTs", "Blue Chips (BTC/ETH)", "Memecoins"], "es": ["Small Caps", "NFTs", "Blue Chips (BTC/ETH)", "Memecoins"]}', 
  2, 
  '{"en": "Conservative portfolios prioritize capital preservation, thus allocating the majority to established Blue Chips.", "es": "Los portafolios conservadores priorizan la preservación de capital, asignando la mayoría a Blue Chips establecidas."}'
FROM course_sections WHERE course_id = 'portfolio-management' AND slug = 'portfolio-basics';


-- 2. Diversification
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "What is the main purpose of diversification?", "es": "¿Cuál es el propósito principal de la diversificación?"}', 
  '{"en": ["Maximize risk", "Reduce risk exposure", "Guarantee 100x gains", "Simplify tax"], "es": ["Maximizar riesgo", "Reducir exposición al riesgo", "Garantizar ganancias de 100x", "Simplificar impuestos"]}', 
  1, 
  '{"en": "Diversification spreads investments so that a loss in one area doesn''t wipe out the entire portfolio.", "es": "La diversificación reparte las inversiones para que una pérdida en un área no borre todo el portafolio."}'
FROM course_sections WHERE course_id = 'portfolio-management' AND slug = 'diversification';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Which is an example of Sector Diversification?", "es": "¿Cuál es un ejemplo de Diversificación por Sector?"}', 
  '{"en": ["Holding BTC and ETH", "Holding DeFi, Gaming, and L1 tokens", "Holding USDT and USDC", "Holding only Meme coins"], "es": ["Tener BTC y ETH", "Tener tokens de DeFi, Gaming y L1", "Tener USDT y USDC", "Tener solo Meme coins"]}', 
  1, 
  '{"en": "Investing in different categories (sectors) like DeFi, L1s, and Gaming reduces sector-specific risk.", "es": "Invertir en diferentes categorías (sectores) como DeFi, L1s y Gaming reduce el riesgo específico del sector."}'
FROM course_sections WHERE course_id = 'portfolio-management' AND slug = 'diversification';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "What is ''Over-Diversification''?", "es": "¿Qué es la ''Sobre-Diversificación''?"}', 
  '{"en": ["Owning 2 coins", "Owning so many assets that returns become average and hard to manage", "Owning only Bitcoin", "Not owning any crypto"], "es": ["Tener 2 monedas", "Tener tantos activos que los retornos se vuelven promedio y difíciles de gestionar", "Tener solo Bitcoin", "No tener cripto"]}', 
  1, 
  '{"en": "Owning too many assets (e.g., 20-30+) can dilute gains and make tracking difficult.", "es": "Tener demasiados activos (ej. 20-30+) puede diluir ganancias y dificultar el seguimiento."}'
FROM course_sections WHERE course_id = 'portfolio-management' AND slug = 'diversification';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "DCA (Dollar Cost Averaging) helps with:", "es": "DCA (Dollar Cost Averaging) ayuda con:"}', 
  '{"en": ["Price/Time diversification", "Sector diversification", "Increasing fees", "Timing the exact bottom"], "es": ["Diversificación de Precio/Tiempo", "Diversificación de sector", "Aumentar comisiones", "Cronometrar el fondo exacto"]}', 
  0, 
  '{"en": "Buying at different times smoothens out the entry price, reducing the risk of buying the top.", "es": "Comprar en diferentes momentos suaviza el precio de entrada, reduciendo el riesgo de comprar en el pico."}'
FROM course_sections WHERE course_id = 'portfolio-management' AND slug = 'diversification';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Creating a balanced portfolio involves:", "es": "Crear un portafolio balanceado implica:"}', 
  '{"en": ["Putting 100% in one coin", "Distributing capital across uncorrelated assets", "Selling everything", "Ignoring risk"], "es": ["Poner 100% en una moneda", "Distribuir capital en activos no correlacionados", "Vender todo", "Ignorar el riesgo"]}', 
  1, 
  '{"en": "Distribution across uncorrelated assets balances the portfolio''s overall risk/reward profile.", "es": "La distribución a través de activos no correlacionados equilibra el perfil general de riesgo/recompensa del portafolio."}'
FROM course_sections WHERE course_id = 'portfolio-management' AND slug = 'diversification';


-- 3. Risk Management
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "What is the #1 rule of crypto investing?", "es": "¿Cuál es la regla #1 de la inversión en cripto?"}', 
  '{"en": ["Buy low sell high", "Invest only what you can afford to lose", "Use 100x leverage", "Follow influencers"], "es": ["Comprar bajo vender alto", "Invertir solo lo que puedas permitirte perder", "Usar apalancamiento 100x", "Seguir influencers"]}', 
  1, 
  '{"en": "Never gamble with money needed for essential living expenses.", "es": "Nunca apuestes dinero necesario para gastos esenciales de vida."}'
FROM course_sections WHERE course_id = 'portfolio-management' AND slug = 'risk-management';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Why keep stablecoins in a portfolio?", "es": "¿Por qué mantener stablecoins en un portafolio?"}', 
  '{"en": ["To earn 0% interest", "To buy dips and reduce volatility", "They are useless", "They will moon"], "es": ["Para ganar 0% interés", "Para comprar caídas y reducir volatilidad", "Son inútiles", "Se irán a la luna"]}', 
  1, 
  '{"en": "Cash/Stablecoins are ''dry powder'' to capitalize on market crashes.", "es": "El efectivo/Stablecoins son ''pólvora seca'' para capitalizar en los cracks del mercado."}'
FROM course_sections WHERE course_id = 'portfolio-management' AND slug = 'risk-management';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "What does leverage do?", "es": "¿Qué hace el apalancamiento?"}', 
  '{"en": ["Guarantees safety", "Amplifies gains and losses", "Reduces fees", "Secures keys"], "es": ["Garantiza seguridad", "Amplifica ganancias y pérdidas", "Reduce comisiones", "Asegura claves"]}', 
  1, 
  '{"en": "Leverage magnifies movements. 10x leverage means a 10% drop liquidates you.", "es": "El apalancamiento magnifica movimientos. Apalancamiento 10x significa que una caída del 10% te liquida."}'
FROM course_sections WHERE course_id = 'portfolio-management' AND slug = 'risk-management';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "When should you take profits?", "es": "¿Cuándo deberías tomar ganancias?"}', 
  '{"en": ["Never", "When the market is crashing", "According to a pre-set plan/levels", "When you feel like it"], "es": ["Nunca", "Cuando el mercado se hunde", "Según un plan/niveles preestablecidos", "Cuando tengas ganas"]}', 
  2, 
  '{"en": "Taking profits at pre-planned levels secures gains and prevents greed from erasing them.", "es": "Tomar ganancias en niveles pre-planeados asegura las ganancias y evita que la codicia las borre."}'
FROM course_sections WHERE course_id = 'portfolio-management' AND slug = 'risk-management';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Why is capital preservation important?", "es": "¿Por qué es importante la preservación de capital?"}', 
  '{"en": ["It is boring", "To stay in the game and compound over time", "To avoid taxes", "To impress others"], "es": ["Es aburrido", "Para mantenerse en el juego y componer con el tiempo", "Para evitar impuestos", "Para impresionar a otros"]}', 
  1, 
  '{"en": "If you lose 50%, you need a 100% gain to recover. Preserving capital is key to long-term survival.", "es": "Si pierdes 50%, necesitas una ganancia del 100% para recuperar. Preservar el capital es clave para la supervivencia a largo plazo."}'
FROM course_sections WHERE course_id = 'portfolio-management' AND slug = 'risk-management';


-- 4. Rebalancing
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "What is portfolio rebalancing?", "es": "¿Qué es el rebalanceo de portafolio?"}', 
  '{"en": ["Buying only new coins", "Adjusting portfolio weightings back to target allocations", "Selling everything to cash", "Never checking your portfolio"], "es": ["Comprar solo monedas nuevas", "Ajustar las ponderaciones del portafolio a las asignaciones objetivo", "Vender todo a efectivo", "Nunca revisar tu portafolio"]}', 
  1, 
  '{"en": "Rebalancing involves buying/selling assets to return to your original strategic allocation.", "es": "El rebalanceo implica comprar/vender activos para volver a tu asignación estratégica original."}'
FROM course_sections WHERE course_id = 'portfolio-management' AND slug = 'rebalancing';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "How does rebalancing act as a strategy?", "es": "¿Cómo actúa el rebalanceo como estrategia?"}', 
  '{"en": ["Buy high, sell low", "Buy low, sell high", "Hold forever", "Random trading"], "es": ["Comprar alto, vender bajo", "Comprar bajo, vender alto", "Mantener para siempre", "Trading aleatorio"]}', 
  1, 
  '{"en": "It forces you to sell outperformers (sell high) and buy underperformers (buy low).", "es": "Te obliga a vender los que han subido (vender alto) y comprar los que han bajado (comprar bajo)."}'
FROM course_sections WHERE course_id = 'portfolio-management' AND slug = 'rebalancing';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "What is Time-Based rebalancing?", "es": "¿Qué es el rebalanceo basado en tiempo?"}', 
  '{"en": ["Rebalancing every time price moves 1%", "Rebalancing at set intervals (e.g., monthly)", "Rebalancing once a decade", "Rebalancing when you panic"], "es": ["Rebalancear cada vez que el precio se mueve un 1%", "Rebalancear en intervalos fijos (ej. mensualmente)", "Rebalancear una vez por década", "Rebalancear cuando entras en pánico"]}', 
  1, 
  '{"en": "Time-based rebalancing occurs on a fixed schedule, regardless of market conditions.", "es": "El rebalanceo basado en tiempo ocurre en un horario fijo, independientemente de las condiciones del mercado."}'
FROM course_sections WHERE course_id = 'portfolio-management' AND slug = 'rebalancing';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "What is Threshold-Based rebalancing?", "es": "¿Qué es el rebalanceo basado en umbral?"}', 
  '{"en": ["Rebalancing when allocation deviates by a specific percentage", "Rebalancing every Sunday", "Rebalancing when Elon tweets", "Rebalancing when gas fees are high"], "es": ["Rebalancear cuando la asignación se desvía un porcentaje específico", "Rebalancear cada domingo", "Rebalancear cuando Elon tuitea", "Rebalancear cuando el gas es alto"]}', 
  0, 
  '{"en": "Threshold-based rebalancing triggers only when portfolio drift exceeds a set limit (e.g., 5%).", "es": "El rebalanceo basado en umbral se activa solo cuando la desviación del portafolio excede un límite (ej. 5%)."}'
FROM course_sections WHERE course_id = 'portfolio-management' AND slug = 'rebalancing';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Which rebalancing method requires more active monitoring?", "es": "¿Qué método de rebalanceo requiere un monitoreo más activo?"}', 
  '{"en": ["Time-Based", "Threshold-Based", "Neither", "Random"], "es": ["Basado en Tiempo", "Basado en Umbral", "Ninguno", "Aleatorio"]}', 
  1, 
  '{"en": "Threshold-based requires watching the markets to know when deviations occur.", "es": "El basado en umbral requiere vigilar los mercados para saber cuándo ocurren las desviaciones."}'
FROM course_sections WHERE course_id = 'portfolio-management' AND slug = 'rebalancing';


-- 5. Tax Optimization
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "What is Tax-Loss Harvesting?", "es": "¿Qué es Tax-Loss Harvesting?"}', 
  '{"en": ["Evading taxes", "Selling assets at a loss to offset gains", "Harvesting crops", "Buying tax credits"], "es": ["Evadir impuestos", "Vender activos en pérdida para compensar ganancias", "Cosechar cultivos", "Comprar créditos fiscales"]}', 
  1, 
  '{"en": "It involves realizing losses to lower your overall taxable capital gains.", "es": "Implica realizar pérdidas para reducir tus ganancias de capital imponibles totales."}'
FROM course_sections WHERE course_id = 'portfolio-management' AND slug = 'tax-optimization';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "In many jurisdictions, how long must you hold to get standard long-term tax rates?", "es": "En muchas jurisdicciones, ¿cuánto tiempo debes mantener para obtener tasas de impuestos a largo plazo?"}', 
  '{"en": ["1 day", "1 month", "> 1 year", "10 years"], "es": ["1 día", "1 mes", "> 1 año", "10 años"]}', 
  2, 
  '{"en": "Holding for more than one year often qualifies for lower long-term capital gains tax rates.", "es": "Mantener por más de un año a menudo califica para tasas de impuestos a las ganancias de capital más bajas."}'
FROM course_sections WHERE course_id = 'portfolio-management' AND slug = 'tax-optimization';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "What is a ''taxable event'' in crypto?", "es": "¿Qué es un ''evento imponible'' en cripto?"}', 
  '{"en": ["Buying crypto with fiat", "Trading crypto for crypto, or selling for fiat", "Holding in a wallet", "Looking at charts"], "es": ["Comprar cripto con fiat", "Intercambiar cripto por cripto, o vender por fiat", "Mantener en una wallet", "Mirar gráficos"]}', 
  1, 
  '{"en": "Trading one crypto for another or selling for cash creates a taxable event.", "es": "Intercambiar una cripto por otra o vender por efectivo crea un evento imponible."}'
FROM course_sections WHERE course_id = 'portfolio-management' AND slug = 'tax-optimization';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Which strategy typically avoids immediate taxable events?", "es": "¿Qué estrategia evita típicamente eventos imponibles inmediatos?"}', 
  '{"en": ["Day trading", "Taking a loan against crypto assets", "Selling high", "Trading pairs"], "es": ["Day trading", "Tomar un préstamo contra activos cripto", "Vender alto", "Intercambiar pares"]}', 
  1, 
  '{"en": "Borrowing against assets is usually not a sale, thus normally not a taxable event (check local laws).", "es": "Pedir prestado contra activos usualmente no es una venta, por lo tanto normalmente no es un evento imponible (revisa leyes locales)."}'
FROM course_sections WHERE course_id = 'portfolio-management' AND slug = 'tax-optimization';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "What does FIFO stand for in tax accounting?", "es": "¿Qué significa FIFO en contabilidad fiscal?"}', 
  '{"en": ["First In, First Out", "Fast In, Fast Out", "Fee In, Fee Out", "First In, First Off"], "es": ["Primero en Entrar, Primero en Salir", "Rápido en Entrar, Rápido en Salir", "Comisión dentro, Comisión fuera", "Primero en Entrar, Primero en Apagar"]}', 
  0, 
  '{"en": "FIFO assumes the assets you sell are the oldest ones you bought.", "es": "FIFO asume que los activos que vendes son los más antiguos que compraste."}'
FROM course_sections WHERE course_id = 'portfolio-management' AND slug = 'tax-optimization';


-- 6. Performance Tracking
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "What does ROI stand for?", "es": "¿Qué significa ROI?"}', 
  '{"en": ["Risk Of Insurance", "Return On Investment", "Rate Of Inflation", "Return On Interest"], "es": ["Riesgo de Seguro", "Retorno de Inversión", "Tasa de Inflación", "Retorno de Interés"]}', 
  1, 
  '{"en": "ROI measures the gain or loss generated on an investment relative to the amount of money invested.", "es": "El ROI mide la ganancia o pérdida generada en una inversión relativa a la cantidad de dinero invertido."}'
FROM course_sections WHERE course_id = 'portfolio-management' AND slug = 'performance-tracking';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Why track your portfolio in Bitcoin terms (Sats Value)?", "es": "¿Por qué seguir tu portafolio en términos de Bitcoin (Valor en Sats)?"}', 
  '{"en": ["Because fiat is fake", "To see if you are outperforming simply holding BTC", "Because BTC is the only coin", "To confuse yourself"], "es": ["Porque el fiat es falso", "Para ver si estás superando simplemente mantener BTC", "Porque BTC es la única moneda", "Para confundirte"]}', 
  1, 
  '{"en": "If your altcoin trading performs worse than just holding BTC, you are taking extra risk for no reward.", "es": "Si tu trading de altcoins rinde peor que solo mantener BTC, estás tomando riesgo extra sin recompensa."}'
FROM course_sections WHERE course_id = 'portfolio-management' AND slug = 'performance-tracking';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "What is ''Drawdown''?", "es": "¿Qué es ''Drawdown''?"}', 
  '{"en": ["Drawing on a chart", "The peak-to-trough decline in value", "Withdrawing money", "Drawing down debt"], "es": ["Dibujar en un gráfico", "La caída de pico a fondo en valor", "Retirar dinero", "Reducir deuda"]}', 
  1, 
  '{"en": "Drawdown measures how much your portfolio has fallen from its highest point.", "es": "El Drawdown mide cuánto ha caído tu portafolio desde su punto más alto."}'
FROM course_sections WHERE course_id = 'portfolio-management' AND slug = 'performance-tracking';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Which tool is commonly used to track crypto portfolios automatically?", "es": "¿Qué herramienta se usa comúnmente para seguir portafolios cripto automáticamente?"}', 
  '{"en": ["Excel only", "Portfolio Trackers (e.g., CoinStats, Delta)", "Notepad", "Memory"], "es": ["Solo Excel", "Rastreadores de Portafolio (ej. CoinStats, Delta)", "Bloc de notas", "Memoria"]}', 
  1, 
  '{"en": "Apps like CoinStats, Delta, or Zapper automatically sync with wallets/exchanges to track performance.", "es": "Apps como CoinStats, Delta o Zapper se sincronizan automáticamente con wallets/exchanges para seguir el rendimiento."}'
FROM course_sections WHERE course_id = 'portfolio-management' AND slug = 'performance-tracking';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "What is a good frequency to check your long-term portfolio?", "es": "¿Cuál es una buena frecuencia para revisar tu portafolio a largo plazo?"}', 
  '{"en": ["Every 5 minutes", "Every hour", "Weekly or Monthly", "Never"], "es": ["Cada 5 minutos", "Cada hora", "Semanal o Mensualmente", "Nunca"]}', 
  2, 
  '{"en": "For long-term strategies, constantly checking prices induces stress and emotional trading. Weekly/Monthly is sufficient.", "es": "Para estrategias a largo plazo, revisar precios constantemente induce estrés y trading emocional. Semanal/Mensual es suficiente."}'
FROM course_sections WHERE course_id = 'portfolio-management' AND slug = 'performance-tracking';
