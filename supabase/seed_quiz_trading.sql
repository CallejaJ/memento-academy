-- =============================================
-- Trading & Technical Analysis Questions
-- Preguntas para la categoría 'trading' del desafío diario
-- Incluye: Análisis técnico, patrones, indicadores, gestión de riesgo
-- =============================================

INSERT INTO game_questions (category, difficulty, question_text, options, correct_index, explanation, from_course) VALUES

-- =============================================
-- TRADING BASICS (10 questions - easy/medium)
-- =============================================

('Technical Analysis', 'easy',
 '{"en": "What is a candlestick chart?", "es": "¿Qué es un gráfico de velas?"}',
 '[{"en": "A chart showing only prices", "es": "Un gráfico que solo muestra precios"}, {"en": "Shows open, high, low, close prices", "es": "Muestra precios de apertura, máximo, mínimo, cierre"}, {"en": "A type of cryptocurrency", "es": "Un tipo de criptomoneda"}, {"en": "A wallet display format", "es": "Un formato de visualización de billetera"}]',
 1,
 '{"en": "Candlestick charts display price data with open, high, low, and close values in a visual format.", "es": "Los gráficos de velas muestran datos de precio con valores de apertura, máximo, mínimo y cierre en formato visual."}',
 NULL),

('Technical Analysis', 'easy',
 '{"en": "What does bullish mean in trading?", "es": "¿Qué significa alcista (bullish) en trading?"}',
 '[{"en": "Prices are expected to fall", "es": "Se espera que los precios caigan"}, {"en": "Prices are expected to rise", "es": "Se espera que los precios suban"}, {"en": "Market is closed", "es": "El mercado está cerrado"}, {"en": "Prices are stable", "es": "Los precios son estables"}]',
 1,
 '{"en": "Bullish means expecting prices to rise, like a bull thrusting its horns upward.", "es": "Alcista significa esperar que los precios suban, como un toro empujando sus cuernos hacia arriba."}',
 NULL),

('Technical Analysis', 'easy',
 '{"en": "What does bearish mean in trading?", "es": "¿Qué significa bajista (bearish) en trading?"}',
 '[{"en": "Prices are expected to rise", "es": "Se espera que los precios suban"}, {"en": "Prices are expected to fall", "es": "Se espera que los precios caigan"}, {"en": "Market is stable", "es": "El mercado está estable"}, {"en": "High trading volume", "es": "Alto volumen de trading"}]',
 1,
 '{"en": "Bearish means expecting prices to fall, like a bear swiping its paws downward.", "es": "Bajista significa esperar que los precios caigan, como un oso golpeando hacia abajo."}',
 NULL),

('Technical Analysis', 'easy',
 '{"en": "What is trading volume?", "es": "¿Qué es el volumen de trading?"}',
 '[{"en": "The price of an asset", "es": "El precio de un activo"}, {"en": "Amount of asset traded in a period", "es": "Cantidad de activo negociado en un período"}, {"en": "The market cap", "es": "La capitalización de mercado"}, {"en": "Number of users trading", "es": "Número de usuarios operando"}]',
 1,
 '{"en": "Trading volume measures how much of an asset has been traded in a specific time period.", "es": "El volumen de trading mide cuánto de un activo se ha negociado en un período de tiempo específico."}',
 NULL),

('Technical Analysis', 'easy',
 '{"en": "What is a market order?", "es": "¿Qué es una orden de mercado?"}',
 '[{"en": "Order executed at best available price", "es": "Orden ejecutada al mejor precio disponible"}, {"en": "Order placed for future date", "es": "Orden colocada para fecha futura"}, {"en": "Order that never expires", "es": "Orden que nunca expira"}, {"en": "Order to buy multiple assets", "es": "Orden para comprar múltiples activos"}]',
 0,
 '{"en": "A market order executes immediately at the current best available price.", "es": "Una orden de mercado se ejecuta inmediatamente al mejor precio disponible actual."}',
 NULL),

('Technical Analysis', 'medium',
 '{"en": "What is a limit order?", "es": "¿Qué es una orden limitada?"}',
 '[{"en": "Order executed immediately", "es": "Orden ejecutada inmediatamente"}, {"en": "Order at a specific price or better", "es": "Orden a un precio específico o mejor"}, {"en": "Order to sell everything", "es": "Orden para vender todo"}, {"en": "Order with time limit only", "es": "Orden solo con límite de tiempo"}]',
 1,
 '{"en": "A limit order sets a specific price at which you want to buy or sell, executing only when that price is reached.", "es": "Una orden limitada establece un precio específico al cual quieres comprar o vender, ejecutándose solo cuando se alcanza ese precio."}',
 NULL),

