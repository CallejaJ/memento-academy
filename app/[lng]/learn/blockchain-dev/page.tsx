"use client";

import { useState } from "react";
import Link from "next/link";
import { MainNav } from "@/components/main-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Blocks,
  Network,
  Database,
  Cpu,
  Layers,
  Rocket,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionCompleteButton } from "@/components/progress/section-complete-button";
import { useParams } from "next/navigation";

const translations = {
  en: {
    badge: "🔒 Premium Course",
    title_prefix: "Blockchain",
    title_suffix: "Development",
    description:
      "Master blockchain architecture and build decentralized applications. Learn consensus mechanisms, scalability solutions, and real-world dApp development.",
    modules: "Modules",
    level: "Level",
    duration: "Duration",
    level_val: "Advanced",
    back_to_courses: "← Back to Courses",
    curriculum_title: "Course Curriculum",
    track_progress: "Track Your Progress →",
    cta: {
      title: "Build the Decentralized Future",
      text: "Blockchain technology is revolutionizing industries. Master these fundamentals and you'll be ready to build the next generation of applications.",
    },
    sections: {
      1: {
        title: "Blockchain Architecture",
        subtitle: "How blockchains work",
        p1: 'A <strong class="text-white">blockchain</strong> is a distributed ledger that records transactions across many computers. Understanding its architecture is fundamental to blockchain development.',
        components: {
          title: "🧱 Core Components",
          blocks: {
            title: "Blocks",
            desc: "Container of transactions with timestamp, hash, and previous hash",
          },
          chain: {
            title: "Chain",
            desc: "Linked blocks creating immutable history via cryptographic hashes",
          },
          nodes: {
            title: "Nodes",
            desc: "Computers that validate, store, and distribute blockchain data",
          },
          consensus: {
            title: "Consensus",
            desc: "Agreement mechanism for adding new blocks (PoW, PoS, etc.)",
          },
        },
        crypto: {
          title: "🔐 Cryptographic Foundations",
          list: [
            '<strong class="text-white">SHA-256:</strong> Hashing algorithm for block integrity',
            '<strong class="text-white">Public/Private Keys:</strong> Asymmetric cryptography for ownership',
            '<strong class="text-white">Digital Signatures:</strong> Prove transaction authenticity',
            '<strong class="text-white">Merkle Trees:</strong> Efficient data verification structure',
          ],
        },
      },
      2: {
        title: "Consensus Mechanisms",
        subtitle: "Agreeing on truth",
        desc: "Consensus mechanisms allow distributed networks to agree on the state of the blockchain without central authority.",
        pow: {
          title: "⛏️ Proof of Work (PoW)",
          sub: "Miners solve computational puzzles",
          list: [
            "Used by: Bitcoin, Ethereum (pre-Merge)",
            "Pros: Highly secure, battle-tested",
            "Cons: Energy intensive, slow",
          ],
        },
        pos: {
          title: "🎯 Proof of Stake (PoS)",
          sub: "Validators stake tokens to secure network",
          list: [
            "Used by: Ethereum, Solana, Cardano",
            "Pros: Energy efficient, faster",
            "Cons: Plutocracy risk, less tested",
          ],
        },
        other: {
          title: "⚡ Other Mechanisms",
          list: [
            "DPoS: Delegated Proof of Stake (EOS, Tron)",
            "PoA: Proof of Authority (private chains)",
            "PoH: Proof of History (Solana's innovation)",
          ],
        },
      },
      3: {
        title: "State Management",
        subtitle: "Tracking blockchain data",
        desc: "State is the current snapshot of all accounts, balances, and smart contract storage on the blockchain.",
        types: {
          title: "💾 State Types",
          list: [
            '<strong class="text-white">Account State:</strong> Balances, nonces for all addresses',
            '<strong class="text-white">Contract Storage:</strong> Persistent data in smart contracts',
            '<strong class="text-white">Transaction Pool:</strong> Pending unconfirmed transactions (mempool)',
            '<strong class="text-white">State Root:</strong> Merkle root hash representing entire state',
          ],
        },
        bloat:
          '💡 <strong class="text-white">State Bloat:</strong> As state grows, node requirements increase. Archive nodes store all historical states while full nodes only keep recent state.',
      },
      4: {
        title: "Scalability Solutions",
        subtitle: "Making blockchains faster",
        desc: "Scalability addresses the blockchain trilemma: decentralization, security, and scalability can't all be maximized simultaneously.",
        approaches: {
          title: "🚀 Scaling Approaches",
          l2: {
            title: "Layer 2 Solutions",
            desc: "Process transactions off-chain, settle on mainnet. Examples: Optimism, Arbitrum, Polygon zkEVM",
          },
          sharding: {
            title: "Sharding",
            desc: "Split blockchain into parallel chains (shards). Ethereum 2.0's long-term plan",
          },
          channels: {
            title: "State Channels",
            desc: "Off-chain direct peer interactions. Lightning Network (Bitcoin)",
          },
        },
      },
      5: {
        title: "Developer Tools",
        subtitle: "Building on blockchain",
        desc: "Modern blockchain development requires specific tools, frameworks, and best practices.",
        tools: {
          title: "🛠️ Essential Tools",
          dev: {
            title: "Development",
            list: [
              "Hardhat / Foundry: Smart contract frameworks",
              "Remix: Browser IDE",
              "OpenZeppelin: Audited contract libraries",
            ],
          },
          frontend: {
            title: "Frontend",
            list: [
              "ethers.js / viem: Blockchain interaction",
              "RainbowKit / ConnectKit: Wallet connection",
              "The Graph: Data indexing & querying",
            ],
          },
        },
      },
      6: {
        title: "Building dApps",
        subtitle: "Decentralized applications",
        desc: "dApps combine smart contracts (backend) with web interfaces (frontend) to create trustless applications.",
        arch: {
          title: "📱 dApp Architecture",
          steps: [
            '<strong class="text-white">1. Smart Contracts (Backend):</strong> Business logic on-chain',
            '<strong class="text-white">2. Frontend (React/Next.js):</strong> User interface',
            '<strong class="text-white">3. Web3 Provider (MetaMask):</strong> Wallet connection',
            '<strong class="text-white">4. IPFS/Arweave:</strong> Decentralized file storage',
            '<strong class="text-white">5. Subgraph:</strong> Index and query blockchain data',
          ],
        },
        start: {
          title: "🎓 Start Building",
          text: "Blockchain development is the future. Start with testnet deployments, learn from open-source projects, and join developer communities. The best way to learn is to build.",
        },
      },
    },
  },
  es: {
    badge: "🔒 Curso Premium",
    title_prefix: "Desarrollo",
    title_suffix: "Blockchain",
    description:
      "Domina la arquitectura blockchain y construye aplicaciones descentralizadas. Aprende mecanismos de consenso, soluciones de escalabilidad y desarrollo de dApps en el mundo real.",
    modules: "Módulos",
    level: "Nivel",
    duration: "Duración",
    level_val: "Avanzado",
    back_to_courses: "← Volver a Cursos",
    curriculum_title: "Plan de Estudios",
    track_progress: "Sigue tu Progreso →",
    cta: {
      title: "Construye el Futuro Descentralizado",
      text: "La tecnología blockchain está revolucionando industrias. Domina estos fundamentos y estarás listo para construir la próxima generación de aplicaciones.",
    },
    sections: {
      1: {
        title: "Arquitectura Blockchain",
        subtitle: "Cómo funcionan las blockchains",
        p1: 'Una <strong class="text-white">blockchain</strong> es un libro mayor distribuido que registra transacciones en muchas computadoras. Entender su arquitectura es fundamental para el desarrollo.',
        components: {
          title: "🧱 Componentes Principales",
          blocks: {
            title: "Bloques",
            desc: "Contenedor de transacciones con marca de tiempo, hash y hash anterior",
          },
          chain: {
            title: "Cadena",
            desc: "Bloques enlazados creando historia inmutable vía hashes criptográficos",
          },
          nodes: {
            title: "Nodos",
            desc: "Computadoras que validan, almacenan y distribuyen datos de blockchain",
          },
          consensus: {
            title: "Consenso",
            desc: "Mecanismo de acuerdo para añadir nuevos bloques (PoW, PoS, etc.)",
          },
        },
        crypto: {
          title: "🔐 Fundamentos Criptográficos",
          list: [
            '<strong class="text-white">SHA-256:</strong> Algoritmo de hash para integridad de bloques',
            '<strong class="text-white">Claves Pública/Privada:</strong> Criptografía asimétrica para propiedad',
            '<strong class="text-white">Firmas Digitales:</strong> Prueban autenticidad de transacciones',
            '<strong class="text-white">Árboles de Merkle:</strong> Estructura eficiente de verificación de datos',
          ],
        },
      },
      2: {
        title: "Mecanismos de Consenso",
        subtitle: "Acordando la verdad",
        desc: "Los mecanismos de consenso permiten que redes distribuidas acuerden el estado de la blockchain sin autoridad central.",
        pow: {
          title: "⛏️ Proof of Work (PoW)",
          sub: "Mineros resuelven acertijos computacionales",
          list: [
            "Usado por: Bitcoin, Ethereum (pre-Merge)",
            "Pros: Altamente seguro, probado en batalla",
            "Contras: Intensivo en energía, lento",
          ],
        },
        pos: {
          title: "🎯 Proof of Stake (PoS)",
          sub: "Validadores hacen staking de tokens para asegurar la red",
          list: [
            "Usado por: Ethereum, Solana, Cardano",
            "Pros: Eficiente energéticamente, más rápido",
            "Contras: Riesgo de plutocracia, menos probado",
          ],
        },
        other: {
          title: "⚡ Otros Mecanismos",
          list: [
            "DPoS: Delegated Proof of Stake (EOS, Tron)",
            "PoA: Proof of Authority (cadenas privadas)",
            "PoH: Proof of History (innovación de Solana)",
          ],
        },
      },
      3: {
        title: "Gestión de Estado",
        subtitle: "Rastreando datos blockchain",
        desc: "El estado es la instantánea actual de todas las cuentas, saldos y almacenamiento de contratos inteligentes en la blockchain.",
        types: {
          title: "💾 Tipos de Estado",
          list: [
            '<strong class="text-white">Estado de Cuenta:</strong> Saldos, nonces para todas las direcciones',
            '<strong class="text-white">Almacenamiento de Contrato:</strong> Datos persistentes en contratos',
            '<strong class="text-white">Pool de Transacciones:</strong> Transacciones pendientes no confirmadas (mempool)',
            '<strong class="text-white">Raíz de Estado:</strong> Hash raíz de Merkle representando todo el estado',
          ],
        },
        bloat:
          '💡 <strong class="text-white">Hinchazón de Estado:</strong> Al crecer el estado, los requisitos de nodo aumentan. Los nodos archivo guardan todo, los nodos completos solo el estado reciente.',
      },
      4: {
        title: "Soluciones de Escalabilidad",
        subtitle: "Haciendo blockchains más rápidas",
        desc: "La escalabilidad aborda el trilema blockchain: descentralización, seguridad y escalabilidad no pueden maximizarse simultáneamente.",
        approaches: {
          title: "🚀 Enfoques de Escalado",
          l2: {
            title: "Soluciones Capa 2",
            desc: "Procesan transacciones fuera de cadena, liquidan en mainnet. Ej: Optimism, Arbitrum",
          },
          sharding: {
            title: "Sharding",
            desc: "Dividir blockchain en cadenas paralelas. Plan a largo plazo de Ethereum 2.0",
          },
          channels: {
            title: "Canales de Estado",
            desc: "Interacciones directas fuera de cadena. Lightning Network (Bitcoin)",
          },
        },
      },
      5: {
        title: "Herramientas de Desarrollo",
        subtitle: "Construyendo en blockchain",
        desc: "El desarrollo moderno de blockchain requiere herramientas, frameworks y mejores prácticas específicas.",
        tools: {
          title: "🛠️ Herramientas Esenciales",
          dev: {
            title: "Desarrollo",
            list: [
              "Hardhat / Foundry: Frameworks de contratos",
              "Remix: IDE en navegador",
              "OpenZeppelin: Librerías auditadas",
            ],
          },
          frontend: {
            title: "Frontend",
            list: [
              "ethers.js / viem: Interacción blockchain",
              "RainbowKit: Conexión de wallet",
              "The Graph: Indexación de datos",
            ],
          },
        },
      },
      6: {
        title: "Construyendo dApps",
        subtitle: "Aplicaciones descentralizadas",
        desc: "Las dApps combinan contratos inteligentes (backend) con interfaces web (frontend) para crear aplicaciones sin confianza.",
        arch: {
          title: "📱 Arquitectura dApp",
          steps: [
            '<strong class="text-white">1. Contratos Inteligentes (Backend):</strong> Lógica de negocio en cadena',
            '<strong class="text-white">2. Frontend (React/Next.js):</strong> Interfaz de usuario',
            '<strong class="text-white">3. Proveedor Web3 (MetaMask):</strong> Conexión de wallet',
            '<strong class="text-white">4. IPFS/Arweave:</strong> Almacenamiento descentralizado de archivos',
            '<strong class="text-white">5. Subgraph:</strong> Indexar y consultar datos blockchain',
          ],
        },
        start: {
          title: "🎓 Empieza a Construir",
          text: "El desarrollo blockchain es el futuro. Empieza con despliegues en testnet, aprende de proyectos open-source y únete a comunidades. La mejor forma de aprender es construyendo.",
        },
      },
    },
  },
};

