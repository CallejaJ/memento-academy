-- Portfolio Management Course Seed

-- 1. Portfolio Basics (Definition + Goals Layout)
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES (
  'portfolio-management',
  'portfolio-basics',
  1,
  '{"en": "Portfolio Basics", "es": "Fundamentos del Portafolio"}',
  '{"en": "Understanding crypto portfolios", "es": "Entendiendo portafolios cripto"}',
  '{
    "en": {
      "intro": "A crypto portfolio is a collection of digital assets managed to achieve financial goals. Unlike a simple wallet, a portfolio implies a strategy.",
      "portfolio": {
        "title": "Portfolio Components",
        "blue": { "title": "Blue Chips", "desc": "Established assets (BTC, ETH)" },
        "mid": { "title": "Mid Caps", "desc": "Growth potential (SOL, DOT)" },
        "small": { "title": "Small Caps", "desc": "High risk/reward (New alts)" },
        "alloc": { "blue": "50-60%", "mid": "30-40%", "small": "10-20%" }
      },
      "goals": {
        "title": "Define Your Strategy",
        "items": [
          { "title": "HODL (Passive)", "desc": "Long-term accumulation, ignoring short-term volatility." },
          { "title": "Active Trading", "desc": "Frequent buying/selling to capture market swings." },
          { "title": "Yield Farming", "desc": "Maximizing returns through DeFi protocols and staking." }
        ]
      }
    },
    "es": {
      "intro": "Un portafolio cripto es una colección de activos digitales gestionados para alcanzar objetivos financieros. A diferencia de una wallet simple, un portafolio implica una estrategia.",
      "portfolio": {
        "title": "Componentes del Portafolio",
        "blue": { "title": "Blue Chips", "desc": "Activos establecidos (BTC, ETH)" },
        "mid": { "title": "Mid Caps", "desc": "Potencial de crecimiento (SOL, DOT)" },
        "small": { "title": "Small Caps", "desc": "Alto riesgo/retorno (Nuevas alts)" },
        "alloc": { "blue": "50-60%", "mid": "30-40%", "small": "10-20%" }
      },
      "goals": {
        "title": "Define tu Estrategia",
        "items": [
          { "title": "HODL (Pasivo)", "desc": "Acumulación a largo plazo, ignorando la volatilidad a corto plazo." },
          { "title": "Trading Activo", "desc": "Compra/venta frecuente para capturar movimientos del mercado." },
          { "title": "Yield Farming", "desc": "Maximizar retornos mediante protocolos DeFi y staking." }
        ]
      }
    }
  }'::jsonb
) ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content;

-- 2. Diversification (Types List + Warning)
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES (
  'portfolio-management',
  'diversification',
  2,
  '{"en": "Diversification", "es": "Diversificación"}',
  '{"en": "Risk reduction strategies", "es": "Estrategias de reducción de riesgo"}',
  '{
    "en": {
      "intro": "Don''t put all your eggs in one basket. Diversification reduces risk by spreading exposure across different assets and sectors.",
      "diversification": {
        "title": "Types of Diversification",
        "list": [
          "**Asset Class:** Crypto, Stocks, Real Estate, Cash.",
          "**Market Cap:** Mix of Large (Stable) vs Small (Growth) caps.",
          "**Sector:** L1s (ETH), DeFi (UNI), Gaming (IMX), Infrastructure (LINK).",
          "**Time:** DCA (Dollar Cost Averaging) to diversify entry price."
        ]
      },
      "warn": {
        "title": "Over-Diversification",
        "list": [
          "Holding too many coins (20+) makes it hard to track news and updates.",
          "Dilutes potential gains from your best performers.",
          "Increases transaction fees and complexity."
        ]
      }
    },
    "es": {
      "intro": "No pongas todos los huevos en la misma canasta. La diversificación reduce el riesgo al repartir la exposición entre diferentes activos y sectores.",
      "diversification": {
        "title": "Tipos de Diversificación",
        "list": [
          "**Clase de Activo:** Cripto, Acciones, Inmuebles, Efectivo.",
          "**Capitalización de Mercado:** Mezcla de Grande (Estable) vs Pequeña (Crecimiento).",
          "**Sector:** L1s (ETH), DeFi (UNI), Gaming (IMX), Infraestructura (LINK).",
          "**Tiempo:** DCA (Dollar Cost Averaging) para diversificar el precio de entrada."
        ]
      },
      "warn": {
        "title": "Sobre-Diversificación",
        "list": [
          "Tener demasiadas monedas (20+) hace difícil seguir noticias y actualizaciones.",
          "Diluye las ganancias potenciales de tus mejores activos.",
          "Aumenta las comisiones y la complejidad operativa."
        ]
      }
    }
  }'::jsonb
) ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content;

-- 3. Risk Management (Rules list)
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES (
  'portfolio-management',
  'risk-management',
  3,
  '{"en": "Risk Management", "es": "Gestión de Riesgo"}',
  '{"en": "Protecting your capital", "es": "Protegiendo tu capital"}',
  '{
    "en": {
      "intro": "Protecting your capital is more important than making profits. Without capital, you cannot play the game.",
      "risk": {
        "title": "Golden Rules",
        "list": [
          "**Invest only what you can lose:** Use money you don''t need for rent or bills.",
          "**Take Profits:** Markets don''t go up forever. Set targets to sell.",
          "**Use Stablecoins:** Keep a cash reserve (20-30%) to buy dips.",
          "**Beware of Leverage:** High leverage is the fastest way to lose everything."
        ]
      }
    },
    "es": {
      "intro": "Proteger tu capital es más importante que generar ganancias. Sin capital, no puedes jugar el juego.",
      "risk": {
        "title": "Reglas de Oro",
        "list": [
          "**Invierte solo lo que puedas perder:** Usa dinero que no necesites para alquiler o facturas.",
          "**Toma Ganancias:** Los mercados no suben para siempre. Pon objetivos de venta.",
          "**Usa Stablecoins:** Mantén una reserva (20-30%) para comprar en caídas.",
          "**Cuidado con el Apalancamiento:** El apalancamiento alto es la forma más rápida de perderlo todo."
        ]
      }
    }
  }'::jsonb
) ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content;

