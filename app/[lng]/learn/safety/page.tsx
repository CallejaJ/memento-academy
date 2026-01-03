"use client"

import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, AlertTriangle, Lock, Eye, Phone, Mail, CheckCircle, XCircle, LifeBuoy, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NewsletterForm } from "@/components/newsletter/newsletter-form"
import { useParams } from "next/navigation"

const translations = {
  en: {
    hero: {
      badge: "🛡️ Essential Security",
      title: "<span class=\"bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent\">Security</span> Guide",
      desc: "Protect yourself from scams and learn to keep your digital assets safe."
    },
    golden: {
      title: "The Golden Rule",
      p1: "NEVER share your seed phrase or private key with ANYONE.",
      p2: "No legitimate company, tech support, or \"expert\" will ever ask for this information. Anyone who asks is trying to steal from you."
    },
    scams: {
      title: "Most Common Scams",
      phishing: {
        title: "Phishing (Impersonation)",
        desc: "Fake emails, messages, or websites that imitate legitimate platforms to steal your credentials.",
        warn: {
          title: "Warning Signs",
          list: ["Slightly different URLs (metamsk.io)", "Urgency: \"Your account will be locked\"", "Asking for seed phrase or private key"]
        },
        protect: {
          title: "How to Protect Yourself",
          list: ["ALWAYS verify the official URL", "Use bookmarks for important sites", "Never click links in emails"]
        }
      },
      support: {
        title: "Fake Tech Support",
        desc: "\"Support agents\" who contact you to \"help\" with a problem you never had.",
        warn: {
          title: "Common Tactics",
          list: ["They contact you first (you didn't seek them)", "Ask for remote access to your device", "Request to \"verify\" your wallet"]
        },
        protect: {
          title: "How to Protect Yourself",
          list: ["Support NEVER contacts first", "Only use official channels", "Never give remote access"]
        }
      },
      airdrop: {
        title: "Fake Airdrops & Free Tokens",
        desc: "Tokens that magically appear in your wallet. When you try to sell them, they steal your real funds.",
        warn: {
          title: "How They Work",
          list: ["You receive \"free\" tokens you didn't request", "When you approve the sale, they drain your wallet", "Malicious contracts hidden inside"]
        },
        protect: {
          title: "How to Protect Yourself",
          list: ["IGNORE unknown tokens", "Never interact with them", "Don't approve suspicious contracts"]
        }
      }
    },
    action: {
      hack: {
        title: "What to do if hacked?",
        steps: [
          "<strong>Disconnect immediately:</strong> Revoke all permissions and disconnect your wallet from all sites.",
          "<strong>Move remaining funds:</strong> If you still have access, send remaining assets to a secure device/wallet.",
          "<strong>Scan for malware:</strong> Do not use the compromised device until it has been cleaned or formatted.",
          "<strong>Report:</strong> Contact the platform (if CEX) or report to databases like Chainabuse."
        ]
      },
      tools: {
        title: "Protection Tools",
        list: [
          "<strong>Hardware Wallets:</strong> Ledger, Trezor (Physical protection).",
          "<strong>Revoke.cash:</strong> Tool to revoke permissions you gave to smart contracts.",
          "<strong>Pocket Universe / Fire:</strong> Browser extensions that simulate transactions before you sign.",
          "<strong>DeFi Insurance:</strong> Protocols like Nexus Mutual that cover smart contract bugs."
        ]
      }
    },
    checklist: {
      title: "Security Checklist",
      items: [
        { title: "Enable 2FA everywhere", desc: "Two-factor authentication with apps like Google Authenticator or Authy. Avoid SMS." },
        { title: "Use unique passwords", desc: "A password manager like Bitwarden or 1Password is essential." },
        { title: "Store your seed phrase offline", desc: "On paper or metal, never in photos, cloud storage, or digital notes." },
        { title: "Separate hot and cold wallets", desc: "Use hot wallets for daily use with small amounts, cold wallets for storage." },
        { title: "Verify addresses before sending", desc: "Malware can change copied addresses. Always verify the first and last characters." }
      ]
    },
    warning: {
      title: "🚨 Have you been scammed?",
      desc: "Unfortunately, blockchain transactions are irreversible. Report the incident to authorities and warn the community to prevent more victims. Learn from the experience to better protect yourself in the future."
    },
    cta: {
      title: "Stay Updated",
      desc: "Receive alerts about new scams and security tips.",
      sub: "Subscribe Free",
      back: "Back to Web3 Basics"
    }
  },
  es: {
    hero: {
      badge: "🛡️ Seguridad Esencial",
      title: "Guía de <span class=\"bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent\">Seguridad</span>",
      desc: "Protégete de estafas y aprende a mantener seguros tus activos digitales."
    },
    golden: {
      title: "La Regla de Oro",
      p1: "NUNCA compartas tu frase semilla o clave privada con NADIE.",
      p2: "Ninguna compañía legítima, soporte técnico o \"experto\" te pedirá jamás esta información. Cualquiera que lo pida está intentando robarte."
    },
    scams: {
      title: "Estafas Más Comunes",
      phishing: {
        title: "Phishing (Suplantación)",
        desc: "Correos, mensajes o sitios web falsos que imitan plataformas legítimas para robar tus credenciales.",
        warn: {
          title: "Señales de Alerta",
          list: ["URLs ligeramente diferentes (metamsk.io)", "Urgencia: \"Tu cuenta será bloqueada\"", "Piden frase semilla o clave privada"]
        },
        protect: {
          title: "Cómo Protegerte",
          list: ["SIEMPRE verifica la URL oficial", "Usa marcadores para sitios importantes", "Nunca hagas clic en enlaces de correos"]
        }
      },
      support: {
        title: "Soporte Técnico Falso",
        desc: "\"Agentes de soporte\" que te contactan para \"ayudarte\" con un problema que nunca tuviste.",
        warn: {
          title: "Tácticas Comunes",
          list: ["Ellos te contactan primero (tú no los buscaste)", "Piden acceso remoto a tu dispositivo", "Piden \"verificar\" tu wallet"]
        },
        protect: {
          title: "Cómo Protegerte",
          list: ["Soporte NUNCA contacta primero", "Solo usa canales oficiales", "Nunca des acceso remoto"]
        }
      },
      airdrop: {
        title: "Airdrops y Tokens Falsos",
        desc: "Tokens que aparecen mágicamente en tu wallet. Cuando intentas venderlos, vacían tu billetera.",
        warn: {
          title: "Cómo Funcionan",
          list: ["Recibes tokens \"gratis\" que no pediste", "Al aprobar la venta, drenan tu wallet", "Contratos maliciosos ocultos"]
        },
        protect: {
          title: "Cómo Protegerte",
          list: ["IGNORA tokens desconocidos", "Nunca interactúes con ellos", "No apruebes contratos sospechosos"]
        }
      }
    },
    action: {
      hack: {
        title: "¿Qué hacer si te hackean?",
        steps: [
          "<strong>Desconecta inmediatamente:</strong> Revoca permisos y desconecta tu wallet de todos los sitios.",
          "<strong>Mueve fondos restantes:</strong> Si aún tienes acceso, envía lo que quede a un dispositivo/wallet seguro.",
          "<strong>Escanea malware:</strong> No uses el dispositivo comprometido hasta limpiarlo o formatearlo.",
          "<strong>Reporta:</strong> Contacta a la plataforma (si es CEX) o reporta a bases de datos como Chainabuse."
        ]
      },
      tools: {
        title: "Herramientas de Protección",
        list: [
          "<strong>Hardware Wallets:</strong> Ledger, Trezor (Protección física).",
          "<strong>Revoke.cash:</strong> Herramienta para revocar permisos dados a contratos inteligentes.",
          "<strong>Pocket Universe / Fire:</strong> Extensiones que simulan transacciones antes de firmar.",
          "<strong>Seguro DeFi:</strong> Protocolos como Nexus Mutual que cubren bugs de contratos."
        ]
      }
    },
    checklist: {
      title: "Checklist de Seguridad",
      items: [
        { title: "Activa 2FA en todo", desc: "Autenticación de dos pasos con apps como Google Authenticator o Authy. Evita SMS." },
        { title: "Usa contraseñas únicas", desc: "Un gestor de contraseñas como Bitwarden o 1Password es esencial." },
        { title: "Guarda tu frase semilla offline", desc: "En papel o metal, nunca en fotos, nube o notas digitales." },
        { title: "Separa wallets calientes y frías", desc: "Usa hot wallets para diario con montos pequeños, cold wallets para ahorro." },
        { title: "Verifica direcciones antes de enviar", desc: "El malware puede cambiar direcciones copiadas. Siempre verifica primeros y últimos caracteres." }
      ]
    },
    warning: {
      title: "🚨 ¿Has sido estafado?",
      desc: "Desafortunadamente, las transacciones blockchain son irreversibles. Reporta el incidente a autoridades y advierte a la comunidad. Aprende de la experiencia para protegerte mejor en el futuro."
    },
    cta: {
      title: "Mantente Actualizado",
      desc: "Recibe alertas sobre nuevas estafas y consejos de seguridad.",
      sub: "Suscríbete Gratis",
      back: "Volver a Básicos Web3"
    }
  }
}

