-- =============================================
-- CRYPTO-101 COURSE - SECTIONS SEED
-- 9 Sections (8 content + 1 FAQs)
-- =============================================

-- SECTION 1: What are Cryptocurrencies?
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'crypto-101', 
  'what-is-crypto', 
  1, 
  '{"en": "What are Cryptocurrencies?", "es": "¿Qué son las Criptomonedas?"}', 
  '{"en": "Digital money explained", "es": "Dinero digital explicado"}',
  '{
    "en": {
      "p1": "Cryptocurrencies are digital or virtual currencies that use cryptography for security. Unlike traditional money, they are decentralized and operate without a central authority.",
      "components": {
        "title": "Key Characteristics",
        "items": [
          {"title": "Digital", "desc": "Exists only in electronic form, no physical coins or bills"},
          {"title": "Decentralized", "desc": "No central bank or government controls it"},
          {"title": "Cryptographic", "desc": "Uses advanced math to secure transactions"},
          {"title": "Transparent", "desc": "All transactions recorded on public blockchain"}
        ]
      },
      "example": {
        "title": "Simple Analogy",
        "list": [
          "Think of crypto like email vs postal mail",
          "Email is digital, instant, and doesnt need a post office",
          "Crypto is digital money that doesnt need a bank"
        ]
      }
    },
    "es": {
      "p1": "Las criptomonedas son monedas digitales o virtuales que usan criptografía para seguridad. A diferencia del dinero tradicional, son descentralizadas y operan sin autoridad central.",
      "components": {
        "title": "Características Clave",
        "items": [
          {"title": "Digital", "desc": "Existe solo en forma electrónica, sin monedas físicas"},
          {"title": "Descentralizado", "desc": "Ningún banco central o gobierno lo controla"},
          {"title": "Criptográfico", "desc": "Usa matemáticas avanzadas para asegurar transacciones"},
          {"title": "Transparente", "desc": "Todas las transacciones registradas en blockchain pública"}
        ]
      },
      "example": {
        "title": "Analogía Simple",
        "list": [
          "Piensa en crypto como email vs correo postal",
          "El email es digital, instantáneo, y no necesita oficina de correos",
          "Crypto es dinero digital que no necesita banco"
        ]
      }
    }
  }'
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 2: The Main Cryptocurrencies
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'crypto-101', 
  'main-cryptos', 
  2, 
  '{"en": "The Main Cryptocurrencies", "es": "Las Principales Criptomonedas"}', 
  '{"en": "Bitcoin, Ethereum, and more", "es": "Bitcoin, Ethereum y más"}',
  '{
    "en": {
      "p1": "There are over 20,000 cryptocurrencies, but you only need to know a handful to get started.",
      "components": {
        "title": "Top Cryptocurrencies",
        "items": [
          {"title": "Bitcoin (BTC)", "desc": "The original crypto, digital gold, store of value"},
          {"title": "Ethereum (ETH)", "desc": "Smart contracts platform, powers DeFi and NFTs"},
          {"title": "Stablecoins (USDT, USDC)", "desc": "Pegged to $1, used for trading and savings"},
          {"title": "Solana (SOL)", "desc": "Fast and cheap transactions, growing ecosystem"}
        ]
      },
      "crypto": {
        "title": "Market Dominance",
        "list": [
          "**Bitcoin**: ~50% of total crypto market",
          "**Ethereum**: ~18% of total crypto market",
          "**Others**: The remaining ~32% is spread across thousands"
        ]
      }
    },
    "es": {
      "p1": "Hay más de 20,000 criptomonedas, pero solo necesitas conocer unas pocas para empezar.",
      "components": {
        "title": "Principales Criptomonedas",
        "items": [
          {"title": "Bitcoin (BTC)", "desc": "La crypto original, oro digital, reserva de valor"},
          {"title": "Ethereum (ETH)", "desc": "Plataforma de contratos inteligentes, impulsa DeFi y NFTs"},
          {"title": "Stablecoins (USDT, USDC)", "desc": "Ancladas a $1, usadas para trading y ahorros"},
          {"title": "Solana (SOL)", "desc": "Transacciones rápidas y baratas, ecosistema creciente"}
        ]
      },
      "crypto": {
        "title": "Dominancia de Mercado",
        "list": [
          "**Bitcoin**: ~50% del mercado crypto total",
          "**Ethereum**: ~18% del mercado crypto total",
          "**Otros**: El ~32% restante se distribuye entre miles"
        ]
      }
    }
  }'
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 3: What is a Wallet?
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'crypto-101', 
  'wallets', 
  3, 
  '{"en": "What is a Wallet?", "es": "¿Qué es una Wallet?"}', 
  '{"en": "Hot vs cold wallets", "es": "Wallets calientes vs frías"}',
  '{
    "en": {
      "p1": "A crypto wallet doesnt actually store your crypto—it stores the private keys that prove you own it. Think of it like a keychain to your digital safe.",
      "wallet_scale": {
        "title": "Wallet Temperature Scale",
        "hot": { "label": "HOT (Online)", "desc": "Convenient, Fast, Lower Security", "color": "bg-red-500" },
        "cold": { "label": "COLD (Offline)", "desc": "Secure, Slower, Maximum Safety", "color": "bg-blue-500" }
      },
      "components": {
        "title": "Hot Wallets vs Cold Wallets",
        "items": [
          {"title": "Hot Wallet", "desc": "Connected to internet. Convenient but less secure. Examples: MetaMask, Trust Wallet"},
          {"title": "Cold Wallet", "desc": "Offline storage. Maximum security. Examples: Ledger, Trezor"},
          {"title": "Custodial", "desc": "Exchange holds keys. Easy but you dont truly own crypto"},
          {"title": "Non-custodial", "desc": "You hold keys. Full ownership and responsibility"}
        ]
      },
      "example": {
        "title": "Recommendation",
        "list": [
          "Start with MetaMask (free, browser extension)",
          "Keep small amounts for daily use",
          "Get a hardware wallet for larger holdings"
        ]
      }
    },
    "es": {
      "p1": "Una wallet crypto no almacena realmente tu crypto—almacena las claves privadas que prueban que lo posees. Piénsalo como un llavero de tu caja fuerte digital.",
      "wallet_scale": {
        "title": "Escala de Temperatura de Wallets",
        "hot": { "label": "CALIENTE (Online)", "desc": "Conveniente, Rápido, Menor Seguridad", "color": "bg-red-500" },
        "cold": { "label": "FRÍA (Offline)", "desc": "Seguro, Más Lento, Máxima Seguridad", "color": "bg-blue-500" }
      },
      "components": {
        "title": "Wallets Calientes vs Wallets Frías",
        "items": [
          {"title": "Hot Wallet", "desc": "Conectada a internet. Conveniente pero menos segura. Ejemplos: MetaMask, Trust Wallet"},
          {"title": "Cold Wallet", "desc": "Almacenamiento offline. Máxima seguridad. Ejemplos: Ledger, Trezor"},
          {"title": "Custodial", "desc": "El exchange tiene las claves. Fácil pero no posees realmente el crypto"},
          {"title": "Non-custodial", "desc": "Tú tienes las claves. Propiedad y responsabilidad total"}
        ]
      },
      "example": {
        "title": "Recomendación",
        "list": [
          "Empieza con MetaMask (gratis, extensión de navegador)",
          "Mantén cantidades pequeñas para uso diario",
          "Consigue una wallet de hardware para cantidades mayores"
        ]
      }
    }
  }'
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 4: Key Security Concepts
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'crypto-101', 
  'security', 
  4, 
  '{"en": "Key Security Concepts", "es": "Conceptos de Seguridad Clave"}', 
  '{"en": "Seed phrases and private keys", "es": "Frases semilla y claves privadas"}',
  '{
    "en": {
      "p1": "Security is everything in crypto. Lose your keys, lose your money. There is no customer support to call.",
      "components": {
        "title": "Security Fundamentals",
        "items": [
          {"title": "Private Key", "desc": "Like a password, but you can NEVER change it. Never share it."},
          {"title": "Seed Phrase", "desc": "12-24 words that can recover your entire wallet. Write on paper, not digital."},
          {"title": "Public Address", "desc": "Like an email address. Safe to share for receiving crypto."},
          {"title": "2FA", "desc": "Use authenticator apps, not SMS, for exchange accounts."}
        ]
      },
      "crypto": {
        "title": "Golden Rules",
        "list": [
          "**NEVER share your seed phrase** with anyone, ever",
          "**NEVER store it digitally** (no screenshots, no cloud)",
          "**NEVER enter it on any website** that asks for it",
          "If someone asks for your seed phrase, its a **SCAM**"
        ]
      }
    },
    "es": {
      "p1": "La seguridad es todo en crypto. Pierdes tus claves, pierdes tu dinero. No hay servicio al cliente para llamar.",
      "components": {
        "title": "Fundamentos de Seguridad",
        "items": [
          {"title": "Clave Privada", "desc": "Como una contraseña, pero NUNCA puedes cambiarla. Nunca la compartas."},
          {"title": "Frase Semilla", "desc": "12-24 palabras que pueden recuperar toda tu wallet. Escríbela en papel, no digital."},
          {"title": "Dirección Pública", "desc": "Como una dirección de email. Segura para compartir al recibir crypto."},
          {"title": "2FA", "desc": "Usa apps de autenticación, no SMS, para cuentas de exchange."}
        ]
      },
      "crypto": {
        "title": "Reglas de Oro",
        "list": [
          "**NUNCA compartas tu frase semilla** con nadie, jamás",
          "**NUNCA la guardes digitalmente** (sin capturas, sin nube)",
          "**NUNCA la ingreses en ningún sitio web** que la pida",
          "Si alguien pide tu frase semilla, es una **ESTAFA**"
        ]
      }
    }
  }'
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 5: Recommended First Steps
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'crypto-101', 
  'first-steps', 
  5, 
  '{"en": "Recommended First Steps", "es": "Primeros Pasos Recomendados"}', 
  '{"en": "How to get started", "es": "Cómo empezar"}',
  '{
    "en": {
      "p1": "Ready to start? Here is a step-by-step guide to safely enter the crypto world.",
      "components": {
        "title": "Your First Week in Crypto",
        "items": [
          {"title": "Day 1-2", "desc": "Install MetaMask, secure your seed phrase on paper"},
          {"title": "Day 3-4", "desc": "Create account on a trusted exchange (Coinbase, Kraken)"},
          {"title": "Day 5-6", "desc": "Buy a small amount ($20-50) to practice"},
          {"title": "Day 7", "desc": "Transfer to your personal wallet, explore a dApp"}
        ]
      },
      "crypto": {
        "title": "Pro Tips",
        "list": [
          "Start with amounts you can afford to lose completely",
          "Learn by doing, but with small amounts",
          "Join communities (Discord, Twitter) to stay informed",
          "Be skeptical of everything that sounds too good"
        ]
      }
    },
    "es": {
      "p1": "¿Listo para empezar? Aquí tienes una guía paso a paso para entrar seguro al mundo crypto.",
      "components": {
        "title": "Tu Primera Semana en Crypto",
        "items": [
          {"title": "Día 1-2", "desc": "Instala MetaMask, asegura tu frase semilla en papel"},
          {"title": "Día 3-4", "desc": "Crea cuenta en un exchange confiable (Coinbase, Kraken)"},
          {"title": "Día 5-6", "desc": "Compra una cantidad pequeña ($20-50) para practicar"},
          {"title": "Día 7", "desc": "Transfiere a tu wallet personal, explora una dApp"}
        ]
      },
      "crypto": {
        "title": "Tips Pro",
        "list": [
          "Empieza con cantidades que puedas perder completamente",
          "Aprende haciendo, pero con cantidades pequeñas",
          "Únete a comunidades (Discord, Twitter) para estar informado",
          "Sé escéptico de todo lo que suena demasiado bueno"
        ]
      }
    }
  }'
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 6: How to Buy Crypto
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'crypto-101', 
  'exchanges', 
  6, 
  '{"en": "How to Buy Crypto", "es": "Cómo Comprar Crypto"}', 
  '{"en": "Exchange comparison and fees", "es": "Comparación de exchanges y tarifas"}',
  '{
    "en": {
      "p1": "There are many ways to buy crypto, but exchanges are the most common for beginners.",
      "components": {
        "title": "Popular Exchanges",
        "items": [
          {"title": "Coinbase", "desc": "Beginner-friendly, higher fees, great UI"},
          {"title": "Kraken", "desc": "Lower fees, good security, US-friendly"},
          {"title": "Binance", "desc": "Lowest fees, most coins, complex for beginners"},
          {"title": "Crypto.com", "desc": "Good card rewards, mobile-first experience"}
        ]
      },
      "crypto": {
        "title": "Fee Types",
        "list": [
          "**Maker fees**: You add liquidity (0.1-0.5%)",
          "**Taker fees**: You take liquidity (0.1-0.6%)",
          "**Spread**: Hidden fee in price difference",
          "**Withdrawal fees**: Cost to send to your wallet"
        ]
      }
    },
    "es": {
      "p1": "Hay muchas formas de comprar crypto, pero los exchanges son las más comunes para principiantes.",
      "components": {
        "title": "Exchanges Populares",
        "items": [
          {"title": "Coinbase", "desc": "Amigable para principiantes, tarifas más altas, gran UI"},
          {"title": "Kraken", "desc": "Tarifas más bajas, buena seguridad, amigable con EE.UU."},
          {"title": "Binance", "desc": "Tarifas más bajas, más monedas, complejo para principiantes"},
          {"title": "Crypto.com", "desc": "Buenas recompensas de tarjeta, experiencia mobile-first"}
        ]
      },
      "crypto": {
        "title": "Tipos de Tarifas",
        "list": [
          "**Maker fees**: Añades liquidez (0.1-0.5%)",
          "**Taker fees**: Tomas liquidez (0.1-0.6%)",
          "**Spread**: Tarifa oculta en diferencia de precio",
          "**Tarifas de retiro**: Costo de enviar a tu wallet"
        ]
      }
    }
  }'
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 7: Trading Basics
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'crypto-101', 
  'trading-basics', 
  7, 
  '{"en": "Trading Basics", "es": "Fundamentos de Trading"}', 
  '{"en": "Order types and strategies", "es": "Tipos de órdenes y estrategias"}',
  '{
    "en": {
      "p1": "Understanding basic order types and strategies will help you make smarter decisions.",
      "components": {
        "title": "Order Types",
        "items": [
          {"title": "Market Order", "desc": "Buy/sell immediately at current price. Simple but can slip."},
          {"title": "Limit Order", "desc": "Set your price. Only executes if market reaches it."},
          {"title": "Stop-Loss", "desc": "Auto-sell if price drops to a level. Limits losses."},
          {"title": "DCA", "desc": "Dollar Cost Averaging. Buy regularly regardless of price."}
        ]
      },
      "crypto": {
        "title": "Beginner Strategies",
        "list": [
          "**HODL**: Buy and hold long-term, ignore short-term volatility",
          "**DCA**: Invest fixed amount weekly/monthly, removes emotion",
          "**Never FOMO**: Fear Of Missing Out leads to buying high",
          "**Take profits**: Set targets and stick to them"
        ]
      }
    },
    "es": {
      "p1": "Entender los tipos de órdenes básicos y estrategias te ayudará a tomar decisiones más inteligentes.",
      "components": {
        "title": "Tipos de Órdenes",
        "items": [
          {"title": "Orden de Mercado", "desc": "Compra/vende inmediatamente al precio actual. Simple pero puede deslizar."},
          {"title": "Orden Límite", "desc": "Estableces tu precio. Solo se ejecuta si el mercado lo alcanza."},
          {"title": "Stop-Loss", "desc": "Venta automática si el precio baja a un nivel. Limita pérdidas."},
          {"title": "DCA", "desc": "Dollar Cost Averaging. Compra regularmente sin importar el precio."}
        ]
      },
      "crypto": {
        "title": "Estrategias para Principiantes",
        "list": [
          "**HODL**: Compra y mantén a largo plazo, ignora volatilidad corta",
          "**DCA**: Invierte cantidad fija semanal/mensual, elimina emoción",
          "**Nunca FOMO**: El miedo a perderse lleva a comprar alto",
          "**Toma ganancias**: Establece objetivos y cúmplelos"
        ]
      }
    }
  }'
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 8: Building Your Portfolio
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'crypto-101', 
  'portfolio', 
  8, 
  '{"en": "Building Your Portfolio", "es": "Construyendo Tu Portafolio"}', 
  '{"en": "Diversification basics", "es": "Fundamentos de diversificación"}',
  '{
    "en": {
      "p1": "A well-balanced portfolio reduces risk while maintaining growth potential.",
      "pyramid": {
        "title": "Risk vs Reward Pyramid",
        "levels": [
          { "label": "Moonshots / High Risk", "desc": "Small Caps, Memecoins (<5%)", "color": "bg-red-500", "width": "w-1/3" },
          { "label": "Growth / Mid Caps", "desc": "L1s, Major Protocols (15-25%)", "color": "bg-blue-500", "width": "w-2/3" },
          { "label": "Foundation / Safe Haven", "desc": "Bitcoin, Ethereum (70%+)", "color": "bg-green-500", "width": "w-full" }
        ]
      },
      "components": {
        "title": "Portfolio Allocation Ideas",
        "items": [
          {"title": "Conservative", "desc": "70% BTC, 20% ETH, 10% stablecoins"},
          {"title": "Balanced", "desc": "50% BTC, 30% ETH, 15% alts, 5% stables"},
          {"title": "Aggressive", "desc": "30% BTC, 30% ETH, 35% alts, 5% stables"},
          {"title": "Income", "desc": "Staking-focused coins for passive yield"}
        ]
      },
      "crypto": {
        "title": "Diversification Rules",
        "list": [
          "**Never 100% in one coin** - diversify across assets",
          "**Keep some stablecoins** - for buying dips",
          "**Rebalance quarterly** - sell winners, buy losers",
          "**Consider your risk tolerance** - only you know your situation"
        ]
      }
    },
    "es": {
      "p1": "Un portafolio bien balanceado reduce riesgo mientras mantiene potencial de crecimiento.",
      "pyramid": {
        "title": "Pirámide Riesgo vs Retorno",
        "levels": [
          { "label": "Moonshots / Alto Riesgo", "desc": "Small Caps, Memecoins (<5%)", "color": "bg-red-500", "width": "w-1/3" },
          { "label": "Crecimiento / Mid Caps", "desc": "L1s, Protocolos Mayores (15-25%)", "color": "bg-blue-500", "width": "w-2/3" },
          { "label": "Fundación / Refugio Seguro", "desc": "Bitcoin, Ethereum (70%+)", "color": "bg-green-500", "width": "w-full" }
        ]
      },
      "components": {
        "title": "Ideas de Asignación de Portafolio",
        "items": [
          {"title": "Conservador", "desc": "70% BTC, 20% ETH, 10% stablecoins"},
          {"title": "Balanceado", "desc": "50% BTC, 30% ETH, 15% alts, 5% stables"},
          {"title": "Agresivo", "desc": "30% BTC, 30% ETH, 35% alts, 5% stables"},
          {"title": "Ingresos", "desc": "Monedas de staking para rendimiento pasivo"}
        ]
      },
      "crypto": {
        "title": "Reglas de Diversificación",
        "list": [
          "**Nunca 100% en una moneda** - diversifica entre activos",
          "**Mantén algunas stablecoins** - para comprar en bajadas",
          "**Rebalancea trimestralmente** - vende ganadores, compra perdedores",
          "**Considera tu tolerancia al riesgo** - solo tú conoces tu situación"
        ]
      }
    }
  }'
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 9: FAQs
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'crypto-101', 
  'faqs', 
  9, 
  '{"en": "Frequently Asked Questions", "es": "Preguntas Frecuentes"}', 
  '{"en": "Common questions answered", "es": "Respuestas a preguntas comunes"}',
  '{
    "en": {
      "p1": "Got questions? We have got answers! Here are the things people ask us most often when starting out with crypto.",
      "faqs": {
        "title": "Your Questions Answered",
        "items": [
          {"title": "How much money do I need to start?", "desc": "As little as $10! Seriously, you dont need thousands to begin. Start small, learn the ropes, and grow from there."},
          {"title": "Is crypto legal?", "desc": "In most countries, absolutely yes. But rules vary by location, so do a quick check on your local regulations. Better safe than sorry!"},
          {"title": "Can I lose all my money?", "desc": "Yes, and we wont sugarcoat it. Crypto is volatile. Our golden rule: never invest money you cant afford to lose completely."},
          {"title": "What if I forget my password?", "desc": "For exchanges, no worries - you can reset it like any website. For your personal wallet, thats what your seed phrase is for. Keep it safe!"},
          {"title": "Should I tell people I own crypto?", "desc": "Maybe keep it to yourself. Talking about your crypto holdings can make you a target for scammers. Be smart about it."},
          {"title": "Is this course financial advice?", "desc": "Nope! Were here to teach you the basics. Any investment decisions are 100% yours. Always do your own research."},
          {"title": "What is the best crypto to buy first?", "desc": "Most beginners start with Bitcoin or Ethereum - theyre the most established. But remember, were not telling you what to buy!"},
          {"title": "Can I buy less than one full Bitcoin?", "desc": "Absolutely! You can buy tiny fractions. Even $20 worth of Bitcoin is totally valid. Dont let the high prices scare you."},
          {"title": "Are crypto gains taxable?", "desc": "In most places, yes. Its treated like stocks in many countries. Keep records of your trades - your future self will thank you."},
          {"title": "What if crypto goes to zero?", "desc": "Bitcoin and Ethereum have survived many crashes. No guarantees in life, but the big ones have proven quite resilient. Still, only invest what you can lose."}
        ]
      }
    },
    "es": {
      "p1": "¿Tienes preguntas? ¡Tenemos respuestas! Aquí están las cosas que la gente nos pregunta más cuando empiezan con crypto.",
      "faqs": {
        "title": "Tus Preguntas Respondidas",
        "items": [
          {"title": "¿Cuánto dinero necesito para empezar?", "desc": "¡Tan poco como $10! En serio, no necesitas miles para comenzar. Empieza pequeño, aprende cómo funciona, y crece desde ahí."},
          {"title": "¿Es legal el crypto?", "desc": "En la mayoría de países, absolutamente sí. Pero las reglas varían por ubicación, así que revisa tus regulaciones locales. ¡Más vale prevenir!"},
          {"title": "¿Puedo perder todo mi dinero?", "desc": "Sí, y no te vamos a endulzar la realidad. Crypto es volátil. Nuestra regla de oro: nunca inviertas dinero que no puedas perder completamente."},
          {"title": "¿Qué pasa si olvido mi contraseña?", "desc": "Para exchanges, tranqui - puedes resetearla como cualquier sitio web. Para tu wallet personal, para eso es tu frase semilla. ¡Guárdala bien!"},
          {"title": "¿Debo contarle a la gente que tengo crypto?", "desc": "Quizás mejor guárdatelo para ti. Hablar de cuánto crypto tienes puede hacerte objetivo de estafadores. Sé inteligente al respecto."},
          {"title": "¿Este curso es asesoría financiera?", "desc": "¡Nop! Estamos aquí para enseñarte los básicos. Cualquier decisión de inversión es 100% tuya. Siempre haz tu propia investigación."},
          {"title": "¿Cuál es el mejor crypto para comprar primero?", "desc": "La mayoría de principiantes empiezan con Bitcoin o Ethereum - son los más establecidos. Pero recuerda, ¡no te estamos diciendo qué comprar!"},
          {"title": "¿Puedo comprar menos de un Bitcoin completo?", "desc": "¡Claro que sí! Puedes comprar fracciones pequeñísimas. Incluso $20 de Bitcoin es totalmente válido. Que los precios altos no te asusten."},
          {"title": "¿Las ganancias de crypto pagan impuestos?", "desc": "En la mayoría de lugares, sí. Se trata como acciones en muchos países. Lleva registro de tus trades - tu yo del futuro te lo agradecerá."},
          {"title": "¿Qué pasa si crypto baja a cero?", "desc": "Bitcoin y Ethereum han sobrevivido muchos crashes. No hay garantías en la vida, pero los grandes han demostrado ser bastante resilientes. Aún así, solo invierte lo que puedas perder."}
        ]
      }
    }
  }'
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

