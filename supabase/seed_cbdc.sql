-- =============================================
-- CBDC COURSE - SECTIONS SEED
-- 8 Sections (7 content + 1 FAQs)
-- =============================================

-- SECTION 1: What is a CBDC?
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'cbdc', 
  'what-is-cbdc', 
  1, 
  '{"en": "What is a CBDC?", "es": "¿Qué es una CBDC?"}', 
  '{"en": "Definition and basics", "es": "Definición y conceptos básicos"}',
  '{
    "en": {
      "p1": "A **CBDC** (Central Bank Digital Currency) is digital money issued directly by a central bank. It is the digital equivalent of cash.",
      "p2": "Unlike cryptocurrencies like Bitcoin, CBDCs are **controlled by the government** and have the backing of the State. They are not decentralized.",
      "components": {
        "title": "Key Characteristics",
        "items": [
          {"title": "Issued by State", "desc": "Created and backed by the Central Bank (e.g., Fed, ECB)"},
          {"title": "Centralized", "desc": "A single entity controls the supply and rules"},
          {"title": "Digital Cash", "desc": "Intended to function exactly like physical banknotes but online"},
          {"title": "Legal Tender", "desc": "Must be accepted as payment by law in its jurisdiction"}
        ]
      }
    },
    "es": {
      "p1": "Una **CBDC** (Moneda Digital de Banco Central) es dinero digital emitido directamente por un banco central. Es el equivalente digital del efectivo.",
      "p2": "A diferencia de criptomonedas como Bitcoin, las CBDC son **controladas por el gobierno** y tienen el respaldo del Estado. No son descentralizadas.",
      "components": {
        "title": "Características Clave",
        "items": [
          {"title": "Emitida por el Estado", "desc": "Creada y respaldada por el Banco Central (ej. Fed, BCE)"},
          {"title": "Centralizada", "desc": "Una entidad única controla el suministro y las reglas"},
          {"title": "Efectivo Digital", "desc": "Diseñada para funcionar exactamente como billetes físicos pero online"},
          {"title": "Curso Legal", "desc": "Debe ser aceptada como pago por ley en su jurisdicción"}
        ]
      }
    }
  }'
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 2: Privacy Concerns
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'cbdc', 
  'privacy', 
  2, 
  '{"en": "Privacy Deep Dive", "es": "Profundizando en Privacidad"}', 
  '{"en": "The real concern: programmability", "es": "La preocupación real: programabilidad"}',
  '{
    "en": {
      "p1": "The biggest debate surrounding CBDCs is about **programmability**. Since CBDCs are code, the issuer (the Central Bank) can program rules into the money itself.",
      "infographic": {
        "src": "/images/diagrams/cbdc_flow_diagram.png",
        "alt": "How Programmable Money Works",
        "caption": "CBDC Flow: Central Bank to Your Wallet"
      },
      "components": {
        "title": "Potential Risks",
        "items": [
          {"title": "Expiration Dates", "desc": "Money that expires if not spent by a certain date to stimulate spending"},
          {"title": "Purchase Restrictions", "desc": "Blocking purchases of specific goods (alcohol, travel) based on rules"},
          {"title": "Negative Interest", "desc": "Accounts could be charged fees automatically to discourage saving"},
          {"title": "Total Surveillance", "desc": "The central bank could see every single transaction you make"}
        ]
      }
    },
    "es": {
      "p1": "El mayor debate sobre las CBDC gira en torno a la **programabilidad**. Dado que son código, el emisor (Banco Central) puede programar reglas en el dinero mismo.",
      "infographic": {
        "src": "/images/diagrams/cbdc_flow_diagram_es.png",
        "alt": "Cómo Funciona el Dinero Programable",
        "caption": "Flujo CBDC: Banco Central a Tu Wallet"
      },
      "components": {
        "title": "Riesgos Potenciales",
        "items": [
          {"title": "Fechas de Caducidad", "desc": "Dinero que caduca si no se gasta en cierta fecha para estimular el consumo"},
          {"title": "Restricciones de Compra", "desc": "Bloquear compras de ciertos bienes (alcohol, viajes) basado en reglas"},
          {"title": "Interés Negativo", "desc": "Las cuentas podrían cobrar tarifas automáticamente para desincentivar el ahorro"},
          {"title": "Vigilancia Total", "desc": "El banco central podría ver cada transacción que haces"}
        ]
      }
    }
  }'
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 3: CBDC vs Crypto vs Cash
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'cbdc', 
  'comparison', 
  3, 
  '{"en": "CBDC vs Crypto vs Cash", "es": "CBDC vs Crypto vs Efectivo"}', 
  '{"en": "Understanding the differences", "es": "Entendiendo las diferencias"}',
  '{
    "en": {
      "p1": "It is crucial to understand that CBDCs are the opposite of cryptocurrencies like Bitcoin in terms of control and philosophy.",
      "money_comparison": {
        "title": "Cash vs Bitcoin vs CBDC",
        "columns": [
          { "name": "Cash", "color": "bg-green-600", "attrs": [
            { "label": "Control", "value": "You" },
            { "label": "Privacy", "value": "Anonymous" },
            { "label": "Supply", "value": "Unlimited" },
            { "label": "Offline", "value": "Yes" }
          ]},
          { "name": "Bitcoin", "color": "bg-orange-500", "attrs": [
            { "label": "Control", "value": "Decentralized" },
            { "label": "Privacy", "value": "Pseudonymous" },
            { "label": "Supply", "value": "Fixed (21M)" },
            { "label": "Offline", "value": "No" }
          ]},
          { "name": "CBDC", "color": "bg-blue-600", "attrs": [
            { "label": "Control", "value": "Central Bank" },
            { "label": "Privacy", "value": "Fully Traceable" },
            { "label": "Supply", "value": "Unlimited" },
            { "label": "Offline", "value": "Maybe" }
          ]}
        ]
      }
    },
    "es": {
      "p1": "Es crucial entender que las CBDC son lo opuesto a criptomonedas como Bitcoin en términos de control y filosofía.",
      "money_comparison": {
        "title": "Efectivo vs Bitcoin vs CBDC",
        "columns": [
          { "name": "Efectivo", "color": "bg-green-600", "attrs": [
            { "label": "Control", "value": "Tú" },
            { "label": "Privacidad", "value": "Anónimo" },
            { "label": "Suministro", "value": "Ilimitado" },
            { "label": "Offline", "value": "Sí" }
          ]},
          { "name": "Bitcoin", "color": "bg-orange-500", "attrs": [
            { "label": "Control", "value": "Descentralizado" },
            { "label": "Privacidad", "value": "Seudónimo" },
            { "label": "Suministro", "value": "Fijo (21M)" },
            { "label": "Offline", "value": "No" }
          ]},
          { "name": "CBDC", "color": "bg-blue-600", "attrs": [
            { "label": "Control", "value": "Banco Central" },
            { "label": "Privacidad", "value": "Totalmente Rastreable" },
            { "label": "Suministro", "value": "Ilimitado" },
            { "label": "Offline", "value": "Tal vez" }
          ]}
        ]
      }
    }
  }'
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 4: The Digital Euro
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'cbdc', 
  'digital-euro', 
  4, 
  '{"en": "The Digital Euro", "es": "El Euro Digital"}', 
  '{"en": "What Europe is planning", "es": "Lo que planea Europa"}',
  '{
    "en": {
      "p1": "The European Central Bank is developing the **Digital Euro**, expected by 2027-2028. It is marketed as a complement to cash, not a replacement.",
      "components": {
        "title": "🇪🇺 Planned Features",
        "items": [
          {"title": "Instant Payments", "desc": "Settlement in seconds across the entire Eurozone"},
          {"title": "Offline Mode", "desc": "Ability to pay without internet for small amounts"},
          {"title": "Holding Limits", "desc": "Users may be limited to holding ~€3,000 to protect commercial banks"},
          {"title": "Privacy (Tiered)", "desc": "Small offline payments private; larger online ones tracked"}
        ]
      }
    },
    "es": {
      "p1": "El Banco Central Europeo está desarrollando el **Euro Digital**, esperado para 2027-2028. Se promociona como un complemento al efectivo, no un reemplazo.",
      "components": {
        "title": "🇪🇺 Funciones Planeadas",
        "items": [
          {"title": "Pagos Instantáneos", "desc": "Liquidación en segundos en toda la Eurozona"},
          {"title": "Modo Offline", "desc": "Capacidad de pagar sin internet para cantidades pequeñas"},
          {"title": "Límites de Tenencia", "desc": "Usuarios podrían limitarse a tener ~€3,000 para proteger bancos comerciales"},
          {"title": "Privacidad (Niveles)", "desc": "Pequeños pagos offline privados; grandes pagos online rastreados"}
        ]
      }
    }
  }'
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 5: Global Landscape
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'cbdc', 
  'global-landscape', 
  5, 
  '{"en": "CBDCs Around the World", "es": "CBDC Alrededor del Mundo"}', 
  '{"en": "Who is leading the race?", "es": "¿Quién lidera la carrera?"}',
  '{
    "en": {
      "p1": "Most central banks are researching or piloting CBDCs. The race is on to define the future of sovereign money.",
      "global_cbdc_status": {
        "title": "Global CBDC Status",
        "countries": [
          { "flag": "🇨🇳", "name": "China", "cbdc": "e-CNY", "status": "live", "users": "260M+" },
          { "flag": "🇧🇸", "name": "Bahamas", "cbdc": "Sand Dollar", "status": "live", "users": "National" },
          { "flag": "🇧🇷", "name": "Brazil", "cbdc": "Drex", "status": "pilot", "users": "Testing" },
          { "flag": "��", "name": "EU", "cbdc": "Digital Euro", "status": "development", "users": "2027" },
          { "flag": "🇺🇸", "name": "USA", "cbdc": "Digital Dollar", "status": "research", "users": "TBD" }
        ]
      }
    },
    "es": {
      "p1": "La mayoría de bancos centrales están investigando o probando CBDCs. La carrera ha comenzado para definir el futuro del dinero soberano.",
      "global_cbdc_status": {
        "title": "Estado Global de CBDCs",
        "countries": [
          { "flag": "🇨🇳", "name": "China", "cbdc": "e-CNY", "status": "live", "users": "260M+" },
          { "flag": "🇧🇸", "name": "Bahamas", "cbdc": "Sand Dollar", "status": "live", "users": "Nacional" },
          { "flag": "🇧🇷", "name": "Brasil", "cbdc": "Drex", "status": "pilot", "users": "Pruebas" },
          { "flag": "🇪🇺", "name": "UE", "cbdc": "Euro Digital", "status": "development", "users": "2027" },
          { "flag": "🇺🇸", "name": "EE.UU.", "cbdc": "Dólar Digital", "status": "research", "users": "Por definir" }
        ]
      }
    }
  }'
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 6: Implementation Timeline
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'cbdc', 
  'timeline', 
  6, 
  '{"en": "Implementation Timeline", "es": "Cronograma de Implementación"}', 
  '{"en": "When will it happen?", "es": "¿Cuándo sucederá?"}',
  '{
    "en": {
      "p1": "The transition to CBDCs is gradual but accelerating. We are currently in the Pilot Phase globally.",
      "cbdc_timeline": {
        "title": "CBDC Implementation Timeline",
        "phases": [
          { "year": "2020", "label": "First Launch", "desc": "Bahamas Sand Dollar", "status": "complete" },
          { "year": "2022", "label": "Major Pilots", "desc": "China Olympics e-CNY", "status": "complete" },
          { "year": "2024", "label": "Legal Frameworks", "desc": "EU & UK finalize laws", "status": "current" },
          { "year": "2027", "label": "Mass Rollout", "desc": "Digital Euro launch", "status": "future" },
          { "year": "2030", "label": "Global Adoption", "desc": "Most economies have CBDCs", "status": "future" }
        ]
      }
    },
    "es": {
      "p1": "La transición a CBDCs es gradual pero se acelera. Actualmente estamos en la Fase Piloto globalmente.",
      "cbdc_timeline": {
        "title": "Cronograma de Implementación CBDC",
        "phases": [
          { "year": "2020", "label": "Primer Lanzamiento", "desc": "Bahamas Sand Dollar", "status": "complete" },
          { "year": "2022", "label": "Pilotos Mayores", "desc": "China Olimpiadas e-CNY", "status": "complete" },
          { "year": "2024", "label": "Marcos Legales", "desc": "UE y UK finalizan leyes", "status": "current" },
          { "year": "2027", "label": "Despliegue Masivo", "desc": "Lanzamiento Euro Digital", "status": "future" },
          { "year": "2030", "label": "Adopción Global", "desc": "Mayoría de economías tienen CBDCs", "status": "future" }
        ]
      }
    }
  }'
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 7: Recommendations
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'cbdc', 
  'recommendations', 
  7, 
  '{"en": "Our Recommendation", "es": "Nuestra Recomendación"}', 
  '{"en": "How to prepare", "es": "Cómo prepararse"}',
  '{
    "en": {
      "p1": "Regardless of your opinion on CBDCs, they are likely coming. The best defense is being informed and diversified.",
      "components": {
        "title": "Action Plan",
        "items": [
          {"title": "Stay Informed", "desc": "Understand the features of your local CBDC as they are announced"},
          {"title": "Diversify", "desc": "Dont keep all your wealth in one system. Mix cash, cardio, crypto, and traditional finance"},
          {"title": "Self-Custody", "desc": "Learning to hold your own crypto keys (Bitcoin) is your insurance policy"},
          {"title": "Know Your Rights", "desc": "Advocate for privacy and cash preservation laws in your country"}
        ]
      }
    },
    "es": {
      "p1": "Independientemente de tu opinión sobre las CBDC, es probable que lleguen. La mejor defensa es estar informado y diversificado.",
      "components": {
        "title": "Plan de Acción",
        "items": [
          {"title": "Mantente Informado", "desc": "Entiende las funciones de tu CBDC local conforme se anuncien"},
          {"title": "Diversifica", "desc": "No mantengas toda tu riqueza en un solo sistema. Mezcla efectivo, crypto, y finanzas tradicionales"},
          {"title": "Autocustodia", "desc": "Aprender a tener tus propias claves crypto (Bitcoin) es tu póliza de seguro"},
          {"title": "Conoce tus Derechos", "desc": "Aboga por leyes de privacidad y preservación del efectivo en tu país"}
        ]
      }
    }
  }'
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 8: FAQs
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'cbdc', 
  'faqs', 
  8, 
  '{"en": "Frequently Asked Questions", "es": "Preguntas Frecuentes"}', 
  '{"en": "Common questions about digital currency", "es": "Preguntas comunes sobre moneda digital"}',
  '{
    "en": {
      "p1": "Here are answers to the deeper questions people usually ask about the future of money.",
      "faqs": {
        "title": "❓ CBDC FAQs",
        "items": [
          {"title": "Will cash disappear?", "desc": "That is the fear. Central banks say no, but usage is dropping naturally. CBDCs could accelerate the end of cash."},
          {"title": "Can the government turn off my money?", "desc": "Technically, yes. If CBDCs are programmable, they could block transactions or freeze wallets easier than today."},
          {"title": "Is Bitcoin a CBDC?", "desc": "No! Bitcoin is the opposite. It is decentralized and has no controller. CBDC is centralized and government-run."},
          {"title": "Do I have to use it?", "desc": "Probably. Governments may pay salaries or benefits in CBDC to force adoption eventually."},
          {"title": "Is it safer than a bank?", "desc": "Maybe. You hold a direct claim on the central bank, so no risk of a bank run. But you face privacy risks."},
          {"title": "Can it expire?", "desc": "Technically yes. China has tested expiring money to force people to spend during economic downturns."},
          {"title": "Why do they want this?", "desc": "Control, efficiency, and to compete with crypto. It gives governments better tools to manage the economy."},
          {"title": "Does the US have a digital dollar?", "desc": "Not yet. It is being studied (Project Hamilton), but there is strong political opposition."},
          {"title": "Will it be on a blockchain?", "desc": "Maybe, maybe not. They might use a centralized database because it is faster and they dont need decentralization."},
          {"title": "How can I opt out?", "desc": "Use cash where possible, and hold decentralized assets like Bitcoin or gold that remain outside the system."}
        ]
      }
    },
    "es": {
      "p1": "Aquí hay respuestas a las preguntas profundas que la gente suele hacer sobre el futuro del dinero.",
      "faqs": {
        "title": "❓ FAQs de CBDC",
        "items": [
          {"title": "¿Desaparecerá el efectivo?", "desc": "Ese es el miedo. Los bancos centrales dicen que no, pero su uso cae naturalmente. Las CBDC podrían acelerar el fin del efectivo."},
          {"title": "¿Puede el gobierno apagar mi dinero?", "desc": "Técnicamente, sí. Si las CBDC son programables, podrían bloquear transacciones o congelar wallets más fácil que hoy."},
          {"title": "¿Es Bitcoin una CBDC?", "desc": "¡No! Bitcoin es lo opuesto. Es descentralizado y no tiene controlador. CBDC es centralizada y estatal."},
          {"title": "¿Tengo que usarla?", "desc": "Probablemente. Los gobiernos podrían pagar salarios o beneficios en CBDC para forzar la adopción eventualmente."},
          {"title": "¿Es más seguro que un banco?", "desc": "Tal vez. Tienes un reclamo directo al banco central, así que no hay riesgo de corrida bancaria. Pero enfrentas riesgos de privacidad."},
          {"title": "¿Puede caducar?", "desc": "Técnicamente sí. China ha probado dinero que caduca para forzar a la gente a gastar en crisis económicas."},
          {"title": "¿Por qué quieren esto?", "desc": "Control, eficiencia, y para competir con crypto. Da a los gobiernos mejores herramientas para manejar la economía."},
          {"title": "¿Tiene EE.UU. un dólar digital?", "desc": "Aún no. Se está estudiando (Project Hamilton), pero hay fuerte oposición política."},
          {"title": "¿Estará en una blockchain?", "desc": "Quizás, quizás no. Podrían usar una base de datos centralizada porque es más rápido y no necesitan descentralización."},
          {"title": "¿Cómo puedo salirme?", "desc": "Usa efectivo donde sea posible, y ten activos descentralizados como Bitcoin u oro que permanecen fuera del sistema."}
        ]
      }
    }
  }'
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;
