import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getCourseBySlug } from "@/lib/courses-data"
import { MainNav } from "@/components/main-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Blocks, Globe, Wallet, Code, CheckCircle, History, Briefcase, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NewsletterForm } from "@/components/newsletter/newsletter-form"

export async function generateMetadata({ params }: { params: Promise<{ lng: string }> }): Promise<Metadata> {
  const { lng } = await params
  const course = getCourseBySlug('web3-basics', lng)

  if (!course) {
    return {
      title: "Course Not Found | Memento Academy",
    }
  }

  return {
    title: `${course.title} | Memento Academy`,
    description: course.description,
    keywords: [course.title, "web3 course", "crypto education", "blockchain"],
  }
}

const translations = {
  en: {
    badge: "📚 Free Course",
    title_prefix: "What is",
    title_highlight: "Web3",
    title_suffix: "?",
    subtitle: "The definitive guide to understanding the new era of the internet. No jargon, completely free.",
    evolution: {
      title: "The Evolution of the Internet",
      stages: [
        { icon: "📖", title: "Web 1.0", desc: "Read-only. Static pages with no interaction." },
        { icon: "💬", title: "Web 2.0", desc: "Social media. You create content but don't control it." },
        { icon: "🔐", title: "Web 3.0", desc: "You control your data, identity, and money." }
      ]
    },
    history: {
      title: "A Brief History",
      events: [
        { year: "2008", desc: "Bitcoin whitepaper published by Satoshi Nakamoto, introducing blockchain." },
        { year: "2015", desc: "Ethereum launches, enabling smart contracts and programmable money." },
        { year: "2020", desc: "DeFi Summer. Decentralized Finance explodes in popularity." },
        { year: "2021", desc: "NFTs go mainstream. Digital ownership becomes a cultural phenomenon." }
      ]
    },
    blockchain: {
      title: "What is Blockchain?",
      p1: "Imagine a giant ledger that everyone can see, but no one can modify once written. That's blockchain: a public, transparent, and immutable record of all transactions.",
      p2: "Instead of trusting a bank or company, trust is distributed among thousands of computers that verify each operation. There's no single point of failure or central authority.",
      example: {
        title: "💡 Everyday Example",
        text: "When you send money via bank transfer, the bank is the intermediary that verifies and processes it. With blockchain, thousands of computers automatically verify transactions, without intermediaries, 24/7 and at lower cost."
      }
    },
    apps: {
      title: "Web3 Applications",
      defi: { title: "Decentralized Finance (DeFi)", desc: "Loans, savings, and investments without traditional banks. Accessible to anyone with internet." },
      nfts: { title: "NFTs & Digital Ownership", desc: "Unique digital certificates that prove ownership of art, music, virtual land, and more." }
    },
    useCases: {
      title: "Real-World Use Cases",
      cases: [
        { icon: "🗳️", title: "Voting", desc: "Transparent, tamper-proof voting systems for governments and organizations." },
        { icon: "📦", title: "Supply Chain", desc: "Tracking products from origin to consumer to verify authenticity." },
        { icon: "🆔", title: "Digital Identity", desc: "Owning your digital ID without relying on Google or Facebook login." }
      ]
    },
    trends: {
      title: "Future Trends",
      subtitle: "Web3 is still in its early stages. Here's what experts predict for the next decade:",
      list: [
        "Mass adoption via easier-to-use wallets",
        "Integration with AI agents",
        "Tokenization of real-world assets (real estate, stocks)",
        "Decentralized social media platforms"
      ]
    },
    benefits: {
      title: "Why Should You Care?",
      list: [
        { bold: "Control your data:", text: "You decide who accesses your personal information." },
        { bold: "Censorship-resistant:", text: "Content and transactions that can't be blocked by third parties." },
        { bold: "Financial inclusion:", text: "Banking services accessible to the 1.7 billion unbanked people worldwide." },
        { bold: "New opportunities:", text: "Jobs, investments, and business models that didn't exist before." }
      ]
    },
    cta: {
      title: "Ready for the Next Step?",
      subtitle: "Continue learning with our cryptocurrency guide for beginners.",
      btn: "Crypto 101",
      subscribe: "Subscribe Free"
    }
  },
  es: {
    badge: "📚 Curso Gratuito",
    title_prefix: "¿Qué es",
    title_highlight: "Web3",
    title_suffix: "?",
    subtitle: "La guía definitiva para entender la nueva era de internet. Sin tecnicismos, completamente gratis.",
    evolution: {
      title: "La Evolución de Internet",
      stages: [
        { icon: "📖", title: "Web 1.0", desc: "Solo lectura. Páginas estáticas sin interacción." },
        { icon: "💬", title: "Web 2.0", desc: "Redes sociales. Creas contenido pero no lo controlas." },
        { icon: "🔐", title: "Web 3.0", desc: "Tú controlas tus datos, tu identidad y tu dinero." }
      ]
    },
    history: {
      title: "Breve Historia",
      events: [
        { year: "2008", desc: "Satoshi Nakamoto publica el whitepaper de Bitcoin, introduciendo blockchain." },
        { year: "2015", desc: "Lanzamiento de Ethereum, habilitando contratos inteligentes y dinero programable." },
        { year: "2020", desc: "Verano DeFi. Las Finanzas Descentralizadas explotan en popularidad." },
        { year: "2021", desc: "NFTs se vuelven mainstream. La propiedad digital se convierte en fenómeno cultural." }
      ]
    },
    blockchain: {
      title: "¿Qué es Blockchain?",
      p1: "Imagina un libro de contabilidad gigante que todos pueden ver, pero nadie puede modificar una vez escrito. Eso es blockchain: un registro público, transparente e inmutable de todas las transacciones.",
      p2: "En lugar de confiar en un banco o empresa, la confianza se distribuye entre miles de computadoras que verifican cada operación. No hay un punto único de fallo ni autoridad central.",
      example: {
        title: "💡 Ejemplo Cotidiano",
        text: "Cuando envías dinero por transferencia bancaria, el banco es el intermediario que verifica y procesa. Con blockchain, miles de computadoras verifican automáticamente las transacciones, sin intermediarios, 24/7 y a menor costo."
      }
    },
    apps: {
      title: "Aplicaciones Web3",
      defi: { title: "Finanzas Descentralizadas (DeFi)", desc: "Préstamos, ahorros e inversiones sin bancos tradicionales. Accesible para cualquier persona con internet." },
      nfts: { title: "NFTs y Propiedad Digital", desc: "Certificados digitales únicos que prueban la propiedad de arte, música, terrenos virtuales y más." }
    },
    useCases: {
      title: "Casos de Uso en el Mundo Real",
      cases: [
        { icon: "🗳️", title: "Votación", desc: "Sistemas de votación transparentes y a prueba de manipulaciones." },
        { icon: "📦", title: "Cadena de Suministro", desc: "Rastreo de productos desde el origen hasta el consumidor." },
        { icon: "🆔", title: "Identidad Digital", desc: "Ser dueño de tu ID digital sin depender de Google o Facebook." }
      ]
    },
    trends: {
      title: "Tendencias Futuras",
      subtitle: "Web3 está todavía en sus primeras etapas. Esto predicen los expertos:",
      list: [
        "Adopción masiva a través de billeteras más fáciles de usar",
        "Integración con agentes de IA",
        "Tokenización de activos reales (inmuebles, acciones)",
        "Plataformas de redes sociales descentralizadas"
      ]
    },
    benefits: {
      title: "¿Por qué debería importarte?",
      list: [
        { bold: "Controla tus datos:", text: "Tú decides quién accede a tu información personal." },
        { bold: "Resistente a la censura:", text: "Contenido y transacciones que no pueden ser bloqueados por terceros." },
        { bold: "Inclusión financiera:", text: "Servicios bancarios accesibles para 1.7 mil millones de no bancarizados." },
        { bold: "Nuevas oportunidades:", text: "Trabajos, inversiones y modelos de negocio que no existían antes." }
      ]
    },
    cta: {
      title: "¿Listo para el siguiente paso?",
      subtitle: "Continúa aprendiendo con nuestra guía de criptomonedas para principiantes.",
      btn: "Cripto 101",
      subscribe: "Suscríbete Gratis"
    }
  }
}

