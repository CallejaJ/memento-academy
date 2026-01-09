-- =============================================
-- WEB3-BASICS COURSE - FULL SEED
-- 8 Sections + 15 questions each = 120 questions
-- =============================================

-- =============================================
-- SECTION 1: The Evolution of the Internet
-- =============================================
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'web3-basics', 
  'evolution', 
  1, 
  '{"en": "The Evolution of the Internet", "es": "La Evolución de Internet"}', 
  '{"en": "From Web 1.0 to Web 3.0", "es": "De Web 1.0 a Web 3.0"}',
  '{
    "en": {
      "p1": "The internet has evolved through three major phases, each transforming how we interact with digital content and each other.",
      "diagram": {
        "title": "The Web Evolution",
        "src": "/images/diagrams/web-evolution.png",
        "alt": "Web 1.0 vs Web 2.0 vs Web 3.0 Evolution Diagram"
      },
      "comparison": {
        "title": "Key Differences",
        "list": [
          "**Ownership:** Web2 = platforms own data. Web3 = users own data.",
          "**Identity:** Web2 = login with Google/Facebook. Web3 = your wallet IS your identity.",
          "**Payments:** Web2 = banks as intermediaries. Web3 = direct peer-to-peer.",
          "**Content:** Web2 = can be censored. Web3 = censorship-resistant."
        ]
      }
    },
    "es": {
      "p1": "Internet ha evolucionado a través de tres fases principales, cada una transformando cómo interactuamos con el contenido digital.",
      "diagram": {
        "title": "Evolución de la Web",
        "src": "/images/diagrams/web-evolution-es.png",
        "alt": "Diagrama de Evolución de Web 1.0 a Web 3.0"
      },
      "comparison": {
        "title": "Diferencias Clave",
        "list": [
          "**Propiedad:** Web2 = plataformas tienen datos. Web3 = usuarios tienen datos.",
          "**Identidad:** Web2 = login con Google/Facebook. Web3 = tu wallet ES tu identidad.",
          "**Pagos:** Web2 = bancos como intermediarios. Web3 = directo peer-to-peer.",
          "**Contenido:** Web2 = puede censurarse. Web3 = resistente a censura."
        ]
      }
    }
  }'
)
ON CONFLICT (course_id, slug) DO UPDATE SET 
  content = EXCLUDED.content,
  title = EXCLUDED.title,
  description = EXCLUDED.description;

-- =============================================
-- SECTION 2: What is Blockchain?
-- =============================================
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'web3-basics', 
  'blockchain', 
  2, 
  '{"en": "What is Blockchain?", "es": "¿Qué es Blockchain?"}', 
  '{"en": "The technology behind Web3", "es": "La tecnología detrás de Web3"}',
  '{
    "en": {
      "p1": "Imagine a giant ledger that everyone can see, but no one can modify once written. That is **blockchain**: a public, transparent, and immutable record of all transactions.",
      "diagram": {
        "title": "Centralized vs Decentralized",
        "src": "/images/diagrams/centralized-vs-decentralized.png",
        "alt": "Centralized Web2 vs Decentralized Web3 Network Comparison"
      },
      "components": {
        "title": "Core Components",
        "items": [
          {"title": "Blocks", "desc": "Containers of transaction data with timestamps"},
          {"title": "Chain", "desc": "Blocks linked via cryptographic hashes"},
          {"title": "Nodes", "desc": "Computers that validate and store data"},
          {"title": "Consensus", "desc": "Agreement mechanism (PoW, PoS, etc.)"}
        ]
      },
      "example": {
        "title": "Everyday Example",
        "list": [
          "Bank transfer: Bank verifies → takes time → charges fees",
          "Blockchain transfer: Network verifies → instant → lower cost",
          "The difference: No intermediary, available 24/7, borderless"
        ]
      }
    },
    "es": {
      "p1": "Imagina un libro de contabilidad gigante que todos pueden ver, pero nadie puede modificar una vez escrito. Eso es **blockchain**: un registro público, transparente e inmutable de todas las transacciones.",
      "diagram": {
        "title": "Centralizado vs Descentralizado",
        "src": "/images/diagrams/centralized-vs-decentralized-es.png",
        "alt": "Comparación de Red Centralizada Web2 vs Descentralizada Web3"
      },
      "components": {
        "title": "Componentes Principales",
        "items": [
          {"title": "Bloques", "desc": "Contenedores de datos de transacciones con timestamps"},
          {"title": "Cadena", "desc": "Bloques enlazados vía hashes criptográficos"},
          {"title": "Nodos", "desc": "Computadoras que validan y almacenan datos"},
          {"title": "Consenso", "desc": "Mecanismo de acuerdo (PoW, PoS, etc.)"}
        ]
      },
      "example": {
        "title": "Ejemplo Cotidiano",
        "list": [
          "Transferencia bancaria: Banco verifica → toma tiempo → cobra tarifas",
          "Transferencia blockchain: Red verifica → instantáneo → menor costo",
          "La diferencia: Sin intermediario, disponible 24/7, sin fronteras"
        ]
      }
    }
  }'
)
ON CONFLICT (course_id, slug) DO UPDATE SET 
  content = EXCLUDED.content,
  title = EXCLUDED.title,
  description = EXCLUDED.description;