('Technical Analysis', 'medium',
 '{"en": "What is a stop-loss order?", "es": "¿Qué es una orden stop-loss?"}',
 '[{"en": "Order to buy at any price", "es": "Orden para comprar a cualquier precio"}, {"en": "Order to limit losses", "es": "Orden para limitar pérdidas"}, {"en": "Order to increase position", "es": "Orden para aumentar posición"}, {"en": "Order to hold forever", "es": "Orden para mantener para siempre"}]',
 1,
 '{"en": "A stop-loss order automatically sells when price drops to a set level, limiting potential losses.", "es": "Una orden stop-loss vende automáticamente cuando el precio cae a un nivel establecido, limitando pérdidas potenciales."}',
 NULL),

('Technical Analysis', 'medium',
 '{"en": "What is resistance in technical analysis?", "es": "¿Qué es la resistencia en análisis técnico?"}',
 '[{"en": "A wallet security feature", "es": "Una característica de seguridad de billetera"}, {"en": "Price level where selling increases", "es": "Nivel de precio donde aumentan las ventas"}, {"en": "A blockchain consensus mechanism", "es": "Un mecanismo de consenso blockchain"}, {"en": "A trading fee type", "es": "Un tipo de tarifa de trading"}]',
 1,
 '{"en": "Resistance is a price level where selling pressure tends to prevent further price increases.", "es": "La resistencia es un nivel de precio donde la presión de venta tiende a prevenir mayores aumentos de precio."}',
 NULL),

('Technical Analysis', 'medium',
 '{"en": "What is support in technical analysis?", "es": "¿Qué es el soporte en análisis técnico?"}',
 '[{"en": "Customer service for traders", "es": "Servicio al cliente para traders"}, {"en": "Price level where buying increases", "es": "Nivel de precio donde aumentan las compras"}, {"en": "A type of stablecoin", "es": "Un tipo de stablecoin"}, {"en": "A wallet backup method", "es": "Un método de respaldo de billetera"}]',
 1,
 '{"en": "Support is a price level where buying pressure tends to prevent further price decreases.", "es": "El soporte es un nivel de precio donde la presión de compra tiende a prevenir mayores caídas de precio."}',
 NULL),

('Technical Analysis', 'medium',
 '{"en": "What is a moving average?", "es": "¿Qué es una media móvil?"}',
 '[{"en": "A type of cryptocurrency", "es": "Un tipo de criptomoneda"}, {"en": "Average price over a set period", "es": "Precio promedio durante un período establecido"}, {"en": "A wallet feature", "es": "Una característica de billetera"}, {"en": "A mining algorithm", "es": "Un algoritmo de minería"}]',
 1,
 '{"en": "A moving average smooths price data by calculating the average price over a specific number of periods.", "es": "Una media móvil suaviza los datos de precio calculando el precio promedio durante un número específico de períodos."}',
 NULL),

-- =============================================
-- TECHNICAL INDICATORS (10 questions - medium/hard)
-- =============================================

('Technical Analysis', 'medium',
 '{"en": "What is RSI in trading?", "es": "¿Qué es el RSI en trading?"}',
 '[{"en": "A type of order", "es": "Un tipo de orden"}, {"en": "Relative Strength Index - momentum indicator", "es": "Índice de Fuerza Relativa - indicador de momentum"}, {"en": "A blockchain protocol", "es": "Un protocolo blockchain"}, {"en": "A wallet security feature", "es": "Una característica de seguridad de billetera"}]',
 1,
 '{"en": "RSI (Relative Strength Index) measures the speed and change of price movements, helping identify overbought or oversold conditions.", "es": "RSI (Índice de Fuerza Relativa) mide la velocidad y cambio de movimientos de precio, ayudando a identificar condiciones de sobrecompra o sobreventa."}',
 NULL),

