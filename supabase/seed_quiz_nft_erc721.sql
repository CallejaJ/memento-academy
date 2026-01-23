-- =============================================
-- NFT & ERC-721 Technical Questions
-- Preguntas técnicas avanzadas sobre el estándar ERC-721
-- Run this to add specialized NFT protocol questions
-- =============================================

INSERT INTO game_questions (category, difficulty, question_text, options, correct_index, explanation, from_course) VALUES

-- =============================================
-- ERC-721 PROTOCOL QUESTIONS (15 questions)
-- =============================================

-- Medium difficulty
('NFTs', 'medium',
 '{"en": "What Ethereum standard defines NFTs?", "es": "¿Qué estándar de Ethereum define los NFTs?"}',
 '[{"en": "ERC-20 token standard", "es": "Estándar de token ERC-20"}, {"en": "ERC-721 token standard", "es": "Estándar de token ERC-721"}, {"en": "ERC-1155 multi-token", "es": "Multi-token ERC-1155"}, {"en": "EIP-2981 royalties", "es": "Regalías EIP-2981"}]',
 1,
 '{"en": "ERC-721 is the original NFT standard on Ethereum, defining non-fungible tokens.", "es": "ERC-721 es el estándar original de NFT en Ethereum, definiendo tokens no fungibles."}',
 'nft-masterclass'),

('NFTs', 'medium',
 '{"en": "What function returns the owner of an NFT?", "es": "¿Qué función retorna el propietario de un NFT?"}',
 '[{"en": "getOwner(tokenId)", "es": "getOwner(tokenId)"}, {"en": "ownerOf(tokenId)", "es": "ownerOf(tokenId)"}, {"en": "tokenOwner(tokenId)", "es": "tokenOwner(tokenId)"}, {"en": "holder(tokenId)", "es": "holder(tokenId)"}]',
 1,
 '{"en": "ownerOf(tokenId) is the standard ERC-721 function to get the owner of a specific token.", "es": "ownerOf(tokenId) es la función estándar ERC-721 para obtener el propietario de un token específico."}',
 'nft-masterclass'),

('NFTs', 'medium',
 '{"en": "What function allows transferring an NFT?", "es": "¿Qué función permite transferir un NFT?"}',
 '[{"en": "send(to, tokenId)", "es": "send(to, tokenId)"}, {"en": "move(from, to, id)", "es": "move(from, to, id)"}, {"en": "transferFrom(from, to, tokenId)", "es": "transferFrom(from, to, tokenId)"}, {"en": "sendToken(to, id)", "es": "sendToken(to, id)"}]',
 2,
 '{"en": "transferFrom(from, to, tokenId) is the ERC-721 function to transfer NFTs between addresses.", "es": "transferFrom(from, to, tokenId) es la función ERC-721 para transferir NFTs entre direcciones."}',
 'nft-masterclass'),

('NFTs', 'medium',
 '{"en": "What does the approve function do in ERC-721?", "es": "¿Qué hace la función approve en ERC-721?"}',
 '[{"en": "Mints a new NFT token", "es": "Crea un nuevo token NFT"}, {"en": "Burns an existing token", "es": "Quema un token existente"}, {"en": "Grants transfer permission", "es": "Concede permiso de transferencia"}, {"en": "Changes token metadata", "es": "Cambia los metadatos del token"}]',
 2,
 '{"en": "approve() grants another address permission to transfer a specific NFT on your behalf.", "es": "approve() concede a otra dirección permiso para transferir un NFT específico en tu nombre."}',
 'nft-masterclass'),

('NFTs', 'medium',
 '{"en": "What is the purpose of tokenURI in ERC-721?", "es": "¿Cuál es el propósito de tokenURI en ERC-721?"}',
 '[{"en": "Returns token balance", "es": "Retorna el balance de tokens"}, {"en": "Returns the owner address", "es": "Retorna la dirección del propietario"}, {"en": "Returns metadata location", "es": "Retorna la ubicación de metadatos"}, {"en": "Returns transfer history", "es": "Retorna el historial de transferencias"}]',
 2,
 '{"en": "tokenURI() returns a URI pointing to the JSON metadata describing the NFT.", "es": "tokenURI() retorna una URI que apunta a los metadatos JSON que describen el NFT."}',
 'nft-masterclass'),