-- =============================================
-- SECTION 3: Web3 Applications
-- =============================================
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'web3-basics', 
  'applications', 
  3, 
  '{"en": "Web3 Applications", "es": "Aplicaciones Web3"}', 
  '{"en": "DeFi, NFTs, and more", "es": "DeFi, NFTs y más"}',
  '{
    "en": {
      "p1": "Web3 is not just theory—it powers real applications used by millions of people today.",
      "components": {
        "title": "Decentralized Finance (DeFi)",
        "items": [
          {"title": "Lending", "desc": "Earn interest by lending your crypto, borrow against collateral"},
          {"title": "DEXs", "desc": "Trade directly with others, no exchange registration needed"},
          {"title": "Yield Farming", "desc": "Provide liquidity, earn rewards"},
          {"title": "Stablecoins", "desc": "Crypto pegged to USD for stability"}
        ]
      },
      "nfts": {
        "title": "NFTs & Digital Ownership",
        "list": [
          "**Art:** Digital artists sell directly to collectors",
          "**Gaming:** Own in-game items, trade across platforms",
          "**Music:** Artists receive royalties automatically",
          "**Identity:** Prove ownership of credentials"
        ]
      }
    },
    "es": {
      "p1": "Web3 no es solo teoría—impulsa aplicaciones reales usadas por millones de personas hoy.",
      "components": {
        "title": "Finanzas Descentralizadas (DeFi)",
        "items": [
          {"title": "Préstamos", "desc": "Gana interés prestando tu crypto, pide prestado con colateral"},
          {"title": "DEXs", "desc": "Intercambia directamente con otros, sin registro en exchange"},
          {"title": "Yield Farming", "desc": "Provee liquidez, gana recompensas"},
          {"title": "Stablecoins", "desc": "Crypto vinculado al USD para estabilidad"}
        ]
      },
      "nfts": {
        "title": "NFTs y Propiedad Digital",
        "list": [
          "**Arte:** Artistas digitales venden directamente a coleccionistas",
          "**Gaming:** Posee items del juego, comercia entre plataformas",
          "**Música:** Artistas reciben regalías automáticamente",
          "**Identidad:** Prueba propiedad de credenciales"
        ]
      }
    }
  }'
)
ON CONFLICT (course_id, slug) DO UPDATE SET 
  content = EXCLUDED.content,
  title = EXCLUDED.title,
  description = EXCLUDED.description;

