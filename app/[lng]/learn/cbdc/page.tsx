"use client"

import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Building2, Globe, Landmark, AlertTriangle, CheckCircle, Eye, Ban, Fingerprint, Calendar, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NewsletterForm } from "@/components/newsletter/newsletter-form"
import { useParams } from "next/navigation"

const translations = {
  en: {
    hero: {
      badge: "🏛️ Financial News",
      title: "What are <span class=\"bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent\">CBDCs</span>?",
      desc: "Central Bank Digital Currencies: the future of government-created money."
    },
    def: {
      title: "Simple Definition",
      p1: "A <strong class=\"text-white\">CBDC</strong> (Central Bank Digital Currency) is digital money issued directly by a central bank, like the European Central Bank or the Federal Reserve. It's the digital equivalent of cash.",
      p2: "Unlike cryptocurrencies like Bitcoin, CBDCs are <strong class=\"text-white\">controlled by the government</strong> and have the legal backing of the State."
    },
    privacy: {
      title: "Privacy Deep Dive: The Real Concern",
      p1: "The biggest debate surrounding CBDCs is about <strong>programmability</strong>. Since CBDCs are code, the issuer (the Central Bank) can program rules into the money itself.",
      expiry: { title: "Expiration Dates", desc: "Money that \"expires\" if not spent by a certain date, to stimulate the economy." },
      rules: { title: "Purchase Restrictions", desc: "Forbidding the purchase of certain goods (e.g., alcohol, travel) based on your social score or carbon footprint." }
    },
    table: {
      title: "CBDCs vs Cryptocurrencies vs Current Money",
      headers: ["Feature", "Bitcoin", "CBDC", "Dollar/Euro"],
      rows: [
        { feature: "Control", btc: "No one (decentralized)", cbdc: "Central Bank", trad: "Banks + Central Bank" },
        { feature: "Privacy", btc: "Pseudonymous", cbdc: "100% Traceable", trad: "Partially private" },
        { feature: "Supply limit", btc: "21 million fixed", cbdc: "Unlimited", trad: "Unlimited" },
        { feature: "Works offline", btc: "No", cbdc: "Possible (offline)", trad: "Yes (cash)" }
      ]
    },
    euro: {
      title: "The Digital Euro",
      desc: "The European Central Bank is developing the <strong class=\"text-white\">Digital Euro</strong>, expected by 2027-2028. It will be a complement to cash, not a replacement. These are the planned features:",
      benefits: { title: "✅ Promised Benefits", list: ["Instant payments across the eurozone", "Offline functionality", "Financial inclusion for the unbanked", "Lower cross-border payment costs"] },
      concerns: { title: "⚠️ Concerns", list: ["Total transaction surveillance", "Ability to remotely block funds", "Programmable money with restrictions", "Possible elimination of physical cash"] }
    },
    world: {
      title: "CBDCs Around the World",
      china: { title: "🇨🇳 China", desc: "<strong class=\"text-white\">Digital Yuan (e-CNY)</strong> - In use since 2020. Over 260 million active wallets." },
      eu: { title: "🇪🇺 Europe", desc: "<strong class=\"text-white\">Digital Euro</strong> - In development phase. Launch expected 2027-2028." },
      brazil: { title: "🇧🇷 Brazil", desc: "<strong class=\"text-white\">Drex</strong> - Advanced pilot. Focused on asset tokenization." }
    },
    timeline: {
      title: "Global Implementation Timeline",
      steps: [
        { year: "2020: The Start", desc: "Bahamas launches the \"Sand Dollar\", the world's first nationwide CBDC." },
        { year: "2022: Major Pilots", desc: "China expands digital yuan pilot to major cities. India launches digital rupee wholesale pilot." },
        { year: "2024-2025: Regulation", desc: "EU finalizes legal framework for Digital Euro. UK advances \"Britcoin\" design." },
        { year: "2027+: Launch", desc: "Expected launch of Digital Euro and potential US Digital Dollar." }
      ]
    },
    rec: {
      title: "💡 Our Recommendation",
      desc: "Regardless of your opinion on CBDCs, it's crucial to understand how they'll work. Stay informed, diversify your savings (cash + crypto + traditional banks), and know your rights as a citizen."
    },
    cta: {
      title: "Protect Your Financial Future",
      desc: "Learn to identify scams and keep your assets safe.",
      btn: "Security Guide"
    }
  },
  es: {
    hero: {
      badge: "🏛️ Noticias Financieras",
      title: "¿Qué son las <span class=\"bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent\">CBDCs</span>?",
      desc: "Monedas Digitales de Banco Central: el futuro del dinero creado por gobiernos."
    },
    def: {
      title: "Definición Simple",
      p1: "Una <strong class=\"text-white\">CBDC</strong> (Moneda Digital de Banco Central) es dinero digital emitido directamente por un banco central, como el BCE o la Reserva Federal. Es el equivalente digital del efectivo.",
      p2: "A diferencia de criptomonedas como Bitcoin, las CBDC son <strong class=\"text-white\">controladas por el gobierno</strong> y tienen el respaldo legal del Estado."
    },
    privacy: {
      title: "Profundizando en Privacidad: La Preocupación Real",
      p1: "El mayor debate sobre las CBDC gira en torno a la <strong>programabilidad</strong>. Dado que son código, el emisor (Banco Central) puede programar reglas en el dinero mismo.",
      expiry: { title: "Fechas de Caducidad", desc: "Dinero que \"caduca\" si no se gasta en cierta fecha, para estimular la economía." },
      rules: { title: "Restricciones de Compra", desc: "Prohibir la compra de ciertos bienes (ej. alcohol, viajes) basado en puntaje social o huella de carbono." }
    },
    table: {
      title: "CBDC vs Criptomonedas vs Dinero Actual",
      headers: ["Característica", "Bitcoin", "CBDC", "Dólar/Euro"],
      rows: [
        { feature: "Control", btc: "Nadie (descentralizado)", cbdc: "Banco Central", trad: "Bancos + Banco Central" },
        { feature: "Privacidad", btc: "Seudónimo", cbdc: "100% Rastreable", trad: "Parcialmente privado" },
        { feature: "Límite Oferta", btc: "21 millones fijo", cbdc: "Ilimitado", trad: "Ilimitado" },
        { feature: "Funciona Offline", btc: "No", cbdc: "Posible (offline)", trad: "Sí (efectivo)" }
      ]
    },
    euro: {
      title: "El Euro Digital",
      desc: "El Banco Central Europeo está desarrollando el <strong class=\"text-white\">Euro Digital</strong>, esperado para 2027-2028. Será un complemento al efectivo, no un reemplazo. Estas son las funciones planeadas:",
      benefits: { title: "✅ Beneficios Prometidos", list: ["Pagos instantáneos en la eurozona", "Funcionalidad offline", "Inclusión financiera para no bancarizados", "Menores costos en pagos transfronterizos"] },
      concerns: { title: "⚠️ Preocupaciones", list: ["Vigilancia total de transacciones", "Habilidad de bloquear fondos remotamente", "Dinero programable con restricciones", "Posible eliminación del efectivo físico"] }
    },
    world: {
      title: "CBDC Alrededor del Mundo",
      china: { title: "🇨🇳 China", desc: "<strong class=\"text-white\">Yuan Digital (e-CNY)</strong> - En uso desde 2020. Más de 260 millones de wallets activas." },
      eu: { title: "🇪🇺 Europa", desc: "<strong class=\"text-white\">Euro Digital</strong> - En fase de desarrollo. Lanzamiento esperado 2027-2028." },
      brazil: { title: "🇧🇷 Brasil", desc: "<strong class=\"text-white\">Drex</strong> - Piloto avanzado. Enfocado en tokenización de activos." }
    },
    timeline: {
      title: "Cronograma de Implementación Global",
      steps: [
        { year: "2020: El Comienzo", desc: "Bahamas lanza el \"Sand Dollar\", la primera CBDC nacional del mundo." },
        { year: "2022: Pilotos Mayores", desc: "China expande piloto de yuan digital. India lanza piloto de rupia digital mayorista." },
        { year: "2024-2025: Regulación", desc: "UE finaliza marco legal para Euro Digital. UK avanza diseño de \"Britcoin\"." },
        { year: "2027+: Lanzamiento", desc: "Lanzamiento esperado del Euro Digital y potencial Dólar Digital de EE.UU." }
      ]
    },
    rec: {
      title: "💡 Nuestra Recomendación",
      desc: "Independientemente de tu opinión sobre las CBDC, es crucial entender cómo funcionarán. Mantente informado, diversifica tus ahorros (efectivo + cripto + bancos tradicionales) y conoce tus derechos."
    },
    cta: {
      title: "Protege tu Futuro Financiero",
      desc: "Aprende a identificar estafas y mantener tus activos seguros.",
      btn: "Guía de Seguridad"
    }
  }
}