('Technical Analysis', 'medium',
 '{"en": "What RSI value suggests overbought?", "es": "¿Qué valor de RSI sugiere sobrecompra?"}',
 '[{"en": "Below 30", "es": "Por debajo de 30"}, {"en": "Around 50", "es": "Alrededor de 50"}, {"en": "Above 70", "es": "Por encima de 70"}, {"en": "Exactly 100", "es": "Exactamente 100"}]',
 2,
 '{"en": "RSI above 70 typically indicates overbought conditions, suggesting the price may be due for a correction.", "es": "RSI por encima de 70 típicamente indica condiciones de sobrecompra, sugiriendo que el precio puede estar listo para una corrección."}',
 NULL),

('Technical Analysis', 'medium',
 '{"en": "What is MACD indicator?", "es": "¿Qué es el indicador MACD?"}',
 '[{"en": "A cryptocurrency token", "es": "Un token de criptomoneda"}, {"en": "Moving Average Convergence Divergence", "es": "Convergencia Divergencia de Medias Móviles"}, {"en": "A trading platform", "es": "Una plataforma de trading"}, {"en": "A wallet type", "es": "Un tipo de billetera"}]',
 1,
 '{"en": "MACD shows the relationship between two moving averages, helping identify trend direction and momentum.", "es": "MACD muestra la relación entre dos medias móviles, ayudando a identificar la dirección de tendencia y momentum."}',
 NULL),

('Technical Analysis', 'hard',
 '{"en": "What is a golden cross pattern?", "es": "¿Qué es el patrón de cruce dorado?"}',
 '[{"en": "A rare NFT design", "es": "Un diseño raro de NFT"}, {"en": "Short MA crosses above long MA", "es": "La MA corta cruza por encima de la MA larga"}, {"en": "A mining reward event", "es": "Un evento de recompensa de minería"}, {"en": "A wallet verification step", "es": "Un paso de verificación de billetera"}]',
 1,
 '{"en": "A golden cross occurs when a short-term moving average crosses above a long-term moving average, signaling potential bullish momentum.", "es": "Un cruce dorado ocurre cuando una media móvil de corto plazo cruza por encima de una de largo plazo, señalando potencial momentum alcista."}',
 NULL),

('Technical Analysis', 'hard',
 '{"en": "What is a death cross pattern?", "es": "¿Qué es el patrón de cruce de la muerte?"}',
 '[{"en": "A dangerous smart contract", "es": "Un contrato inteligente peligroso"}, {"en": "Short MA crosses below long MA", "es": "La MA corta cruza por debajo de la MA larga"}, {"en": "A token burning event", "es": "Un evento de quema de tokens"}, {"en": "A security vulnerability", "es": "Una vulnerabilidad de seguridad"}]',
 1,
 '{"en": "A death cross occurs when a short-term moving average crosses below a long-term moving average, signaling potential bearish momentum.", "es": "Un cruce de la muerte ocurre cuando una media móvil de corto plazo cruza por debajo de una de largo plazo, señalando potencial momentum bajista."}',
 NULL),

('Technical Analysis', 'hard',
 '{"en": "What are Bollinger Bands?", "es": "¿Qué son las Bandas de Bollinger?"}',
 '[{"en": "A type of token", "es": "Un tipo de token"}, {"en": "Volatility indicator with upper/lower bands", "es": "Indicador de volatilidad con bandas superior/inferior"}, {"en": "A trading platform feature", "es": "Una característica de plataforma de trading"}, {"en": "A wallet security measure", "es": "Una medida de seguridad de billetera"}]',
 1,
 '{"en": "Bollinger Bands consist of a moving average with upper and lower bands that expand/contract based on volatility.", "es": "Las Bandas de Bollinger consisten en una media móvil con bandas superior e inferior que se expanden/contraen según la volatilidad."}',
 NULL),

('Technical Analysis', 'hard',
 '{"en": "What is a head and shoulders pattern?", "es": "¿Qué es un patrón de cabeza y hombros?"}',
 '[{"en": "A random price movement", "es": "Un movimiento de precio aleatorio"}, {"en": "Reversal pattern with three peaks", "es": "Patrón de reversión con tres picos"}, {"en": "A bullish continuation", "es": "Una continuación alcista"}, {"en": "A mining algorithm", "es": "Un algoritmo de minería"}]',
 1,
 '{"en": "Head and shoulders is a reversal pattern with three peaks, the middle being highest, often signaling trend reversal.", "es": "Cabeza y hombros es un patrón de reversión con tres picos, siendo el del medio el más alto, frecuentemente señalando reversión de tendencia."}',
 NULL),

