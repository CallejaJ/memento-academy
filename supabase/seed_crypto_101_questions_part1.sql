-- =============================================
-- CRYPTO-101 QUIZ QUESTIONS - PART 1 (Sections 1-3)
-- 15 questions per section
-- =============================================

-- SECTION 1: What are Cryptocurrencies? (15 questions)
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is the primary characteristic that defines a cryptocurrency?", "es": "¿Cuál es la característica principal que define a una criptomoneda?"}',
  '[{"en": "Physical coins backed by gold", "es": "Monedas físicas respaldadas por oro"}, {"en": "Digital currency using cryptography for security", "es": "Moneda digital que usa criptografía para seguridad"}, {"en": "Government-issued paper money", "es": "Dinero papel emitido por el gobierno"}, {"en": "Credit cards", "es": "Tarjetas de crédito"}]',
  1,
  '{"en": "Cryptocurrencies are digital currencies that use cryptography for security and operate on decentralized networks.", "es": "Las criptomonedas son monedas digitales que usan criptografía para seguridad y operan en redes descentralizadas."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'what-is-crypto';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Who controls cryptocurrencies?", "es": "¿Quién controla las criptomonedas?"}',
  '[{"en": "Central banks", "es": "Bancos centrales"}, {"en": "No single entity - they are decentralized", "es": "Ninguna entidad única - son descentralizadas"}, {"en": "The government", "es": "El gobierno"}, {"en": "Major tech companies", "es": "Grandes empresas tecnológicas"}]',
  1,
  '{"en": "Cryptocurrencies are decentralized - no single bank, government, or company controls them.", "es": "Las criptomonedas son descentralizadas - ningún banco, gobierno o empresa las controla."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'what-is-crypto';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "How are cryptocurrency transactions recorded?", "es": "¿Cómo se registran las transacciones de criptomonedas?"}',
  '[{"en": "In private bank databases", "es": "En bases de datos bancarias privadas"}, {"en": "On paper ledgers", "es": "En libros contables de papel"}, {"en": "On a public blockchain", "es": "En un blockchain público"}, {"en": "They are not recorded", "es": "No se registran"}]',
  2,
  '{"en": "All cryptocurrency transactions are recorded on a public, transparent blockchain that anyone can verify.", "es": "Todas las transacciones de criptomonedas se registran en un blockchain público y transparente que cualquiera puede verificar."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'what-is-crypto';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What technology secures cryptocurrency transactions?", "es": "¿Qué tecnología asegura las transacciones de criptomonedas?"}',
  '[{"en": "Password protection only", "es": "Solo protección con contraseña"}, {"en": "Cryptography", "es": "Criptografía"}, {"en": "Physical locks", "es": "Cerraduras físicas"}, {"en": "Biometric scanners", "es": "Escáneres biométricos"}]',
  1,
  '{"en": "Cryptography uses advanced mathematical algorithms to secure and verify transactions.", "es": "La criptografía usa algoritmos matemáticos avanzados para asegurar y verificar transacciones."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'what-is-crypto';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Do cryptocurrencies exist in physical form?", "es": "¿Las criptomonedas existen en forma física?"}',
  '[{"en": "Yes, as special coins", "es": "Sí, como monedas especiales"}, {"en": "Yes, as banknotes", "es": "Sí, como billetes"}, {"en": "No, they are purely digital", "es": "No, son puramente digitales"}, {"en": "Sometimes", "es": "A veces"}]',
  2,
  '{"en": "Cryptocurrencies are purely digital - they exist only as electronic records on the blockchain.", "es": "Las criptomonedas son puramente digitales - existen solo como registros electrónicos en el blockchain."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'what-is-crypto';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What analogy best describes crypto vs traditional banking?", "es": "¿Qué analogía describe mejor crypto vs banca tradicional?"}',
  '[{"en": "Library vs bookstore", "es": "Biblioteca vs librería"}, {"en": "Email vs postal mail", "es": "Email vs correo postal"}, {"en": "TV vs radio", "es": "TV vs radio"}, {"en": "Car vs bicycle", "es": "Coche vs bicicleta"}]',
  1,
  '{"en": "Like email vs postal mail - crypto is digital, instant, and doesnt need an intermediary (post office/bank).", "es": "Como email vs correo postal - crypto es digital, instantáneo, y no necesita intermediario (correos/banco)."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'what-is-crypto';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What makes cryptocurrency transactions transparent?", "es": "¿Qué hace transparentes las transacciones de criptomonedas?"}',
  '[{"en": "Bank statements", "es": "Extractos bancarios"}, {"en": "Public blockchain ledger", "es": "Libro mayor blockchain público"}, {"en": "Government audits", "es": "Auditorías gubernamentales"}, {"en": "Annual reports", "es": "Informes anuales"}]',
  1,
  '{"en": "All transactions are recorded on a public blockchain that anyone can view and verify.", "es": "Todas las transacciones se registran en un blockchain público que cualquiera puede ver y verificar."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'what-is-crypto';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Can cryptocurrency be sent directly between two people?", "es": "¿Se puede enviar criptomoneda directamente entre dos personas?"}',
  '[{"en": "No, needs a bank", "es": "No, necesita un banco"}, {"en": "No, needs government approval", "es": "No, necesita aprobación del gobierno"}, {"en": "Yes, peer-to-peer", "es": "Sí, peer-to-peer"}, {"en": "Only through exchanges", "es": "Solo a través de exchanges"}]',
  2,
  '{"en": "Cryptocurrencies enable peer-to-peer transfers without intermediaries like banks.", "es": "Las criptomonedas permiten transferencias peer-to-peer sin intermediarios como bancos."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'what-is-crypto';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is a key advantage of cryptocurrency being decentralized?", "es": "¿Cuál es una ventaja clave de que la criptomoneda sea descentralizada?"}',
  '[{"en": "Faster physical delivery", "es": "Entrega física más rápida"}, {"en": "No single point of failure or control", "es": "Sin punto único de fallo o control"}, {"en": "Better customer service", "es": "Mejor servicio al cliente"}, {"en": "More branches available", "es": "Más sucursales disponibles"}]',
  1,
  '{"en": "Decentralization means no single entity can fail, be hacked, or control the entire network.", "es": "La descentralización significa que ninguna entidad puede fallar, ser hackeada, o controlar toda la red."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'what-is-crypto';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Are cryptocurrency transactions reversible?", "es": "¿Las transacciones de criptomonedas son reversibles?"}',
  '[{"en": "Yes, like credit cards", "es": "Sí, como tarjetas de crédito"}, {"en": "Yes, within 24 hours", "es": "Sí, dentro de 24 horas"}, {"en": "No, they are permanent", "es": "No, son permanentes"}, {"en": "Only if you pay a fee", "es": "Solo si pagas una tarifa"}]',
  2,
  '{"en": "Once confirmed on the blockchain, cryptocurrency transactions cannot be reversed or modified.", "es": "Una vez confirmadas en el blockchain, las transacciones de criptomonedas no pueden revertirse ni modificarse."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'what-is-crypto';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What gives cryptocurrency its value?", "es": "¿Qué da valor a las criptomonedas?"}',
  '[{"en": "Gold reserves", "es": "Reservas de oro"}, {"en": "Government backing", "es": "Respaldo del gobierno"}, {"en": "Supply, demand, and utility", "es": "Oferta, demanda y utilidad"}, {"en": "Stock markets", "es": "Mercados bursátiles"}]',
  2,
  '{"en": "Cryptocurrency value comes from supply and demand dynamics, plus the utility it provides.", "es": "El valor de las criptomonedas viene de la dinámica de oferta y demanda, más la utilidad que proporciona."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'what-is-crypto';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Can cryptocurrency work without internet?", "es": "¿Puede funcionar la criptomoneda sin internet?"}',
  '[{"en": "Yes, fully offline", "es": "Sí, completamente offline"}, {"en": "No, internet is required", "es": "No, se requiere internet"}, {"en": "Only with special hardware", "es": "Solo con hardware especial"}, {"en": "Via telephone", "es": "Vía teléfono"}]',
  1,
  '{"en": "Cryptocurrency transactions require internet to broadcast to the network and be confirmed.", "es": "Las transacciones de criptomonedas requieren internet para transmitirse a la red y ser confirmadas."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'what-is-crypto';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What happens when you lose access to your cryptocurrency?", "es": "¿Qué pasa cuando pierdes acceso a tu criptomoneda?"}',
  '[{"en": "Bank recovers it", "es": "El banco la recupera"}, {"en": "Government reimburses", "es": "El gobierno reembolsa"}, {"en": "It may be lost forever", "es": "Puede perderse para siempre"}, {"en": "Insurance covers it", "es": "El seguro lo cubre"}]',
  2,
  '{"en": "If you lose your private keys or seed phrase, your cryptocurrency is typically lost forever.", "es": "Si pierdes tus claves privadas o frase semilla, tu criptomoneda típicamente se pierde para siempre."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'what-is-crypto';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Is cryptocurrency legal?", "es": "¿Es legal la criptomoneda?"}',
  '[{"en": "Illegal everywhere", "es": "Ilegal en todas partes"}, {"en": "Legal everywhere", "es": "Legal en todas partes"}, {"en": "Varies by country", "es": "Varía por país"}, {"en": "Only for businesses", "es": "Solo para negocios"}]',
  2,
  '{"en": "Cryptocurrency legality varies by country - its legal in most places but regulations differ.", "es": "La legalidad de las criptomonedas varía por país - es legal en la mayoría pero las regulaciones difieren."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'what-is-crypto';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is the minimum amount needed to buy cryptocurrency?", "es": "¿Cuál es la cantidad mínima necesaria para comprar criptomonedas?"}',
  '[{"en": "$1,000 minimum", "es": "$1,000 mínimo"}, {"en": "One full coin", "es": "Una moneda completa"}, {"en": "As little as $1-10", "es": "Tan poco como $1-10"}, {"en": "$100 minimum", "es": "$100 mínimo"}]',
  2,
  '{"en": "You can buy fractional amounts of crypto - most exchanges accept purchases as low as $1-10.", "es": "Puedes comprar cantidades fraccionadas de crypto - la mayoría de exchanges aceptan compras desde $1-10."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'what-is-crypto';

