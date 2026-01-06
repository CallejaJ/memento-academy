"use client";

import { useState } from "react";
import Link from "next/link";
import { MainNav } from "@/components/main-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Lock,
  Droplets,
  AlertTriangle,
  BarChart3,
  PieChart,
  Shield,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionCompleteButton } from "@/components/progress/section-complete-button";
import { useParams } from "next/navigation";

const translations = {
  en: {
    badge: "🔒 Premium Course",
    title_prefix: "DeFi",
    title_suffix: "Deep Dive",
    description:
      "Master decentralized finance protocols, from basic lending to advanced yield farming strategies.",
    what_you_learn: {
      title: "What You'll Learn",
      items: [
        "Navigate major DeFi protocols",
        "Understand lending and borrowing mechanics",
        "Evaluate yield farming opportunities",
        "Manage DeFi risks effectively",
      ],
    },
    curriculum_title: "Course Curriculum",
    back_to_courses: "← Back to Courses",
    track_progress: "Track Your Progress →",
    cta: {
      title: "Ready to Start Your DeFi Journey?",
      text: "Remember: Start small, learn continuously, and never invest more than you can afford to lose.",
    },
    sections: {
      1: {
        title: "DeFi Fundamentals",
        subtitle: "Core concepts and protocols",
        p1: "Decentralized Finance (DeFi) is an ecosystem of financial applications built on blockchain technology, primarily Ethereum. Unlike traditional finance, DeFi operates without intermediaries like banks or brokers.",
        metrics_title: "📊 Key DeFi Metrics",
        metrics_tvl: "TVL: Total Value Locked in protocols",
        metrics_apy: "APY: Annual Percentage Yield (with compounding)",
        metrics_apr: "APR: Annual Percentage Rate (simple interest)",
        types: {
          lending: {
            title: "Lending",
            desc: "Earn interest by lending crypto",
          },
          borrowing: {
            title: "Borrowing",
            desc: "Access liquidity without selling",
          },
          trading: { title: "Trading", desc: "Swap tokens directly" },
        },
      },
      2: {
        title: "Lending & Borrowing",
        subtitle: "Aave, Compound explained",
        aave: {
          title: "Aave",
          desc: "One of the largest lending protocols with innovative features like flash loans.",
          list: [
            "Variable and stable rates",
            "30+ supported assets",
            "Flash loans available",
          ],
        },
        compound: {
          title: "Compound",
          desc: "Pioneering protocol with algorithmic interest rates.",
          list: [
            "Algorithmic rates",
            "cTokens for deposits",
            "COMP governance",
          ],
        },
        how_it_works: {
          title: "How It Works",
          steps: [
            "Deposit collateral (e.g., ETH)",
            "Borrow up to 75% of collateral value",
            "Monitor health factor",
            "Repay to unlock collateral",
          ],
        },
      },
      3: {
        title: "Yield Farming",
        subtitle: "Maximizing returns",
        desc: 'Yield farming is the practice of depositing crypto assets into DeFi protocols to earn maximum returns. "Farmers" move funds between protocols to capture the best yields.',
        strategies: {
          title: "Popular Strategies",
          list: [
            "Staking: Lock tokens for rewards",
            "Liquidity Mining: Earn protocol tokens",
            "Lending: Earn interest",
            "Leveraged: Amplify yields (high risk)",
          ],
        },
        risks: {
          title: "Key Risks",
          list: [
            "Impermanent loss",
            "Smart contract bugs",
            "Rug pulls",
            "High gas fees",
          ],
        },
        apy_vs_apr: {
          title: "APY vs APR",
          desc: "APY includes compound interest, APR doesn't. A 100% APY doubles your money in a year if compounded.",
        },
      },
      4: {
        title: "Liquidity Pools",
        subtitle: "AMMs and impermanent loss",
        desc: "Liquidity pools are smart contracts containing token pairs that enable decentralized trading. By providing liquidity, you earn trading fees.",
        amms: {
          title: "How AMMs Work",
          vars: [
            "x = Token A amount",
            "y = Token B amount",
            "k = Constant product",
          ],
        },
        il: {
          title: "Impermanent Loss",
          desc: 'When price ratio changes significantly, you\'d have more by just holding. The loss is "impermanent" because it disappears if prices return to original.',
        },
      },
      5: {
        title: "DeFi Risks",
        subtitle: "Smart contract and protocol risks",
        desc: "DeFi offers unprecedented opportunities but comes with significant risks. Understanding them is crucial.",
        risks: [
          {
            title: "1. Smart Contract Risk",
            desc: "Even audited code can have bugs. Exploits can drain millions.",
            mitigation: "Mitigation: Use established protocols",
          },
          {
            title: "2. Liquidation Risk",
            desc: "If collateral drops, you can be liquidated at a loss.",
            mitigation: "Mitigation: Maintain health factor above 2",
          },
          {
            title: "3. Oracle Manipulation",
            desc: "Attackers can manipulate price feeds.",
            mitigation: "Mitigation: Prefer Chainlink oracles",
          },
        ],
        best_practices: {
          title: "✅ Best Practices",
          list: [
            "Only invest what you can afford to lose",
            "Diversify across protocols",
            "Use hardware wallets",
            "Double-check addresses",
          ],
        },
      },
      6: {
        title: "DeFi Strategies",
        subtitle: "Building your DeFi portfolio",
        desc: "Build a DeFi portfolio balancing risk and reward. Here are strategies for different risk profiles.",
        profiles: [
          {
            title: "🟢 Conservative (Low Risk)",
            list: [
              "70% Stablecoins in Aave (5-10% APY)",
              "20% Blue-chip lending (2-5% APY)",
              "10% Established LP (variable)",
            ],
            expected: "Expected: 5-8% APY",
          },
          {
            title: "🟡 Moderate (Medium Risk)",
            list: [
              "40% Stablecoin farming (8-15% APY)",
              "30% Blue-chip LP (10-20% APY)",
              "20% Leveraged positions (15-30%)",
              "10% New protocols (higher risk)",
            ],
            expected: "Expected: 12-20% APY",
          },
          {
            title: "🔴 Aggressive (High Risk)",
            list: [
              "30% Leveraged farming (30-100% APY)",
              "30% New protocols (50-500% APY)",
              "20% Volatile pairs (20-100% APY)",
              "20% Stables as backup",
            ],
            expected: "Expected: 30-100%+ APY",
          },
        ],
        tips: {
          title: "💡 Pro Tips",
          list: [
            "Compound rewards regularly",
            "Use L2s to save on gas",
            "Rebalance quarterly",
            "Keep detailed tax records",
          ],
        },
      },
    },
  },
  es: {
    badge: "🔒 Curso Premium",
    title_prefix: "Inmersión en",
    title_suffix: "DeFi",
    description:
      "Domina los protocolos de finanzas descentralizadas, desde préstamos básicos hasta estrategias avanzadas de agricultura de rendimiento.",
    what_you_learn: {
      title: "Lo que aprenderás",
      items: [
        "Navegar por los principales protocolos DeFi",
        "Entender la mecánica de préstamos y endeudamiento",
        "Evaluar oportunidades de yield farming",
        "Gestionar riesgos DeFi efectivamente",
      ],
    },
    curriculum_title: "Plan de Estudios",
    back_to_courses: "← Volver a Cursos",
    track_progress: "Sigue tu Progreso →",
    cta: {
      title: "¿Listo para comenzar tu viaje DeFi?",
      text: "Recuerda: Empieza con poco, aprende continuamente y nunca inviertas más de lo que puedas permitirte perder.",
    },
    sections: {
      1: {
        title: "Fundamentos DeFi",
        subtitle: "Conceptos y protocolos clave",
        p1: "Las Finanzas Descentralizadas (DeFi) son un ecosistema de aplicaciones financieras construidas sobre tecnología blockchain, principalmente Ethereum. A diferencia de las finanzas tradicionales, DeFi opera sin intermediarios como bancos o corredores.",
        metrics_title: "📊 Métricas Clave DeFi",
        metrics_tvl: "TVL: Valor Total Bloqueado en protocolos",
        metrics_apy:
          "APY: Rendimiento Porcentual Anual (con interés compuesto)",
        metrics_apr: "APR: Tasa Porcentual Anual (interés simple)",
        types: {
          lending: {
            title: "Préstamos (Lending)",
            desc: "Gana interés prestando cripto",
          },
          borrowing: {
            title: "Endeudamiento (Borrowing)",
            desc: "Accede a liquidez sin vender",
          },
          trading: {
            title: "Trading",
            desc: "Intercambia tokens directamente",
          },
        },
      },
      2: {
        title: "Préstamos y Endeudamiento",
        subtitle: "Aave, Compound explicados",
        aave: {
          title: "Aave",
          desc: "Uno de los protocolos de préstamos más grandes con funciones innovadoras como préstamos flash.",
          list: [
            "Tasas variables y estables",
            "30+ activos soportados",
            "Préstamos flash disponibles",
          ],
        },
        compound: {
          title: "Compound",
          desc: "Protocolo pionero con tasas de interés algorítmicas.",
          list: [
            "Tasas algorítmicas",
            "cTokens para depósitos",
            "Gobernanza COMP",
          ],
        },
        how_it_works: {
          title: "Cómo Funciona",
          steps: [
            "Deposita garantía (ej. ETH)",
            "Pide prestado hasta el 75% del valor de la garantía",
            "Monitorea el factor de salud",
            "Paga para desbloquear la garantía",
          ],
        },
      },
      3: {
        title: "Yield Farming",
        subtitle: "Maximizando retornos",
        desc: 'El yield farming es la práctica de depositar activos cripto en protocolos DeFi para ganar los máximos retornos. Los "agricultores" mueven fondos entre protocolos para capturar los mejores rendimientos.',
        strategies: {
          title: "Estrategias Populares",
          list: [
            "Staking: Bloquea tokens por recompensas",
            "Minería de Liquidez: Gana tokens del protocolo",
            "Préstamos: Gana intereses",
            "Apalancado: Amplifica rendimientos (alto riesgo)",
          ],
        },
        risks: {
          title: "Riesgos Clave",
          list: [
            "Pérdida impermanente (Impermanent loss)",
            "Errores de contratos inteligentes",
            "Rug pulls (Estafas de salida)",
            "Altas tarifas de gas",
          ],
        },
        apy_vs_apr: {
          title: "APY vs APR",
          desc: "El APY incluye interés compuesto, el APR no. Un 100% APY duplica tu dinero en un año si se compone.",
        },
      },
      4: {
        title: "Pools de Liquidez",
        subtitle: "AMMs y pérdida impermanente",
        desc: "Los pools de liquidez son contratos inteligentes que contienen pares de tokens para permitir el trading descentralizado. Al proveer liquidez, ganas tarifas de trading.",
        amms: {
          title: "Cómo funcionan los AMMs",
          vars: [
            "x = Cantidad de Token A",
            "y = Cantidad de Token B",
            "k = Producto constante",
          ],
        },
        il: {
          title: "Pérdida Impermanente",
          desc: 'Cuando la relación de precios cambia significativamente, tendrías más simplemente manteniendo (HODL). La pérdida es "impermanente" porque desaparece si los precios vuelven al original.',
        },
      },
      5: {
        title: "Riesgos DeFi",
        subtitle: "Riesgos de protocolos y contratos",
        desc: "DeFi ofrece oportunidades sin precedentes pero conlleva riesgos significativos. Entenderlos es crucial.",
        risks: [
          {
            title: "1. Riesgo de Contrato Inteligente",
            desc: "Incluso el código auditado puede tener errores. Los exploits pueden drenar millones.",
            mitigation: "Mitigación: Usa protocolos establecidos",
          },
          {
            title: "2. Riesgo de Liquidación",
            desc: "Si la garantía cae, puedes ser liquidado con pérdidas.",
            mitigation: "Mitigación: Mantén el factor de salud por encima de 2",
          },
          {
            title: "3. Manipulación de Oráculos",
            desc: "Los atacantes pueden manipular los feeds de precios.",
            mitigation: "Mitigación: Prefiere oráculos Chainlink",
          },
        ],
        best_practices: {
          title: "✅ Mejores Prácticas",
          list: [
            "Invierte solo lo que puedas perder",
            "Diversifica entre protocolos",
            "Usa billeteras frías (hardware)",
            "Verifica siempre las direcciones",
          ],
        },
      },
      6: {
        title: "Estrategias DeFi",
        subtitle: "Construyendo tu portafolio DeFi",
        desc: "Construye un portafolio DeFi equilibrando riesgo y recompensa. Aquí hay estrategias para diferentes perfiles.",
        profiles: [
          {
            title: "🟢 Conservador (Bajo Riesgo)",
            list: [
              "70% Stablecoins en Aave (5-10% APY)",
              "20% Préstamos Blue-chip (2-5% APY)",
              "10% LP Establecido (variable)",
            ],
            expected: "Esperado: 5-8% APY",
          },
          {
            title: "🟡 Moderado (Riesgo Medio)",
            list: [
              "40% Farming de Stablecoins (8-15% APY)",
              "30% LP Blue-chip (10-20% APY)",
              "20% Posiciones apalancadas (15-30%)",
              "10% Nuevos protocolos (mayor riesgo)",
            ],
            expected: "Esperado: 12-20% APY",
          },
          {
            title: "🔴 Agresivo (Alto Riesgo)",
            list: [
              "30% Farming apalancado (30-100% APY)",
              "30% Nuevos protocolos (50-500% APY)",
              "20% Pares volátiles (20-100% APY)",
              "20% Stables como respaldo",
            ],
            expected: "Esperado: 30-100%+ APY",
          },
        ],
        tips: {
          title: "💡 Consejos Pro",
          list: [
            "Compone las recompensas regularmente",
            "Usa L2s para ahorrar en gas",
            "Rebalancea trimestralmente",
            "Mantén registros fiscales detallados",
          ],
        },
      },
    },
  },
};

