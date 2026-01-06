-- =============================================
-- WEB3-BASICS - EXTENDED CONTENT UPDATE
-- Expands each section with 2-3 paragraphs + longer lists
-- Based on quiz questions for comprehensive coverage
-- =============================================

-- SECTION 1: Evolution of Internet (Extended)
UPDATE course_sections 
SET content = '{
  "en": {
    "p1": "The internet has evolved through three major phases, each transforming how we interact with digital content. Understanding this evolution is key to grasping why Web3 matters.",
    "p2": "**Web 1.0 (1990s)** was the read-only era. Websites were static pages created by a few publishers, and users could only consume content passively. Think of it like a digital newspaper - you could read it, but you couldnt interact or contribute.",
    "p3": "**Web 2.0 (2000s-present)** brought social media, user-generated content, and platforms like Facebook, YouTube, and Twitter. Users became creators, but at a cost: platforms own your data, can censor your content, and monetize your attention. Login with Google is convenient, but it means giving them access to your online identity.",
    "components": {
      "title": "🔑 The Three Eras Compared",
      "items": [
        {"title": "Web 1.0: Read-Only", "desc": "Static pages, limited interaction, content created by publishers only"},
        {"title": "Web 2.0: Read-Write", "desc": "User-generated content, social media, but platforms control everything"},
        {"title": "Web 3.0: Read-Write-Own", "desc": "Decentralized, users own their data, identity, and digital assets"},
        {"title": "Identity Evolution", "desc": "From email addresses to social logins to crypto wallet addresses"}
      ]
    },
    "example": {
      "title": "💡 What Changes in Web 3.0?",
      "list": [
        "**Your data belongs to you** - no more data harvesting by platforms",
        "**Censorship-resistant** - content on blockchain cannot be deleted by companies",
        "**Peer-to-peer payments** - send money directly without banks taking fees",
        "**True digital ownership** - own your assets, not just licenses",
        "**Portable identity** - your wallet works across all Web3 apps"
      ]
    }
  },
  "es": {
    "p1": "Internet ha evolucionado a través de tres fases principales, cada una transformando cómo interactuamos con el contenido digital. Entender esta evolución es clave para comprender por qué Web3 importa.",
    "p2": "**Web 1.0 (1990s)** fue la era de solo lectura. Los sitios web eran páginas estáticas creadas por pocos editores, y los usuarios solo podían consumir contenido pasivamente. Piénsalo como un periódico digital - podías leerlo, pero no podías interactuar ni contribuir.",
    "p3": "**Web 2.0 (2000s-presente)** trajo redes sociales, contenido generado por usuarios, y plataformas como Facebook, YouTube y Twitter. Los usuarios se convirtieron en creadores, pero a un costo: las plataformas poseen tus datos, pueden censurar tu contenido, y monetizan tu atención. Login con Google es conveniente, pero significa darles acceso a tu identidad online.",
    "components": {
      "title": "🔑 Las Tres Eras Comparadas",
      "items": [
        {"title": "Web 1.0: Solo Lectura", "desc": "Páginas estáticas, interacción limitada, contenido solo por editores"},
        {"title": "Web 2.0: Lectura-Escritura", "desc": "Contenido de usuarios, redes sociales, pero plataformas controlan todo"},
        {"title": "Web 3.0: Lectura-Escritura-Propiedad", "desc": "Descentralizado, usuarios poseen sus datos, identidad y activos digitales"},
        {"title": "Evolución de Identidad", "desc": "De emails a logins sociales a direcciones de wallet crypto"}
      ]
    },
    "example": {
      "title": "💡 ¿Qué Cambia en Web 3.0?",
      "list": [
        "**Tus datos te pertenecen** - sin más cosecha de datos por plataformas",
        "**Resistente a censura** - contenido en blockchain no puede ser eliminado por empresas",
        "**Pagos peer-to-peer** - envía dinero directamente sin bancos cobrando tarifas",
        "**Propiedad digital verdadera** - posee tus activos, no solo licencias",
        "**Identidad portable** - tu wallet funciona en todas las apps Web3"
      ]
    }
  }
}'
WHERE course_id = 'web3-basics' AND slug = 'evolution';

