-- =============================================
-- TECHNICAL ANALYSIS COURSE - SECTIONS SEED
-- 7 Sections (6 Content + 1 FAQs)
-- =============================================

-- SECTION 1: Chart Reading Basics
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'technical-analysis', 
  'chart-basics', 
  1, 
  '{"en": "Chart Reading Basics", "es": "Conceptos Básicos de Gráficos"}', 
  '{"en": "Understanding price action", "es": "Entendiendo la acción del precio"}',
  $${
    "en": {
      "p1": "Welcome to this <strong class=\"text-white\">crypto technical analysis course</strong>! Technical Analysis is the study of historical price and volume data to predict future market movements. This technical analysis tutorial will teach you how to read charts like a professional. Unlike fundamental analysis, TA focuses solely on chart patterns, indicators, and price action. It's based on the idea that history tends to repeat itself and that prices move in trends. Whether you're trading Bitcoin, Ethereum, or altcoins, mastering these concepts is essential for success in the crypto markets.",
      "types": {
        "title": "Chart Types",
        "image": "/images/schemas/chart-types.png",
        "items": [
          {"title": "Line Charts", "desc": "Simple price over time. Connects closing prices with a line. Good for beginners and spotting overall trends."},
          {"title": "Candlestick Charts", "desc": "Shows OHLC (Open, High, Low, Close). Most popular for crypto trading. Rich information in each candle."},
          {"title": "Heikin-Ashi", "desc": "Smoothed candlesticks with less noise. Uses averaged values. Best for trend confirmation."},
          {"title": "Bar Charts", "desc": "Similar to candlesticks but with bars. Shows OHLC with vertical lines and horizontal ticks."}
        ]
      },
      "special": {
        "title": "Understanding Candlesticks",
        "list": [
          "<strong class=\"text-green-400\">Bullish Candle (Green):</strong> Close > Open, buyers in control, price moved up",
          "<strong class=\"text-red-400\">Bearish Candle (Red):</strong> Close < Open, sellers in control, price moved down",
          "<strong class=\"text-white\">Body:</strong> Distance between open and close - large body = strong move",
          "<strong class=\"text-white\">Wicks/Shadows:</strong> High and low beyond body - show rejection of prices"
        ]
      },
      "tech": {
        "title": "Timeframes",
        "desc": "Different timeframes suit different trading styles:",
        "list": [
          "<strong>1m - 5m:</strong> Scalping (very short-term, high stress, many trades)",
          "<strong>15m - 1h:</strong> Day trading (intraday, close positions same day)",
          "<strong>4h - Daily:</strong> Swing trading (hold for days to weeks)",
          "<strong>Weekly - Monthly:</strong> Position trading (long-term, less active management)"
        ]
      },
      "warn": {
        "title": "Key Principles",
        "list": [
          "Price discounts everything - all known information is already reflected",
          "Prices move in trends - identify and follow them",
          "History repeats - patterns that worked before tend to work again",
          "Volume confirms price moves - high volume = stronger signal"
        ]
      }
    },
    "es": {
      "p1": "Bienvenido a este <strong class=\"text-white\">curso de análisis técnico crypto</strong>! El Análisis Técnico es el estudio de datos históricos de precio y volumen para predecir movimientos futuros. Este tutorial de análisis técnico te enseñará a leer gráficos como un profesional. A diferencia del análisis fundamental, el AT se enfoca únicamente en patrones de gráficos, indicadores y acción del precio. Se basa en que la historia tiende a repetirse y que los precios se mueven en tendencias. Ya sea que operes Bitcoin, Ethereum o altcoins, dominar estos conceptos es esencial para el éxito en los mercados crypto.",
      "types": {
        "title": "Tipos de Gráficos",
        "image": "/images/schemas/chart-types-es.png",
        "items": [
          {"title": "Gráficos de Línea", "desc": "Precio simple en el tiempo. Conecta precios de cierre. Bueno para principiantes y ver tendencias generales."},
          {"title": "Gráficos de Velas", "desc": "Muestra OHLC (Apertura, Alto, Bajo, Cierre). Más popular para crypto. Rica información en cada vela."},
          {"title": "Heikin-Ashi", "desc": "Velas suavizadas con menos ruido. Usa valores promediados. Mejor para confirmación de tendencias."},
          {"title": "Gráficos de Barras", "desc": "Similar a velas pero con barras. Muestra OHLC con líneas verticales y marcas horizontales."}
        ]
      },
      "special": {
        "title": "Entendiendo las Velas",
        "list": [
          "<strong class=\"text-green-400\">Vela Alcista (Verde):</strong> Cierre > Apertura, compradores en control, precio subió",
          "<strong class=\"text-red-400\">Vela Bajista (Roja):</strong> Cierre < Apertura, vendedores en control, precio bajó",
          "<strong class=\"text-white\">Cuerpo:</strong> Distancia entre apertura y cierre - cuerpo grande = movimiento fuerte",
          "<strong class=\"text-white\">Mechas/Sombras:</strong> Alto y bajo fuera del cuerpo - muestran rechazo de precios"
        ]
      },
      "tech": {
        "title": "Temporalidades (Timeframes)",
        "desc": "Diferentes marcos temporales para diferentes estilos de trading:",
        "list": [
          "<strong>1m - 5m:</strong> Scalping (muy corto plazo, alto estrés, muchos trades)",
          "<strong>15m - 1h:</strong> Day trading (intradía, cierra posiciones el mismo día)",
          "<strong>4h - Diario:</strong> Swing trading (mantén por días a semanas)",
          "<strong>Semanal - Mensual:</strong> Position trading (largo plazo, gestión menos activa)"
        ]
      },
      "warn": {
        "title": "Principios Clave",
        "list": [
          "El precio lo descuenta todo - toda la información conocida ya está reflejada",
          "Los precios se mueven en tendencias - identifícalas y síguelas",
          "La historia se repite - patrones que funcionaron antes tienden a funcionar de nuevo",
          "El volumen confirma movimientos - alto volumen = señal más fuerte"
        ]
      }
    }
  }$$
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 2: Support, Resistance & Trends
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'technical-analysis', 
  'support-resistance', 
  2, 
  '{"en": "Support, Resistance & Trends", "es": "Soporte, Resistencia y Tendencias"}', 
  '{"en": "Key price levels and directions", "es": "Niveles clave y direcciones de precio"}',
  $${
    "en": {
      "p1": "<strong class=\"text-white\">Support and Resistance</strong> are horizontal price levels where buying or selling pressure historically occurs. These levels act as psychological barriers where traders expect reactions. Mastering these concepts is fundamental to successful trading.",
      "components": {
        "title": "Support & Resistance Explained",
        "items": [
          {"title": "Support", "desc": "Price level where buying interest prevents further decline. Acts as a 'floor'. When broken, often becomes resistance."},
          {"title": "Resistance", "desc": "Price level where selling pressure prevents further rise. Acts as a 'ceiling'. When broken, often becomes support."},
          {"title": "Role Reversal", "desc": "When support breaks, it becomes resistance. When resistance breaks, it becomes support. This is a crucial concept."},
          {"title": "Psychological Levels", "desc": "Round numbers ($1000, $50k) often act as natural S/R levels due to human psychology."}
        ]
      },
      "trends": {
        "title": "Trend Lines",
        "items": [
          {"title": "Uptrend", "desc": "Higher highs and higher lows. Draw line connecting rising lows. Stay long (buy) above the line. Example: BTC 2020-2021."},
          {"title": "Downtrend", "desc": "Lower highs and lower lows. Draw line connecting falling highs. Stay short (sell) below the line."},
          {"title": "Sideways/Range", "desc": "Price oscillates between support and resistance. Buy near support, sell near resistance. Wait for breakout."}
        ]
      },
      "example": {
        "title": "Pro Tips for S/R Trading",
        "list": [
          "The more times a level is tested, the stronger it becomes",
          "Volume confirms breakouts - high volume = strong and likely valid breakout",
          "False breakouts are common - wait for candle close above/below level",
          "Use multiple timeframes - S/R on higher timeframes is more significant",
          "Don't place stops exactly at S/R - place them slightly beyond"
        ]
      },
      "warn": {
        "title": "Common Mistakes",
        "list": [
          "Drawing too many lines - focus on the most obvious, significant levels",
          "Ignoring timeframe context - daily S/R is stronger than 15m",
          "Not waiting for confirmation - enter after the level is clearly respected or broken",
          "Fighting the trend - S/R works best WITH the trend, not against it"
        ]
      }
    },
    "es": {
      "p1": "<strong class=\"text-white\">Soporte y Resistencia</strong> son niveles horizontales donde históricamente ocurre presión de compra o venta. Actúan como barreras psicológicas donde los traders esperan reacciones. Dominar estos conceptos es fundamental para operar con éxito.",
      "components": {
        "title": "Soporte y Resistencia Explicados",
        "items": [
          {"title": "Soporte", "desc": "Nivel donde el interés de compra previene más caídas. Actúa como 'piso'. Al romperse, a menudo se vuelve resistencia."},
          {"title": "Resistencia", "desc": "Nivel donde la presión de venta previene más subidas. Actúa como 'techo'. Al romperse, a menudo se vuelve soporte."},
          {"title": "Inversión de Rol", "desc": "Cuando un soporte rompe, se vuelve resistencia. Cuando una resistencia rompe, se vuelve soporte. Concepto crucial."},
          {"title": "Niveles Psicológicos", "desc": "Números redondos ($1000, $50k) actúan como S/R naturales debido a la psicología humana."}
        ]
      },
      "trends": {
        "title": "Líneas de Tendencia",
        "items": [
          {"title": "Tendencia Alcista", "desc": "Altos más altos y bajos más altos. Dibuja línea uniendo bajos ascendentes. Mantén largos sobre la línea."},
          {"title": "Tendencia Bajista", "desc": "Altos más bajos y bajos más bajos. Dibuja línea uniendo altos descendentes. Mantén cortos bajo la línea."},
          {"title": "Lateral/Rango", "desc": "El precio oscila entre soporte y resistencia. Compra cerca de soporte, vende cerca de resistencia. Espera ruptura."}
        ]
      },
      "example": {
        "title": "Tips Pro para Operar S/R",
        "list": [
          "Mientras más veces se prueba un nivel, más fuerte se vuelve",
          "El volumen confirma rupturas - alto volumen = ruptura fuerte y probablemente válida",
          "Las falsas rupturas son comunes - espera cierre de vela sobre/bajo el nivel",
          "Usa múltiples timeframes - S/R en temporalidades mayores es más significativo",
          "No coloques stops exactamente en S/R - ponlos ligeramente más allá"
        ]
      },
      "warn": {
        "title": "Errores Comunes",
        "list": [
          "Dibujar demasiadas líneas - enfócate en los niveles más obvios y significativos",
          "Ignorar contexto de timeframe - S/R diario es más fuerte que 15m",
          "No esperar confirmación - entra después de que el nivel sea claramente respetado o roto",
          "Ir contra la tendencia - S/R funciona mejor CON la tendencia, no en contra"
        ]
      }
    }
  }$$
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 3: Technical Indicators
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'technical-analysis', 
  'indicators', 
  3, 
  '{"en": "Technical Indicators", "es": "Indicadores Técnicos"}', 
  '{"en": "RSI, MACD, Moving Averages", "es": "RSI, MACD, Medias Móviles"}',
  $${
    "en": {
      "p1": "<strong class=\"text-white\">Technical Indicators</strong> are mathematical calculations based on price, volume, or open interest. They help identify trends, momentum, volatility, and potential reversal points. Remember: indicators LAG price - they confirm, not predict.",
      "components": {
        "title": "Moving Averages (MA)",
        "items": [
          {"title": "SMA (Simple)", "desc": "Average of prices over a period. 50 SMA = average of last 50 closes. Smooth but slow to react."},
          {"title": "EMA (Exponential)", "desc": "Weighted average giving more importance to recent prices. Reacts faster than SMA."},
          {"title": "Golden Cross", "desc": "50 MA crosses ABOVE 200 MA. Bullish signal. Often marks start of uptrend."},
          {"title": "Death Cross", "desc": "50 MA crosses BELOW 200 MA. Bearish signal. Often marks start of downtrend."}
        ]
      },
      "tech": {
        "title": "RSI (Relative Strength Index)",
        "desc": "Momentum oscillator measuring speed and change of price movements on a 0-100 scale.",
        "list": [
          "<strong>Above 70:</strong> Overbought - consider selling or waiting for pullback",
          "<strong>Below 30:</strong> Oversold - consider buying or waiting for bounce",
          "<strong>Divergence:</strong> Price makes new high but RSI doesn't = bearish divergence (reversal signal)",
          "<strong>50 Level:</strong> Above 50 = bullish momentum, Below 50 = bearish momentum",
          "Default period: 14 candles - adjust for your timeframe"
        ]
      },
      "example": {
        "title": "MACD (Moving Average Convergence Divergence)",
        "list": [
          "<strong>MACD Line:</strong> 12 EMA minus 26 EMA",
          "<strong>Signal Line:</strong> 9 EMA of the MACD line",
          "<strong>Histogram:</strong> MACD minus Signal - shows momentum strength",
          "<strong>Bullish Signal:</strong> MACD crosses above Signal line",
          "<strong>Bearish Signal:</strong> MACD crosses below Signal line",
          "<strong>Zero Line Cross:</strong> MACD above 0 = bullish trend, below = bearish"
        ]
      },
      "warn": {
        "title": "Important Notes",
        "list": [
          "Never use a single indicator alone - combine multiple for confirmation",
          "Indicators lag price - they tell you what happened, not what will happen",
          "Customize settings for different assets and timeframes",
          "Overbought/oversold can stay that way for extended periods in strong trends",
          "Backtesting is essential before using any indicator strategy"
        ]
      }
    },
    "es": {
      "p1": "Los <strong class=\"text-white\">Indicadores Técnicos</strong> son cálculos matemáticos basados en precio, volumen o interés abierto. Ayudan a identificar tendencias, momentum, volatilidad y puntos de reversión. Recuerda: los indicadores tienen RETRASO - confirman, no predicen.",
      "components": {
        "title": "Medias Móviles (MA)",
        "items": [
          {"title": "SMA (Simple)", "desc": "Promedio de precios en un periodo. 50 SMA = promedio de últimos 50 cierres. Suave pero lento."},
          {"title": "EMA (Exponencial)", "desc": "Promedio ponderado dando más peso a precios recientes. Reacciona más rápido que SMA."},
          {"title": "Cruce Dorado", "desc": "MA 50 cruza SOBRE MA 200. Señal alcista. A menudo marca inicio de tendencia alcista."},
          {"title": "Cruce de la Muerte", "desc": "MA 50 cruza BAJO MA 200. Señal bajista. A menudo marca inicio de tendencia bajista."}
        ]
      },
      "tech": {
        "title": "RSI (Índice de Fuerza Relativa)",
        "desc": "Oscilador de momentum que mide velocidad y cambio de movimientos en escala 0-100.",
        "list": [
          "<strong>Sobre 70:</strong> Sobrecompra - considera vender o esperar retroceso",
          "<strong>Bajo 30:</strong> Sobreventa - considera comprar o esperar rebote",
          "<strong>Divergencia:</strong> Precio hace nuevo alto pero RSI no = divergencia bajista (señal de reversión)",
          "<strong>Nivel 50:</strong> Sobre 50 = momentum alcista, Bajo 50 = momentum bajista",
          "Periodo por defecto: 14 velas - ajusta para tu temporalidad"
        ]
      },
      "example": {
        "title": "MACD (Convergencia/Divergencia de Medias Móviles)",
        "list": [
          "<strong>Línea MACD:</strong> EMA 12 menos EMA 26",
          "<strong>Línea Señal:</strong> EMA 9 de la línea MACD",
          "<strong>Histograma:</strong> MACD menos Señal - muestra fuerza del momentum",
          "<strong>Señal Alcista:</strong> MACD cruza sobre línea Señal",
          "<strong>Señal Bajista:</strong> MACD cruza bajo línea Señal",
          "<strong>Cruce de Línea Cero:</strong> MACD sobre 0 = tendencia alcista, bajo = bajista"
        ]
      },
      "warn": {
        "title": "Notas Importantes",
        "list": [
          "Nunca uses un solo indicador - combina múltiples para confirmación",
          "Los indicadores tienen retraso - te dicen qué pasó, no qué pasará",
          "Personaliza configuraciones para diferentes activos y temporalidades",
          "Sobrecompra/sobreventa puede mantenerse en tendencias fuertes",
          "El backtesting es esencial antes de usar cualquier estrategia con indicadores"
        ]
      }
    }
  }$$
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 4: Chart Patterns
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'technical-analysis', 
  'patterns', 
  4, 
  '{"en": "Chart Patterns", "es": "Patrones de Gráfico"}', 
  '{"en": "Recognizing formations", "es": "Reconociendo formaciones"}',
  $${
    "en": {
      "p1": "<strong class=\"text-white\">Chart Patterns</strong> are visual formations created by price movements that often predict future direction. They're based on market psychology and the collective behavior of traders. Patterns work because many traders see and act on them.",
      "components": {
        "title": "Reversal Patterns",
        "items": [
          {"title": "Head and Shoulders", "desc": "Three peaks with middle highest. Neckline connects lows. Break of neckline confirms bearish reversal."},
          {"title": "Inverse H&S", "desc": "Three troughs with middle lowest. Break above neckline = bullish reversal signal."},
          {"title": "Double Top", "desc": "Two peaks at similar level. Shows failed attempt to break higher. Bearish after neckline break."},
          {"title": "Double Bottom", "desc": "Two troughs at similar level. Shows strong support. Bullish after resistance break."}
        ]
      },
      "types": {
        "title": "Continuation Patterns",
        "items": [
          {"title": "Ascending Triangle", "desc": "Flat resistance, rising support. Usually bullish - buyers are aggressive."},
          {"title": "Descending Triangle", "desc": "Flat support, falling resistance. Usually bearish - sellers are aggressive."},
          {"title": "Symmetrical Triangle", "desc": "Converging trendlines. Direction unknown until breakout. Volume decreases during formation."},
          {"title": "Flags & Pennants", "desc": "Brief consolidation after strong move. Usually continues in direction of prior trend."}
        ]
      },
      "example": {
        "title": "Candlestick Patterns",
        "list": [
          "<strong>Doji:</strong> Open = Close, shows indecision. Important at trend extremes.",
          "<strong>Hammer:</strong> Long lower wick at bottom. Bullish reversal signal.",
          "<strong>Shooting Star:</strong> Long upper wick at top. Bearish reversal signal.",
          "<strong>Engulfing:</strong> Large candle completely engulfs previous. Strong reversal signal.",
          "<strong>Morning Star:</strong> 3-candle bullish reversal at bottoms.",
          "<strong>Evening Star:</strong> 3-candle bearish reversal at tops."
        ]
      },
      "warn": {
        "title": "Pattern Trading Tips",
        "list": [
          "Wait for confirmation - don't trade before pattern completes",
          "Volume confirms validity - breakouts need volume",
          "Measure for targets - patterns have measured move targets",
          "Use stop losses - patterns can fail",
          "Context matters - patterns work better with the trend"
        ]
      }
    },
    "es": {
      "p1": "Los <strong class=\"text-white\">Patrones de Gráfico</strong> son formaciones visuales creadas por movimientos de precio que a menudo predicen dirección futura. Se basan en psicología de mercado y comportamiento colectivo. Funcionan porque muchos traders los ven y actúan en base a ellos.",
      "components": {
        "title": "Patrones de Reversión",
        "items": [
          {"title": "Hombro-Cabeza-Hombro", "desc": "Tres picos con el medio más alto. La línea de cuello conecta los bajos. Ruptura confirma reversión bajista."},
          {"title": "HCH Invertido", "desc": "Tres valles con el medio más bajo. Ruptura sobre línea de cuello = señal de reversión alcista."},
          {"title": "Doble Techo", "desc": "Dos picos a nivel similar. Muestra intento fallido de subir más. Bajista tras ruptura de cuello."},
          {"title": "Doble Suelo", "desc": "Dos valles a nivel similar. Muestra soporte fuerte. Alcista tras ruptura de resistencia."}
        ]
      },
      "types": {
        "title": "Patrones de Continuación",
        "items": [
          {"title": "Triángulo Ascendente", "desc": "Resistencia plana, soporte subiendo. Usualmente alcista - compradores agresivos."},
          {"title": "Triángulo Descendente", "desc": "Soporte plano, resistencia bajando. Usualmente bajista - vendedores agresivos."},
          {"title": "Triángulo Simétrico", "desc": "Líneas de tendencia convergentes. Dirección incierta hasta ruptura. Volumen baja durante formación."},
          {"title": "Banderas y Banderines", "desc": "Consolidación breve tras movimiento fuerte. Usualmente continúa en dirección de tendencia previa."}
        ]
      },
      "example": {
        "title": "Patrones de Velas",
        "list": [
          "<strong>Doji:</strong> Apertura = Cierre, muestra indecisión. Importante en extremos de tendencia.",
          "<strong>Martillo:</strong> Mecha inferior larga en suelo. Señal de reversión alcista.",
          "<strong>Estrella Fugaz:</strong> Mecha superior larga en techo. Señal de reversión bajista.",
          "<strong>Envolvente:</strong> Vela grande que cubre completamente la anterior. Señal fuerte de reversión.",
          "<strong>Estrella de la Mañana:</strong> Patrón de 3 velas de reversión alcista en suelos.",
          "<strong>Estrella de la Tarde:</strong> Patrón de 3 velas de reversión bajista en techos."
        ]
      },
      "warn": {
        "title": "Tips para Operar Patrones",
        "list": [
          "Espera confirmación - no operes antes de que complete el patrón",
          "El volumen confirma validez - las rupturas necesitan volumen",
          "Mide para objetivos - los patrones tienen movimientos medidos",
          "Usa stop loss - los patrones pueden fallar",
          "El contexto importa - patrones funcionan mejor con la tendencia"
        ]
      }
    }
  }$$
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 5: Volume Analysis
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'technical-analysis', 
  'volume', 
  5, 
  '{"en": "Volume Analysis", "es": "Análisis de Volumen"}', 
  '{"en": "Confirming price movements", "es": "Confirmando movimientos de precio"}',
  $${
    "en": {
      "p1": "<strong class=\"text-white\">Volume</strong> represents the number of tokens traded in a given period. It's the most underrated yet crucial confirmation tool in technical analysis. Price tells you what happened, volume tells you if it's significant.",
      "components": {
        "title": "Volume Principles",
        "items": [
          {"title": "Volume Confirms Trends", "desc": "Uptrend with rising volume = healthy trend. Uptrend with falling volume = weakening, possible reversal."},
          {"title": "Volume Confirms Breakouts", "desc": "Breakout with high volume = likely valid. Breakout with low volume = likely false, expect reversal."},
          {"title": "Volume Precedes Price", "desc": "Volume often increases before major moves. Smart money accumulating or distributing."},
          {"title": "Climax Volume", "desc": "Extremely high volume at trend end often signals exhaustion and upcoming reversal."}
        ]
      },
      "tech": {
        "title": "Volume Indicators",
        "desc": "Tools to help analyze volume more effectively:",
        "list": [
          "<strong>OBV (On-Balance Volume):</strong> Cumulative volume indicator. Divergence with price signals reversal.",
          "<strong>Volume Profile:</strong> Shows volume at price levels. Identifies high volume areas (support/resistance).",
          "<strong>VWAP:</strong> Volume Weighted Average Price. Institutional traders use this as benchmark.",
          "<strong>Money Flow Index (MFI):</strong> RSI but with volume. More reliable overbought/oversold readings."
        ]
      },
      "example": {
        "title": "Volume Spikes",
        "list": [
          "Sudden large increase indicates institutional activity",
          "Can signal news events or earnings releases",
          "At trend extremes, often signals potential reversal",
          "After consolidation, indicates breakout direction",
          "Watch for consolidation after spikes - digesting the move"
        ]
      },
      "warn": {
        "title": "Crypto-Specific Volume Notes",
        "list": [
          "24/7 markets mean volume is spread out differently than stocks",
          "Wash trading is common on some exchanges - verify data sources",
          "Low volume coins are easy to manipulate - be careful",
          "Compare volume to recent average, not absolute numbers",
          "Different exchanges have different volume - use aggregated data"
        ]
      }
    },
    "es": {
      "p1": "El <strong class=\"text-white\">Volumen</strong> representa la cantidad de tokens operados en un periodo. Es la herramienta de confirmación más subestimada pero crucial en análisis técnico. El precio dice qué pasó, el volumen dice si es significativo.",
      "components": {
        "title": "Principios de Volumen",
        "items": [
          {"title": "Volumen Confirma Tendencias", "desc": "Alcista con volumen creciente = tendencia sana. Alcista con volumen bajando = debilitándose, posible reversión."},
          {"title": "Volumen Confirma Rupturas", "desc": "Ruptura con alto volumen = probablemente válida. Ruptura con bajo volumen = probablemente falsa."},
          {"title": "Volumen Precede Precio", "desc": "El volumen a menudo sube antes de grandes movimientos. El dinero inteligente acumulando o distribuyendo."},
          {"title": "Volumen Climático", "desc": "Volumen extremadamente alto al final de tendencia a menudo señala agotamiento y reversión."}
        ]
      },
      "tech": {
        "title": "Indicadores de Volumen",
        "desc": "Herramientas para analizar volumen más efectivamente:",
        "list": [
          "<strong>OBV (On-Balance Volume):</strong> Indicador de volumen acumulativo. Divergencia con precio señala reversión.",
          "<strong>Perfil de Volumen:</strong> Muestra volumen por niveles de precio. Identifica áreas de alto volumen (S/R).",
          "<strong>VWAP:</strong> Precio Promedio Ponderado por Volumen. Los institucionales lo usan como referencia.",
          "<strong>MFI (Money Flow Index):</strong> RSI pero con volumen. Lecturas más confiables de sobre-compra/venta."
        ]
      },
      "example": {
        "title": "Picos de Volumen",
        "list": [
          "Incremento repentino grande indica actividad institucional",
          "Puede señalar noticias o reportes de ganancias",
          "En extremos de tendencia, a menudo señala reversión potencial",
          "Después de consolidación, indica dirección de ruptura",
          "Observa consolidación después de picos - digiriendo el movimiento"
        ]
      },
      "warn": {
        "title": "Notas de Volumen Específicas para Crypto",
        "list": [
          "Mercados 24/7 significan que el volumen se distribuye diferente a acciones",
          "El wash trading es común en algunos exchanges - verifica fuentes",
          "Monedas de bajo volumen son fáciles de manipular - ten cuidado",
          "Compara volumen con promedio reciente, no números absolutos",
          "Diferentes exchanges tienen diferente volumen - usa datos agregados"
        ]
      }
    }
  }$$
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 6: Trading Strategies
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'technical-analysis', 
  'strategies', 
  6, 
  '{"en": "Trading Strategies", "es": "Estrategias de Trading"}', 
  '{"en": "Putting it all together", "es": "Juntando todo"}',
  $${
    "en": {
      "p1": "Now that you've completed our crypto technical analysis tutorial, it's time to combine everything into <strong class=\"text-white\">actionable trading strategies</strong>. A trading strategy combines technical tools into a systematic approach for entering and exiting positions. The best strategy is one you can consistently execute with discipline. There is no holy grail - risk management is what makes traders profitable. This section of our crypto technical analysis course will show you proven strategies used by professional traders.",
      "strats": {
        "title": "Popular Strategies",
        "trend": {"title": "Trend Following", "desc": "Ride the wave. Entry: pullback to MA or trendline. Confirm with RSI > 50. Stop: below swing low. Exit: trendline break."},
        "range": {"title": "Range Trading", "desc": "Buy support, sell resistance. Entry: near support with RSI < 40. Target: resistance. Stop: below support. Best in sideways markets."},
        "breakout": {"title": "Breakout Trading", "desc": "Trade strong moves. Setup: consolidation near resistance. Entry: break with volume. Confirm: retest holds. Risk: false breakouts."}
      },
      "types": {
        "title": "Trading Styles by Timeframe",
        "items": [
          {"title": "Scalping", "desc": "1m-5m charts. Target 0.5-1% per trade. Many trades per day. Requires high liquidity and fast execution. Very stressful."},
          {"title": "Day Trading", "desc": "15m-1h charts. Close all positions same day. Target 1-3% per trade. Requires full-time attention."},
          {"title": "Swing Trading", "desc": "4h-Daily charts. Hold for days to weeks. Less stressful, fewer trades. Good for people with jobs."},
          {"title": "Position Trading", "desc": "Weekly-Monthly charts. Hold for weeks to months. Based on macro analysis. Lowest stress, highest patience required."}
        ]
      },
      "example": {
        "title": "Risk Management Rules",
        "list": [
          "<strong>Position Size:</strong> Never risk more than 1-2% of portfolio per trade",
          "<strong>Stop Loss:</strong> ALWAYS set a stop loss before entering - no exceptions",
          "<strong>Risk/Reward:</strong> Only take trades with minimum 1:2 R/R ratio",
          "<strong>Don't Overtrade:</strong> Quality over quantity - fewer better trades",
          "<strong>Trading Journal:</strong> Record every trade - learn from mistakes",
          "<strong>Cut Losses:</strong> Let winners run, cut losers fast"
        ]
      },
      "warn": {
        "title": "Psychology & Discipline",
        "list": [
          "Emotions are your enemy - stick to your plan",
          "FOMO kills accounts - missing a trade is fine",
          "Don't revenge trade after a loss - take a break",
          "Accept that losses are part of trading - manage them, don't avoid them",
          "Demo trade first - real money changes psychology",
          "Start small - scale up as you prove yourself"
        ]
      }
    },
    "es": {
      "p1": "Ahora que has completado nuestro tutorial de análisis técnico crypto, es hora de combinar todo en <strong class=\"text-white\">estrategias de trading accionables</strong>. Una estrategia de trading combina herramientas técnicas en un enfoque sistemático para entrar y salir de posiciones. La mejor estrategia es la que puedes ejecutar consistentemente con disciplina. No hay santo grial - la gestión de riesgo es lo que hace rentables a los traders. Esta sección de nuestro curso de análisis técnico crypto te mostrará estrategias probadas usadas por traders profesionales.",
      "strats": {
        "title": "Estrategias Populares",
        "trend": {"title": "Seguir Tendencia", "desc": "Monta la ola. Entrada: retroceso a MA o línea tendencia. Confirma con RSI > 50. Stop: bajo swing low. Salida: ruptura de línea."},
        "range": {"title": "Trading de Rango", "desc": "Compra soporte, vende resistencia. Entrada: cerca de soporte con RSI < 40. Objetivo: resistencia. Stop: bajo soporte."},
        "breakout": {"title": "Trading de Ruptura", "desc": "Opera movimientos fuertes. Setup: consolidación en resistencia. Entrada: ruptura con volumen. Confirma: retest aguanta."}
      },
      "types": {
        "title": "Estilos de Trading por Temporalidad",
        "items": [
          {"title": "Scalping", "desc": "Gráficos 1m-5m. Objetivo 0.5-1% por trade. Muchos trades al día. Requiere alta liquidez y ejecución rápida. Muy estresante."},
          {"title": "Day Trading", "desc": "Gráficos 15m-1h. Cierra todas las posiciones el mismo día. Objetivo 1-3% por trade. Requiere atención tiempo completo."},
          {"title": "Swing Trading", "desc": "Gráficos 4h-Diario. Mantén por días a semanas. Menos estresante, menos trades. Bueno para quien tiene trabajo."},
          {"title": "Position Trading", "desc": "Gráficos Semanal-Mensual. Mantén por semanas a meses. Basado en análisis macro. Menor estrés, requiere paciencia."}
        ]
      },
      "example": {
        "title": "Reglas de Gestión de Riesgo",
        "list": [
          "<strong>Tamaño de Posición:</strong> Nunca arriesgues más del 1-2% del portafolio por trade",
          "<strong>Stop Loss:</strong> SIEMPRE configura un stop loss antes de entrar - sin excepciones",
          "<strong>Riesgo/Beneficio:</strong> Solo toma trades con ratio mínimo 1:2 R/R",
          "<strong>No Sobreoperes:</strong> Calidad sobre cantidad - menos trades mejores",
          "<strong>Diario de Trading:</strong> Registra cada trade - aprende de errores",
          "<strong>Corta Pérdidas:</strong> Deja correr ganadores, corta perdedores rápido"
        ]
      },
      "warn": {
        "title": "Psicología y Disciplina",
        "list": [
          "Las emociones son el enemigo - apégate a tu plan",
          "El FOMO mata cuentas - perderse un trade está bien",
          "No operes por venganza tras una pérdida - toma un descanso",
          "Acepta que las pérdidas son parte del trading - gestiónales, no las evites",
          "Opera primero en demo - el dinero real cambia la psicología",
          "Empieza pequeño - escala conforme te demuestres a ti mismo"
        ]
      }
    }
  }$$
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 7: FAQs
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'technical-analysis', 
  'faqs', 
  7, 
  '{"en": "Technical Analysis FAQs", "es": "FAQs de Análisis Técnico"}', 
  '{"en": "Common questions about TA", "es": "Preguntas frecuentes sobre AT"}',
  $${
    "en": {
      "p1": "Answers to the most common questions about technical analysis and trading.",
      "faqs": {
        "title": "Frequently Asked Questions",
        "items": [
          {"title": "Does technical analysis actually work?", "desc": "Yes, but not like a crystal ball. TA gives you probabilities, not certainties. When combined with proper risk management, TA helps traders make informed decisions. Many professional traders use it successfully."},
          {"title": "How long does it take to learn TA?", "desc": "Basics: 1-2 months to understand. Competence: 6-12 months of consistent study and practice. Proficiency: 2-3 years of real trading experience. Keep learning constantly."},
          {"title": "Which indicator is the best?", "desc": "None. Every indicator has strengths and weaknesses. The best approach combines multiple indicators with price action. Popular combinations: MA + RSI + Volume, or Price Action + MACD."},
          {"title": "Should I use TA alone or with fundamental analysis?", "desc": "Both complement each other. Fundamentals help you choose WHAT to trade, TA helps you choose WHEN to enter/exit. For crypto, also consider on-chain metrics."},
          {"title": "Why do I keep losing with TA?", "desc": "Common reasons: Poor risk management (no stops), trading against the trend, overtrading, using too many indicators, revenge trading, not waiting for confirmation. Psychology is usually the issue."},
          {"title": "What's the best timeframe?", "desc": "Depends on your lifestyle and personality. Beginners should start with 4h or Daily - less noise, clearer signals. Scalping is NOT recommended for beginners."},
          {"title": "Can I make money day trading crypto?", "desc": "It's extremely difficult. Studies show 70-90% of day traders lose money. Most profitable traders are swing or position traders. Consider it full-time work requiring significant capital."},
          {"title": "What platform should I use for charting?", "desc": "TradingView is the industry standard - free tier is great for beginners. Coinglass for funding/liquidation data. Glassnode for on-chain metrics."},
          {"title": "How much capital do I need to start?", "desc": "Start with what you can afford to lose - seriously. $500-1000 is enough to learn. Don't add more until you're consistently profitable on demo/small accounts."},
          {"title": "Is TA different for crypto vs stocks?", "desc": "The same principles apply, but crypto has: 24/7 markets (no gaps), higher volatility, more manipulation in small caps, funding rates for perpetuals. Adjust accordingly."}
        ]
      }
    },
    "es": {
      "p1": "Respuestas a las preguntas más comunes sobre análisis técnico y trading.",
      "faqs": {
        "title": "Preguntas Frecuentes",
        "items": [
          {"title": "¿Funciona realmente el análisis técnico?", "desc": "Sí, pero no como bola de cristal. El AT te da probabilidades, no certezas. Combinado con gestión de riesgo, ayuda a tomar decisiones informadas. Muchos profesionales lo usan exitosamente."},
          {"title": "¿Cuánto tiempo toma aprender AT?", "desc": "Básicos: 1-2 meses para entender. Competencia: 6-12 meses de estudio y práctica consistente. Dominio: 2-3 años de trading real. Sigue aprendiendo constantemente."},
          {"title": "¿Cuál es el mejor indicador?", "desc": "Ninguno. Cada indicador tiene fortalezas y debilidades. Lo mejor combina múltiples indicadores con acción del precio. Combos populares: MA + RSI + Volumen, o Acción de Precio + MACD."},
          {"title": "¿Debo usar AT solo o con análisis fundamental?", "desc": "Ambos se complementan. El fundamental te ayuda a elegir QUÉ operar, el AT cuándo entrar/salir. Para crypto, también considera métricas on-chain."},
          {"title": "¿Por qué sigo perdiendo con AT?", "desc": "Razones comunes: Mala gestión de riesgo (sin stops), operar contra tendencia, sobreoperar, usar demasiados indicadores, trading de venganza, no esperar confirmación. La psicología suele ser el problema."},
          {"title": "¿Cuál es la mejor temporalidad?", "desc": "Depende de tu estilo de vida y personalidad. Principiantes deberían empezar con 4h o Diario - menos ruido, señales más claras. El scalping NO se recomienda para principiantes."},
          {"title": "¿Puedo ganar dinero haciendo day trading de crypto?", "desc": "Es extremadamente difícil. Estudios muestran que 70-90% de day traders pierden dinero. La mayoría de traders rentables son swing o position. Considéralo trabajo tiempo completo."},
          {"title": "¿Qué plataforma debo usar para gráficos?", "desc": "TradingView es el estándar de la industria - el plan gratis es genial para principiantes. Coinglass para datos de funding/liquidaciones. Glassnode para métricas on-chain."},
          {"title": "¿Cuánto capital necesito para empezar?", "desc": "Empieza con lo que puedas permitirte perder - en serio. $500-1000 es suficiente para aprender. No añadas más hasta ser consistentemente rentable en demo/cuentas pequeñas."},
          {"title": "¿Es diferente el AT para crypto vs acciones?", "desc": "Los mismos principios aplican, pero crypto tiene: mercados 24/7 (sin gaps), mayor volatilidad, más manipulación en caps pequeños, funding rates en perpetuos. Ajusta en consecuencia."}
        ]
      }
    }
  }$$
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;
