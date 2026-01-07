-- =============================================
-- TECHNICAL ANALYSIS COURSE - QUIZ QUESTIONS PART 2
-- Sections 4-7 (60 questions, 15 per section)
-- =============================================

-- SECTION 4: Chart Patterns (15 questions)
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "A Head and Shoulders pattern indicates:", "es": "Un patrón Hombro-Cabeza-Hombro indica:"}',
  '{"en": ["Bullish continuation", "Bearish reversal", "Sideways consolidation", "Increased volume only"], "es": ["Continuación alcista", "Reversión bajista", "Consolidación lateral", "Solo aumento de volumen"]}',
  1,
  '{"en": "Head and Shoulders is a bearish reversal pattern forming after an uptrend.", "es": "Hombro-Cabeza-Hombro es un patrón de reversión bajista que se forma después de una tendencia alcista."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'patterns';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "An ascending triangle is typically:", "es": "Un triángulo ascendente es típicamente:"}',
  '{"en": ["Bearish", "Bullish", "Neutral", "A reversal pattern"], "es": ["Bajista", "Alcista", "Neutral", "Un patrón de reversión"]}',
  1,
  '{"en": "Ascending triangles are usually bullish - buyers are aggressive, pushing floor up.", "es": "Los triángulos ascendentes son usualmente alcistas - los compradores son agresivos, subiendo el piso."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'patterns';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "A Doji candlestick indicates:", "es": "Una vela Doji indica:"}',
  '{"en": ["Strong buying pressure", "Strong selling pressure", "Market indecision", "Volume spike"], "es": ["Fuerte presión de compra", "Fuerte presión de venta", "Indecisión del mercado", "Pico de volumen"]}',
  2,
  '{"en": "Doji has small or no body (open ≈ close) showing indecision between buyers and sellers.", "es": "Doji tiene cuerpo pequeño o nulo (apertura ≈ cierre) mostrando indecisión entre compradores y vendedores."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'patterns';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "A Hammer candlestick at a bottom indicates:", "es": "Una vela Martillo en un suelo indica:"}',
  '{"en": ["Bearish continuation", "Potential bullish reversal", "No signal", "Volume decrease"], "es": ["Continuación bajista", "Potencial reversión alcista", "Ninguna señal", "Disminución de volumen"]}',
  1,
  '{"en": "Hammer at bottom shows buyers rejected lower prices - potential reversal.", "es": "Martillo en suelo muestra que compradores rechazaron precios más bajos - potencial reversión."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'patterns';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Double Top pattern suggests:", "es": "El patrón Doble Techo sugiere:"}',
  '{"en": ["Bullish continuation", "Bearish reversal", "Accumulation", "Strong support"], "es": ["Continuación alcista", "Reversión bajista", "Acumulación", "Soporte fuerte"]}',
  1,
  '{"en": "Double Top: two failed attempts to break higher = bearish reversal.", "es": "Doble Techo: dos intentos fallidos de romper más alto = reversión bajista."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'patterns';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "A Shooting Star at the top of an uptrend indicates:", "es": "Una Estrella Fugaz en la cima de una tendencia alcista indica:"}',
  '{"en": ["Bullish continuation", "Potential bearish reversal", "Neutral signal", "Increased volume"], "es": ["Continuación alcista", "Potencial reversión bajista", "Señal neutral", "Aumento de volumen"]}',
  1,
  '{"en": "Shooting Star (long upper wick at top) shows buyers rejected - bearish signal.", "es": "Estrella Fugaz (mecha superior larga en techo) muestra rechazo de compradores - señal bajista."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'patterns';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Flags and Pennants are:", "es": "Banderas y Banderines son:"}',
  '{"en": ["Reversal patterns", "Continuation patterns", "Only bearish", "Volume indicators"], "es": ["Patrones de reversión", "Patrones de continuación", "Solo bajistas", "Indicadores de volumen"]}',
  1,
  '{"en": "Flags and Pennants are brief consolidations that usually continue the prior trend.", "es": "Banderas y Banderines son consolidaciones breves que usualmente continúan la tendencia previa."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'patterns';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "An Engulfing pattern is strongest when:", "es": "Un patrón Envolvente es más fuerte cuando:"}',
  '{"en": ["At trend extremes", "In the middle of a trend", "On low volume", "On 1-minute charts"], "es": ["En extremos de tendencia", "En medio de una tendencia", "Con bajo volumen", "En gráficos de 1 minuto"]}',
  0,
  '{"en": "Engulfing patterns are most significant at trend extremes (tops and bottoms).", "es": "Los patrones Envolventes son más significativos en extremos de tendencia (techos y suelos)."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'patterns';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "The neckline in Head and Shoulders connects:", "es": "La línea de cuello en Hombro-Cabeza-Hombro conecta:"}',
  '{"en": ["The three peaks", "The lows between peaks", "Volume bars", "Moving averages"], "es": ["Los tres picos", "Los bajos entre los picos", "Barras de volumen", "Medias móviles"]}',
  1,
  '{"en": "The neckline connects the lows between the head and shoulders.", "es": "La línea de cuello conecta los bajos entre la cabeza y los hombros."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'patterns';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "A Descending Triangle is typically:", "es": "Un Triángulo Descendente es típicamente:"}',
  '{"en": ["Bullish", "Bearish", "Neutral", "Always a reversal"], "es": ["Alcista", "Bajista", "Neutral", "Siempre reversión"]}',
  1,
  '{"en": "Descending triangles are usually bearish - sellers are aggressive, pushing ceiling down.", "es": "Los triángulos descendentes son usualmente bajistas - los vendedores son agresivos, bajando el techo."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'patterns';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Morning Star is a:", "es": "Estrella de la Mañana es un:"}',
  '{"en": ["Bearish reversal pattern", "Bullish reversal pattern", "Continuation pattern", "Volume indicator"], "es": ["Patrón de reversión bajista", "Patrón de reversión alcista", "Patrón de continuación", "Indicador de volumen"]}',
  1,
  '{"en": "Morning Star is a 3-candle bullish reversal pattern at bottoms.", "es": "Estrella de la Mañana es un patrón de reversión alcista de 3 velas en suelos."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'patterns';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Before trading a pattern, you should:", "es": "Antes de operar un patrón, deberías:"}',
  '{"en": ["Enter immediately when you see it", "Wait for confirmation", "Ignore volume", "Use maximum leverage"], "es": ["Entrar inmediatamente cuando lo veas", "Esperar confirmación", "Ignorar el volumen", "Usar máximo apalancamiento"]}',
  1,
  '{"en": "Always wait for confirmation - patterns can fail. Don''t trade the setup.", "es": "Siempre espera confirmación - los patrones pueden fallar. No operes el setup."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'patterns';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Inverse Head and Shoulders signals:", "es": "Hombro-Cabeza-Hombro Invertido señala:"}',
  '{"en": ["Bearish reversal", "Bullish reversal", "Continuation", "High volatility"], "es": ["Reversión bajista", "Reversión alcista", "Continuación", "Alta volatilidad"]}',
  1,
  '{"en": "Inverse H&S is a bullish reversal pattern that forms at bottoms.", "es": "HCH Invertido es un patrón de reversión alcista que se forma en suelos."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'patterns';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "A symmetrical triangle indicates:", "es": "Un triángulo simétrico indica:"}',
  '{"en": ["Definite bullish move", "Definite bearish move", "Wait for breakout direction", "No trading opportunity"], "es": ["Movimiento alcista definitivo", "Movimiento bajista definitivo", "Esperar dirección de ruptura", "Sin oportunidad de trading"]}',
  2,
  '{"en": "Symmetrical triangles can break either way - wait for breakout with volume.", "es": "Los triángulos simétricos pueden romper en cualquier dirección - espera ruptura con volumen."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'patterns';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Evening Star is a:", "es": "Estrella de la Tarde es un:"}',
  '{"en": ["Bullish reversal pattern", "Bearish reversal pattern", "Continuation pattern", "Volume pattern"], "es": ["Patrón de reversión alcista", "Patrón de reversión bajista", "Patrón de continuación", "Patrón de volumen"]}',
  1,
  '{"en": "Evening Star is a 3-candle bearish reversal pattern at tops.", "es": "Estrella de la Tarde es un patrón de reversión bajista de 3 velas en techos."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'patterns';