-- Hard difficulty
('NFTs', 'hard',
 '{"en": "What event is emitted when an NFT is transferred?", "es": "¿Qué evento se emite cuando se transfiere un NFT?"}',
 '[{"en": "TokenMoved event", "es": "Evento TokenMoved"}, {"en": "NFTTransfer event", "es": "Evento NFTTransfer"}, {"en": "Transfer event", "es": "Evento Transfer"}, {"en": "OwnerChanged event", "es": "Evento OwnerChanged"}]',
 2,
 '{"en": "The Transfer(from, to, tokenId) event is emitted on every NFT transfer, including minting.", "es": "El evento Transfer(from, to, tokenId) se emite en cada transferencia de NFT, incluyendo el minting."}',
 'nft-masterclass'),

('NFTs', 'hard',
 '{"en": "What distinguishes ERC-721 from ERC-1155?", "es": "¿Qué distingue ERC-721 de ERC-1155?"}',
 '[{"en": "ERC-721 is much faster", "es": "ERC-721 es mucho más rápido"}, {"en": "ERC-1155 supports batch operations", "es": "ERC-1155 soporta operaciones por lotes"}, {"en": "ERC-721 has lower gas costs", "es": "ERC-721 tiene menor costo de gas"}, {"en": "ERC-1155 only supports NFTs", "es": "ERC-1155 solo soporta NFTs"}]',
 1,
 '{"en": "ERC-1155 supports batch transfers and can handle both fungible and non-fungible tokens.", "es": "ERC-1155 soporta transferencias por lotes y puede manejar tokens fungibles y no fungibles."}',
 'nft-masterclass'),

('NFTs', 'hard',
 '{"en": "What is on-chain vs off-chain metadata?", "es": "¿Qué son los metadatos on-chain vs off-chain?"}',
 '[{"en": "On-chain is encrypted data", "es": "On-chain son datos encriptados"}, {"en": "Off-chain means no metadata", "es": "Off-chain significa sin metadatos"}, {"en": "On-chain stores data in contract", "es": "On-chain almacena datos en el contrato"}, {"en": "They are exactly the same", "es": "Son exactamente lo mismo"}]',
 2,
 '{"en": "On-chain metadata is stored directly in the smart contract; off-chain is stored externally (IPFS, servers).", "es": "Los metadatos on-chain se almacenan en el contrato inteligente; off-chain se almacenan externamente (IPFS, servidores)."}',
 'nft-masterclass'),

('NFTs', 'hard',
 '{"en": "What does safeTransferFrom do differently?", "es": "¿Qué hace safeTransferFrom de manera diferente?"}',
 '[{"en": "Uses less gas than transfer", "es": "Usa menos gas que transfer"}, {"en": "Only works with EOA wallets", "es": "Solo funciona con wallets EOA"}, {"en": "Checks if receiver can handle NFTs", "es": "Verifica si el receptor puede manejar NFTs"}, {"en": "Automatically sets approval", "es": "Establece aprobación automáticamente"}]',
 2,
 '{"en": "safeTransferFrom checks if the receiver is a contract and if it implements IERC721Receiver.", "es": "safeTransferFrom verifica si el receptor es un contrato y si implementa IERC721Receiver."}',
 'nft-masterclass'),

