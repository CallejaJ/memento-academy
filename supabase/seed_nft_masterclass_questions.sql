-- =============================================
-- NFT MASTERCLASS - QUIZ QUESTIONS SEED
-- 7 Sections (5 questions each = 35 questions)
-- =============================================

-- SECTION 1: Fundamentals
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What does NFT stand for?", "es": "¿Qué significa NFT?"}$$,
  $$[{"en": "Non-Fungible Token", "es": "Token No Fungible"}, {"en": "New Fund Transfer", "es": "Nueva Transferencia de Fondos"}, {"en": "Network File Type", "es": "Tipo de Archivo de Red"}, {"en": "Non-Financial Token", "es": "Token No Financiero"}]$$,
  0,
  $${"en": "NFT stands for Non-Fungible Token, representing a unique digital asset that cannot be exchanged on a like-for-like basis.", "es": "NFT significa Token No Fungible, representando un activo digital único que no puede ser intercambiado por otro igual."}$$
FROM course_sections WHERE course_id = 'nft-masterclass' AND slug = 'fundamentals';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What makes an NFT different from Bitcoin?", "es": "¿Qué hace diferente a un NFT de Bitcoin?"}$$,
  $$[{"en": "NFTs are faster", "es": "Los NFTs son más rápidos"}, {"en": "Each NFT is unique and non-interchangeable", "es": "Cada NFT es único y no intercambiable"}, {"en": "NFTs are free", "es": "Los NFTs son gratis"}, {"en": "NFTs don't use blockchain", "es": "Los NFTs no usan blockchain"}]$$,
  1,
  $${"en": "Unlike cryptocurrencies where each unit is identical (fungible), each NFT has unique properties and cannot be exchanged equally for another.", "es": "A diferencia de las criptomonedas donde cada unidad es idéntica (fungible), cada NFT tiene propiedades únicas y no puede intercambiarse igual por otro."}$$
FROM course_sections WHERE course_id = 'nft-masterclass' AND slug = 'fundamentals';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is the most common NFT standard on Ethereum?", "es": "¿Cuál es el estándar NFT más común en Ethereum?"}$$,
  $$[{"en": "ERC-20", "es": "ERC-20"}, {"en": "ERC-721", "es": "ERC-721"}, {"en": "ERC-1000", "es": "ERC-1000"}, {"en": "BTC-NFT", "es": "BTC-NFT"}]$$,
  1,
  $${"en": "ERC-721 is the standard for creating unique, non-fungible tokens on Ethereum. ERC-20 is for fungible tokens like cryptocurrencies.", "es": "ERC-721 es el estándar para crear tokens únicos y no fungibles en Ethereum. ERC-20 es para tokens fungibles como criptomonedas."}$$
FROM course_sections WHERE course_id = 'nft-masterclass' AND slug = 'fundamentals';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Where is NFT metadata typically stored?", "es": "¿Dónde se almacenan típicamente los metadatos NFT?"}$$,
  $$[{"en": "On the blockchain itself", "es": "En la blockchain misma"}, {"en": "In your wallet", "es": "En tu wallet"}, {"en": "On IPFS or centralized servers", "es": "En IPFS o servidores centralizados"}, {"en": "In the cloud only", "es": "Solo en la nube"}]$$,
  2,
  $${"en": "The token itself lives on the blockchain, but the actual image/file is usually stored on IPFS (decentralized) or centralized servers to save space.", "es": "El token vive en la blockchain, pero la imagen/archivo real usualmente se almacena en IPFS (descentralizado) o servidores centralizados para ahorrar espacio."}$$
FROM course_sections WHERE course_id = 'nft-masterclass' AND slug = 'fundamentals';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Which is NOT a common NFT use case?", "es": "¿Cuál NO es un caso de uso común de NFT?"}$$,
  $$[{"en": "Digital art", "es": "Arte digital"}, {"en": "Gaming items", "es": "Ítems de juego"}, {"en": "Paying for groceries", "es": "Pagar la compra del supermercado"}, {"en": "Event tickets", "es": "Entradas a eventos"}]$$,
  2,
  $${"en": "NFTs are not used as everyday currency. They represent unique digital assets like art, game items, and tickets - not payment for regular purchases.", "es": "Los NFTs no se usan como moneda diaria. Representan activos digitales únicos como arte, ítems de juego y entradas - no pagos de compras regulares."}$$