-- SECTION 5: Volume Analysis (15 questions)
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "An uptrend with rising volume indicates:", "es": "Una tendencia alcista con volumen creciente indica:"}',
  '{"en": ["Weakening trend", "Healthy, strong trend", "Reversal imminent", "False breakout"], "es": ["Tendencia debilitándose", "Tendencia sana y fuerte", "Reversión inminente", "Ruptura falsa"]}',
  1,
  '{"en": "Rising volume in a trend confirms strength and conviction.", "es": "Volumen creciente en una tendencia confirma fuerza y convicción."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'volume';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "A breakout with low volume is likely:", "es": "Una ruptura con bajo volumen probablemente es:"}',
  '{"en": ["Very strong", "A valid breakout", "A false breakout", "A continuation signal"], "es": ["Muy fuerte", "Una ruptura válida", "Una ruptura falsa", "Una señal de continuación"]}',
  2,
  '{"en": "Low volume breakouts often fail - no conviction behind the move.", "es": "Las rupturas con bajo volumen a menudo fallan - no hay convicción detrás del movimiento."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'volume';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Volume spikes often indicate:", "es": "Los picos de volumen a menudo indican:"}',
  '{"en": ["Normal market activity", "Institutional activity or news", "Low volatility", "Market close"], "es": ["Actividad normal del mercado", "Actividad institucional o noticias", "Baja volatilidad", "Cierre del mercado"]}',
  1,
  '{"en": "Sudden volume spikes often indicate institutional money or significant news.", "es": "Picos repentinos de volumen a menudo indican dinero institucional o noticias significativas."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'volume';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "OBV (On-Balance Volume) divergence with price suggests:", "es": "Divergencia de OBV (On-Balance Volume) con el precio sugiere:"}',
  '{"en": ["Trend confirmation", "Potential reversal", "Volume decrease", "No signal"], "es": ["Confirmación de tendencia", "Potencial reversión", "Disminución de volumen", "Ninguna señal"]}',
  1,
  '{"en": "OBV divergence from price often precedes reversals.", "es": "La divergencia del OBV con el precio a menudo precede reversiones."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'volume';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "An uptrend with falling volume indicates:", "es": "Una tendencia alcista con volumen cayendo indica:"}',
  '{"en": ["Strengthening trend", "Weakening trend", "Confirmed breakout", "New money entering"], "es": ["Tendencia fortaleciéndose", "Tendencia debilitándose", "Ruptura confirmada", "Dinero nuevo entrando"]}',
  1,
  '{"en": "Falling volume in an uptrend shows waning interest - trend may be ending.", "es": "Volumen cayendo en una tendencia alcista muestra interés disminuyendo - la tendencia puede estar terminando."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'volume';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Climax volume at trend end often signals:", "es": "Volumen climático al final de tendencia a menudo señala:"}',
  '{"en": ["Trend continuation", "Exhaustion and reversal", "Normal activity", "Low volatility"], "es": ["Continuación de tendencia", "Agotamiento y reversión", "Actividad normal", "Baja volatilidad"]}',
  1,
  '{"en": "Extremely high volume at trend extremes often marks exhaustion.", "es": "Volumen extremadamente alto en extremos de tendencia a menudo marca agotamiento."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'volume';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "VWAP is primarily used by:", "es": "VWAP es usado principalmente por:"}',
  '{"en": ["Retail scalpers only", "Institutional traders as benchmark", "Long-term investors only", "Beginners only"], "es": ["Solo scalpers minoristas", "Traders institucionales como referencia", "Solo inversores a largo plazo", "Solo principiantes"]}',
  1,
  '{"en": "VWAP (Volume Weighted Average Price) is used by institutions to benchmark execution.", "es": "VWAP (Precio Promedio Ponderado por Volumen) es usado por instituciones como referencia."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'volume';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Low volume coins in crypto are:", "es": "Monedas de bajo volumen en crypto son:"}',
  '{"en": ["Safer investments", "Easy to manipulate", "Always bullish", "Best for beginners"], "es": ["Inversiones más seguras", "Fáciles de manipular", "Siempre alcistas", "Mejores para principiantes"]}',
  1,
  '{"en": "Low volume = low liquidity = easy manipulation. Be careful with these.", "es": "Bajo volumen = baja liquidez = fácil manipulación. Ten cuidado con estos."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'volume';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Volume Profile shows:", "es": "El Perfil de Volumen muestra:"}',
  '{"en": ["Time-based volume", "Volume at price levels", "Only current volume", "Moving average of volume"], "es": ["Volumen basado en tiempo", "Volumen en niveles de precio", "Solo volumen actual", "Media móvil del volumen"]}',
  1,
  '{"en": "Volume Profile displays volume traded at each price level - identifies key areas.", "es": "El Perfil de Volumen muestra volumen operado en cada nivel de precio - identifica áreas clave."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'volume';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Wash trading in crypto means:", "es": "Wash trading en crypto significa:"}',
  '{"en": ["Legitimate high volume", "Fake volume from self-trading", "Profit taking", "Stop loss hunting"], "es": ["Volumen alto legítimo", "Volumen falso por auto-trading", "Toma de ganancias", "Caza de stop loss"]}',
  1,
  '{"en": "Wash trading is fake volume created by exchanges or traders trading with themselves.", "es": "Wash trading es volumen falso creado por exchanges o traders operando consigo mismos."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'volume';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "When comparing volume, you should:", "es": "Al comparar volumen, deberías:"}',
  '{"en": ["Use only absolute numbers", "Compare to recent average", "Ignore all volume", "Only look at spikes"], "es": ["Usar solo números absolutos", "Comparar con promedio reciente", "Ignorar todo el volumen", "Solo ver picos"]}',
  1,
  '{"en": "Compare current volume to recent average for context.", "es": "Compara el volumen actual con el promedio reciente para contexto."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'volume';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Volume in crypto vs stocks:", "es": "Volumen en crypto vs acciones:"}',
  '{"en": ["Is exactly the same", "Is spread across 24/7 trading", "Only matters in stocks", "Is irrelevant"], "es": ["Es exactamente igual", "Se distribuye en trading 24/7", "Solo importa en acciones", "Es irrelevante"]}',
  1,
  '{"en": "Crypto trades 24/7 so volume distribution differs from stock market hours.", "es": "Crypto opera 24/7 así que la distribución de volumen difiere de las horas del mercado de acciones."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'volume';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Money Flow Index (MFI) is:", "es": "El Money Flow Index (MFI) es:"}',
  '{"en": ["Only price-based", "RSI with volume", "A trend indicator", "A chart pattern"], "es": ["Solo basado en precio", "RSI con volumen", "Un indicador de tendencia", "Un patrón de gráfico"]}',
  1,
  '{"en": "MFI is like RSI but incorporates volume for more reliable readings.", "es": "MFI es como RSI pero incorpora volumen para lecturas más confiables."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'volume';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "After a volume spike, you should watch for:", "es": "Después de un pico de volumen, deberías observar:"}',
  '{"en": ["Immediate entry", "Consolidation period", "Ignore it", "Sell everything"], "es": ["Entrada inmediata", "Periodo de consolidación", "Ignorarlo", "Vender todo"]}',
  1,
  '{"en": "After spikes, markets often consolidate as they digest the move.", "es": "Después de picos, los mercados a menudo consolidan mientras digieren el movimiento."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'volume';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Volume often increases:", "es": "El volumen a menudo aumenta:"}',
  '{"en": ["After major moves", "Before major moves", "During weekends only", "When markets are boring"], "es": ["Después de grandes movimientos", "Antes de grandes movimientos", "Solo durante fines de semana", "Cuando los mercados están aburridos"]}',
  1,
  '{"en": "Smart money accumulating/distributing often shows as volume increase before moves.", "es": "El dinero inteligente acumulando/distribuyendo a menudo se muestra como aumento de volumen antes de movimientos."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'volume';