('NFTs', 'hard',
 '{"en": "What interface must NFT-receiving contracts implement?", "es": "¿Qué interfaz deben implementar los contratos que reciben NFTs?"}',
 '[{"en": "IERC20Receiver interface", "es": "Interfaz IERC20Receiver"}, {"en": "INFTHandler interface", "es": "Interfaz INFTHandler"}, {"en": "IERC721Receiver interface", "es": "Interfaz IERC721Receiver"}, {"en": "ITokenReceiver interface", "es": "Interfaz ITokenReceiver"}]',
 2,
 '{"en": "Contracts must implement IERC721Receiver with onERC721Received() to safely receive NFTs.", "es": "Los contratos deben implementar IERC721Receiver con onERC721Received() para recibir NFTs de forma segura."}',
 'nft-masterclass'),

('NFTs', 'hard',
 '{"en": "What is a Soulbound Token (SBT)?", "es": "¿Qué es un Token Soulbound (SBT)?"}',
 '[{"en": "A very rare NFT type", "es": "Un tipo de NFT muy raro"}, {"en": "An NFT linked to a game", "es": "Un NFT vinculado a un juego"}, {"en": "A non-transferable token", "es": "Un token no transferible"}, {"en": "A token with high value", "es": "Un token de alto valor"}]',
 2,
 '{"en": "Soulbound Tokens are non-transferable NFTs that represent credentials, achievements, or identity.", "es": "Los Tokens Soulbound son NFTs no transferibles que representan credenciales, logros o identidad."}',
 'nft-masterclass'),

('NFTs', 'hard',
 '{"en": "What is the Approval event used for?", "es": "¿Para qué se usa el evento Approval?"}',
 '[{"en": "Emitted when NFT is minted", "es": "Se emite cuando se crea un NFT"}, {"en": "Emitted when metadata changes", "es": "Se emite cuando cambian los metadatos"}, {"en": "Emitted when approval is granted", "es": "Se emite cuando se concede aprobación"}, {"en": "Emitted when NFT is burned", "es": "Se emite cuando se quema un NFT"}]',
 2,
 '{"en": "The Approval event is emitted when an owner approves another address to transfer a specific token.", "es": "El evento Approval se emite cuando un propietario aprueba a otra dirección para transferir un token específico."}',
 'nft-masterclass'),

('NFTs', 'hard',
 '{"en": "What is setApprovalForAll used for?", "es": "¿Para qué se usa setApprovalForAll?"}',
 '[{"en": "Approves one specific token", "es": "Aprueba un token específico"}, {"en": "Approves all tokens to operator", "es": "Aprueba todos los tokens a un operador"}, {"en": "Removes all existing approvals", "es": "Elimina todas las aprobaciones existentes"}, {"en": "Sets metadata for all tokens", "es": "Establece metadatos para todos los tokens"}]',
 1,
 '{"en": "setApprovalForAll grants an operator permission to manage ALL of your NFTs in that collection.", "es": "setApprovalForAll concede a un operador permiso para gestionar TODOS tus NFTs de esa colección."}',
 'nft-masterclass'),

('NFTs', 'hard',
 '{"en": "What is EIP-2981 for NFTs?", "es": "¿Qué es EIP-2981 para NFTs?"}',
 '[{"en": "A security audit standard", "es": "Un estándar de auditoría de seguridad"}, {"en": "A royalty payment standard", "es": "Un estándar de pago de regalías"}, {"en": "A metadata format standard", "es": "Un estándar de formato de metadatos"}, {"en": "A transfer optimization", "es": "Una optimización de transferencia"}]',
 1,
 '{"en": "EIP-2981 is the NFT Royalty Standard, defining how creators receive royalties from secondary sales.", "es": "EIP-2981 es el Estándar de Regalías NFT, definiendo cómo los creadores reciben regalías de ventas secundarias."}',
 'nft-masterclass'),

('NFTs', 'hard',
 '{"en": "What is the purpose of balanceOf in ERC-721?", "es": "¿Cuál es el propósito de balanceOf en ERC-721?"}',
 '[{"en": "Returns token metadata", "es": "Retorna metadatos del token"}, {"en": "Returns number of NFTs owned", "es": "Retorna número de NFTs que posee"}, {"en": "Returns the token price", "es": "Retorna el precio del token"}, {"en": "Returns approval status", "es": "Retorna estado de aprobación"}]',
 1,
 '{"en": "balanceOf(owner) returns how many NFTs from that collection a specific address owns.", "es": "balanceOf(owner) retorna cuántos NFTs de esa colección posee una dirección específica."}',
 'nft-masterclass'),