export default function CBDCPage() {
  const { lng } = useParams<{ lng: string }>()
  const t = translations[lng as keyof typeof translations] || translations.en

  return (
    <div className="min-h-screen bg-slate-950">
      <MainNav lng={lng} />
      
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
              {t.hero.badge}
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white" dangerouslySetInnerHTML={{ __html: t.hero.title }} />
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {t.hero.desc}
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
                <Landmark className="w-8 h-8 text-emerald-400" />
                {t.def.title}
              </h2>
              <p className="text-slate-300 text-lg" dangerouslySetInnerHTML={{ __html: t.def.p1 }} />
              <p className="text-slate-300 mt-4" dangerouslySetInnerHTML={{ __html: t.def.p2 }} />
            </div>

            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Fingerprint className="w-8 h-8 text-red-400" />
              {t.privacy.title}
            </h2>
            <div className="bg-slate-800/30 border-l-4 border-red-500 rounded-r-xl p-6 mb-12 space-y-4">
              <p className="text-slate-300" dangerouslySetInnerHTML={{ __html: t.privacy.p1 }} />
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <h4 className="text-white font-semibold flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-orange-400" />
                    {t.privacy.expiry.title}
                  </h4>
                  <p className="text-sm text-slate-400">
                    {t.privacy.expiry.desc}
                  </p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <h4 className="text-white font-semibold flex items-center gap-2 mb-2">
                    <Lock className="w-4 h-4 text-orange-400" />
                    {t.privacy.rules.title}
                  </h4>
                  <p className="text-sm text-slate-400">
                    {t.privacy.rules.desc}
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">{t.table.title}</h2>
            
            <div className="overflow-x-auto mb-12">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    {t.table.headers.map((h, i) => (
                      <th key={i} className={`text-center py-4 px-4 ${i === 0 ? 'text-left text-slate-400' : ''} ${i === 1 ? 'text-cyan-400' : ''} ${i === 2 ? 'text-emerald-400' : ''} ${i === 3 ? 'text-slate-400' : ''}`}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {t.table.rows.map((row, i) => (
                    <tr key={i} className="border-b border-slate-800">
                      <td className="py-4 px-4">{row.feature}</td>
                      <td className="text-center py-4 px-4">{row.btc}</td>
                      <td className="text-center py-4 px-4">{row.cbdc}</td>
                      <td className="text-center py-4 px-4">{row.trad}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Globe className="w-8 h-8 text-cyan-400" />
              {t.euro.title}
            </h2>
            
            <p className="text-slate-300 mb-6" dangerouslySetInnerHTML={{ __html: t.euro.desc }} />

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-emerald-400 font-semibold mb-4">{t.euro.benefits.title}</h3>
                <ul className="text-slate-300 text-sm space-y-2">
                  {t.euro.benefits.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-red-400 font-semibold mb-4">{t.euro.concerns.title}</h3>
                <ul className="text-slate-300 text-sm space-y-2">
                  {t.euro.concerns.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="mt-0.5 flex-shrink-0">
                        {i === 0 ? <Eye className="w-4 h-4 text-red-400" /> : 
                         i === 1 ? <Ban className="w-4 h-4 text-red-400" /> : 
                         <AlertTriangle className="w-4 h-4 text-red-400" />}
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">{t.world.title}</h2>
            
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              <Card className="bg-red-500/10 border-red-500/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white text-lg">{t.world.china.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm" dangerouslySetInnerHTML={{ __html: t.world.china.desc }} />
                </CardContent>
              </Card>
              
              <Card className="bg-blue-500/10 border-blue-500/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white text-lg">{t.world.eu.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm" dangerouslySetInnerHTML={{ __html: t.world.eu.desc }} />
                </CardContent>
              </Card>
              
              <Card className="bg-green-500/10 border-green-500/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white text-lg">{t.world.brazil.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm" dangerouslySetInnerHTML={{ __html: t.world.brazil.desc }} />
                </CardContent>
              </Card>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Calendar className="w-8 h-8 text-teal-400" />
                {t.timeline.title}
              </h2>
              <div className="relative border-l border-slate-700 ml-4 space-y-8 pl-8">
                {t.timeline.steps.map((step, i) => (
                  <div key={i} className="relative">
                    <span className={`absolute -left-[41px] ${i === 2 ? 'bg-cyan-900/50 border-cyan-500/50 text-cyan-400' : 'bg-slate-800 border-slate-600 text-slate-400'} border rounded-full w-6 h-6 flex items-center justify-center text-xs`}>
                      {i + 1}
                    </span>
                    <h3 className={`${i === 2 ? 'text-cyan-400' : 'text-white'} font-bold ml-2`}>{step.year}</h3>
                    <p className={`${i === 2 ? 'text-slate-300' : 'text-slate-400'} text-sm ml-2`}>{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3">{t.rec.title}</h3>
              <p className="text-slate-300">
                {t.rec.desc}
              </p>
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
              <Link href={`/${lng}/learn/safety`}>
                <Button className="bg-gradient-to-r from-cyan-500 to-teal-500">
                  {t.cta.btn} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <NewsletterForm variant="modal" buttonText="Get Alerts" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
