"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Wallet, AlertTriangle, Coins, CreditCard, LineChart, PieChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NewsletterForm } from "@/components/newsletter/newsletter-form"

const translations = {
  en: {
    badge: "💰 Free Course",
    title_prefix: "Crypto",
    title_suffix: "101",
    subtitle: "Everything you need to know about cryptocurrencies, explained without technical jargon.",
    what_is: {
      title: "What are Cryptocurrencies?",
      p1: "Cryptocurrencies are <strong class=\"text-white\">digital money</strong> that work without banks or governments. They use blockchain technology to ensure transactions are secure, transparent, and irreversible.",
      p2: "Unlike the dollar or euro, cryptocurrencies are not controlled by any central institution. Their value is determined by supply and demand in the market, similar to company stocks."
    },
    main_cryptos: {
      title: "The Main Cryptocurrencies",
      btc: {
        title: "Bitcoin (BTC)",
        desc: "The first and most well-known cryptocurrency. Created in 2009 by Satoshi Nakamoto.",
        list: ["Maximum 21 million units", "\"Digital gold\" - store of value", "Most decentralized and secure"]
      },
      eth: {
        title: "Ethereum (ETH)",
        desc: "Platform for building decentralized applications. Created in 2015 by Vitalik Buterin.",
        list: ["Programmable smart contracts", "Foundation of DeFi and NFTs", "More than just money: it's a platform"]
      }
    },
    wallet: {
      title: "What is a Wallet?",
      desc: "A wallet is like your digital bank account, but you are your own bank. There are two main types:",
      hot: {
        title: "🔥 Hot Wallets",
        desc: "Connected to the internet. Practical for daily use.",
        list: ["MetaMask, Trust Wallet", "Mobile apps and browser extensions", "⚠️ Less secure, more risk of hacking"]
      },
      cold: {
        title: "❄️ Cold Wallets",
        desc: "Not connected to the internet. For long-term storage.",
        list: ["Ledger, Trezor", "Physical USB-like devices", "✅ Maximum security for large amounts"]
      }
    },
    security: {
      title: "Key Security Concepts",
      list: [
        "<strong class=\"text-white\">Seed Phrase:</strong> 12-24 words that recover your wallet. NEVER share it.",
        "<strong class=\"text-white\">Private Key:</strong> Full access to your funds. Whoever has it controls your crypto.",
        "<strong class=\"text-white\">Public Address:</strong> Like your IBAN. You can share it to receive payments."
      ]
    },
    steps: {
      title: "Recommended First Steps",
      list: [
        { title: "Educate yourself first", desc: "Don't invest money you can't afford to lose. Learn before you buy." },
        { title: "Create a test wallet", desc: "Install MetaMask and practice with testnets without spending real money." },
        { title: "Start small", desc: "If you decide to invest, start with small amounts while you learn." }
      ]
    },
    buy: {
      title: "How to Buy Cryptocurrency",
      cex: {
        title: "Centralized Exchanges (CEX)",
        desc: "Companies that act as intermediaries (like a bank). Easiest for beginners.",
        list: ["✅ Easy to use (Card/Bank Transfer)", "✅ Customer support", "❌ You don't control private keys", "Examples: Coinbase, Binance, Kraken"]
      },
      dex: {
        title: "Decentralized Exchanges (DEX)",
        desc: "Peer-to-peer trading without intermediaries. Advanced usage.",
        list: ["✅ 100% control of funds", "✅ No ID verification (KYC) required", "❌ Complex to use, higher risk", "Examples: Uniswap, PancakeSwap"]
      }
    },
    trading: {
      title: "Trading Basics",
      market: { title: "Market Order", desc: "Buy/Sell immediately at the current best price." },
      limit: { title: "Limit Order", desc: "Set a specific price you want to buy/sell at. Executes only if that price is reached." }
    },
    portfolio: {
      title: "Portfolio Building",
      desc: "The most common mistake beginners make is putting \"all their eggs in one basket\".",
      sample: "Sample Beginner Portfolio",
      btc: "Bitcoin (Low Risk)",
      eth: "Ethereum (Medium Risk)",
      alt: "Altcoins (High Risk)"
    },
    cta: {
      title: "Continue Your Learning",
      desc: "Discover how governments are creating their own digital currencies.",
      btn_cbdc: "Understanding CBDCs",
      btn_security: "Security Guide"
    }
  },
  es: {
    badge: "💰 Curso Gratuito",
    title_prefix: "Cripto",
    title_suffix: "101",
    subtitle: "Todo lo que necesitas saber sobre criptomonedas, explicado sin jerga técnica.",
    what_is: {
      title: "¿Qué son las Criptomonedas?",
      p1: "Las criptomonedas son <strong class=\"text-white\">dinero digital</strong> que funciona sin bancos ni gobiernos. Usan tecnología blockchain para asegurar que las transacciones sean seguras, transparentes e irreversibles.",
      p2: "A diferencia del dólar o el euro, no están controladas por ninguna institución central. Su valor se determina por la oferta y la demanda, similar a las acciones de una empresa."
    },
    main_cryptos: {
      title: "Las Principales Criptomonedas",
      btc: {
        title: "Bitcoin (BTC)",
        desc: "La primera y más conocida criptomoneda. Creada en 2009 por Satoshi Nakamoto.",
        list: ["Máximo 21 millones de unidades", "\"Oro digital\" - reserva de valor", "La más descentralizada y segura"]
      },
      eth: {
        title: "Ethereum (ETH)",
        desc: "Plataforma para construir aplicaciones descentralizadas. Creada en 2015 por Vitalik Buterin.",
        list: ["Contratos inteligentes programables", "Base de DeFi y NFTs", "Más que dinero: es una plataforma"]
      }
    },
    wallet: {
      title: "¿Qué es una Wallet (Billetera)?",
      desc: "Una wallet es como tu cuenta bancaria digital, pero tú eres tu propio banco. Hay dos tipos principales:",
      hot: {
        title: "🔥 Hot Wallets (Calientes)",
        desc: "Conectadas a internet. Prácticas para uso diario.",
        list: ["MetaMask, Trust Wallet", "Apps móviles y extensiones", "⚠️ Menos seguras, mayor riesgo de hackeo"]
      },
      cold: {
        title: "❄️ Cold Wallets (Frías)",
        desc: "No conectadas a internet. Para almacenamiento a largo plazo.",
        list: ["Ledger, Trezor", "Dispositivos físicos tipo USB", "✅ Máxima seguridad para grandes cantidades"]
      }
    },
    security: {
      title: "Conceptos Clave de Seguridad",
      list: [
        "<strong class=\"text-white\">Frase Semilla:</strong> 12-24 palabras para recuperar tu wallet. NUNCA la compartas.",
        "<strong class=\"text-white\">Clave Privada:</strong> Acceso total a tus fondos. Quien la tiene controla tu cripto.",
        "<strong class=\"text-white\">Dirección Pública:</strong> Como tu IBAN. Puedes compartirla para recibir pagos."
      ]
    },
    steps: {
      title: "Primeros Pasos Recomendados",
      list: [
        { title: "Edúcate primero", desc: "No inviertas dinero que no puedas permitirte perder. Aprende antes de comprar." },
        { title: "Crea una wallet de prueba", desc: "Instala MetaMask y practica con testnets (redes de prueba) sin gastar dinero real." },
        { title: "Empieza pequeño", desc: "Si decides invertir, comienza con cantidades pequeñas mientras aprendes." }
      ]
    },
    buy: {
      title: "Cómo Comprar Criptomonedas",
      cex: {
        title: "Exchanges Centralizados (CEX)",
        desc: "Empresas que actúan como intermediarios (como un banco). Lo más fácil para principiantes.",
        list: ["✅ Fácil de usar (Tarjeta/Transferencia)", "✅ Soporte al cliente", "❌ No controlas las claves privadas", "Ejemplos: Coinbase, Binance, Kraken"]
      },
      dex: {
        title: "Exchanges Descentralizados (DEX)",
        desc: "Trading peer-to-peer sin intermediarios. Uso avanzado.",
        list: ["✅ 100% control de fondos", "✅ Sin verificación de identidad (KYC)", "❌ Complejo de usar, mayor riesgo", "Ejemplos: Uniswap, PancakeSwap"]
      }
    },
    trading: {
      title: "Conceptos Básicos de Trading",
      market: { title: "Orden de Mercado", desc: "Compra/Venta inmediata al mejor precio actual." },
      limit: { title: "Orden Límite", desc: "Establece un precio específico. Se ejecuta solo si se llega a ese precio." }
    },
    portfolio: {
      title: "Construcción de Portafolio",
      desc: "El error más común de los principiantes es poner \"todos los huevos en la misma cesta\".",
      sample: "Portafolio de Ejemplo",
      btc: "Bitcoin (Bajo Riesgo)",
      eth: "Ethereum (Riesgo Medio)",
      alt: "Altcoins (Alto Riesgo)"
    },
    cta: {
      title: "Continúa Aprendiendo",
      desc: "Descubre cómo los gobiernos están creando sus propias monedas digitales.",
      btn_cbdc: "Entendiendo CBDCs",
      btn_security: "Guía de Seguridad"
    }
  }
}