-- =============================================
-- ADDITIONAL NFT QUESTIONS (15 more = 30 total)
-- =============================================

('NFTs', 'medium',
 '{"en": "Where is NFT metadata typically stored?", "es": "¿Dónde se almacenan típicamente los metadatos de NFT?"}',
 '[{"en": "Only in the blockchain", "es": "Solo en la blockchain"}, {"en": "IPFS or centralized servers", "es": "IPFS o servidores centralizados"}, {"en": "In the user wallet", "es": "En la billetera del usuario"}, {"en": "In the browser cache", "es": "En la caché del navegador"}]',
 1,
 '{"en": "NFT metadata is typically stored on IPFS or centralized servers, with the URI stored on-chain.", "es": "Los metadatos de NFT típicamente se almacenan en IPFS o servidores centralizados, con la URI en la blockchain."}',
 'nft-masterclass'),

('NFTs', 'medium',
 '{"en": "What is an NFT collection?", "es": "¿Qué es una colección de NFT?"}',
 '[{"en": "A single valuable NFT", "es": "Un solo NFT valioso"}, {"en": "Group of NFTs from one contract", "es": "Grupo de NFTs de un contrato"}, {"en": "A type of wallet", "es": "Un tipo de billetera"}, {"en": "A marketplace category", "es": "Una categoría de marketplace"}]',
 1,
 '{"en": "An NFT collection is a group of NFTs minted from the same smart contract.", "es": "Una colección de NFT es un grupo de NFTs creados desde el mismo contrato inteligente."}',
 'nft-masterclass'),

('NFTs', 'medium',
 '{"en": "What is floor price in NFT trading?", "es": "¿Qué es el floor price en trading de NFT?"}',
 '[{"en": "The highest sale price", "es": "El precio de venta más alto"}, {"en": "The lowest listed price", "es": "El precio listado más bajo"}, {"en": "The average collection value", "es": "El valor promedio de la colección"}, {"en": "The minting cost", "es": "El costo de minteo"}]',
 1,
 '{"en": "Floor price is the lowest price at which an NFT from a collection is currently listed for sale.", "es": "El floor price es el precio más bajo al que un NFT de una colección está actualmente listado para venta."}',
 'nft-masterclass'),

('NFTs', 'medium',
 '{"en": "What does burning an NFT mean?", "es": "¿Qué significa quemar un NFT?"}',
 '[{"en": "Selling it quickly", "es": "Venderlo rápidamente"}, {"en": "Sending it to a dead address", "es": "Enviarlo a una dirección muerta"}, {"en": "Changing its metadata", "es": "Cambiar sus metadatos"}, {"en": "Listing it for auction", "es": "Listarlo para subasta"}]',
 1,
 '{"en": "Burning an NFT means sending it to a null address, permanently removing it from circulation.", "es": "Quemar un NFT significa enviarlo a una dirección nula, eliminándolo permanentemente de circulación."}',
 'nft-masterclass'),

('NFTs', 'medium',
 '{"en": "What is lazy minting?", "es": "¿Qué es el lazy minting?"}',
 '[{"en": "Slow transaction minting", "es": "Minteo de transacción lenta"}, {"en": "Minting at purchase time", "es": "Mintear en el momento de compra"}, {"en": "Free NFT creation", "es": "Creación de NFT gratis"}, {"en": "Automatic minting schedule", "es": "Programa de minteo automático"}]',
 1,
 '{"en": "Lazy minting delays the on-chain minting until the NFT is purchased, saving gas for creators.", "es": "El lazy minting retrasa el minteo on-chain hasta que el NFT es comprado, ahorrando gas a los creadores."}',
 'nft-masterclass'),

