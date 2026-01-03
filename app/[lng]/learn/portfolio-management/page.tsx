"use client"

import { useState } from "react"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PieChart, Shield, TrendingDown, RefreshCw, Target, Wallet, ChevronDown, LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionCompleteButton } from "@/components/progress/section-complete-button"
import { useParams } from "next/navigation"

const translations = {
  en: {
    badge: "🔒 Premium Course",
    title: "Crypto Portfolio Management",
    desc: "Master the art of building and maintaining a balanced crypto portfolio. Learn risk management, asset allocation, and rebalancing strategies.",
    modules: "Modules",
    level: "Level",
    duration: "Duration",
    level_val: "Intermediate",
    back: "← Back to Courses",
    curriculum: "Course Curriculum",
    cta: {
      title: "Build Your Wealth Portfolio",
      desc: "A well-managed portfolio compounds gains over time. Start small, stay disciplined, and never invest more than you can afford to lose.",
      track: "Track Your Progress →"
    },
    sections: {
      1: {
        title: "Portfolio Basics",
        sub: "Building your foundation",
        p1: "A <strong class=\"text-white\">crypto portfolio</strong> is your collection of digital assets. Like traditional investing, diversification and strategy are key to managing risk and maximizing returns.",
        chips: {
          blue: { title: "💎 Blue Chips", desc: "BTC, ETH - Established, lower risk", alloc: "Allocation: 40-60%" },
          mid: { title: "🚀 Mid Caps", desc: "SOL, AVAX - Higher potential", alloc: "Allocation: 20-40%" },
          small: { title: "💥 Small Caps", desc: "New projects - High risk/reward", alloc: "Allocation: 5-20%" }
        },
        goals: {
          title: "🎯 Portfolio Goals",
          list: [
            "• <strong class=\"text-white\">Conservative:</strong> 80% BTC/ETH, 20% alts - Capital preservation",
            "• <strong class=\"text-white\">Balanced:</strong> 50% majors, 30% mid-caps, 20% small - Growth + stability",
            "• <strong class=\"text-white\">Aggressive:</strong> 30% majors, 70% alts - Maximum growth potential"
          ]
        }
      }
    },
    // Array for sections 2-6
    other_sections: [
      { 
        idx: 1, 
        title: "2. Diversification Strategies", 
        subtitle: "Don't put all eggs in one basket", 
        content: "Diversification reduces risk by spreading investments across different assets, sectors, and strategies.",
        details: {
          type: "diversification",
          title: "🎲 Diversification Types",
          list: [
            "• <strong class=\"text-white\">By Market Cap:</strong> BTC, ETH, mid-caps, small-caps",
            "• <strong class=\"text-white\">By Sector:</strong> DeFi, NFTs, Gaming, Infrastructure",
            "• <strong class=\"text-white\">By L1/L2:</strong> Ethereum, Solana, Polygon, Optimism",
            "• <strong class=\"text-white\">By Geography:</strong> Different regulatory environments"
          ],
          warn: "⚠️ Over-diversification reduces gains. 5-15 positions is optimal for most investors."
        }
      },
      { 
        idx: 2, 
        title: "3. Risk Management", 
        subtitle: "Protecting your capital", 
        content: "Risk management is about preserving capital during downturns while maintaining upside potential.",
        details: {
          type: "risk",
          title: "🛡️ Risk Management Rules",
          list: [
            "• <strong class=\"text-white\">Position Sizing:</strong> No single position > 20% of portfolio",
            "• <strong class=\"text-white\">Stop Losses:</strong> Set mental or hard stops at -20% to -30%",
            "• <strong class=\"text-white\">Take Profits:</strong> Scale out on way up (25% at 2x, 50% at 4x, etc.)",
            "• <strong class=\"text-white\">Bear Market Cash:</strong> Hold 20-50% stablecoins in downtrends"
          ]
        }
      },
      { 
        idx: 3, 
        title: "4. Rebalancing Techniques", 
        subtitle: "Maintaining your targets", 
        content: "Rebalancing ensures your portfolio stays aligned with your strategy as market conditions change.",
        details: {
          type: "rebalance",
          title: "🔄 Rebalancing Methods",
          methods: [
            { title: "Time-Based", desc: "Rebalance monthly/quarterly regardless of deviation" },
            { title: "Threshold-Based", desc: "Rebalance when allocation drifts > 5-10% from target" }
          ]
        }
      },
      { 
        idx: 4, 
        title: "5. Tax Optimization", 
        subtitle: "Keeping more profits", 
        content: "Understanding crypto taxes helps you legally minimize tax burden and maximize net returns.",
        details: {
          type: "tax",
          title: "💰 Tax Strategies",
          list: [
            "• <strong class=\"text-white\">Long-term Holdings:</strong> Hold > 1 year for lower tax rate",
            "• <strong class=\"text-white\">Tax-Loss Harvesting:</strong> Sell losers to offset gains",
            "• <strong class=\"text-white\">Stablecoin Swaps:</strong> May not be taxable events (consult CPA)",
            "• <strong class=\"text-white\">Track Everything:</strong> Use CoinTracker, Koinly, or similar"
          ]
        }
      },
      { 
        idx: 5, 
        title: "6. Performance Tracking", 
        subtitle: "Measuring success", 
        content: "Track your portfolio's performance to make informed decisions and improve your strategy over time.",
        details: {
          type: "tracking",
          title: "📊 Key Metrics",
          list: [
            "• <strong class=\"text-white\">Total Return:</strong> (Current Value - Initial Investment) / Initial Investment",
            "• <strong class=\"text-white\">vs BTC/ETH:</strong> Did you outperform just holding majors?",
            "• <strong class=\"text-white\">Max Drawdown:</strong> Peak to trough decline (manage risk)",
            "• <strong class=\"text-white\">Sharpe Ratio:</strong> Risk-adjusted returns (higher = better)"
          ],
          success: {
            title: "🎓 Portfolio Success",
            desc: "Great portfolio management is about discipline, not luck. Stick to your plan, rebalance regularly, and don't let emotions drive decisions."
          }
        }
      }
    ]
  },
  es: {
    badge: "🔒 Curso Premium",
    title: "Gestión de Portafolio Cripto",
    desc: "Domina el arte de construir y mantener un portafolio cripto balanceado. Aprende gestión de riesgo, asignación de activos y estrategias de rebalanceo.",
    modules: "Módulos",
    level: "Nivel",
    duration: "Duración",
    level_val: "Intermedio",
    back: "← Volver a Cursos",
    curriculum: "Plan de Estudios",
    cta: {
      title: "Construye tu Portafolio de Riqueza",
      desc: "Un portafolio bien gestionado compone ganancias en el tiempo. Empieza pequeño, mantén disciplina y no inviertas más de lo que puedas perder.",
      track: "Sigue tu Progreso →"
    },
    sections: {
      1: {
        title: "Básicos de Portafolio",
        sub: "Construyendo tu fundación",
        p1: "Un <strong class=\"text-white\">portafolio cripto</strong> es tu colección de activos digitales. Como en inversión tradicional, diversificación y estrategia son claves para el riesgo y retorno.",
        chips: {
          blue: { title: "💎 Blue Chips", desc: "BTC, ETH - Establecidos, menor riesgo", alloc: "Asignación: 40-60%" },
          mid: { title: "🚀 Mid Caps", desc: "SOL, AVAX - Mayor potencial", alloc: "Asignación: 20-40%" },
          small: { title: "💥 Small Caps", desc: "Proyectos nuevos - Alto riesgo/retorno", alloc: "Asignación: 5-20%" }
        },
        goals: {
          title: "🎯 Metas de Portafolio",
          list: [
            "• <strong class=\"text-white\">Conservador:</strong> 80% BTC/ETH, 20% alts - Preservación de capital",
            "• <strong class=\"text-white\">Balanceado:</strong> 50% majors, 30% mid-caps, 20% small - Crecimiento + estabilidad",
            "• <strong class=\"text-white\">Agresivo:</strong> 30% majors, 70% alts - Máximo potencial de crecimiento"
          ]
        }
      }
    },
    other_sections: [
      { 
        idx: 1, 
        title: "2. Estrategias de Diversificación", 
        subtitle: "No pongas todos los huevos en una cesta", 
        content: "La diversificación reduce el riesgo esparciendo inversiones en diferentes activos, sectores y estrategias.",
        details: {
          type: "diversification",
          title: "🎲 Tipos de Diversificación",
          list: [
            "• <strong class=\"text-white\">Por Market Cap:</strong> BTC, ETH, mid-caps, small-caps",
            "• <strong class=\"text-white\">Por Sector:</strong> DeFi, NFTs, Gaming, Infraestructura",
            "• <strong class=\"text-white\">Por L1/L2:</strong> Ethereum, Solana, Polygon, Optimism",
            "• <strong class=\"text-white\">Por Geografía:</strong> Diferentes entornos regulatorios"
          ],
          warn: "⚠️ La sobre-diversificación reduce ganancias. 5-15 posiciones es óptimo para la mayoría."
        }
      },
      { 
        idx: 2, 
        title: "3. Gestión de Riesgo", 
        subtitle: "Protegiendo tu capital", 
        content: "La gestión de riesgo trata de preservar capital durante caídas manteniendo potencial de subida.",
        details: {
          type: "risk",
          title: "🛡️ Reglas de Gestión de Riesgo",
          list: [
            "• <strong class=\"text-white\">Tamaño de Posición:</strong> Ninguna posición > 20% del portafolio",
            "• <strong class=\"text-white\">Stop Losses:</strong> Stops mentales o duros al -20% a -30%",
            "• <strong class=\"text-white\">Toma de Ganancias:</strong> Escala salidas al subir (25% a 2x, 50% a 4x, etc.)",
            "• <strong class=\"text-white\">Efectivo en Bear Market:</strong> Mantén 20-50% en stablecoins en bajadas"
          ]
        }
      },
      { 
        idx: 3, 
        title: "4. Técnicas de Rebalanceo", 
        subtitle: "Manteniendo tus objetivos", 
        content: "El rebalanceo asegura que tu portafolio siga alineado con tu estrategia al cambiar el mercado.",
        details: {
          type: "rebalance",
          title: "🔄 Métodos de Rebalanceo",
          methods: [
            { title: "Basado en Tiempo", desc: "Rebalancear mensual/trimestral sin importar la desviación" },
            { title: "Basado en Umbral", desc: "Rebalancear cuando la asignación se desvía > 5-10% del objetivo" }
          ]
        }
      },
      { 
        idx: 4, 
        title: "5. Optimización Fiscal", 
        subtitle: "Conservando más ganancias", 
        content: "Entender los impuestos cripto te ayuda a minimizar legalmente la carga fiscal y maximizar retornos netos.",
        details: {
          type: "tax",
          title: "💰 Estrategias Fiscales",
          list: [
            "• <strong class=\"text-white\">Hold Largo Plazo:</strong> Hold > 1 año para tasa menor (depende del país)",
            "• <strong class=\"text-white\">Tax-Loss Harvesting:</strong> Vende perdedores para compensar ganancias",
            "• <strong class=\"text-white\">Swaps Stablecoin:</strong> Pueden ser eventos taxables (consulta contador)",
            "• <strong class=\"text-white\">Rastrea Todo:</strong> Usa CoinTracker, Koinly, o similar"
          ]
        }
      },
      { 
        idx: 5, 
        title: "6. Seguimiento de Rendimiento", 
        subtitle: "Midiendo el éxito", 
        content: "Rastrea el rendimiento de tu portafolio para tomar decisiones informadas y mejorar tu estrategia.",
        details: {
          type: "tracking",
          title: "📊 Métricas Clave",
          list: [
            "• <strong class=\"text-white\">Retorno Total:</strong> (Valor Actual - Inversión Inicial) / Inversión Inicial",
            "• <strong class=\"text-white\">vs BTC/ETH:</strong> ¿Superaste solo holdear los grandes?",
            "• <strong class=\"text-white\">Max Drawdown:</strong> Caída pico a valle (gestiona riesgo)",
            "• <strong class=\"text-white\">Sharpe Ratio:</strong> Retorno ajustado al riesgo (mayor = mejor)"
          ],
          success: {
            title: "🎓 Éxito del Portafolio",
            desc: "La gran gestión de portafolio es disciplina, no suerte. Apégate a tu plan, rebalancea regularmente y no dejes que las emociones decidan."
          }
        }
      }
    ]
  }
}