FROM course_sections WHERE course_id = 'nft-masterclass' AND slug = 'fundamentals';

-- SECTION 2: Minting
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is 'minting' an NFT?", "es": "¿Qué es 'mintear' un NFT?"}$$,
  $$[{"en": "Buying an existing NFT", "es": "Comprar un NFT existente"}, {"en": "Creating a new NFT on the blockchain", "es": "Crear un nuevo NFT en la blockchain"}, {"en": "Selling an NFT", "es": "Vender un NFT"}, {"en": "Deleting an NFT", "es": "Borrar un NFT"}]$$,
  1,
  $${"en": "Minting is the process of creating a new NFT by deploying it to the blockchain for the first time.", "es": "Mintear es el proceso de crear un nuevo NFT desplegándolo en la blockchain por primera vez."}$$
FROM course_sections WHERE course_id = 'nft-masterclass' AND slug = 'minting';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is 'lazy minting'?", "es": "¿Qué es 'lazy minting'?"}$$,
  $$[{"en": "Minting slowly", "es": "Mintear lentamente"}, {"en": "Deferring gas costs until the NFT is sold", "es": "Diferir costos de gas hasta que el NFT se venda"}, {"en": "Free minting", "es": "Mintear gratis"}, {"en": "Automatic minting", "es": "Minteo automático"}]$$,
  1,
  $${"en": "Lazy minting lets creators list NFTs without paying gas upfront. The buyer pays gas when they purchase, making it risk-free for creators.", "es": "El lazy minting permite a creadores listar NFTs sin pagar gas por adelantado. El comprador paga el gas al comprar, siendo libre de riesgo para creadores."}$$
FROM course_sections WHERE course_id = 'nft-masterclass' AND slug = 'minting';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What are 'royalties' in NFTs?", "es": "¿Qué son las 'regalías' en NFTs?"}$$,
  $$[{"en": "A tax on NFTs", "es": "Un impuesto sobre NFTs"}, {"en": "Percentage paid to creator on every resale", "es": "Porcentaje pagado al creador en cada reventa"}, {"en": "A type of NFT", "es": "Un tipo de NFT"}, {"en": "Membership fees", "es": "Cuotas de membresía"}]$$,
  1,
  $${"en": "Royalties let creators earn a percentage (typically 2.5-10%) every time their NFT is resold on secondary markets.", "es": "Las regalías permiten a creadores ganar un porcentaje (típicamente 2.5-10%) cada vez que su NFT se revende en mercados secundarios."}$$
FROM course_sections WHERE course_id = 'nft-masterclass' AND slug = 'minting';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Which blockchain is known for low-cost NFT minting?", "es": "¿Qué blockchain es conocida por minteo NFT de bajo costo?"}$$,
  $$[{"en": "Bitcoin", "es": "Bitcoin"}, {"en": "Polygon", "es": "Polygon"}, {"en": "Ethereum Mainnet only", "es": "Solo Ethereum Mainnet"}, {"en": "None of them", "es": "Ninguna"}]$$,
  1,
  $${"en": "Polygon offers very low gas fees compared to Ethereum mainnet, making it popular for creators who want to mint affordably.", "es": "Polygon ofrece tarifas de gas muy bajas comparadas con Ethereum mainnet, haciéndola popular para creadores que quieren mintear económicamente."}$$
FROM course_sections WHERE course_id = 'nft-masterclass' AND slug = 'minting';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What should you NEVER mint?", "es": "¿Qué NUNCA deberías mintear?"}$$,
  $$[{"en": "Your own artwork", "es": "Tu propia obra de arte"}, {"en": "Content you don't own rights to", "es": "Contenido del que no tienes derechos"}, {"en": "Music you created", "es": "Música que creaste"}, {"en": "Photos you took", "es": "Fotos que tomaste"}]$$,
  1,
  $${"en": "Only mint content you own or have rights to. Minting copyrighted work without permission is illegal and can result in legal action.", "es": "Solo mintea contenido que poseas o tengas derechos. Mintear trabajo con copyright sin permiso es ilegal y puede resultar en acción legal."}$$