-- SECTION 2: Blockchain Technology (Extended)
UPDATE course_sections 
SET content = '{
  "en": {
    "p1": "A blockchain is a distributed ledger - think of it as a shared spreadsheet that thousands of computers maintain together. Unlike a bank database controlled by one company, blockchain data is replicated across the network, making it nearly impossible to hack or manipulate.",
    "p2": "Each block contains transaction data, a timestamp, and a cryptographic hash linking it to the previous block. This chain of blocks creates an immutable record - changing one block would require changing all subsequent blocks, which is computationally impractical. This is why blockchain is called tamper-proof.",
    "p3": "Nodes are the computers that run the blockchain network. They validate transactions through consensus mechanisms like Proof of Work (mining) or Proof of Stake (staking). The decentralized nature means no single entity controls the system - its truly borderless and operates 24/7 without holidays or bank hours.",
    "components": {
      "title": "🔗 Blockchain Building Blocks",
      "items": [
        {"title": "Blocks", "desc": "Containers of transaction data with timestamps and cryptographic hashes"},
        {"title": "Nodes", "desc": "Computers that validate, store, and share blockchain data across the network"},
        {"title": "Consensus", "desc": "Agreement among nodes on the valid state of the blockchain (PoW, PoS)"},
        {"title": "Cryptographic Hashes", "desc": "Unique digital fingerprints that link blocks together and detect any tampering"}
      ]
    },
    "crypto": {
      "title": "⚡ Why Blockchain Matters",
      "list": [
        "**Decentralized** - no single point of control or failure",
        "**Immutable** - once written, data cannot be changed or deleted",
        "**Transparent** - anyone can verify transactions on the public ledger",
        "**Available 24/7** - works globally without downtime or business hours",
        "**Secure** - cryptographic linking makes tampering computationally impossible"
      ]
    }
  },
  "es": {
    "p1": "Un blockchain es un libro mayor distribuido - piénsalo como una hoja de cálculo compartida que miles de computadoras mantienen juntas. A diferencia de una base de datos bancaria controlada por una empresa, los datos de blockchain se replican a través de la red, haciéndolo casi imposible de hackear o manipular.",
    "p2": "Cada bloque contiene datos de transacciones, una marca de tiempo, y un hash criptográfico que lo enlaza al bloque anterior. Esta cadena de bloques crea un registro inmutable - cambiar un bloque requeriría cambiar todos los bloques posteriores, lo cual es computacionalmente impracticable. Por eso se le llama a prueba de manipulación.",
    "p3": "Los nodos son las computadoras que ejecutan la red blockchain. Validan transacciones a través de mecanismos de consenso como Proof of Work (minería) o Proof of Stake (staking). La naturaleza descentralizada significa que ninguna entidad controla el sistema - es verdaderamente sin fronteras y opera 24/7 sin feriados ni horarios bancarios.",
    "components": {
      "title": "🔗 Componentes de Blockchain",
      "items": [
        {"title": "Bloques", "desc": "Contenedores de datos de transacciones con timestamps y hashes criptográficos"},
        {"title": "Nodos", "desc": "Computadoras que validan, almacenan y comparten datos blockchain en la red"},
        {"title": "Consenso", "desc": "Acuerdo entre nodos sobre el estado válido del blockchain (PoW, PoS)"},
        {"title": "Hashes Criptográficos", "desc": "Huellas digitales únicas que enlazan bloques y detectan cualquier manipulación"}
      ]
    },
    "crypto": {
      "title": "⚡ Por Qué Blockchain Importa",
      "list": [
        "**Descentralizado** - sin punto único de control o falla",
        "**Inmutable** - una vez escrito, los datos no pueden cambiarse ni eliminarse",
        "**Transparente** - cualquiera puede verificar transacciones en el libro público",
        "**Disponible 24/7** - funciona globalmente sin tiempo de inactividad ni horarios",
        "**Seguro** - el enlace criptográfico hace que manipular sea computacionalmente imposible"
      ]
    }
  }
}'
WHERE course_id = 'web3-basics' AND slug = 'blockchain';

