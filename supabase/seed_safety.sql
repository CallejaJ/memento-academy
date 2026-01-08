-- =============================================
-- SAFETY COURSE - SECTIONS SEED
-- 8 Sections (7 content + 1 FAQs)
-- =============================================

-- SECTION 1: The Golden Rule
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'safety', 
  'golden-rule', 
  1, 
  '{"en": "The Golden Rule", "es": "La Regla de Oro"}', 
  '{"en": "The most important rule in crypto", "es": "La regla más importante en crypto"}',
  '{
    "en": {
      "p1": "The absolute most important rule in all of Web3 security is simple but critical:",
      "p2": "**NEVER share your seed phrase or private key with ANYONE.**",
      "p3": "No legitimate company, tech support, or expert will ever ask for this information. Anyone who asks is trying to steal from you immediately.",
      "security_shield": {
        "title": "Your Security Layers",
        "layers": [
          { "name": "Hardware", "desc": "Ledger/Trezor (Cold Storage)", "color": "bg-emerald-600" },
          { "name": "Software", "desc": "2FA Apps, Password Manager", "color": "bg-blue-600" },
          { "name": "Knowledge", "desc": "Verify URLs, Ignore DMs", "color": "bg-purple-600" }
        ],
        "core": { "label": "SEED PHRASE", "warning": "Never Share!" }
      },
      "components": {
        "title": "Who Will NOT Ask?",
        "items": [
          {"title": "MetaMask Support", "desc": "They will never ask for your seed phrase"},
          {"title": "Ledger / Trezor", "desc": "Hardware wallets never need your online seed input"},
          {"title": "OpenSea / Exchanges", "desc": "Support agents do not need your keys to help you"},
          {"title": "Memento Academy", "desc": "We will never ask for your private keys"}
        ]
      }
    },
    "es": {
      "p1": "La regla absoluta más importante en toda la seguridad Web3 es simple pero crítica:",
      "p2": "**NUNCA compartas tu frase semilla o clave privada con NADIE.**",
      "p3": "Ninguna compañía legítima, soporte técnico o experto te pedirá jamás esta información. Cualquiera que lo pida está intentando robarte inmediatamente.",
      "security_shield": {
        "title": "Tus Capas de Seguridad",
        "layers": [
          { "name": "Hardware", "desc": "Ledger/Trezor (Almacenamiento Frío)", "color": "bg-emerald-600" },
          { "name": "Software", "desc": "Apps 2FA, Gestor Contraseñas", "color": "bg-blue-600" },
          { "name": "Conocimiento", "desc": "Verifica URLs, Ignora DMs", "color": "bg-purple-600" }
        ],
        "core": { "label": "FRASE SEMILLA", "warning": "¡Nunca Compartas!" }
      },
      "components": {
        "title": "¿Quién NO Preguntará?",
        "items": [
          {"title": "Soporte MetaMask", "desc": "Nunca te pedirán tu frase semilla"},
          {"title": "Ledger / Trezor", "desc": "Las hardware wallets no necesitan tu seed online"},
          {"title": "OpenSea / Exchanges", "desc": "Los agentes no necesitan tus claves para ayudarte"},
          {"title": "Memento Academy", "desc": "Nunca te pediremos tus claves privadas"}
        ]
      }
    }
  }'
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 2: Phishing
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'safety', 
  'phishing', 
  2, 
  '{"en": "Phishing Attacks", "es": "Ataques de Phishing"}', 
  '{"en": "Impersonation scams", "es": "Estafas de suplantación"}',
  '{
    "en": {
      "p1": "Phishing involves fake emails, messages, or websites that imitate legitimate platforms to steal your credentials.",
      "components": {
        "title": "🎣 How to spot them",
        "items": [
          {"title": "Fake URLs", "desc": "e.g. metamsk.io instead of metamask.io"},
          {"title": "Urgency", "desc": "Your account will be locked if you dont act NOW"},
          {"title": "Fake Ads", "desc": "Google Ads leading to fake cloned websites"},
          {"title": "Twitter Bots", "desc": "Fake support accounts replying to your tweets"}
        ]
      }
    },
    "es": {
      "p1": "El phishing involucra correos, mensajes o sitios web falsos que imitan plataformas legítimas para robar tus credenciales.",
      "components": {
        "title": "🎣 Cómo detectarlos",
        "items": [
          {"title": "URLs Falsas", "desc": "ej. metamsk.io en lugar de metamask.io"},
          {"title": "Urgencia", "desc": "Tu cuenta será bloqueada si no actúas AHORA"},
          {"title": "Anuncios Falsos", "desc": "Google Ads llevando a sitios clonados"},
          {"title": "Bots de Twitter", "desc": "Cuentas de soporte falsas respondiendo tus tweets"}
        ]
      }
    }
  }'
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 3: Fake Support
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'safety', 
  'fake-support', 
  3, 
  '{"en": "Fake Tech Support", "es": "Soporte Técnico Falso"}', 
  '{"en": "Scammers pretending to help", "es": "Estafadores fingiendo ayudar"}',
  '{
    "en": {
      "p1": "Beware of support agents who contact you first. Legitimate support teams wait for you to open a ticket.",
      "components": {
        "title": "🚨 Common Tactics",
        "items": [
          {"title": "Unsolicited DM", "desc": "They message you first on Discord/Telegram/Twitter"},
          {"title": "Remote Access", "desc": "Asking to install TeamViewer or share your screen"},
          {"title": "Wallet Validation", "desc": "Asking you to validate or sync your wallet on a website"},
          {"title": "Helpful Expert", "desc": "Pretending to be a helpful community member fixing your issue"}
        ]
      }
    },
    "es": {
      "p1": "Cuidado con agentes de soporte que te contactan primero. Los equipos legítimos esperan a que tú abras un ticket.",
      "components": {
        "title": "🚨 Tácticas Comunes",
        "items": [
          {"title": "DM No Solicitado", "desc": "Te escriben primero en Discord/Telegram/Twitter"},
          {"title": "Acceso Remoto", "desc": "Pidiendo instalar TeamViewer o compartir pantalla"},
          {"title": "Validación de Wallet", "desc": "Pidiendo validar o sincronizar tu wallet en un sitio web"},
          {"title": "Experto Amable", "desc": "Fingiendo ser un miembro útil de la comunidad arreglando tu problema"}
        ]
      }
    }
  }'
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 4: Fake Airdrops
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'safety', 
  'fake-airdrops', 
  4, 
  '{"en": "Fake Airdrops", "es": "Airdrops Falsos"}', 
  '{"en": "The malicious token scam", "es": "La estafa del token malicioso"}',
  '{
    "en": {
      "p1": "If you see a random token appear in your wallet worth thousands of dollars that you did not buy, **DO NOT TOUCH IT**.",
      "p2": "This is a common scam. When you try to sell (swap) the token on an exchange, the smart contract you approve will drain your other legitimate funds.",
      "components": {
        "title": "🛡️ Protection Steps",
        "items": [
          {"title": "Ignore It", "desc": "Just let it sit there. Do not interact with it."},
          {"title": "Do Not Swap", "desc": "Approving the token gives it access to your wallet."},
          {"title": "Hide It", "desc": "Use your wallet interface to hide the spam token."},
          {"title": "Check Source", "desc": "Verify on official project socials if an airdrop is real."}
        ]
      }
    },
    "es": {
      "p1": "Si ves un token aleatorio aparecer en tu wallet valiendo miles de dólares que no compraste, **NO LO TOQUES**.",
      "p2": "Esta es una estafa común. Cuando intentas vender (intercambiar) el token en un exchange, el contrato inteligente que apruebas drenará tus otros fondos legítimos.",
      "components": {
        "title": "🛡️ Pasos de Protección",
        "items": [
          {"title": "Ignóralo", "desc": "Solo déjalo ahí. No interactúes con él."},
          {"title": "No Intercambies", "desc": "Aprobar el token le da acceso a tu wallet."},
          {"title": "Ocúltalo", "desc": "Usa la interfaz de tu wallet para ocultar el token spam."},
          {"title": "Verifica Fuente", "desc": "Verifica en redes oficiales del proyecto si un airdrop es real."}
        ]
      }
    }
  }'
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 5: Hacked?
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'safety', 
  'hacked', 
  5, 
  '{"en": "What to do if hacked?", "es": "¿Qué hacer si te hackean?"}', 
  '{"en": "Emergency response plan", "es": "Plan de respuesta de emergencia"}',
  '{
    "en": {
      "p1": "If you suspect your wallet is compromised, act immediately.",
      "components": {
        "title": "🚑 Emergency Steps",
        "items": [
          {"title": "Disconnect", "desc": "Revoke permissions and disconnect from all sites immediately"},
          {"title": "Move Funds", "desc": "If possible, send remaining assets to a fresh, secure wallet"},
          {"title": "Clean Device", "desc": "Assume your computer has malware. Scan it or format it."},
          {"title": "Report", "desc": "Report to databases like Chainabuse to warn others."}
        ]
      }
    },
    "es": {
      "p1": "Si sospechas que tu wallet está comprometida, actúa inmediatamente.",
      "components": {
        "title": "🚑 Pasos de Emergencia",
        "items": [
          {"title": "Desconecta", "desc": "Revoca permisos y desconecta de todos los sitios inmediatamente"},
          {"title": "Mueve Fondos", "desc": "Si es posible, envía activos restantes a una wallet nueva y segura"},
          {"title": "Limpia Dispositivo", "desc": "Asume que tu computadora tiene malware. Escanéala o formatéala."},
          {"title": "Reporta", "desc": "Reporta a bases de datos como Chainabuse para advertir a otros."}
        ]
      }
    }
  }'
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 6: Tools
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'safety', 
  'tools', 
  6, 
  '{"en": "Protection Tools", "es": "Herramientas de Protección"}', 
  '{"en": "Software to keep you safe", "es": "Software para mantenerte seguro"}',
  '{
    "en": {
      "p1": "Use these tools to enhance your security layer.",
      "components": {
        "title": "🛠️ Recommended Tools",
        "items": [
          {"title": "Hardware Wallet", "desc": "Ledger or Trezor keeps keys offline (Cold Storage)"},
          {"title": "Revoke.cash", "desc": "Essential tool to check and revoke token approvals"},
          {"title": "Pocket Universe", "desc": "Browser extension that shows you what a transaction will do before you sign"},
          {"title": "Password Manager", "desc": "Bitwarden or 1Password for unique complex passwords"}
        ]
      }
    },
    "es": {
      "p1": "Usa estas herramientas para mejorar tu capa de seguridad.",
      "components": {
        "title": "🛠️ Herramientas Recomendadas",
        "items": [
          {"title": "Hardware Wallet", "desc": "Ledger o Trezor mantienen claves offline (Almacenamiento en Frío)"},
          {"title": "Revoke.cash", "desc": "Herramienta esencial para revisar y revocar aprobaciones de tokens"},
          {"title": "Pocket Universe", "desc": "Extensión de navegador que te muestra qué hará una transacción antes de firmar"},
          {"title": "Gestor Contraseñas", "desc": "Bitwarden o 1Password para contraseñas únicas y complejas"}
        ]
      }
    }
  }'
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 7: Checklist
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'safety', 
  'checklist', 
  7, 
  '{"en": "Security Checklist", "es": "Checklist de Seguridad"}', 
  '{"en": "Review your setup", "es": "Revisa tu configuración"}',
  '{
    "en": {
      "p1": "Before holding significant value, ensure you check these boxes.",
      "security_checklist": {
        "title": "Security Checklist",
        "items": [
          { "task": "2FA Enabled", "detail": "Use Authenticator apps, NOT SMS", "critical": true },
          { "task": "Offline Seed", "detail": "Written on paper/metal, NOT digital", "critical": true },
          { "task": "Bookmarked Sites", "detail": "Access exchanges via bookmarks, not Google", "critical": false },
          { "task": "Address Verification", "detail": "Check first and last 4 chars before sending", "critical": false },
          { "task": "Hardware Wallet", "detail": "For holdings over $1,000", "critical": false },
          { "task": "Revoke Approvals", "detail": "Check revoke.cash regularly", "critical": false }
        ]
      }
    },
    "es": {
      "p1": "Antes de mantener valor significativo, asegúrate de marcar estas casillas.",
      "security_checklist": {
        "title": "Checklist de Seguridad",
        "items": [
          { "task": "2FA Activado", "detail": "Usa apps Autenticadoras, NO SMS", "critical": true },
          { "task": "Seed Offline", "detail": "Escrita en papel/metal, NO digital", "critical": true },
          { "task": "Sitios Marcados", "detail": "Accede a exchanges vía marcadores, no Google", "critical": false },
          { "task": "Verificación Dirección", "detail": "Revisa primeros y últimos 4 chars antes de enviar", "critical": false },
          { "task": "Hardware Wallet", "detail": "Para holdings sobre $1,000", "critical": false },
          { "task": "Revocar Aprobaciones", "detail": "Revisa revoke.cash regularmente", "critical": false }
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
  'safety', 
  'faqs', 
  8, 
  '{"en": "Security FAQs", "es": "FAQs de Seguridad"}', 
  '{"en": "Common security questions", "es": "Preguntas comunes de seguridad"}',
  '{
    "en": {
      "p1": "Common questions about staying safe in Web3.",
      "faqs": {
        "title": "❓ Safety Questions",
        "items": [
          {"title": "I lost my seed phrase, can you help?", "desc": "No. If you lose your seed phrase, your funds are lost forever. No one can recover them."},
          {"title": "Is it safe to store my seed on Google Drive?", "desc": "No! If your Google account is hacked, your crypto is gone. Store it offline on paper."},
          {"title": "Can I trust a new project DMing me?", "desc": "Assume all DMs are scams. Real projects post public announcements, they dont DM you privately."},
          {"title": "What is a dusting attack?", "desc": "Small amounts of crypto sent to your wallet to track your identity. Ignore them."},
          {"title": "Is a hardware wallet 100% hack proof?", "desc": "Nothing is 100%. But it is much safer than a hot wallet. Beware of physical attacks or supply chain tampering."},
          {"title": "Should I tell people about my crypto?", "desc": "No. Buying lambos or bragging makes you a target for $5 wrench attacks (physical robbery)."},
          {"title": "Is SMS 2FA good enough?", "desc": "No. SIM swapping is common. Hackers steal your phone number to bypass 2FA. Use an app like Google Authenticator."},
          {"title": "What is a blind sign?", "desc": "Signing a transaction without knowing what it does. This is how many wallets are drained. Use tools like Pocket Universe."},
          {"title": "Can I use public WiFi for crypto?", "desc": "Avoid it. Or use a VPN. Public networks can be snooped on."},
          {"title": "How often should I change wallets?", "desc": "You dont need to change often, but rotating keys every few years or after a scare is good practice."}
        ]
      }
    },
    "es": {
      "p1": "Preguntas comunes sobre mantenerse seguro en Web3.",
      "faqs": {
        "title": "❓ Preguntas de Seguridad",
        "items": [
          {"title": "Perdí mi frase semilla, ¿pueden ayudarme?", "desc": "No. Si pierdes tu frase semilla, tus fondos se pierden para siempre. Nadie puede recuperarlos."},
          {"title": "¿Es seguro guardar mi seed en Google Drive?", "desc": "¡No! Si tu cuenta de Google es hackeada, tu crypto se va. Guárdala offline en papel."},
          {"title": "¿Puedo confiar en un proyecto nuevo que me envía DM?", "desc": "Asume que todos los DMs son estafas. Los proyectos reales publican anuncios públicos, no te escriben por privado."},
          {"title": "¿Qué es un ataque de polvo (dusting)?", "desc": "Pequeñas cantidades de crypto enviadas a tu wallet para rastrear tu identidad. Ignóralas."},
          {"title": "¿Es una hardware wallet 100% a prueba de hackeo?", "desc": "Nada es 100%. Pero es mucho más seguro que una hot wallet. Cuidado con ataques físicos o manipulación de la cadena de suministro."},
          {"title": "¿Debería contarle a la gente sobre mi crypto?", "desc": "No. Comprar lambos o presumir te hace un objetivo para ataques de llave inglesa de $5 (robo físico)."},
          {"title": "¿Es suficiente la 2FA por SMS?", "desc": "No. El SIM swapping es común. Los hackers roban tu número para saltar la 2FA. Usa una app como Google Authenticator."},
          {"title": "¿Qué es una firma ciega?", "desc": "Firmar una transacción sin saber qué hace. Así es como se drenan muchas wallets. Usa herramientas como Pocket Universe."},
          {"title": "¿Puedo usar WiFi público para crypto?", "desc": "Evítalo. O usa una VPN. Las redes públicas pueden ser espiadas."},
          {"title": "¿Qué tan seguido debería cambiar de wallets?", "desc": "No necesitas cambiar seguido, pero rotar claves cada pocos años o después de un susto es buena práctica."}
        ]
      }
    }
  }'
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;