FROM course_sections WHERE course_id = 'nft-masterclass' AND slug = 'minting';

-- SECTION 3: Marketplaces
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is OpenSea?", "es": "¿Qué es OpenSea?"}$$,
  $$[{"en": "A blockchain", "es": "Una blockchain"}, {"en": "The largest NFT marketplace", "es": "El marketplace NFT más grande"}, {"en": "A cryptocurrency", "es": "Una criptomoneda"}, {"en": "A wallet", "es": "Una wallet"}]$$,
  1,
  $${"en": "OpenSea is the largest NFT marketplace with over 80 million items across multiple blockchains including Ethereum, Polygon, and Solana.", "es": "OpenSea es el marketplace NFT más grande con más de 80 millones de ítems en múltiples blockchains incluyendo Ethereum, Polygon y Solana."}$$
FROM course_sections WHERE course_id = 'nft-masterclass' AND slug = 'marketplaces-trading';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is 'floor price'?", "es": "¿Qué es 'precio suelo'?"}$$,
  $$[{"en": "The highest price in a collection", "es": "El precio más alto en una colección"}, {"en": "The lowest listed price in a collection", "es": "El precio listado más bajo en una colección"}, {"en": "The average price", "es": "El precio promedio"}, {"en": "The minting price", "es": "El precio de minteo"}]$$,
  1,
  $${"en": "Floor price is the cheapest NFT available in a collection. It's often used as a baseline indicator of a collection's value.", "es": "El precio suelo es el NFT más barato disponible en una colección. Se usa a menudo como indicador base del valor de una colección."}$$
FROM course_sections WHERE course_id = 'nft-masterclass' AND slug = 'marketplaces-trading';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Which marketplace is known for zero platform fees?", "es": "¿Qué marketplace es conocido por cero tarifas de plataforma?"}$$,
  $$[{"en": "OpenSea", "es": "OpenSea"}, {"en": "Foundation", "es": "Foundation"}, {"en": "Blur", "es": "Blur"}, {"en": "Rarible", "es": "Rarible"}]$$,
  2,
  $${"en": "Blur became popular by offering 0% platform fees (during beta) and advanced trading tools for professional NFT traders.", "es": "Blur se hizo popular ofreciendo 0% de tarifas de plataforma (durante beta) y herramientas avanzadas para traders profesionales de NFT."}$$
FROM course_sections WHERE course_id = 'nft-masterclass' AND slug = 'marketplaces-trading';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What should you ALWAYS do before buying an NFT?", "es": "¿Qué deberías SIEMPRE hacer antes de comprar un NFT?"}$$,
  $$[{"en": "Buy immediately", "es": "Comprar inmediatamente"}, {"en": "Verify the contract address and creator", "es": "Verificar la dirección del contrato y creador"}, {"en": "Trust the seller's word", "es": "Confiar en la palabra del vendedor"}, {"en": "Skip research", "es": "Saltarse la investigación"}]$$,
  1,
  $${"en": "Always verify the official contract address and creator to avoid buying counterfeit or scam NFTs.", "es": "Siempre verifica la dirección oficial del contrato y creador para evitar comprar NFTs falsificados o estafas."}$$
FROM course_sections WHERE course_id = 'nft-masterclass' AND slug = 'marketplaces-trading';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is Magic Eden known for?", "es": "¿Por qué es conocido Magic Eden?"}$$,
  $$[{"en": "Ethereum only", "es": "Solo Ethereum"}, {"en": "Being Solana's leading marketplace", "es": "Ser el marketplace líder de Solana"}, {"en": "High fees", "es": "Tarifas altas"}, {"en": "No NFT support", "es": "Sin soporte NFT"}]$$,
  1,
  $${"en": "Magic Eden is the leading NFT marketplace on the Solana blockchain, known for fast transactions and low fees.", "es": "Magic Eden es el marketplace NFT líder en la blockchain Solana, conocido por transacciones rápidas y bajas tarifas."}$$
FROM course_sections WHERE course_id = 'nft-masterclass' AND slug = 'marketplaces-trading';

