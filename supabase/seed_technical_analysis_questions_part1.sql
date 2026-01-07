-- =============================================
-- TECHNICAL ANALYSIS COURSE - QUIZ QUESTIONS PART 1
-- Sections 1-3 (45 questions, 15 per section)
-- =============================================

-- SECTION 1: Chart Reading Basics (15 questions)
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "What does Technical Analysis primarily study?", "es": "¿Qué estudia principalmente el Análisis Técnico?"}',
  '{"en": ["Company earnings and financials", "Historical price and volume data", "Team backgrounds and partnerships", "Social media sentiment"], "es": ["Ganancias y finanzas de la empresa", "Datos históricos de precio y volumen", "Antecedentes del equipo y asociaciones", "Sentimiento en redes sociales"]}',
  1,
  '{"en": "TA studies historical price and volume data to predict future movements, unlike fundamental analysis.", "es": "El AT estudia datos históricos de precio y volumen para predecir movimientos futuros, a diferencia del análisis fundamental."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'chart-basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Which chart type shows OHLC (Open, High, Low, Close)?", "es": "¿Qué tipo de gráfico muestra OHLC (Apertura, Alto, Bajo, Cierre)?"}',
  '{"en": ["Line chart", "Candlestick chart", "Area chart", "Point and figure"], "es": ["Gráfico de línea", "Gráfico de velas", "Gráfico de área", "Point and figure"]}',
  1,
  '{"en": "Candlestick charts show all four price points: Open, High, Low, and Close in each candle.", "es": "Los gráficos de velas muestran los cuatro puntos de precio: Apertura, Alto, Bajo y Cierre en cada vela."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'chart-basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "A green (bullish) candle indicates that:", "es": "Una vela verde (alcista) indica que:"}',
  '{"en": ["Close price is lower than open", "Close price is higher than open", "Volume was high", "The asset is overbought"], "es": ["El precio de cierre es menor que apertura", "El precio de cierre es mayor que apertura", "El volumen fue alto", "El activo está sobrecomprado"]}',
  1,
  '{"en": "A green candle means the closing price was higher than the opening price - buyers pushed the price up.", "es": "Una vela verde significa que el precio de cierre fue mayor que el de apertura - los compradores subieron el precio."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'chart-basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Which timeframe is typically used for scalping?", "es": "¿Qué temporalidad se usa típicamente para scalping?"}',
  '{"en": ["Weekly", "Daily", "1m - 5m", "Monthly"], "es": ["Semanal", "Diario", "1m - 5m", "Mensual"]}',
  2,
  '{"en": "Scalping uses very short timeframes (1-5 minutes) for quick trades.", "es": "El scalping usa temporalidades muy cortas (1-5 minutos) para operaciones rápidas."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'chart-basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "What do the wicks (shadows) on a candlestick represent?", "es": "¿Qué representan las mechas (sombras) en una vela?"}',
  '{"en": ["Volume traded", "High and low beyond the body", "Moving average", "Trend direction"], "es": ["Volumen operado", "Alto y bajo fuera del cuerpo", "Media móvil", "Dirección de tendencia"]}',
  1,
  '{"en": "Wicks show the high and low prices reached during that candle period, beyond the open/close body.", "es": "Las mechas muestran los precios alto y bajo alcanzados durante el periodo de la vela, fuera del cuerpo apertura/cierre."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'chart-basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Which chart type uses smoothed candlesticks with less noise?", "es": "¿Qué tipo de gráfico usa velas suavizadas con menos ruido?"}',
  '{"en": ["Bar chart", "Line chart", "Heikin-Ashi", "Renko"], "es": ["Gráfico de barras", "Gráfico de línea", "Heikin-Ashi", "Renko"]}',
  2,
  '{"en": "Heikin-Ashi uses averaged values to create smoother candlesticks, reducing noise.", "es": "Heikin-Ashi usa valores promediados para crear velas más suaves, reduciendo el ruido."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'chart-basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Swing trading typically uses which timeframes?", "es": "El swing trading típicamente usa qué temporalidades?"}',
  '{"en": ["1m - 5m", "15m - 1h", "4h - Daily", "1 second"], "es": ["1m - 5m", "15m - 1h", "4h - Diario", "1 segundo"]}',
  2,
  '{"en": "Swing trading uses 4h to Daily charts, holding positions for days to weeks.", "es": "El swing trading usa gráficos de 4h a Diario, manteniendo posiciones por días a semanas."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'chart-basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "What is a key principle of Technical Analysis?", "es": "¿Cuál es un principio clave del Análisis Técnico?"}',
  '{"en": ["Price moves randomly", "History never repeats", "Price discounts everything", "Volume is irrelevant"], "es": ["El precio se mueve aleatoriamente", "La historia nunca se repite", "El precio lo descuenta todo", "El volumen es irrelevante"]}',
  2,
  '{"en": "TA assumes all known information is already reflected in the price.", "es": "El AT asume que toda la información conocida ya está reflejada en el precio."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'chart-basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Line charts are best for:", "es": "Los gráficos de línea son mejores para:"}',
  '{"en": ["Detailed pattern analysis", "Overall trend spotting", "Volume analysis", "Candlestick patterns"], "es": ["Análisis detallado de patrones", "Identificar tendencias generales", "Análisis de volumen", "Patrones de velas"]}',
  1,
  '{"en": "Line charts are simple and good for quickly spotting overall trends, especially for beginners.", "es": "Los gráficos de línea son simples y buenos para identificar rápidamente tendencias, especialmente para principiantes."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'chart-basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "A large candle body indicates:", "es": "Un cuerpo de vela grande indica:"}',
  '{"en": ["Indecision in the market", "Strong price movement", "Low volatility", "No trading activity"], "es": ["Indecisión en el mercado", "Movimiento de precio fuerte", "Baja volatilidad", "Sin actividad de trading"]}',
  1,
  '{"en": "A large body (distance between open and close) shows a strong move with conviction.", "es": "Un cuerpo grande (distancia entre apertura y cierre) muestra un movimiento fuerte con convicción."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'chart-basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Day trading typically closes all positions:", "es": "El day trading típicamente cierra todas las posiciones:"}',
  '{"en": ["Within a week", "Within an hour", "Same day", "Within a month"], "es": ["Dentro de una semana", "Dentro de una hora", "El mismo día", "Dentro de un mes"]}',
  2,
  '{"en": "Day traders close all positions by end of the trading day, not holding overnight.", "es": "Los day traders cierran todas las posiciones al final del día, sin mantener durante la noche."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'chart-basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "What confirms price movements according to TA principles?", "es": "¿Qué confirma los movimientos de precio según los principios de AT?"}',
  '{"en": ["Social media activity", "Volume", "News headlines", "Celebrity endorsements"], "es": ["Actividad en redes sociales", "Volumen", "Titulares de noticias", "Endorsements de celebridades"]}',
  1,
  '{"en": "Volume confirms price moves - high volume = stronger, more significant signal.", "es": "El volumen confirma movimientos de precio - alto volumen = señal más fuerte y significativa."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'chart-basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Which is NOT a basic principle of TA?", "es": "¿Cuál NO es un principio básico del AT?"}',
  '{"en": ["Prices move in trends", "History repeats", "All price action is random", "Price discounts everything"], "es": ["Los precios se mueven en tendencias", "La historia se repite", "Toda acción de precio es aleatoria", "El precio lo descuenta todo"]}',
  2,
  '{"en": "TA is based on the premise that price movements are NOT random but follow patterns.", "es": "El AT se basa en que los movimientos de precio NO son aleatorios sino que siguen patrones."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'chart-basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Position trading uses which timeframe?", "es": "El position trading usa qué temporalidad?"}',
  '{"en": ["1m - 5m", "15m - 1h", "4h - Daily", "Weekly - Monthly"], "es": ["1m - 5m", "15m - 1h", "4h - Diario", "Semanal - Mensual"]}',
  3,
  '{"en": "Position trading uses Weekly to Monthly charts for long-term holds.", "es": "El position trading usa gráficos Semanales a Mensuales para posiciones a largo plazo."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'chart-basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "A red (bearish) candle shows that:", "es": "Una vela roja (bajista) muestra que:"}',
  '{"en": ["Buyers are in control", "The market is closed", "Sellers are in control", "Volume is zero"], "es": ["Los compradores están en control", "El mercado está cerrado", "Los vendedores están en control", "El volumen es cero"]}',
  2,
  '{"en": "A red candle means sellers pushed price down - close is lower than open.", "es": "Una vela roja significa que los vendedores bajaron el precio - el cierre es menor que la apertura."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'chart-basics';

