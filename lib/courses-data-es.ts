import { Course } from "./course-types";

export const coursesEs: Course[] = [
  {
    id: "web3-basics",
    title: "¿Qué es Web3?",
    slug: "web3-basics",
    description: "La guía definitiva para entender la nueva era de internet.",
    longDescription:
      "Aprende qué es Web3 y blockchain, explicado de forma sencilla. Esta guía completa cubre la evolución de internet, la tecnología blockchain y sus aplicaciones en el mundo real.",
    duration: "45 min",
    difficulty: "beginner",
    isPremium: false,
    icon: "Blocks",
    color: "cyan",
    href: "/learn/web3-basics",
    sections: [
      {
        id: "evolution",
        title: "La Evolución del Internet",
        description: "De la Web 1.0 a la Web 3.0",
      },
      {
        id: "blockchain",
        title: "¿Qué es Blockchain?",
        description: "La tecnología detrás de Web3",
      },
      {
        id: "applications",
        title: "Aplicaciones Web3",
        description: "DeFi, NFTs y más",
      },
      {
        id: "benefits",
        title: "¿Por qué debería importarte?",
        description: "Beneficios y oportunidades",
      },
      {
        id: "history",
        title: "Historia de Web3",
        description: "Hitos y eventos clave",
      },
      {
        id: "use-cases",
        title: "Casos de Uso Real",
        description: "Votación, cadena de suministro, identidad",
      },
      { id: "future", title: "Tendencias Futuras", description: "Qué esperar" },
    ],
    learningOutcomes: [
      "Entender la diferencia entre Web 1.0, 2.0 y 3.0",
      "Explicar cómo funciona la tecnología blockchain",
      "Identificar aplicaciones Web3 del mundo real",
      "Evaluar oportunidades en el espacio Web3",
    ],
  },
  {
    id: "crypto-101",
    title: "Cripto 101",
    slug: "crypto-101",
    description: "Todo lo que necesitas saber sobre criptomonedas.",
    longDescription:
      "Una introducción completa a las criptomonedas, billeteras y cómo entrar al mundo cripto de manera segura.",
    duration: "60 min",
    difficulty: "beginner",
    isPremium: false,
    icon: "Coins",
    color: "teal",
    href: "/learn/crypto-101",
    sections: [
      {
        id: "what-is-crypto",
        title: "¿Qué son las Criptomonedas?",
        description: "Dinero digital explicado",
      },
      {
        id: "main-cryptos",
        title: "Las Principales Criptomonedas",
        description: "Bitcoin, Ethereum y más",
      },
      {
        id: "wallets",
        title: "¿Qué es una Wallet?",
        description: "Billeteras calientes vs frías",
      },
      {
        id: "security",
        title: "Conceptos Clave de Seguridad",
        description: "Frases semilla y claves privadas",
      },
      {
        id: "first-steps",
        title: "Primeros Pasos Recomendados",
        description: "Cómo empezar",
      },
      {
        id: "exchanges",
        title: "Cómo Comprar Cripto",
        description: "Comparación de exchanges y tarifas",
      },
      {
        id: "trading-basics",
        title: "Conceptos Básicos de Trading",
        description: "Tipos de órdenes y estrategias",
      },
      {
        id: "portfolio",
        title: "Construyendo tu Portafolio",
        description: "Básicos de diversificación",
      },
    ],
    learningOutcomes: [
      "Entender cómo funcionan las criptomonedas",
      "Configurar y asegurar una wallet de cripto",
      "Comparar diferentes exchanges",
      "Realizar tu primera compra de criptomonedas de forma segura",
    ],
  },
  // ... (Add other courses similarly if needed, for brevity starting with these two as they are the main free ones usually)
  // I will add placeholders for the rest or copy them progressively if space permits
  {
    id: "cbdc",
    title: "Entendiendo CBDCs",
    slug: "cbdc",
    description:
      "Monedas Digitales de Bancos Centrales: el futuro del dinero gubernamental.",
    longDescription:
      "Descubre cómo los gobiernos están creando sus propias monedas digitales y qué impacto tendrán en tu vida diaria.",
    duration: "40 min",
    difficulty: "beginner",
    isPremium: false,
    icon: "Landmark",
    color: "emerald",
    href: "/learn/cbdc",
    sections: [
      {
        id: "definition",
        title: "Definición Simple",
        description: "¿Qué son las CBDCs?",
      },
      {
        id: "comparison",
        title: "CBDCs vs Cripto vs Efectivo",
        description: "Diferencias clave",
      },
      {
        id: "digital-euro",
        title: "El Euro Digital",
        description: "El proyecto CBDC de Europa",
      },
      {
        id: "global",
        title: "CBDCs en el Mundo",
        description: "China, Brasil y más",
      },
      {
        id: "privacy",
        title: "Implicaciones de Privacidad",
        description: "Preocupaciones de vigilancia",
      },
      {
        id: "timeline",
        title: "Línea de Tiempo",
        description: "Cuándo y dónde",
      },
      {
        id: "stablecoins",
        title: "CBDCs vs Stablecoins",
        description: "Tabla comparativa",
      },
    ],
    learningOutcomes: [
      "Explicar qué son las CBDCs y cómo difieren de las cripto",
      "Entender las implicaciones de privacidad",
      "Seguir el desarrollo global de CBDCs",
      "Tomar decisiones informadas sobre monedas digitales",
    ],
  },
  {
    id: "safety",
    title: "Guía de Seguridad",
    slug: "safety",
    description: "Protégete de estafas y mantén seguros tus activos.",
    longDescription:
      "Aprende a identificar estafas comunes en criptomonedas e implementa mejores prácticas para asegurar tus activos digitales.",
    duration: "50 min",
    difficulty: "beginner",
    isPremium: false,
    icon: "Shield",
    color: "red",
    href: "/learn/safety",
    sections: [
      {
        id: "golden-rule",
        title: "La Regla de Oro",
        description: "Nunca compartas tu frase semilla",
      },
      {
        id: "phishing",
        title: "Estafas de Phishing",
        description: "Cómo identificar sitios falsos",
      },
      {
        id: "fake-support",
        title: "Soporte Técnico Falso",
        description: "Tácticas comunes",
      },
      {
        id: "fake-airdrops",
        title: "Airdrops Falsos",
        description: "Tokens gratuitos peligrosos",
      },
      {
        id: "checklist",
        title: "Lista de Verificación de Seguridad",
        description: "Mejores prácticas",
      },
      {
        id: "recovery",
        title: "Si eres Hackeado",
        description: "Procedimientos de recuperación",
      },
      {
        id: "insurance",
        title: "Seguros Cripto",
        description: "Opciones de protección",
      },
      {
        id: "tools",
        title: "Herramientas de Seguridad",
        description: "Software recomendado",
      },
    ],
    learningOutcomes: [
      "Identificar estafas comunes de criptomonedas",
      "Implementar mejores prácticas de seguridad",
      "Recuperarse de incidentes de seguridad",
      "Usar herramientas de seguridad efectivamente",
    ],
  },
  {
    id: "defi-deep-dive",
    title: "Inmersión en DeFi",
    slug: "defi-deep-dive",
    description:
      "Domina los protocolos y estrategias de finanzas descentralizadas.",
    longDescription:
      "Ve más allá de lo básico y aprende a usar protocolos DeFi para préstamos, rendimiento y provisión de liquidez.",
    duration: "90 min",
    difficulty: "intermediate",
    isPremium: true,
    icon: "TrendingUp",
    color: "purple",
    href: "/learn/defi-deep-dive",
    sections: [
      {
        id: "defi-intro",
        title: "Fundamentos DeFi",
        description: "Conceptos y protocolos clave",
      },
      {
        id: "lending",
        title: "Préstamos y Endeudamiento",
        description: "Aave, Compound explicados",
      },
      {
        id: "yield-farming",
        title: "Agricultura de Rendimiento",
        description: "Maximizando retornos",
      },
      {
        id: "liquidity",
        title: "Piscinas de Liquidez",
        description: "AMMs y pérdida impermanente",
      },
      {
        id: "risks",
        title: "Riesgos DeFi",
        description: "Riesgos de contratos inteligentes y protocolos",
      },
      {
        id: "strategies",
        title: "Estrategias DeFi",
        description: "Construyendo tu portafolio DeFi",
      },
    ],
    learningOutcomes: [
      "Navegar por los principales protocolos DeFi",
      "Entender la mecánica de préstamos",
      "Evaluar oportunidades de rendimiento",
      "Gestionar riesgos DeFi efectivamente",
    ],
  },
  {
    id: "nft-masterclass",
    title: "Masterclass NFT",
    slug: "nft-masterclass",
    description: "Crea, colecciona e intercambia NFTs como un profesional.",
    longDescription:
      "Desde la creación hasta el comercio, aprende todo sobre NFTs incluyendo consideraciones legales y estrategias de mercado.",
    duration: "75 min",
    difficulty: "intermediate",
    isPremium: true,
    icon: "Palette",
    color: "pink",
    href: "/learn/nft-masterclass",
    sections: [
      {
        id: "nft-basics",
        title: "Fundamentos NFT",
        description: "Qué hace únicos a los NFTs",
      },
      {
        id: "creating",
        title: "Creando NFTs",
        description: "Herramientas y mejores prácticas",
      },
      {
        id: "minting",
        title: "Guía de Acuñación (Minting)",
        description: "Proceso paso a paso",
      },
      {
        id: "marketplaces",
        title: "Mercados NFT",
        description: "OpenSea, Blur y más",
      },
      {
        id: "valuation",
        title: "Valoración de NFTs",
        description: "Cómo evaluar el valor",
      },
      {
        id: "legal",
        title: "Consideraciones Legales",
        description: "Derechos y regalías",
      },
    ],
    learningOutcomes: [
      "Crear y acuñar tus propios NFTs",
      "Navegar por los principales mercados NFT",
      "Evaluar inversiones en NFT",
      "Entender implicaciones legales",
    ],
  },
  {
    id: "smart-contracts",
    title: "Contratos Inteligentes 101",
    slug: "smart-contracts",
    description: "Introducción a la programación blockchain con Solidity.",
    longDescription:
      "Aprende los fundamentos del desarrollo de contratos inteligentes, desde lo básico de Solidity hasta el despliegue y seguridad.",
    duration: "120 min",
    difficulty: "intermediate",
    isPremium: true,
    icon: "Code",
    color: "blue",
    href: "/learn/smart-contracts",
    sections: [
      {
        id: "what-are-sc",
        title: "¿Qué son los Contratos Inteligentes?",
        description: "Código autoejecutable",
      },
      {
        id: "solidity-basics",
        title: "Lo Básico de Solidity",
        description: "Fundamentos del lenguaje",
      },
      {
        id: "development",
        title: "Entorno de Desarrollo",
        description: "Herramientas y configuración",
      },
      {
        id: "writing",
        title: "Escribiendo tu Primer Contrato",
        description: "Tutorial práctico",
      },
      {
        id: "deployment",
        title: "Despliegue",
        description: "Testnets y mainnet",
      },
      {
        id: "security",
        title: "Consideraciones de Seguridad",
        description: "Vulnerabilidades comunes",
      },
    ],
    learningOutcomes: [
      "Entender la arquitectura de contratos inteligentes",
      "Escribir código básico en Solidity",
      "Desplegar contratos en redes de prueba",
      "Identificar problemas comunes de seguridad",
    ],
  },
  {
    id: "technical-analysis",
    title: "Análisis Técnico",
    slug: "technical-analysis",
    description: "Lee gráficos e identifica oportunidades de trading.",
    longDescription:
      "Domina el arte del análisis técnico con patrones de gráficos, indicadores y estrategias de trading probadas.",
    duration: "100 min",
    difficulty: "intermediate",
    isPremium: true,
    icon: "LineChart",
    color: "orange",
    href: "/learn/technical-analysis",
    sections: [
      {
        id: "chart-basics",
        title: "Conceptos Básicos de Gráficos",
        description: "Velas y marcos de tiempo",
      },
      {
        id: "patterns",
        title: "Patrones de Gráficos",
        description: "Hombro-cabeza-hombro, triángulos",
      },
      {
        id: "indicators",
        title: "Indicadores Técnicos",
        description: "RSI, MACD, medias móviles",
      },
      {
        id: "volume",
        title: "Análisis de Volumen",
        description: "Entendiendo la actividad del mercado",
      },
      {
        id: "strategies",
        title: "Estrategias de Trading",
        description: "Puntos de entrada y salida",
      },
      {
        id: "risk-management",
        title: "Gestión de Riesgos",
        description: "Tamaño de posición y stops",
      },
    ],
    learningOutcomes: [
      "Leer e interpretar gráficos cripto",
      "Usar indicadores técnicos efectivamente",
      "Desarrollar estrategias de trading",
      "Gestionar riesgo de trading",
    ],
  },
  {
    id: "portfolio-management",
    title: "Gestión de Portafolio",
    slug: "portfolio-management",
    description: "Construye y gestiona un portafolio cripto equilibrado.",
    longDescription:
      "Aprende técnicas profesionales de gestión de portafolio incluyendo diversificación, rebalanceo y optimización fiscal.",
    duration: "80 min",
    difficulty: "intermediate",
    isPremium: true,
    icon: "PieChart",
    color: "green",
    href: "/learn/portfolio-management",
    sections: [
      {
        id: "principles",
        title: "Principios de Inversión",
        description: "Pensamiento a largo plazo",
      },
      {
        id: "allocation",
        title: "Asignación de Activos",
        description: "Equilibrando tu portafolio",
      },
      {
        id: "diversification",
        title: "Diversificación",
        description: "Reduciendo riesgo",
      },
      {
        id: "rebalancing",
        title: "Estrategias de Rebalanceo",
        description: "Cuándo y cómo",
      },
      {
        id: "tracking",
        title: "Seguimiento de Portafolio",
        description: "Herramientas y métricas",
      },
      {
        id: "taxes",
        title: "Implicaciones Fiscales",
        description: "Reportes y optimización",
      },
    ],
    learningOutcomes: [
      "Construir un portafolio cripto diversificado",
      "Implementar estrategias de rebalanceo",
      "Seguir el rendimiento del portafolio",
      "Entender obligaciones fiscales",
    ],
  },
  {
    id: "blockchain-dev",
    title: "Desarrollo Blockchain",
    slug: "blockchain-dev",
    description: "Construye aplicaciones descentralizadas full-stack.",
    longDescription:
      "Desde el frontend hasta los contratos inteligentes, aprende a construir dApps completas con herramientas modernas.",
    duration: "150 min",
    difficulty: "advanced",
    isPremium: true,
    icon: "Layers",
    color: "indigo",
    href: "/learn/blockchain-dev",
    sections: [
      {
        id: "architecture",
        title: "Arquitectura dApp",
        description: "Frontend, backend, blockchain",
      },
      {
        id: "web3-libs",
        title: "Librerías Web3",
        description: "ethers.js, wagmi, viem",
      },
      {
        id: "frontend",
        title: "Desarrollo Frontend",
        description: "React + Web3",
      },
      {
        id: "backend",
        title: "Servicios Backend",
        description: "APIs e indexación",
      },
      {
        id: "testing",
        title: "Probando dApps",
        description: "Tests unitarios y de integración",
      },
      {
        id: "deployment",
        title: "Despliegue a Producción",
        description: "Saliendo en vivo",
      },
    ],
    learningOutcomes: [
      "Arquitecturar dApps completas",
      "Integrar Web3 con React",
      "Construir y probar contratos inteligentes",
      "Desplegar aplicaciones de producción",
    ],
  },
];