-- SECTION 3: Applications - DeFi, NFTs, DAOs (Extended)
UPDATE course_sections 
SET content = '{
  "en": {
    "p1": "Web3 is not just theory - its powering real applications that are transforming finance, art, gaming, and organizations. The most impactful areas are DeFi (Decentralized Finance), NFTs (Non-Fungible Tokens), and DAOs (Decentralized Autonomous Organizations).",
    "p2": "**DeFi** recreates traditional financial services without banks. You can lend, borrow, trade, and earn yield - all through smart contracts that execute automatically. Decentralized Exchanges (DEXs) let you trade directly from your wallet without trusting a centralized company. Stablecoins like USDT and USDC maintain a $1 value, making them perfect for savings and trading.",
    "p3": "**NFTs** are unique digital certificates of ownership. While often associated with art, they can represent tickets, music royalties, real estate, and gaming items. Artists benefit from automatic royalties on every resale. **DAOs** are community-owned organizations governed by code - members vote on proposals using tokens, creating truly democratic decision-making.",
    "components": {
      "title": "🚀 Web3 Application Categories",
      "items": [
        {"title": "DeFi - Decentralized Finance", "desc": "Lending, borrowing, trading, yield farming - no banks required"},
        {"title": "NFTs - Digital Ownership", "desc": "Unique tokens for art, music, tickets, gaming items, with creator royalties"},
        {"title": "DEXs - Decentralized Exchanges", "desc": "Trade crypto directly from wallet, no intermediary needed"},
        {"title": "DAOs - Community Organizations", "desc": "Token-based voting, transparent treasury, code-enforced rules"}
      ]
    },
    "crypto": {
      "title": "💰 DeFi Concepts Explained",
      "list": [
        "**Stablecoins** - crypto pegged to $1 (USDT, USDC) for stability",
        "**Yield Farming** - earn rewards by providing liquidity to protocols",
        "**Liquidity Pools** - funds locked in smart contracts that enable trading",
        "**Gas Fees** - transaction costs paid to network validators",
        "**Minting NFTs** - creating new NFTs on the blockchain",
        "**Airdrops** - free token distributions to wallet addresses"
      ]
    }
  },
  "es": {
    "p1": "Web3 no es solo teoría - está impulsando aplicaciones reales que están transformando finanzas, arte, gaming y organizaciones. Las áreas más impactantes son DeFi (Finanzas Descentralizadas), NFTs (Tokens No Fungibles), y DAOs (Organizaciones Autónomas Descentralizadas).",
    "p2": "**DeFi** recrea servicios financieros tradicionales sin bancos. Puedes prestar, pedir prestado, tradear, y generar rendimiento - todo a través de contratos inteligentes que se ejecutan automáticamente. Los Exchanges Descentralizados (DEXs) te permiten tradear directamente desde tu wallet sin confiar en una empresa centralizada. Stablecoins como USDT y USDC mantienen un valor de $1, haciéndolas perfectas para ahorros y trading.",
    "p3": "**NFTs** son certificados digitales únicos de propiedad. Aunque a menudo se asocian con arte, pueden representar tickets, regalías musicales, bienes raíces, e items de gaming. Los artistas se benefician de regalías automáticas en cada reventa. **DAOs** son organizaciones comunitarias gobernadas por código - los miembros votan propuestas usando tokens, creando toma de decisiones verdaderamente democrática.",
    "components": {
      "title": "🚀 Categorías de Aplicaciones Web3",
      "items": [
        {"title": "DeFi - Finanzas Descentralizadas", "desc": "Préstamos, trading, yield farming - sin bancos requeridos"},
        {"title": "NFTs - Propiedad Digital", "desc": "Tokens únicos para arte, música, tickets, items gaming, con regalías"},
        {"title": "DEXs - Exchanges Descentralizados", "desc": "Tradea crypto directamente desde wallet, sin intermediario"},
        {"title": "DAOs - Organizaciones Comunitarias", "desc": "Votación por tokens, tesorería transparente, reglas por código"}
      ]
    },
    "crypto": {
      "title": "💰 Conceptos DeFi Explicados",
      "list": [
        "**Stablecoins** - crypto vinculadas a $1 (USDT, USDC) para estabilidad",
        "**Yield Farming** - gana recompensas proveyendo liquidez a protocolos",
        "**Pools de Liquidez** - fondos bloqueados en contratos que habilitan trading",
        "**Gas Fees** - costos de transacción pagados a validadores de red",
        "**Mintear NFTs** - crear nuevos NFTs en blockchain",
        "**Airdrops** - distribuciones gratuitas de tokens a direcciones de wallet"
      ]
    }
  }
}'
WHERE course_id = 'web3-basics' AND slug = 'applications';