-- SECTION 2: The Main Cryptocurrencies (15 questions)
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is Bitcoin often called?", "es": "¿Cómo se le llama frecuentemente a Bitcoin?"}',
  '[{"en": "Digital silver", "es": "Plata digital"}, {"en": "Digital gold", "es": "Oro digital"}, {"en": "Digital cash", "es": "Efectivo digital"}, {"en": "Digital stocks", "es": "Acciones digitales"}]',
  1,
  '{"en": "Bitcoin is often called digital gold because of its scarcity and store of value properties.", "es": "A Bitcoin se le llama oro digital por su escasez y propiedades de reserva de valor."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'main-cryptos';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What percentage of the crypto market does Bitcoin represent?", "es": "¿Qué porcentaje del mercado crypto representa Bitcoin?"}',
  '[{"en": "About 10%", "es": "Alrededor del 10%"}, {"en": "About 25%", "es": "Alrededor del 25%"}, {"en": "About 50%", "es": "Alrededor del 50%"}, {"en": "About 80%", "es": "Alrededor del 80%"}]',
  2,
  '{"en": "Bitcoin dominates the crypto market with approximately 50% of total market capitalization.", "es": "Bitcoin domina el mercado crypto con aproximadamente 50% de la capitalización total."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'main-cryptos';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is Ethereum primarily used for?", "es": "¿Para qué se usa principalmente Ethereum?"}',
  '[{"en": "Only payments", "es": "Solo pagos"}, {"en": "Smart contracts and dApps", "es": "Contratos inteligentes y dApps"}, {"en": "Email encryption", "es": "Encriptación de email"}, {"en": "Gaming only", "es": "Solo gaming"}]',
  1,
  '{"en": "Ethereum is a platform for smart contracts and decentralized applications (dApps), powering DeFi and NFTs.", "es": "Ethereum es una plataforma para contratos inteligentes y aplicaciones descentralizadas (dApps), impulsando DeFi y NFTs."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'main-cryptos';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What are stablecoins like USDT designed to maintain?", "es": "¿Qué están diseñadas a mantener las stablecoins como USDT?"}',
  '[{"en": "High volatility", "es": "Alta volatilidad"}, {"en": "A stable $1 value", "es": "Un valor estable de $1"}, {"en": "Increasing prices", "es": "Precios crecientes"}, {"en": "Connection to Bitcoin", "es": "Conexión a Bitcoin"}]',
  1,
  '{"en": "Stablecoins like USDT and USDC are designed to maintain a 1:1 peg with the US dollar.", "es": "Stablecoins como USDT y USDC están diseñadas para mantener un valor 1:1 con el dólar estadounidense."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'main-cryptos';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "How many cryptocurrencies exist approximately?", "es": "¿Cuántas criptomonedas existen aproximadamente?"}',
  '[{"en": "About 100", "es": "Alrededor de 100"}, {"en": "About 1,000", "es": "Alrededor de 1,000"}, {"en": "Over 20,000", "es": "Más de 20,000"}, {"en": "About 500", "es": "Alrededor de 500"}]',
  2,
  '{"en": "There are over 20,000 cryptocurrencies, though most are not widely used or traded.", "es": "Existen más de 20,000 criptomonedas, aunque la mayoría no se usan ni comercian ampliamente."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'main-cryptos';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is Solana known for?", "es": "¿Por qué es conocida Solana?"}',
  '[{"en": "High fees", "es": "Tarifas altas"}, {"en": "Being the oldest", "es": "Ser la más antigua"}, {"en": "Fast and cheap transactions", "es": "Transacciones rápidas y baratas"}, {"en": "Physical stores", "es": "Tiendas físicas"}]',
  2,
  '{"en": "Solana is known for very fast transaction speeds and low fees, making it popular for dApps.", "es": "Solana es conocida por velocidades de transacción muy rápidas y tarifas bajas, haciéndola popular para dApps."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'main-cryptos';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is the symbol for Ethereum?", "es": "¿Cuál es el símbolo de Ethereum?"}',
  '[{"en": "BTC", "es": "BTC"}, {"en": "ETH", "es": "ETH"}, {"en": "SOL", "es": "SOL"}, {"en": "XRP", "es": "XRP"}]',
  1,
  '{"en": "ETH is the ticker symbol for Ethereum, the second-largest cryptocurrency.", "es": "ETH es el símbolo de cotización de Ethereum, la segunda criptomoneda más grande."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'main-cryptos';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Which cryptocurrency was created first?", "es": "¿Qué criptomoneda fue creada primero?"}',
  '[{"en": "Ethereum", "es": "Ethereum"}, {"en": "Solana", "es": "Solana"}, {"en": "Bitcoin", "es": "Bitcoin"}, {"en": "USDT", "es": "USDT"}]',
  2,
  '{"en": "Bitcoin was the first cryptocurrency, created in 2009 by Satoshi Nakamoto.", "es": "Bitcoin fue la primera criptomoneda, creada en 2009 por Satoshi Nakamoto."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'main-cryptos';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What market share does Ethereum represent?", "es": "¿Qué cuota de mercado representa Ethereum?"}',
  '[{"en": "About 5%", "es": "Alrededor del 5%"}, {"en": "About 18%", "es": "Alrededor del 18%"}, {"en": "About 50%", "es": "Alrededor del 50%"}, {"en": "About 35%", "es": "Alrededor del 35%"}]',
  1,
  '{"en": "Ethereum represents approximately 18% of the total cryptocurrency market cap.", "es": "Ethereum representa aproximadamente el 18% de la capitalización total del mercado crypto."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'main-cryptos';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What are altcoins?", "es": "¿Qué son las altcoins?"}',
  '[{"en": "Old coins", "es": "Monedas viejas"}, {"en": "Any cryptocurrency other than Bitcoin", "es": "Cualquier criptomoneda que no sea Bitcoin"}, {"en": "Fake cryptocurrencies", "es": "Criptomonedas falsas"}, {"en": "Aluminum coins", "es": "Monedas de aluminio"}]',
  1,
  '{"en": "Altcoins (alternative coins) refers to any cryptocurrency that is not Bitcoin.", "es": "Altcoins (monedas alternativas) se refiere a cualquier criptomoneda que no sea Bitcoin."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'main-cryptos';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What powers DeFi and NFTs on the blockchain?", "es": "¿Qué impulsa DeFi y NFTs en el blockchain?"}',
  '[{"en": "Bitcoin", "es": "Bitcoin"}, {"en": "Traditional banks", "es": "Bancos tradicionales"}, {"en": "Ethereum smart contracts", "es": "Contratos inteligentes de Ethereum"}, {"en": "Government systems", "es": "Sistemas gubernamentales"}]',
  2,
  '{"en": "Ethereum smart contracts are the foundation for most DeFi protocols and NFT marketplaces.", "es": "Los contratos inteligentes de Ethereum son la base para la mayoría de protocolos DeFi y mercados de NFT."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'main-cryptos';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is USDC?", "es": "¿Qué es USDC?"}',
  '[{"en": "US Digital Currency official", "es": "Moneda Digital de EE.UU. oficial"}, {"en": "A stablecoin pegged to $1", "es": "Una stablecoin anclada a $1"}, {"en": "A volatile cryptocurrency", "es": "Una criptomoneda volátil"}, {"en": "A gaming token", "es": "Un token de gaming"}]',
  1,
  '{"en": "USDC (USD Coin) is a stablecoin designed to maintain a value equal to one US dollar.", "es": "USDC (USD Coin) es una stablecoin diseñada para mantener un valor igual a un dólar estadounidense."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'main-cryptos';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Why are there so many different cryptocurrencies?", "es": "¿Por qué hay tantas criptomonedas diferentes?"}',
  '[{"en": "They all do exactly the same thing", "es": "Todas hacen exactamente lo mismo"}, {"en": "Different projects solve different problems", "es": "Diferentes proyectos resuelven diferentes problemas"}, {"en": "Its required by law", "es": "Es requerido por ley"}, {"en": "Only marketing differences", "es": "Solo diferencias de marketing"}]',
  1,
  '{"en": "Different cryptocurrencies are designed to solve different problems - payments, smart contracts, privacy, etc.", "es": "Diferentes criptomonedas están diseñadas para resolver diferentes problemas - pagos, contratos inteligentes, privacidad, etc."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'main-cryptos';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is Bitcoins primary use case?", "es": "¿Cuál es el caso de uso principal de Bitcoin?"}',
  '[{"en": "Smart contracts", "es": "Contratos inteligentes"}, {"en": "Store of value and digital gold", "es": "Reserva de valor y oro digital"}, {"en": "Fast payments", "es": "Pagos rápidos"}, {"en": "NFT creation", "es": "Creación de NFTs"}]',
  1,
  '{"en": "Bitcoin is primarily used as a store of value, often compared to digital gold.", "es": "Bitcoin se usa principalmente como reserva de valor, frecuentemente comparado con oro digital."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'main-cryptos';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What percentage of the crypto market do non-BTC/ETH altcoins represent?", "es": "¿Qué porcentaje del mercado crypto representan las altcoins que no son BTC/ETH?"}',
  '[{"en": "About 10%", "es": "Alrededor del 10%"}, {"en": "About 32%", "es": "Alrededor del 32%"}, {"en": "About 50%", "es": "Alrededor del 50%"}, {"en": "About 70%", "es": "Alrededor del 70%"}]',
  1,
  '{"en": "After Bitcoin (~50%) and Ethereum (~18%), altcoins make up approximately 32% of the market.", "es": "Después de Bitcoin (~50%) y Ethereum (~18%), las altcoins representan aproximadamente el 32% del mercado."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'main-cryptos';