('Technical Analysis', 'hard',
 '{"en": "What is Fibonacci retracement?", "es": "¿Qué es el retroceso de Fibonacci?"}',
 '[{"en": "A cryptocurrency name", "es": "Un nombre de criptomoneda"}, {"en": "Tool identifying support/resistance levels", "es": "Herramienta que identifica niveles de soporte/resistencia"}, {"en": "A wallet feature", "es": "Una característica de billetera"}, {"en": "A trading fee calculator", "es": "Una calculadora de tarifas de trading"}]',
 1,
 '{"en": "Fibonacci retracement uses horizontal lines at key Fibonacci ratios (23.6%, 38.2%, 61.8%) to identify potential reversal levels.", "es": "El retroceso de Fibonacci usa líneas horizontales en ratios Fibonacci clave (23.6%, 38.2%, 61.8%) para identificar posibles niveles de reversión."}',
 NULL),

-- =============================================
-- PORTFOLIO MANAGEMENT (10 questions)
-- =============================================

('Portfolio Management', 'easy',
 '{"en": "What is portfolio diversification?", "es": "¿Qué es la diversificación de portafolio?"}',
 '[{"en": "Buying only one asset", "es": "Comprar solo un activo"}, {"en": "Spreading investments across many assets", "es": "Distribuir inversiones en muchos activos"}, {"en": "Selling all holdings", "es": "Vender todas las posesiones"}, {"en": "Using only one exchange", "es": "Usar solo un exchange"}]',
 1,
 '{"en": "Diversification reduces risk by spreading investments across different assets, sectors, or strategies.", "es": "La diversificación reduce el riesgo distribuyendo inversiones en diferentes activos, sectores o estrategias."}',
 NULL),

('Portfolio Management', 'easy',
 '{"en": "What is DCA (Dollar Cost Averaging)?", "es": "¿Qué es DCA (Promedio de Costo en Dólares)?"}',
 '[{"en": "Buying everything at once", "es": "Comprar todo de una vez"}, {"en": "Investing fixed amounts regularly", "es": "Invertir cantidades fijas regularmente"}, {"en": "Selling at fixed prices", "es": "Vender a precios fijos"}, {"en": "A type of stablecoin", "es": "Un tipo de stablecoin"}]',
 1,
 '{"en": "DCA involves investing a fixed amount at regular intervals, reducing the impact of volatility.", "es": "DCA implica invertir una cantidad fija a intervalos regulares, reduciendo el impacto de la volatilidad."}',
 NULL),

('Portfolio Management', 'medium',
 '{"en": "What percentage should you risk per trade?", "es": "¿Qué porcentaje deberías arriesgar por operación?"}',
 '[{"en": "50% or more", "es": "50% o más"}, {"en": "1-2% of total portfolio", "es": "1-2% del portafolio total"}, {"en": "100% for big gains", "es": "100% para grandes ganancias"}, {"en": "25% is standard", "es": "25% es estándar"}]',
 1,
 '{"en": "Professional traders typically risk 1-2% per trade to preserve capital and survive losing streaks.", "es": "Los traders profesionales típicamente arriesgan 1-2% por operación para preservar capital y sobrevivir rachas perdedoras."}',
 NULL),

('Portfolio Management', 'medium',
 '{"en": "What is rebalancing a portfolio?", "es": "¿Qué es rebalancear un portafolio?"}',
 '[{"en": "Selling all assets", "es": "Vender todos los activos"}, {"en": "Adjusting to maintain target allocation", "es": "Ajustar para mantener asignación objetivo"}, {"en": "Buying only new coins", "es": "Comprar solo monedas nuevas"}, {"en": "Moving to a new exchange", "es": "Mover a un nuevo exchange"}]',
 1,
 '{"en": "Rebalancing means periodically adjusting your portfolio to maintain your desired asset allocation percentages.", "es": "Rebalancear significa ajustar periódicamente tu portafolio para mantener tus porcentajes de asignación de activos deseados."}',
 NULL),

