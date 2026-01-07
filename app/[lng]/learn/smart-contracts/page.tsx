"use client";

import { useState } from "react";
import Link from "next/link";
import { MainNav } from "@/components/main-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  FileCode,
  Shield,
  Zap,
  Bug,
  Rocket,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionCompleteButton } from "@/components/progress/section-complete-button";
import { useParams } from "next/navigation";

const translations = {
  en: {
    badge: "🔒 Premium Course",
    title: "Smart Contracts 101",
    desc: "Master the fundamentals of smart contract development. Learn to write, deploy, and audit self-executing code on the blockchain.",
    modules: "Modules",
    level: "Level",
    duration: "Duration",
    level_val: "Intermediate",
    back: "← Back to Courses",
    curriculum: "Course Curriculum",
    cta: {
      title: "Start Building Smart Contracts",
      desc: "You now have the foundation to build secure smart contracts. Practice on testnets, study open-source code, and always prioritize security.",
      track: "Track Your Progress →",
    },
    sections: {
      1: {
        title: "Smart Contract Basics",
        sub: "What are smart contracts?",
        p1: '<strong class="text-white">Smart Contracts</strong> are self-executing programs stored on a blockchain. They automatically execute when predetermined conditions are met, without intermediaries.',
        chars: {
          title: "🔑 Key Characteristics",
          list: [
            '<strong class="text-white">Autonomous:</strong> Executes automatically when conditions are met',
            '<strong class="text-white">Trustless:</strong> No need to trust a third party - code is law',
            '<strong class="text-white">Immutable:</strong> Once deployed, the code cannot be changed',
            '<strong class="text-white">Transparent:</strong> Anyone can verify the code and execution',
            '<strong class="text-white">Deterministic:</strong> Same input always produces same output',
          ],
        },
        cases: {
          fin: {
            title: "💰 Financial Use Cases",
            desc: "DeFi protocols, lending/borrowing, DEXs, stablecoins, derivatives",
            ex: "Example: Uniswap automatically swaps tokens based on AMM formula",
          },
          nft: {
            title: "🎮 NFT & Gaming",
            desc: "NFT minting, marketplaces, in-game economies, ownership",
            ex: "Example: CryptoPunks minting contract created 10,000 unique avatars",
          },
          gov: {
            title: "🏛️ Governance",
            desc: "DAOs, voting mechanisms, proposals, treasury management",
            ex: "Example: MakerDAO governance controls $5B+ protocol",
          },
          supply: {
            title: "🚛 Supply Chain",
            desc: "Tracking, authenticity verification, automated payments",
            ex: "Example: Walmart uses blockchain to track food supply",
          },
        },
        hello: {
          title: "Your First Smart Contract",
          desc: 'Here\'s a simple "Hello World" smart contract in Solidity:',
        },
      },
      2: {
        title: "Solidity Fundamentals",
        sub: "Learn the programming language",
        p1: '<strong class="text-white">Solidity</strong> is the most popular programming language for Ethereum smart contracts. It\'s statically-typed, supports inheritance, libraries, and complex user-defined types.',
        types: {
          title: "📚 Data Types & Variables",
          val: {
            title: "Value Types",
            list: [
              '<code class="text-cyan-300">bool</code>: true/false',
              '<code class="text-cyan-300">uint/int</code>: unsigned/signed integers',
              '<code class="text-cyan-300">address</code>: Ethereum address',
              '<code class="text-cyan-300">bytes</code>: byte arrays',
            ],
          },
          ref: {
            title: "Reference Types",
            list: [
              '<code class="text-cyan-300">arrays</code>: fixed or dynamic',
              '<code class="text-cyan-300">struct</code>: custom data structures',
              '<code class="text-cyan-300">mapping</code>: key-value storage',
              '<code class="text-cyan-300">string</code>: UTF-8 encoded text',
            ],
          },
        },
        funcs: {
          title: "Functions & Modifiers",
          desc: '<strong class="text-white">Visibility:</strong> <code class="text-cyan-300">public</code>, <code class="text-cyan-300">private</code>, <code class="text-cyan-300">internal</code>, <code class="text-cyan-300">external</code><br/><strong class="text-white">State Mutability:</strong> <code class="text-cyan-300">view</code> (read-only), <code class="text-cyan-300">pure</code> (no state access), <code class="text-cyan-300">payable</code> (accepts ETH)',
        },
      },
      3: {
        title: "Deploying Contracts",
        sub: "From local to mainnet",
        p1: "Deploying a smart contract means publishing it to the blockchain, making it permanently available and executable.",
        tools: {
          title: "🛠️ Development Tools",
          hardhat: {
            title: "Hardhat",
            desc: "Professional development environment",
            list: [
              "Built-in testing framework",
              "TypeScript support",
              "Extensive plugin ecosystem",
            ],
          },
          remix: {
            title: "Remix IDE",
            desc: "Browser-based IDE for beginners",
            list: [
              "No setup required",
              "Visual debugger",
              "Deploy to testnets easily",
            ],
          },
        },
        process: {
          title: "Deployment Process",
          steps: [
            { title: "Compile:", desc: "Convert Solidity to bytecode" },
            {
              title: "Test Locally:",
              desc: "Run on Hardhat Network (local blockchain)",
            },
            {
              title: "Deploy to Testnet:",
              desc: "Sepolia, Goerli - free test ETH",
            },
            {
              title: "Verify Contract:",
              desc: "Publish source code on Etherscan",
            },
            { title: "Deploy to Mainnet:", desc: "Real ETH, irreversible!" },
          ],
        },
      },
      4: {
        title: "Security Best Practices",
        sub: "Protect against vulnerabilities",
        p1: '<strong class="text-white">Security is paramount</strong> in smart contracts. A single bug can lead to millions in losses. The DAO hack (2016) lost $60M due to a reentrancy vulnerability.',
        vulns: {
          title: "⚠️ Common Vulnerabilities",
          reent: {
            title: "Reentrancy",
            desc: "Attacker calls back into contract before state updates",
            fix: "✅ Fix: Use Checks-Effects-Interactions pattern or ReentrancyGuard",
          },
          overflow: {
            title: "Integer Overflow/Underflow",
            desc: "Arithmetic operations exceed max/min values",
            fix: "✅ Fix: Use Solidity 0.8.0+ (built-in checks) or SafeMath library",
          },
          access: {
            title: "Access Control",
            desc: "Unauthorized users can call privileged functions",
            fix: "✅ Fix: Use modifiers (onlyOwner) and OpenZeppelin's AccessControl",
          },
        },
        list: {
          title: "Security Checklist",
          items: [
            "✅ Use latest Solidity version (0.8.x+)",
            "✅ Import audited libraries (OpenZeppelin)",
            "✅ Follow Checks-Effects-Interactions pattern",
            "✅ Add require() statements for input validation",
            "✅ Use events for important state changes",
            "✅ Consider circuit breakers (pause functionality)",
            "✅ Get professional audit before mainnet deployment",
          ],
        },
      },
      5: {
        title: "Testing Smart Contracts",
        sub: "Ensuring code reliability",
        p1: '<strong class="text-white">Testing is mandatory</strong> for smart contracts. Aim for 100% code coverage. Remember: you can\'t patch bugs after deployment!',
        frameworks: {
          title: "🧪 Testing Frameworks",
          hardhat: {
            title: "Hardhat Testing",
            desc: "JavaScript/TypeScript with Mocha & Chai",
          },
          foundry: {
            title: "Foundry Testing",
            desc: "Write tests in Solidity itself",
          },
        },
        areas: {
          title: "Test Coverage Areas",
          list: [
            {
              title: "Unit Tests:",
              desc: "Test individual functions in isolation",
            },
            {
              title: "Integration Tests:",
              desc: "Test interactions between contracts",
            },
            {
              title: "Edge Cases:",
              desc: "Zero values, max values, empty arrays",
            },
            { title: "Access Control:", desc: "Unauthorized access attempts" },
            { title: "Gas Usage:", desc: "Optimize expensive operations" },
          ],
        },
      },
      6: {
        title: "Advanced Patterns",
        sub: "Professional development techniques",
        p1: '<strong class="text-white">Design patterns</strong> help you write efficient, secure, and maintainable smart contracts.',
        patterns: {
          proxy: {
            title: "🔄 Proxy Pattern",
            desc: "Enable upgradeable contracts via delegation",
            ex: "Used by: USDC, USDT, Compound",
          },
          factory: {
            title: "🏭 Factory Pattern",
            desc: "Deploy multiple instances programmatically",
            ex: "Used by: Uniswap (pair creation)",
          },
          diamond: {
            title: "💎 Diamond Pattern",
            desc: "Modular contracts with multiple facets",
            ex: "Breaks 24KB contract size limit",
          },
          pull: {
            title: "🗳️ Pull Payment",
            desc: "Let users withdraw instead of push payments",
            ex: "Safer than direct transfers",
          },
        },
        gas: {
          title: "⚡ Gas Optimization Tips",
          list: [
            '• Use <code class="text-cyan-300">uint256</code> instead of smaller uints (cheaper in EVM)',
            "• Pack storage variables to save slots (saves 20K gas per slot)",
            '• Use <code class="text-cyan-300">immutable</code> for constants set in constructor',
            "• Avoid loops with unbounded arrays",
            "• Cache storage variables in memory when used multiple times",
            "• Use events instead of storage for historical data",
          ],
        },
        ready: {
          title: "🎓 You're Ready to Build!",
          desc: "You now have the fundamentals to start your smart contract development journey. Keep practicing, stay updated on security, and never stop learning.",
        },
      },
    },
  },
  es: {
    badge: "🔒 Curso Premium",
    title: "Contratos Inteligentes 101",
    desc: "Domina los fundamentos del desarrollo de contratos inteligentes. Aprende a escribir, desplegar y auditar código autoejecutable en la blockchain.",
    modules: "Módulos",
    level: "Nivel",
    duration: "Duración",
    level_val: "Intermedio",
    back: "← Volver a Cursos",
    curriculum: "Plan de Estudios",
    cta: {
      title: "Construye Contratos Inteligentes",
      desc: "Ya tienes las bases para construir contratos seguros. Practica en testnets, estudia código open-source y prioriza siempre la seguridad.",
      track: "Sigue tu Progreso →",
    },
    sections: {
      1: {
        title: "Básicos de Smart Contracts",
        sub: "¿Qué son los contratos inteligentes?",
        p1: 'Los <strong class="text-white">Smart Contracts</strong> son programas autoejecutables en una blockchain. Se ejecutan automáticamente cuando se cumplen condiciones, sin intermediarios.',
        chars: {
          title: "🔑 Características Clave",
          list: [
            '<strong class="text-white">Autónomos:</strong> Se ejecutan solos al cumplirse condiciones',
            '<strong class="text-white">Sin Confianza:</strong> No necesitas confiar en terceros - el código es ley',
            '<strong class="text-white">Inmutables:</strong> Una vez desplegados, el código no se puede cambiar',
            '<strong class="text-white">Transparentes:</strong> Cualquiera puede verificar código y ejecución',
            '<strong class="text-white">Deterministas:</strong> Misma entrada siempre produce misma salida',
          ],
        },
        cases: {
          fin: {
            title: "💰 Casos Financieros",
            desc: "Protocolos DeFi, préstamos, DEXs, stablecoins",
            ex: "Ejemplo: Uniswap intercambia tokens automáticamente",
          },
          nft: {
            title: "🎮 NFT y Gaming",
            desc: "Minteo de NFTs, marketplaces, economías in-game",
            ex: "Ejemplo: CryptoPunks creó 10,000 avatares únicos",
          },
          gov: {
            title: "🏛️ Gobernanza",
            desc: "DAOs, votaciones, propuestas, tesorería",
            ex: "Ejemplo: Gobernanza de MakerDAO controla protocolo",
          },
          supply: {
            title: "🚛 Cadena de Suministro",
            desc: "Rastreo, verificación de autenticidad, pagos",
            ex: "Ejemplo: Walmart usa blockchain para rastrear alimentos",
          },
        },
        hello: {
          title: "Tu Primer Smart Contract",
          desc: 'Aquí tienes un contrato "Hola Mundo" en Solidity:',
        },
      },
      2: {
        title: "Fundamentos de Solidity",
        sub: "Aprende el lenguaje de programación",
        p1: '<strong class="text-white">Solidity</strong> es el lenguaje más popular para Ethereum. Es de tipado estático, soporta herencia, librerías y tipos complejos.',
        types: {
          title: "📚 Tipos de Datos y Variables",
          val: {
            title: "Tipos de Valor",
            list: [
              '<code class="text-cyan-300">bool</code>: verdadero/falso',
              '<code class="text-cyan-300">uint/int</code>: enteros sin/con signo',
              '<code class="text-cyan-300">address</code>: dirección Ethereum',
              '<code class="text-cyan-300">bytes</code>: arrays de bytes',
            ],
          },
          ref: {
            title: "Tipos de Referencia",
            list: [
              '<code class="text-cyan-300">arrays</code>: fijos o dinámicos',
              '<code class="text-cyan-300">struct</code>: estructuras personalizadas',
              '<code class="text-cyan-300">mapping</code>: almacenamiento clave-valor',
              '<code class="text-cyan-300">string</code>: texto codificado UTF-8',
            ],
          },
        },
        funcs: {
          title: "Funciones y Modificadores",
          desc: '<strong class="text-white">Visibilidad:</strong> <code class="text-cyan-300">public</code>, <code class="text-cyan-300">private</code>, <code class="text-cyan-300">internal</code><br/><strong class="text-white">Mutabilidad:</strong> <code class="text-cyan-300">view</code> (solo lectura), <code class="text-cyan-300">pure</code> (sin acceso a estado), <code class="text-cyan-300">payable</code> (acepta ETH)',
        },
      },
      3: {
        title: "Desplegando Contratos",
        sub: "De local a mainnet",
        p1: "Desplegar un contrato significa publicarlo en la blockchain, haciéndolo permanentemente disponible y ejecutable.",
        tools: {
          title: "🛠️ Herramientas de Desarrollo",
          hardhat: {
            title: "Hardhat",
            desc: "Entorno de desarrollo profesional",
            list: [
              "Framework de testing incluido",
              "Soporte TypeScript",
              "Ecosistema extenso de plugins",
            ],
          },
          remix: {
            title: "Remix IDE",
            desc: "IDE en navegador para principiantes",
            list: [
              "Sin instalación",
              "Depurador visual",
              "Despliegue fácil a testnets",
            ],
          },
        },
        process: {
          title: "Proceso de Despliegue",
          steps: [
            { title: "Compilar:", desc: "Convertir Solidity a bytecode" },
            {
              title: "Test Local:",
              desc: "Ejecutar en red Hardhat (blockchain local)",
            },
            {
              title: "Desplegar a Testnet:",
              desc: "Sepolia, Goerli - ETH de prueba gratis",
            },
            {
              title: "Verificar Contrato:",
              desc: "Publicar código fuente en Etherscan",
            },
            { title: "Desplegar a Mainnet:", desc: "ETH real, ¡irreversible!" },
          ],
        },
      },
      4: {
        title: "Mejores Prácticas de Seguridad",
        sub: "Protégete contra vulnerabilidades",
        p1: '<strong class="text-white">La seguridad es primordial</strong>. Un solo bug puede costar millones. El hack de The DAO (2016) perdió $60M por reentrancia.',
        vulns: {
          title: "⚠️ Vulnerabilidades Comunes",
          reent: {
            title: "Reentrancia",
            desc: "Atacante llama de vuelta al contrato antes de actualizar estado",
            fix: "✅ Fix: Patrón Checks-Effects-Interactions o ReentrancyGuard",
          },
          overflow: {
            title: "Overflow/Underflow Enteros",
            desc: "Operaciones exceden valores máx/min",
            fix: "✅ Fix: Usar Solidity 0.8.0+ (chequeos nativos)",
          },
          access: {
            title: "Control de Acceso",
            desc: "Usuarios no autorizados llaman funciones privilegiadas",
            fix: "✅ Fix: Usar modifiers (onlyOwner) y AccessControl de OpenZeppelin",
          },
        },
        list: {
          title: "Checklist de Seguridad",
          items: [
            "✅ Usar última versión de Solidity (0.8.x+)",
            "✅ Importar librerías auditadas (OpenZeppelin)",
            "✅ Seguir patrón Checks-Effects-Interactions",
            "✅ Añadir require() para validar inputs",
            "✅ Usar eventos para cambios de estado importantes",
            "✅ Considerar interruptores (pausa)",
            "✅ Auditoría profesional antes de mainnet",
          ],
        },
      },
      5: {
        title: "Testing de Smart Contracts",
        sub: "Asegurando fiabilidad del código",
        p1: '<strong class="text-white">El testing es obligatorio</strong>. Apunta al 100% de cobertura. Recuerda: ¡no puedes parchear bugs tras el despliegue!',
        frameworks: {
          title: "🧪 Frameworks de Testing",
          hardhat: {
            title: "Hardhat Testing",
            desc: "JavaScript/TypeScript con Mocha & Chai",
          },
          foundry: {
            title: "Foundry Testing",
            desc: "Escribe tests en Solidity mismo",
          },
        },
        areas: {
          title: "Áreas de Cobertura de Test",
          list: [
            {
              title: "Tests Unitarios:",
              desc: "Probar funciones individuales aisladas",
            },
            {
              title: "Tests de Integración:",
              desc: "Probar interacciones entre contratos",
            },
            {
              title: "Casos Borde:",
              desc: "Valores cero, máximos, arrays vacíos",
            },
            {
              title: "Control de Acceso:",
              desc: "Intentos de acceso no autorizado",
            },
            { title: "Uso de Gas:", desc: "Optimizar operaciones costosas" },
          ],
        },
      },
      6: {
        title: "Patrones Avanzados",
        sub: "Técnicas de desarrollo profesional",
        p1: 'Los <strong class="text-white">patrones de diseño</strong> ayudan a escribir contratos eficientes, seguros y mantenibles.',
        patterns: {
          proxy: {
            title: "🔄 Patrón Proxy",
            desc: "Permite contratos actualizables vía delegación",
            ex: "Usado por: USDC, USDT",
          },
          factory: {
            title: "🏭 Patrón Factory",
            desc: "Desplegar múltiples instancias programáticamente",
            ex: "Usado por: Uniswap (creación de pares)",
          },
          diamond: {
            title: "💎 Patrón Diamond",
            desc: "Contratos modulares con múltiples facetas",
            ex: "Rompe el límite de tamaño de 24KB",
          },
          pull: {
            title: "🗳️ Pull Payment",
            desc: "Permitir retirar en lugar de enviar pagos",
            ex: "Más seguro que transferencias directas",
          },
        },
        gas: {
          title: "⚡ Tips de Optimización de Gas",
          list: [
            '• Usar <code class="text-cyan-300">uint256</code> en lugar de uints menores (más barato en EVM)',
            "• Empaquetar variables de storage (ahorra 20K gas por slot)",
            '• Usar <code class="text-cyan-300">immutable</code> para constantes de constructor',
            "• Evitar bucles con arrays ilimitados",
            "• Cachear variables de storage en memoria",
            "• Usar eventos en lugar de storage para datos históricos",
          ],
        },
        ready: {
          title: "🎓 ¡Estás Listo para Construir!",
          desc: "Ya tienes los fundamentos para iniciar tu viaje en desarrollo de contratos inteligentes. Sigue practicando y nunca pares de aprender.",
        },
      },
    },
  },
};