export default async function Web3BasicsPage({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params
  const course = getCourseBySlug('web3-basics', lng)
  
  // Type-safe language selection fallback to 'en'
  const t = translations[lng as keyof typeof translations] || translations.en

  if (!course) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <MainNav lng={lng} />
      
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
              {t.badge}
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              {t.title_prefix} <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">{t.title_highlight}</span>{t.title_suffix}
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
          <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
            
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mt-0">{t.evolution.title}</h2>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="text-center p-4 rounded-xl bg-slate-900/50">
                  <div className="text-3xl mb-2">{t.evolution.stages[0].icon}</div>
                  <h3 className="text-cyan-400 font-semibold">{t.evolution.stages[0].title}</h3>
                  <p className="text-slate-400 text-sm">{t.evolution.stages[0].desc}</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-900/50">
                  <div className="text-3xl mb-2">{t.evolution.stages[1].icon}</div>
                  <h3 className="text-teal-400 font-semibold">{t.evolution.stages[1].title}</h3>
                  <p className="text-slate-400 text-sm">{t.evolution.stages[1].desc}</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-900/50">
                  <div className="text-3xl mb-2">{t.evolution.stages[2].icon}</div>
                  <h3 className="text-emerald-400 font-semibold">{t.evolution.stages[2].title}</h3>
                  <p className="text-slate-400 text-sm">{t.evolution.stages[2].desc}</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-4">
              <History className="w-8 h-8 text-purple-400" />
              {t.history.title}
            </h2>
            <div className="space-y-4 mb-12">
              {t.history.events.map((event, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-none w-20 text-right font-bold text-cyan-400">{event.year}</div>
                  <div className="text-slate-300">{event.desc}</div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-4">
              <Blocks className="w-8 h-8 text-cyan-400" />
              {t.blockchain.title}
            </h2>
            <p className="text-slate-300">
              {t.blockchain.p1}
            </p>
            <p className="text-slate-300">
              {t.blockchain.p2}
            </p>

            <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-xl p-6 my-8">
              <h3 className="text-cyan-400 font-semibold mt-0 mb-3">{t.blockchain.example.title}</h3>
              <p className="text-slate-300 mb-0">
                {t.blockchain.example.text}
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-4">
              <Globe className="w-8 h-8 text-teal-400" />
              {t.apps.title}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Wallet className="w-5 h-5 text-cyan-400" />
                    {t.apps.defi.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-400">
                  {t.apps.defi.desc}
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Code className="w-5 h-5 text-teal-400" />
                    {t.apps.nfts.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-400">
                  {t.apps.nfts.desc}
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-4">
              <Briefcase className="w-8 h-8 text-orange-400" />
              {t.useCases.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {t.useCases.cases.map((useCase, i) => (
                <div key={i} className="bg-slate-800/30 p-4 rounded-xl border border-slate-700">
                  <h3 className="font-semibold text-white mb-2">{useCase.icon} {useCase.title}</h3>
                  <p className="text-sm text-slate-400">{useCase.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-4 mt-0">
                <TrendingUp className="w-8 h-8 text-indigo-400" />
                {t.trends.title}
              </h2>
              <p className="text-slate-300 mb-4">
                {t.trends.subtitle}
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                {t.trends.list.map((trend, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-300">
                    <span className="text-indigo-400 font-bold">•</span>
                    {trend}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">{t.benefits.title}</h2>
            <ul className="space-y-3 mt-4">
              {t.benefits.list.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-300"><strong className="text-white">{benefit.bold}</strong> {benefit.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-bold text-white">{t.cta.title}</h2>
            <p className="text-slate-400">{t.cta.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${lng}/learn/crypto-101`}>
                <Button className="bg-gradient-to-r from-cyan-500 to-teal-500">
                  {t.cta.btn} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <NewsletterForm variant="modal" buttonText={t.cta.subscribe} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