-- SECTION 4: History & Key Moments (Extended)
UPDATE course_sections 
SET content = '{
  "en": {
    "p1": "The Web3 revolution has roots dating back to 2008 when Satoshi Nakamoto published the Bitcoin whitepaper. The first Bitcoin block (genesis block) was mined on January 3, 2009. This marked the birth of cryptocurrencies and decentralized money.",
    "p2": "In 2015, Vitalik Buterin launched Ethereum, introducing programmable smart contracts that could do more than just transfer value. This enabled the explosion of DeFi in 2020 (known as DeFi Summer) and the NFT boom of 2021 when Beeples artwork sold for $69 million at Christies auction.",
    "p3": "The 2017 ICO boom saw thousands of new tokens launched, though many were scams. Institutional adoption accelerated when companies like Tesla, MicroStrategy, and major banks started investing in Bitcoin. Today, Layer 2 solutions are making transactions faster and cheaper, and experts predict Web3 will reach billions of users as technology becomes more user-friendly.",
    "components": {
      "title": "📅 Timeline of Key Events",
      "items": [
        {"title": "2008 - Bitcoin Whitepaper", "desc": "Satoshi Nakamoto publishes the foundation of cryptocurrency"},
        {"title": "2015 - Ethereum Launch", "desc": "Vitalik Buterin brings smart contracts and programmability"},
        {"title": "2020 - DeFi Summer", "desc": "Decentralized finance protocols explode in popularity and TVL"},
        {"title": "2021 - NFT Boom", "desc": "Digital art goes mainstream, Beeple sells for $69M"}
      ]
    },
    "crypto": {
      "title": "📈 Industry Milestones",
      "list": [
        "**January 2009** - First Bitcoin block (genesis block) mined",
        "**2017** - ICO boom launches thousands of new tokens",
        "**2020** - Institutional adoption begins (Tesla, MicroStrategy)",
        "**2021** - NFTs enter mainstream consciousness",
        "**2022+** - L2 scaling solutions and regulation evolution",
        "**Future** - Predictions of 1 billion+ wallet users by 2030"
      ]
    }
  },
  "es": {
    "p1": "La revolución Web3 tiene raíces que se remontan a 2008 cuando Satoshi Nakamoto publicó el whitepaper de Bitcoin. El primer bloque de Bitcoin (bloque génesis) se minó el 3 de enero de 2009. Esto marcó el nacimiento de las criptomonedas y el dinero descentralizado.",
    "p2": "En 2015, Vitalik Buterin lanzó Ethereum, introduciendo contratos inteligentes programables que podían hacer más que solo transferir valor. Esto habilitó la explosión de DeFi en 2020 (conocido como DeFi Summer) y el boom de NFTs en 2021 cuando la obra de Beeple se vendió por $69 millones en la subasta de Christies.",
    "p3": "El boom de ICOs en 2017 vio miles de nuevos tokens lanzados, aunque muchos eran estafas. La adopción institucional se aceleró cuando empresas como Tesla, MicroStrategy, y grandes bancos empezaron a invertir en Bitcoin. Hoy, las soluciones Layer 2 están haciendo transacciones más rápidas y baratas, y expertos predicen que Web3 alcanzará billones de usuarios conforme la tecnología se vuelva más amigable.",
    "components": {
      "title": "📅 Línea de Tiempo de Eventos Clave",
      "items": [
        {"title": "2008 - Whitepaper de Bitcoin", "desc": "Satoshi Nakamoto publica la base de las criptomonedas"},
        {"title": "2015 - Lanzamiento de Ethereum", "desc": "Vitalik Buterin trae contratos inteligentes y programabilidad"},
        {"title": "2020 - Verano DeFi", "desc": "Protocolos de finanzas descentralizadas explotan en popularidad"},
        {"title": "2021 - Boom de NFTs", "desc": "Arte digital se vuelve mainstream, Beeple vende por $69M"}
      ]
    },
    "crypto": {
      "title": "📈 Hitos de la Industria",
      "list": [
        "**Enero 2009** - Primer bloque de Bitcoin (génesis) minado",
        "**2017** - Boom de ICOs lanza miles de nuevos tokens",
        "**2020** - Adopción institucional comienza (Tesla, MicroStrategy)",
        "**2021** - NFTs entran en la conciencia mainstream",
        "**2022+** - Soluciones de escalado L2 y evolución regulatoria",
        "**Futuro** - Predicciones de 1 billón+ usuarios de wallet para 2030"
      ]
    }
  }
}'
WHERE course_id = 'web3-basics' AND slug = 'history';