-- SECTION 2: Support, Resistance & Trends (15 questions)
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Support is a price level where:", "es": "El soporte es un nivel de precio donde:"}',
  '{"en": ["Selling pressure prevents decline", "Buying interest prevents further decline", "The price always reverses", "Volume is always zero"], "es": ["La presión de venta previene caídas", "El interés de compra previene más caídas", "El precio siempre revierte", "El volumen siempre es cero"]}',
  1,
  '{"en": "Support is where buying interest is strong enough to prevent further price decline.", "es": "El soporte es donde el interés de compra es suficientemente fuerte para prevenir más caídas."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'support-resistance';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "When a support level breaks, it often becomes:", "es": "Cuando un nivel de soporte rompe, a menudo se convierte en:"}',
  '{"en": ["Stronger support", "Resistance", "A golden cross", "Meaningless"], "es": ["Soporte más fuerte", "Resistencia", "Un cruce dorado", "Insignificante"]}',
  1,
  '{"en": "This is role reversal - broken support often becomes resistance and vice versa.", "es": "Esto es inversión de rol - el soporte roto a menudo se vuelve resistencia y viceversa."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'support-resistance';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "An uptrend is characterized by:", "es": "Una tendencia alcista se caracteriza por:"}',
  '{"en": ["Lower highs and lower lows", "Higher highs and higher lows", "Constant price", "Random movements"], "es": ["Altos más bajos y bajos más bajos", "Altos más altos y bajos más altos", "Precio constante", "Movimientos aleatorios"]}',
  1,
  '{"en": "Uptrends make progressively higher peaks and higher troughs.", "es": "Las tendencias alcistas hacen picos cada vez más altos y valles más altos."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'support-resistance';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "What confirms a valid breakout?", "es": "¿Qué confirma una ruptura válida?"}',
  '{"en": ["Low volume", "High volume", "No volume", "Time of day"], "es": ["Bajo volumen", "Alto volumen", "Sin volumen", "Hora del día"]}',
  1,
  '{"en": "High volume breakouts are more likely to be valid and sustainable.", "es": "Las rupturas con alto volumen tienen más probabilidad de ser válidas y sostenibles."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'support-resistance';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Round numbers like $1000 or $50k often act as:", "es": "Los números redondos como $1000 o $50k a menudo actúan como:"}',
  '{"en": ["Random noise", "Psychological support/resistance", "Buy signals only", "Sell signals only"], "es": ["Ruido aleatorio", "Soporte/resistencia psicológico", "Solo señales de compra", "Solo señales de venta"]}',
  1,
  '{"en": "Round numbers are psychological levels due to human tendency to focus on them.", "es": "Los números redondos son niveles psicológicos debido a la tendencia humana de enfocarse en ellos."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'support-resistance';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "In a downtrend, you should draw a trend line connecting:", "es": "En una tendencia bajista, deberías dibujar una línea de tendencia conectando:"}',
  '{"en": ["Rising lows", "Falling highs", "Random points", "Volume bars"], "es": ["Bajos ascendentes", "Altos descendentes", "Puntos aleatorios", "Barras de volumen"]}',
  1,
  '{"en": "In downtrends, connect the falling highs to create a descending trend line.", "es": "En tendencias bajistas, conecta los altos descendentes para crear una línea de tendencia bajista."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'support-resistance';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Resistance acts as a:", "es": "La resistencia actúa como un:"}',
  '{"en": ["Floor for prices", "Ceiling for prices", "Moving average", "Volume indicator"], "es": ["Piso para precios", "Techo para precios", "Media móvil", "Indicador de volumen"]}',
  1,
  '{"en": "Resistance is a ceiling where selling pressure prevents price from rising further.", "es": "La resistencia es un techo donde la presión de venta previene que el precio suba más."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'support-resistance';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "The more times a support/resistance level is tested:", "es": "Mientras más veces se prueba un nivel de soporte/resistencia:"}',
  '{"en": ["The weaker it becomes", "The stronger it becomes", "It becomes meaningless", "Volume decreases"], "es": ["Más débil se vuelve", "Más fuerte se vuelve", "Se vuelve insignificante", "El volumen disminuye"]}',
  1,
  '{"en": "Multiple tests of a level reinforce its significance as traders recognize it.", "es": "Múltiples pruebas de un nivel refuerzan su significancia conforme los traders lo reconocen."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'support-resistance';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "In range-bound (sideways) markets, you should:", "es": "En mercados laterales (en rango), deberías:"}',
  '{"en": ["Buy at resistance", "Sell at support", "Buy near support, sell near resistance", "Ignore all levels"], "es": ["Comprar en resistencia", "Vender en soporte", "Comprar cerca de soporte, vender cerca de resistencia", "Ignorar todos los niveles"]}',
  2,
  '{"en": "Range trading strategy: buy low (support), sell high (resistance).", "es": "Estrategia de rango: comprar bajo (soporte), vender alto (resistencia)."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'support-resistance';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Where should you NOT place your stop loss?", "es": "¿Dónde NO deberías colocar tu stop loss?"}',
  '{"en": ["Slightly beyond S/R level", "Exactly at S/R level", "Based on ATR", "Behind swing high/low"], "es": ["Ligeramente más allá del nivel S/R", "Exactamente en el nivel S/R", "Basado en ATR", "Detrás del swing high/low"]}',
  1,
  '{"en": "Do not place stops exactly at S/R - they get hunted. Place slightly beyond.", "es": "No coloques stops exactamente en S/R - los cazan. Coloca ligeramente más allá."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'support-resistance';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "S/R on which timeframe is generally more significant?", "es": "¿S/R en qué temporalidad es generalmente más significativo?"}',
  '{"en": ["1 minute", "5 minute", "Higher timeframes (Daily, Weekly)", "They are all equal"], "es": ["1 minuto", "5 minutos", "Temporalidades mayores (Diario, Semanal)", "Todos son iguales"]}',
  2,
  '{"en": "S/R on higher timeframes is tested by more traders and is more significant.", "es": "S/R en temporalidades mayores es probado por más traders y es más significativo."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'support-resistance';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "A false breakout occurs when:", "es": "Una ruptura falsa ocurre cuando:"}',
  '{"en": ["Price breaks a level with high volume", "Price breaks and quickly reverses back", "Price consolidates at a level", "Volume confirms the move"], "es": ["El precio rompe un nivel con alto volumen", "El precio rompe y rápidamente revierte", "El precio consolida en un nivel", "El volumen confirma el movimiento"]}',
  1,
  '{"en": "False breakouts occur when price briefly breaks a level then reverses - often on low volume.", "es": "Las rupturas falsas ocurren cuando el precio rompe brevemente un nivel y luego revierte - a menudo con bajo volumen."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'support-resistance';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "To confirm a breakout, you should:", "es": "Para confirmar una ruptura, deberías:"}',
  '{"en": ["Enter immediately", "Wait for candle close above/below level", "Ignore volume", "Trade against the trend"], "es": ["Entrar inmediatamente", "Esperar cierre de vela sobre/bajo el nivel", "Ignorar el volumen", "Operar contra la tendencia"]}',
  1,
  '{"en": "Wait for the candle to close beyond the level to confirm the breakout is not false.", "es": "Espera a que la vela cierre más allá del nivel para confirmar que la ruptura no es falsa."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'support-resistance';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "A common mistake with S/R is:", "es": "Un error común con S/R es:"}',
  '{"en": ["Using multiple timeframes", "Drawing too many lines", "Waiting for confirmation", "Using volume"], "es": ["Usar múltiples temporalidades", "Dibujar demasiadas líneas", "Esperar confirmación", "Usar volumen"]}',
  1,
  '{"en": "Drawing too many lines creates confusion. Focus on the most obvious, significant levels.", "es": "Dibujar demasiadas líneas crea confusión. Enfócate en los niveles más obvios y significativos."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'support-resistance';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "In an uptrend, you should draw trend line connecting:", "es": "En una tendencia alcista, deberías dibujar línea de tendencia conectando:"}',
  '{"en": ["Falling highs", "Rising lows", "Random candles", "Only green candles"], "es": ["Altos descendentes", "Bajos ascendentes", "Velas aleatorias", "Solo velas verdes"]}',
  1,
  '{"en": "In uptrends, connect the rising lows to draw an ascending trend line.", "es": "En tendencias alcistas, conecta los bajos ascendentes para dibujar una línea de tendencia ascendente."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'support-resistance';