-- =============================================
-- SECTION 4: History of Web3
-- =============================================
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'web3-basics', 
  'history', 
  4, 
  '{"en": "History of Web3", "es": "Historia de Web3"}', 
  '{"en": "Key milestones and events", "es": "Hitos y eventos clave"}',
  '{
    "en": {
      "p1": "Understanding where Web3 came from helps us see where it is going.",
      "timeline": {
        "title": "Key Milestones",
        "items": [
          {"title": "2008", "desc": "Satoshi Nakamoto publishes Bitcoin whitepaper"},
          {"title": "2009", "desc": "Bitcoin network goes live, first block mined"},
          {"title": "2015", "desc": "Ethereum launches with smart contracts"},
          {"title": "2017", "desc": "ICO boom, crypto enters mainstream media"},
          {"title": "2020", "desc": "DeFi Summer—decentralized finance explodes"},
          {"title": "2021", "desc": "NFTs go viral, Beeple sells for $69M"}
        ]
      },
      "crypto": {
        "title": "What is Coming Next",
        "list": [
          "**Institutional adoption:** Banks and corporations entering crypto",
          "**Regulation:** Governments creating crypto frameworks",
          "**Scalability:** Layer 2 solutions making transactions cheaper",
          "**Real-world assets:** Tokenization of property, stocks, art"
        ]
      }
    },
    "es": {
      "p1": "Entender de dónde viene Web3 nos ayuda a ver hacia dónde va.",
      "timeline": {
        "title": "Hitos Clave",
        "items": [
          {"title": "2008", "desc": "Satoshi Nakamoto publica el whitepaper de Bitcoin"},
          {"title": "2009", "desc": "La red Bitcoin se activa, primer bloque minado"},
          {"title": "2015", "desc": "Ethereum se lanza con contratos inteligentes"},
          {"title": "2017", "desc": "Boom de ICOs, crypto entra en medios mainstream"},
          {"title": "2020", "desc": "Verano DeFi—finanzas descentralizadas explotan"},
          {"title": "2021", "desc": "NFTs se vuelven virales, Beeple vende por $69M"}
        ]
      },
      "crypto": {
        "title": "Qué Viene Después",
        "list": [
          "**Adopción institucional:** Bancos y corporaciones entrando a crypto",
          "**Regulación:** Gobiernos creando marcos para crypto",
          "**Escalabilidad:** Soluciones Layer 2 haciendo transacciones más baratas",
          "**Activos reales:** Tokenización de propiedades, acciones, arte"
        ]
      }
    }
  }'
)
ON CONFLICT (course_id, slug) DO UPDATE SET 
  content = EXCLUDED.content,
  title = EXCLUDED.title,
  description = EXCLUDED.description;

-- =============================================
-- SECTION 5: Real-World Use Cases
-- =============================================
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'web3-basics', 
  'use-cases', 
  5, 
  '{"en": "Real-World Use Cases", "es": "Casos de Uso en el Mundo Real"}', 
  '{"en": "Voting, supply chain, identity", "es": "Votación, cadena de suministro, identidad"}',
  '{
    "en": {
      "p1": "Beyond finance, blockchain solves real problems in many industries.",
      "components": {
        "title": "Industry Applications",
        "items": [
          {"title": "Voting", "desc": "Transparent, tamper-proof elections and governance"},
          {"title": "Supply Chain", "desc": "Track products from origin to consumer"},
          {"title": "Digital Identity", "desc": "Own your ID without relying on Big Tech"},
          {"title": "Healthcare", "desc": "Secure, portable medical records"}
        ]
      },
      "example": {
        "title": "Real Example: Supply Chain",
        "list": [
          "Problem: Fake products enter supply chains",
          "Solution: Each item gets a unique blockchain ID",
          "Result: Scan QR code to verify authenticity",
          "Example: Walmart uses blockchain for food traceability"
        ]
      }
    },
    "es": {
      "p1": "Más allá de las finanzas, blockchain resuelve problemas reales en muchas industrias.",
      "components": {
        "title": "Aplicaciones en Industrias",
        "items": [
          {"title": "Votación", "desc": "Elecciones transparentes y a prueba de manipulación"},
          {"title": "Cadena de Suministro", "desc": "Rastrear productos desde origen hasta consumidor"},
          {"title": "Identidad Digital", "desc": "Poseer tu ID sin depender de Big Tech"},
          {"title": "Salud", "desc": "Registros médicos seguros y portables"}
        ]
      },
      "example": {
        "title": "Ejemplo Real: Cadena de Suministro",
        "list": [
          "Problema: Productos falsos entran en cadenas de suministro",
          "Solución: Cada item recibe un ID único en blockchain",
          "Resultado: Escanea código QR para verificar autenticidad",
          "Ejemplo: Walmart usa blockchain para trazabilidad de alimentos"
        ]
      }
    }
  }'
)
ON CONFLICT (course_id, slug) DO UPDATE SET 
  content = EXCLUDED.content,
  title = EXCLUDED.title,
  description = EXCLUDED.description;

