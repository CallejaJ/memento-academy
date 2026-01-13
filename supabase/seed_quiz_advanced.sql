-- =============================================
-- QUIZ QUESTIONS - NFTs & ADVANCED (60 questions)
-- =============================================

INSERT INTO game_questions (category, difficulty, question_text, options, correct_index, explanation, from_course) VALUES

-- NFTs
('NFTs', 'easy',
 '{"en": "What does NFT stand for?", "es": "¿Qué significa NFT?"}',
 '[{"en": "New Financial Token", "es": "Nuevo Token Financiero"}, {"en": "Non-Fungible Token", "es": "Token No Fungible"}, {"en": "Network File Transfer", "es": "Transferencia de Archivo de Red"}, {"en": "Normal Finance Technology", "es": "Tecnología Financiera Normal"}]',
 1, '{"en": "NFT stands for Non-Fungible Token, meaning each token is unique and cannot be replaced by another identical one.", "es": "NFT significa Token No Fungible, lo que significa que cada token es único y no puede ser reemplazado por otro idéntico."}', 'nft-masterclass'),

('NFTs', 'easy',
 '{"en": "What makes an NFT different from Bitcoin?", "es": "¿Qué hace diferente a un NFT de Bitcoin?"}',
 '[{"en": "NFTs are more expensive", "es": "Los NFTs son más caros"}, {"en": "Each NFT is unique while each Bitcoin is identical", "es": "Cada NFT es único mientras que cada Bitcoin es idéntico"}, {"en": "NFTs are faster", "es": "Los NFTs son más rápidos"}, {"en": "NFTs dont use blockchain", "es": "Los NFTs no usan blockchain"}]',
 1, '{"en": "NFTs are non-fungible (each is unique), while Bitcoin is fungible (each BTC is identical and interchangeable).", "es": "Los NFTs son no fungibles (cada uno es único), mientras que Bitcoin es fungible (cada BTC es idéntico e intercambiable)."}', 'nft-masterclass'),

('NFTs', 'easy',
 '{"en": "What can an NFT represent?", "es": "¿Qué puede representar un NFT?"}',
 '[{"en": "Only digital art", "es": "Solo arte digital"}, {"en": "Art, music, gaming items, real estate, and more", "es": "Arte, música, items de juegos, bienes raíces y más"}, {"en": "Only cryptocurrencies", "es": "Solo criptomonedas"}, {"en": "Only physical items", "es": "Solo artículos físicos"}]',
 1, '{"en": "NFTs can represent ownership of virtually anything: digital art, music, videos, game items, event tickets, real estate, and more.", "es": "Los NFTs pueden representar propiedad de virtualmente cualquier cosa: arte digital, música, videos, items de juegos, boletos de eventos, bienes raíces y más."}', 'nft-masterclass'),

('NFTs', 'medium',
 '{"en": "What is minting an NFT?", "es": "¿Qué es mintear un NFT?"}',
 '[{"en": "Buying an NFT", "es": "Comprar un NFT"}, {"en": "Creating and publishing an NFT on the blockchain", "es": "Crear y publicar un NFT en la blockchain"}, {"en": "Selling an NFT", "es": "Vender un NFT"}, {"en": "Burning an NFT", "es": "Quemar un NFT"}]',
 1, '{"en": "Minting is the process of creating a new NFT by publishing it on the blockchain, making it a verifiable digital asset.", "es": "Mintear es el proceso de crear un nuevo NFT publicándolo en la blockchain, convirtiéndolo en un activo digital verificable."}', 'nft-masterclass'),

('NFTs', 'medium',
 '{"en": "What are royalties in NFTs?", "es": "¿Qué son las regalías en NFTs?"}',
 '[{"en": "A one-time payment", "es": "Un pago único"}, {"en": "Percentage creators earn from secondary sales", "es": "Porcentaje que ganan los creadores de ventas secundarias"}, {"en": "A type of NFT", "es": "Un tipo de NFT"}, {"en": "A minting fee", "es": "Una tarifa de minteo"}]',
 1, '{"en": "Royalties allow NFT creators to automatically receive a percentage of the sale price whenever their NFT is resold on secondary markets.", "es": "Las regalías permiten a los creadores de NFTs recibir automáticamente un porcentaje del precio de venta cada vez que su NFT se revende en mercados secundarios."}', 'nft-masterclass'),

('NFTs', 'hard',
 '{"en": "What is a PFP NFT?", "es": "¿Qué es un PFP NFT?"}',
 '[{"en": "A physical NFT", "es": "Un NFT físico"}, {"en": "Profile Picture NFT used as social media avatar", "es": "NFT de Foto de Perfil usado como avatar de redes sociales"}, {"en": "A payment method", "es": "Un método de pago"}, {"en": "A type of wallet", "es": "Un tipo de billetera"}]',
 1, '{"en": "PFP (Profile Picture) NFTs are collections designed to be used as social media avatars, like CryptoPunks or Bored Ape Yacht Club.", "es": "Los PFP (Foto de Perfil) NFTs son colecciones diseñadas para usarse como avatares de redes sociales, como CryptoPunks o Bored Ape Yacht Club."}', 'nft-masterclass'),

