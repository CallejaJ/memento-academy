"use client"

import { useState } from "react"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Image as ImageIcon, Palette, TrendingUp, Shield, FileText, Sparkles, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionCompleteButton } from "@/components/progress/section-complete-button"
import { useParams } from "next/navigation"

const translations = {
  en: {
    badge: "🔒 Premium Course",
    title: "NFT Masterclass",
    desc: "Master the world of Non-Fungible Tokens from creation to curation. Learn to mint, trade, and build value in the NFT ecosystem.",
    modules: "Modules",
    level: "Level",
    duration: "Duration",
    level_val: "Advanced",
    back: "← Back to Courses",
    sections: {
      1: {
        title: "NFT Fundamentals",
        sub: "Understanding Non-Fungible Tokens",
        p1: "<strong class=\"text-white\">NFTs (Non-Fungible Tokens)</strong> are unique digital assets verified on a blockchain. Unlike cryptocurrencies, each NFT is one-of-a-kind and cannot be exchanged on a like-for-like basis.",
        special: {
          title: "🎨 What Makes NFTs Special?",
          list: [
            "<strong class=\"text-white\">Uniqueness:</strong> Each NFT has a unique identifier and metadata",
            "<strong class=\"text-white\">Ownership:</strong> Blockchain verifies provenance and ownership history",
            "<strong class=\"text-white\">Scarcity:</strong> Limited supply enforced by smart contracts",
            "<strong class=\"text-white\">Programmability:</strong> Smart contracts can include royalties and special rules"
          ]
        },
        types: {
          art: { title: "🖼️ Digital Art", desc: "Artists can prove authenticity and earn royalties on secondary sales. Examples: Beeple's $69M artwork, CryptoPunks collectibles." },
          game: { title: "🎮 Gaming Assets", desc: "In-game items players truly own: skins, weapons, characters. Can be traded across games or sold." },
          music: { title: "🎵 Music & Media", desc: "Musicians sell exclusive content, concert tickets, or album rights directly to fans." },
          real: { title: "📜 Real Estate & Documents", desc: "Property deeds, certificates, memberships - anything needing verified ownership." }
        },
        tech: {
          title: "Technical Deep Dive",
          desc: "NFTs are typically built on ERC-721 (Ethereum) or ERC-1155 (multi-token) standards. The token points to metadata (JSON file) stored on IPFS or centralized servers."
        }
      },
      2: {
        title: "Minting & Creating NFTs",
        sub: "From concept to blockchain",
        p1: "<strong class=\"text-white\">Minting</strong> is the process of creating an NFT on the blockchain. It involves uploading your digital asset, writing metadata, and deploying a smart contract.",
        process: {
          title: "🎨 The Minting Process",
          steps: [
            { title: "Create Your Art", desc: "Digital artwork, 3D model, music, video - any digital file" },
            { title: "Choose Blockchain", desc: "Ethereum (most popular), Polygon (cheap), Solana (fast), Tezos (eco-friendly)" },
            { title: "Select Platform", desc: "OpenSea (beginner-friendly), Rarible, Foundation (curated), Zora (creator-owned)" },
            { title: "Upload & Add Metadata", desc: "Description, properties, royalties (typically 2.5-10%)" },
            { title: "Pay Gas Fees & Mint", desc: "Transaction confirms on blockchain - your NFT is live!" }
          ]
        },
        concepts: {
          lazy: { title: "💰 Lazy Minting", desc: "Defer gas costs until the NFT is sold. OpenSea and Rarible support this. Great for testing the market." },
          coll: { title: "🎯 Collection vs Single", desc: "Single NFT: one piece. Collection: series with shared contract. Collections build brand value." },
          rare: { title: "📊 Rarity & Traits", desc: "For PFP projects: define traits (background, eyes, accessories). Tools like Rarity.tools rank scarcity." }
        },
        warn: {
          title: "⚠️ Important Considerations",
          list: [
            "<strong>Copyright:</strong> Only mint work you own or have rights to",
            "<strong>Storage:</strong> IPFS is decentralized, but can be slow. Arweave offers permanent storage",
            "<strong>Gas Optimization:</strong> Mint during low network activity (weekends, late nights UTC)",
            "<strong>Royalties:</strong> Set royalty % - you earn on every resale perpetually"
          ]
        }
      },
      3: {
        title: "NFT Marketplaces & Trading",
        sub: "Buying, selling, and trading NFTs",
        p1: "<strong class=\"text-white\">NFT Marketplaces</strong> are platforms where you can discover, buy, sell, and trade NFTs. Each marketplace has its own fees, curation standards, and community.",
        markets: {
          os: { title: "🌊 OpenSea", desc: "Largest NFT marketplace with 80M+ items", list: ["2.5% platform fee", "Supports Ethereum, Polygon, Solana", "Easy for beginners", "Offers for collections & bundles"] },
          blur: { title: "💎 Blur", desc: "Pro trader platform with zero fees", list: ["0% platform fee during beta", "Advanced trading tools", "Portfolio analytics", "Airdrop rewards for activity"] },
          found: { title: "🎨 Foundation", desc: "Curated platform for digital artists", list: ["15% commission on primary sales", "Invite-only or application", "High-quality curation", "Artist-focused community"] },
          magic: { title: "⚡ Magic Eden", desc: "Solana's leading NFT marketplace", list: ["2% platform fee", "Low transaction costs on Solana", "Launchpad for new projects", "Fast transactions"] }
        },
        tips: {
          title: "💡 Trading Best Practices",
          research: { title: "Research Before Buying", list: ["Check contract address", "Verify creator/collection", "Review trading volume & floor price", "Check rarity tools (for collections)"] },
          safe: { title: "Safe Trading Tips", list: ["Never share seed phrases", "Use hardware wallets for valuable NFTs", "Be wary of too-good offers (phishing)", "Double-check URLs before connecting wallet"] }
        },
        pricing: {
          title: "Understanding NFT Pricing",
          floor: "<strong class=\"text-cyan-400\">Floor Price:</strong> Lowest listed price in a collection. Good entry point but may lack rare traits.",
          avg: "<strong class=\"text-green-400\">Average Price:</strong> Mean sale price over recent transactions. Better indicator of true market value.",
          ceil: "<strong class=\"text-purple-400\">Ceiling Price:</strong> Highest recent sale. Often for rare items or exceptional pieces."
        }
      },
      4: {
        title: "NFT Investment Strategies",
        sub: "Building a valuable NFT portfolio",
        p1: "<strong class=\"text-white\">NFT investing</strong> requires a strategic approach. Unlike traditional assets, NFTs blend art appreciation, community dynamics, and speculation.",
        strats: {
          blue: { title: "🎯 Blue-Chip Strategy", desc: "Invest in established collections with proven track records", list: ["CryptoPunks, BAYC, Azuki", "Lower risk, stable floor prices", "Strong community & utility", "Higher entry cost"] },
          early: { title: "🚀 Early Adoption", desc: "Get in early on promising new projects", list: ["Research team & roadmap", "Higher risk, higher potential returns", "Whitelist opportunities", "Community engagement crucial"] },
          rare: { title: "💎 Rarity Play", desc: "Target undervalued rare items in collections", list: ["Study rarity rankings", "Look for mispricings", "Hold for appreciation", "Requires deep knowledge"] }
        },
        portfolio: {
          title: "📊 Portfolio Diversification",
          blue: { title: "Blue-Chips (30-40%)", desc: "Stable value, low risk" },
          mid: { title: "Mid-Caps (30-40%)", desc: "Growth potential" },
          spec: { title: "Speculative (20-30%)", desc: "High risk/reward" }
        },
        flags: {
          title: "⚠️ Red Flags to Avoid",
          list: ["Anonymous team with no track record", "Unrealistic promises or guaranteed returns", "Lack of utility or roadmap", "Suspicious social media activity (bots, fake engagement)", "Derivative art with no unique value proposition"]
        }
      },
      5: {
        title: "Legal & IP Considerations",
        sub: "Copyright, licensing, and regulations",
        p1: "Understanding <strong class=\"text-white\">intellectual property rights</strong> is crucial in the NFT space. Owning an NFT does NOT automatically grant you copyright or commercial rights to the underlying artwork.",
        copyright: {
          title: "⚖️ Copyright Basics",
          own: { title: "What You OWN", list: ["The NFT token itself", "Right to sell/transfer the NFT", "Bragging rights & provenance", "Access to holder-only benefits"] },
          dont: { title: "What You DON'T Own (Usually)", list: ["Copyright to the artwork", "Right to reproduce commercially", "Right to create derivatives", "Intellectual property rights"] }
        },
        rights: {
          cc0: { title: "📜 CC0 NFTs", desc: "<strong class=\"text-white\">Creative Commons Zero:</strong> Creator waives all rights. Holders can use however they want - commercially, derivatives, etc. Examples: CrypToadz, Nouns." },
          comm: { title: "🎯 Commercial Rights", desc: "Some projects grant holders commercial rights. BAYC holders can create products using their ape. Always read the license terms!" }
        },
        tax: {
          title: "💼 Tax Implications",
          desc: "NFTs are treated as property/collectibles for tax purposes in most jurisdictions:",
          list: [
            "<strong>Capital Gains:</strong> Profit from selling NFTs is taxable (often 28% collectibles rate in US)",
            "<strong>Record Keeping:</strong> Track purchase price, sale price, dates, gas fees",
            "<strong>Airdrops:</strong> May be taxable as income at fair market value when received",
            "<strong>Minting:</strong> Gas fees may be deductible as cost basis"
          ],
          disclaimer: "*Consult a tax professional for your specific situation. Laws vary by country."
        },
        reg: {
          title: "🌍 Regulatory Landscape",
          desc: "NFT regulations are evolving. Key considerations:",
          sec: "<strong class=\"text-cyan-400\">Securities Law:</strong> Fractionalized NFTs or those promising returns may be securities",
          aml: "<strong class=\"text-green-400\">AML/KYC:</strong> Major marketplaces implementing identity verification for large transactions",
          cons: "<strong class=\"text-purple-400\">Consumer Protection:</strong> EU and other regions adding NFT-specific consumer rights"
        }
      },
      6: {
        title: "Future of NFTs",
        sub: "Emerging trends and innovations",
        p1: "The <strong class=\"text-white\">future of NFTs</strong> extends far beyond digital art. Emerging use cases are transforming how we think about ownership, identity, and digital experiences.",
        trends: {
          game: { title: "🎮 Gaming & Metaverse", desc: "Play-to-earn economies where your in-game assets have real value", list: ["Interoperable items across games", "Virtual land ownership (Decentraland, Sandbox)", "Cross-platform identities & avatars", "NFT-gated gaming experiences"] },
          music: { title: "🎵 Music & Entertainment", desc: "Artists monetizing directly, fans owning a piece of culture", list: ["Royalty-sharing music NFTs", "Exclusive concert access & backstage passes", "Fan club memberships as NFTs", "Collaborative songs with holders"] },
          rwa: { title: "🏠 Real World Assets (RWAs)", desc: "Tokenizing physical assets for fractional ownership", list: ["Real estate fractional ownership", "Luxury goods authentication (watches, bags)", "Equipment leasing & rental NFTs", "Supply chain tracking"] },
          id: { title: "🆔 Identity & Credentials", desc: "Verifiable credentials and decentralized identity", list: ["Education diplomas as NFTs", "Professional certifications", "Medical records & prescriptions", "Soulbound tokens (non-transferable identity)"] }
        },
        tech: {
          title: "🚀 Technological Innovations",
          dynamic: { title: "Dynamic NFTs", desc: "NFTs that change based on external data (weather, time, real-world events). Example: A soccer player card that updates stats in real-time." },
          ai: { title: "AI-Generated NFTs", desc: "AI art tools integrated into minting platforms. Prompt-to-NFT in seconds." }
        }
      }
    }
  },
  es: {
    badge: "🔒 Curso Premium",
    title: "Masterclass de NFT",
    desc: "Domina el mundo de los Tokens No Fungibles desde la creación hasta la curación. Aprende a mintear, intercambiar y construir valor en el ecosistema NFT.",
    modules: "Módulos",
    level: "Nivel",
    duration: "Duración",
    level_val: "Avanzado",
    back: "← Volver a Cursos",
    sections: {
      1: {
        title: "Fundamentos NFT",
        sub: "Entendiendo los Tokens No Fungibles",
        p1: "Los <strong class=\"text-white\">NFTs (Tokens No Fungibles)</strong> son activos digitales únicos verificados en una blockchain. A diferencia de las criptomonedas, cada NFT es uno de un tipo y no puede ser intercambiado por otro igual.",
        special: {
          title: "🎨 ¿Qué hace especiales a los NFTs?",
          list: [
            "<strong class=\"text-white\">Unicidad:</strong> Cada NFT tiene un identificador único y metadatos",
            "<strong class=\"text-white\">Propiedad:</strong> La blockchain verifica la procedencia y el historial de propiedad",
            "<strong class=\"text-white\">Escasez:</strong> Suministro limitado impuesto por contratos inteligentes",
            "<strong class=\"text-white\">Programabilidad:</strong> Los contratos inteligentes pueden incluir regalías y reglas especiales"
          ]
        },
        types: {
          art: { title: "🖼️ Arte Digital", desc: "Los artistas pueden probar autenticidad y ganar regalías en ventas secundarias. Ej: Obra de Beeple por $69M, CryptoPunks." },
          game: { title: "🎮 Activos de Juego", desc: "Ítems in-game que los jugadores realmente poseen: skins, armas, personajes. Pueden venderse o usarse entre juegos." },
          music: { title: "🎵 Música y Medios", desc: "Músicos venden contenido exclusivo, entradas a conciertos o derechos de álbumes directamente a fans." },
          real: { title: "📜 Bienes Raíces y Documentos", desc: "Escrituras de propiedad, certificados, membresías - cualquier cosa que necesite propiedad verificada." }
        },
        tech: {
          title: "Profundización Técnica",
          desc: "Los NFTs se construyen típicamente en estándares ERC-721 (Ethereum) o ERC-1155 (multi-token). El token apunta a metadatos (archivo JSON) almacenados en IPFS o servidores centralizados."
        }
      },
      2: {
        title: "Minteo y Creación de NFTs",
        sub: "Del concepto a la blockchain",
        p1: "El <strong class=\"text-white\">Minteo (Minting)</strong> es el proceso de crear un NFT en la blockchain. Implica subir tu activo digital, escribir metadatos y desplegar un contrato inteligente.",
        process: {
          title: "🎨 El Proceso de Minteo",
          steps: [
            { title: "Crea tu Arte", desc: "Arte digital, modelo 3D, música, video - cualquier archivo digital" },
            { title: "Elige Blockchain", desc: "Ethereum (más popular), Polygon (barato), Solana (rápido), Tezos (eco-friendly)" },
            { title: "Selecciona Plataforma", desc: "OpenSea (fácil para principiantes), Rarible, Foundation (curado), Zora (propiedad del creador)" },
            { title: "Sube y Añade Metadatos", desc: "Descripción, propiedades, regalías (típicamente 2.5-10%)" },
            { title: "Paga Gas y Mintea", desc: "La transacción se confirma en blockchain - ¡tu NFT está vivo!" }
          ]
        },
        concepts: {
          lazy: { title: "💰 Lazy Minting", desc: "Diferir costos de gas hasta que se venda el NFT. OpenSea y Rarible lo soportan. Genial para probar el mercado." },
          coll: { title: "🎯 Colección vs Único", desc: "NFT Único: una pieza. Colección: serie con contrato compartido (ej. 10k PFP). Las colecciones construyen marca." },
          rare: { title: "📊 Rareza y Rasgos", desc: "Para proyectos PFP: define rasgos (fondo, ojos). Herramientas como Rarity.tools clasifican la escasez." }
        },
        warn: {
          title: "⚠️ Consideraciones Importantes",
          list: [
            "<strong>Derechos de Autor:</strong> Solo mintea obras que poseas o tengas derechos",
            "<strong>Almacenamiento:</strong> IPFS es descentralizado, pero puede ser lento. Arweave ofrece almacenamiento permanente",
            "<strong>Optimización de Gas:</strong> Mintea durante baja actividad de red (fines de semana)",
            "<strong>Regalías:</strong> Configura % de regalías - ganas en cada reventa perpetuamente"
          ]
        }
      },
      3: {
        title: "Marketplaces y Trading de NFT",
        sub: "Comprar, vender e intercambiar NFTs",
        p1: "Los <strong class=\"text-white\">Marketplaces de NFT</strong> son plataformas donde puedes descubrir, comprar, vender e intercambiar NFTs. Cada uno tiene sus tarifas, estándares y comunidad.",
        markets: {
          os: { title: "🌊 OpenSea", desc: "El mayor marketplace con 80M+ de ítems", list: ["2.5% tarifa de plataforma", "Soporta Ethereum, Polygon, Solana", "Fácil para principiantes", "Ofertas para colecciones"] },
          blur: { title: "💎 Blur", desc: "Plataforma para traders pro sin tarifas", list: ["0% tarifa durante beta", "Herramientas de trading avanzadas", "Analítica de portafolio", "Rewards por actividad"] },
          found: { title: "🎨 Foundation", desc: "Plataforma curada para artistas digitales", list: ["15% comisión en ventas primarias", "Solo invitación", "Curaduría de alta calidad", "Comunidad enfocada en artistas"] },
          magic: { title: "⚡ Magic Eden", desc: "El marketplace líder de Solana", list: ["2% tarifa de plataforma", "Bajos costos en Solana", "Launchpad para nuevos proyectos", "Transacciones rápidas"] }
        },
        tips: {
          title: "💡 Mejores Prácticas de Trading",
          research: { title: "Investiga Antes de Comprar", list: ["Revisa dirección del contrato", "Verifica creador/colección", "Revisa volumen y precio suelo", "Revisa herramientas de rareza"] },
          safe: { title: "Consejos de Seguridad", list: ["Nunca compartas frase semilla", "Usa hardware wallets para NFTs valiosos", "Cuidado con ofertas muy buenas (phishing)", "Verifica URLs antes de conectar wallet"] }
        },
        pricing: {
          title: "Entendiendo Precios de NFT",
          floor: "<strong class=\"text-cyan-400\">Precio Suelo (Floor):</strong> Precio listado más bajo en una colección. Buen punto de entrada pero quizás sin rasgos raros.",
          avg: "<strong class=\"text-green-400\">Precio Promedio:</strong> Media de ventas recientes. Mejor indicador del valor real de mercado.",
          ceil: "<strong class=\"text-purple-400\">Precio Techo (Ceiling):</strong> Venta reciente más alta. A menudo para ítems raros o excepcionales."
        }
      },
      4: {
        title: "Estrategias de Inversión NFT",
        sub: "Construyendo un portafolio valioso",
        p1: "La <strong class=\"text-white\">inversión en NFT</strong> requiere un enfoque estratégico. A diferencia de activos tradicionales, los NFTs mezclan apreciación de arte, dinámicas de comunidad y especulación.",
        strats: {
          blue: { title: "🎯 Estrategia Blue-Chip", desc: "Invierte en colecciones establecidas con historial probado", list: ["CryptoPunks, BAYC, Azuki", "Menor riesgo, precios suelo estables", "Fuerte comunidad y utilidad", "Costo de entrada alto"] },
          early: { title: "🚀 Adopción Temprana", desc: "Entra temprano en proyectos nuevos prometedores", list: ["Investiga equipo y roadmap", "Mayor riesgo, mayor retorno potencial", "Oportunidades de Whitelist", "Engagement de comunidad crucial"] },
          rare: { title: "💎 Jugada de Rareza", desc: "Busca ítems raros infravalorados en colecciones", list: ["Estudia rankings de rareza", "Busca errores de precio", "Mantén para apreciación", "Requiere conocimiento profundo"] }
        },
        portfolio: {
          title: "📊 Diversificación de Portafolio",
          blue: { title: "Blue-Chips (30-40%)", desc: "Valor estable, bajo riesgo" },
          mid: { title: "Mid-Caps (30-40%)", desc: "Potencial de crecimiento" },
          spec: { title: "Especulativo (20-30%)", desc: "Alto riesgo/recompensa" }
        },
        flags: {
          title: "⚠️ Banderas Rojas a Evitar",
          list: ["Equipo anónimo sin historial", "Promesas irreales o retornos garantizados", "Falta de utilidad o roadmap", "Actividad sospechosa en redes (bots)", "Arte derivado sin propuesta de valor única"]
        }
      },
      5: {
        title: "Consideraciones Legales y de PI",
        sub: "Derechos de autor, licencias y regulaciones",
        p1: "Entender los <strong class=\"text-white\">derechos de propiedad intelectual</strong> es crucial en NFTs. Poseer un NFT NO te otorga automáticamente copyright o derechos comerciales sobre la obra.",
        copyright: {
          title: "⚖️ Básicos de Copyright",
          own: { title: "Lo que POSEES", list: ["El token NFT en sí", "Derecho a vender/transferir el NFT", "Derecho a alardear y procedencia", "Acceso a beneficios de holders"] },
          dont: { title: "Lo que NO Posees (Usualmente)", list: ["Copyright de la obra de arte", "Derecho a reproducir comercialmente", "Derecho a crear derivados", "Derechos de propiedad intelectual"] }
        },
        rights: {
          cc0: { title: "📜 NFTs CC0", desc: "<strong class=\"text-white\">Creative Commons Zero:</strong> El creador renuncia a todos los derechos. Los holders pueden usarlo como quieran (comercialmente, derivados). Ej: CrypToadz, Nouns." },
          comm: { title: "🎯 Derechos Comerciales", desc: "Algunos proyectos otorgan derechos comerciales. Holders de BAYC pueden crear productos con su simio. ¡Lee siempre la licencia!" }
        },
        tax: {
          title: "💼 Implicaciones Fiscales",
          desc: "Los NFTs se tratan como propiedad/coleccionables fiscalmente en la mayoría de jurisdicciones:",
          list: [
            "<strong>Ganancias de Capital:</strong> El beneficio al vender es gravable",
            "<strong>Mantenimiento de Registros:</strong> Rastrea precio de compra, venta, fechas, gas",
            "<strong>Airdrops:</strong> Pueden ser gravables como ingreso al valor de mercado al recibirse",
            "<strong>Minteo:</strong> El gas puede ser deducible como base de costo"
          ],
          disclaimer: "*Consulta a un profesional fiscal para tu situación. Las leyes varían por país."
        },
        reg: {
          title: "🌍 Panorama Regulatorio",
          desc: "Las regulaciones NFT evolucionan. Consideraciones clave:",
          sec: "<strong class=\"text-cyan-400\">Ley de Valores:</strong> NFTs fraccionalizados o que prometen retornos pueden ser valores (securities)",
          aml: "<strong class=\"text-green-400\">AML/KYC:</strong> Grandes marketplaces implementan verificación de identidad",
          cons: "<strong class=\"text-purple-400\">Protección al Consumidor:</strong> La UE y otras regiones añaden derechos específicos"
        }
      },
      6: {
        title: "El Futuro de los NFTs",
        sub: "Tendencias emergentes e innovaciones",
        p1: "El <strong class=\"text-white\">futuro de los NFTs</strong> va más allá del arte digital. Nuevos casos de uso transforman cómo pensamos sobre propiedad, identidad y experiencias digitales.",
        trends: {
          game: { title: "🎮 Gaming y Metaverso", desc: "Economías Play-to-earn donde tus activos in-game tienen valor real", list: ["Ítems interoperables entre juegos", "Propiedad de tierra virtual (Decentraland)", "Identidades y avatares multiplataforma", "Experiencias exclusivas para holders"] },
          music: { title: "🎵 Música y Entretenimiento", desc: "Artistas monetizando directamente, fans poseyendo cultura", list: ["NFTs de música con regalías compartidas", "Acceso exclusivo a conciertos y backstage", "Membresías de club de fans", "Canciones colaborativas"] },
          rwa: { title: "🏠 Activos del Mundo Real (RWAs)", desc: "Tokenizando activos físicos para propiedad fraccionada", list: ["Propiedad fraccionada de bienes raíces", "Autenticación de bienes de lujo", "Arrendamiento de equipos", "Rastreo de cadena de suministro"] },
          id: { title: "🆔 Identidad y Credenciales", desc: "Credenciales verificables e identidad descentralizada", list: ["Diplomas educativos como NFTs", "Certificaciones profesionales", "Historiales médicos", "Tokens Soulbound (intransferibles)"] }
        },
        tech: {
          title: "🚀 Innovaciones Tecnológicas",
          dynamic: { title: "NFTs Dinámicos", desc: "NFTs que cambian basados en datos externos (clima, tiempo). Ej: Una carta de jugador de fútbol que actualiza estadísticas en tiempo real." },
          ai: { title: "NFTs Generados por IA", desc: "Herramientas de arte IA integradas en plataformas de minteo. De prompt a NFT en segundos." }
        }
      }
    }
  }
}