-- 4. Rebalancing (Methods: Time vs Threshold)
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES (
  'portfolio-management',
  'rebalancing',
  4,
  '{"en": "Rebalancing", "es": "Rebalanceo"}',
  '{"en": "Adjusting allocations", "es": "Ajustando asignaciones"}',
  '{
    "en": {
      "intro": "Rebalancing acts as an automatic ''buy low, sell high'' strategy. It involves adjusting your portfolio back to its target allocations.",
      "rebalance": {
        "title": "Rebalancing Strategies",
        "grid": [
          { "title": "Time-Based", "desc": "Rebalance on a fixed schedule (e.g., monthly or quarterly). Easy to maintain but may miss market moves." },
          { "title": "Threshold-Based", "desc": "Rebalance when an asset deviates by X% (e.g., if BTC changes by >5%). More efficient but requires active monitoring." }
        ]
      }
    },
    "es": {
      "intro": "El rebalanceo actúa como una estrategia automática de ''comprar barato, vender caro''. Implica ajustar tu portafolio para volver a las asignaciones objetivo.",
      "rebalance": {
        "title": "Estrategias de Rebalanceo",
        "grid": [
          { "title": "Basado en Tiempo", "desc": "Rebalancear en un horario fijo (ej. mensual o trimestral). Fácil de mantener pero puede perder movimientos." },
          { "title": "Basado en Umbral", "desc": "Rebalancear cuando un activo se desvía un X% (ej. si BTC cambia >5%). Más eficiente pero requiere monitoreo activo." }
        ]
      }
    }
  }'::jsonb
) ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content;

-- 5. Tax Optimization (Strategies List)
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES (
  'portfolio-management',
  'tax-optimization',
  5,
  '{"en": "Tax Optimization", "es": "Optimización Fiscal"}',
  '{"en": "Legally reducing tax liability", "es": "Reduciendo impuestos legalmente"}',
  '{
    "en": {
      "intro": "Crypto taxes can eat into your profits. Understanding the basics can save you significant money properly and legally.",
      "tax": {
        "title": "Common Strategies",
        "list": [
          "**Tax-Loss Harvesting:** Selling assets at a loss to offset capital gains liability.",
          "**Long-Term Holding:** In many jurisdictions, holding for >1 year reduces tax rates.",
          "**Cost Basis Methods:** Choosing FIFO, LIFO, or HIFO can impact your tax bill.",
          "**Crypto Loans:** Borrowing against assets avoids taxable events (selling)."
        ]
      }
    },
    "es": {
      "intro": "Los impuestos cripto pueden comerse tus ganancias. Entender los conceptos básicos puede ahorrarte mucho dinero de forma legal.",
      "tax": {
        "title": "Estrategias Comunes",
        "list": [
          "**Tax-Loss Harvesting:** Vender activos en pérdida para compensar ganancias de capital.",
          "**Holding a Largo Plazo:** En muchas jurisdicciones, mantener >1 año reduce la tasa de impuestos.",
          "**Métodos de Coste:** Elegir FIFO, LIFO o HIFO puede impactar tu factura fiscal.",
          "**Préstamos Cripto:** Pedir prestado contra tus activos evita eventos imponibles (ventas)."
        ]
      }
    }
  }'::jsonb
) ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content;

-- 6. Performance Tracking (Metrics List + Success msg)
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES (
  'portfolio-management',
  'performance-tracking',
  6,
  '{"en": "Performance Tracking", "es": "Seguimiento de Rendimiento"}',
  '{"en": "Measuring portfolio health", "es": "Midiendo la salud del portafolio"}',
  '{
    "en": {
      "intro": "You can''t improve what you don''t measure. Use tools and metrics to track your portfolio''s health.",
      "tracking": {
        "title": "Key Metrics",
        "list": [
          { "title": "ROI (Return on Investment)", "desc": "Total profit/loss percentage relative to initial investment." },
          { "title": "Sats Value", "desc": "Is your portfolio outperforming Bitcoin? If not, buying BTC is safer/easier." },
          { "title": "Drawdown", "desc": "The decline from the peak value. Helps measure risk exposure." }
        ]
      },
      "outro": "Congratulations! You have completed the Portfolio Management course. You now have the tools to build a robust and resilient crypto portfolio."
    },
    "es": {
      "intro": "No puedes mejorar lo que no mides. Usa herramientas y métricas para seguir la salud de tu portafolio.",
      "tracking": {
        "title": "Métricas Clave",
        "list": [
          { "title": "ROI (Retorno de Inversión)", "desc": "Porcentaje total de ganancia/pérdida relativo a la inversión inicial." },
          { "title": "Valor en Sats", "desc": "¿Está tu portafolio superando a Bitcoin? Si no, comprar BTC es más seguro y fácil." },
          { "title": "Drawdown", "desc": "La caída desde el valor máximo. Ayuda a medir la exposición al riesgo." }
        ]
      },
      "outro": "¡Felicidades! Has completado el curso de Gestión de Portafolio. Ahora tienes las herramientas para construir un portafolio robusto y resiliente."
    }
  }'::jsonb
) ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content;