export default function BlockchainDevelopmentPage() {
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
            <Badge className="bg-violet-500/10 text-violet-400 border-violet-500/20">
              {t.badge}
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                {t.title_prefix}
              </span>{" "}
              {t.title_suffix}
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {t.description}
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-violet-400">6</div>
                <div className="text-sm text-slate-400">{t.modules}</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-purple-400">
                  {t.level_val}
                </div>
                <div className="text-sm text-slate-400">{t.level}</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-fuchsia-400">~6h</div>
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
                <Button
                  variant="outline"
                  className="border-slate-700 text-slate-300 hover:text-white"
                >
                  {t.back_to_courses}
                </Button>
              </Link>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">
              {t.curriculum_title}
            </h2>

            <div className="relative space-y-4 pl-4 md:pl-0">
              {/* Section 1: Blockchain Architecture */}
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
                    <div className="flex items-center gap-3">
                      <Blocks className="w-5 h-5 text-violet-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          1. {t.sections[1].title}
                        </h3>
                        <p className="text-sm text-slate-400">
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
                        <p
                          className="text-lg"
                          dangerouslySetInnerHTML={{ __html: t.sections[1].p1 }}
                        />

                        <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl p-5">
                          <h4 className="text-violet-400 font-semibold mb-3">
                            {t.sections[1].components.title}
                          </h4>
                          <div className="grid md:grid-cols-2 gap-3 text-sm">
                            <div className="bg-slate-800/50 rounded p-3">
                              <p className="text-white font-semibold mb-1">
                                {t.sections[1].components.blocks.title}
                              </p>
                              <p className="text-xs text-slate-400">
                                {t.sections[1].components.blocks.desc}
                              </p>
                            </div>
                            <div className="bg-slate-800/50 rounded p-3">
                              <p className="text-white font-semibold mb-1">
                                {t.sections[1].components.chain.title}
                              </p>
                              <p className="text-xs text-slate-400">
                                {t.sections[1].components.chain.desc}
                              </p>
                            </div>
                            <div className="bg-slate-800/50 rounded p-3">
                              <p className="text-white font-semibold mb-1">
                                {t.sections[1].components.nodes.title}
                              </p>
                              <p className="text-xs text-slate-400">
                                {t.sections[1].components.nodes.desc}
                              </p>
                            </div>
                            <div className="bg-slate-800/50 rounded p-3">
                              <p className="text-white font-semibold mb-1">
                                {t.sections[1].components.consensus.title}
                              </p>
                              <p className="text-xs text-slate-400">
                                {t.sections[1].components.consensus.desc}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                          <h5 className="text-blue-400 font-semibold mb-2">
                            {t.sections[1].crypto.title}
                          </h5>
                          <ul className="text-sm space-y-1">
                            {t.sections[1].crypto.list.map((item, i) => (
                              <li key={i}>
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: `• ${item}`,
                                  }}
                                />
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton
                            courseId="blockchain-development"
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

              {/* Sections 2-6 */}
              {[
                { idx: 1, icon: Network, color: "purple", ...t.sections[2] },
                { idx: 2, icon: Database, color: "cyan", ...t.sections[3] },
                { idx: 3, icon: Layers, color: "green", ...t.sections[4] },
                { idx: 4, icon: Cpu, color: "orange", ...t.sections[5] },
                { idx: 5, icon: Rocket, color: "pink", ...t.sections[6] },
              ].map((section) => (
                <div key={section.idx} className="relative group">
                  <div
                    className={`absolute -left-[19px] top-6 w-3 h-3 rounded-full border z-10 transition-all ${
                      expandedSections.includes(section.idx)
                        ? "bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50"
                        : "bg-slate-700 border-slate-600"
                    }`}
                  />
                  <div
                    className={`absolute -left-[14px] top-9 w-0.5 ${section.idx === 5 ? "h-0" : "h-full"} bg-slate-800`}
                  />

                  <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all ml-4">
                    <div
                      className="p-4 flex items-center justify-between cursor-pointer"
                      onClick={() => toggleSection(section.idx)}
                    >
                      <div className="flex items-center gap-3">
                        <section.icon
                          className={`w-5 h-5 text-${section.color}-400`}
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            {section.idx + 1}. {section.title}
                          </h3>
                          <p className="text-sm text-slate-400">
                            {section.subtitle}
                          </p>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 transition-transform ${expandedSections.includes(section.idx) ? "rotate-180" : ""}`}
                      />
                    </div>

                    {expandedSections.includes(section.idx) && (
                      <div className="px-6 pb-6">
                        <div className="space-y-4 text-slate-300">
                          <p className="text-lg">{section.desc}</p>

                          {section.idx === 1 && (
                            <>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                                  <h5 className="text-purple-400 font-semibold mb-2">
                                    {t.sections[2].pow.title}
                                  </h5>
                                  <p className="text-sm mb-2">
                                    {t.sections[2].pow.sub}
                                  </p>
                                  <ul className="text-xs text-slate-400 space-y-1">
                                    {t.sections[2].pow.list.map(
                                      (item: string, i: number) => (
                                        <li key={i}>• {item}</li>
                                      )
                                    )}
                                  </ul>
                                </div>
                                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                                  <h5 className="text-blue-400 font-semibold mb-2">
                                    {t.sections[2].pos.title}
                                  </h5>
                                  <p className="text-sm mb-2">
                                    {t.sections[2].pos.sub}
                                  </p>
                                  <ul className="text-xs text-slate-400 space-y-1">
                                    {t.sections[2].pos.list.map(
                                      (item: string, i: number) => (
                                        <li key={i}>• {item}</li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              </div>
                              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                                <h5 className="text-cyan-400 font-semibold mb-2">
                                  {t.sections[2].other.title}
                                </h5>
                                <ul className="text-sm">
                                  {t.sections[2].other.list.map(
                                    (item: string, i: number) => (
                                      <li key={i}>
                                        •{" "}
                                        <span
                                          dangerouslySetInnerHTML={{
                                            __html: item.replace(
                                              ":",
                                              ":</strong>"
                                            ),
                                          }}
                                        />
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            </>
                          )}

                          {section.idx === 2 && (
                            <>
                              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-5">
                                <h4 className="text-cyan-400 font-semibold mb-3">
                                  {t.sections[3].types.title}
                                </h4>
                                <ul className="text-sm space-y-2">
                                  {t.sections[3].types.list.map(
                                    (item: string, i: number) => (
                                      <li key={i}>
                                        •{" "}
                                        <span
                                          dangerouslySetInnerHTML={{
                                            __html: item,
                                          }}
                                        />
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                                <p
                                  className="text-sm"
                                  dangerouslySetInnerHTML={{
                                    __html: t.sections[3].bloat,
                                  }}
                                />
                              </div>
                            </>
                          )}

                          {section.idx === 3 && (
                            <>
                              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-5">
                                <h4 className="text-green-400 font-semibold mb-3">
                                  {t.sections[4].approaches.title}
                                </h4>
                                <div className="space-y-3 text-sm">
                                  <div className="bg-slate-800/50 rounded p-3">
                                    <p className="text-white font-semibold mb-1">
                                      {t.sections[4].approaches.l2.title}
                                    </p>
                                    <p className="text-xs text-slate-400">
                                      {t.sections[4].approaches.l2.desc}
                                    </p>
                                  </div>
                                  <div className="bg-slate-800/50 rounded p-3">
                                    <p className="text-white font-semibold mb-1">
                                      {t.sections[4].approaches.sharding.title}
                                    </p>
                                    <p className="text-xs text-slate-400">
                                      {t.sections[4].approaches.sharding.desc}
                                    </p>
                                  </div>
                                  <div className="bg-slate-800/50 rounded p-3">
                                    <p className="text-white font-semibold mb-1">
                                      {t.sections[4].approaches.channels.title}
                                    </p>
                                    <p className="text-xs text-slate-400">
                                      {t.sections[4].approaches.channels.desc}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}

                          {section.idx === 4 && (
                            <>
                              <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-5">
                                <h4 className="text-orange-400 font-semibold mb-3">
                                  {t.sections[5].tools.title}
                                </h4>
                                <div className="grid md:grid-cols-2 gap-3 text-sm">
                                  <div>
                                    <p className="text-white font-semibold mb-2">
                                      {t.sections[5].tools.dev.title}
                                    </p>
                                    <ul className="text-xs text-slate-400 space-y-1">
                                      {t.sections[5].tools.dev.list.map(
                                        (item: string, i: number) => (
                                          <li key={i}>• {item}</li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                  <div>
                                    <p className="text-white font-semibold mb-2">
                                      {t.sections[5].tools.frontend.title}
                                    </p>
                                    <ul className="text-xs text-slate-400 space-y-1">
                                      {t.sections[5].tools.frontend.list.map(
                                        (item: string, i: number) => (
                                          <li key={i}>• {item}</li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}

                          {section.idx === 5 && (
                            <>
                              <div className="bg-pink-500/10 border border-pink-500/20 rounded-xl p-5">
                                <h4 className="text-pink-400 font-semibold mb-3">
                                  {t.sections[6].arch.title}
                                </h4>
                                <ol className="text-sm space-y-2">
                                  {t.sections[6].arch.steps.map(
                                    (item: string, i: number) => (
                                      <li
                                        key={i}
                                        dangerouslySetInnerHTML={{
                                          __html: item,
                                        }}
                                      />
                                    )
                                  )}
                                </ol>
                              </div>
                              <div className="bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 rounded-lg p-5 text-center">
                                <h5 className="text-white font-semibold mb-2">
                                  {t.sections[6].start.title}
                                </h5>
                                <p className="text-sm text-slate-400">
                                  {t.sections[6].start.text}
                                </p>
                              </div>
                            </>
                          )}

                          <div className="mt-6 flex justify-center">
                            <SectionCompleteButton
                              courseId="blockchain-development"
                              sectionId={`section-${section.idx + 1}`}
                              sectionNumber={section.idx + 1}
                              totalSections={6}
                              lng={lng}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Card className="bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border-violet-500/20 mt-8 mb-16 max-w-4xl mx-auto">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">{t.cta.title}</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">{t.cta.text}</p>
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
              <Button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600">
                {t.track_progress}
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
