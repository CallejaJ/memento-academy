-- =============================================
-- SAFETY COURSE - QUIZ QUESTIONS SEED
-- Sections 1-7 (FAQs don't have quizzes)
-- =============================================

-- SECTION 1: The Golden Rule
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Who should you share your seed phrase with?", "es": "¿Con quién deberías compartir tu frase semilla?"}',
  '[{"en": "MetaMask Support", "es": "Soporte de MetaMask"}, {"en": "NO ONE", "es": "NADIE"}, {"en": "Ideally my mom", "es": "Idealmente mi mamá"}, {"en": "The government", "es": "El gobierno"}]',
  1,
  '{"en": "NEVER share your seed phrase with anyone. It is the master key to your funds.", "es": "NUNCA compartas tu frase semilla con nadie. Es la llave maestra de tus fondos."}'
FROM course_sections WHERE course_id = 'safety' AND slug = 'golden-rule';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Will a legitimate company ask for your private key?", "es": "¿Pedirá una compañía legítima tu clave privada?"}',
  '[{"en": "Yes, to verify identity", "es": "Sí, para verificar identidad"}, {"en": "Only for upgrades", "es": "Solo para actualizaciones"}, {"en": "Never", "es": "Nunca"}, {"en": "Sometimes", "es": "A veces"}]',
  2,
  '{"en": "No legitimate service ever needs your private key. Anyone asking is a scammer.", "es": "Ningún servicio legítimo necesita jamás tu clave privada. Cualquiera que la pida es un estafador."}'
FROM course_sections WHERE course_id = 'safety' AND slug = 'golden-rule';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What happens if someone gets your seed phrase?", "es": "¿Qué pasa si alguien obtiene tu frase semilla?"}',
  '[{"en": "Nothing", "es": "Nada"}, {"en": "They can steal all your funds", "es": "Pueden robar todos tus fondos"}, {"en": "You get a notification", "es": "Recibes una notificación"}, {"en": "They can only watch", "es": "Solo pueden observar"}]',
  1,
  '{"en": "Possession of the seed phrase grants full control over the wallet and all assets inside.", "es": "La posesión de la frase semilla otorga control total sobre la wallet y todos los activos dentro."}'
FROM course_sections WHERE course_id = 'safety' AND slug = 'golden-rule';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Does a hardware wallet need your seed online?", "es": "¿Necesita una hardware wallet tu seed online?"}',
  '[{"en": "Yes, to sync", "es": "Sí, para sincronizar"}, {"en": "No, never type it online", "es": "No, nunca la escribas online"}, {"en": "Only on setup", "es": "Solo en la configuración"}, {"en": "If it breaks", "es": "Si se rompe"}]',
  1,
  '{"en": "Hardware wallets are designed to keep the seed offline. Typing it into a computer defeats the purpose.", "es": "Las hardware wallets están diseñadas para mantener la seed offline. Escribirla en una computadora derrota el propósito."}'
FROM course_sections WHERE course_id = 'safety' AND slug = 'golden-rule';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Is specific tech support trustworthy via DM?", "es": "¿Es confiable el soporte técnico vía DM?"}',
  '[{"en": "Yes", "es": "Sí"}, {"en": "No, support never DMs first", "es": "No, el soporte nunca escribe primero"}, {"en": "If they have a logo", "es": "Si tienen un logo"}, {"en": "If they are nice", "es": "Si son amables"}]',
  1,
  '{"en": "Support teams will never DM you first. Unsolicited private messages are almost always scams.", "es": "Los equipos de soporte nunca te escribirán por privado primero. Los mensajes no solicitados son casi siempre estafas."}'
FROM course_sections WHERE course_id = 'safety' AND slug = 'golden-rule';

-- SECTION 2: Phishing
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is phishing?", "es": "¿Qué es phishing?"}',
  '[{"en": "Fishing for fish", "es": "Pescar peces"}, {"en": "Impersonating sites/emails to steal data", "es": "Suplantar sitios/correos para robar datos"}, {"en": "Free money", "es": "Dinero gratis"}, {"en": "A new token", "es": "Un nuevo token"}]',
  1,
  '{"en": "Phishing is a deceptive practice where attackers mimic legitimate entities to trick you.", "es": "Phishing es una práctica engañosa donde los atacantes imitan entidades legítimas para engañarte."}'
FROM course_sections WHERE course_id = 'safety' AND slug = 'phishing';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Which URL looks suspicious for MetaMask?", "es": "¿Qué URL parece sospechosa para MetaMask?"}',
  '[{"en": "metamask.io", "es": "metamask.io"}, {"en": "metamsk.io", "es": "metamsk.io"}, {"en": "Both", "es": "Ambos"}, {"en": "None", "es": "Ninguno"}]',
  1,
  '{"en": "Metamsk.io is missing an ''a''. Typo-squatting is a common trick.", "es": "Metamsk.io le falta una ''a''. El error tipográfico intencional es un truco común."}'
FROM course_sections WHERE course_id = 'safety' AND slug = 'phishing';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What should you do with suspicious emails?", "es": "¿Qué hacer con correos sospechosos?"}',
  '[{"en": "Click links to check", "es": "Clic en enlaces para revisar"}, {"en": "Igore and do not click", "es": "Ignorar y no hacer clic"}, {"en": "Reply to them", "es": "Responderles"}, {"en": "Forward to friends", "es": "Reenviar a amigos"}]',
  1,
  '{"en": "Never click links in suspicious emails. Go directly to the official website via bookmarks.", "es": "Nunca hagas clic en enlaces sospechosos. Ve directamente al sitio web oficial vía marcadores."}'
FROM course_sections WHERE course_id = 'safety' AND slug = 'phishing';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Do Google Ads guarantee safety?", "es": "¿Garantizan seguridad los Google Ads?"}',
  '[{"en": "Yes, Google checks them", "es": "Sí, Google los revisa"}, {"en": "No, scammers buy ads too", "es": "No, los estafadores compran anuncios también"}, {"en": "Only top result", "es": "Solo el primer resultado"}, {"en": "Only on mobile", "es": "Solo en móvil"}]',
  1,
  '{"en": "Scammers often buy Google Ads to appear at the top of search results. Always verify the URL.", "es": "Los estafadores a menudo compran Google Ads para aparecer arriba en los resultados. Siempre verifica la URL."}'
FROM course_sections WHERE course_id = 'safety' AND slug = 'phishing';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Why do phishing sites create urgency?", "es": "¿Por qué los sitios de phishing crean urgencia?"}',
  '[{"en": "Because they care", "es": "Porque les importa"}, {"en": "To make you panic and skip verification", "es": "Para que entres en pánico y omitas verificación"}, {"en": "For efficiency", "es": "Por eficiencia"}, {"en": "No reason", "es": "Sin razón"}]',
  1,
  '{"en": "Urgency (e.g., ''Act Now or Lock'') is a psychological trigger to stop you from thinking critically.", "es": "La urgencia (ej. ''Actúa Ya o Bloqueo'') es un gatillo psicológico para detener tu pensamiento crítico."}'
FROM course_sections WHERE course_id = 'safety' AND slug = 'phishing';

-- SECTION 3: Fake Support
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Who messages first?", "es": "¿Quién escribe primero?"}',
  '[{"en": "Legit support", "es": "Soporte legítimo"}, {"en": "Scammers", "es": "Estafadores"}, {"en": "Both", "es": "Ambos"}, {"en": "Neither", "es": "Ninguno"}]',
  1,
  '{"en": "Legitimate support almost never initiates contact via DM.", "es": "El soporte legítimo casi nunca inicia contacto vía DM."}'
FROM course_sections WHERE course_id = 'safety' AND slug = 'fake-support';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Should you download TeamViewer for support?", "es": "¿Deberías descargar TeamViewer para soporte?"}',
  '[{"en": "Yes, it helps", "es": "Sí, ayuda"}, {"en": "No, never grant remote access", "es": "No, nunca des acceso remoto"}, {"en": "Only if verified", "es": "Solo si está verificado"}, {"en": "If they ask nicely", "es": "Si lo piden amablemente"}]',
  1,
  '{"en": "Granting remote access gives scammers full control over your computer and wallet.", "es": "Dar acceso remoto da a los estafadores control total sobre tu computadora y wallet."}'
FROM course_sections WHERE course_id = 'safety' AND slug = 'fake-support';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is ''Wallet Validation''?", "es": "¿Qué es ''Validación de Wallet''?"}',
  '[{"en": "A scam phrase to steal keys", "es": "Una frase de estafa para robar claves"}, {"en": "A real process", "es": "Un proceso real"}, {"en": "Necessary for staking", "es": "Necesario para staking"}, {"en": "Tech term", "es": "Término técnico"}]',
  0,
  '{"en": "''Validating'' or ''Syncing'' wallet is common scam jargon. There is no such technical requirement involving seeds.", "es": "''Validar'' o ''Sincronizar'' wallet es jerga común de estafas. No existe tal requerimiento técnico involucrando seeds."}'
FROM course_sections WHERE course_id = 'safety' AND slug = 'fake-support';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Where should you seek support?", "es": "¿Dónde deberías buscar soporte?"}',
  '[{"en": "Official Help Centers / Tickets", "es": "Centros de Ayuda Oficiales / Tickets"}, {"en": "Random Telegram groups", "es": "Grupos aleatorios de Telegram"}, {"en": "Twitter comments", "es": "Comentarios de Twitter"}, {"en": "Instagram DMs", "es": "DMs de Instagram"}]',
  0,
  '{"en": "Always use the official support portal linked on the legitimate website.", "es": "Siempre usa el portal de soporte oficial enlazado en el sitio web legítimo."}'
FROM course_sections WHERE course_id = 'safety' AND slug = 'fake-support';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What if a ''helpful member'' DMs you?", "es": "¿Qué pasa si un ''miembro útil'' te escribe?"}',
  '[{"en": "Trust them", "es": "Confía en ellos"}, {"en": "Ignore/Block", "es": "Ignora/Bloquea"}, {"en": "Send them money", "es": "Envíales dinero"}, {"en": "Give seed", "es": "Da la seed"}]',
  1,
  '{"en": "Helpful strangers in DMs are usually scammers playing the long game.", "es": "Extraños útiles en DMs son usualmente estafadores jugando el juego largo."}'
FROM course_sections WHERE course_id = 'safety' AND slug = 'fake-support';

-- SECTION 4: Fake Airdrops
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "You found a random token worth $10k. What is it?", "es": "Encontraste un token random valiendo $10k. ¿Qué es?"}',
  '[{"en": "My lucky day", "es": "Mi día de suerte"}, {"en": "A scam airdrop", "es": "Un airdrop estafa"}, {"en": "A gift from Vitalik", "es": "Un regalo de Vitalik"}, {"en": "A mistake", "es": "Un error"}]',
  1,
  '{"en": "If you didn''t buy it or sign up for it, it''s a scam. DO NOT TOUCH IT.", "es": "Si no lo compraste o te registraste, es una estafa. NO LO TOQUES."}'