-- SECTION 3: What is a Wallet? (15 questions)
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What does a crypto wallet actually store?", "es": "¿Qué almacena realmente una wallet crypto?"}',
  '[{"en": "The actual coins", "es": "Las monedas reales"}, {"en": "Private keys that prove ownership", "es": "Claves privadas que prueban propiedad"}, {"en": "Bank account numbers", "es": "Números de cuenta bancaria"}, {"en": "Physical tokens", "es": "Tokens físicos"}]',
  1,
  '{"en": "A crypto wallet stores your private keys - the crypto itself lives on the blockchain.", "es": "Una wallet crypto almacena tus claves privadas - el crypto mismo vive en el blockchain."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'wallets';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is a hot wallet?", "es": "¿Qué es una hot wallet?"}',
  '[{"en": "A wallet kept in high temperature", "es": "Una wallet guardada en alta temperatura"}, {"en": "A wallet connected to the internet", "es": "Una wallet conectada a internet"}, {"en": "A brand new wallet", "es": "Una wallet nueva"}, {"en": "A stolen wallet", "es": "Una wallet robada"}]',
  1,
  '{"en": "A hot wallet is connected to the internet - convenient for regular transactions but less secure.", "es": "Una hot wallet está conectada a internet - conveniente para transacciones regulares pero menos segura."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'wallets';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is a cold wallet?", "es": "¿Qué es una cold wallet?"}',
  '[{"en": "A wallet in a refrigerator", "es": "Una wallet en un refrigerador"}, {"en": "An offline storage device", "es": "Un dispositivo de almacenamiento offline"}, {"en": "A free wallet", "es": "Una wallet gratuita"}, {"en": "An old wallet", "es": "Una wallet vieja"}]',
  1,
  '{"en": "A cold wallet stores your keys offline, making it much more secure from hackers.", "es": "Una cold wallet almacena tus claves offline, haciéndola mucho más segura contra hackers."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'wallets';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is MetaMask?", "es": "¿Qué es MetaMask?"}',
  '[{"en": "A hardware wallet", "es": "Una wallet de hardware"}, {"en": "A popular browser extension hot wallet", "es": "Una popular hot wallet de extensión de navegador"}, {"en": "A cryptocurrency", "es": "Una criptomoneda"}, {"en": "An exchange", "es": "Un exchange"}]',
  1,
  '{"en": "MetaMask is a free, popular browser extension wallet for Ethereum and other networks.", "es": "MetaMask es una wallet gratuita y popular de extensión de navegador para Ethereum y otras redes."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'wallets';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What are examples of hardware wallets?", "es": "¿Cuáles son ejemplos de wallets de hardware?"}',
  '[{"en": "MetaMask and Trust Wallet", "es": "MetaMask y Trust Wallet"}, {"en": "Ledger and Trezor", "es": "Ledger y Trezor"}, {"en": "Coinbase and Binance", "es": "Coinbase y Binance"}, {"en": "Bitcoin and Ethereum", "es": "Bitcoin y Ethereum"}]',
  1,
  '{"en": "Ledger and Trezor are the most popular hardware (cold) wallets for secure offline storage.", "es": "Ledger y Trezor son las wallets de hardware (frías) más populares para almacenamiento offline seguro."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'wallets';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What does custodial mean for a wallet?", "es": "¿Qué significa custodial para una wallet?"}',
  '[{"en": "You hold your own keys", "es": "Tú tienes tus propias claves"}, {"en": "A third party holds your keys", "es": "Un tercero tiene tus claves"}, {"en": "Its very expensive", "es": "Es muy cara"}, {"en": "Its government-approved", "es": "Está aprobada por el gobierno"}]',
  1,
  '{"en": "Custodial wallets mean someone else (like an exchange) holds your private keys for you.", "es": "Wallets custodiales significa que alguien más (como un exchange) tiene tus claves privadas por ti."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'wallets';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is the advantage of non-custodial wallets?", "es": "¿Cuál es la ventaja de las wallets non-custodial?"}',
  '[{"en": "Better customer support", "es": "Mejor soporte al cliente"}, {"en": "Full ownership and control", "es": "Propiedad y control total"}, {"en": "Faster transactions", "es": "Transacciones más rápidas"}, {"en": "Free trading", "es": "Trading gratuito"}]',
  1,
  '{"en": "Non-custodial wallets give you full ownership - you control the keys, you own the crypto.", "es": "Wallets non-custodial te dan propiedad total - tú controlas las claves, tú posees el crypto."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'wallets';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Which is more secure for large holdings?", "es": "¿Cuál es más segura para grandes cantidades?"}',
  '[{"en": "Hot wallet", "es": "Hot wallet"}, {"en": "Exchange wallet", "es": "Wallet del exchange"}, {"en": "Cold/hardware wallet", "es": "Cold/hardware wallet"}, {"en": "Paper in a drawer", "es": "Papel en un cajón"}]',
  2,
  '{"en": "Hardware/cold wallets are recommended for large holdings due to their offline security.", "es": "Wallets de hardware/frías se recomiendan para grandes cantidades por su seguridad offline."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'wallets';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What happens if you lose your hardware wallet?", "es": "¿Qué pasa si pierdes tu wallet de hardware?"}',
  '[{"en": "Crypto is lost forever", "es": "El crypto se pierde para siempre"}, {"en": "You can recover with seed phrase", "es": "Puedes recuperar con la frase semilla"}, {"en": "Exchange refunds you", "es": "El exchange te reembolsa"}, {"en": "Nothing, auto-recovery", "es": "Nada, recuperación automática"}]',
  1,
  '{"en": "If you have your seed phrase, you can recover your wallet on a new device.", "es": "Si tienes tu frase semilla, puedes recuperar tu wallet en un nuevo dispositivo."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'wallets';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is Trust Wallet?", "es": "¿Qué es Trust Wallet?"}',
  '[{"en": "A hardware wallet", "es": "Una wallet de hardware"}, {"en": "A mobile hot wallet", "es": "Una hot wallet móvil"}, {"en": "A cryptocurrency", "es": "Una criptomoneda"}, {"en": "An exchange", "es": "Un exchange"}]',
  1,
  '{"en": "Trust Wallet is a popular free mobile hot wallet supporting multiple cryptocurrencies.", "es": "Trust Wallet es una popular hot wallet móvil gratuita que soporta múltiples criptomonedas."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'wallets';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "For a beginner, which wallet is recommended to start?", "es": "Para un principiante, ¿qué wallet se recomienda para empezar?"}',
  '[{"en": "Immediately buy a Ledger", "es": "Comprar inmediatamente un Ledger"}, {"en": "Start with MetaMask (free)", "es": "Empezar con MetaMask (gratis)"}, {"en": "Only use exchange wallets", "es": "Solo usar wallets del exchange"}, {"en": "Build your own wallet", "es": "Construir tu propia wallet"}]',
  1,
  '{"en": "MetaMask is recommended for beginners - its free, easy to use, and widely supported.", "es": "MetaMask se recomienda para principiantes - es gratis, fácil de usar, y ampliamente soportada."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'wallets';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Can one wallet hold multiple cryptocurrencies?", "es": "¿Puede una wallet contener múltiples criptomonedas?"}',
  '[{"en": "No, one wallet per coin", "es": "No, una wallet por moneda"}, {"en": "Yes, most wallets are multi-currency", "es": "Sí, la mayoría son multi-moneda"}, {"en": "Only hardware wallets", "es": "Solo wallets de hardware"}, {"en": "Only exchange wallets", "es": "Solo wallets del exchange"}]',
  1,
  '{"en": "Most modern wallets support multiple cryptocurrencies and networks in one interface.", "es": "La mayoría de wallets modernas soportan múltiples criptomonedas y redes en una interfaz."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'wallets';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is a wallet address?", "es": "¿Qué es una dirección de wallet?"}',
  '[{"en": "Your private key", "es": "Tu clave privada"}, {"en": "A public identifier to receive crypto", "es": "Un identificador público para recibir crypto"}, {"en": "Your password", "es": "Tu contraseña"}, {"en": "Your email address", "es": "Tu dirección de email"}]',
  1,
  '{"en": "A wallet address is like an email address - its public and safe to share for receiving funds.", "es": "Una dirección de wallet es como una dirección de email - es pública y segura para compartir al recibir fondos."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'wallets';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Why should you use both hot and cold wallets?", "es": "¿Por qué deberías usar tanto hot como cold wallets?"}',
  '[{"en": "Its legally required", "es": "Es requerido legalmente"}, {"en": "Balance convenience and security", "es": "Balance entre conveniencia y seguridad"}, {"en": "Double the crypto", "es": "Dobla el crypto"}, {"en": "Extra passwords", "es": "Contraseñas extra"}]',
  1,
  '{"en": "Hot for daily spending (convenient), cold for savings (secure) - like a checking and savings account.", "es": "Hot para gastos diarios (conveniente), cold para ahorros (segura) - como cuenta corriente y de ahorros."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'wallets';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is the downside of leaving crypto on an exchange?", "es": "¿Cuál es la desventaja de dejar crypto en un exchange?"}',
  '[{"en": "Its always safe", "es": "Siempre es seguro"}, {"en": "You dont truly own it - not your keys, not your coins", "es": "No lo posees realmente - no tus claves, no tus monedas"}, {"en": "Higher returns", "es": "Mayores retornos"}, {"en": "Better privacy", "es": "Mejor privacidad"}]',
  1,
  '{"en": "Not your keys, not your coins - exchanges can be hacked, freeze accounts, or go bankrupt.", "es": "No tus claves, no tus monedas - los exchanges pueden ser hackeados, congelar cuentas, o quebrar."}'
FROM course_sections WHERE course_id = 'crypto-101' AND slug = 'wallets';