-- SECTION 4: Strategies
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is a 'blue-chip' NFT collection?", "es": "¿Qué es una colección NFT 'blue-chip'?"}$$,
  $$[{"en": "New and unproven projects", "es": "Proyectos nuevos y no probados"}, {"en": "Established collections with proven track records", "es": "Colecciones establecidas con historial probado"}, {"en": "Free NFTs", "es": "NFTs gratis"}, {"en": "Gaming NFTs only", "es": "Solo NFTs de juegos"}]$$,
  1,
  $${"en": "Blue-chip NFTs like CryptoPunks and BAYC have established value, strong communities, and more stable floor prices over time.", "es": "NFTs blue-chip como CryptoPunks y BAYC tienen valor establecido, comunidades fuertes y precios suelo más estables con el tiempo."}$$
FROM course_sections WHERE course_id = 'nft-masterclass' AND slug = 'strategies';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is a 'whitelist' in NFT projects?", "es": "¿Qué es una 'whitelist' en proyectos NFT?"}$$,
  $$[{"en": "A banned list", "es": "Una lista de baneados"}, {"en": "Early access to mint before public sale", "es": "Acceso temprano para mintear antes de venta pública"}, {"en": "A type of NFT", "es": "Un tipo de NFT"}, {"en": "A trading strategy", "es": "Una estrategia de trading"}]$$,
  1,
  $${"en": "Whitelists give selected users early minting access, often at lower prices and without competing in gas wars.", "es": "Las whitelists dan a usuarios seleccionados acceso temprano al minteo, a menudo a precios más bajos y sin competir en guerras de gas."}$$
FROM course_sections WHERE course_id = 'nft-masterclass' AND slug = 'strategies';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Which is a RED FLAG when evaluating an NFT project?", "es": "¿Cuál es una BANDERA ROJA al evaluar un proyecto NFT?"}$$,
  $$[{"en": "Anonymous team with no track record", "es": "Equipo anónimo sin historial"}, {"en": "Clear roadmap", "es": "Roadmap claro"}, {"en": "Active community", "es": "Comunidad activa"}, {"en": "Audited smart contract", "es": "Contrato inteligente auditado"}]$$,
  0,
  $${"en": "Anonymous teams with no verifiable history are a major red flag. They can easily disappear with funds (rug pull).", "es": "Equipos anónimos sin historia verificable son una gran bandera roja. Pueden desaparecer fácilmente con los fondos (rug pull)."}$$
FROM course_sections WHERE course_id = 'nft-masterclass' AND slug = 'strategies';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What percentage should speculative NFTs be in a balanced portfolio?", "es": "¿Qué porcentaje deberían ser NFTs especulativos en un portafolio balanceado?"}$$,
  $$[{"en": "100%", "es": "100%"}, {"en": "20-30%", "es": "20-30%"}, {"en": "0%", "es": "0%"}, {"en": "75%", "es": "75%"}]$$,
  1,
  $${"en": "A balanced approach suggests 20-30% in speculative plays, with the majority in established blue-chips and mid-caps.", "es": "Un enfoque balanceado sugiere 20-30% en jugadas especulativas, con la mayoría en blue-chips establecidos y mid-caps."}$$
FROM course_sections WHERE course_id = 'nft-masterclass' AND slug = 'strategies';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is 'rarity sniping'?", "es": "¿Qué es 'rarity sniping'?"}$$,
  $$[{"en": "Destroying rare NFTs", "es": "Destruir NFTs raros"}, {"en": "Finding undervalued rare items before others notice", "es": "Encontrar ítems raros infravalorados antes que otros lo noten"}, {"en": "Stealing NFTs", "es": "Robar NFTs"}, {"en": "Creating fake rarity", "es": "Crear rareza falsa"}]$$,
  1,
  $${"en": "Rarity sniping means quickly identifying and buying rare NFTs that are priced below their true value based on traits.", "es": "Rarity sniping significa identificar y comprar rápidamente NFTs raros que están valorados por debajo de su verdadero valor basado en rasgos."}$$
FROM course_sections WHERE course_id = 'nft-masterclass' AND slug = 'strategies';

