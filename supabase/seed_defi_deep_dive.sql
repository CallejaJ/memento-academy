-- =============================================
-- DEFI DEEP DIVE COURSE - SECTIONS SEED
-- 7 Sections (6 Content + 1 FAQs)
-- =============================================

-- SECTION 1: DeFi Fundamentals
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'defi-deep-dive', 
  'fundamentals', 
  1, 
  '{"en": "DeFi Fundamentals", "es": "Fundamentos DeFi"}', 
  '{"en": "Core concepts and protocols", "es": "Conceptos y protocolos clave"}',
  $${
    "en": {
      "p1": "Decentralized Finance (DeFi) is an ecosystem of financial applications built on blockchain technology, primarily Ethereum. Unlike traditional finance (TradFi), DeFi operates without intermediaries like banks, brokerages, or custodians. It relies on **Smart Contracts**—self-executing code that runs on the blockchain.",
      "p2": "The core value proposition of DeFi is permissionless access: anyone with an internet connection and a wallet can interact with these protocols, 24/7, without ID verification or credit checks.",
      "components": {
        "title": "📊 Key DeFi Metrics",
        "items": [
          {"title": "TVL (Total Value Locked)", "desc": "The total dollar value of assets staked or deposited in a specific protocol. A higher TVL generally indicates higher trust."},
          {"title": "APY (Annual Percentage Yield)", "desc": "The real rate of return earned on a deposit, taking into account the effect of compounding interest."},
          {"title": "APR (Annual Percentage Rate)", "desc": "The annual rate of interest charged to borrowers or paid to investors, WITHOUT compounding."},
          {"title": "Wallet Connection", "desc": "Your Web3 wallet (like MetaMask) acts as your login credential and bank account in one."}
        ]
      },
      "desc": "DeFi replaces the trusted intermediaries of TradFi with transparent, auditable code. This introduces risks but also efficiency and transparency."
    },
    "es": {
      "p1": "Las Finanzas Descentralizadas (DeFi) son un ecosistema de aplicaciones financieras construidas sobre tecnología blockchain, principalmente Ethereum. A diferencia de las finanzas tradicionales (TradFi), DeFi opera sin intermediarios como bancos, corredores o custodios. Se basa en **Contratos Inteligentes**—código autoejecutable que corre en la blockchain.",
      "p2": "La propuesta de valor central de DeFi es el acceso sin permiso: cualquiera con conexión a internet y una wallet puede interactuar con estos protocolos, 24/7, sin verificación de identidad o historial crediticio.",
      "components": {
        "title": "📊 Métricas Clave DeFi",
        "items": [
          {"title": "TVL (Valor Total Bloqueado)", "desc": "El valor total en dólares de activos en staking o depositados en un protocolo. Un TVL más alto indica generalmente mayor confianza."},
          {"title": "APY (Rendimiento Porcentual Anual)", "desc": "La tasa real de retorno ganada en un depósito, teniendo en cuenta el efecto del interés compuesto."},
          {"title": "APR (Tasa Porcentual Anual)", "desc": "La tasa anual de interés cobrada a prestatarios o pagada a inversores, SIN interés compuesto."},
          {"title": "Conexión de Wallet", "desc": "Tu wallet Web3 (como MetaMask) actúa como tu credencial de inicio de sesión y cuenta bancaria en uno."}
        ]
      },
      "desc": "DeFi reemplaza a los intermediarios de confianza de TradFi con código transparente y auditable. Esto introduce riesgos pero también eficiencia y transparencia."
    }
  }$$
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 2: Lending & Borrowing
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'defi-deep-dive', 
  'lending-borrowing', 
  2, 
  '{"en": "Lending & Borrowing", "es": "Préstamos y Endeudamiento"}', 
  '{"en": "Aave, Compound explained", "es": "Aave, Compound explicados"}',
  $${
    "en": {
      "p1": "In DeFi, lending and borrowing are Peer-to-Pool. Instead of lending to a specific person, you lend to a Smart Contract (a Liquidity Pool). Borrowers then borrow from this pool by providing **Collateral**.",
      "p2": "This system is **Over-Collateralized**. To borrow $100 of USDC, you might need to deposit $150 worth of ETH. This protects the protocol from default without needing credit scores.",
      "components": {
        "title": "🏦 Major Protocols",
        "items": [
          {"title": "Aave", "desc": "The market leader. Offers Flash Loans, stable/variable rates, and supports multiple chains."},
          {"title": "Compound", "desc": "Pioneer of the algorithmic interest rate model. Users receive cTokens representing their deposit."},
          {"title": "Spark / Morpho", "desc": "Newer protocols offering better capital efficiency or direct peer-to-peer matching options."},
          {"title": "Liquidation", "desc": "The mechanism where your collateral is sold by the protocol if its value falls too low."}
        ]
      },
      "crypto": {
        "title": "🔄 The Lifecycle",
        "list": [
          "**Deposit**: You supply assets (e.g., WBTC) to the protocol and earn interest.",
          "**Collateralize**: You enable your deposit to be used as collateral.",
          "**Borrow**: You take out a loan in another asset (e.g., USDT) against your collateral.",
          "**Repay**: You pay back the loan + interest to unlock your collateral.",
          "**Health Factor**: A metric (e.g., > 1.0) showing safety. If it drops below 1, you get liquidated."
        ]
      }
    },
    "es": {
      "p1": "En DeFi, los préstamos son Peer-to-Pool. En lugar de prestar a una persona específica, prestas a un Contrato Inteligente (un Pool de Liquidez). Los prestatarios toman prestado de este pool proveyendo **Garantía (Collateral)**.",
      "p2": "Este sistema está **Sobre-Colateralizado**. Para pedir prestados $100 de USDC, podrías necesitar depositar $150 en valor de ETH. Esto protege al protocolo del impago sin necesitar historial crediticio.",
      "components": {
        "title": "🏦 Protocolos Principales",
        "items": [
          {"title": "Aave", "desc": "Líder del mercado. Ofrece Préstamos Flash, tasas estables/variables y soporta múltiples cadenas."},
          {"title": "Compound", "desc": "Pionero del modelo algorítmico de tasas de interés. Los usuarios reciben cTokens representando su depósito."},
          {"title": "Spark / Morpho", "desc": "Protocolos más nuevos ofreciendo mejor eficiencia de capital u opciones peer-to-peer directas."},
          {"title": "Liquidación", "desc": "El mecanismo donde tu garantía es vendida por el protocolo si su valor cae demasiado bajo."}
        ]
      },
      "crypto": {
        "title": "🔄 El Ciclo de Vida",
        "list": [
          "**Depósito**: Suministras activos (ej. WBTC) al protocolo y ganas interés.",
          "**Colateralizar**: Habilitas tu depósito para ser usado como garantía.",
          "**Préstamo**: Tomas un préstamo en otro activo (ej. USDT) contra tu garantía.",
          "**Repago**: Pagas el préstamo + interés para desbloquear tu garantía.",
          "**Factor de Salud**: Una métrica (ej. > 1.0) mostrando seguridad. Si cae bajo 1, eres liquidado."
        ]
      }
    }
  }$$
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 3: Yield Farming
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'defi-deep-dive', 
  'yield-farming', 
  3, 
  '{"en": "Yield Farming", "es": "Yield Farming"}', 
  '{"en": "Maximizing returns", "es": "Maximizando retornos"}',
  $${
    "en": {
      "p1": "Yield Farming is the practice of moving capital around DeFi to maximize return on investment. It typically involves earning 'governance tokens' as rewards for providing liquidity, on top of standard interest/fees.",
      "p2": "Example: You deposit ETH/USDC into a Uniswap pool. You earn trading fees. Uniswap might ALSO pay you UNI tokens as an incentive. You then stake those UNI tokens elsewhere to earn more yield.",
      "components": {
        "title": "🚜 Strategies",
        "items": [
          {"title": "Liquidity Mining", "desc": "Providing liquidity to DEXs to earn trading fees + Governance Tokens."},
          {"title": "Staking", "desc": "Locking tokens in a Proof-of-Stake network or governance contract for rewards."},
          {"title": "Leveraged Farming", "desc": "Borrowing funds to farm with a larger position. High risk, high reward."},
          {"title": "Looping", "desc": "Deposit ETH -> Borrow USDC -> Buy ETH -> Deposit ETH. Repeat to multiply exposure."}
        ]
      },
      "pow": {
        "title": "⚠️ Key Risks",
        "list": [
          "**Impermanent Loss**: Losing value compared to just holding tokens due to price divergence in liquidity pools.",
          "**Smart Contract Bug**: If the farm contract gets hacked, you lose everything.",
          "**Rug Pull**: Developers mint infinite tokens and dump on the market, crashing the price to zero.",
          "**Liquidation Cascade**: If leveraged, a small price drop can wipe out your entire position."
        ]
      }
    },
    "es": {
      "p1": "El Yield Farming es la práctica de mover capital por DeFi para maximizar el retorno de inversión. Típicamente involucra ganar 'tokens de gobernanza' como recompensas por proveer liquidez, encima de intereses/tarifas estándar.",
      "p2": "Ejemplo: Depositas ETH/USDC en un pool de Uniswap. Ganas tarifas de trading. Uniswap podría ADEMÁS pagarte tokens UNI como incentivo. Luego haces staking de esos tokens UNI en otro lado para ganar más.",
      "components": {
        "title": "🚜 Estrategias",
        "items": [
          {"title": "Minería de Liquidez", "desc": "Proveer liquidez a DEXs para ganar tarifas + Tokens de Gobernanza."},
          {"title": "Staking", "desc": "Bloquear tokens en una red Proof-of-Stake o contrato de gobernanza por recompensas."},
          {"title": "Farming Apalancado", "desc": "Pedir prestado fondos para farmear con una posición mayor. Alto riesgo, alta recompensa."},
          {"title": "Looping", "desc": "Depositar ETH -> Pedir USDC -> Comprar ETH -> Depositar ETH. Repetir para multiplicar exposición."}
        ]
      },
      "pow": {
        "title": "⚠️ Riesgos Clave",
        "list": [
          "**Pérdida Impermanente**: Perder valor comparado con solo mantener tokens debido a divergencia de precios en pools.",
          "**Bug de Contrato Inteligente**: Si el contrato es hackeado, pierdes todo.",
          "**Rug Pull**: Desarrolladores mintean tokens infinitos y venden todo, colapsando el precio a cero.",
          "**Cascada de Liquidación**: Si estás apalancado, una pequeña caída de precio puede eliminar tu posición entera."
        ]
      }
    }
  }$$
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 4: Liquidity Pools & AMMs
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'defi-deep-dive', 
  'liquidity-pools', 
  4, 
  '{"en": "Liquidity Pools (AMMs)", "es": "Pools de Liquidez (AMMs)"}', 
  '{"en": "Automated Market Makers logic", "es": "Lógica de Creadores de Mercado Automatizados"}',
  $${
    "en": {
      "p1": "Automated Market Makers (AMMs) like Uniswap replaced the traditional Order Book (buyers vs sellers) with Liquidity Pools. A pool is a smart contract holding two assets (e.g. ETH and USDC).",
      "p2": "Traders trade AGAINST the pool. The price is determined by a formula, typically **x * y = k** (Constant Product Formula). As you buy ETH from the pool (removing ETH), the price of ETH increases exponentially to balance the pool.",
      "components": {
        "title": "🧪 The Math",
        "items": [
          {"title": "x", "desc": "Amount of Token A in the pool"},
          {"title": "y", "desc": "Amount of Token B in the pool"},
          {"title": "k", "desc": "The constant product. This number must remain unchanged during trades."},
          {"title": "Slippage", "desc": "The difference between expected price and execution price, caused by large orders moving the 'k' curve."}
        ]
      },
      "crypto": {
        "title": "📉 Impermanent Loss Explained",
        "list": [
          "If you deposit 1 ETH ($2000) and 2000 USDC.",
          "If ETH price goes to $4000 outside the pool, arbitrageurs will buy cheap ETH from your pool until pool price matches market.",
          "You end up with LESS ETH and MORE USDC than you started.",
          "Your total value is HIGHER than start, but LOWER than if you had just held the 1 ETH in your wallet.",
          "This difference is called **Impermanent Loss** (IL)."
        ]
      }
    },
    "es": {
      "p1": "Los Creadores de Mercado Automatizados (AMMs) como Uniswap reemplazaron el Libro de Órdenes tradicional (compradores vs vendedores) con Pools de Liquidez. Un pool es un contrato inteligente conteniendo dos activos (ej. ETH y USDC).",
      "p2": "Los traders operan CONTRA el pool. El precio es determinado por una fórmula, típicamente **x * y = k** (Fórmula de Producto Constante). Al comprar ETH del pool (quitando ETH), el precio del ETH sube exponencialmente para equilibrar el pool.",
      "components": {
        "title": "🧪 La Matemática",
        "items": [
          {"title": "x", "desc": "Cantidad de Token A en el pool"},
          {"title": "y", "desc": "Cantidad de Token B en el pool"},
          {"title": "k", "desc": "El producto constante. Este número debe permanecer sin cambios durante trades."},
          {"title": "Slippage", "desc": "La diferencia entre precio esperado y ejecución, causada por grandes órdenes moviendo la curva 'k'."}
        ]
      },
      "crypto": {
        "title": "📉 Pérdida Impermanente Explicada",
        "list": [
          "Si depositas 1 ETH ($2000) y 2000 USDC.",
          "Si el precio de ETH va a $4000 fuera del pool, arbitrajistas comprarán ETH barato de tu pool hasta que el precio iguale el mercado.",
          "Terminas con MENOS ETH y MÁS USDC de lo que empezaste.",
          "Tu valor total es MAYOR que al inicio, pero MENOR que si solo hubieras mantenido el 1 ETH en tu wallet.",
          "Esta diferencia es llamada **Pérdida Impermanente** (IL)."
        ]
      }
    }
  }$$
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 5: Risk Management
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'defi-deep-dive', 
  'risks', 
  5, 
  '{"en": "DeFi Risk Management", "es": "Gestión de Riesgos DeFi"}', 
  '{"en": "How to stay safe", "es": "Cómo mantenerse seguro"}',
  $${
    "en": {
      "p1": "DeFi yields are high because risks are high. Professional DeFi users spend more time analyzing risk than chasing yield.",
      "components": {
        "title": "🛡️ Risk Types",
        "items": [
          {"title": "Smart Contract Risk", "desc": "Bugs in the code allowing hackers to drain funds. Mitigation: Check audits (Certik, Trail of Bits)."},
          {"title": "Oracle Risk", "desc": "If the price feed fails (e.g. flash loan attack), your position could be wrongly liquidated."},
          {"title": "Peg Risk", "desc": "Stablecoins (USDT, USDC, DAI) losing their $1.00 value during market panic."},
          {"title": "Admin Key Risk", "desc": "Can developers upgrade the contract to steal funds? Check if it is a multisig or timelock."}
        ]
      },
      "p2": "**DeFi Insurance**: Protocols like Nexus Mutual allow you to buy cover against smart contract hacks. If the protocol is hacked, the mutual pays you back. This reduces yield but ensures survival."
    },
    "es": {
      "p1": "Los rendimientos en DeFi son altos porque los riesgos son altos. Los usuarios profesionales de DeFi pasan más tiempo analizando riesgos que persiguiendo rendimientos.",
      "components": {
        "title": "🛡️ Tipos de Riesgo",
        "items": [
          {"title": "Riesgo de Contrato", "desc": "Bugs en el código permitiendo a hackers drenar fondos. Mitigación: Revisa auditorías (Certik, Trail of Bits)."},
          {"title": "Riesgo de Oráculo", "desc": "Si el feed de precios falla (ej. ataque flash loan), tu posición podría ser liquidada erróneamente."},
          {"title": "Riesgo de Peg", "desc": "Stablecoins (USDT, USDC, DAI) perdiendo su valor de $1.00 durante pánico de mercado."},
          {"title": "Riesgo de Llave Admin", "desc": "¿Pueden los devs actualizar el contrato para robar fondos? Revisa si es multisig o timelock."}
        ]
      },
      "p2": "**Seguro DeFi**: Protocolos como Nexus Mutual te permiten comprar cobertura contra hackeos de contratos. Si el protocolo es hackeado, la mutual te paga. Esto reduce rendimiento pero asegura supervivencia."
    }
  }$$
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 6: Portfolio Strategies
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'defi-deep-dive', 
  'strategies', 
  6, 
  '{"en": "Portfolio Strategies", "es": "Estrategias de Portafolio"}', 
  '{"en": "Building your stack", "es": "Construyendo tu stack"}',
  $${
    "en": {
      "p1": "A balanced DeFi portfolio mixes stable yields with higher-risk farming. Never go 100% into “degen” plays.",
      "components": {
        "title": "💰 Portfolio Models",
        "items": [
          {"title": "Conservative (Low Risk)", "desc": "70% Stablecoins in Aave/Compound (Lending). 30% Blue-chips (ETH/BTC) holding."},
          {"title": "Balanced (Medium Risk)", "desc": "40% Lending. 30% Liquidity Pools on Uniswap (ETH/USDC). 30% Staking."},
          {"title": "Degen (High Risk)", "desc": "Using leverage, farming new unproven tokens, and hunting high APYs. Treat this money as lost."}
        ]
      },
      "crypto": {
        "title": "💡 Pro Tips",
        "list": [
          "**Revoke Approvals**: Regularly use revoke.cash to remove allowances for old contracts.",
          "**Hardware Wallet**: Always use a Ledger/Trezor for your main vault.",
          "**Gas Fees**: Don''t farm with $100 on Ethereum L1. Gas fees will eat your profits. Use L2s like Arbitrum/Optimism.",
          "**Impermanent Loss**: Avoid providing liquidity for volatile pairs (e.g. ETH/PEPE) unless you understand the math."
        ]
      }
    },
    "es": {
      "p1": "Un portafolio DeFi balanceado mezcla rendimientos estables con farming de alto riesgo. Nunca vayas 100% en jugadas “degen”.",
      "components": {
        "title": "💰 Modelos de Portafolio",
        "items": [
          {"title": "Conservador (Bajo Riesgo)", "desc": "70% Stablecoins en Aave/Compound (Lending). 30% Blue-chips (ETH/BTC) holding."},
          {"title": "Balanceado (Riesgo Medio)", "desc": "40% Lending. 30% Pools de Liquidez en Uniswap (ETH/USDC). 30% Staking."},
          {"title": "Degen (Alto Riesgo)", "desc": "Usar apalancamiento, farmear tokens nuevos no probados y cazar APYs altos. Trata este dinero como perdido."}
        ]
      },
      "crypto": {
        "title": "💡 Consejos Pro",
        "list": [
          "**Revocar Aprobaciones**: Usa regularmente revoke.cash para quitar permisos de contratos viejos.",
          "**Hardware Wallet**: Siempre usa un Ledger/Trezor para tu bóveda principal.",
          "**Gas Fees**: No hagas farming con $100 en Ethereum L1. El gas comerá tus ganancias. Usa L2s como Arbitrum/Optimism.",
          "**Pérdida Impermanente**: Evita proveer liquidez para pares volátiles (ej. ETH/PEPE) a menos que entiendas la matemática."
        ]
      }
    }
  }$$
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 7: FAQs
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'defi-deep-dive', 
  'faqs', 
  7, 
  '{"en": "DeFi FAQs", "es": "FAQs DeFi"}', 
  '{"en": "Common questions", "es": "Preguntas comunes"}',
  $${
    "en": {
      "p1": "Answers to the most common questions about Decentralized Finance.",
      "faqs": {
        "title": "❓ DeFi Questions",
        "items": [
          {"title": "Is DeFi better than a bank?", "desc": "It allows higher yields and self-custody, but carries higher risk and no insurance (unless bought). It is different, not strictly 'better' for everyone."},
          {"title": "Can I lose more than I deposit?", "desc": "In spot trading/farming, no. But with LEVERAGE, yes, you can get liquidated and lose 100% of your deposit (but usually not more than that in DeFi due to liquidation logic)."},
          {"title": "What is reliable APY?", "desc": "Anything above 5-10% usually carries risk. If you see 1000% APY, the token price is likely crashing fast."},
          {"title": "Do I need KYC?", "desc": "Generally no. Most DeFi protocols are permissionless. Some 'Pro' pools might require it for compliance."},
          {"title": "What is a Flash Loan?", "desc": "An uncollateralized loan that must be borrowed and repaid in the SAME transaction block. Used for arbitrage."},
          {"title": "How do I pay taxes?", "desc": "DeFi taxes are complex. Every swap or claim of rewards is often a taxable event. Use software like Koinly."},
          {"title": "Which chain is best for DeFi?", "desc": "Ethereum has most liquidity but high fees. Arbitrum/Optimism/Base are great for lower fees. Solana provides speed."},
          {"title": "What is TVL?", "desc": "Total Value Locked. A metric showing how much money is inside a protocol. Higher TVL = usually safer/more adopted."},
          {"title": "Can I do DeFi on my phone?", "desc": "Yes, via mobile wallets like MetaMask or Rainbow. But be careful with security on mobile devices."},
          {"title": "What if a protocol gets hacked?", "desc": "If you don't have insurance, funds are likely lost. Sometimes protocols have a 'Treasury' to refund users, but not always."}
        ]
      }
    },
    "es": {
      "p1": "Respuestas a las preguntas más comunes sobre Finanzas Descentralizadas.",
      "faqs": {
        "title": "❓ Preguntas DeFi",
        "items": [
          {"title": "¿Es DeFi mejor que un banco?", "desc": "Permite mayores rendimientos y autocustodia, pero conlleva mayor riesgo y sin seguro (a menos que se compre). Es diferente, no estrictamente 'mejor' para todos."},
          {"title": "¿Puedo perder más de lo que deposito?", "desc": "En trading spot/farming, no. Pero con APALANCAMIENTO, sí, puedes ser liquidado y perder el 100% de tu depósito."},
          {"title": "¿Qué es un APY confiable?", "desc": "Cualquier cosa sobre 5-10% usualmente conlleva riesgo. Si ves 1000% APY, el precio del token probablemente está colapsando rápido."},
          {"title": "¿Necesito KYC?", "desc": "Generalmente no. La mayoría de protocolos DeFi son sin permiso. Algunos pools 'Pro' podrían requerirlo."},
          {"title": "¿Qué es un Préstamo Flash?", "desc": "Un préstamo sin garantía que debe ser tomado y pagado en el MISMO bloque de transacción. Usado para arbitraje."},
          {"title": "¿Cómo pago impuestos?", "desc": "Los impuestos DeFi son complejos. Cada swap o reclamo de recompensas es a menudo un evento imponible. Usa software como Koinly."},
          {"title": "¿Qué cadena es mejor para DeFi?", "desc": "Ethereum tiene más liquidez pero altas tarifas. Arbitrum/Optimism/Base son geniales para tarifas bajas. Solana provee velocidad."},
          {"title": "¿Qué es TVL?", "desc": "Valor Total Bloqueado. Una métrica mostrando cuánto dinero hay en un protocolo. Mayor TVL = usualmente más seguro/adoptado."},
          {"title": "¿Puedo hacer DeFi en mi celular?", "desc": "Sí, vía wallets móviles como MetaMask o Rainbow. Pero ten cuidado con la seguridad en dispositivos móviles."},
          {"title": "¿Qué pasa si hackean un protocolo?", "desc": "Si no tienes seguro, los fondos probablemente se pierden. A veces los protocolos tienen una 'Tesorería' para reembolsar, pero no siempre."}
        ]
      }
    }
  }$$
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;