FROM course_sections WHERE course_id = 'safety' AND slug = 'fake-airdrops';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What happens if you approve the token for swap?", "es": "¿Qué pasa si apruebas el token para intercambio?"}',
  '[{"en": "You get rich", "es": "Te haces rico"}, {"en": "Malicious contract drains your wallet", "es": "Contrato malicioso drena tu wallet"}, {"en": "Nothing", "es": "Nada"}, {"en": "Transaction fails", "es": "Transacción falla"}]',
  1,
  '{"en": "The approve function contains code to allow the attacker to spend YOUR legitimate tokens (like USDT/ETH).", "es": "La función aprobar contiene código para permitir al atacante gastar TUS tokens legítimos (como USDT/ETH)."}'
FROM course_sections WHERE course_id = 'safety' AND slug = 'fake-airdrops';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "How should you handle spam tokens?", "es": "¿Cómo deberías manejar tokens spam?"}',
  '[{"en": "Swap them", "es": "Intercambiarlos"}, {"en": "Hide them in wallet interface", "es": "Ocultarlos en la interfaz de wallet"}, {"en": "Send to friend", "es": "Enviar a amigo"}, {"en": "Burn them via contract", "es": "Quemarlos vía contrato"}]',
  1,
  '{"en": "Interacting with them is risky. The safest option is to simply hide them from view.", "es": "Interactuar con ellos es riesgoso. La opción más segura es simplemente ocultarlos de la vista."}'