-- SECTION 5: Legal
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "When you buy an NFT, do you automatically own the copyright?", "es": "Cuando compras un NFT, ¿posees automáticamente el copyright?"}$$,
  $$[{"en": "Yes, always", "es": "Sí, siempre"}, {"en": "No, usually you don't", "es": "No, usualmente no"}, {"en": "Only for expensive NFTs", "es": "Solo para NFTs caros"}, {"en": "Only on Ethereum", "es": "Solo en Ethereum"}]$$,
  1,
  $${"en": "Owning an NFT usually means owning the token, not the copyright. Artists retain IP rights unless explicitly transferred.", "es": "Poseer un NFT usualmente significa poseer el token, no el copyright. Los artistas retienen derechos de PI a menos que se transfieran explícitamente."}$$
FROM course_sections WHERE course_id = 'nft-masterclass' AND slug = 'legal-ip';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What does CC0 mean for an NFT?", "es": "¿Qué significa CC0 para un NFT?"}$$,
  $$[{"en": "Very expensive", "es": "Muy caro"}, {"en": "Creator waived all rights - use freely", "es": "El creador renunció a todos los derechos - usa libremente"}, {"en": "Cannot be sold", "es": "No se puede vender"}, {"en": "Only for gaming", "es": "Solo para juegos"}]$$,
  1,
  $${"en": "CC0 (Creative Commons Zero) means the creator has given up all rights. Holders can use the art commercially, create derivatives, etc.", "es": "CC0 (Creative Commons Zero) significa que el creador renunció a todos los derechos. Los holders pueden usar el arte comercialmente, crear derivados, etc."}$$
FROM course_sections WHERE course_id = 'nft-masterclass' AND slug = 'legal-ip';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Are NFT profits taxable?", "es": "¿Son gravables las ganancias de NFT?"}$$,
  $$[{"en": "No, never", "es": "No, nunca"}, {"en": "Yes, in most jurisdictions", "es": "Sí, en la mayoría de jurisdicciones"}, {"en": "Only above $1 million", "es": "Solo arriba de $1 millón"}, {"en": "Only for businesses", "es": "Solo para negocios"}]$$,
  1,
  $${"en": "NFT profits are typically treated as capital gains and are taxable in most countries. Keep records of all transactions.", "es": "Las ganancias de NFT típicamente se tratan como ganancias de capital y son gravables en la mayoría de países. Mantén registros de todas las transacciones."}$$
FROM course_sections WHERE course_id = 'nft-masterclass' AND slug = 'legal-ip';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is a 'fractionalized NFT'?", "es": "¿Qué es un 'NFT fraccionado'?"}$$,
  $$[{"en": "A broken NFT", "es": "Un NFT roto"}, {"en": "An NFT split into multiple ownership shares", "es": "Un NFT dividido en múltiples acciones de propiedad"}, {"en": "A cheap NFT", "es": "Un NFT barato"}, {"en": "An NFT on multiple chains", "es": "Un NFT en múltiples cadenas"}]$$,
  1,
  $${"en": "Fractionalization lets multiple people own shares of a single expensive NFT, making high-value art more accessible.", "es": "La fraccionación permite a múltiples personas poseer acciones de un solo NFT caro, haciendo el arte de alto valor más accesible."}$$
FROM course_sections WHERE course_id = 'nft-masterclass' AND slug = 'legal-ip';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Which BAYC holder right is notable?", "es": "¿Qué derecho de holders de BAYC es notable?"}$$,
  $$[{"en": "Free Bitcoin", "es": "Bitcoin gratis"}, {"en": "Commercial rights to their ape", "es": "Derechos comerciales sobre su simio"}, {"en": "Voting in elections", "es": "Votar en elecciones"}, {"en": "Free gas forever", "es": "Gas gratis para siempre"}]$$,
  1,
  $${"en": "BAYC grants holders commercial rights to use their specific ape image for merchandise, brands, and other commercial purposes.", "es": "BAYC otorga a holders derechos comerciales para usar su imagen específica de simio para mercancía, marcas y otros propósitos comerciales."}$$
FROM course_sections WHERE course_id = 'nft-masterclass' AND slug = 'legal-ip';