export default function DefiDeepDivePage() {
  const { lng } = useParams<{ lng: string }>();
  const t = translations[lng as keyof typeof translations] || translations.en;
  const [expandedSections, setExpandedSections] = useState<number[]>([0]);

  const toggleSection = (index: number) => {
    setExpandedSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <MainNav lng={lng} />

      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20">
              {t.badge}
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t.title_prefix}
              </span>{" "}
              {t.title_suffix}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {t.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 mb-12">
              <CardContent className="pt-6">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                  {t.what_you_learn.title}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {t.what_you_learn.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-white mb-6">
              {t.curriculum_title}
            </h2>

            <div className="space-y-4 pl-4 md:pl-0">
              {/* Section 1: DeFi Fundamentals */}
              <div className="relative group">
                <div
                  className={`absolute -left-[19px] top-6 w-3 h-3 rounded-full border z-10 transition-all ${
                    expandedSections.includes(0)
                      ? "bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50"
                      : "bg-slate-700 border-slate-600"
                  }`}
                />
                <div className="absolute -left-[14px] top-9 w-0.5 h-full bg-slate-800" />

                <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all ml-4">
                  <div
                    className="p-4 flex items-center justify-between cursor-pointer"
                    onClick={() => toggleSection(0)}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-mono text-sm flex-shrink-0">
                        01
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-medium mb-1 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-purple-400" />
                          {t.sections[1].title}
                        </h3>
                        <p className="text-slate-500 text-sm">
                          {t.sections[1].subtitle}
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform ${expandedSections.includes(0) ? "rotate-180" : ""}`}
                    />
                  </div>

                  {expandedSections.includes(0) && (
                    <div className="px-6 pb-6">
                      <div className="space-y-4 text-slate-300">
                        <p className="text-lg">{t.sections[1].p1}</p>

                        <div className="bg-slate-900/50 border border-purple-500/20 rounded-xl p-4">
                          <h4 className="text-purple-400 font-semibold mb-2">
                            {t.sections[1].metrics_title}
                          </h4>
                          <ul className="space-y-1 text-sm">
                            <li>
                              <strong className="text-white">
                                {t.sections[1].metrics_tvl.split(":")[0]}:
                              </strong>{" "}
                              {t.sections[1].metrics_tvl.split(":")[1]}
                            </li>
                            <li>
                              <strong className="text-white">
                                {t.sections[1].metrics_apy.split(":")[0]}:
                              </strong>{" "}
                              {t.sections[1].metrics_apy.split(":")[1]}
                            </li>
                            <li>
                              <strong className="text-white">
                                {t.sections[1].metrics_apr.split(":")[0]}:
                              </strong>{" "}
                              {t.sections[1].metrics_apr.split(":")[1]}
                            </li>
                          </ul>
                        </div>

                        <div className="grid md:grid-cols-3 gap-3">
                          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                            <h5 className="text-blue-400 font-semibold text-sm mb-1">
                              {t.sections[1].types.lending.title}
                            </h5>
                            <p className="text-slate-400 text-xs">
                              {t.sections[1].types.lending.desc}
                            </p>
                          </div>
                          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                            <h5 className="text-green-400 font-semibold text-sm mb-1">
                              {t.sections[1].types.borrowing.title}
                            </h5>
                            <p className="text-slate-400 text-xs">
                              {t.sections[1].types.borrowing.desc}
                            </p>
                          </div>
                          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
                            <h5 className="text-purple-400 font-semibold text-sm mb-1">
                              {t.sections[1].types.trading.title}
                            </h5>
                            <p className="text-slate-400 text-xs">
                              {t.sections[1].types.trading.desc}
                            </p>
                          </div>
                        </div>

                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton
                            courseId="defi-deep-dive"
                            sectionId="section-1"
                            sectionNumber={1}
                            totalSections={6}
                            lng={lng}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </div>

              {/* Section 2: Lending & Borrowing */}
              <div className="relative group">
                <div
                  className={`absolute -left-[19px] top-6 w-3 h-3 rounded-full border z-10 transition-all ${
                    expandedSections.includes(1)
                      ? "bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50"
                      : "bg-slate-700 border-slate-600"
                  }`}
                />
                <div className="absolute -left-[14px] top-9 w-0.5 h-full bg-slate-800" />

                <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all ml-4">
                  <div
                    className="p-4 flex items-center justify-between cursor-pointer"
                    onClick={() => toggleSection(1)}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-mono text-sm flex-shrink-0">
                        02
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-medium mb-1 flex items-center gap-2">
                          <Lock className="w-5 h-5 text-cyan-400" />
                          {t.sections[2].title}
                        </h3>
                        <p className="text-slate-500 text-sm">
                          {t.sections[2].subtitle}
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform ${expandedSections.includes(1) ? "rotate-180" : ""}`}
                    />
                  </div>

                  {expandedSections.includes(1) && (
                    <div className="px-6 pb-6">
                      <div className="space-y-4 text-slate-300">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                            <h4 className="text-white font-semibold mb-2">
                              {t.sections[2].aave.title}
                            </h4>
                            <p className="text-sm text-slate-400 mb-3">
                              {t.sections[2].aave.desc}
                            </p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              {t.sections[2].aave.list.map((item, i) => (
                                <li key={i}>• {item}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                            <h4 className="text-white font-semibold mb-2">
                              {t.sections[2].compound.title}
                            </h4>
                            <p className="text-sm text-slate-400 mb-3">
                              {t.sections[2].compound.desc}
                            </p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              {t.sections[2].compound.list.map((item, i) => (
                                <li key={i}>• {item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                          <h4 className="text-cyan-400 font-semibold mb-3 text-sm">
                            {t.sections[2].how_it_works.title}
                          </h4>
                          <ol className="space-y-2 text-sm">
                            {t.sections[2].how_it_works.steps.map((step, i) => (
                              <li key={i} className="flex gap-2">
                                <span className="bg-cyan-500/20 text-cyan-400 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 text-xs">
                                  {i + 1}
                                </span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>

                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton
                            courseId="defi-deep-dive"
                            sectionId="section-2"
                            sectionNumber={2}
                            totalSections={6}
                            lng={lng}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </div>

              {/* Section 3: Yield Farming */}
              <div className="relative group">
                <div
                  className={`absolute -left-[19px] top-6 w-3 h-3 rounded-full border z-10 transition-all ${
                    expandedSections.includes(2)
                      ? "bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50"
                      : "bg-slate-700 border-slate-600"
                  }`}
                />
                <div className="absolute -left-[14px] top-9 w-0.5 h-full bg-slate-800" />

                <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all ml-4">
                  <div
                    className="p-4 flex items-center justify-between cursor-pointer"
                    onClick={() => toggleSection(2)}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-mono text-sm flex-shrink-0">
                        03
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-medium mb-1 flex items-center gap-2">
                          <BarChart3 className="w-5 h-5 text-green-400" />
                          {t.sections[3].title}
                        </h3>
                        <p className="text-slate-500 text-sm">
                          {t.sections[3].subtitle}
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform ${expandedSections.includes(2) ? "rotate-180" : ""}`}
                    />
                  </div>

                  {expandedSections.includes(2) && (
                    <div className="px-6 pb-6">
                      <div className="space-y-4 text-slate-300">
                        <p>{t.sections[3].desc}</p>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                            <h4 className="text-green-400 font-semibold mb-2 text-sm">
                              {t.sections[3].strategies.title}
                            </h4>
                            <ul className="space-y-1 text-xs text-slate-400">
                              {t.sections[3].strategies.list.map((item, i) => (
                                <li key={i}>• {item}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                            <h4 className="text-orange-400 font-semibold mb-2 text-sm flex items-center gap-1">
                              <AlertTriangle className="w-4 h-4" />
                              {t.sections[3].risks.title}
                            </h4>
                            <ul className="space-y-1 text-xs text-slate-400">
                              {t.sections[3].risks.list.map((item, i) => (
                                <li key={i}>• {item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                          <p className="text-yellow-400 font-semibold text-sm mb-1">
                            {t.sections[3].apy_vs_apr.title}
                          </p>
                          <p className="text-xs text-slate-400">
                            {t.sections[3].apy_vs_apr.desc}
                          </p>
                        </div>

                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton
                            courseId="defi-deep-dive"
                            sectionId="section-3"
                            sectionNumber={3}
                            totalSections={6}
                            lng={lng}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </div>

              {/* Section 4: Liquidity Pools */}
              <div className="relative group">
                <div
                  className={`absolute -left-[19px] top-6 w-3 h-3 rounded-full border z-10 transition-all ${
                    expandedSections.includes(3)
                      ? "bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50"
                      : "bg-slate-700 border-slate-600"
                  }`}
                />
                <div className="absolute -left-[14px] top-9 w-0.5 h-full bg-slate-800" />

                <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all ml-4">
                  <div
                    className="p-4 flex items-center justify-between cursor-pointer"
                    onClick={() => toggleSection(3)}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-mono text-sm flex-shrink-0">
                        04
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-medium mb-1 flex items-center gap-2">
                          <Droplets className="w-5 h-5 text-blue-400" />
                          {t.sections[4].title}
                        </h3>
                        <p className="text-slate-500 text-sm">
                          {t.sections[4].subtitle}
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform ${expandedSections.includes(3) ? "rotate-180" : ""}`}
                    />
                  </div>

                  {expandedSections.includes(3) && (
                    <div className="px-6 pb-6">
                      <div className="space-y-4 text-slate-300">
                        <p>{t.sections[4].desc}</p>

                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                          <h4 className="text-blue-400 font-semibold mb-2 text-sm">
                            {t.sections[4].amms.title}
                          </h4>
                          <p className="text-xs text-slate-400 mb-2">
                            Formula:{" "}
                            <code className="bg-slate-800 px-2 py-0.5 rounded text-cyan-400">
                              x * y = k
                            </code>
                          </p>
                          <ul className="space-y-1 text-xs text-slate-400">
                            {t.sections[4].amms.vars.map((item, i) => (
                              <li key={i}>
                                <strong className="text-white">•</strong> {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                          <h4 className="text-red-400 font-semibold mb-2 text-sm flex items-center gap-1">
                            <AlertTriangle className="w-4 h-4" />
                            {t.sections[4].il.title}
                          </h4>
                          <p className="text-xs text-slate-400">
                            {t.sections[4].il.desc}
                          </p>
                        </div>

                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton
                            courseId="defi-deep-dive"
                            sectionId="section-4"
                            sectionNumber={4}
                            totalSections={6}
                            lng={lng}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </div>

              {/* Section 5: DeFi Risks */}
              <div className="relative group">
                <div
                  className={`absolute -left-[19px] top-6 w-3 h-3 rounded-full border z-10 transition-all ${
                    expandedSections.includes(4)
                      ? "bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50"
                      : "bg-slate-700 border-slate-600"
                  }`}
                />
                <div className="absolute -left-[14px] top-9 w-0.5 h-full bg-slate-800" />

                <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all ml-4">
                  <div
                    className="p-4 flex items-center justify-between cursor-pointer"
                    onClick={() => toggleSection(4)}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-mono text-sm flex-shrink-0">
                        05
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-medium mb-1 flex items-center gap-2">
                          <Shield className="w-5 h-5 text-red-400" />
                          {t.sections[5].title}
                        </h3>
                        <p className="text-slate-500 text-sm">
                          {t.sections[5].subtitle}
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform ${expandedSections.includes(4) ? "rotate-180" : ""}`}
                    />
                  </div>

                  {expandedSections.includes(4) && (
                    <div className="px-6 pb-6">
                      <div className="space-y-3 text-slate-300">
                        <p className="text-sm">{t.sections[5].desc}</p>

                        <div className="space-y-2">
                          {t.sections[5].risks.map((risk, i) => (
                            <div
                              key={i}
                              className={`bg-${i === 0 ? "red" : i === 1 ? "orange" : "yellow"}-500/10 border border-${i === 0 ? "red" : i === 1 ? "orange" : "yellow"}-500/20 rounded-lg p-3`}
                            >
                              <h4
                                className={`text-${i === 0 ? "red" : i === 1 ? "orange" : "yellow"}-400 font-semibold text-sm mb-1`}
                              >
                                {risk.title}
                              </h4>
                              <p className="text-xs text-slate-400">
                                {risk.desc}
                              </p>
                              <p className="text-xs text-slate-500 mt-1">
                                <strong className="text-white">
                                  {risk.mitigation.split(":")[0]}:
                                </strong>{" "}
                                {risk.mitigation.split(":")[1]}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-3">
                          <p className="text-cyan-400 font-semibold text-sm mb-2">
                            {t.sections[5].best_practices.title}
                          </p>
                          <ul className="text-xs text-slate-400 space-y-0.5">
                            {t.sections[5].best_practices.list.map(
                              (item, i) => (
                                <li key={i}>• {item}</li>
                              )
                            )}
                          </ul>
                        </div>

                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton
                            courseId="defi-deep-dive"
                            sectionId="section-5"
                            sectionNumber={5}
                            totalSections={6}
                            lng={lng}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </div>

              {/* Section 6: DeFi Strategies */}
              <div className="relative group">
                <div
                  className={`absolute -left-[19px] top-6 w-3 h-3 rounded-full border z-10 transition-all ${
                    expandedSections.includes(5)
                      ? "bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50"
                      : "bg-slate-700 border-slate-600"
                  }`}
                />

                <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all ml-4">
                  <div
                    className="p-4 flex items-center justify-between cursor-pointer"
                    onClick={() => toggleSection(5)}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-mono text-sm flex-shrink-0">
                        06
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-medium mb-1 flex items-center gap-2">
                          <PieChart className="w-5 h-5 text-purple-400" />
                          {t.sections[6].title}
                        </h3>
                        <p className="text-slate-500 text-sm">
                          {t.sections[6].subtitle}
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform ${expandedSections.includes(5) ? "rotate-180" : ""}`}
                    />
                  </div>

                  {expandedSections.includes(5) && (
                    <div className="px-6 pb-6">
                      <div className="space-y-3 text-slate-300">
                        <p className="text-sm">{t.sections[6].desc}</p>

                        <div className="space-y-3">
                          {t.sections[6].profiles.map((profile, i) => (
                            <div
                              key={i}
                              className={`bg-${i === 0 ? "green" : i === 1 ? "yellow" : "red"}-500/10 border border-${i === 0 ? "green" : i === 1 ? "yellow" : "red"}-500/20 rounded-lg p-4`}
                            >
                              <h4
                                className={`text-${i === 0 ? "green" : i === 1 ? "yellow" : "red"}-400 font-semibold mb-2 text-sm`}
                              >
                                {profile.title}
                              </h4>
                              <ul className="space-y-1 text-xs text-slate-400">
                                {profile.list.map((item, j) => (
                                  <li key={j}>• {item}</li>
                                ))}
                              </ul>
                              <p className="text-xs text-slate-500 mt-2">
                                <span
                                  className={`text-${i === 0 ? "green" : i === 1 ? "yellow" : "red"}-400 font-semibold`}
                                >
                                  {profile.expected}
                                </span>
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
                          <h4 className="text-purple-400 font-semibold mb-2 text-sm">
                            {t.sections[6].tips.title}
                          </h4>
                          <ul className="space-y-1 text-xs text-slate-400">
                            {t.sections[6].tips.list.map((item, i) => (
                              <li key={i}>• {item}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton
                            courseId="defi-deep-dive"
                            sectionId="section-6"
                            sectionNumber={6}
                            totalSections={6}
                            lng={lng}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </div>

              {/* CTA Section */}
              <Card className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border-cyan-500/20 mt-8">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {t.cta.title}
                  </h3>
                  <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                    {t.cta.text}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href={`/${lng}/courses`}>
                      <Button
                        variant="outline"
                        className="border-slate-700 text-slate-300 hover:bg-slate-800"
                      >
                        {t.back_to_courses}
                      </Button>
                    </Link>
                    <Link href={`/${lng}/dashboard`}>
                      <Button className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600">
                        {t.track_progress}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