-- SECTION 6: Trading Strategies (15 questions)
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "You should never risk more than how much per trade?", "es": "Nunca deberías arriesgar más de cuánto por trade?"}',
  '{"en": ["10-20%", "5-10%", "1-2%", "50%"], "es": ["10-20%", "5-10%", "1-2%", "50%"]}',
  2,
  '{"en": "Risk 1-2% max per trade to survive losing streaks.", "es": "Arriesga máximo 1-2% por trade para sobrevivir rachas perdedoras."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'strategies';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "The minimum risk/reward ratio you should aim for is:", "es": "El ratio mínimo de riesgo/beneficio al que deberías apuntar es:"}',
  '{"en": ["1:0.5", "1:1", "1:2", "1:0.1"], "es": ["1:0.5", "1:1", "1:2", "1:0.1"]}',
  2,
  '{"en": "Minimum 1:2 R/R means your wins need to be twice your losses.", "es": "Mínimo 1:2 R/R significa que tus ganancias deben ser el doble de tus pérdidas."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'strategies';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Trend following strategy enters on:", "es": "La estrategia de seguimiento de tendencia entra en:"}',
  '{"en": ["New highs only", "Pullback to MA or trendline", "Against the trend", "Random times"], "es": ["Solo nuevos máximos", "Retroceso a MA o línea de tendencia", "Contra la tendencia", "Momentos aleatorios"]}',
  1,
  '{"en": "Trend following buys pullbacks in uptrends for better entry.", "es": "Seguir tendencia compra retrocesos en tendencias alcistas para mejor entrada."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'strategies';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Range trading works best in:", "es": "El trading de rango funciona mejor en:"}',
  '{"en": ["Strong uptrends", "Strong downtrends", "Sideways markets", "During breakouts"], "es": ["Tendencias alcistas fuertes", "Tendencias bajistas fuertes", "Mercados laterales", "Durante rupturas"]}',
  2,
  '{"en": "Range trading profits from price oscillation between S/R in sideways markets.", "es": "El trading de rango obtiene ganancias de la oscilación entre S/R en mercados laterales."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'strategies';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "The biggest risk in breakout trading is:", "es": "El mayor riesgo en trading de ruptura es:"}',
  '{"en": ["Too much profit", "False breakouts", "High volume", "Strong trends"], "es": ["Demasiada ganancia", "Rupturas falsas", "Alto volumen", "Tendencias fuertes"]}',
  1,
  '{"en": "False breakouts are common - wait for confirmation and use stops.", "es": "Las rupturas falsas son comunes - espera confirmación y usa stops."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'strategies';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Scalping requires:", "es": "El scalping requiere:"}',
  '{"en": ["Low liquidity", "High liquidity and fast execution", "Only weekly charts", "No stop losses"], "es": ["Baja liquidez", "Alta liquidez y ejecución rápida", "Solo gráficos semanales", "Sin stop loss"]}',
  1,
  '{"en": "Scalping needs high liquidity for quick entries/exits and tight spreads.", "es": "El scalping necesita alta liquidez para entradas/salidas rápidas y spreads ajustados."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'strategies';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "What should you always do before entering a trade?", "es": "¿Qué deberías hacer siempre antes de entrar a un trade?"}',
  '{"en": ["Check social media", "Set a stop loss", "Use maximum leverage", "Skip risk management"], "es": ["Revisar redes sociales", "Configurar un stop loss", "Usar máximo apalancamiento", "Saltar gestión de riesgo"]}',
  1,
  '{"en": "ALWAYS set stop loss before entering - no exceptions.", "es": "SIEMPRE configura stop loss antes de entrar - sin excepciones."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'strategies';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "After a losing trade, you should:", "es": "Después de un trade perdedor, deberías:"}',
  '{"en": ["Immediately revenge trade", "Take a break and analyze", "Double position size", "Blame the market"], "es": ["Inmediatamente operar por venganza", "Tomar un descanso y analizar", "Duplicar tamaño de posición", "Culpar al mercado"]}',
  1,
  '{"en": "Never revenge trade - step back, analyze what went wrong, reset mentally.", "es": "Nunca operes por venganza - retrocede, analiza qué salió mal, resetea mentalmente."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'strategies';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "A trading journal helps you:", "es": "Un diario de trading te ayuda a:"}',
  '{"en": ["Waste time", "Learn from mistakes and track patterns", "Increase losses", "Trade more emotionally"], "es": ["Perder tiempo", "Aprender de errores y rastrear patrones", "Aumentar pérdidas", "Operar más emocionalmente"]}',
  1,
  '{"en": "A journal helps identify what works, emotional patterns, and mistakes.", "es": "Un diario ayuda a identificar qué funciona, patrones emocionales y errores."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'strategies';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "FOMO (Fear Of Missing Out) leads to:", "es": "FOMO (Miedo a Perdérselo) lleva a:"}',
  '{"en": ["Better entries", "Chasing pumps and bad entries", "Improved risk management", "Lower emotions"], "es": ["Mejores entradas", "Perseguir pumps y malas entradas", "Mejor gestión de riesgo", "Menos emociones"]}',
  1,
  '{"en": "FOMO leads to buying highs and poor entries - patience is key.", "es": "FOMO lleva a comprar máximos y malas entradas - la paciencia es clave."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'strategies';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Before trading with real money, you should:", "es": "Antes de operar con dinero real, deberías:"}',
  '{"en": ["Skip practice", "Demo trade first", "Use maximum leverage", "Ignore learning"], "es": ["Saltar práctica", "Operar primero en demo", "Usar máximo apalancamiento", "Ignorar aprendizaje"]}',
  1,
  '{"en": "Demo trading tests your strategy without risking real capital.", "es": "Operar en demo prueba tu estrategia sin arriesgar capital real."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'strategies';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Swing trading is best for people who:", "es": "El swing trading es mejor para personas que:"}',
  '{"en": ["Can watch charts all day", "Have regular jobs but want to trade", "Only trade for seconds", "Never use stop losses"], "es": ["Pueden ver gráficos todo el día", "Tienen trabajos regulares pero quieren operar", "Solo operan por segundos", "Nunca usan stop loss"]}',
  1,
  '{"en": "Swing trading (days-weeks) doesn't require constant monitoring.", "es": "El swing trading (días-semanas) no requiere monitoreo constante."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'strategies';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "The most important factor in trading success is:", "es": "El factor más importante en el éxito del trading es:"}',
  '{"en": ["Having many indicators", "Risk management and psychology", "Trading frequently", "Following social media"], "es": ["Tener muchos indicadores", "Gestión de riesgo y psicología", "Operar frecuentemente", "Seguir redes sociales"]}',
  1,
  '{"en": "Risk management and psychology matter more than any indicator or strategy.", "es": "La gestión de riesgo y psicología importan más que cualquier indicador o estrategia."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'strategies';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "When should you increase position size?", "es": "¿Cuándo deberías aumentar tamaño de posición?"}',
  '{"en": ["After a loss", "After proving consistent profitability", "Randomly", "When feeling lucky"], "es": ["Después de una pérdida", "Después de demostrar rentabilidad consistente", "Aleatoriamente", "Cuando te sientas con suerte"]}',
  1,
  '{"en": "Scale up only after proving yourself with smaller positions.", "es": "Escala solo después de demostrarte a ti mismo con posiciones más pequeñas."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'strategies';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Let winners run and:", "es": "Deja correr ganadores y:"}',
  '{"en": ["Let losers run too", "Cut losers fast", "Never take profit", "Average down always"], "es": ["Dejar correr perdedores también", "Cortar perdedores rápido", "Nunca tomar ganancias", "Siempre promediar a la baja"]}',
  1,
  '{"en": "Classic trading wisdom: let winners run, cut losers quickly.", "es": "Sabiduría clásica de trading: deja correr ganadores, corta perdedores rápido."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'strategies';