-- SECTION 5: Real-World Use Cases (Extended)
UPDATE course_sections 
SET content = '{
  "en": {
    "p1": "Web3 is already solving real problems across industries. Beyond trading and speculation, blockchain technology is revolutionizing supply chains, voting systems, healthcare, and identity management.",
    "p2": "**Supply Chain Tracking**: Companies like Walmart use blockchain to trace food products from farm to shelf, preventing counterfeit products and enabling rapid recalls when needed. **Digital Identity**: Self-sovereign identity lets you prove your credentials without revealing all your personal data - refugees can maintain identity even without physical documents.",
    "p3": "**Transparent Charity**: Donors can track exactly where their money goes, eliminating corruption. **Music Industry**: Artists receive royalties directly without record labels taking most of the revenue. **Gaming**: Players truly own in-game items and can trade them across platforms. **Real Estate**: Tokenized property enables fractional ownership - buy a piece of a building for $100.",
    "components": {
      "title": "🌍 Industry Applications",
      "items": [
        {"title": "Supply Chain", "desc": "Track products from origin, prevent counterfeits (Walmart uses blockchain)"},
        {"title": "Healthcare", "desc": "Portable medical records that travel with you securely between providers"},
        {"title": "Voting", "desc": "Tamper-proof election records with transparent, immutable results"},
        {"title": "Digital Identity", "desc": "Self-sovereign identity you control, verifiable credentials without exposing data"}
      ]
    },
    "crypto": {
      "title": "💡 More Use Cases",
      "list": [
        "**Cross-border payments** - send money internationally in minutes, not days",
        "**Energy Trading** - sell your solar power directly to neighbors",
        "**Diploma Verification** - degrees stored on blockchain cannot be faked",
        "**Charity Transparency** - track every donation to its final use",
        "**Fractional Real Estate** - own a piece of property for as little as $100",
        "**Gaming Assets** - truly own and trade in-game items"
      ]
    }
  },
  "es": {
    "p1": "Web3 ya está resolviendo problemas reales en diversas industrias. Más allá del trading y la especulación, la tecnología blockchain está revolucionando cadenas de suministro, sistemas de votación, salud, y gestión de identidad.",
    "p2": "**Rastreo de Cadena de Suministro**: Empresas como Walmart usan blockchain para rastrear productos alimenticios desde la granja hasta el estante, previniendo productos falsificados y habilitando retiros rápidos cuando es necesario. **Identidad Digital**: La identidad auto-soberana te permite probar tus credenciales sin revelar todos tus datos personales - los refugiados pueden mantener identidad incluso sin documentos físicos.",
    "p3": "**Caridad Transparente**: Los donantes pueden rastrear exactamente a dónde va su dinero, eliminando corrupción. **Industria Musical**: Artistas reciben regalías directamente sin que sellos discográficos tomen la mayoría del ingreso. **Gaming**: Jugadores poseen verdaderamente los items del juego y pueden comerciarlos entre plataformas. **Bienes Raíces**: Propiedad tokenizada permite propiedad fraccionada - compra una parte de un edificio por $100.",
    "components": {
      "title": "🌍 Aplicaciones Industriales",
      "items": [
        {"title": "Cadena de Suministro", "desc": "Rastrea productos desde origen, previene falsificaciones (Walmart usa blockchain)"},
        {"title": "Salud", "desc": "Registros médicos portables que viajan contigo de forma segura entre proveedores"},
        {"title": "Votación", "desc": "Registros electorales a prueba de manipulación con resultados transparentes"},
        {"title": "Identidad Digital", "desc": "Identidad auto-soberana que tú controlas, credenciales verificables sin exponer datos"}
      ]
    },
    "crypto": {
      "title": "💡 Más Casos de Uso",
      "list": [
        "**Pagos transfronterizos** - envía dinero internacionalmente en minutos, no días",
        "**Comercio de Energía** - vende tu energía solar directamente a vecinos",
        "**Verificación de Diplomas** - títulos en blockchain no pueden falsificarse",
        "**Transparencia en Caridad** - rastrea cada donación hasta su uso final",
        "**Bienes Raíces Fraccionados** - posee una parte de propiedad desde $100",
        "**Activos de Gaming** - posee y comercia items del juego verdaderamente"
      ]
    }
  }
}'
WHERE course_id = 'web3-basics' AND slug = 'use-cases';

