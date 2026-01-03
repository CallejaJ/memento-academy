"use client"

import { useState } from "react"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, BarChart3, LineChart, Activity, Brain, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionCompleteButton } from "@/components/progress/section-complete-button"
import { useParams } from "next/navigation"
import { CardContent } from "@/components/ui/card"

const translations = {
  en: {
    badge: "🔒 Premium Course",
    title: "Technical Analysis",
    desc: "Master the art of reading charts and predicting market movements. Learn indicators, patterns, and trading strategies used by professional traders.",
    modules: "Modules",
    level: "Level",
    duration: "Duration",
    level_val: "Advanced",
    back: "← Back to Courses",
    curriculum: "Course Curriculum",
    cta: {
      title: "Start Trading Like a Pro",
      desc: "Technical analysis is both an art and a science. Practice on demo accounts before risking real money.",
      track: "Track Your Progress →"
    },
    sections: {
      1: {
        title: "Chart Reading Basics",
        sub: "Understanding price action",
        p1: "<strong class=\"text-white\">Technical Analysis</strong> is the study of historical price and volume data to predict future market movements. Unlike fundamental analysis, TA focuses solely on chart patterns.",
        types: {
          title: "📊 Chart Types",
          line: { title: "Line Charts", desc: "Simple price over time. Good for beginners.", best: "✓ Best for: Trend spotting" },
          candle: { title: "Candlestick Charts", desc: "Shows OHLC (Open, High, Low, Close)", best: "✓ Best for: Pattern recognition" },
          heikin: { title: "Heikin-Ashi", desc: "Smoothed candlesticks, less noise", best: "✓ Best for: Trend confirmation" }
        },
        candles: {
          title: "Understanding Candlesticks",
          bull: { title: "Bullish Candle (Green)", list: ["Close > Open", "Buyers in control", "Price moved up"] },
          bear: { title: "Bearish Candle (Red)", list: ["Close < Open", "Sellers in control", "Price moved down"] }
        },
        timeframes: {
          title: "Timeframes",
          desc: "Different timeframes suit different styles:",
          list: [
            "<strong class=\"text-white\">1m - 5m:</strong> Scalping (very short-term)",
            "<strong class=\"text-white\">15m - 1h:</strong> Day trading",
            "<strong class=\"text-white\">4h - Daily:</strong> Swing trading",
            "<strong class=\"text-white\">Weekly - Monthly:</strong> Position trading (long-term)"
          ]
        }
      },
      2: {
        title: "Support, Resistance & Trends",
        sub: "Key price levels and directions",
        p1: "<strong class=\"text-white\">Support and Resistance</strong> are horizontal price levels where buying or selling pressure historically occurs. These levels act as psychological barriers.",
        sr: {
          sup: { title: "📈 Support", desc: "Price level where buying interest prevents further decline", list: ["Acts as a \"floor\"", "Buyers step in", "If broken, becomes resistance", "Ex: BTC bouncing at $30k"] },
          res: { title: "📉 Resistance", desc: "Price level where selling pressure prevents further rise", list: ["Acts as a \"ceiling\"", "Sellers step in", "If broken, becomes support", "Ex: ETH rejected at $2k"] }
        },
        trends: {
          title: "📐 Trend Lines",
          up: { title: "Uptrend (Higher Highs, Higher Lows)", desc: "Draw line connecting rising lows. Stay long above the line." },
          down: { title: "Downtrend (Lower Highs, Lower Lows)", desc: "Draw line connecting falling highs. Stay short below the line." },
          side: { title: "Sideways (Range-bound)", desc: "Price oscillates between support and resistance. Buy low, sell high within range." }
        },
        tips: {
          title: "💡 Pro Tips",
          list: [
            "The more times a level is tested, the stronger it is",
            "When support breaks, it often becomes resistance (and vice versa)",
            "Round numbers (e.g., $1000, $50k) often act as psychological levels",
            "Volume confirms breakouts - high volume = strong move"
          ]
        }
      },
      3: {
        title: "Technical Indicators",
        sub: "RSI, MACD, Moving Averages",
        p1: "<strong class=\"text-white\">Technical Indicators</strong> are mathematical calculations based on price/volume that help identify trends, momentum, and reversal points.",
        ma: {
          title: "📊 Moving Averages",
          desc: "Smooth out price action to identify trends",
          list: [
             "<strong class=\"text-white\">SMA (Simple):</strong> Average of prices",
             "<strong class=\"text-white\">EMA (Exponential):</strong> Reacts faster",
             "<strong class=\"text-white\">Golden Cross:</strong> 50 MA crosses above 200 MA (bullish)",
             "<strong class=\"text-white\">Death Cross:</strong> 50 MA crosses below 200 MA (bearish)"
          ]
        },
        rsi: {
          title: "⚡ RSI (Relative Strength Index)",
          desc: "Measures momentum on 0-100 scale",
          list: [
            "<strong class=\"text-white\">Above 70:</strong> Overbought - potential sell",
            "<strong class=\"text-white\">Below 30:</strong> Oversold - potential buy",
            "<strong class=\"text-white\">Divergence:</strong> Price high but RSI lower (bearish)",
            "Period: Usually 14 candles"
          ]
        },
        macd: {
          title: "📈 MACD",
          desc: "Shows relationship between two moving averages",
          line: "MACD Line: 12 EMA - 26 EMA",
          sig: "Signal Line: 9 EMA of MACD",
          hist: "Histogram: MACD - Signal",
          signal: "<strong class=\"text-white\">Signal:</strong> Cross above signal line = Buy, below = Sell"
        },
        notes: {
          title: "⚠️ Important Notes",
          list: [
            "Never use a single indicator alone",
            "Indicators lag price",
            "Customize settings for different assets"
          ]
        }
      },
      4: {
        title: "Chart Patterns",
        sub: "Recognizing formations",
        p1: "<strong class=\"text-white\">Chart Patterns</strong> are visual formations created by price movements that often predict future direction.",
        rev: {
          title: "🔻 Reversal Patterns",
          hs: { title: "Head and Shoulders", desc: "Three peaks: middle is highest. Indicates trend reversal to bearish.", trade: "Sell when neckline breaks" },
          double: { title: "Double Top / Bottom", desc: "Two peaks/troughs at same level. Failed attempt to break level.", trade: "Confirm with volume" }
        },
        cont: {
          title: "🔄 Continuation Patterns",
          tri: { title: "Triangles", desc: "Ascending (bullish), Descending (bearish), Symmetrical (wait for breakout)" },
          flag: { title: "Flags & Pennants", desc: "Short consolidation after strong move. Usually continues trend." }
        },
        candles: {
          title: "🕯️ Candlestick Patterns",
          list: [
            "<strong class=\"text-white\">Doji:</strong> Indecision", "<strong class=\"text-white\">Hammer:</strong> Bullish reversal",
            "<strong class=\"text-white\">Shooting Star:</strong> Bearish reversal", "<strong class=\"text-white\">Engulfing:</strong> Large candle engulfs previous",
            "<strong class=\"text-white\">Morning Star:</strong> Bullish reversal", "<strong class=\"text-white\">Evening Star:</strong> Bearish reversal"
          ]
        }
      },
      5: {
        title: "Volume Analysis",
        sub: "Confirming price movements",
        p1: "<strong class=\"text-white\">Volume</strong> is the number of tokens traded. It's a crucial confirmation tool - price moves with high volume are more significant.",
        principles: {
          title: "📊 Volume Principles",
          up_up: "Uptrend + Rising Volume: Strong trend",
          up_down: "Uptrend + Falling Volume: Weakening trend",
          break_high: "Breakout + High Volume: Valid breakout",
          break_low: "Breakout + Low Volume: False breakout"
        },
        spikes: {
          title: "📈 Volume Spikes",
          desc: "Sudden large increase indicates:",
          list: ["Institutional money entering/exiting", "News/Event", "Potential reversal", "Watch for consolidation"]
        },
        obv: {
          title: "📊 OBV (On-Balance Volume)",
          desc: "Cumulative indicator showing volume flow. Divergence with price signals reversal."
        },
        crypto: {
          title: "💡 Crypto-Specific Notes",
          list: ["24/7 markets = volume spread out", "Wash trading is common - verify sources", "Low volume coins easy to manipulate"]
        }
      },
      6: {
        title: "Trading Strategies",
        sub: "Putting it all together",
        p1: "<strong class=\"text-white\">A trading strategy</strong> combines tools to create a system for entering and exiting. Consistency is key.",
        trend: { title: "📈 Trend Following", desc: "Ride the trend", list: ["Entry: Pullback to MA", "Confirm: RSI > 50", "Stop: Below swing low", "Exit: Trend line break"] },
        range: { title: "🔄 Range Trading", desc: "Buy support, sell resistance", list: ["Entry: Near support, RSI < 40", "Target: Resistance", "Stop: Below support", "Best: Sideways markets"] },
        breakout: { title: "💥 Breakout Trading", desc: "Trade strong breakouts", list: ["Setup: Consolidation near resistance", "Entry: Break + Volume", "Confirm: Retest holds", "Risk: False breakouts"] },
        scalp: { title: "🎯 Scalping", desc: "Quick trades", list: ["Time: 1m-5m charts", "Target: 0.5-1% profit", "Volume: High liquidity needed", "Note: High stress"] },
        risk: {
          title: "⚠️ Risk Management Rules",
          list: [
            "Never risk more than 1-2% per trade",
            "Always set stop losses",
            "Risk/Reward minimum 1:2",
            "Don't overtrade",
            "Keep a trading journal",
            "Psychology is key"
          ]
        },
        final: {
          title: "🎓 Final Thoughts",
          desc: "TA takes time to master. Start with demo trading, backtest, and be patient. Focus on win rate and risk management."
        }
      }
    }
  },
  es: {
    badge: "🔒 Curso Premium",
    title: "Análisis Técnico",
    desc: "Domina el arte de leer gráficos y predecir movimientos de mercado. Aprende indicadores, patrones y estrategias de trading usadas por profesionales.",
    modules: "Módulos",
    level: "Nivel",
    duration: "Duración",
    level_val: "Avanzado",
    back: "← Volver a Cursos",
    curriculum: "Plan de Estudios",
    cta: {
      title: "Empieza a Operar como un Pro",
      desc: "El análisis técnico es arte y ciencia. Practica en cuentas demo antes de arriesgar dinero real.",
      track: "Sigue tu Progreso →"
    },
    sections: {
      1: {
        title: "Conceptos Básicos de Gráficos",
        sub: "Entendiendo la acción del precio",
        p1: "El <strong class=\"text-white\">Análisis Técnico</strong> es el estudio de datos históricos de precio y volumen para predecir movimientos futuros. A diferencia del fundamental, el AT se enfoca solo en patrones de gráficos.",
        types: {
          title: "📊 Tipos de Gráficos",
          line: { title: "Gráficos de Línea", desc: "Precio simple en el tiempo. Bueno para principiantes.", best: "✓ Mejor para: Identificar tendencias" },
          candle: { title: "Gráficos de Velas", desc: "Muestra OHLC (Apertura, Alto, Bajo, Cierre)", best: "✓ Mejor para: Reconocimiento de patrones" },
          heikin: { title: "Heikin-Ashi", desc: "Velas suavizadas, menos ruido", best: "✓ Mejor para: Confirmar tendencias" }
        },
        candles: {
          title: "Entendiendo las Velas",
          bull: { title: "Vela Alcista (Verde)", list: ["Cierre > Apertura", "Compradores en control", "Precio subió"] },
          bear: { title: "Vela Bajista (Roja)", list: ["Cierre < Apertura", "Vendedores en control", "Precio bajó"] }
        },
        timeframes: {
          title: "Temporalidades (Timeframes)",
          desc: "Diferentes marcos temporales para diferentes estilos:",
          list: [
            "<strong class=\"text-white\">1m - 5m:</strong> Scalping (muy corto plazo)",
            "<strong class=\"text-white\">15m - 1h:</strong> Day trading (intradía)",
            "<strong class=\"text-white\">4h - Diario:</strong> Swing trading",
            "<strong class=\"text-white\">Semanal - Mensual:</strong> Inversión a largo plazo"
          ]
        }
      },
      2: {
        title: "Soporte, Resistencia y Tendencias",
        sub: "Niveles clave y direcciones",
        p1: "<strong class=\"text-white\">Soporte y Resistencia</strong> son niveles horizontales donde históricamente ocurre presión de compra o venta. Actúan como barreras psicológicas.",
        sr: {
          sup: { title: "📈 Soporte", desc: "Nivel donde el interés de compra previene caídas", list: ["Actúa como \"piso\"", "Entran compradores", "Si se rompe, se vuelve resistencia", "Ej: BTC rebotando en $30k"] },
          res: { title: "📉 Resistencia", desc: "Nivel donde la presión de venta previene subidas", list: ["Actúa como \"techo\"", "Entran vendedores", "Si se rompe, se vuelve soporte", "Ej: ETH rechazado en $2k"] }
        },
        trends: {
          title: "📐 Líneas de Tendencia",
          up: { title: "Alcista (Altos más altos, Bajos más altos)", desc: "Dibuja línea uniendo bajos ascendentes. Mantén largos sobre la línea." },
          down: { title: "Bajista (Altos más bajos, Bajos más bajos)", desc: "Dibuja línea uniendo altos descendentes. Mantén cortos bajo la línea." },
          side: { title: "Lateral (Rango)", desc: "El precio oscila entre soporte y resistencia. Compra bajo, vende alto en el rango." }
        },
        tips: {
          title: "💡 Tips Pro",
          list: [
            "Mientras más veces se prueba un nivel, más fuerte es",
            "Cuando un soporte rompe, a menudo se vuelve resistencia (y viceversa)",
            "Números redondos ($1000, $50k) suelen ser niveles psicológicos",
            "El volumen confirma rupturas - alto volumen = movimiento fuerte"
          ]
        }
      },
      3: {
        title: "Indicadores Técnicos",
        sub: "RSI, MACD, Medias Móviles",
        p1: "<strong class=\"text-white\">Indicadores Técnicos</strong> son cálculos matemáticos basados en precio/volumen para identificar tendencias, momentum y reversiones.",
        ma: {
          title: "📊 Medias Móviles (MA)",
          desc: "Suavizan la acción del precio para ver tendencias",
          list: [
             "<strong class=\"text-white\">SMA (Simple):</strong> Promedio de precios",
             "<strong class=\"text-white\">EMA (Exponencial):</strong> Reacciona más rápido",
             "<strong class=\"text-white\">Cruce Dorado:</strong> MA 50 cruza sobre MA 200 (alcista)",
             "<strong class=\"text-white\">Cruce de la Muerte:</strong> MA 50 cruza bajo MA 200 (bajista)"
          ]
        },
        rsi: {
          title: "⚡ RSI (Índice de Fuerza Relativa)",
          desc: "Mide momentum en escala 0-100",
          list: [
            "<strong class=\"text-white\">Sobre 70:</strong> Sobrecompra - venta potencial",
            "<strong class=\"text-white\">Bajo 30:</strong> Sobreventa - compra potencial",
            "<strong class=\"text-white\">Divergencia:</strong> Precio alto pero RSI bajo (bajista)",
            "Periodo: Usualmente 14 velas"
          ]
        },
        macd: {
          title: "📈 MACD",
          desc: "Relación entre dos medias móviles",
          line: "Línea MACD: EMA 12 - EMA 26",
          sig: "Línea Señal: EMA 9 del MACD",
          hist: "Histograma: MACD - Señal",
          signal: "<strong class=\"text-white\">Señal:</strong> Cruce sobre línea señal = Compra, bajo = Venta"
        },
        notes: {
          title: "⚠️ Notas Importantes",
          list: [
            "Nunca uses un solo indicador aislado",
            "Los indicadores tienen lag (retraso)",
            "Personaliza configuraciones por activo"
          ]
        }
      },
      4: {
        title: "Patrones de Gráfico",
        sub: "Reconociendo formaciones",
        p1: "<strong class=\"text-white\">Patrones de Gráfico</strong> son formaciones visuales que a menudo predicen la dirección futura.",
        rev: {
          title: "🔻 Patrones de Reversión",
          hs: { title: "Hombro-Cabeza-Hombro", desc: "Tres picos: medio más alto. Indica cambio a bajista.", trade: "Vender al romper línea de cuello" },
          double: { title: "Doble Techo / Suelo", desc: "Dos picos/valles al mismo nivel. Intento fallido de romper.", trade: "Confirmar con volumen" }
        },
        cont: {
          title: "🔄 Patrones de Continuación",
          tri: { title: "Triángulos", desc: "Ascendente (alcista), Descendente (bajista), Simétrico (esperar ruptura)" },
          flag: { title: "Banderas y Banderines", desc: "Consolidación corta tras movimiento fuerte. Usualmente sigue tendencia." }
        },
        candles: {
          title: "🕯️ Patrones de Velas",
          list: [
            "<strong class=\"text-white\">Doji:</strong> Indecisión", "<strong class=\"text-white\">Martillo:</strong> Reversión alcista",
            "<strong class=\"text-white\">Estrella Fugaz:</strong> Reversión bajista", "<strong class=\"text-white\">Envolvente:</strong> Vela grande cubre anterior",
            "<strong class=\"text-white\">Estrella Mañana:</strong> Reversión alcista", "<strong class=\"text-white\">Estrella Tarde:</strong> Reversión bajista"
          ]
        }
      },
      5: {
        title: "Análisis de Volumen",
        sub: "Confirmando movimientos",
        p1: "El <strong class=\"text-white\">Volumen</strong> es la cantidad operada. Es una herramienta clave de confirmación - movimientos con alto volumen son más significativos.",
        principles: {
          title: "📊 Principios de Volumen",
          up_up: "Tendencia Alcista + Volumen Creciente: Tendencia fuerte",
          up_down: "Tendencia Alcista + Volumen Bajando: Tendencia debilitándose",
          break_high: "Ruptura + Alto Volumen: Ruptura válida",
          break_low: "Ruptura + Bajo Volumen: Ruptura falsa"
        },
        spikes: {
          title: "📈 picos de Volumen",
          desc: "Incremento repentino indica:",
          list: ["Entrada/Salida institucional", "Noticias/Eventos", "Posible reversión", "Observar consolidación"]
        },
        obv: {
          title: "📊 OBV (On-Balance Volume)",
          desc: "Indicador acumulativo. La divergencia con el precio señala reversiones."
        },
        crypto: {
          title: "💡 Notas Cripto",
          list: ["Mercados 24/7 = volumen disperso", "Wash trading común - verificar fuentes", "Monedas de bajo volumen fáciiles de manipular"]
        }
      },
      6: {
        title: "Estrategias de Trading",
        sub: "Juntando todo",
        p1: "<strong class=\"text-white\">Una estrategia</strong> combina herramientas para crear un sistema de entrada y salida con disciplina.",
        trend: { title: "📈 Seguimiento de Tenencia", desc: "Monta la tendencia", list: ["Entrada: Retroceso a MA", "Confirmar: RSI > 50", "Stop: Bajo swing low", "Salida: Ruptura línea tendencia"] },
        range: { title: "🔄 Trading de Rango", desc: "Compra soporte, vende resistencia", list: ["Entrada: Cerca soporte, RSI < 40", "Objetivo: Resistencia", "Stop: Bajo soporte", "Mejor: Mercados laterales"] },
        breakout: { title: "💥 Trading de Ruptura", desc: "Opera quiebres fuertes", list: ["Setup: Consolidación en resistencia", "Entrada: Ruptura + Volumen", "Confirmar: Retest aguanta", "Riesgo: Falsas rupturas"] },
        scalp: { title: "🎯 Scalping", desc: "Operaciones rápidas", list: ["Tiempo: 1m-5m", "Objetivo: 0.5-1% ganancia", "Volumen: Alta liquidez necesaria", "Nota: Alto estrés"] },
        risk: {
          title: "⚠️ Reglas de Gestión de Riesgo",
          list: [
            "Nunca arriesgues más del 1-2% por trade",
            "Siempre usa Stop Loss",
            "Riesgo/Beneficio mínimo 1:2",
            "No sobreoperes",
            "Mantén diario de trading",
            "La psicología es clave"
          ]
        },
        final: {
          title: "🎓 Pensamientos Finales",
          desc: "El AT toma tiempo. Empieza con demo, haz backtesting y sé paciente. Enfócate en gestión de riesgo."
        }
      }
    }
  }
}