-- SECTION 7: FAQs (15 questions)
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "What percentage of day traders lose money?", "es": "¿Qué porcentaje de day traders pierden dinero?"}',
  '{"en": ["10-20%", "30-50%", "70-90%", "0%"], "es": ["10-20%", "30-50%", "70-90%", "0%"]}',
  2,
  '{"en": "Studies show 70-90% of day traders lose money overall.", "es": "Estudios muestran que 70-90% de los day traders pierden dinero en general."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "How long does it take to become a competent trader?", "es": "¿Cuánto tiempo toma volverse un trader competente?"}',
  '{"en": ["1 week", "1 month", "6-12 months minimum", "1 day"], "es": ["1 semana", "1 mes", "6-12 meses mínimo", "1 día"]}',
  2,
  '{"en": "Competence takes 6-12 months minimum of consistent study and practice.", "es": "La competencia toma 6-12 meses mínimo de estudio y práctica consistente."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "For beginners, the recommended starting timeframe is:", "es": "Para principiantes, la temporalidad recomendada para empezar es:"}',
  '{"en": ["1 minute", "5 minutes", "4 hour or Daily", "1 second"], "es": ["1 minuto", "5 minutos", "4 horas o Diario", "1 segundo"]}',
  2,
  '{"en": "4h or Daily has clearer signals and less noise - best for learning.", "es": "4h o Diario tiene señales más claras y menos ruido - mejor para aprender."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "The best charting platform mentioned is:", "es": "La mejor plataforma de gráficos mencionada es:"}',
  '{"en": ["Microsoft Excel", "TradingView", "Paint", "Notepad"], "es": ["Microsoft Excel", "TradingView", "Paint", "Notepad"]}',
  1,
  '{"en": "TradingView is the industry standard for charting with great free tier.", "es": "TradingView es el estándar de la industria para gráficos con excelente plan gratis."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "TA gives you:", "es": "El AT te da:"}',
  '{"en": ["100% certainty", "Probabilities, not certainties", "Guaranteed profits", "No useful information"], "es": ["100% de certeza", "Probabilidades, no certezas", "Ganancias garantizadas", "Ninguna información útil"]}',
  1,
  '{"en": "TA provides probabilities to make informed decisions, not crystal ball predictions.", "es": "El AT proporciona probabilidades para tomar decisiones informadas, no predicciones de bola de cristal."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Combining TA with fundamental analysis is:", "es": "Combinar AT con análisis fundamental es:"}',
  '{"en": ["A bad idea", "Recommended for fuller picture", "Only for stocks", "Unnecessary"], "es": ["Mala idea", "Recomendado para panorama más completo", "Solo para acciones", "Innecesario"]}',
  1,
  '{"en": "Fundamentals tell you WHAT to trade, TA tells you WHEN.", "es": "Los fundamentales te dicen QUÉ operar, el AT cuándo."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "How much capital should a beginner start with?", "es": "¿Con cuánto capital debería empezar un principiante?"}',
  '{"en": ["All their savings", "Only what they can afford to lose", "Borrowed money", "Their retirement funds"], "es": ["Todos sus ahorros", "Solo lo que puedan permitirse perder", "Dinero prestado", "Sus fondos de retiro"]}',
  1,
  '{"en": "Start with money you can truly afford to lose - seriously.", "es": "Empieza con dinero que verdaderamente puedas permitirte perder - en serio."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Crypto TA differs from stocks in that crypto has:", "es": "El AT de crypto difiere de acciones en que crypto tiene:"}',
  '{"en": ["Lower volatility", "24/7 markets and higher volatility", "No manipulation", "Only uptrends"], "es": ["Menor volatilidad", "Mercados 24/7 y mayor volatilidad", "Sin manipulación", "Solo tendencias alcistas"]}',
  1,
  '{"en": "Crypto trades 24/7, has higher volatility, and more manipulation in small caps.", "es": "Crypto opera 24/7, tiene mayor volatilidad y más manipulación en caps pequeños."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Common reasons for losing with TA include:", "es": "Razones comunes para perder con AT incluyen:"}',
  '{"en": ["Using stop losses", "Poor risk management and revenge trading", "Following the trend", "Being patient"], "es": ["Usar stop losses", "Mala gestión de riesgo y trading de venganza", "Seguir la tendencia", "Ser paciente"]}',
  1,
  '{"en": "Most losses come from poor risk management and psychological issues.", "es": "La mayoría de pérdidas vienen de mala gestión de riesgo y problemas psicológicos."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Scalping is recommended for:", "es": "El scalping es recomendado para:"}',
  '{"en": ["Complete beginners", "Experienced traders only", "People with no time", "Long-term investors"], "es": ["Principiantes completos", "Solo traders experimentados", "Personas sin tiempo", "Inversores a largo plazo"]}',
  1,
  '{"en": "Scalping is extremely stressful and NOT recommended for beginners.", "es": "El scalping es extremadamente estresante y NO se recomienda para principiantes."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Most profitable traders are:", "es": "La mayoría de traders rentables son:"}',
  '{"en": ["Day traders", "Scalpers", "Swing or position traders", "Random traders"], "es": ["Day traders", "Scalpers", "Swing o position traders", "Traders aleatorios"]}',
  2,
  '{"en": "Statistics show swing and position traders tend to be more profitable.", "es": "Las estadísticas muestran que swing y position traders tienden a ser más rentables."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "On-chain metrics for crypto can be found at:", "es": "Las métricas on-chain para crypto se pueden encontrar en:"}',
  '{"en": ["Twitter only", "Glassnode", "YouTube comments", "Facebook"], "es": ["Solo Twitter", "Glassnode", "Comentarios de YouTube", "Facebook"]}',
  1,
  '{"en": "Glassnode provides on-chain analytics for crypto.", "es": "Glassnode proporciona analíticas on-chain para crypto."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Funding rates are relevant for:", "es": "Las tasas de funding son relevantes para:"}',
  '{"en": ["Spot trading only", "Perpetual futures", "Long-term holding", "Staking"], "es": ["Solo trading spot", "Futuros perpetuos", "Holding a largo plazo", "Staking"]}',
  1,
  '{"en": "Funding rates affect perpetual futures positions, not spot.", "es": "Las tasas de funding afectan posiciones de futuros perpetuos, no spot."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "Day trading should be considered:", "es": "El day trading debería considerarse:"}',
  '{"en": ["Easy money", "Full-time work requiring capital", "A guaranteed income", "Best for beginners"], "es": ["Dinero fácil", "Trabajo tiempo completo que requiere capital", "Un ingreso garantizado", "Mejor para principiantes"]}',
  1,
  '{"en": "Day trading requires full-time attention, significant capital, and experience.", "es": "El day trading requiere atención tiempo completo, capital significativo y experiencia."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id, 
  '{"en": "The same TA principles apply to:", "es": "Los mismos principios de AT aplican a:"}',
  '{"en": ["Only Bitcoin", "Only stocks", "Crypto, stocks, forex, and commodities", "Nothing"], "es": ["Solo Bitcoin", "Solo acciones", "Crypto, acciones, forex y commodities", "Nada"]}',
  2,
  '{"en": "TA principles work across all markets - patterns are based on human psychology.", "es": "Los principios de AT funcionan en todos los mercados - los patrones se basan en psicología humana."}'
FROM course_sections WHERE course_id = 'technical-analysis' AND slug = 'faqs';