export default function SafetyPage() {
  const { lng } = useParams<{ lng: string }>()
  const t = translations[lng as keyof typeof translations] || translations.en

  return (
    <div className="min-h-screen bg-slate-950">
      <MainNav lng={lng} />
      
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-red-500/10 text-red-400 border-red-500/20">
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
            
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-red-400" />
                {t.golden.title}
              </h2>
              <p className="text-xl text-slate-300">
                <strong className="text-white">{t.golden.p1}</strong>
              </p>
              <p className="text-slate-400 mt-4">
                {t.golden.p2}
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">{t.scams.title}</h2>
            
            <div className="space-y-6 mb-12">
              {/* Phishing */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <Mail className="w-6 h-6 text-red-400" />
                    {t.scams.phishing.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300">
                    {t.scams.phishing.desc}
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                      <h4 className="text-red-400 font-semibold mb-2 flex items-center gap-2">
                        <XCircle className="w-4 h-4" /> {t.scams.phishing.warn.title}
                      </h4>
                      <ul className="text-slate-400 text-sm space-y-1">
                        {t.scams.phishing.warn.list.map((item, i) => <li key={i}>• {item}</li>)}
                      </ul>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                      <h4 className="text-emerald-400 font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" /> {t.scams.phishing.protect.title}
                      </h4>
                      <ul className="text-slate-400 text-sm space-y-1">
                        {t.scams.phishing.protect.list.map((item, i) => <li key={i}>• {item}</li>)}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Support */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <Phone className="w-6 h-6 text-red-400" />
                    {t.scams.support.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300">
                    {t.scams.support.desc}
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                      <h4 className="text-red-400 font-semibold mb-2 flex items-center gap-2">
                        <XCircle className="w-4 h-4" /> {t.scams.support.warn.title}
                      </h4>
                      <ul className="text-slate-400 text-sm space-y-1">
                         {t.scams.support.warn.list.map((item, i) => <li key={i}>• {item}</li>)}
                      </ul>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                      <h4 className="text-emerald-400 font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" /> {t.scams.support.protect.title}
                      </h4>
                      <ul className="text-slate-400 text-sm space-y-1">
                        {t.scams.support.protect.list.map((item, i) => <li key={i}>• {item}</li>)}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Airdrop */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <Eye className="w-6 h-6 text-red-400" />
                    {t.scams.airdrop.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300">
                    {t.scams.airdrop.desc}
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                      <h4 className="text-red-400 font-semibold mb-2 flex items-center gap-2">
                        <XCircle className="w-4 h-4" /> {t.scams.airdrop.warn.title}
                      </h4>
                      <ul className="text-slate-400 text-sm space-y-1">
                        {t.scams.airdrop.warn.list.map((item, i) => <li key={i}>• {item}</li>)}
                      </ul>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                      <h4 className="text-emerald-400 font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" /> {t.scams.airdrop.protect.title}
                      </h4>
                      <ul className="text-slate-400 text-sm space-y-1">
                        {t.scams.airdrop.protect.list.map((item, i) => <li key={i}>• {item}</li>)}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <LifeBuoy className="w-6 h-6 text-orange-400" />
                  {t.action.hack.title}
                </h2>
                <ol className="space-y-3 text-sm text-slate-300">
                  {t.action.hack.steps.map((step, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="font-bold text-orange-400">{i + 1}.</span>
                      <span dangerouslySetInnerHTML={{ __html: step }} />
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                  {t.action.tools.title}
                </h2>
                <ul className="space-y-3 text-sm text-slate-300">
                  {t.action.tools.list.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="font-bold text-emerald-400">•</span>
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Lock className="w-8 h-8 text-teal-400" />
              {t.checklist.title}
            </h2>
            
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 mb-12">
              <ul className="space-y-4">
                {t.checklist.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3">{t.warning.title}</h3>
              <p className="text-slate-300">
                {t.warning.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-bold text-white">{t.cta.title}</h2>
            <p className="text-slate-400">{t.cta.desc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NewsletterForm variant="modal" buttonText={t.cta.sub} />
              <Link href={`/${lng}/learn/web3-basics`}>
                <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                  {t.cta.back}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