-- SECTION 6: Future
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What are 'Dynamic NFTs'?", "es": "¿Qué son los 'NFTs Dinámicos'?"}$$,
  $$[{"en": "NFTs that move fast", "es": "NFTs que se mueven rápido"}, {"en": "NFTs that change based on external data", "es": "NFTs que cambian basados en datos externos"}, {"en": "Animated GIFs only", "es": "Solo GIFs animados"}, {"en": "NFTs that expire", "es": "NFTs que expiran"}]$$,
  1,
  $${"en": "Dynamic NFTs can update their appearance or properties based on real-world data like weather, sports scores, or time.", "es": "Los NFTs dinámicos pueden actualizar su apariencia o propiedades basados en datos del mundo real como clima, resultados deportivos o tiempo."}$$
FROM course_sections WHERE course_id = 'nft-masterclass' AND slug = 'future';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What are 'Soulbound Tokens'?", "es": "¿Qué son los 'Soulbound Tokens'?"}$$,
  $$[{"en": "Tokens for gaming", "es": "Tokens para juegos"}, {"en": "Non-transferable identity tokens", "es": "Tokens de identidad no transferibles"}, {"en": "Very rare NFTs", "es": "NFTs muy raros"}, {"en": "Free tokens", "es": "Tokens gratis"}]$$,
  1,
  $${"en": "Soulbound tokens are non-transferable NFTs that represent credentials, achievements, or identity - they stay with you forever.", "es": "Los soulbound tokens son NFTs no transferibles que representan credenciales, logros o identidad - se quedan contigo para siempre."}$$
FROM course_sections WHERE course_id = 'nft-masterclass' AND slug = 'future';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What are RWAs in NFT context?", "es": "¿Qué son los RWAs en el contexto NFT?"}$$,
  $$[{"en": "Random Wallet Addresses", "es": "Direcciones de Wallet Aleatorias"}, {"en": "Real World Assets tokenized as NFTs", "es": "Activos del Mundo Real tokenizados como NFTs"}, {"en": "Rare Web Art", "es": "Arte Web Raro"}, {"en": "Ready-to-Wear Art", "es": "Arte Ready-to-Wear"}]$$,
  1,
  $${"en": "RWAs (Real World Assets) are physical items like real estate or luxury goods represented as NFTs for fractional ownership or authentication.", "es": "RWAs (Activos del Mundo Real) son ítems físicos como bienes raíces o artículos de lujo representados como NFTs para propiedad fraccionada o autenticación."}$$
FROM course_sections WHERE course_id = 'nft-masterclass' AND slug = 'future';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "How is the metaverse related to NFTs?", "es": "¿Cómo está relacionado el metaverso con los NFTs?"}$$,
  $$[{"en": "They are unrelated", "es": "No están relacionados"}, {"en": "NFTs enable ownership of virtual land and items", "es": "Los NFTs permiten propiedad de tierra e ítems virtuales"}, {"en": "Metaverse replaces NFTs", "es": "El metaverso reemplaza los NFTs"}, {"en": "NFTs only work in metaverse", "es": "Los NFTs solo funcionan en el metaverso"}]$$,
  1,
  $${"en": "NFTs enable true ownership of metaverse assets - virtual land, wearables, and items that can be traded across platforms.", "es": "Los NFTs permiten propiedad real de activos del metaverso - tierra virtual, wearables e ítems que pueden intercambiarse entre plataformas."}$$
FROM course_sections WHERE course_id = 'nft-masterclass' AND slug = 'future';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is 'music NFT'?", "es": "¿Qué es un 'NFT de música'?"}$$,
  $$[{"en": "An NFT that plays music", "es": "Un NFT que reproduce música"}, {"en": "Tokenized music rights or exclusive content", "es": "Derechos de música tokenizados o contenido exclusivo"}, {"en": "A music streaming service", "es": "Un servicio de streaming musical"}, {"en": "A type of cryptocurrency", "es": "Un tipo de criptomoneda"}]$$,
  1,
  $${"en": "Music NFTs let artists sell tokenized songs, albums, or royalty shares directly to fans, cutting out traditional middlemen.", "es": "Los NFTs de música permiten a artistas vender canciones, álbumes o acciones de regalías tokenizadas directamente a fans, eliminando intermediarios tradicionales."}$$
FROM course_sections WHERE course_id = 'nft-masterclass' AND slug = 'future';