export default function SmartContracts101Page() {
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
            <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">
              {t.badge}
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                {t.title}
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto">{t.desc}</p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-blue-400">6</div>
                <div className="text-sm text-slate-400">{t.modules}</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-cyan-400">
                  {t.level_val}
                </div>
                <div className="text-sm text-slate-400">{t.level}</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-teal-400">~5h</div>
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
                  {t.back}
                </Button>
              </Link>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">
              {t.curriculum}
            </h2>

            <div className="relative space-y-4 pl-4 md:pl-0">
              {/* Section 1: Basics */}
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
                      <Code className="w-5 h-5 text-blue-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          1. {t.sections[1].title}
                        </h3>
                        <p className="text-sm text-slate-400">
                          {t.sections[1].sub}
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

                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-5">
                          <h4 className="text-blue-400 font-semibold mb-3">
                            {t.sections[1].chars.title}
                          </h4>
                          <ul className="space-y-2 text-sm">
                            {t.sections[1].chars.list.map((item, i) => (
                              <li
                                key={i}
                                dangerouslySetInnerHTML={{
                                  __html: `• ${item}`,
                                }}
                              />
                            ))}
                          </ul>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                            <h5 className="text-green-400 font-semibold mb-2">
                              {t.sections[1].cases.fin.title}
                            </h5>
                            <p className="text-xs text-slate-400 mb-2">
                              {t.sections[1].cases.fin.desc}
                            </p>
                            <p className="text-xs italic text-slate-500">
                              {t.sections[1].cases.fin.ex}
                            </p>
                          </div>
                          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                            <h5 className="text-purple-400 font-semibold mb-2">
                              {t.sections[1].cases.nft.title}
                            </h5>
                            <p className="text-xs text-slate-400 mb-2">
                              {t.sections[1].cases.nft.desc}
                            </p>
                            <p className="text-xs italic text-slate-500">
                              {t.sections[1].cases.nft.ex}
                            </p>
                          </div>
                          <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                            <h5 className="text-cyan-400 font-semibold mb-2">
                              {t.sections[1].cases.gov.title}
                            </h5>
                            <p className="text-xs text-slate-400 mb-2">
                              {t.sections[1].cases.gov.desc}
                            </p>
                            <p className="text-xs italic text-slate-500">
                              {t.sections[1].cases.gov.ex}
                            </p>
                          </div>
                          <div className="bg-pink-500/10 border border-pink-500/20 rounded-lg p-4">
                            <h5 className="text-pink-400 font-semibold mb-2">
                              {t.sections[1].cases.supply.title}
                            </h5>
                            <p className="text-xs text-slate-400 mb-2">
                              {t.sections[1].cases.supply.desc}
                            </p>
                            <p className="text-xs italic text-slate-500">
                              {t.sections[1].cases.supply.ex}
                            </p>
                          </div>
                        </div>

                        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                          <h5 className="text-white font-semibold mb-2">
                            {t.sections[1].hello.title}
                          </h5>
                          <p className="text-sm mb-3">
                            {t.sections[1].hello.desc}
                          </p>
                          {/* Code snippets remain hardcoded as they don't need translation */}
                          <div className="bg-slate-900/50 rounded p-3 font-mono text-xs overflow-x-auto">
                            <div className="text-green-400">
                              // SPDX-License-Identifier: MIT
                            </div>
                            <div className="text-purple-400">
                              pragma solidity ^0.8.0;
                            </div>
                            <div className="mt-2 text-blue-400">
                              contract HelloWorld {`{`}
                            </div>
                            <div className="ml-4 text-slate-300">
                              string public message;
                            </div>
                            <div className="ml-4 mt-2 text-cyan-400">
                              constructor(string memory _message) {`{`}
                            </div>
                            <div className="ml-8 text-slate-300">
                              message = _message;
                            </div>
                            <div className="ml-4 text-cyan-400">{`}`}</div>
                            <div className="ml-4 mt-2 text-cyan-400">
                              function setMessage(string memory _message) public{" "}
                              {`{`}
                            </div>
                            <div className="ml-8 text-slate-300">
                              message = _message;
                            </div>
                            <div className="ml-4 text-cyan-400">{`}`}</div>
                            <div className="text-blue-400">{`}`}</div>
                          </div>
                        </div>

                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton
                            courseId="smart-contracts"
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

              {/* Section 2: Solidity */}
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
                    <div className="flex items-center gap-3">
                      <FileCode className="w-5 h-5 text-cyan-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          2. {t.sections[2].title}
                        </h3>
                        <p className="text-sm text-slate-400">
                          {t.sections[2].sub}
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
                        <p
                          className="text-lg"
                          dangerouslySetInnerHTML={{ __html: t.sections[2].p1 }}
                        />

                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-5">
                          <h4 className="text-cyan-400 font-semibold mb-3">
                            {t.sections[2].types.title}
                          </h4>
                          <div className="grid md:grid-cols-2 gap-3 text-sm">
                            <div>
                              <p className="text-white font-semibold mb-2">
                                {t.sections[2].types.val.title}
                              </p>
                              <ul className="text-xs text-slate-400 space-y-1">
                                {t.sections[2].types.val.list.map((item, i) => (
                                  <li
                                    key={i}
                                    dangerouslySetInnerHTML={{
                                      __html: `• ${item}`,
                                    }}
                                  />
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="text-white font-semibold mb-2">
                                {t.sections[2].types.ref.title}
                              </p>
                              <ul className="text-xs text-slate-400 space-y-1">
                                {t.sections[2].types.ref.list.map((item, i) => (
                                  <li
                                    key={i}
                                    dangerouslySetInnerHTML={{
                                      __html: `• ${item}`,
                                    }}
                                  />
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                          <h5 className="text-white font-semibold mb-2">
                            {t.sections[2].funcs.title}
                          </h5>
                          <div className="bg-slate-900/50 rounded p-3 font-mono text-xs overflow-x-auto mb-3">
                            <div className="text-blue-400">
                              function transfer(address to, uint amount) public{" "}
                              {`{`}
                            </div>
                            <div className="ml-4 text-slate-300">
                              require(balance[msg.sender] &gt;= amount,
                              "Insufficient balance");
                            </div>
                            <div className="ml-4 text-slate-300">
                              balance[msg.sender] -= amount;
                            </div>
                            <div className="ml-4 text-slate-300">
                              balance[to] += amount;
                            </div>
                            <div className="text-blue-400">{`}`}</div>
                          </div>
                          <p
                            className="text-sm"
                            dangerouslySetInnerHTML={{
                              __html: t.sections[2].funcs.desc,
                            }}
                          />
                        </div>

                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton
                            courseId="smart-contracts"
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

              {/* Section 3: Deploying */}
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
                    <div className="flex items-center gap-3">
                      <Rocket className="w-5 h-5 text-green-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          3. {t.sections[3].title}
                        </h3>
                        <p className="text-sm text-slate-400">
                          {t.sections[3].sub}
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
                        <p className="text-lg">{t.sections[3].p1}</p>

                        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-5">
                          <h4 className="text-green-400 font-semibold mb-3">
                            {t.sections[3].tools.title}
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-slate-800/50 rounded p-3">
                              <h5 className="text-white font-semibold text-sm mb-2">
                                {t.sections[3].tools.hardhat.title}
                              </h5>
                              <p className="text-xs text-slate-400 mb-2">
                                {t.sections[3].tools.hardhat.desc}
                              </p>
                              <ul className="text-xs text-slate-500 space-y-0.5">
                                {t.sections[3].tools.hardhat.list.map(
                                  (item, i) => (
                                    <li key={i}>• {item}</li>
                                  )
                                )}
                              </ul>
                            </div>
                            <div className="bg-slate-800/50 rounded p-3">
                              <h5 className="text-white font-semibold text-sm mb-2">
                                {t.sections[3].tools.remix.title}
                              </h5>
                              <p className="text-xs text-slate-400 mb-2">
                                {t.sections[3].tools.remix.desc}
                              </p>
                              <ul className="text-xs text-slate-500 space-y-0.5">
                                {t.sections[3].tools.remix.list.map(
                                  (item, i) => (
                                    <li key={i}>• {item}</li>
                                  )
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                          <h5 className="text-blue-400 font-semibold mb-2">
                            {t.sections[3].process.title}
                          </h5>
                          <ol className="space-y-2 text-sm">
                            {t.sections[3].process.steps.map((step, i) => (
                              <li key={i} className="flex gap-2">
                                <span className="text-blue-400 font-semibold">
                                  {i + 1}.
                                </span>
                                <div>
                                  <strong className="text-white">
                                    {step.title}
                                  </strong>{" "}
                                  {step.desc}
                                </div>
                              </li>
                            ))}
                          </ol>
                        </div>

                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton
                            courseId="smart-contracts"
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

              {/* Section 4: Security */}
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
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-red-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          4. {t.sections[4].title}
                        </h3>
                        <p className="text-sm text-slate-400">
                          {t.sections[4].sub}
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
                        <p
                          className="text-lg"
                          dangerouslySetInnerHTML={{ __html: t.sections[4].p1 }}
                        />

                        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
                          <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                            {t.sections[4].vulns.title}
                          </h4>
                          <div className="space-y-3">
                            <div className="bg-slate-800/50 rounded p-3">
                              <h5 className="text-white font-semibold text-sm mb-1">
                                {t.sections[4].vulns.reent.title}
                              </h5>
                              <p className="text-xs text-slate-400 mb-2">
                                {t.sections[4].vulns.reent.desc}
                              </p>
                              <p className="text-xs text-green-400">
                                {t.sections[4].vulns.reent.fix}
                              </p>
                            </div>
                            <div className="bg-slate-800/50 rounded p-3">
                              <h5 className="text-white font-semibold text-sm mb-1">
                                {t.sections[4].vulns.overflow.title}
                              </h5>
                              <p className="text-xs text-slate-400 mb-2">
                                {t.sections[4].vulns.overflow.desc}
                              </p>
                              <p className="text-xs text-green-400">
                                {t.sections[4].vulns.overflow.fix}
                              </p>
                            </div>
                            <div className="bg-slate-800/50 rounded p-3">
                              <h5 className="text-white font-semibold text-sm mb-1">
                                {t.sections[4].vulns.access.title}
                              </h5>
                              <p className="text-xs text-slate-400 mb-2">
                                {t.sections[4].vulns.access.desc}
                              </p>
                              <p className="text-xs text-green-400">
                                {t.sections[4].vulns.access.fix}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                          <h5 className="text-cyan-400 font-semibold mb-2">
                            {t.sections[4].list.title}
                          </h5>
                          <ul className="text-sm space-y-1">
                            {t.sections[4].list.items.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton
                            courseId="smart-contracts"
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

              {/* Section 5: Testing */}
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
                    <div className="flex items-center gap-3">
                      <Bug className="w-5 h-5 text-yellow-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          5. {t.sections[5].title}
                        </h3>
                        <p className="text-sm text-slate-400">
                          {t.sections[5].sub}
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform ${expandedSections.includes(4) ? "rotate-180" : ""}`}
                    />
                  </div>

                  {expandedSections.includes(4) && (
                    <div className="px-6 pb-6">
                      <div className="space-y-4 text-slate-300">
                        <p
                          className="text-lg"
                          dangerouslySetInnerHTML={{ __html: t.sections[5].p1 }}
                        />

                        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-5">
                          <h4 className="text-yellow-400 font-semibold mb-3">
                            {t.sections[5].frameworks.title}
                          </h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            <div className="bg-slate-800/50 rounded p-3">
                              <h5 className="text-white font-semibold text-sm mb-2">
                                {t.sections[5].frameworks.hardhat.title}
                              </h5>
                              <p className="text-xs text-slate-400 mb-2">
                                {t.sections[5].frameworks.hardhat.desc}
                              </p>
                              <div className="bg-slate-900 rounded p-2 font-mono text-xs">
                                <div className="text-green-400">
                                  describe(&quot;Token&quot;, () =&gt; {`{`}
                                </div>
                                <div className="ml-2 text-cyan-400">
                                  it(&quot;should transfer&quot;, ...
                                </div>
                                <div className="text-green-400">{`}`});</div>
                              </div>
                            </div>
                            <div className="bg-slate-800/50 rounded p-3">
                              <h5 className="text-white font-semibold text-sm mb-2">
                                {t.sections[5].frameworks.foundry.title}
                              </h5>
                              <p className="text-xs text-slate-400 mb-2">
                                {t.sections[5].frameworks.foundry.desc}
                              </p>
                              <div className="bg-slate-900 rounded p-2 font-mono text-xs">
                                <div className="text-purple-400">
                                  function testTransfer()
                                </div>
                                <div className="ml-2 text-slate-300">
                                  public {`{`}
                                </div>
                                <div className="ml-4 text-cyan-300">
                                  assertTrue(...)
                                </div>
                                <div className="ml-2 text-slate-300">{`}`}</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                          <h5 className="text-blue-400 font-semibold mb-2">
                            {t.sections[5].areas.title}
                          </h5>
                          <ul className="space-y-2 text-sm">
                            {t.sections[5].areas.list.map((item, i) => (
                              <li key={i}>
                                <strong className="text-white">
                                  {item.title}
                                </strong>{" "}
                                {item.desc}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton
                            courseId="smart-contracts"
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

              {/* Section 6: Advanced */}
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
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-purple-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          6. {t.sections[6].title}
                        </h3>
                        <p className="text-sm text-slate-400">
                          {t.sections[6].sub}
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform ${expandedSections.includes(5) ? "rotate-180" : ""}`}
                    />
                  </div>

                  {expandedSections.includes(5) && (
                    <div className="px-6 pb-6">
                      <div className="space-y-4 text-slate-300">
                        <p
                          className="text-lg"
                          dangerouslySetInnerHTML={{ __html: t.sections[6].p1 }}
                        />

                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                            <h5 className="text-purple-400 font-semibold mb-2">
                              {t.sections[6].patterns.proxy.title}
                            </h5>
                            <p className="text-xs text-slate-400 mb-2">
                              {t.sections[6].patterns.proxy.desc}
                            </p>
                            <p className="text-xs text-slate-500">
                              {t.sections[6].patterns.proxy.ex}
                            </p>
                          </div>
                          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                            <h5 className="text-blue-400 font-semibold mb-2">
                              {t.sections[6].patterns.factory.title}
                            </h5>
                            <p className="text-xs text-slate-400 mb-2">
                              {t.sections[6].patterns.factory.desc}
                            </p>
                            <p className="text-xs text-slate-500">
                              {t.sections[6].patterns.factory.ex}
                            </p>
                          </div>
                          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                            <h5 className="text-green-400 font-semibold mb-2">
                              {t.sections[6].patterns.diamond.title}
                            </h5>
                            <p className="text-xs text-slate-400 mb-2">
                              {t.sections[6].patterns.diamond.desc}
                            </p>
                            <p className="text-xs text-slate-500">
                              {t.sections[6].patterns.diamond.ex}
                            </p>
                          </div>
                          <div className="bg-pink-500/10 border border-pink-500/20 rounded-lg p-4">
                            <h5 className="text-pink-400 font-semibold mb-2">
                              {t.sections[6].patterns.pull.title}
                            </h5>
                            <p className="text-xs text-slate-400 mb-2">
                              {t.sections[6].patterns.pull.desc}
                            </p>
                            <p className="text-xs text-slate-500">
                              {t.sections[6].patterns.pull.ex}
                            </p>
                          </div>
                        </div>

                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-5">
                          <h4 className="text-cyan-400 font-semibold mb-3">
                            {t.sections[6].gas.title}
                          </h4>
                          <ul className="space-y-1 text-sm">
                            {t.sections[6].gas.list.map((item, i) => (
                              <li
                                key={i}
                                dangerouslySetInnerHTML={{ __html: item }}
                              />
                            ))}
                          </ul>
                        </div>

                        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-5 text-center">
                          <h5 className="text-white font-semibold mb-2">
                            {t.sections[6].ready.title}
                          </h5>
                          <p className="text-sm text-slate-400">
                            {t.sections[6].ready.desc}
                          </p>
                        </div>

                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton
                            courseId="smart-contracts"
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
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Card className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-500/20 mt-8 mb-16 max-w-4xl mx-auto">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">{t.cta.title}</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">{t.cta.desc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lng}/courses`}>
              <Button
                variant="outline"
                className="border-slate-700 text-slate-300 hover:bg-slate-800"
              >
                {t.back}
              </Button>
            </Link>
            <Link href={`/${lng}/dashboard`}>
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                {t.cta.track}
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