-- =============================================
-- SECTION 6: Why Should You Care?
-- =============================================
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'web3-basics', 
  'benefits', 
  6, 
  '{"en": "Why Should You Care?", "es": "¿Por Qué Debería Importarte?"}', 
  '{"en": "Benefits and opportunities", "es": "Beneficios y oportunidades"}',
  '{
    "en": {
      "p1": "Web3 is not just for tech enthusiasts—it offers tangible benefits for everyone.",
      "benefits": {
        "title": "Key Benefits",
        "items": [
          {"title": "Control Your Data", "desc": "You decide who accesses your personal information"},
          {"title": "Censorship Resistance", "desc": "Content and money that cannot be blocked by third parties"},
          {"title": "Financial Inclusion", "desc": "Banking for the 1.7 billion unbanked worldwide"},
          {"title": "New Opportunities", "desc": "Jobs, investments, and business models that did not exist before"}
        ]
      },
      "crypto": {
        "title": "Career Opportunities",
        "list": [
          "**Developers:** $150-300k salaries for blockchain devs",
          "**Designers:** NFT art and Web3 UX design",
          "**Marketing:** Community management for DAOs",
          "**Finance:** DeFi analysts and traders"
        ]
      }
    },
    "es": {
      "p1": "Web3 no es solo para entusiastas de la tecnología—ofrece beneficios tangibles para todos.",
      "benefits": {
        "title": "Beneficios Clave",
        "items": [
          {"title": "Controla Tus Datos", "desc": "Tú decides quién accede a tu información personal"},
          {"title": "Resistencia a Censura", "desc": "Contenido y dinero que no puede ser bloqueado por terceros"},
          {"title": "Inclusión Financiera", "desc": "Banca para los 1.7 mil millones no bancarizados"},
          {"title": "Nuevas Oportunidades", "desc": "Trabajos, inversiones y modelos de negocio que no existían antes"}
        ]
      },
      "crypto": {
        "title": "Oportunidades de Carrera",
        "list": [
          "**Desarrolladores:** Salarios de $150-300k para devs blockchain",
          "**Diseñadores:** Arte NFT y diseño UX Web3",
          "**Marketing:** Community management para DAOs",
          "**Finanzas:** Analistas y traders de DeFi"
        ]
      }
    }
  }'
)
ON CONFLICT (course_id, slug) DO UPDATE SET 
  content = EXCLUDED.content,
  title = EXCLUDED.title,
  description = EXCLUDED.description;

