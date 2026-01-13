-- =============================================
-- QUIZ QUESTIONS - SECURITY (50 questions)
-- =============================================

INSERT INTO game_questions (category, difficulty, question_text, options, correct_index, explanation, from_course) VALUES

('Security', 'easy',
 '{"en": "What should you NEVER share with anyone?", "es": "¿Qué NUNCA debes compartir con nadie?"}',
 '[{"en": "Your public wallet address", "es": "Tu dirección pública de billetera"}, {"en": "Your seed phrase and private keys", "es": "Tu frase semilla y llaves privadas"}, {"en": "Your transaction history", "es": "Tu historial de transacciones"}, {"en": "The cryptocurrencies you own", "es": "Las criptomonedas que posees"}]',
 1, '{"en": "Never share your seed phrase or private keys. Anyone with access to these can steal all your crypto assets.", "es": "Nunca compartas tu frase semilla o llaves privadas. Cualquiera con acceso a estos puede robar todos tus activos crypto."}', 'safety'),

('Security', 'easy',
 '{"en": "What is phishing?", "es": "¿Qué es phishing?"}',
 '[{"en": "A type of cryptocurrency", "es": "Un tipo de criptomoneda"}, {"en": "A scam that tricks you into revealing sensitive info", "es": "Una estafa que te engaña para revelar info sensible"}, {"en": "A mining technique", "es": "Una técnica de minería"}, {"en": "A trading strategy", "es": "Una estrategia de trading"}]',
 1, '{"en": "Phishing is a scam where attackers create fake websites or messages to trick you into revealing passwords, seed phrases, or other sensitive data.", "es": "Phishing es una estafa donde atacantes crean sitios web o mensajes falsos para engañarte y revelar contraseñas, frases semilla u otros datos sensibles."}', 'safety'),

('Security', 'easy',
 '{"en": "Where is the safest place to store your seed phrase?", "es": "¿Dónde es más seguro guardar tu frase semilla?"}',
 '[{"en": "In your email", "es": "En tu correo electrónico"}, {"en": "Written on paper stored in a secure location", "es": "Escrita en papel guardada en un lugar seguro"}, {"en": "In a text file on your computer", "es": "En un archivo de texto en tu computadora"}, {"en": "On social media", "es": "En redes sociales"}]',
 1, '{"en": "The safest way is to write it on paper (or metal for fire protection) and store it in a secure physical location like a safe.", "es": "La forma más segura es escribirla en papel (o metal para protección contra fuego) y guardarla en un lugar físico seguro como una caja fuerte."}', 'safety'),

('Security', 'easy',
 '{"en": "What is a rug pull?", "es": "¿Qué es un rug pull?"}',
 '[{"en": "A type of NFT", "es": "Un tipo de NFT"}, {"en": "When developers abandon a project and take investor funds", "es": "Cuando desarrolladores abandonan un proyecto y se llevan fondos de inversores"}, {"en": "A trading strategy", "es": "Una estrategia de trading"}, {"en": "A wallet backup", "es": "Un respaldo de billetera"}]',
 1, '{"en": "A rug pull is a scam where project developers suddenly withdraw all funds from a liquidity pool, leaving investors with worthless tokens.", "es": "Un rug pull es una estafa donde los desarrolladores del proyecto retiran repentinamente todos los fondos de un pool de liquidez, dejando a inversores con tokens sin valor."}', 'safety'),

('Security', 'easy',
 '{"en": "What is 2FA?", "es": "¿Qué es 2FA?"}',
 '[{"en": "A type of cryptocurrency", "es": "Un tipo de criptomoneda"}, {"en": "Two-Factor Authentication for extra security", "es": "Autenticación de Dos Factores para seguridad extra"}, {"en": "A trading platform", "es": "Una plataforma de trading"}, {"en": "A wallet type", "es": "Un tipo de billetera"}]',
 1, '{"en": "2FA (Two-Factor Authentication) requires two forms of verification to access accounts, adding an extra layer of security.", "es": "2FA (Autenticación de Dos Factores) requiere dos formas de verificación para acceder a cuentas, añadiendo una capa extra de seguridad."}', 'safety'),

('Security', 'medium',
 '{"en": "What is a hardware wallet?", "es": "¿Qué es una billetera hardware?"}',
 '[{"en": "A wallet app on your phone", "es": "Una app de billetera en tu teléfono"}, {"en": "A physical device that stores private keys offline", "es": "Un dispositivo físico que almacena llaves privadas sin conexión"}, {"en": "A type of cryptocurrency", "es": "Un tipo de criptomoneda"}, {"en": "A bank account", "es": "Una cuenta bancaria"}]',
 1, '{"en": "A hardware wallet is a physical device that stores your private keys offline, protecting them from online threats like hackers.", "es": "Una billetera hardware es un dispositivo físico que almacena tus llaves privadas sin conexión, protegiéndolas de amenazas en línea como hackers."}', 'safety'),