-- SECTION 6: Benefits of Web3 (Extended)
UPDATE course_sections 
SET content = '{
  "en": {
    "p1": "Web3 offers transformative benefits for individuals and society. At its core is **data sovereignty** - you decide who can access your personal information, ending the era of big tech harvesting your data for profit.",
    "p2": "**Financial Inclusion** is massive: 1.7 billion adults globally lack bank accounts, but anyone with a smartphone can access DeFi. No credit checks, no minimum balances, no geographic restrictions. **Censorship Resistance** means your content on blockchain cannot be removed by platforms - crucial for journalists, activists, and creators.",
    "p3": "The **economic opportunities** are significant. Blockchain developers earn $150,000-$300,000+ annually due to high demand. New careers like DAO community managers, NFT artists, and DeFi analysts didnt exist years ago. For creators, Web3 enables direct monetization without platforms taking 30%+ cuts.",
    "components": {
      "title": "🎯 Key Benefits",
      "items": [
        {"title": "Data Sovereignty", "desc": "You control your data, not corporations - end of data harvesting"},
        {"title": "Financial Inclusion", "desc": "1.7 billion unbanked can access DeFi with just a smartphone"},
        {"title": "Censorship Resistance", "desc": "Content on blockchain cannot be removed by third parties"},
        {"title": "True Digital Ownership", "desc": "Own your assets permanently, not just licenses that can be revoked"}
      ]
    },
    "crypto": {
      "title": "💼 Economic Opportunities",
      "list": [
        "**Blockchain Developers** - $150K-$300K+ salaries due to talent shortage",
        "**DAO Community Managers** - manage decentralized organization communities",
        "**NFT Artists** - earn royalties on every resale automatically",
        "**DeFi Analysts** - help users navigate decentralized finance",
        "**Permissionless Access** - no gatekeepers deciding who can participate",
        "**Composability** - build on existing protocols like legos",
        "**Interoperability** - assets work across different applications"
      ]
    }
  },
  "es": {
    "p1": "Web3 ofrece beneficios transformadores para individuos y la sociedad. En su núcleo está la **soberanía de datos** - tú decides quién puede acceder a tu información personal, terminando la era de big tech cosechando tus datos para lucro.",
    "p2": "La **Inclusión Financiera** es masiva: 1.7 billones de adultos globalmente carecen de cuentas bancarias, pero cualquiera con un smartphone puede acceder a DeFi. Sin verificaciones de crédito, sin saldos mínimos, sin restricciones geográficas. La **Resistencia a Censura** significa que tu contenido en blockchain no puede ser eliminado por plataformas - crucial para periodistas, activistas, y creadores.",
    "p3": "Las **oportunidades económicas** son significativas. Desarrolladores blockchain ganan $150,000-$300,000+ anualmente debido a alta demanda. Nuevas carreras como community managers de DAOs, artistas de NFT, y analistas de DeFi no existían hace años. Para creadores, Web3 habilita monetización directa sin que plataformas tomen 30%+.",
    "components": {
      "title": "🎯 Beneficios Clave",
      "items": [
        {"title": "Soberanía de Datos", "desc": "Tú controlas tus datos, no corporaciones - fin de la cosecha de datos"},
        {"title": "Inclusión Financiera", "desc": "1.7 billones sin banco pueden acceder a DeFi solo con smartphone"},
        {"title": "Resistencia a Censura", "desc": "Contenido en blockchain no puede ser eliminado por terceros"},
        {"title": "Propiedad Digital Verdadera", "desc": "Posee tus activos permanentemente, no solo licencias revocables"}
      ]
    },
    "crypto": {
      "title": "💼 Oportunidades Económicas",
      "list": [
        "**Desarrolladores Blockchain** - $150K-$300K+ salarios por escasez de talento",
        "**Community Managers de DAO** - gestionan comunidades de organizaciones descentralizadas",
        "**Artistas NFT** - ganan regalías en cada reventa automáticamente",
        "**Analistas DeFi** - ayudan a usuarios a navegar finanzas descentralizadas",
        "**Acceso sin Permisos** - sin guardianes decidiendo quién puede participar",
        "**Composabilidad** - construye sobre protocolos existentes como legos",
        "**Interoperabilidad** - activos funcionan entre diferentes aplicaciones"
      ]
    }
  }
}'
WHERE course_id = 'web3-basics' AND slug = 'benefits';