FROM course_sections WHERE course_id = 'safety' AND slug = 'fake-airdrops';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Are all airdrops scams?", "es": "¿Son todos los airdrops estafas?"}',
  '[{"en": "Yes", "es": "Sí"}, {"en": "No, but verify sources carefully", "es": "No, pero verifica fuentes cuidadosamente"}, {"en": "No, mostly real", "es": "No, mayormente reales"}, {"en": "Only on Solana", "es": "Solo en Solana"}]',
  1,
  '{"en": "Real airdrops exist (like Uniswap/Arbitrum), but verify via official Twitter/Discord before clicking.", "es": "Airdrops reales existen (como Uniswap/Arbitrum), pero verifica vía Twitter/Discord oficial antes de hacer clic."}'
FROM course_sections WHERE course_id = 'safety' AND slug = 'fake-airdrops';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Can receiving a token hurt you?", "es": "¿Puede herirte recibir un token?"}',
  '[{"en": "Yes", "es": "Sí"}, {"en": "No, only interacting/signing triggers the hack", "es": "No, solo interactuar/firmar gatilla el hackeo"}, {"en": "Maybe", "es": "Tal vez"}, {"en": "It spreads virus", "es": "Propaga virus"}]',
  1,
  '{"en": "Just holding the token is harmless. The danger comes from ''Approving'' (signing) a transaction with it.", "es": "Solo tener el token es inofensivo. El peligro viene de ''Aprobar'' (firmar) una transacción con él."}'