('Security', 'medium',
 '{"en": "What is a honeypot scam in crypto?", "es": "¿Qué es una estafa honeypot en crypto?"}',
 '[{"en": "A type of staking", "es": "Un tipo de staking"}, {"en": "A token designed so you can buy but cannot sell", "es": "Un token diseñado para que puedas comprar pero no vender"}, {"en": "A mining reward", "es": "Una recompensa de minería"}, {"en": "A DeFi protocol", "es": "Un protocolo DeFi"}]',
 1, '{"en": "A honeypot is a malicious token contract that allows purchases but prevents sales, trapping your funds. It is designed to look like a legitimate investment.", "es": "Un honeypot es un contrato de token malicioso que permite compras pero previene ventas, atrapando tus fondos. Está diseñado para parecer una inversión legítima."}', 'safety'),

('Security', 'medium',
 '{"en": "What should you check before connecting your wallet to a dApp?", "es": "¿Qué debes verificar antes de conectar tu billetera a una dApp?"}',
 '[{"en": "The tokens price", "es": "El precio del token"}, {"en": "The URL and contract permissions", "es": "La URL y los permisos del contrato"}, {"en": "The number of users", "es": "El número de usuarios"}, {"en": "The apps color scheme", "es": "El esquema de colores de la app"}]',
 1, '{"en": "Always verify the URL is correct and review what permissions a dApp is requesting before connecting your wallet.", "es": "Siempre verifica que la URL sea correcta y revisa qué permisos está solicitando una dApp antes de conectar tu billetera."}', 'safety'),

('Security', 'medium',
 '{"en": "What is token approval in crypto?", "es": "¿Qué es la aprobación de token en crypto?"}',
 '[{"en": "Getting a token listed on an exchange", "es": "Conseguir que un token se liste en un exchange"}, {"en": "Permission for a smart contract to spend your tokens", "es": "Permiso para que un contrato inteligente gaste tus tokens"}, {"en": "A type of airdrop", "es": "Un tipo de airdrop"}, {"en": "A wallet backup", "es": "Un respaldo de billetera"}]',
 1, '{"en": "Token approval grants a smart contract permission to spend tokens on your behalf. Always review and revoke unnecessary approvals.", "es": "La aprobación de token otorga a un contrato inteligente permiso para gastar tokens en tu nombre. Siempre revisa y revoca aprobaciones innecesarias."}', 'safety'),

('Security', 'hard',
 '{"en": "What is a dusting attack?", "es": "¿Qué es un ataque de polvo (dusting)?"}',
 '[{"en": "Sending large amounts of crypto", "es": "Enviar grandes cantidades de crypto"}, {"en": "Sending tiny amounts of crypto to track wallet activity", "es": "Enviar cantidades diminutas de crypto para rastrear actividad de billetera"}, {"en": "A mining attack", "es": "Un ataque de minería"}, {"en": "A smart contract exploit", "es": "Un exploit de contrato inteligente"}]',
 1, '{"en": "A dusting attack involves sending tiny amounts of crypto to many wallets to track and deanonymize users by analyzing transaction patterns.", "es": "Un ataque de polvo implica enviar cantidades diminutas de crypto a muchas billeteras para rastrear y desanonimizar usuarios analizando patrones de transacciones."}', 'safety'),

('Security', 'hard',
 '{"en": "What is social engineering in crypto scams?", "es": "¿Qué es la ingeniería social en estafas crypto?"}',
 '[{"en": "Building social media platforms", "es": "Construir plataformas de redes sociales"}, {"en": "Manipulating people psychologically to reveal sensitive information", "es": "Manipular personas psicológicamente para revelar información sensible"}, {"en": "A type of blockchain", "es": "Un tipo de blockchain"}, {"en": "A trading algorithm", "es": "Un algoritmo de trading"}]',
 1, '{"en": "Social engineering manipulates people through psychological tactics to reveal passwords, seed phrases, or perform actions that compromise security.", "es": "La ingeniería social manipula personas a través de tácticas psicológicas para revelar contraseñas, frases semilla o realizar acciones que comprometen la seguridad."}', 'safety'),

('Security', 'hard',
 '{"en": "What is address poisoning?", "es": "¿Qué es el envenenamiento de direcciones?"}',
 '[{"en": "A type of staking", "es": "Un tipo de staking"}, {"en": "Scammers creating similar-looking addresses to intercept transactions", "es": "Estafadores creando direcciones similares para interceptar transacciones"}, {"en": "A mining technique", "es": "Una técnica de minería"}, {"en": "A wallet feature", "es": "Una característica de billetera"}]',
 1, '{"en": "Address poisoning is when scammers send transactions from addresses that look similar to ones you have used, hoping you will copy the wrong address.", "es": "El envenenamiento de direcciones es cuando estafadores envían transacciones desde direcciones que parecen similares a las que has usado, esperando que copies la dirección equivocada."}', 'safety')

ON CONFLICT DO NOTHING;