-- SECTION 3: Technical Indicators (15 questions)
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "A Golden Cross occurs when:", "es": "Un Cruce Dorado ocurre cuando:"}',
  '{"en": ["50 MA crosses below 200 MA", "50 MA crosses above 200 MA", "RSI crosses 70", "MACD crosses zero"], "es": ["MA 50 cruza bajo MA 200", "MA 50 cruza sobre MA 200", "RSI cruza 70", "MACD cruza cero"]}',
  1,
  '{"en": "Golden Cross: 50 MA crossing above 200 MA - bullish long-term signal.", "es": "Cruce Dorado: MA 50 cruzando sobre MA 200 - señal alcista de largo plazo."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'indicators';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "RSI above 70 typically indicates:", "es": "RSI sobre 70 típicamente indica:"}',
  '{"en": ["Oversold conditions", "Overbought conditions", "Bullish momentum", "Trend reversal confirmed"], "es": ["Condiciones de sobreventa", "Condiciones de sobrecompra", "Momentum alcista", "Reversión de tendencia confirmada"]}',
  1,
  '{"en": "RSI > 70 indicates overbought - price may be due for a pullback.", "es": "RSI > 70 indica sobrecompra - el precio puede estar listo para un retroceso."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'indicators';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Which moving average reacts faster to price changes?", "es": "¿Qué media móvil reacciona más rápido a cambios de precio?"}',
  '{"en": ["SMA (Simple)", "EMA (Exponential)", "They react equally", "Neither reacts"], "es": ["SMA (Simple)", "EMA (Exponencial)", "Reaccionan igual", "Ninguna reacciona"]}',
  1,
  '{"en": "EMA gives more weight to recent prices, making it more responsive than SMA.", "es": "EMA da más peso a precios recientes, haciéndola más responsiva que SMA."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'indicators';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "The MACD histogram shows:", "es": "El histograma MACD muestra:"}',
  '{"en": ["Volume traded", "Difference between MACD and Signal line", "Price momentum only", "Moving average value"], "es": ["Volumen operado", "Diferencia entre MACD y línea Señal", "Solo momentum del precio", "Valor de media móvil"]}',
  1,
  '{"en": "The histogram visualizes the difference between MACD and its signal line.", "es": "El histograma visualiza la diferencia entre MACD y su línea de señal."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'indicators';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "RSI below 30 typically indicates:", "es": "RSI bajo 30 típicamente indica:"}',
  '{"en": ["Overbought conditions", "Oversold conditions", "Bearish momentum", "Strong trend"], "es": ["Condiciones de sobrecompra", "Condiciones de sobreventa", "Momentum bajista", "Tendencia fuerte"]}',
  1,
  '{"en": "RSI < 30 indicates oversold - potential bounce or buying opportunity.", "es": "RSI < 30 indica sobreventa - potencial rebote u oportunidad de compra."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'indicators';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "A Death Cross occurs when:", "es": "Un Cruce de la Muerte ocurre cuando:"}',
  '{"en": ["50 MA crosses above 200 MA", "50 MA crosses below 200 MA", "RSI crosses 30", "Price hits zero"], "es": ["MA 50 cruza sobre MA 200", "MA 50 cruza bajo MA 200", "RSI cruza 30", "El precio llega a cero"]}',
  1,
  '{"en": "Death Cross: 50 MA crossing below 200 MA - bearish long-term signal.", "es": "Cruce de la Muerte: MA 50 cruzando bajo MA 200 - señal bajista de largo plazo."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'indicators';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "When MACD crosses above the signal line, it indicates:", "es": "Cuando MACD cruza sobre la línea señal, indica:"}',
  '{"en": ["Bearish momentum", "Bullish momentum", "No change", "Market is closed"], "es": ["Momentum bajista", "Momentum alcista", "Sin cambio", "El mercado está cerrado"]}',
  1,
  '{"en": "MACD crossing above signal line is a bullish signal.", "es": "MACD cruzando sobre la línea señal es una señal alcista."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'indicators';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Indicators generally:", "es": "Los indicadores generalmente:"}',
  '{"en": ["Predict the future perfectly", "Lag behind price", "Lead price movements", "Are always accurate"], "es": ["Predicen el futuro perfectamente", "Tienen retraso respecto al precio", "Adelantan movimientos de precio", "Siempre son precisos"]}',
  1,
  '{"en": "Indicators LAG - they are calculated from past price data, not predictive.", "es": "Los indicadores tienen RETRASO - se calculan de datos de precio pasados, no son predictivos."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'indicators';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "What is a bearish RSI divergence?", "es": "¿Qué es una divergencia bajista de RSI?"}',
  '{"en": ["Price makes lower low, RSI makes higher low", "Price makes higher high, RSI makes lower high", "RSI above 70", "RSI below 30"], "es": ["Precio hace bajo más bajo, RSI hace bajo más alto", "Precio hace alto más alto, RSI hace alto más bajo", "RSI sobre 70", "RSI bajo 30"]}',
  1,
  '{"en": "Bearish divergence: price higher high but RSI lower high - momentum weakening.", "es": "Divergencia bajista: precio hace alto más alto pero RSI hace alto más bajo - momentum debilitándose."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'indicators';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "The standard RSI period is:", "es": "El periodo estándar del RSI es:"}',
  '{"en": ["7 candles", "14 candles", "21 candles", "50 candles"], "es": ["7 velas", "14 velas", "21 velas", "50 velas"]}',
  1,
  '{"en": "Default RSI uses 14 periods, though traders often customize this.", "es": "El RSI por defecto usa 14 periodos, aunque los traders a menudo personalizan esto."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'indicators';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "You should:", "es": "Deberías:"}',
  '{"en": ["Use only one indicator", "Combine multiple indicators for confirmation", "Ignore all indicators", "Only use MACD"], "es": ["Usar solo un indicador", "Combinar múltiples indicadores para confirmación", "Ignorar todos los indicadores", "Solo usar MACD"]}',
  1,
  '{"en": "Never rely on a single indicator - use multiple for confirmation.", "es": "Nunca confíes en un solo indicador - usa múltiples para confirmación."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'indicators';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "RSI at 50 indicates:", "es": "RSI en 50 indica:"}',
  '{"en": ["Overbought", "Oversold", "Neutral momentum", "Strong trend"], "es": ["Sobrecompra", "Sobreventa", "Momentum neutral", "Tendencia fuerte"]}',
  2,
  '{"en": "RSI 50 is the midpoint - above 50 bullish, below 50 bearish.", "es": "RSI 50 es el punto medio - sobre 50 alcista, bajo 50 bajista."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'indicators';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "The MACD line is calculated as:", "es": "La línea MACD se calcula como:"}',
  '{"en": ["26 EMA - 12 EMA", "12 EMA - 26 EMA", "50 SMA - 200 SMA", "RSI - 50"], "es": ["EMA 26 - EMA 12", "EMA 12 - EMA 26", "SMA 50 - SMA 200", "RSI - 50"]}',
  1,
  '{"en": "MACD Line = 12 period EMA minus 26 period EMA.", "es": "Línea MACD = EMA de 12 periodos menos EMA de 26 periodos."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'indicators';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Overbought conditions can persist in:", "es": "Las condiciones de sobrecompra pueden persistir en:"}',
  '{"en": ["Weak markets", "Strong trending markets", "Range-bound markets", "Bear markets only"], "es": ["Mercados débiles", "Mercados con tendencias fuertes", "Mercados en rango", "Solo mercados bajistas"]}',
  1,
  '{"en": "In strong trends, RSI can stay overbought/oversold for extended periods.", "es": "En tendencias fuertes, el RSI puede mantenerse sobrecomprado/sobrevendido por periodos extendidos."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'indicators';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Before using indicator strategies, you should:", "es": "Antes de usar estrategias con indicadores, deberías:"}',
  '{"en": ["Trade live immediately", "Backtest the strategy", "Use maximum leverage", "Ignore risk management"], "es": ["Operar en vivo inmediatamente", "Hacer backtest de la estrategia", "Usar apalancamiento máximo", "Ignorar gestión de riesgo"]}',
  1,
  '{"en": "Always backtest strategies on historical data before risking real money.", "es": "Siempre haz backtest de estrategias en datos históricos antes de arriesgar dinero real."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'indicators';