-- SECTION 7: Future of Web3 (Extended)
UPDATE course_sections 
SET content = '{
  "en": {
    "p1": "The future of Web3 is being shaped by several converging trends. **AI + Blockchain** will enable AI agents with their own wallets, capable of autonomous economic activity. Imagine AI assistants that can pay for services, earn money, and manage assets on your behalf.",
    "p2": "**Tokenization** of real-world assets is predicted to reach $10+ trillion by 2030. Real estate, stocks, art, and commodities will all be represented as blockchain tokens, enabling fractional ownership and 24/7 global trading. This democratizes access to investments previously reserved for the wealthy.",
    "p3": "**Mass adoption barriers** are falling. Account abstraction makes wallets as easy as email login. Invisible blockchain means users wont even know theyre using Web3 - itll just work in the background. Decentralized social networks like Farcaster and Lens Protocol let you own your social connections and content. By 2030, predictions estimate over 1 billion wallet users.",
    "components": {
      "title": "🔮 Emerging Trends",
      "items": [
        {"title": "AI + Blockchain", "desc": "AI agents with wallets performing autonomous economic activity"},
        {"title": "Tokenized Assets", "desc": "$10+ trillion in real assets as tokens by 2030"},
        {"title": "Account Abstraction", "desc": "Smart wallets that hide blockchain complexity for mainstream users"},
        {"title": "Invisible Blockchain", "desc": "Users wont know theyre using Web3 - best UX is invisible tech"}
      ]
    },
    "crypto": {
      "title": "🌐 Whats Coming",
      "list": [
        "**1 billion+ wallet users** by 2030 (current: ~100 million)",
        "**CBDCs** - Central Bank Digital Currencies from governments",
        "**Gaming economies** - most games will have blockchain elements",
        "**Decentralized social** - Farcaster, Lens replacing Twitter/Instagram",
        "**Metaverse integration** - own virtual land and identity via blockchain",
        "**Web3 + Web2 merge** - seamless integration, not replacement"
      ]
    }
  },
  "es": {
    "p1": "El futuro de Web3 está siendo moldeado por varias tendencias convergentes. **IA + Blockchain** habilitará agentes IA con sus propias wallets, capaces de actividad económica autónoma. Imagina asistentes IA que pueden pagar por servicios, ganar dinero, y gestionar activos en tu nombre.",
    "p2": "La **Tokenización** de activos del mundo real se predice que alcanzará $10+ billones para 2030. Bienes raíces, acciones, arte, y commodities serán representados como tokens blockchain, habilitando propiedad fraccionada y trading global 24/7. Esto democratiza el acceso a inversiones antes reservadas para los ricos.",
    "p3": "Las **barreras para adopción masiva** están cayendo. La abstracción de cuentas hace wallets tan fáciles como login por email. Blockchain invisible significa que usuarios ni sabrán que están usando Web3 - simplemente funcionará en el fondo. Redes sociales descentralizadas como Farcaster y Lens Protocol te permiten poseer tus conexiones sociales y contenido. Para 2030, las predicciones estiman más de 1 billón de usuarios de wallet.",
    "components": {
      "title": "🔮 Tendencias Emergentes",
      "items": [
        {"title": "IA + Blockchain", "desc": "Agentes IA con wallets realizando actividad económica autónoma"},
        {"title": "Activos Tokenizados", "desc": "$10+ billones en activos reales como tokens para 2030"},
        {"title": "Abstracción de Cuentas", "desc": "Smart wallets que ocultan complejidad blockchain para usuarios mainstream"},
        {"title": "Blockchain Invisible", "desc": "Usuarios no sabrán que usan Web3 - la mejor UX es tecnología invisible"}
      ]
    },
    "crypto": {
      "title": "🌐 Lo Que Viene",
      "list": [
        "**1 billón+ usuarios de wallet** para 2030 (actual: ~100 millones)",
        "**CBDCs** - Monedas Digitales de Bancos Centrales de gobiernos",
        "**Economías de gaming** - la mayoría de juegos tendrá elementos blockchain",
        "**Social descentralizado** - Farcaster, Lens reemplazando Twitter/Instagram",
        "**Integración Metaverso** - posee terreno virtual e identidad vía blockchain",
        "**Fusión Web3 + Web2** - integración sin costuras, no reemplazo"
      ]
    }
  }
}'
WHERE course_id = 'web3-basics' AND slug = 'future';