('Portfolio Management', 'medium',
 '{"en": "What is the risk-reward ratio?", "es": "¿Qué es el ratio riesgo-recompensa?"}',
 '[{"en": "Amount invested divided by profit", "es": "Cantidad invertida dividida por ganancia"}, {"en": "Potential loss compared to potential gain", "es": "Pérdida potencial comparada con ganancia potencial"}, {"en": "Trading fees percentage", "es": "Porcentaje de tarifas de trading"}, {"en": "Number of trades per day", "es": "Número de operaciones por día"}]',
 1,
 '{"en": "Risk-reward ratio compares potential loss to potential profit, helping evaluate if a trade is worth taking.", "es": "El ratio riesgo-recompensa compara pérdida potencial con ganancia potencial, ayudando a evaluar si vale la pena una operación."}',
 NULL),

('Portfolio Management', 'medium',
 '{"en": "What does DYOR mean?", "es": "¿Qué significa DYOR?"}',
 '[{"en": "Do Your Own Research", "es": "Haz Tu Propia Investigación"}, {"en": "Daily Yearly Operating Returns", "es": "Retornos Operativos Diarios Anuales"}, {"en": "A trading strategy name", "es": "Un nombre de estrategia de trading"}, {"en": "Digital Yearly Outlook Report", "es": "Reporte de Perspectiva Anual Digital"}]',
 0,
 '{"en": "DYOR (Do Your Own Research) reminds investors to investigate projects thoroughly before investing.", "es": "DYOR (Haz Tu Propia Investigación) recuerda a los inversores investigar proyectos a fondo antes de invertir."}',
 NULL),

('Portfolio Management', 'hard',
 '{"en": "What is position sizing?", "es": "¿Qué es el dimensionamiento de posición?"}',
 '[{"en": "The physical size of exchange", "es": "El tamaño físico del exchange"}, {"en": "Determining how much to invest in a trade", "es": "Determinar cuánto invertir en una operación"}, {"en": "A wallet storage size", "es": "Un tamaño de almacenamiento de billetera"}, {"en": "The number of traders", "es": "El número de traders"}]',
 1,
 '{"en": "Position sizing calculates the optimal amount to invest in each trade based on risk tolerance and account size.", "es": "El dimensionamiento de posición calcula la cantidad óptima a invertir en cada operación basada en tolerancia al riesgo y tamaño de cuenta."}',
 NULL),

('Portfolio Management', 'hard',
 '{"en": "What is correlation in portfolio management?", "es": "¿Qué es la correlación en gestión de portafolio?"}',
 '[{"en": "Price being exactly the same", "es": "Precio siendo exactamente el mismo"}, {"en": "How assets move in relation to each other", "es": "Cómo se mueven los activos en relación entre sí"}, {"en": "The total portfolio value", "es": "El valor total del portafolio"}, {"en": "Trading volume comparison", "es": "Comparación de volumen de trading"}]',
 1,
 '{"en": "Correlation measures how different assets move together; low correlation improves diversification benefits.", "es": "La correlación mide cómo se mueven juntos diferentes activos; baja correlación mejora los beneficios de diversificación."}',
 NULL),

('Portfolio Management', 'hard',
 '{"en": "What is alpha in investing?", "es": "¿Qué es alpha en inversión?"}',
 '[{"en": "The first cryptocurrency", "es": "La primera criptomoneda"}, {"en": "Returns above the market benchmark", "es": "Retornos por encima del benchmark del mercado"}, {"en": "A type of wallet", "es": "Un tipo de billetera"}, {"en": "The total market cap", "es": "La capitalización total del mercado"}]',
 1,
 '{"en": "Alpha represents the extra return generated above the market benchmark, indicating skill or strategy effectiveness.", "es": "Alpha representa el retorno extra generado por encima del benchmark del mercado, indicando habilidad o efectividad de estrategia."}',
 NULL),

('Portfolio Management', 'hard',
 '{"en": "What is the Sharpe ratio?", "es": "¿Qué es el ratio de Sharpe?"}',
 '[{"en": "A cryptocurrency price", "es": "Un precio de criptomoneda"}, {"en": "Risk-adjusted return measure", "es": "Medida de retorno ajustada por riesgo"}, {"en": "A trading platform rating", "es": "Una calificación de plataforma de trading"}, {"en": "A wallet security score", "es": "Una puntuación de seguridad de billetera"}]',
 1,
 '{"en": "The Sharpe ratio measures risk-adjusted returns: higher values indicate better returns per unit of risk taken.", "es": "El ratio de Sharpe mide retornos ajustados por riesgo: valores más altos indican mejores retornos por unidad de riesgo tomado."}',
 NULL)

ON CONFLICT DO NOTHING;