export default function TechnicalAnalysisPage() {
  const { lng } = useParams<{ lng: string }>()
  const t = translations[lng as keyof typeof translations] || translations.en
  const [expandedSections, setExpandedSections] = useState<number[]>([0])

  const toggleSection = (index: number) => {
    setExpandedSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <MainNav lng={lng} />
      
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-green-500/10 text-green-400 border-green-500/20">
              {t.badge}
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                {t.title}
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {t.desc}
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-green-400">6</div>
                <div className="text-sm text-slate-400">{t.modules}</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-emerald-400">{t.level_val}</div>
                <div className="text-sm text-slate-400">{t.level}</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-teal-400">~4h</div>
                <div className="text-sm text-slate-400">{t.duration}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link href={`/${lng}/courses`}>
                <Button variant="outline" className="border-slate-700 text-slate-300 hover:text-white">
                  {t.back}
                </Button>
              </Link>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">{t.curriculum}</h2>

            <div className="relative pl-8 space-y-4">
              
              {/* Section 1 */}
              <div className="relative group">
                <div className={`absolute -left-[19px] top-6 w-3 h-3 rounded-full border z-10 transition-all ${
                  expandedSections.includes(0) ? 'bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50' : 'bg-slate-700 border-slate-600'
                }`} />
                <div className="absolute -left-[14px] top-9 w-0.5 h-full bg-slate-800" />
                
                <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all ml-4">
                  <div className="p-4 flex items-center justify-between cursor-pointer" onClick={() => toggleSection(0)}>
                    <div className="flex items-center gap-3">
                      <BarChart3 className="w-5 h-5 text-green-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">1. {t.sections[1].title}</h3>
                        <p className="text-sm text-slate-400">{t.sections[1].sub}</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${expandedSections.includes(0) ? 'rotate-180' : ''}`} />
                  </div>

                  {expandedSections.includes(0) && (
                    <div className="px-6 pb-6">
                      <div className="space-y-4 text-slate-300">
                        <p className="text-lg" dangerouslySetInnerHTML={{ __html: t.sections[1].p1 }} />

                        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-5">
                          <h4 className="text-green-400 font-semibold mb-3">{t.sections[1].types.title}</h4>
                          <div className="grid md:grid-cols-3 gap-3">
                            <div className="bg-slate-800/50 rounded p-3">
                              <h5 className="text-white font-semibold text-sm mb-2">{t.sections[1].types.line.title}</h5>
                              <p className="text-xs text-slate-400 mb-2">{t.sections[1].types.line.desc}</p>
                              <p className="text-xs text-green-400">{t.sections[1].types.line.best}</p>
                            </div>
                            <div className="bg-slate-800/50 rounded p-3">
                              <h5 className="text-white font-semibold text-sm mb-2">{t.sections[1].types.candle.title}</h5>
                              <p className="text-xs text-slate-400 mb-2">{t.sections[1].types.candle.desc}</p>
                              <p className="text-xs text-green-400">{t.sections[1].types.candle.best}</p>
                            </div>
                            <div className="bg-slate-800/50 rounded p-3">
                              <h5 className="text-white font-semibold text-sm mb-2">{t.sections[1].types.heikin.title}</h5>
                              <p className="text-xs text-slate-400 mb-2">{t.sections[1].types.heikin.desc}</p>
                              <p className="text-xs text-green-400">{t.sections[1].types.heikin.best}</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                          <h5 className="text-blue-400 font-semibold mb-2">{t.sections[1].candles.title}</h5>
                          <div className="grid md:grid-cols-2 gap-3 text-sm">
                            <div>
                              <p className="text-white font-semibold mb-2">{t.sections[1].candles.bull.title}</p>
                              <ul className="text-xs text-slate-400 space-y-1">
                                {t.sections[1].candles.bull.list.map((item, i) => <li key={i}>• {item}</li>)}
                              </ul>
                            </div>
                            <div>
                              <p className="text-white font-semibold mb-2">{t.sections[1].candles.bear.title}</p>
                              <ul className="text-xs text-slate-400 space-y-1">
                                {t.sections[1].candles.bear.list.map((item, i) => <li key={i}>• {item}</li>)}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                          <h5 className="text-cyan-400 font-semibold mb-2">{t.sections[1].timeframes.title}</h5>
                          <p className="text-sm mb-2">{t.sections[1].timeframes.desc}</p>
                          <ul className="text-sm space-y-1">
                            {t.sections[1].timeframes.list.map((item, i) => <li key={i}>• <span dangerouslySetInnerHTML={{ __html: item }} /></li>)}
                          </ul>
                        </div>
                        
                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton courseId="technical-analysis" sectionId="section-1" sectionNumber={1} totalSections={6} lng={lng} />
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </div>

              {/* Section 2 */}
              <div className="relative group">
                <div className={`absolute -left-[19px] top-6 w-3 h-3 rounded-full border z-10 transition-all ${
                  expandedSections.includes(1) ? 'bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50' : 'bg-slate-700 border-slate-600'
                }`} />
                <div className="absolute -left-[14px] top-9 w-0.5 h-full bg-slate-800" />
                
                <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all ml-4">
                  <div className="p-4 flex items-center justify-between cursor-pointer" onClick={() => toggleSection(1)}>
                    <div className="flex items-center gap-3">
                      <LineChart className="w-5 h-5 text-emerald-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">2. {t.sections[2].title}</h3>
                        <p className="text-sm text-slate-400">{t.sections[2].sub}</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${expandedSections.includes(1) ? 'rotate-180' : ''}`} />
                  </div>

                  {expandedSections.includes(1) && (
                    <div className="px-6 pb-6">
                      <div className="space-y-4 text-slate-300">
                        <p className="text-lg" dangerouslySetInnerHTML={{ __html: t.sections[2].p1 }} />

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                            <h5 className="text-green-400 font-semibold mb-2">{t.sections[2].sr.sup.title}</h5>  
                            <p className="text-sm mb-2">{t.sections[2].sr.sup.desc}</p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              {t.sections[2].sr.sup.list.map((item, i) => <li key={i}>• {item}</li>)}
                            </ul>
                          </div>
                          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                            <h5 className="text-red-400 font-semibold mb-2">{t.sections[2].sr.res.title}</h5>
                            <p className="text-sm mb-2">{t.sections[2].sr.res.desc}</p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              {t.sections[2].sr.res.list.map((item, i) => <li key={i}>• {item}</li>)}
                            </ul>
                          </div>
                        </div>

                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-5">
                          <h4 className="text-blue-400 font-semibold mb-3">{t.sections[2].trends.title}</h4>
                          <div className="space-y-3 text-sm">
                            <div>
                              <p className="text-white font-semibold">{t.sections[2].trends.up.title}</p>
                              <p className="text-xs text-slate-400">{t.sections[2].trends.up.desc}</p>
                            </div>
                            <div>
                              <p className="text-white font-semibold">{t.sections[2].trends.down.title}</p>
                              <p className="text-xs text-slate-400">{t.sections[2].trends.down.desc}</p>
                            </div>
                            <div>
                              <p className="text-white font-semibold">{t.sections[2].trends.side.title}</p>
                              <p className="text-xs text-slate-400">{t.sections[2].trends.side.desc}</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                          <h5 className="text-yellow-400 font-semibold mb-2 flex items-center gap-2">{t.sections[2].tips.title}</h5>
                          <ul className="text-sm space-y-1">
                            {t.sections[2].tips.list.map((item, i) => <li key={i}>• {item}</li>)}
                          </ul>
                        </div>
                        
                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton courseId="technical-analysis" sectionId="section-2" sectionNumber={2} totalSections={6} lng={lng} />
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </div>

              {/* Section 3 */}
              <div className="relative group">
                <div className={`absolute -left-[19px] top-6 w-3 h-3 rounded-full border z-10 transition-all ${
                  expandedSections.includes(2) ? 'bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50' : 'bg-slate-700 border-slate-600'
                }`} />
                <div className="absolute -left-[14px] top-9 w-0.5 h-full bg-slate-800" />
                
                <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all ml-4">
                  <div className="p-4 flex items-center justify-between cursor-pointer" onClick={() => toggleSection(2)}>
                    <div className="flex items-center gap-3">
                      <Activity className="w-5 h-5 text-purple-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">3. {t.sections[3].title}</h3>
                        <p className="text-sm text-slate-400">{t.sections[3].sub}</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${expandedSections.includes(2) ? 'rotate-180' : ''}`} />
                  </div>

                  {expandedSections.includes(2) && (
                    <div className="px-6 pb-6">
                      <div className="space-y-4 text-slate-300">
                        <p className="text-lg" dangerouslySetInnerHTML={{ __html: t.sections[3].p1 }} />

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                            <h5 className="text-purple-400 font-semibold mb-2">{t.sections[3].ma.title}</h5>
                            <p className="text-sm mb-2">{t.sections[3].ma.desc}</p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              {t.sections[3].ma.list.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: `• ${item}` }} />)}
                            </ul>
                          </div>
                          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                            <h5 className="text-blue-400 font-semibold mb-2">{t.sections[3].rsi.title}</h5>
                            <p className="text-sm mb-2">{t.sections[3].rsi.desc}</p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              {t.sections[3].rsi.list.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: `• ${item}` }} />)}
                            </ul>
                          </div>
                        </div>

                        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-5">
                          <h4 className="text-green-400 font-semibold mb-3">{t.sections[3].macd.title}</h4>
                          <p className="text-sm mb-3">{t.sections[3].macd.desc}</p>
                          <div className="grid md:grid-cols-3 gap-3 text-xs">
                            <div className="bg-slate-800/50 rounded p-2 text-slate-400">{t.sections[3].macd.line}</div>
                            <div className="bg-slate-800/50 rounded p-2 text-slate-400">{t.sections[3].macd.sig}</div>
                            <div className="bg-slate-800/50 rounded p-2 text-slate-400">{t.sections[3].macd.hist}</div>
                          </div>
                          <p className="text-sm mt-3" dangerouslySetInnerHTML={{ __html: t.sections[3].macd.signal }} />
                        </div>

                        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                          <h5 className="text-yellow-400 font-semibold mb-2">{t.sections[3].notes.title}</h5>
                          <ul className="text-sm space-y-1">
                            {t.sections[3].notes.list.map((item, i) => <li key={i}>• {item}</li>)}
                          </ul>
                        </div>
                        
                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton courseId="technical-analysis" sectionId="section-3" sectionNumber={3} totalSections={6} lng={lng} />
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </div>

              {/* Section 4 */}
              <div className="relative group">
                <div className={`absolute -left-[19px] top-6 w-3 h-3 rounded-full border z-10 transition-all ${
                  expandedSections.includes(3) ? 'bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50' : 'bg-slate-700 border-slate-600'
                }`} />
                <div className="absolute -left-[14px] top-9 w-0.5 h-full bg-slate-800" />
                
                <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all ml-4">
                  <div className="p-4 flex items-center justify-between cursor-pointer" onClick={() => toggleSection(3)}>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-pink-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">4. {t.sections[4].title}</h3>
                        <p className="text-sm text-slate-400">{t.sections[4].sub}</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${expandedSections.includes(3) ? 'rotate-180' : ''}`} />
                  </div>

                  {expandedSections.includes(3) && (
                    <div className="px-6 pb-6">
                      <div className="space-y-4 text-slate-300">
                        <p className="text-lg" dangerouslySetInnerHTML={{ __html: t.sections[4].p1 }} />

                        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5">
                          <h4 className="text-red-400 font-semibold mb-3">{t.sections[4].rev.title}</h4>
                          <div className="space-y-3">
                            <div className="bg-slate-800/50 rounded p-3">
                              <h5 className="text-white font-semibold text-sm mb-1">{t.sections[4].rev.hs.title}</h5>
                              <p className="text-xs text-slate-400 mb-2">{t.sections[4].rev.hs.desc}</p>
                              <p className="text-xs text-green-400">{t.sections[4].rev.hs.trade}</p>
                            </div>
                            <div className="bg-slate-800/50 rounded p-3">
                              <h5 className="text-white font-semibold text-sm mb-1">{t.sections[4].rev.double.title}</h5>
                              <p className="text-xs text-slate-400 mb-2">{t.sections[4].rev.double.desc}</p>
                              <p className="text-xs text-green-400">{t.sections[4].rev.double.trade}</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-5">
                          <h4 className="text-blue-400 font-semibold mb-3">{t.sections[4].cont.title}</h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            <div className="bg-slate-800/50 rounded p-3">
                              <h5 className="text-white font-semibold text-sm mb-1">{t.sections[4].cont.tri.title}</h5>
                              <p className="text-xs text-slate-400">{t.sections[4].cont.tri.desc}</p>
                            </div>
                            <div className="bg-slate-800/50 rounded p-3">
                              <h5 className="text-white font-semibold text-sm mb-1">{t.sections[4].cont.flag.title}</h5>
                              <p className="text-xs text-slate-400">{t.sections[4].cont.flag.desc}</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                          <h5 className="text-purple-400 font-semibold mb-2">{t.sections[4].candles.title}</h5>
                          <div className="grid md:grid-cols-3 gap-2 text-xs">
                             {t.sections[4].candles.list.map((item, i) => <div key={i} dangerouslySetInnerHTML={{ __html: item }} />)}
                          </div>
                        </div>
                        
                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton courseId="technical-analysis" sectionId="section-4" sectionNumber={4} totalSections={6} lng={lng} />
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </div>

              {/* Section 5 */}
              <div className="relative group">
                <div className={`absolute -left-[19px] top-6 w-3 h-3 rounded-full border z-10 transition-all ${
                  expandedSections.includes(4) ? 'bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50' : 'bg-slate-700 border-slate-600'
                }`} />
                <div className="absolute -left-[14px] top-9 w-0.5 h-full bg-slate-800" />
                
                <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all ml-4">
                  <div className="p-4 flex items-center justify-between cursor-pointer" onClick={() => toggleSection(4)}>
                    <div className="flex items-center gap-3">
                      <BarChart3 className="w-5 h-5 text-orange-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">5. {t.sections[5].title}</h3>
                        <p className="text-sm text-slate-400">{t.sections[5].sub}</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${expandedSections.includes(4) ? 'rotate-180' : ''}`} />
                  </div>

                  {expandedSections.includes(4) && (
                    <div className="px-6 pb-6">
                      <div className="space-y-4 text-slate-300">
                        <p className="text-lg" dangerouslySetInnerHTML={{ __html: t.sections[5].p1 }} />

                        <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-5">
                          <h4 className="text-orange-400 font-semibold mb-3">{t.sections[5].principles.title}</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex gap-2">
                              <span className="text-green-400">✓</span>
                              <div><strong className="text-white">{t.sections[5].principles.up_up.split(':')[0]}:</strong>{t.sections[5].principles.up_up.split(':')[1]}</div>
                            </div>
                            <div className="flex gap-2">
                              <span className="text-red-400">✗</span>
                                <div><strong className="text-white">{t.sections[5].principles.up_down.split(':')[0]}:</strong>{t.sections[5].principles.up_down.split(':')[1]}</div>
                            </div>
                            <div className="flex gap-2">
                              <span className="text-green-400">✓</span>
                                <div><strong className="text-white">{t.sections[5].principles.break_high.split(':')[0]}:</strong>{t.sections[5].principles.break_high.split(':')[1]}</div>
                            </div>
                            <div className="flex gap-2">
                              <span className="text-red-400">✗</span>
                              <div><strong className="text-white">{t.sections[5].principles.break_low.split(':')[0]}:</strong>{t.sections[5].principles.break_low.split(':')[1]}</div>
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                            <h5 className="text-blue-400 font-semibold mb-2">{t.sections[5].spikes.title}</h5>
                            <p className="text-sm mb-2">{t.sections[5].spikes.desc}</p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              {t.sections[5].spikes.list.map((item, i) => <li key={i}>• {item}</li>)}
                            </ul>
                          </div>
                          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                            <h5 className="text-purple-400 font-semibold mb-2">{t.sections[5].obv.title}</h5>
                            <p className="text-sm mb-2">{t.sections[5].obv.desc}</p>
                          </div>
                        </div>

                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                          <h5 className="text-cyan-400 font-semibold mb-2">{t.sections[5].crypto.title}</h5>
                          <ul className="text-sm space-y-1">
                            {t.sections[5].crypto.list.map((item, i) => <li key={i}>• {item}</li>)}
                          </ul>
                        </div>
                        
                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton courseId="technical-analysis" sectionId="section-5" sectionNumber={5} totalSections={6} lng={lng} />
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </div>

              {/* Section 6 */}
              <div className="relative group">
                <div className={`absolute -left-[19px] top-6 w-3 h-3 rounded-full border z-10 transition-all ${
                  expandedSections.includes(5) ? 'bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50' : 'bg-slate-700 border-slate-600'
                }`} />
                
                <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all ml-4">
                  <div className="p-4 flex items-center justify-between cursor-pointer" onClick={() => toggleSection(5)}>
                    <div className="flex items-center gap-3">
                      <Brain className="w-5 h-5 text-cyan-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">6. {t.sections[6].title}</h3>
                        <p className="text-sm text-slate-400">{t.sections[6].sub}</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${expandedSections.includes(5) ? 'rotate-180' : ''}`} />
                  </div>

                  {expandedSections.includes(5) && (
                    <div className="px-6 pb-6">
                      <div className="space-y-4 text-slate-300">
                        <p className="text-lg" dangerouslySetInnerHTML={{ __html: t.sections[6].p1 }} />

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                            <h5 className="text-green-400 font-semibold mb-2">{t.sections[6].trend.title}</h5>
                            <p className="text-sm mb-2">{t.sections[6].trend.desc}</p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              {t.sections[6].trend.list.map((item, i) => <li key={i}>• <span dangerouslySetInnerHTML={{ __html: item }} /></li>)}
                            </ul>
                          </div>
                          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                            <h5 className="text-blue-400 font-semibold mb-2">{t.sections[6].range.title}</h5>
                            <p className="text-sm mb-2">{t.sections[6].range.desc}</p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              {t.sections[6].range.list.map((item, i) => <li key={i}>• <span dangerouslySetInnerHTML={{ __html: item }} /></li>)}
                            </ul>
                          </div>
                          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                            <h5 className="text-purple-400 font-semibold mb-2">{t.sections[6].breakout.title}</h5>
                            <p className="text-sm mb-2">{t.sections[6].breakout.desc}</p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              {t.sections[6].breakout.list.map((item, i) => <li key={i}>• <span dangerouslySetInnerHTML={{ __html: item }} /></li>)}
                            </ul>
                          </div>
                          <div className="bg-pink-500/10 border border-pink-500/20 rounded-lg p-4">
                            <h5 className="text-pink-400 font-semibold mb-2">{t.sections[6].scalp.title}</h5>
                            <p className="text-sm mb-2">{t.sections[6].scalp.desc}</p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              {t.sections[6].scalp.list.map((item, i) => <li key={i}>• <span dangerouslySetInnerHTML={{ __html: item }} /></li>)}
                            </ul>
                          </div>
                        </div>

                        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
                          <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">{t.sections[6].risk.title}</h4>
                          <ul className="text-sm space-y-2">
                            {t.sections[6].risk.list.map((item, i) => <li key={i}>• {item}</li>)}
                          </ul>
                        </div>

                        <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/20 rounded-lg p-5 text-center">
                          <h5 className="text-white font-semibold mb-2">{t.sections[6].final.title}</h5>
                          <p className="text-sm text-slate-400">{t.sections[6].final.desc}</p>
                        </div>
                        
                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton courseId="technical-analysis" sectionId="section-6" sectionNumber={6} totalSections={6} lng={lng} />
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Card className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20 mt-8 mb-16 max-w-4xl mx-auto">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">{t.cta.title}</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">{t.cta.desc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lng}/courses`}>
              <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                {t.back}
              </Button>
            </Link>
            <Link href={`/${lng}/dashboard`}>
              <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
                {t.cta.track}
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