export default function Crypto101Page() {
  const { lng } = useParams<{ lng: string }>()
  const t = translations[lng as keyof typeof translations] || translations.en

  return (
    <div className="min-h-screen bg-slate-950">
      <MainNav lng={lng} />
      
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-teal-500/10 text-teal-400 border-teal-500/20">
              {t.badge}
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">{t.title_prefix}</span> {t.title_suffix}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Coins className="w-8 h-8 text-cyan-400" />
                {t.what_is.title}
              </h2>
              <p className="text-slate-300 text-lg" dangerouslySetInnerHTML={{ __html: t.what_is.p1 }} />
              <p className="text-slate-300 mt-4">
                {t.what_is.p2}
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">{t.main_cryptos.title}</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border-orange-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <span className="text-3xl">₿</span>
                    {t.main_cryptos.btc.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-300">{t.main_cryptos.btc.desc}</p>
                  <ul className="text-sm text-slate-400 space-y-1">
                    {t.main_cryptos.btc.list.map((item, i) => <li key={i}>• {item}</li>)}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-indigo-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <span className="text-3xl">Ξ</span>
                    {t.main_cryptos.eth.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-300">{t.main_cryptos.eth.desc}</p>
                  <ul className="text-sm text-slate-400 space-y-1">
                    {t.main_cryptos.eth.list.map((item, i) => <li key={i}>• {item}</li>)}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Wallet className="w-8 h-8 text-teal-400" />
              {t.wallet.title}
            </h2>
            
            <p className="text-slate-300 mb-6">
              {t.wallet.desc}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-cyan-400 font-semibold mb-3">{t.wallet.hot.title}</h3>
                <p className="text-slate-400 text-sm mb-3">{t.wallet.hot.desc}</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  {t.wallet.hot.list.map((item, i) => <li key={i}>• {item}</li>)}
                </ul>
              </div>
              
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-teal-400 font-semibold mb-3">{t.wallet.cold.title}</h3>
                <p className="text-slate-400 text-sm mb-3">{t.wallet.cold.desc}</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  {t.wallet.cold.list.map((item, i) => <li key={i}>• {item}</li>)}
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-6 my-8">
              <h3 className="text-red-400 font-semibold flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5" />
                {t.security.title}
              </h3>
              <ul className="text-slate-300 space-y-2">
                {t.security.list.map((item, i) => <li key={i}>• <span dangerouslySetInnerHTML={{ __html: item }} /></li>)}
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mt-8 mb-6">{t.steps.title}</h2>
            <ol className="space-y-4">
              {t.steps.list.map((step, i) => (
                <li key={i} className="flex items-start gap-4 bg-slate-800/30 border border-slate-700 rounded-xl p-4">
                  <span className="bg-cyan-500/20 text-cyan-400 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">{i+1}</span>
                  <div>
                    <h4 className="text-white font-semibold">{step.title}</h4>
                    <p className="text-slate-400 text-sm">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

      </section>

      {/* Extended Content */}
      <section className="py-16 bg-slate-900/30 border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <CreditCard className="w-8 h-8 text-emerald-400" />
              {t.buy.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h3 className="text-white font-semibold mb-3">{t.buy.cex.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{t.buy.cex.desc}</p>
                <ul className="text-slate-300 text-sm space-y-2">
                  {t.buy.cex.list.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h3 className="text-white font-semibold mb-3">{t.buy.dex.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{t.buy.dex.desc}</p>
                <ul className="text-slate-300 text-sm space-y-2">
                  {t.buy.dex.list.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <LineChart className="w-8 h-8 text-blue-400" />
                  {t.trading.title}
                </h2>
                <div className="space-y-4">
                  <div className="bg-slate-800/30 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="text-white font-semibold">{t.trading.market.title}</h4>
                    <p className="text-slate-400 text-sm">{t.trading.market.desc}</p>
                  </div>
                  <div className="bg-slate-800/30 p-4 rounded-lg border-l-4 border-purple-500">
                    <h4 className="text-white font-semibold">{t.trading.limit.title}</h4>
                    <p className="text-slate-400 text-sm">{t.trading.limit.desc}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <PieChart className="w-8 h-8 text-pink-400" />
                  {t.portfolio.title}
                </h2>
                <p className="text-slate-300 mb-4">
                  {t.portfolio.desc}
                </p>
                <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700">
                  <h4 className="text-white font-semibold mb-3">{t.portfolio.sample}</h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center text-sm">
                      <span className="text-slate-300">{t.portfolio.btc}</span>
                      <span className="font-mono text-cyan-400">50%</span>
                    </li>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-500 w-1/2"></div>
                    </div>
                    <li className="flex justify-between items-center text-sm">
                      <span className="text-slate-300">{t.portfolio.eth}</span>
                      <span className="font-mono text-teal-400">30%</span>
                    </li>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-teal-500 w-[30%]"></div>
                    </div>
                    <li className="flex justify-between items-center text-sm">
                      <span className="text-slate-300">{t.portfolio.alt}</span>
                      <span className="font-mono text-purple-400">20%</span>
                    </li>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 w-[20%]"></div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-bold text-white">{t.cta.title}</h2>
            <p className="text-slate-400">{t.cta.desc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${lng}/learn/cbdc`}>
                <Button className="bg-gradient-to-r from-cyan-500 to-teal-500">
                  {t.cta.btn_cbdc} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href={`/${lng}/learn/safety`}>
                <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                  {t.cta.btn_security}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