-- SECTION 7: FAQs
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Can you just screenshot an NFT to own it?", "es": "¿Puedes simplemente tomar una captura de un NFT para poseerlo?"}$$,
  $$[{"en": "Yes, it's the same thing", "es": "Sí, es lo mismo"}, {"en": "No, you only have a copy of the image", "es": "No, solo tienes una copia de la imagen"}, {"en": "Yes, if you print it", "es": "Sí, si lo imprimes"}, {"en": "Depends on the NFT", "es": "Depende del NFT"}]$$,
  1,
  $${"en": "A screenshot only copies the image. The NFT is about blockchain-verified ownership and provenance, not just the visual.", "es": "Una captura solo copia la imagen. El NFT es sobre propiedad verificada en blockchain y procedencia, no solo lo visual."}$$
FROM course_sections WHERE course_id = 'nft-masterclass' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Are NFTs still bad for the environment after Ethereum's merge?", "es": "¿Siguen siendo los NFTs malos para el medio ambiente después del merge de Ethereum?"}$$,
  $$[{"en": "Yes, same as before", "es": "Sí, igual que antes"}, {"en": "No, energy use dropped 99.9%", "es": "No, el consumo bajó 99.9%"}, {"en": "They're worse now", "es": "Son peores ahora"}, {"en": "Environment doesn't matter", "es": "El medio ambiente no importa"}]$$,
  1,
  $${"en": "Ethereum's switch to Proof-of-Stake reduced energy consumption by approximately 99.9%, making NFTs much more eco-friendly.", "es": "El cambio de Ethereum a Proof-of-Stake redujo el consumo de energía aproximadamente 99.9%, haciendo los NFTs mucho más eco-friendly."}$$
FROM course_sections WHERE course_id = 'nft-masterclass' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What wallet is best for Solana NFTs?", "es": "¿Qué wallet es mejor para NFTs de Solana?"}$$,
  $$[{"en": "MetaMask", "es": "MetaMask"}, {"en": "Phantom", "es": "Phantom"}, {"en": "Ledger only", "es": "Solo Ledger"}, {"en": "Any wallet", "es": "Cualquier wallet"}]$$,
  1,
  $${"en": "Phantom is the most popular wallet for the Solana ecosystem, while MetaMask is standard for Ethereum and Polygon.", "es": "Phantom es la wallet más popular para el ecosistema Solana, mientras MetaMask es estándar para Ethereum y Polygon."}$$
FROM course_sections WHERE course_id = 'nft-masterclass' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is a 'gas war'?", "es": "¿Qué es una 'guerra de gas'?"}$$,
  $$[{"en": "A blockchain attack", "es": "Un ataque blockchain"}, {"en": "When many people try to mint at once, driving up fees", "es": "Cuando mucha gente intenta mintear a la vez, subiendo tarifas"}, {"en": "A type of NFT game", "es": "Un tipo de juego NFT"}, {"en": "Free gas promotion", "es": "Promoción de gas gratis"}]$$,
  1,
  $${"en": "Gas wars happen when thousands compete to mint a popular drop simultaneously, causing transaction fees to spike dramatically.", "es": "Las guerras de gas pasan cuando miles compiten por mintear un drop popular simultáneamente, causando que las tarifas suban dramáticamente."}$$
FROM course_sections WHERE course_id = 'nft-masterclass' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Can you lose your NFT forever?", "es": "¿Puedes perder tu NFT para siempre?"}$$,
  $$[{"en": "No, they're always recoverable", "es": "No, siempre son recuperables"}, {"en": "Yes, if you lose your seed phrase or get hacked", "es": "Sí, si pierdes tu frase semilla o te hackean"}, {"en": "Only if you sell them", "es": "Solo si los vendes"}, {"en": "Never", "es": "Nunca"}]$$,
  1,
  $${"en": "If you lose your wallet's seed phrase or fall for a phishing scam, your NFTs can be lost or stolen forever with no recovery.", "es": "Si pierdes la frase semilla de tu wallet o caes en una estafa de phishing, tus NFTs pueden perderse o ser robados para siempre sin recuperación."}$$
FROM course_sections WHERE course_id = 'nft-masterclass' AND slug = 'faqs';