FROM course_sections WHERE course_id = 'safety' AND slug = 'fake-airdrops';

-- SECTION 5: Hacked (What to do)
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "First step if hacked?", "es": "¿Primer paso si te hackean?"}',
  '[{"en": "Cry", "es": "Llorar"}, {"en": "Disconnect wallet from sites", "es": "Desconectar wallet de sitios"}, {"en": "Tweet about it", "es": "Tuitear sobre ello"}, {"en": "Sleep", "es": "Dormir"}]',
  1,
  '{"en": "Immediately revoke permissions (revoke.cash) and disconnect from sites to stop further bleeding.", "es": "Inmediatamente revoca permisos (revoke.cash) y desconecta de sitios para detener más sangrado."}'
FROM course_sections WHERE course_id = 'safety' AND slug = 'hacked';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Should you keep using a hacked wallet?", "es": "¿Deberías seguir usando una wallet hackeada?"}',
  '[{"en": "Yes", "es": "Sí"}, {"en": "No, it is compromised forever", "es": "No, está comprometida para siempre"}, {"en": "Only for small amounts", "es": "Solo para montos pequeños"}, {"en": "Change password only", "es": "Cambiar contraseña solo"}]',
  1,
  '{"en": "Once a seed is compromised, that wallet is dead. Move remaining funds to a NEW seed phrase.", "es": "Una vez que una seed está comprometida, esa wallet está muerta. Mueve fondos restantes a una NUEVA frase semilla."}'
FROM course_sections WHERE course_id = 'safety' AND slug = 'hacked';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Why scan for malware?", "es": "¿Por qué escanear malware?"}',
  '[{"en": "For fun", "es": "Por diversión"}, {"en": "The hack might have started on your device", "es": "El hackeo podría haber empezado en tu dispositivo"}, {"en": "To speed up PC", "es": "Para acelerar PC"}, {"en": "To delete cookies", "es": "Para borrar cookies"}]',
  1,
  '{"en": "If you were hacked via keylogger or malware, your new wallet will also be stolen if you don''t clean the device.", "es": "Si fuiste hackeado vía keylogger o malware, tu nueva wallet también será robada si no limpias el dispositivo."}'
FROM course_sections WHERE course_id = 'safety' AND slug = 'hacked';