('NFTs', 'hard',
 '{"en": "What is a reveal mechanism in NFT drops?", "es": "¿Qué es un mecanismo de reveal en drops de NFT?"}',
 '[{"en": "Showing the creator identity", "es": "Mostrar la identidad del creador"}, {"en": "Unveiling hidden metadata later", "es": "Revelar metadatos ocultos después"}, {"en": "Displaying the price", "es": "Mostrar el precio"}, {"en": "Announcing the launch date", "es": "Anunciar la fecha de lanzamiento"}]',
 1,
 '{"en": "Reveal mechanisms keep NFT traits hidden until after minting to prevent rarity sniping.", "es": "Los mecanismos de reveal mantienen los rasgos del NFT ocultos hasta después del minteo para prevenir sniping de rareza."}',
 'nft-masterclass'),

('NFTs', 'hard',
 '{"en": "What is enumerable in ERC-721 Enumerable?", "es": "¿Qué es enumerable en ERC-721 Enumerable?"}',
 '[{"en": "Counting total supply only", "es": "Contar solo el suministro total"}, {"en": "Listing all tokens by index", "es": "Listar todos los tokens por índice"}, {"en": "Numbering transactions", "es": "Numerar transacciones"}, {"en": "Pricing mechanism", "es": "Mecanismo de precios"}]',
 1,
 '{"en": "ERC-721 Enumerable adds functions to list all tokens and query tokens by owner index.", "es": "ERC-721 Enumerable añade funciones para listar todos los tokens y consultar tokens por índice de propietario."}',
 'nft-masterclass'),

('NFTs', 'hard',
 '{"en": "What is the difference between tokenId and tokenURI?", "es": "¿Cuál es la diferencia entre tokenId y tokenURI?"}',
 '[{"en": "They are the same thing", "es": "Son lo mismo"}, {"en": "tokenId is unique identifier, tokenURI is metadata link", "es": "tokenId es identificador único, tokenURI es enlace a metadatos"}, {"en": "tokenURI is the price", "es": "tokenURI es el precio"}, {"en": "tokenId is the owner address", "es": "tokenId es la dirección del propietario"}]',
 1,
 '{"en": "tokenId uniquely identifies an NFT; tokenURI points to its metadata JSON file.", "es": "tokenId identifica únicamente un NFT; tokenURI apunta a su archivo JSON de metadatos."}',
 'nft-masterclass'),

('NFTs', 'hard',
 '{"en": "What is a Dutch auction for NFTs?", "es": "¿Qué es una subasta holandesa para NFTs?"}',
 '[{"en": "Auction starting low, going up", "es": "Subasta empezando bajo, subiendo"}, {"en": "Price starts high, decreases over time", "es": "Precio empieza alto, decrece con el tiempo"}, {"en": "Fixed price sale only", "es": "Venta a precio fijo solamente"}, {"en": "Bidding war between buyers", "es": "Guerra de ofertas entre compradores"}]',
 1,
 '{"en": "Dutch auctions start at a high price that decreases until someone buys.", "es": "Las subastas holandesas empiezan a un precio alto que decrece hasta que alguien compra."}',
 'nft-masterclass'),

('NFTs', 'hard',
 '{"en": "What is an allowlist (whitelist) in NFT minting?", "es": "¿Qué es una allowlist en minteo de NFT?"}',
 '[{"en": "List of banned addresses", "es": "Lista de direcciones prohibidas"}, {"en": "Pre-approved addresses for early access", "es": "Direcciones pre-aprobadas para acceso temprano"}, {"en": "Token holder registry", "es": "Registro de poseedores de tokens"}, {"en": "Creator verification list", "es": "Lista de verificación de creadores"}]',
 1,
 '{"en": "Allowlists give pre-approved addresses priority access to mint before public sale.", "es": "Las allowlists dan acceso prioritario a direcciones pre-aprobadas para mintear antes de la venta pública."}',
 'nft-masterclass'),

