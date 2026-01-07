-- =============================================
-- NFT MASTERCLASS COURSE - SECTIONS SEED
-- 7 Sections (6 Content + 1 FAQs)
-- =============================================

-- SECTION 1: NFT Fundamentals
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'nft-masterclass', 
  'fundamentals', 
  1, 
  '{"en": "NFT Fundamentals", "es": "Fundamentos NFT"}', 
  '{"en": "Understanding Non-Fungible Tokens", "es": "Entendiendo los Tokens No Fungibles"}',
  $${
    "en": {
      "p1": "<strong class=\"text-white\">NFTs (Non-Fungible Tokens)</strong> are unique digital assets verified on a blockchain. Unlike cryptocurrencies, each NFT is one-of-a-kind and cannot be exchanged on a like-for-like basis.",
      "special": {
        "title": "What Makes NFTs Special?",
        "list": [
          "<strong class=\"text-white\">Uniqueness:</strong> Each NFT has a unique identifier and metadata",
          "<strong class=\"text-white\">Ownership:</strong> Blockchain verifies provenance and ownership history",
          "<strong class=\"text-white\">Scarcity:</strong> Limited supply enforced by smart contracts",
          "<strong class=\"text-white\">Programmability:</strong> Smart contracts can include royalties and special rules"
        ]
      },
      "types": {
        "art": {
          "title": "Digital Art",
          "desc": "Artists can prove authenticity and earn royalties on secondary sales. Examples: Beeple's $69M artwork, CryptoPunks collectibles."
        },
        "game": {
          "title": "Gaming Assets",
          "desc": "In-game items players truly own: skins, weapons, characters. Can be traded across games or sold."
        },
        "music": {
          "title": "Music & Media",
          "desc": "Musicians sell exclusive content, concert tickets, or album rights directly to fans."
        },
        "real": {
          "title": "Real Estate & Documents",
          "desc": "Property deeds, certificates, memberships - anything needing verified ownership."
        }
      },
      "tech": {
        "title": "Technical Deep Dive",
        "desc": "NFTs are typically built on ERC-721 (Ethereum) or ERC-1155 (multi-token) standards. The token points to metadata (JSON file) stored on IPFS or centralized servers."
      }
    },
    "es": {
      "p1": "Los <strong class=\"text-white\">NFTs (Tokens No Fungibles)</strong> son activos digitales únicos verificados en una blockchain. A diferencia de las criptomonedas, cada NFT es uno de un tipo y no puede ser intercambiado por otro igual.",
      "special": {
        "title": "¿Qué hace especiales a los NFTs?",
        "list": [
          "<strong class=\"text-white\">Unicidad:</strong> Cada NFT tiene un identificador único y metadatos",
          "<strong class=\"text-white\">Propiedad:</strong> La blockchain verifica la procedencia y el historial de propiedad",
          "<strong class=\"text-white\">Escasez:</strong> Suministro limitado impuesto por contratos inteligentes",
          "<strong class=\"text-white\">Programabilidad:</strong> Los contratos inteligentes pueden incluir regalías y reglas especiales"
        ]
      },
      "types": {
        "art": {
          "title": "Arte Digital",
          "desc": "Los artistas pueden probar autenticidad y ganar regalías en ventas secundarias. Ej: Obra de Beeple por $69M, CryptoPunks."
        },
        "game": {
          "title": "Activos de Juego",
          "desc": "Ítems in-game que los jugadores realmente poseen: skins, armas, personajes. Pueden venderse o usarse entre juegos."
        },
        "music": {
          "title": "Música y Medios",
          "desc": "Músicos venden contenido exclusivo, entradas a conciertos o derechos de álbumes directamente a fans."
        },
        "real": {
          "title": "Bienes Raíces y Documentos",
          "desc": "Escrituras de propiedad, certificados, membresías - cualquier cosa que necesite propiedad verificada."
        }
      },
      "tech": {
        "title": "Profundización Técnica",
        "desc": "Los NFTs se construyen típicamente en estándares ERC-721 (Ethereum) o ERC-1155 (multi-token). El token apunta a metadatos (archivo JSON) almacenados en IPFS o servidores centralizados."
      }
    }
  }$$
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 2: Minting & Creating NFTs
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'nft-masterclass', 
  'minting', 
  2, 
  '{"en": "Minting & Creating NFTs", "es": "Minteo y Creación de NFTs"}', 
  '{"en": "From concept to blockchain", "es": "Del concepto a la blockchain"}',
  $${
    "en": {
      "p1": "<strong class=\"text-white\">Minting</strong> is the process of creating an NFT on the blockchain. It involves uploading your digital asset, writing metadata, and deploying a smart contract.",
      "process": {
        "title": "The Minting Process",
        "steps": [
          {"title": "Create Your Art", "desc": "Digital artwork, 3D model, music, video - any digital file"},
          {"title": "Choose Blockchain", "desc": "Ethereum (most popular), Polygon (cheap), Solana (fast), Tezos (eco-friendly)"},
          {"title": "Select Platform", "desc": "OpenSea (beginner-friendly), Rarible, Foundation (curated), Zora (creator-owned)"},
          {"title": "Upload & Add Metadata", "desc": "Description, properties, royalties (typically 2.5-10%)"},
          {"title": "Pay Gas Fees & Mint", "desc": "Transaction confirms on blockchain - your NFT is live!"}
        ]
      },
      "concepts": {
        "lazy": {"title": "Lazy Minting", "desc": "Defer gas costs until the NFT is sold. OpenSea and Rarible support this. Great for testing the market."},
        "coll": {"title": "Collection vs Single", "desc": "Single NFT: one piece. Collection: series with shared contract. Collections build brand value."},
        "rare": {"title": "Rarity & Traits", "desc": "For PFP projects: define traits (background, eyes, accessories). Tools like Rarity.tools rank scarcity."}
      },
      "warn": {
        "title": "Important Considerations",
        "list": [
          "<strong>Copyright:</strong> Only mint work you own or have rights to",
          "<strong>Storage:</strong> IPFS is decentralized, but can be slow. Arweave offers permanent storage",
          "<strong>Gas Optimization:</strong> Mint during low network activity (weekends, late nights UTC)",
          "<strong>Royalties:</strong> Set royalty % - you earn on every resale perpetually"
        ]
      }
    },
    "es": {
      "p1": "El <strong class=\"text-white\">Minteo (Minting)</strong> es el proceso de crear un NFT en la blockchain. Implica subir tu activo digital, escribir metadatos y desplegar un contrato inteligente.",
      "process": {
        "title": "El Proceso de Minteo",
        "steps": [
          {"title": "Crea tu Arte", "desc": "Arte digital, modelo 3D, música, video - cualquier archivo digital"},
          {"title": "Elige Blockchain", "desc": "Ethereum (más popular), Polygon (barato), Solana (rápido), Tezos (eco-friendly)"},
          {"title": "Selecciona Plataforma", "desc": "OpenSea (fácil para principiantes), Rarible, Foundation (curado), Zora (propiedad del creador)"},
          {"title": "Sube y Añade Metadatos", "desc": "Descripción, propiedades, regalías (típicamente 2.5-10%)"},
          {"title": "Paga Gas y Mintea", "desc": "La transacción se confirma en blockchain - ¡tu NFT está vivo!"}
        ]
      },
      "concepts": {
        "lazy": {"title": "Lazy Minting", "desc": "Diferir costos de gas hasta que se venda el NFT. OpenSea y Rarible lo soportan. Genial para probar el mercado."},
        "coll": {"title": "Colección vs Único", "desc": "NFT Único: una pieza. Colección: serie con contrato compartido. Las colecciones construyen marca."},
        "rare": {"title": "Rareza y Rasgos", "desc": "Para proyectos PFP: define rasgos (fondo, ojos). Herramientas como Rarity.tools clasifican la escasez."}
      },
      "warn": {
        "title": "Consideraciones Importantes",
        "list": [
          "<strong>Derechos de Autor:</strong> Solo mintea obras que poseas o tengas derechos",
          "<strong>Almacenamiento:</strong> IPFS es descentralizado, pero puede ser lento. Arweave ofrece almacenamiento permanente",
          "<strong>Optimización de Gas:</strong> Mintea durante baja actividad de red (fines de semana)",
          "<strong>Regalías:</strong> Configura % de regalías - ganas en cada reventa perpetuamente"
        ]
      }
    }
  }$$
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 3: NFT Marketplaces & Trading
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'nft-masterclass', 
  'marketplaces-trading', 
  3, 
  '{"en": "NFT Marketplaces & Trading", "es": "Marketplaces y Trading de NFT"}', 
  '{"en": "Buying, selling, and trading NFTs", "es": "Comprar, vender e intercambiar NFTs"}',
  $${
    "en": {
      "p1": "<strong class=\"text-white\">NFT Marketplaces</strong> are platforms where you can discover, buy, sell, and trade NFTs. Each marketplace has its own fees, curation standards, and community.",
      "markets": {
        "os": {"title": "OpenSea", "desc": "Largest NFT marketplace with 80M+ items", "list": ["2.5% platform fee", "Supports Ethereum, Polygon, Solana", "Easy for beginners", "Offers for collections & bundles"]},
        "blur": {"title": "Blur", "desc": "Pro trader platform with zero fees", "list": ["0% platform fee during beta", "Advanced trading tools", "Portfolio analytics", "Airdrop rewards for activity"]},
        "found": {"title": "Foundation", "desc": "Curated platform for digital artists", "list": ["15% commission on primary sales", "Invite-only or application", "High-quality curation", "Artist-focused community"]},
        "magic": {"title": "Magic Eden", "desc": "Solana's leading NFT marketplace", "list": ["2% platform fee", "Low transaction costs on Solana", "Launchpad for new projects", "Fast transactions"]}
      },
      "tips": {
        "title": "Trading Best Practices",
        "research": {"title": "Research Before Buying", "list": ["Check contract address", "Verify creator/collection", "Review trading volume & floor price", "Check rarity tools (for collections)"]},
        "safe": {"title": "Safe Trading Tips", "list": ["Never share seed phrases", "Use hardware wallets for valuable NFTs", "Be wary of too-good offers (phishing)", "Double-check URLs before connecting wallet"]}
      },
      "pricing": {
        "title": "Understanding NFT Pricing",
        "floor": "<strong class=\"text-cyan-400\">Floor Price:</strong> Lowest listed price in a collection. Good entry point but may lack rare traits.",
        "avg": "<strong class=\"text-green-400\">Average Price:</strong> Mean sale price over recent transactions. Better indicator of true market value.",
        "ceil": "<strong class=\"text-purple-400\">Ceiling Price:</strong> Highest recent sale. Often for rare items or exceptional pieces."
      }
    },
    "es": {
      "p1": "Los <strong class=\"text-white\">Marketplaces de NFT</strong> son plataformas donde puedes descubrir, comprar, vender e intercambiar NFTs. Cada uno tiene sus tarifas, estándares y comunidad.",
      "markets": {
        "os": {"title": "OpenSea", "desc": "El mayor marketplace con 80M+ de ítems", "list": ["2.5% tarifa de plataforma", "Soporta Ethereum, Polygon, Solana", "Fácil para principiantes", "Ofertas para colecciones"]},
        "blur": {"title": "Blur", "desc": "Plataforma para traders pro sin tarifas", "list": ["0% tarifa durante beta", "Herramientas de trading avanzadas", "Analítica de portafolio", "Rewards por actividad"]},
        "found": {"title": "Foundation", "desc": "Plataforma curada para artistas digitales", "list": ["15% comisión en ventas primarias", "Solo invitación", "Curaduría de alta calidad", "Comunidad enfocada en artistas"]},
        "magic": {"title": "Magic Eden", "desc": "El marketplace líder de Solana", "list": ["2% tarifa de plataforma", "Bajos costos en Solana", "Launchpad para nuevos proyectos", "Transacciones rápidas"]}
      },
      "tips": {
        "title": "Mejores Prácticas de Trading",
        "research": {"title": "Investiga Antes de Comprar", "list": ["Revisa dirección del contrato", "Verifica creador/colección", "Revisa volumen y precio suelo", "Revisa herramientas de rareza"]},
        "safe": {"title": "Consejos de Seguridad", "list": ["Nunca compartas frase semilla", "Usa hardware wallets para NFTs valiosos", "Cuidado con ofertas muy buenas (phishing)", "Verifica URLs antes de conectar wallet"]}
      },
      "pricing": {
        "title": "Entendiendo Precios de NFT",
        "floor": "<strong class=\"text-cyan-400\">Precio Suelo (Floor):</strong> Precio listado más bajo en una colección. Buen punto de entrada pero quizás sin rasgos raros.",
        "avg": "<strong class=\"text-green-400\">Precio Promedio:</strong> Media de ventas recientes. Mejor indicador del valor real de mercado.",
        "ceil": "<strong class=\"text-purple-400\">Precio Techo (Ceiling):</strong> Venta reciente más alta. A menudo para ítems raros o excepcionales."
      }
    }
  }$$
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 4: NFT Investment Strategies
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'nft-masterclass', 
  'strategies', 
  4, 
  '{"en": "NFT Investment Strategies", "es": "Estrategias de Inversión NFT"}', 
  '{"en": "Building a valuable NFT portfolio", "es": "Construyendo un portafolio valioso"}',
  $${
    "en": {
      "p1": "<strong class=\"text-white\">NFT investing</strong> requires a strategic approach. Unlike traditional assets, NFTs blend art appreciation, community dynamics, and speculation.",
      "strats": {
        "blue": {"title": "Blue-Chip Strategy", "desc": "Invest in established collections with proven track records", "list": ["CryptoPunks, BAYC, Azuki", "Lower risk, stable floor prices", "Strong community & utility", "Higher entry cost"]},
        "early": {"title": "Early Adoption", "desc": "Get in early on promising new projects", "list": ["Research team & roadmap", "Higher risk, higher potential returns", "Whitelist opportunities", "Community engagement crucial"]},
        "rare": {"title": "Rarity Play", "desc": "Target undervalued rare items in collections", "list": ["Study rarity rankings", "Look for mispricings", "Hold for appreciation", "Requires deep knowledge"]}
      },
      "portfolio": {
        "title": "Portfolio Diversification",
        "blue": {"title": "Blue-Chips (30-40%)", "desc": "Stable value, low risk"},
        "mid": {"title": "Mid-Caps (30-40%)", "desc": "Growth potential"},
        "spec": {"title": "Speculative (20-30%)", "desc": "High risk/reward"}
      },
      "flags": {
        "title": "Red Flags to Avoid",
        "list": ["Anonymous team with no track record", "Unrealistic promises or guaranteed returns", "Lack of utility or roadmap", "Suspicious social media activity (bots, fake engagement)", "Derivative art with no unique value proposition"]
      }
    },
    "es": {
      "p1": "La <strong class=\"text-white\">inversión en NFT</strong> requiere un enfoque estratégico. A diferencia de activos tradicionales, los NFTs mezclan apreciación de arte, dinámicas de comunidad y especulación.",
      "strats": {
        "blue": {"title": "Estrategia Blue-Chip", "desc": "Invierte en colecciones establecidas con historial probado", "list": ["CryptoPunks, BAYC, Azuki", "Menor riesgo, precios suelo estables", "Fuerte comunidad y utilidad", "Costo de entrada alto"]},
        "early": {"title": "Adopción Temprana", "desc": "Entra temprano en proyectos nuevos prometedores", "list": ["Investiga equipo y roadmap", "Mayor riesgo, mayor retorno potencial", "Oportunidades de Whitelist", "Engagement de comunidad crucial"]},
        "rare": {"title": "Jugada de Rareza", "desc": "Busca ítems raros infravalorados en colecciones", "list": ["Estudia rankings de rareza", "Busca errores de precio", "Mantén para apreciación", "Requiere conocimiento profundo"]}
      },
      "portfolio": {
        "title": "Diversificación de Portafolio",
        "blue": {"title": "Blue-Chips (30-40%)", "desc": "Valor estable, bajo riesgo"},
        "mid": {"title": "Mid-Caps (30-40%)", "desc": "Potencial de crecimiento"},
        "spec": {"title": "Especulativo (20-30%)", "desc": "Alto riesgo/recompensa"}
      },
      "flags": {
        "title": "Banderas Rojas a Evitar",
        "list": ["Equipo anónimo sin historial", "Promesas irreales o retornos garantizados", "Falta de utilidad o roadmap", "Actividad sospechosa en redes (bots)", "Arte derivado sin propuesta de valor única"]
      }
    }
  }$$
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 5: Legal & IP Considerations
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'nft-masterclass', 
  'legal-ip', 
  5, 
  '{"en": "Legal & IP Considerations", "es": "Consideraciones Legales y de PI"}', 
  '{"en": "Copyright, licensing, and regulations", "es": "Derechos de autor, licencias y regulaciones"}',
  $${
    "en": {
      "p1": "Understanding <strong class=\"text-white\">intellectual property rights</strong> is crucial in the NFT space. Owning an NFT does NOT automatically grant you copyright or commercial rights to the underlying artwork.",
      "copyright": {
        "title": "Copyright Basics",
        "own": {"title": "What You OWN", "list": ["The NFT token itself", "Right to sell/transfer the NFT", "Bragging rights & provenance", "Access to holder-only benefits"]},
        "dont": {"title": "What You DON'T Own (Usually)", "list": ["Copyright to the artwork", "Right to reproduce commercially", "Right to create derivatives", "Intellectual property rights"]}
      },
      "rights": {
        "cc0": {"title": "CC0 NFTs", "desc": "<strong class=\"text-white\">Creative Commons Zero:</strong> Creator waives all rights. Holders can use however they want - commercially, derivatives, etc. Examples: CrypToadz, Nouns."},
        "comm": {"title": "Commercial Rights", "desc": "Some projects grant holders commercial rights. BAYC holders can create products using their ape. Always read the license terms!"}
      },
      "tax": {
        "title": "Tax Implications",
        "desc": "NFTs are treated as property/collectibles for tax purposes in most jurisdictions:",
        "list": ["<strong>Capital Gains:</strong> Profit from selling NFTs is taxable (often 28% collectibles rate in US)", "<strong>Record Keeping:</strong> Track purchase price, sale price, dates, gas fees", "<strong>Airdrops:</strong> May be taxable as income at fair market value when received", "<strong>Minting:</strong> Gas fees may be deductible as cost basis"],
        "disclaimer": "*Consult a tax professional for your specific situation. Laws vary by country."
      },
      "reg": {
        "title": "Regulatory Landscape",
        "desc": "NFT regulations are evolving. Key considerations:",
        "sec": "<strong class=\"text-cyan-400\">Securities Law:</strong> Fractionalized NFTs or those promising returns may be securities",
        "aml": "<strong class=\"text-green-400\">AML/KYC:</strong> Major marketplaces implementing identity verification for large transactions",
        "cons": "<strong class=\"text-purple-400\">Consumer Protection:</strong> EU and other regions adding NFT-specific consumer rights"
      }
    },
    "es": {
      "p1": "Entender los <strong class=\"text-white\">derechos de propiedad intelectual</strong> es crucial en NFTs. Poseer un NFT NO te otorga automáticamente copyright o derechos comerciales sobre la obra.",
      "copyright": {
        "title": "Básicos de Copyright",
        "own": {"title": "Lo que POSEES", "list": ["El token NFT en sí", "Derecho a vender/transferir el NFT", "Derecho a alardear y procedencia", "Acceso a beneficios de holders"]},
        "dont": {"title": "Lo que NO Posees (Usualmente)", "list": ["Copyright de la obra de arte", "Derecho a reproducir comercialmente", "Derecho a crear derivados", "Derechos de propiedad intelectual"]}
      },
      "rights": {
        "cc0": {"title": "NFTs CC0", "desc": "<strong class=\"text-white\">Creative Commons Zero:</strong> El creador renuncia a todos los derechos. Los holders pueden usarlo como quieran (comercialmente, derivados). Ej: CrypToadz, Nouns."},
        "comm": {"title": "Derechos Comerciales", "desc": "Algunos proyectos otorgan derechos comerciales. Holders de BAYC pueden crear productos con su simio. ¡Lee siempre la licencia!"}
      },
      "tax": {
        "title": "Implicaciones Fiscales",
        "desc": "Los NFTs se tratan como propiedad/coleccionables fiscalmente en la mayoría de jurisdicciones:",
        "list": ["<strong>Ganancias de Capital:</strong> El beneficio al vender es gravable", "<strong>Mantenimiento de Registros:</strong> Rastrea precio de compra, venta, fechas, gas", "<strong>Airdrops:</strong> Pueden ser gravables como ingreso al valor de mercado al recibirse", "<strong>Minteo:</strong> El gas puede ser deducible como base de costo"],
        "disclaimer": "*Consulta a un profesional fiscal para tu situación. Las leyes varían por país."
      },
      "reg": {
        "title": "Panorama Regulatorio",
        "desc": "Las regulaciones NFT evolucionan. Consideraciones clave:",
        "sec": "<strong class=\"text-cyan-400\">Ley de Valores:</strong> NFTs fraccionalizados o que prometen retornos pueden ser valores (securities)",
        "aml": "<strong class=\"text-green-400\">AML/KYC:</strong> Grandes marketplaces implementan verificación de identidad",
        "cons": "<strong class=\"text-purple-400\">Protección al Consumidor:</strong> La UE y otras regiones añaden derechos específicos"
      }
    }
  }$$
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 6: Future of NFTs
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'nft-masterclass', 
  'future', 
  6, 
  '{"en": "Future of NFTs", "es": "El Futuro de los NFTs"}', 
  '{"en": "Emerging trends and innovations", "es": "Tendencias emergentes e innovaciones"}',
  $${
    "en": {
      "p1": "The <strong class=\"text-white\">future of NFTs</strong> extends far beyond digital art. Emerging use cases are transforming how we think about ownership, identity, and digital experiences.",
      "trends": {
        "game": {"title": "Gaming & Metaverse", "desc": "Play-to-earn economies where your in-game assets have real value", "list": ["Interoperable items across games", "Virtual land ownership (Decentraland, Sandbox)", "Cross-platform identities & avatars", "NFT-gated gaming experiences"]},
        "music": {"title": "Music & Entertainment", "desc": "Artists monetizing directly, fans owning a piece of culture", "list": ["Royalty-sharing music NFTs", "Exclusive concert access & backstage passes", "Fan club memberships as NFTs", "Collaborative songs with holders"]},
        "rwa": {"title": "Real World Assets (RWAs)", "desc": "Tokenizing physical assets for fractional ownership", "list": ["Real estate fractional ownership", "Luxury goods authentication (watches, bags)", "Equipment leasing & rental NFTs", "Supply chain tracking"]},
        "id": {"title": "Identity & Credentials", "desc": "Verifiable credentials and decentralized identity", "list": ["Education diplomas as NFTs", "Professional certifications", "Medical records & prescriptions", "Soulbound tokens (non-transferable identity)"]}
      },
      "tech": {
        "title": "Technological Innovations",
        "dynamic": {"title": "Dynamic NFTs", "desc": "NFTs that change based on external data (weather, time, real-world events). Example: A soccer player card that updates stats in real-time."},
        "ai": {"title": "AI-Generated NFTs", "desc": "AI art tools integrated into minting platforms. Prompt-to-NFT in seconds."}
      }
    },
    "es": {
      "p1": "El <strong class=\"text-white\">futuro de los NFTs</strong> va más allá del arte digital. Nuevos casos de uso transforman cómo pensamos sobre propiedad, identidad y experiencias digitales.",
      "trends": {
        "game": {"title": "Gaming y Metaverso", "desc": "Economías Play-to-earn donde tus activos in-game tienen valor real", "list": ["Ítems interoperables entre juegos", "Propiedad de tierra virtual (Decentraland)", "Identidades y avatares multiplataforma", "Experiencias exclusivas para holders"]},
        "music": {"title": "Música y Entretenimiento", "desc": "Artistas monetizando directamente, fans poseyendo cultura", "list": ["NFTs de música con regalías compartidas", "Acceso exclusivo a conciertos y backstage", "Membresías de club de fans", "Canciones colaborativas"]},
        "rwa": {"title": "Activos del Mundo Real (RWAs)", "desc": "Tokenizando activos físicos para propiedad fraccionada", "list": ["Propiedad fraccionada de bienes raíces", "Autenticación de bienes de lujo", "Arrendamiento de equipos", "Rastreo de cadena de suministro"]},
        "id": {"title": "Identidad y Credenciales", "desc": "Credenciales verificables e identidad descentralizada", "list": ["Diplomas educativos como NFTs", "Certificaciones profesionales", "Historiales médicos", "Tokens Soulbound (intransferibles)"]}
      },
      "tech": {
        "title": "Innovaciones Tecnológicas",
        "dynamic": {"title": "NFTs Dinámicos", "desc": "NFTs que cambian basados en datos externos (clima, tiempo). Ej: Una carta de jugador de fútbol que actualiza estadísticas en tiempo real."},
        "ai": {"title": "NFTs Generados por IA", "desc": "Herramientas de arte IA integradas en plataformas de minteo. De prompt a NFT en segundos."}
      }
    }
  }$$
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 7: FAQs
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'nft-masterclass', 
  'faqs', 
  7, 
  '{"en": "NFT FAQs", "es": "NFTs FAQs"}', 
  '{"en": "Common questions about Non-Fungible Tokens", "es": "Preguntas comunes sobre Tokens No Fungibles"}',
  $${
    "en": {
      "p1": "Answers to the most common questions about the NFT ecosystem.",
      "faqs": {
        "title": "❓ NFT Questions",
        "items": [
          {"title": "Can I just screenshot an NFT?", "desc": "You can copy the image, but you cannot copy the token's private key. It is like taking a photo of the Mona Lisa; you have the image, but not the verified ownership or value."},
          {"title": "Are NFTs bad for the environment?", "desc": "It depends. Ethereum switched to Proof-of-Stake (PoS), reducing energy consumption by 99.9%. Solana and Polygon are also very eco-friendly."},
          {"title": "Why are some NFTs so expensive?", "desc": "Value comes from scarcity, utility, community strength (network effects), and cultural significance (flexing)."},
          {"title": "How do I sell an NFT?", "desc": "Connect your wallet to a marketplace (OpenSea, Blur), approve the collection for trading, and list it for a specific price or auction."},
          {"title": "Can I lose my NFT?", "desc": "Yes. If you lose your wallet's seed phrase or sign a malicious transaction (phishing), your NFTs can be stolen forever."},
          {"title": "Do I own the copyright?", "desc": "Generally NO. You own the specific token instance. Unless the creator grants commercial rights (like BAYC) or the project is CC0."},
          {"title": "What is a 'Gas War'?", "desc": "When thousands of people try to mint a popular project simultaneously, driving up transaction fees as they compete for block space."},
          {"title": "Can I use NFTs in any game?", "desc": "Not yet. Interoperability is a technical challenge, but developers are working on standards to make cross-game items possible."},
          {"title": "What wallet should I use?", "desc": "MetaMask is the standard for Ethereum/Polygon. Phantom is best for Solana."},
          {"title": "Are NFTs a scam?", "desc": "The technology is real, but the space has many scams (rug pulls). Always Research Before You Invest."}
        ]
      }
    },
    "es": {
      "p1": "Respuestas a las preguntas más comunes sobre el ecosistema NFT.",
      "faqs": {
        "title": "❓ Preguntas NFT",
        "items": [
          {"title": "¿Puedo simplemente tomar captura de un NFT?", "desc": "Puedes copiar la imagen, pero no la clave privada del token. Es como tomar una foto de la Mona Lisa; tienes la imagen, pero no la propiedad verificada ni el valor."},
          {"title": "¿Son los NFTs malos para el medio ambiente?", "desc": "Depende. Ethereum cambió a Proof-of-Stake (PoS), reduciendo el consumo 99.9%. Solana y Polygon son también muy ecológicos."},
          {"title": "¿Por qué son tan caros algunos NFTs?", "desc": "El valor viene de la escasez, utilidad, fuerza de la comunidad (efectos de red) y significado cultural (flexing)."},
          {"title": "¿Cómo vendo un NFT?", "desc": "Conecta tu wallet a un marketplace (OpenSea, Blur), aprueba la colección y lístalo por un precio fijo o subasta."},
          {"title": "¿Puedo perder mi NFT?", "desc": "Sí. Si pierdes la frase semilla de tu wallet o firmas una transacción maliciosa (phishing), tus NFTs pueden ser robados para siempre."},
          {"title": "¿Poseo el copyright?", "desc": "Generalmente NO. Posees la instancia específica del token. A menos que el creador otorgue derechos comerciales (como BAYC) o sea CC0."},
          {"title": "¿Qué es una 'Guerra de Gas'?", "desc": "Cuando miles de personas intentan mintear un proyecto popular simultáneamente, subiendo las tarifas mientras compiten por espacio en el bloque."},
          {"title": "¿Puedo usar NFTs en cualquier juego?", "desc": "Aún no. La interoperabilidad es un reto técnico, pero los devs trabajan en estándares para hacer posibles los ítems entre juegos."},
          {"title": "¿Qué wallet debo usar?", "desc": "MetaMask es el estándar para Ethereum/Polygon. Phantom es la mejor para Solana."},
          {"title": "¿Son los NFTs una estafa?", "desc": "La tecnología es real, pero el espacio tiene muchas estafas (rug pulls). Siempre Investiga Antes de Invertir."}
        ]
      }
    }
  }$$
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;