-- Layer 2 & Scaling
('Layer 2', 'medium',
 '{"en": "What is the main purpose of Layer 2 solutions?", "es": "¿Cuál es el propósito principal de las soluciones de Capa 2?"}',
 '[{"en": "To replace Layer 1", "es": "Reemplazar Capa 1"}, {"en": "To increase speed and reduce costs", "es": "Aumentar velocidad y reducir costos"}, {"en": "To mine cryptocurrency", "es": "Minar criptomonedas"}, {"en": "To create new tokens", "es": "Crear nuevos tokens"}]',
 1, '{"en": "Layer 2 solutions process transactions off the main chain to increase throughput and reduce fees while inheriting Layer 1 security.", "es": "Las soluciones de Capa 2 procesan transacciones fuera de la cadena principal para aumentar el rendimiento y reducir tarifas mientras heredan la seguridad de Capa 1."}', NULL),

('Layer 2', 'medium',
 '{"en": "What is an optimistic rollup?", "es": "¿Qué es un rollup optimista?"}',
 '[{"en": "A fast trading strategy", "es": "Una estrategia de trading rápida"}, {"en": "L2 that assumes transactions are valid unless challenged", "es": "L2 que asume que las transacciones son válidas a menos que sean impugnadas"}, {"en": "A type of wallet", "es": "Un tipo de billetera"}, {"en": "A mining pool", "es": "Un pool de minería"}]',
 1, '{"en": "Optimistic rollups assume transactions are valid by default and only run computations in case of a dispute, during a challenge period.", "es": "Los rollups optimistas asumen que las transacciones son válidas por defecto y solo ejecutan cálculos en caso de disputa, durante un período de impugnación."}', NULL),

('Layer 2', 'hard',
 '{"en": "What is a ZK-rollup?", "es": "¿Qué es un ZK-rollup?"}',
 '[{"en": "A centralized exchange", "es": "Un exchange centralizado"}, {"en": "L2 using zero-knowledge proofs to verify transactions", "es": "L2 que usa pruebas de conocimiento cero para verificar transacciones"}, {"en": "A stablecoin", "es": "Una stablecoin"}, {"en": "A wallet feature", "es": "Una característica de billetera"}]',
 1, '{"en": "ZK-rollups use zero-knowledge proofs to cryptographically prove transaction validity without revealing details, enabling fast finality.", "es": "Los ZK-rollups usan pruebas de conocimiento cero para probar criptográficamente la validez de transacciones sin revelar detalles, permitiendo finalidad rápida."}', NULL),

-- DAOs
('DAOs', 'medium',
 '{"en": "How do members vote in a DAO?", "es": "¿Cómo votan los miembros en una DAO?"}',
 '[{"en": "By email", "es": "Por correo electrónico"}, {"en": "Using governance tokens", "es": "Usando tokens de gobernanza"}, {"en": "By phone", "es": "Por teléfono"}, {"en": "There is no voting", "es": "No hay votación"}]',
 1, '{"en": "DAO members vote on proposals using governance tokens. More tokens usually means more voting power.", "es": "Los miembros de una DAO votan en propuestas usando tokens de gobernanza. Más tokens usualmente significa más poder de voto."}', NULL),

('DAOs', 'hard',
 '{"en": "What is a multisig wallet in DAO context?", "es": "¿Qué es una billetera multisig en contexto de DAO?"}',
 '[{"en": "A wallet for multiple users", "es": "Una billetera para múltiples usuarios"}, {"en": "A wallet requiring multiple signatures to execute transactions", "es": "Una billetera que requiere múltiples firmas para ejecutar transacciones"}, {"en": "A type of hardware wallet", "es": "Un tipo de billetera hardware"}, {"en": "A wallet for NFTs", "es": "Una billetera para NFTs"}]',
 1, '{"en": "A multisig wallet requires multiple private key signatures to authorize transactions, providing security for DAO treasuries.", "es": "Una billetera multisig requiere múltiples firmas de llaves privadas para autorizar transacciones, proporcionando seguridad para tesorerías de DAOs."}', NULL),

-- Tokenomics
('Tokenomics', 'medium',
 '{"en": "What is token vesting?", "es": "¿Qué es el vesting de tokens?"}',
 '[{"en": "Buying tokens", "es": "Comprar tokens"}, {"en": "Gradual release of tokens over time", "es": "Liberación gradual de tokens a lo largo del tiempo"}, {"en": "Burning tokens", "es": "Quemar tokens"}, {"en": "Staking tokens", "es": "Apostar tokens"}]',
 1, '{"en": "Vesting is a schedule that releases tokens gradually over time, preventing immediate selling and aligning long-term incentives.", "es": "Vesting es un cronograma que libera tokens gradualmente a lo largo del tiempo, previniendo venta inmediata y alineando incentivos a largo plazo."}', NULL),

('Tokenomics', 'hard',
 '{"en": "What is token inflation?", "es": "¿Qué es la inflación de tokens?"}',
 '[{"en": "Token price increase", "es": "Aumento del precio del token"}, {"en": "Increase in total token supply over time", "es": "Aumento del suministro total de tokens a lo largo del tiempo"}, {"en": "A type of staking", "es": "Un tipo de staking"}, {"en": "A trading strategy", "es": "Una estrategia de trading"}]',
 1, '{"en": "Token inflation refers to the rate at which new tokens are created and added to the total supply, potentially diluting existing holders.", "es": "La inflación de tokens se refiere a la tasa a la que se crean nuevos tokens y se añaden al suministro total, potencialmente diluyendo a los poseedores existentes."}', NULL)

ON CONFLICT DO NOTHING;