-- SECTION 8: FAQs (Extended)
UPDATE course_sections 
SET content = '{
  "en": {
    "p1": "Got questions? Totally normal! Here are the things everyone asks when they first hear about Web3. No judgment, we all started somewhere.",
    "p2": "Quick reminder: **this is not financial advice**. Were just here to help you understand the basics. Any decisions you make are yours!",
    "faqs": {
      "title": "❓ Your Questions Answered",
      "items": [
        {"title": "Is Web3 the same as crypto?", "desc": "Not quite! Crypto is the money part of Web3. Web3 is the bigger picture - decentralized apps, owning your data, digital identity, gaming, and more. Crypto is just one piece of the puzzle."},
        {"title": "Do I need to know coding to use Web3?", "desc": "Nope! Using Web3 apps is just like using any regular app. Coding is only needed if you want to BUILD Web3 stuff. As a user, youre totally fine."},
        {"title": "What wallet should I start with?", "desc": "MetaMask is perfect for beginners - its free, works right in your browser, and basically every Web3 app supports it. Easy peasy."},
        {"title": "Can I lose all my money?", "desc": "Real talk: yes, you can. Crypto is volatile. Thats why we always say - only put in what you can afford to lose completely. Seriously."},
        {"title": "Is it too late to get into Web3?", "desc": "Not at all! Most people have never even used a crypto wallet. Were still super early. The best time to learn was yesterday, the second best is now."},
        {"title": "What is a seed phrase?", "desc": "Its 12-24 words that can recover your entire wallet. Think of it as your master key. Write it on paper, hide it somewhere safe, and NEVER share it with anyone. Ever."},
        {"title": "Why do people say not my keys, not my crypto?", "desc": "If your crypto is on an exchange, they control it. If the exchange gets hacked or goes bankrupt, bye bye crypto. With your own wallet, YOU control it."},
        {"title": "What the heck is gas?", "desc": "Gas is just the fee you pay for transactions on blockchains like Ethereum. Think of it like a small tip to the computers processing your transaction."},
        {"title": "Is Web3 safe?", "desc": "It depends on how you use it! Learn the security basics, start small, never share your seed phrase, and youll be way ahead of most people."},
        {"title": "Where do I even start?", "desc": "Install MetaMask, secure your seed phrase on paper, and explore! Start with small amounts. Learn by doing - thats how everyone got good at this."}
      ]
    },
    "crypto": {
      "title": "🔐 Security Reminders",
      "list": [
        "**NEVER share your seed phrase** - no legitimate service will ask for it",
        "**Hot wallet** = connected to internet (convenient but less secure)",
        "**Cold wallet** = offline storage like Ledger (more secure)",
        "**Gas** = transaction fees paid to validators",
        "**DYOR** = Do Your Own Research before any investment",
        "**Start small** - learn with amounts you can afford to lose"
      ]
    }
  },
  "es": {
    "p1": "¿Tienes preguntas? ¡Totalmente normal! Aquí están las cosas que todos preguntan cuando escuchan por primera vez sobre Web3. Sin juicio, todos empezamos en algún lugar.",
    "p2": "Recordatorio rápido: **esto no es asesoría financiera**. Solo estamos aquí para ayudarte a entender los básicos. ¡Cualquier decisión que tomes es tuya!",
    "faqs": {
      "title": "❓ Tus Preguntas Respondidas",
      "items": [
        {"title": "¿Es Web3 lo mismo que crypto?", "desc": "¡No exactamente! Crypto es la parte del dinero de Web3. Web3 es el panorama más grande - apps descentralizadas, ser dueño de tus datos, identidad digital, gaming, y más. Crypto es solo una pieza del rompecabezas."},
        {"title": "¿Necesito saber programar para usar Web3?", "desc": "¡Nop! Usar apps Web3 es igual que usar cualquier app normal. Programar solo es necesario si quieres CONSTRUIR cosas Web3. Como usuario, estás totalmente bien."},
        {"title": "¿Con qué wallet debería empezar?", "desc": "MetaMask es perfecto para principiantes - es gratis, funciona directo en tu navegador, y básicamente toda app Web3 lo soporta. Pan comido."},
        {"title": "¿Puedo perder todo mi dinero?", "desc": "Hablando en serio: sí, puedes. Crypto es volátil. Por eso siempre decimos - solo mete lo que puedas perder completamente. En serio."},
        {"title": "¿Es muy tarde para entrar en Web3?", "desc": "¡Para nada! La mayoría de personas ni siquiera ha usado una wallet crypto. Todavía estamos super temprano. El mejor momento para aprender fue ayer, el segundo mejor es ahora."},
        {"title": "¿Qué es una frase semilla?", "desc": "Son 12-24 palabras que pueden recuperar toda tu wallet. Piénsalo como tu llave maestra. Escríbela en papel, escóndela en un lugar seguro, y NUNCA la compartas con nadie. Jamás."},
        {"title": "¿Por qué dicen si no son tus claves, no es tu crypto?", "desc": "Si tu crypto está en un exchange, ellos lo controlan. Si el exchange es hackeado o quiebra, adiós crypto. Con tu propia wallet, TÚ lo controlas."},
        {"title": "¿Qué rayos es el gas?", "desc": "Gas es simplemente la tarifa que pagas por transacciones en blockchains como Ethereum. Piénsalo como una pequeña propina a las computadoras que procesan tu transacción."},
        {"title": "¿Es seguro Web3?", "desc": "¡Depende de cómo lo uses! Aprende los básicos de seguridad, empieza pequeño, nunca compartas tu frase semilla, y estarás muy adelante de la mayoría."},
        {"title": "¿Por dónde empiezo?", "desc": "Instala MetaMask, asegura tu frase semilla en papel, ¡y explora! Empieza con cantidades pequeñas. Aprende haciendo - así es como todos se volvieron buenos en esto."}
      ]
    },
    "crypto": {
      "title": "🔐 Recordatorios de Seguridad",
      "list": [
        "**NUNCA compartas tu frase semilla** - ningún servicio legítimo la pedirá",
        "**Hot wallet** = conectada a internet (conveniente pero menos segura)",
        "**Cold wallet** = almacenamiento offline como Ledger (más segura)",
        "**Gas** = tarifas de transacción pagadas a validadores",
        "**DYOR** = Haz Tu Propia Investigación antes de cualquier inversión",
        "**Empieza pequeño** - aprende con cantidades que puedas perder"
      ]
    }
  }
}'
WHERE course_id = 'web3-basics' AND slug = 'faqs';