-- SECTION 6: Tools
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Which tool simulates transactions?", "es": "¿Qué herramienta simula transacciones?"}',
  '[{"en": "Pocket Universe / Fire", "es": "Pocket Universe / Fire"}, {"en": "MetaMask", "es": "MetaMask"}, {"en": "Uniswap", "es": "Uniswap"}, {"en": "Etherscan", "es": "Etherscan"}]',
  0,
  '{"en": "Pocket Universe and Fire are extensions specifically for simulating transaction outcomes before signing.", "es": "Pocket Universe y Fire son extensiones específicamente para simular resultados de transacciones antes de firmar."}'
FROM course_sections WHERE course_id = 'safety' AND slug = 'tools';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What does a Hardware Wallet do?", "es": "¿Qué hace una Hardware Wallet?"}',
  '[{"en": "Mines crypto", "es": "Mina crypto"}, {"en": "Keeps private keys offline", "es": "Mantiene claves privadas offline"}, {"en": "Trades for you", "es": "Opera por ti"}, {"en": "Hides transactions", "es": "Oculta transacciones"}]',
  1,
  '{"en": "It physically isolates your private keys from the internet, protecting against malware.", "es": "Aísla físicamente tus claves privadas de internet, protegiendo contra malware."}'
FROM course_sections WHERE course_id = 'safety' AND slug = 'tools';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is Revoke.cash for?", "es": "¿Para qué es Revoke.cash?"}',
  '[{"en": "Buying cash", "es": "Comprar efectivo"}, {"en": "Revoking smart contract allowances", "es": "Revocar permisos de contratos inteligentes"}, {"en": "Sending money", "es": "Enviar dinero"}, {"en": "Hashing", "es": "Hashear"}]',
  1,
  '{"en": "It helps you cancel permissions you gave to dApps to spend your tokens.", "es": "Te ayuda a cancelar permisos que diste a dApps para gastar tus tokens."}'
FROM course_sections WHERE course_id = 'safety' AND slug = 'tools';

-- SECTION 7: Checklist
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Which 2FA is better?", "es": "¿Qué 2FA es mejor?"}',
  '[{"en": "SMS", "es": "SMS"}, {"en": "Authenticator App (Google/Authy)", "es": "App Autenticadora (Google/Authy)"}, {"en": "None", "es": "Ninguna"}, {"en": "Email", "es": "Email"}]',
  1,
  '{"en": "Authenticator apps are safer because SMS is vulnerable to SIM swapping attacks.", "es": "Las apps autenticadoras son más seguras porque el SMS es vulnerable a ataques de SIM swapping."}'
FROM course_sections WHERE course_id = 'safety' AND slug = 'checklist';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "How should you store your seed?", "es": "¿Cómo deberías guardar tu seed?"}',
  '[{"en": "Screenshot", "es": "Captura de pantalla"}, {"en": "Offline (Paper/Metal)", "es": "Offline (Papel/Metal)"}, {"en": "Google Doc", "es": "Google Doc"}, {"en": "Email draft", "es": "Borrador de email"}]',
  1,
  '{"en": "Digital storage is vulnerable to hacking. Physical offline storage is the gold standard.", "es": "El almacenamiento digital es vulnerable al hackeo. El almacenamiento físico offline es el estándar de oro."}'
FROM course_sections WHERE course_id = 'safety' AND slug = 'checklist';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What should you verify before sending?", "es": "¿Qué deberías verificar antes de enviar?"}',
  '[{"en": "First and last 4 chars of address", "es": "Primeros y últimos 4 caracteres de dirección"}, {"en": "Nothing", "es": "Nada"}, {"en": "Color of wallet", "es": "Color de wallet"}, {"en": "Time of day", "es": "Hora del día"}]',
  0,
  '{"en": "Clipboard malware can swap addresses. Always manually verify the start and end of the destination address.", "es": "El malware del portapapeles puede cambiar direcciones. Siempre verifica manualmente el inicio y fin de la dirección de destino."}'
FROM course_sections WHERE course_id = 'safety' AND slug = 'checklist';