('NFTs', 'hard',
 '{"en": "What is an airdrop in the NFT context?", "es": "¿Qué es un airdrop en el contexto NFT?"}',
 '[{"en": "Selling NFTs at discount", "es": "Vender NFTs con descuento"}, {"en": "Free distribution to wallet addresses", "es": "Distribución gratuita a direcciones de billetera"}, {"en": "Burning unsold tokens", "es": "Quemar tokens no vendidos"}, {"en": "Transferring between chains", "es": "Transferir entre cadenas"}]',
 1,
 '{"en": "Airdrops are free distributions of NFTs sent directly to wallet addresses.", "es": "Los airdrops son distribuciones gratuitas de NFTs enviados directamente a direcciones de billetera."}',
 'nft-masterclass'),

('NFTs', 'hard',
 '{"en": "What is dynamic NFT metadata?", "es": "¿Qué son los metadatos dinámicos de NFT?"}',
 '[{"en": "Metadata that never changes", "es": "Metadatos que nunca cambian"}, {"en": "Metadata that can update over time", "es": "Metadatos que pueden actualizarse con el tiempo"}, {"en": "Encrypted hidden data", "es": "Datos ocultos encriptados"}, {"en": "Multiple copies of same data", "es": "Múltiples copias del mismo dato"}]',
 1,
 '{"en": "Dynamic NFTs have metadata that can change based on external conditions or events.", "es": "Los NFTs dinámicos tienen metadatos que pueden cambiar basándose en condiciones o eventos externos."}',
 'nft-masterclass'),

('NFTs', 'hard',
 '{"en": "What is composability in NFTs?", "es": "¿Qué es la composabilidad en NFTs?"}',
 '[{"en": "Breaking NFTs into pieces", "es": "Romper NFTs en piezas"}, {"en": "NFTs that can hold other NFTs", "es": "NFTs que pueden contener otros NFTs"}, {"en": "Combining multiple wallets", "es": "Combinar múltiples billeteras"}, {"en": "Merging collections together", "es": "Fusionar colecciones"}]',
 1,
 '{"en": "Composable NFTs (ERC-998) can own other tokens, creating parent-child relationships.", "es": "Los NFTs composables (ERC-998) pueden poseer otros tokens, creando relaciones padre-hijo."}',
 'nft-masterclass'),

('NFTs', 'hard',
 '{"en": "What is fractional NFT ownership?", "es": "¿Qué es la propiedad fraccional de NFT?"}',
 '[{"en": "Owning part of an NFT collection", "es": "Poseer parte de una colección de NFT"}, {"en": "Splitting one NFT into fungible tokens", "es": "Dividir un NFT en tokens fungibles"}, {"en": "Sharing wallet access", "es": "Compartir acceso a billetera"}, {"en": "Partial payment plans", "es": "Planes de pago parcial"}]',
 1,
 '{"en": "Fractional ownership splits a single NFT into multiple fungible tokens tradeable by different owners.", "es": "La propiedad fraccional divide un solo NFT en múltiples tokens fungibles que pueden ser comerciados por diferentes propietarios."}',
 'nft-masterclass'),

('NFTs', 'hard',
 '{"en": "What is the supportsInterface function used for?", "es": "¿Para qué se usa la función supportsInterface?"}',
 '[{"en": "Checking wallet compatibility", "es": "Verificar compatibilidad de billetera"}, {"en": "Detecting which ERC standards a contract implements", "es": "Detectar qué estándares ERC implementa un contrato"}, {"en": "Testing network connection", "es": "Probar conexión de red"}, {"en": "Validating user permissions", "es": "Validar permisos de usuario"}]',
 1,
 '{"en": "supportsInterface (ERC-165) lets contracts declare which interfaces they implement.", "es": "supportsInterface (ERC-165) permite a contratos declarar qué interfaces implementan."}',
 'nft-masterclass')

ON CONFLICT DO NOTHING;