export default function PortfolioManagementPage() {
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

  // Helper to get icon and color for the dynamic sections
  const getSectionProps = (idx: number) => {
    const props = [
      { icon: PieChart, color: "purple" },
      { icon: Shield, color: "red" },
      { icon: RefreshCw, color: "green" },
      { icon: TrendingDown, color: "orange" },
      { icon: Target, color: "cyan" }
    ]
    return props[idx - 1] || { icon: PieChart, color: "gray" }
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <MainNav lng={lng} />
      
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
              {t.badge}
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                {t.title}
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {t.desc}
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-indigo-400">6</div>
                <div className="text-sm text-slate-400">{t.modules}</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-purple-400">{t.level_val}</div>
                <div className="text-sm text-slate-400">{t.level}</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-pink-400">~3h</div>
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
              
              {/* Section 1: Portfolio Basics */}
              <div className="relative group">
                <div className={`absolute -left-[19px] top-6 w-3 h-3 rounded-full border z-10 transition-all ${
                  expandedSections.includes(0) ? 'bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50' : 'bg-slate-700 border-slate-600'
                }`} />
                <div className="absolute -left-[14px] top-9 w-0.5 h-full bg-slate-800" />
                
                <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all ml-4">
                  <div className="p-4 flex items-center justify-between cursor-pointer" onClick={() => toggleSection(0)}>
                    <div className="flex items-center gap-3">
                      <Wallet className="w-5 h-5 text-indigo-400" />
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

                        <div className="grid md:grid-cols-3 gap-3">
                          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                            <h5 className="text-blue-400 font-semibold mb-2">{t.sections[1].chips.blue.title}</h5>
                            <p className="text-xs text-slate-400 mb-2">{t.sections[1].chips.blue.desc}</p>
                            <p className="text-xs text-green-400">{t.sections[1].chips.blue.alloc}</p>
                          </div>
                          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                            <h5 className="text-purple-400 font-semibold mb-2">{t.sections[1].chips.mid.title}</h5>
                            <p className="text-xs text-slate-400 mb-2">{t.sections[1].chips.mid.desc}</p>
                            <p className="text-xs text-green-400">{t.sections[1].chips.mid.alloc}</p>
                          </div>
                          <div className="bg-pink-500/10 border border-pink-500/20 rounded-lg p-4">
                            <h5 className="text-pink-400 font-semibold mb-2">{t.sections[1].chips.small.title}</h5>
                            <p className="text-xs text-slate-400 mb-2">{t.sections[1].chips.small.desc}</p>
                            <p className="text-xs text-green-400">{t.sections[1].chips.small.alloc}</p>
                          </div>
                        </div>

                        <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5">
                          <h4 className="text-indigo-400 font-semibold mb-3">{t.sections[1].goals.title}</h4>
                          <div className="space-y-2 text-sm">
                            {t.sections[1].goals.list.map((item, i) => (
                              <p key={i} dangerouslySetInnerHTML={{ __html: item }} />
                            ))}
                          </div>
                        </div>

                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton courseId="portfolio-management" sectionId="section-1" sectionNumber={1} totalSections={6} lng={lng} />
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </div>

              {/* Sections 2-6 */}
              {t.other_sections.map((section) => {
                const { icon: Icon, color } = getSectionProps(section.idx)
                return (
                  <div key={section.idx} className="relative group">
                    <div className={`absolute -left-[19px] top-6 w-3 h-3 rounded-full border z-10 transition-all ${
                      expandedSections.includes(section.idx) ? 'bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50' : 'bg-slate-700 border-slate-600'
                    }`} />
                    <div className={`absolute -left-[14px] top-9 w-0.5 ${section.idx === 5 ? 'h-0' : 'h-full'} bg-slate-800`} />
                    
                    <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all ml-4">
                      <div className="p-4 flex items-center justify-between cursor-pointer" onClick={() => toggleSection(section.idx)}>
                        <div className="flex items-center gap-3">
                          <Icon className={`w-5 h-5 text-${color}-400`} />
                          <div>
                            <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                            <p className="text-sm text-slate-400">{section.subtitle}</p>
                          </div>
                        </div>
                        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${expandedSections.includes(section.idx) ? 'rotate-180' : ''}`} />
                      </div>

                      {expandedSections.includes(section.idx) && (
                        <div className="px-6 pb-6">
                          <div className="space-y-4 text-slate-300">
                            <p className="text-lg">{section.content}</p>

                            {/* Section 2: Diversification */}
                            {section.details.type === "diversification" && (
                              <>
                                <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-5">
                                  <h4 className="text-purple-400 font-semibold mb-3">{section.details.title}</h4>
                                  <ul className="text-sm space-y-1">
                                    {section.details.list?.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item }} />)}
                                  </ul>
                                </div>
                                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                                  <p className="text-sm">{section.details.warn}</p>
                                </div>
                              </>
                            )}

                            {/* Section 3: Risk */}
                            {section.details.type === "risk" && (
                              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5">
                                <h4 className="text-red-400 font-semibold mb-3">{section.details.title}</h4>
                                <ul className="text-sm space-y-2">
                                  {section.details.list?.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item }} />)}
                                </ul>
                              </div>
                            )}

                            {/* Section 4: Rebalance */}
                            {section.details.type === "rebalance" && (
                              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-5">
                                <h4 className="text-green-400 font-semibold mb-3">{section.details.title}</h4>
                                <div className="grid md:grid-cols-2 gap-3 text-sm">
                                  {section.details.methods?.map((m, i) => (
                                    <div key={i} className="bg-slate-800/50 rounded p-3">
                                      <p className="text-white font-semibold mb-1">{m.title}</p>
                                      <p className="text-xs text-slate-400">{m.desc}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Section 5: Tax */}
                            {section.details.type === "tax" && (
                             <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-5">
                                <h4 className="text-orange-400 font-semibold mb-3">{section.details.title}</h4>
                                <ul className="text-sm space-y-1">
                                  {section.details.list?.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item }} />)}
                                </ul>
                              </div>
                            )}

                            {/* Section 6: Tracking */}
                            {section.details.type === "tracking" && (
                              <>
                                <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-5">
                                  <h4 className="text-cyan-400 font-semibold mb-3">{section.details.title}</h4>
                                  <ul className="text-sm space-y-2">
                                    {section.details.list?.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item }} />)}
                                  </ul>
                                </div>
                                <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-lg p-5 text-center">
                                  <h5 className="text-white font-semibold mb-2">{section.details.success?.title}</h5>
                                  <p className="text-sm text-slate-400">
                                    {section.details.success?.desc}
                                  </p>
                                </div>
                              </>
                            )}

                            <div className="mt-6 flex justify-center">
                              <SectionCompleteButton courseId="portfolio-management" sectionId={`section-${section.idx + 1}`} sectionNumber={section.idx + 1} totalSections={6} lng={lng} />
                            </div>
                          </div>
                        </div>
                      )}
                    </Card>
                  </div>
                )
              })}
              
            </div>
          </div>
        </div>
      </section>

      <Card className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-indigo-500/20 mt-8 mb-16 max-w-4xl mx-auto">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">{t.cta.title}</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            {t.cta.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lng}/courses`}>
              <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">{t.back}</Button>
            </Link>
            <Link href={`/${lng}/dashboard`}>
              <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600">{t.cta.track}</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