-- =============================================
-- SECTION 7: Future Trends
-- =============================================
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'web3-basics', 
  'future', 
  7, 
  '{"en": "Future Trends", "es": "Tendencias Futuras"}', 
  '{"en": "What is coming next", "es": "Qué viene después"}',
  '{
    "en": {
      "p1": "Web3 is still in its early stages. Here is what experts predict for the next decade.",
      "trends": {
        "title": "Emerging Trends",
        "items": [
          {"title": "AI + Blockchain", "desc": "AI agents with their own wallets and economic activity"},
          {"title": "Tokenized Assets", "desc": "Real estate, stocks, and art as blockchain tokens"},
          {"title": "Mass Adoption", "desc": "Easier wallets, invisible blockchain for end users"},
          {"title": "Decentralized Social", "desc": "Social media owned by users, not corporations"}
        ]
      },
      "crypto": {
        "title": "Predictions for 2030",
        "list": [
          "**$10+ trillion** in tokenized real-world assets",
          "**1 billion+** crypto wallet users globally",
          "**Most games** will have blockchain-based economies",
          "**Central banks** will have issued digital currencies"
        ]
      }
    },
    "es": {
      "p1": "Web3 está todavía en sus primeras etapas. Esto es lo que predicen los expertos para la próxima década.",
      "trends": {
        "title": "Tendencias Emergentes",
        "items": [
          {"title": "IA + Blockchain", "desc": "Agentes de IA con sus propias billeteras y actividad económica"},
          {"title": "Activos Tokenizados", "desc": "Inmuebles, acciones y arte como tokens blockchain"},
          {"title": "Adopción Masiva", "desc": "Billeteras más fáciles, blockchain invisible para usuarios"},
          {"title": "Social Descentralizado", "desc": "Redes sociales propiedad de usuarios, no corporaciones"}
        ]
      },
      "crypto": {
        "title": "Predicciones para 2030",
        "list": [
          "**$10+ billones** en activos reales tokenizados",
          "**1 billón+** de usuarios de billeteras crypto globalmente",
          "**La mayoría de juegos** tendrán economías basadas en blockchain",
          "**Bancos centrales** habrán emitido monedas digitales"
        ]
      }
    }
  }'
)
ON CONFLICT (course_id, slug) DO UPDATE SET 
  content = EXCLUDED.content,
  title = EXCLUDED.title,
  description = EXCLUDED.description;

-- =============================================
-- SECTION 8: FAQs
-- =============================================
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'web3-basics', 
  'faqs', 
  8, 
  '{"en": "Frequently Asked Questions", "es": "Preguntas Frecuentes"}', 
  '{"en": "Common questions answered", "es": "Respuestas a preguntas comunes"}',
  '{
    "en": {
      "p1": "Got questions? Here are the most common ones we receive about Web3.",
      "faqs": {
        "title": "FAQs",
        "items": [
          {"title": "Is Web3 the same as crypto?", "desc": "No. Crypto is the financial layer, Web3 is the broader vision of a decentralized internet."},
          {"title": "Do I need coding skills?", "desc": "No. You can use Web3 apps just like regular apps. Coding is only needed to build them."},
          {"title": "Is it safe?", "desc": "Like the internet, it depends on how you use it. Learn security basics and start small."},
          {"title": "Is it too late to start?", "desc": "No. Web3 is still early. Most people have not used it yet."},
          {"title": "What wallet should I use?", "desc": "MetaMask for beginners. It works in your browser and is free."},
          {"title": "Can I lose money?", "desc": "Yes, if you invest irresponsibly. This course is educational, not financial advice."}
        ]
      }
    },
    "es": {
      "p1": "¿Tienes preguntas? Aquí están las más comunes que recibimos sobre Web3.",
      "faqs": {
        "title": "Preguntas Frecuentes",
        "items": [
          {"title": "¿Web3 es lo mismo que crypto?", "desc": "No. Crypto es la capa financiera, Web3 es la visión más amplia de un internet descentralizado."},
          {"title": "¿Necesito saber programar?", "desc": "No. Puedes usar apps Web3 como apps normales. Programar solo es necesario para crearlas."},
          {"title": "¿Es seguro?", "desc": "Como internet, depende de cómo lo uses. Aprende seguridad básica y empieza pequeño."},
          {"title": "¿Es tarde para empezar?", "desc": "No. Web3 todavía está temprano. La mayoría de personas no lo ha usado aún."},
          {"title": "¿Qué billetera debo usar?", "desc": "MetaMask para principiantes. Funciona en tu navegador y es gratis."},
          {"title": "¿Puedo perder dinero?", "desc": "Sí, si inviertes irresponsablemente. Este curso es educativo, no asesoría financiera."}
        ]
      }
    }
  }'
)
ON CONFLICT (course_id, slug) DO UPDATE SET 
  content = EXCLUDED.content,
  title = EXCLUDED.title,
  description = EXCLUDED.description;