export default function NFTMasterclassPage() {
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
            <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20">
              {t.badge}
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                {t.title}
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {t.desc}
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-purple-400">6</div>
                <div className="text-sm text-slate-400">{t.modules}</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-pink-400">{t.level_val}</div>
                <div className="text-sm text-slate-400">{t.level}</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-blue-400">~4h</div>
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

            {/* Course Progress Track */}
            <div className="relative pl-8 space-y-4">
              
              {/* Section 1: NFT Fundamentals */}
              <div className="relative group">
                <div className={`absolute -left-[19px] top-6 w-3 h-3 rounded-full border z-10 transition-all ${
                  expandedSections.includes(0) 
                    ? 'bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50' 
                    : 'bg-slate-700 border-slate-600'
                }`} />
                <div className="absolute -left-[14px] top-9 w-0.5 h-full bg-slate-800" />
                
                <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all ml-4">
                  <div 
                    className="p-4 flex items-center justify-between cursor-pointer"
                    onClick={() => toggleSection(0)}
                  >
                    <div className="flex items-center gap-3">
                      <ImageIcon className="w-5 h-5 text-purple-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">1. {t.sections[1].title}</h3>
                        <p className="text-sm text-slate-400">{t.sections[1].sub}</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${
                      expandedSections.includes(0) ? 'rotate-180' : ''
                    }`} />
                  </div>

                  {expandedSections.includes(0) && (
                    <div className="px-6 pb-6">
                      <div className="space-y-4 text-slate-300">
                        <p className="text-lg" dangerouslySetInnerHTML={{ __html: t.sections[1].p1 }} />

                        <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-5">
                          <h4 className="text-purple-400 font-semibold mb-3">{t.sections[1].special.title}</h4>
                          <ul className="space-y-2 text-sm">
                            {t.sections[1].special.list.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: `• ${item}` }} />)}
                          </ul>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                            <h5 className="text-blue-400 font-semibold mb-2">{t.sections[1].types.art.title}</h5>
                            <p className="text-xs text-slate-400">{t.sections[1].types.art.desc}</p>
                          </div>
                          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                            <h5 className="text-green-400 font-semibold mb-2">{t.sections[1].types.game.title}</h5>
                            <p className="text-xs text-slate-400">{t.sections[1].types.game.desc}</p>
                          </div>
                          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                            <h5 className="text-purple-400 font-semibold mb-2">{t.sections[1].types.music.title}</h5>
                            <p className="text-xs text-slate-400">{t.sections[1].types.music.desc}</p>
                          </div>
                          <div className="bg-pink-500/10 border border-pink-500/20 rounded-lg p-4">
                            <h5 className="text-pink-400 font-semibold mb-2">{t.sections[1].types.real.title}</h5>
                            <p className="text-xs text-slate-400">{t.sections[1].types.real.desc}</p>
                          </div>
                        </div>

                        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 mt-4">
                          <h5 className="text-white font-semibold mb-2">{t.sections[1].tech.title}</h5>
                          <p className="text-sm mb-3">{t.sections[1].tech.desc}</p>
                          <div className="bg-slate-900/50 rounded p-3 font-mono text-xs">
                            <div className="text-cyan-400">// Simplified NFT Metadata</div>
                            <div className="text-slate-400">{`{`}</div>
                            <div className="text-slate-400 ml-4">"name": "Cool NFT #1",</div>
                            <div className="text-slate-400 ml-4">"description": "A unique digital artwork",</div>
                            <div className="text-slate-400 ml-4">"image": "ipfs://Qm...",</div>
                            <div className="text-slate-400 ml-4">"attributes": [...]</div>
                            <div className="text-slate-400">{`}`}</div>
                          </div>
                        </div>
                        
                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton courseId="nft-masterclass" sectionId="section-1" sectionNumber={1} totalSections={6} lng={lng} />
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </div>

              {/* Section 2: Minting */}
              <div className="relative group">
                <div className={`absolute -left-[19px] top-6 w-3 h-3 rounded-full border z-10 transition-all ${
                  expandedSections.includes(1) ? 'bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50' : 'bg-slate-700 border-slate-600'
                }`} />
                <div className="absolute -left-[14px] top-9 w-0.5 h-full bg-slate-800" />
                
                <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all ml-4">
                  <div className="p-4 flex items-center justify-between cursor-pointer" onClick={() => toggleSection(1)}>
                    <div className="flex items-center gap-3">
                      <Palette className="w-5 h-5 text-pink-400" />
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

                        <div className="bg-pink-500/10 border border-pink-500/20 rounded-xl p-5">
                          <h4 className="text-pink-400 font-semibold mb-3">{t.sections[2].process.title}</h4>
                          <ol className="space-y-3">
                            {t.sections[2].process.steps.map((step, i) => (
                              <li key={i} className="flex gap-2">
                                <span className="bg-pink-500/20 text-pink-400 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">{i+1}</span>
                                <div>
                                  <strong className="text-white block">{step.title}</strong>
                                  <span className="text-sm">{step.desc}</span>
                                </div>
                              </li>
                            ))}
                          </ol>
                        </div>

                        <div className="grid md:grid-cols-3 gap-3 mt-4">
                          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                            <h5 className="text-blue-400 font-semibold text-sm mb-2">{t.sections[2].concepts.lazy.title}</h5>
                            <p className="text-xs text-slate-400">{t.sections[2].concepts.lazy.desc}</p>
                          </div>
                          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                            <h5 className="text-green-400 font-semibold text-sm mb-2">{t.sections[2].concepts.coll.title}</h5>
                            <p className="text-xs text-slate-400">{t.sections[2].concepts.coll.desc}</p>
                          </div>
                          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
                            <h5 className="text-purple-400 font-semibold text-sm mb-2">{t.sections[2].concepts.rare.title}</h5>
                            <p className="text-xs text-slate-400">{t.sections[2].concepts.rare.desc}</p>
                          </div>
                        </div>

                        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mt-4">
                          <h5 className="text-yellow-400 font-semibold mb-2 flex items-center gap-2">{t.sections[2].warn.title}</h5>
                          <ul className="text-sm space-y-1 text-slate-300">
                            {t.sections[2].warn.list.map((item, i) => (
                              <li key={i}>• <span dangerouslySetInnerHTML={{ __html: item }} /></li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton courseId="nft-masterclass" sectionId="section-2" sectionNumber={2} totalSections={6} lng={lng} />
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </div>

              {/* Section 3: Marketplaces */}
              <div className="relative group">
                <div className={`absolute -left-[19px] top-6 w-3 h-3 rounded-full border z-10 transition-all ${
                  expandedSections.includes(2) ? 'bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50' : 'bg-slate-700 border-slate-600'
                }`} />
                <div className="absolute -left-[14px] top-9 w-0.5 h-full bg-slate-800" />
                
                <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all ml-4">
                  <div className="p-4 flex items-center justify-between cursor-pointer" onClick={() => toggleSection(2)}>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-blue-400" />
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
                          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                            <h5 className="text-blue-400 font-semibold mb-2">{t.sections[3].markets.os.title}</h5>
                            <p className="text-sm mb-2">{t.sections[3].markets.os.desc}</p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              {t.sections[3].markets.os.list.map((item, i) => <li key={i}>• {item}</li>)}
                            </ul>
                          </div>
                          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                            <h5 className="text-purple-400 font-semibold mb-2">{t.sections[3].markets.blur.title}</h5>
                            <p className="text-sm mb-2">{t.sections[3].markets.blur.desc}</p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              {t.sections[3].markets.blur.list.map((item, i) => <li key={i}>• {item}</li>)}
                            </ul>
                          </div>
                          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                            <h5 className="text-green-400 font-semibold mb-2">{t.sections[3].markets.found.title}</h5>
                            <p className="text-sm mb-2">{t.sections[3].markets.found.desc}</p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              {t.sections[3].markets.found.list.map((item, i) => <li key={i}>• {item}</li>)}
                            </ul>
                          </div>
                          <div className="bg-pink-500/10 border border-pink-500/20 rounded-lg p-4">
                            <h5 className="text-pink-400 font-semibold mb-2">{t.sections[3].markets.magic.title}</h5>
                            <p className="text-sm mb-2">{t.sections[3].markets.magic.desc}</p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              {t.sections[3].markets.magic.list.map((item, i) => <li key={i}>• {item}</li>)}
                            </ul>
                          </div>
                        </div>

                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-5 mt-4">
                          <h4 className="text-cyan-400 font-semibold mb-3">{t.sections[3].tips.title}</h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            <div>
                              <p className="text-white font-semibold text-sm mb-1">{t.sections[3].tips.research.title}</p>
                              <ul className="text-xs text-slate-400 space-y-0.5">
                                {t.sections[3].tips.research.list.map((item, i) => <li key={i}>• {item}</li>)}
                              </ul>
                            </div>
                            <div>
                              <p className="text-white font-semibold text-sm mb-1">{t.sections[3].tips.safe.title}</p>
                              <ul className="text-xs text-slate-400 space-y-0.5">
                                {t.sections[3].tips.safe.list.map((item, i) => <li key={i}>• {item}</li>)}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                          <h5 className="text-white font-semibold mb-2">{t.sections[3].pricing.title}</h5>
                          <div className="space-y-2 text-sm">
                            <div dangerouslySetInnerHTML={{ __html: t.sections[3].pricing.floor }} />
                            <div dangerouslySetInnerHTML={{ __html: t.sections[3].pricing.avg }} />
                            <div dangerouslySetInnerHTML={{ __html: t.sections[3].pricing.ceil }} />
                          </div>
                        </div>
                        
                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton courseId="nft-masterclass" sectionId="section-3" sectionNumber={3} totalSections={6} lng={lng} />
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </div>

              {/* Section 4: Strategies */}
              <div className="relative group">
                <div className={`absolute -left-[19px] top-6 w-3 h-3 rounded-full border z-10 transition-all ${
                  expandedSections.includes(3) ? 'bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50' : 'bg-slate-700 border-slate-600'
                }`} />
                <div className="absolute -left-[14px] top-9 w-0.5 h-full bg-slate-800" />
                
                <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all ml-4">
                  <div className="p-4 flex items-center justify-between cursor-pointer" onClick={() => toggleSection(3)}>
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-green-400" />
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

                        <div className="grid md:grid-cols-3 gap-3">
                          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                            <h5 className="text-blue-400 font-semibold mb-2">{t.sections[4].strats.blue.title}</h5>
                            <p className="text-xs text-slate-400 mb-2">{t.sections[4].strats.blue.desc}</p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              {t.sections[4].strats.blue.list.map((item, i) => <li key={i}>• {item}</li>)}
                            </ul>
                          </div>
                          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                            <h5 className="text-green-400 font-semibold mb-2">{t.sections[4].strats.early.title}</h5>
                            <p className="text-xs text-slate-400 mb-2">{t.sections[4].strats.early.desc}</p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              {t.sections[4].strats.early.list.map((item, i) => <li key={i}>• {item}</li>)}
                            </ul>
                          </div>
                          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                            <h5 className="text-purple-400 font-semibold mb-2">{t.sections[4].strats.rare.title}</h5>
                            <p className="text-xs text-slate-400 mb-2">{t.sections[4].strats.rare.desc}</p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              {t.sections[4].strats.rare.list.map((item, i) => <li key={i}>• {item}</li>)}
                            </ul>
                          </div>
                        </div>

                        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-5">
                          <h4 className="text-green-400 font-semibold mb-3">{t.sections[4].portfolio.title}</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between items-center">
                              <span className="text-white">{t.sections[4].portfolio.blue.title}</span>
                              <span className="text-slate-400">{t.sections[4].portfolio.blue.desc}</span>
                            </div>
                            <div className="w-full bg-slate-800 rounded-full h-2">
                              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{width: '35%'}}></div>
                            </div>
                            {/* Simplified bars for brevity but kept text */}
                            <div className="flex justify-between items-center mt-3">
                              <span className="text-white">{t.sections[4].portfolio.mid.title}</span>
                              <span className="text-slate-400">{t.sections[4].portfolio.mid.desc}</span>
                            </div>
                            <div className="w-full bg-slate-800 rounded-full h-2">
                              <div className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full" style={{width: '35%'}}></div>
                            </div>
                             <div className="flex justify-between items-center mt-3">
                              <span className="text-white">{t.sections[4].portfolio.spec.title}</span>
                              <span className="text-slate-400">{t.sections[4].portfolio.spec.desc}</span>
                            </div>
                            <div className="w-full bg-slate-800 rounded-full h-2">
                              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '25%'}}></div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                          <h5 className="text-yellow-400 font-semibold mb-2 flex items-center gap-2">{t.sections[4].flags.title}</h5>
                          <ul className="text-sm space-y-1">
                            {t.sections[4].flags.list.map((item, i) => <li key={i}>• {item}</li>)}
                          </ul>
                        </div>
                        
                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton courseId="nft-masterclass" sectionId="section-4" sectionNumber={4} totalSections={6} lng={lng} />
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </div>

              {/* Section 5: Legal */}
              <div className="relative group">
                <div className={`absolute -left-[19px] top-6 w-3 h-3 rounded-full border z-10 transition-all ${
                  expandedSections.includes(4) ? 'bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50' : 'bg-slate-700 border-slate-600'
                }`} />
                <div className="absolute -left-[14px] top-9 w-0.5 h-full bg-slate-800" />
                
                <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all ml-4">
                  <div className="p-4 flex items-center justify-between cursor-pointer" onClick={() => toggleSection(4)}>
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-yellow-400" />
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

                        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
                          <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">{t.sections[5].copyright.title}</h4>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-white font-semibold mb-2">{t.sections[5].copyright.own.title}</p>
                              <ul className="text-xs text-slate-400 space-y-1">
                                {t.sections[5].copyright.own.list.map((item, i) => <li key={i}>✅ {item}</li>)}
                              </ul>
                            </div>
                            <div>
                              <p className="text-white font-semibold mb-2">{t.sections[5].copyright.dont.title}</p>
                              <ul className="text-xs text-slate-400 space-y-1">
                                {t.sections[5].copyright.dont.list.map((item, i) => <li key={i}>❌ {item}</li>)}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                            <h5 className="text-blue-400 font-semibold mb-2">{t.sections[5].rights.cc0.title}</h5>
                            <p className="text-xs text-slate-400" dangerouslySetInnerHTML={{ __html: t.sections[5].rights.cc0.desc }} />
                          </div>
                          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                            <h5 className="text-green-400 font-semibold mb-2">{t.sections[5].rights.comm.title}</h5>
                            <p className="text-xs text-slate-400">{t.sections[5].rights.comm.desc}</p>
                          </div>
                        </div>

                        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                          <h5 className="text-yellow-400 font-semibold mb-2">{t.sections[5].tax.title}</h5>
                          <p className="text-sm mb-2">{t.sections[5].tax.desc}</p>
                          <ul className="text-sm space-y-1">
                            {t.sections[5].tax.list.map((item, i) => <li key={i}>• <span dangerouslySetInnerHTML={{ __html: item }} /></li>)}
                          </ul>
                          <p className="text-xs text-slate-500 mt-2 italic">{t.sections[5].tax.disclaimer}</p>
                        </div>

                        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                          <h5 className="text-white font-semibold mb-2">{t.sections[5].reg.title}</h5>
                          <p className="text-sm mb-3">{t.sections[5].reg.desc}</p>
                          <div className="space-y-2 text-sm">
                            <div dangerouslySetInnerHTML={{ __html: t.sections[5].reg.sec }} />
                            <div dangerouslySetInnerHTML={{ __html: t.sections[5].reg.aml }} />
                            <div dangerouslySetInnerHTML={{ __html: t.sections[5].reg.cons }} />
                          </div>
                        </div>
                        
                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton courseId="nft-masterclass" sectionId="section-5" sectionNumber={5} totalSections={6} lng={lng} />
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </div>

              {/* Section 6: Future */}
              <div className="relative group">
                <div className={`absolute -left-[19px] top-6 w-3 h-3 rounded-full border z-10 transition-all ${
                  expandedSections.includes(5) ? 'bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50' : 'bg-slate-700 border-slate-600'
                }`} />
                
                <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all ml-4">
                  <div className="p-4 flex items-center justify-between cursor-pointer" onClick={() => toggleSection(5)}>
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-purple-400" />
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
                          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                            <h5 className="text-blue-400 font-semibold mb-2">{t.sections[6].trends.game.title}</h5>
                            <p className="text-xs text-slate-400 mb-2">{t.sections[6].trends.game.desc}</p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              {t.sections[6].trends.game.list.map((item, i) => <li key={i}>• {item}</li>)}
                            </ul>
                          </div>
                          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                            <h5 className="text-green-400 font-semibold mb-2">{t.sections[6].trends.music.title}</h5>
                            <p className="text-xs text-slate-400 mb-2">{t.sections[6].trends.music.desc}</p>
                            <ul className="text-xs text-slate-400 space-y-1">
                               {t.sections[6].trends.music.list.map((item, i) => <li key={i}>• {item}</li>)}
                            </ul>
                          </div>
                          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                            <h5 className="text-purple-400 font-semibold mb-2">{t.sections[6].trends.rwa.title}</h5>
                            <p className="text-xs text-slate-400 mb-2">{t.sections[6].trends.rwa.desc}</p>
                            <ul className="text-xs text-slate-400 space-y-1">
                               {t.sections[6].trends.rwa.list.map((item, i) => <li key={i}>• {item}</li>)}
                            </ul>
                          </div>
                          <div className="bg-pink-500/10 border border-pink-500/20 rounded-lg p-4">
                            <h5 className="text-pink-400 font-semibold mb-2">{t.sections[6].trends.id.title}</h5>
                            <p className="text-xs text-slate-400 mb-2">{t.sections[6].trends.id.desc}</p>
                            <ul className="text-xs text-slate-400 space-y-1">
                               {t.sections[6].trends.id.list.map((item, i) => <li key={i}>• {item}</li>)}
                            </ul>
                          </div>
                        </div>

                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-5">
                          <h4 className="text-cyan-400 font-semibold mb-3">{t.sections[6].tech.title}</h4>
                          <div className="space-y-3">
                            <div>
                              <p className="text-white font-semibold text-sm">{t.sections[6].tech.dynamic.title}</p>
                              <p className="text-xs text-slate-400">{t.sections[6].tech.dynamic.desc}</p>
                            </div>
                            <div>
                              <p className="text-white font-semibold text-sm">{t.sections[6].tech.ai.title}</p>
                              <p className="text-xs text-slate-400">{t.sections[6].tech.ai.desc}</p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton courseId="nft-masterclass" sectionId="section-6" sectionNumber={6} totalSections={6} lng={lng} />
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
    </div>
  )
}
