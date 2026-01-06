-- Complete quiz questions for blockchain-dev course (15 per section)
-- Section 1 needs 8 more (has 7), Sections 2-6 need 12 more each (have 3)

-- =============================================
-- SECTION 1: Blockchain Architecture (8 more)
-- =============================================
WITH s1 AS (SELECT id FROM course_sections WHERE slug = 'blockchain-architecture' AND course_id = 'blockchain-dev' LIMIT 1)
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
VALUES
((SELECT id FROM s1), 
 '{"en": "What is a node in a blockchain?", "es": "¿Qué es un nodo en una blockchain?"}', 
 '[{"en": "A type of cryptocurrency", "es": "Un tipo de criptomoneda"}, {"en": "A computer in the network", "es": "Una computadora en la red"}, {"en": "A block", "es": "Un bloque"}]', 
 1, 
 '{"en": "Nodes are computers that validate and store blockchain data.", "es": "Los nodos son computadoras que validan y almacenan datos de la blockchain."}'),

((SELECT id FROM s1), 
 '{"en": "What is the purpose of hashing in blockchain?", "es": "¿Cuál es el propósito del hashing en blockchain?"}', 
 '[{"en": "Encrypt messages", "es": "Encriptar mensajes"}, {"en": "Create unique fingerprints", "es": "Crear huellas digitales únicas"}, {"en": "Speed up transactions", "es": "Acelerar transacciones"}]', 
 1, 
 '{"en": "Hashing creates a unique fixed-size output for any input.", "es": "El hashing crea una salida única de tamaño fijo para cualquier entrada."}'),

((SELECT id FROM s1), 
 '{"en": "What makes blockchain immutable?", "es": "¿Qué hace a la blockchain inmutable?"}', 
 '[{"en": "Strong passwords", "es": "Contraseñas fuertes"}, {"en": "Linked hashes", "es": "Hashes enlazados"}, {"en": "Fast servers", "es": "Servidores rápidos"}]', 
 1, 
 '{"en": "Changing any block would invalidate all subsequent hashes.", "es": "Cambiar cualquier bloque invalidaría todos los hashes posteriores."}'),

((SELECT id FROM s1), 
 '{"en": "What is a genesis block?", "es": "¿Qué es un bloque génesis?"}', 
 '[{"en": "The largest block", "es": "El bloque más grande"}, {"en": "The first block", "es": "El primer bloque"}, {"en": "A special mining block", "es": "Un bloque especial de minería"}]', 
 1, 
 '{"en": "The genesis block is the first block in any blockchain.", "es": "El bloque génesis es el primer bloque en cualquier blockchain."}'),

((SELECT id FROM s1), 
 '{"en": "What is a distributed ledger?", "es": "¿Qué es un libro mayor distribuido?"}', 
 '[{"en": "A shared database", "es": "Una base de datos compartida"}, {"en": "A private server", "es": "Un servidor privado"}, {"en": "A type of wallet", "es": "Un tipo de billetera"}]', 
 0, 
 '{"en": "A distributed ledger is a database shared across multiple nodes.", "es": "Un libro mayor distribuido es una base de datos compartida entre múltiples nodos."}'),

((SELECT id FROM s1), 
 '{"en": "What is a block header?", "es": "¿Qué es el encabezado de un bloque?"}', 
 '[{"en": "Metadata about the block", "es": "Metadatos sobre el bloque"}, {"en": "The first transaction", "es": "La primera transacción"}, {"en": "The block reward", "es": "La recompensa del bloque"}]', 
 0, 
 '{"en": "Block headers contain timestamp, nonce, previous hash, and merkle root.", "es": "Los encabezados contienen timestamp, nonce, hash previo y raíz de merkle."}'),

((SELECT id FROM s1), 
 '{"en": "What is a nonce?", "es": "¿Qué es un nonce?"}', 
 '[{"en": "A random number for mining", "es": "Un número aleatorio para minería"}, {"en": "A transaction fee", "es": "Una tarifa de transacción"}, {"en": "A wallet address", "es": "Una dirección de billetera"}]', 
 0, 
 '{"en": "Miners change the nonce to find a valid hash.", "es": "Los mineros cambian el nonce para encontrar un hash válido."}'),

((SELECT id FROM s1), 
 '{"en": "What is double spending?", "es": "¿Qué es el doble gasto?"}', 
 '[{"en": "Paying twice for one item", "es": "Pagar dos veces por un item"}, {"en": "Spending the same coin twice", "es": "Gastar la misma moneda dos veces"}, {"en": "Mining twice", "es": "Minar dos veces"}]', 
 1, 
 '{"en": "Blockchain prevents spending the same digital asset twice.", "es": "La blockchain previene gastar el mismo activo digital dos veces."}');

-- =============================================
-- SECTION 2: Consensus Mechanisms (12 more)
-- =============================================
WITH s2 AS (SELECT id FROM course_sections WHERE slug = 'consensus-mechanisms' AND course_id = 'blockchain-dev' LIMIT 1)
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
VALUES
((SELECT id FROM s2), 
 '{"en": "What is the main drawback of Proof of Work?", "es": "¿Cuál es el principal inconveniente de Proof of Work?"}', 
 '[{"en": "Too fast", "es": "Muy rápido"}, {"en": "High energy consumption", "es": "Alto consumo de energía"}, {"en": "Too cheap", "es": "Muy barato"}]', 
 1, 
 '{"en": "PoW requires massive computational power and electricity.", "es": "PoW requiere poder computacional masivo y electricidad."}'),

((SELECT id FROM s2), 
 '{"en": "In PoS, what determines who validates?", "es": "En PoS, ¿qué determina quién valida?"}', 
 '[{"en": "Computing power", "es": "Poder de cómputo"}, {"en": "Staked tokens", "es": "Tokens apostados"}, {"en": "First come first serve", "es": "Primero en llegar"}]', 
 1, 
 '{"en": "Validators are chosen based on their staked amount.", "es": "Los validadores se eligen según su cantidad apostada."}'),

((SELECT id FROM s2), 
 '{"en": "What is slashing in PoS?", "es": "¿Qué es slashing en PoS?"}', 
 '[{"en": "Bonus rewards", "es": "Recompensas extra"}, {"en": "Penalty for bad behavior", "es": "Penalización por mal comportamiento"}, {"en": "Mining faster", "es": "Minar más rápido"}]', 
 1, 
 '{"en": "Validators lose staked tokens if they act maliciously.", "es": "Los validadores pierden tokens apostados si actúan maliciosamente."}'),

((SELECT id FROM s2), 
 '{"en": "What is Delegated PoS (DPoS)?", "es": "¿Qué es Delegated PoS (DPoS)?"}', 
 '[{"en": "Users vote for validators", "es": "Usuarios votan por validadores"}, {"en": "More mining", "es": "Más minería"}, {"en": "Private blockchain", "es": "Blockchain privada"}]', 
 0, 
 '{"en": "Token holders elect delegates to validate on their behalf.", "es": "Los tenedores de tokens eligen delegados para validar en su nombre."}'),

((SELECT id FROM s2), 
 '{"en": "What blockchain uses Proof of History?", "es": "¿Qué blockchain usa Proof of History?"}', 
 '[{"en": "Bitcoin", "es": "Bitcoin"}, {"en": "Solana", "es": "Solana"}, {"en": "Ethereum", "es": "Ethereum"}]', 
 1, 
 '{"en": "Solana uses PoH for faster transaction ordering.", "es": "Solana usa PoH para ordenar transacciones más rápido."}'),

((SELECT id FROM s2), 
 '{"en": "What is Byzantine Fault Tolerance?", "es": "¿Qué es Tolerancia a Fallas Bizantinas?"}', 
 '[{"en": "Handling malicious nodes", "es": "Manejar nodos maliciosos"}, {"en": "Faster mining", "es": "Minería más rápida"}, {"en": "Lower fees", "es": "Tarifas más bajas"}]', 
 0, 
 '{"en": "BFT allows consensus even with some faulty or malicious nodes.", "es": "BFT permite consenso incluso con algunos nodos defectuosos o maliciosos."}'),

((SELECT id FROM s2), 
 '{"en": "What was The Merge?", "es": "¿Qué fue The Merge?"}', 
 '[{"en": "Bitcoin update", "es": "Actualización de Bitcoin"}, {"en": "Ethereum PoW to PoS", "es": "Ethereum de PoW a PoS"}, {"en": "New cryptocurrency", "es": "Nueva criptomoneda"}]', 
 1, 
 '{"en": "Ethereum switched from PoW to PoS in September 2022.", "es": "Ethereum cambió de PoW a PoS en septiembre 2022."}'),

((SELECT id FROM s2), 
 '{"en": "What is a 51% attack?", "es": "¿Qué es un ataque del 51%?"}', 
 '[{"en": "Controlling majority of network", "es": "Controlar mayoría de la red"}, {"en": "Hacking a wallet", "es": "Hackear una billetera"}, {"en": "Stealing keys", "es": "Robar claves"}]', 
 0, 
 '{"en": "An attacker with 51% hashpower can manipulate the blockchain.", "es": "Un atacante con 51% del hashpower puede manipular la blockchain."}'),

((SELECT id FROM s2), 
 '{"en": "What is finality in blockchain?", "es": "¿Qué es finalidad en blockchain?"}', 
 '[{"en": "Transaction cannot be reversed", "es": "Transacción no puede revertirse"}, {"en": "Block is created", "es": "Bloque es creado"}, {"en": "Mining is complete", "es": "Minería está completa"}]', 
 0, 
 '{"en": "Finality means a transaction is permanently confirmed.", "es": "Finalidad significa que una transacción está permanentemente confirmada."}'),

((SELECT id FROM s2), 
 '{"en": "How many confirmations for Bitcoin safety?", "es": "¿Cuántas confirmaciones para seguridad en Bitcoin?"}', 
 '[{"en": "1", "es": "1"}, {"en": "6", "es": "6"}, {"en": "100", "es": "100"}]', 
 1, 
 '{"en": "6 confirmations is the standard for Bitcoin transactions.", "es": "6 confirmaciones es el estándar para transacciones de Bitcoin."}'),

((SELECT id FROM s2), 
 '{"en": "What is Proof of Authority?", "es": "¿Qué es Proof of Authority?"}', 
 '[{"en": "Trusted validators", "es": "Validadores confiables"}, {"en": "Mining competition", "es": "Competencia de minería"}, {"en": "Token staking", "es": "Apuesta de tokens"}]', 
 0, 
 '{"en": "PoA uses pre-approved validators, common in private chains.", "es": "PoA usa validadores pre-aprobados, común en cadenas privadas."}'),

((SELECT id FROM s2), 
 '{"en": "What consensus does Cardano use?", "es": "¿Qué consenso usa Cardano?"}', 
 '[{"en": "Proof of Work", "es": "Proof of Work"}, {"en": "Ouroboros (PoS)", "es": "Ouroboros (PoS)"}, {"en": "Proof of History", "es": "Proof of History"}]', 
 1, 
 '{"en": "Cardano uses Ouroboros, a peer-reviewed PoS protocol.", "es": "Cardano usa Ouroboros, un protocolo PoS revisado por pares."}');

-- =============================================
-- SECTION 3: State Management (12 more)
-- =============================================
WITH s3 AS (SELECT id FROM course_sections WHERE slug = 'state-management' AND course_id = 'blockchain-dev' LIMIT 1)
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
VALUES
((SELECT id FROM s3), 
 '{"en": "What is account-based model?", "es": "¿Qué es el modelo basado en cuentas?"}', 
 '[{"en": "Like bank accounts", "es": "Como cuentas bancarias"}, {"en": "Like cash", "es": "Como efectivo"}, {"en": "Like tokens", "es": "Como tokens"}]', 
 0, 
 '{"en": "Ethereum uses account-based model with balances.", "es": "Ethereum usa modelo basado en cuentas con saldos."}'),

((SELECT id FROM s3), 
 '{"en": "What is UTXO?", "es": "¿Qué es UTXO?"}', 
 '[{"en": "Unspent Transaction Output", "es": "Salida de Transacción No Gastada"}, {"en": "User Token Exchange", "es": "Intercambio de Token de Usuario"}, {"en": "Universal Transaction", "es": "Transacción Universal"}]', 
 0, 
 '{"en": "Bitcoin uses UTXO model to track ownership.", "es": "Bitcoin usa modelo UTXO para rastrear propiedad."}'),

((SELECT id FROM s3), 
 '{"en": "Where is smart contract state stored?", "es": "¿Dónde se almacena el estado del contrato inteligente?"}', 
 '[{"en": "On-chain", "es": "En cadena"}, {"en": "In the cloud", "es": "En la nube"}, {"en": "User computer", "es": "Computadora del usuario"}]', 
 0, 
 '{"en": "Contract state is permanently stored on the blockchain.", "es": "El estado del contrato se almacena permanentemente en la blockchain."}'),

((SELECT id FROM s3), 
 '{"en": "What is a state trie?", "es": "¿Qué es un trie de estado?"}', 
 '[{"en": "Data structure for state", "es": "Estructura de datos para estado"}, {"en": "Mining algorithm", "es": "Algoritmo de minería"}, {"en": "Wallet type", "es": "Tipo de billetera"}]', 
 0, 
 '{"en": "Ethereum uses Patricia Merkle Tries to store state.", "es": "Ethereum usa Patricia Merkle Tries para almacenar estado."}'),

((SELECT id FROM s3), 
 '{"en": "What is state bloat?", "es": "¿Qué es inflación de estado?"}', 
 '[{"en": "Growing blockchain size", "es": "Tamaño creciente de blockchain"}, {"en": "Fast transactions", "es": "Transacciones rápidas"}, {"en": "More validators", "es": "Más validadores"}]', 
 0, 
 '{"en": "State bloat is the increasing storage requirements over time.", "es": "La inflación de estado son los requisitos de almacenamiento crecientes."}'),

((SELECT id FROM s3), 
 '{"en": "What is state rent?", "es": "¿Qué es el alquiler de estado?"}', 
 '[{"en": "Paying to keep data stored", "es": "Pagar para mantener datos almacenados"}, {"en": "Mining rewards", "es": "Recompensas de minería"}, {"en": "Transaction fees", "es": "Tarifas de transacción"}]', 
 0, 
 '{"en": "Some chains charge ongoing fees for state storage.", "es": "Algunas cadenas cobran tarifas continuas por almacenamiento de estado."}'),

((SELECT id FROM s3), 
 '{"en": "What is a world state?", "es": "¿Qué es el estado mundial?"}', 
 '[{"en": "All account balances and data", "es": "Todos los saldos y datos de cuentas"}, {"en": "Global news", "es": "Noticias globales"}, {"en": "Mining status", "es": "Estado de minería"}]', 
 0, 
 '{"en": "World state is a snapshot of all accounts at a given block.", "es": "El estado mundial es una instantánea de todas las cuentas en un bloque dado."}'),

((SELECT id FROM s3), 
 '{"en": "What is an EOA?", "es": "¿Qué es una EOA?"}', 
 '[{"en": "Externally Owned Account", "es": "Cuenta de Propiedad Externa"}, {"en": "Enhanced Online Access", "es": "Acceso Online Mejorado"}, {"en": "Ethereum Open API", "es": "API Abierta de Ethereum"}]', 
 0, 
 '{"en": "EOAs are user-controlled accounts with private keys.", "es": "Las EOAs son cuentas controladas por usuarios con claves privadas."}'),

((SELECT id FROM s3), 
 '{"en": "What is a contract account?", "es": "¿Qué es una cuenta de contrato?"}', 
 '[{"en": "Account controlled by code", "es": "Cuenta controlada por código"}, {"en": "User wallet", "es": "Billetera de usuario"}, {"en": "Exchange account", "es": "Cuenta de exchange"}]', 
 0, 
 '{"en": "Contract accounts are controlled by smart contract code.", "es": "Las cuentas de contrato son controladas por código de contrato inteligente."}'),

((SELECT id FROM s3), 
 '{"en": "What is storage slot?", "es": "¿Qué es un slot de almacenamiento?"}', 
 '[{"en": "32-byte data location", "es": "Ubicación de datos de 32 bytes"}, {"en": "USB port", "es": "Puerto USB"}, {"en": "Memory card", "es": "Tarjeta de memoria"}]', 
 0, 
 '{"en": "Solidity stores data in 32-byte slots.", "es": "Solidity almacena datos en slots de 32 bytes."}'),

((SELECT id FROM s3), 
 '{"en": "What is state sync?", "es": "¿Qué es sincronización de estado?"}', 
 '[{"en": "Downloading blockchain state", "es": "Descargar estado de blockchain"}, {"en": "Mining sync", "es": "Sincronización de minería"}, {"en": "Wallet backup", "es": "Respaldo de billetera"}]', 
 0, 
 '{"en": "New nodes sync state to participate in the network.", "es": "Los nuevos nodos sincronizan estado para participar en la red."}'),

((SELECT id FROM s3), 
 '{"en": "What is an archive node?", "es": "¿Qué es un nodo de archivo?"}', 
 '[{"en": "Stores all historical state", "es": "Almacena todo el estado histórico"}, {"en": "Deleted data node", "es": "Nodo de datos eliminados"}, {"en": "Backup server", "es": "Servidor de respaldo"}]', 
 0, 
 '{"en": "Archive nodes store complete historical state data.", "es": "Los nodos de archivo almacenan datos de estado histórico completos."}');

-- =============================================
-- SECTION 4: Scalability Solutions (12 more)
-- =============================================
WITH s4 AS (SELECT id FROM course_sections WHERE slug = 'scalability-solutions' AND course_id = 'blockchain-dev' LIMIT 1)
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
VALUES
((SELECT id FROM s4), 
 '{"en": "What is Layer 1 scaling?", "es": "¿Qué es escalado de Capa 1?"}', 
 '[{"en": "Improving base blockchain", "es": "Mejorar blockchain base"}, {"en": "Adding new chain", "es": "Agregar nueva cadena"}, {"en": "Using centralized servers", "es": "Usar servidores centralizados"}]', 
 0, 
 '{"en": "L1 scaling improves the main blockchain directly.", "es": "El escalado L1 mejora la blockchain principal directamente."}'),

((SELECT id FROM s4), 
 '{"en": "What is sharding?", "es": "¿Qué es sharding?"}', 
 '[{"en": "Splitting the chain into parts", "es": "Dividir la cadena en partes"}, {"en": "Merging chains", "es": "Fusionar cadenas"}, {"en": "Deleting old blocks", "es": "Eliminar bloques viejos"}]', 
 0, 
 '{"en": "Sharding divides the network to process parallel transactions.", "es": "Sharding divide la red para procesar transacciones paralelas."}'),

((SELECT id FROM s4), 
 '{"en": "What is a rollup?", "es": "¿Qué es un rollup?"}', 
 '[{"en": "Bundling transactions off-chain", "es": "Agrupar transacciones fuera de cadena"}, {"en": "Mining faster", "es": "Minar más rápido"}, {"en": "Creating new tokens", "es": "Crear nuevos tokens"}]', 
 0, 
 '{"en": "Rollups execute transactions off-chain and post data to L1.", "es": "Los rollups ejecutan transacciones fuera de cadena y publican datos en L1."}'),

((SELECT id FROM s4), 
 '{"en": "Difference: Optimistic vs ZK Rollups?", "es": "Diferencia: Rollups Optimistic vs ZK?"}', 
 '[{"en": "Fraud proofs vs validity proofs", "es": "Pruebas de fraude vs pruebas de validez"}, {"en": "Speed vs security", "es": "Velocidad vs seguridad"}, {"en": "Cost vs convenience", "es": "Costo vs conveniencia"}]', 
 0, 
 '{"en": "Optimistic assumes valid, ZK proves mathematically.", "es": "Optimistic asume válido, ZK prueba matemáticamente."}'),

((SELECT id FROM s4), 
 '{"en": "What is Arbitrum?", "es": "¿Qué es Arbitrum?"}', 
 '[{"en": "An Optimistic Rollup", "es": "Un Rollup Optimistic"}, {"en": "A new blockchain", "es": "Una nueva blockchain"}, {"en": "A wallet", "es": "Una billetera"}]', 
 0, 
 '{"en": "Arbitrum is a popular Ethereum L2 using optimistic rollups.", "es": "Arbitrum es una L2 de Ethereum popular usando rollups optimistic."}'),

((SELECT id FROM s4), 
 '{"en": "What is zkSync?", "es": "¿Qué es zkSync?"}', 
 '[{"en": "A ZK Rollup", "es": "Un ZK Rollup"}, {"en": "A cryptocurrency", "es": "Una criptomoneda"}, {"en": "A mining pool", "es": "Un pool de minería"}]', 
 0, 
 '{"en": "zkSync uses zero-knowledge proofs for scaling.", "es": "zkSync usa pruebas de conocimiento cero para escalar."}'),

((SELECT id FROM s4), 
 '{"en": "What is a state channel?", "es": "¿Qué es un canal de estado?"}', 
 '[{"en": "Off-chain transaction channel", "es": "Canal de transacciones fuera de cadena"}, {"en": "Mining channel", "es": "Canal de minería"}, {"en": "Wallet type", "es": "Tipo de billetera"}]', 
 0, 
 '{"en": "State channels allow multiple off-chain transactions.", "es": "Los canales de estado permiten múltiples transacciones fuera de cadena."}'),

((SELECT id FROM s4), 
 '{"en": "What is Lightning Network?", "es": "¿Qué es Lightning Network?"}', 
 '[{"en": "Bitcoin L2 solution", "es": "Solución L2 de Bitcoin"}, {"en": "New cryptocurrency", "es": "Nueva criptomoneda"}, {"en": "Mining hardware", "es": "Hardware de minería"}]', 
 0, 
 '{"en": "Lightning enables fast, cheap Bitcoin payments.", "es": "Lightning permite pagos rápidos y baratos en Bitcoin."}'),

((SELECT id FROM s4), 
 '{"en": "What is TPS?", "es": "¿Qué es TPS?"}', 
 '[{"en": "Transactions Per Second", "es": "Transacciones Por Segundo"}, {"en": "Token Price System", "es": "Sistema de Precio de Token"}, {"en": "Total Protocol Security", "es": "Seguridad Total del Protocolo"}]', 
 0, 
 '{"en": "TPS measures blockchain throughput.", "es": "TPS mide el rendimiento de la blockchain."}'),

((SELECT id FROM s4), 
 '{"en": "Ethereum TPS vs Visa TPS?", "es": "TPS de Ethereum vs TPS de Visa?"}', 
 '[{"en": "~15 vs ~65,000", "es": "~15 vs ~65,000"}, {"en": "Same", "es": "Igual"}, {"en": "Ethereum is faster", "es": "Ethereum es más rápido"}]', 
 0, 
 '{"en": "Visa handles ~65k TPS, Ethereum L1 ~15 TPS.", "es": "Visa maneja ~65k TPS, Ethereum L1 ~15 TPS."}'),

((SELECT id FROM s4), 
 '{"en": "What is Polygon?", "es": "¿Qué es Polygon?"}', 
 '[{"en": "Ethereum scaling ecosystem", "es": "Ecosistema de escalado de Ethereum"}, {"en": "New L1 chain", "es": "Nueva cadena L1"}, {"en": "Wallet app", "es": "App de billetera"}]', 
 0, 
 '{"en": "Polygon provides multiple scaling solutions for Ethereum.", "es": "Polygon provee múltiples soluciones de escalado para Ethereum."}'),

((SELECT id FROM s4), 
 '{"en": "What is data availability?", "es": "¿Qué es disponibilidad de datos?"}', 
 '[{"en": "Ensuring data can be verified", "es": "Asegurar que los datos pueden verificarse"}, {"en": "Storing more data", "es": "Almacenar más datos"}, {"en": "Deleting old data", "es": "Eliminar datos viejos"}]', 
 0, 
 '{"en": "L2s must prove transaction data is available for verification.", "es": "Las L2 deben probar que los datos de transacción están disponibles para verificación."}');

-- =============================================
-- SECTION 5: Developer Tools (12 more)
-- =============================================
WITH s5 AS (SELECT id FROM course_sections WHERE slug = 'developer-tools' AND course_id = 'blockchain-dev' LIMIT 1)
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
VALUES
((SELECT id FROM s5), 
 '{"en": "What is Foundry?", "es": "¿Qué es Foundry?"}', 
 '[{"en": "Smart contract toolkit in Rust", "es": "Toolkit de contratos en Rust"}, {"en": "Wallet app", "es": "App de billetera"}, {"en": "Exchange", "es": "Exchange"}]', 
 0, 
 '{"en": "Foundry is a fast Ethereum development toolkit.", "es": "Foundry es un toolkit de desarrollo Ethereum rápido."}'),

((SELECT id FROM s5), 
 '{"en": "What is Viem?", "es": "¿Qué es Viem?"}', 
 '[{"en": "TypeScript library for Ethereum", "es": "Librería TypeScript para Ethereum"}, {"en": "Mining software", "es": "Software de minería"}, {"en": "Token standard", "es": "Estándar de token"}]', 
 0, 
 '{"en": "Viem is a modern TypeScript library for blockchain interaction.", "es": "Viem es una librería TypeScript moderna para interacción blockchain."}'),

((SELECT id FROM s5), 
 '{"en": "What is wagmi?", "es": "¿Qué es wagmi?"}', 
 '[{"en": "React hooks for Ethereum", "es": "Hooks de React para Ethereum"}, {"en": "Slang for good luck", "es": "Jerga para buena suerte"}, {"en": "A blockchain", "es": "Una blockchain"}]', 
 0, 
 '{"en": "wagmi provides React hooks for Web3 development.", "es": "wagmi provee hooks de React para desarrollo Web3."}'),

((SELECT id FROM s5), 
 '{"en": "What is OpenZeppelin?", "es": "¿Qué es OpenZeppelin?"}', 
 '[{"en": "Secure contract library", "es": "Librería de contratos seguros"}, {"en": "Wallet provider", "es": "Proveedor de billetera"}, {"en": "Mining pool", "es": "Pool de minería"}]', 
 0, 
 '{"en": "OpenZeppelin provides audited, secure smart contract templates.", "es": "OpenZeppelin provee plantillas de contratos inteligentes auditados y seguros."}'),

((SELECT id FROM s5), 
 '{"en": "What is Alchemy?", "es": "¿Qué es Alchemy?"}', 
 '[{"en": "Blockchain infrastructure provider", "es": "Proveedor de infraestructura blockchain"}, {"en": "Token", "es": "Token"}, {"en": "Wallet", "es": "Billetera"}]', 
 0, 
 '{"en": "Alchemy provides RPC endpoints and development tools.", "es": "Alchemy provee endpoints RPC y herramientas de desarrollo."}'),

((SELECT id FROM s5), 
 '{"en": "What is Infura?", "es": "¿Qué es Infura?"}', 
 '[{"en": "Ethereum node provider", "es": "Proveedor de nodos Ethereum"}, {"en": "Mining hardware", "es": "Hardware de minería"}, {"en": "DEX", "es": "DEX"}]', 
 0, 
 '{"en": "Infura provides access to Ethereum nodes via API.", "es": "Infura provee acceso a nodos Ethereum vía API."}'),

((SELECT id FROM s5), 
 '{"en": "What is a testnet?", "es": "¿Qué es una testnet?"}', 
 '[{"en": "Test blockchain network", "es": "Red blockchain de pruebas"}, {"en": "Main network", "es": "Red principal"}, {"en": "Private chain", "es": "Cadena privada"}]', 
 0, 
 '{"en": "Testnets allow testing without real money.", "es": "Las testnets permiten probar sin dinero real."}'),

((SELECT id FROM s5), 
 '{"en": "What is Sepolia?", "es": "¿Qué es Sepolia?"}', 
 '[{"en": "Ethereum testnet", "es": "Testnet de Ethereum"}, {"en": "L2 solution", "es": "Solución L2"}, {"en": "Token", "es": "Token"}]', 
 0, 
 '{"en": "Sepolia is the main Ethereum test network.", "es": "Sepolia es la red de prueba principal de Ethereum."}'),

((SELECT id FROM s5), 
 '{"en": "What is a faucet?", "es": "¿Qué es un faucet?"}', 
 '[{"en": "Free testnet tokens", "es": "Tokens testnet gratis"}, {"en": "Mining pool", "es": "Pool de minería"}, {"en": "Wallet type", "es": "Tipo de billetera"}]', 
 0, 
 '{"en": "Faucets give free tokens for testing.", "es": "Los faucets dan tokens gratis para pruebas."}'),

((SELECT id FROM s5), 
 '{"en": "What is Tenderly?", "es": "¿Qué es Tenderly?"}', 
 '[{"en": "Debugging and monitoring tool", "es": "Herramienta de debugging y monitoreo"}, {"en": "Token", "es": "Token"}, {"en": "Wallet", "es": "Billetera"}]', 
 0, 
 '{"en": "Tenderly provides transaction debugging and simulation.", "es": "Tenderly provee debugging y simulación de transacciones."}'),

((SELECT id FROM s5), 
 '{"en": "What is The Graph?", "es": "¿Qué es The Graph?"}', 
 '[{"en": "Blockchain indexing protocol", "es": "Protocolo de indexación blockchain"}, {"en": "Chart tool", "es": "Herramienta de gráficos"}, {"en": "Wallet", "es": "Billetera"}]', 
 0, 
 '{"en": "The Graph indexes blockchain data for easy querying.", "es": "The Graph indexa datos blockchain para consultas fáciles."}'),

((SELECT id FROM s5), 
 '{"en": "What is Slither?", "es": "¿Qué es Slither?"}', 
 '[{"en": "Security analysis tool", "es": "Herramienta de análisis de seguridad"}, {"en": "Token standard", "es": "Estándar de token"}, {"en": "Wallet", "es": "Billetera"}]', 
 0, 
 '{"en": "Slither is a static analysis tool for Solidity.", "es": "Slither es una herramienta de análisis estático para Solidity."}');

-- =============================================
-- SECTION 6: Building dApps (12 more)
-- =============================================
WITH s6 AS (SELECT id FROM course_sections WHERE slug = 'building-dapps' AND course_id = 'blockchain-dev' LIMIT 1)
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
VALUES
((SELECT id FROM s6), 
 '{"en": "What is RainbowKit?", "es": "¿Qué es RainbowKit?"}', 
 '[{"en": "Wallet connection UI", "es": "UI de conexión de billetera"}, {"en": "Token standard", "es": "Estándar de token"}, {"en": "Blockchain", "es": "Blockchain"}]', 
 0, 
 '{"en": "RainbowKit provides beautiful wallet connection UI.", "es": "RainbowKit provee una UI hermosa de conexión de billetera."}'),

((SELECT id FROM s6), 
 '{"en": "What is WalletConnect?", "es": "¿Qué es WalletConnect?"}', 
 '[{"en": "Protocol for wallet connection", "es": "Protocolo para conexión de billetera"}, {"en": "Wallet app", "es": "App de billetera"}, {"en": "Token", "es": "Token"}]', 
 0, 
 '{"en": "WalletConnect links dApps to mobile wallets.", "es": "WalletConnect conecta dApps con billeteras móviles."}'),

((SELECT id FROM s6), 
 '{"en": "What is IPFS?", "es": "¿Qué es IPFS?"}', 
 '[{"en": "Decentralized storage", "es": "Almacenamiento descentralizado"}, {"en": "Token", "es": "Token"}, {"en": "Blockchain", "es": "Blockchain"}]', 
 0, 
 '{"en": "IPFS stores files in a distributed network.", "es": "IPFS almacena archivos en una red distribuida."}'),

((SELECT id FROM s6), 
 '{"en": "What is an ABI?", "es": "¿Qué es un ABI?"}', 
 '[{"en": "Application Binary Interface", "es": "Interfaz Binaria de Aplicación"}, {"en": "Token standard", "es": "Estándar de token"}, {"en": "Wallet format", "es": "Formato de billetera"}]', 
 0, 
 '{"en": "ABI defines how to interact with a smart contract.", "es": "ABI define cómo interactuar con un contrato inteligente."}'),

((SELECT id FROM s6), 
 '{"en": "What is ENS?", "es": "¿Qué es ENS?"}', 
 '[{"en": "Ethereum Name Service", "es": "Servicio de Nombres de Ethereum"}, {"en": "Token", "es": "Token"}, {"en": "Wallet", "es": "Billetera"}]', 
 0, 
 '{"en": "ENS maps human-readable names to addresses.", "es": "ENS mapea nombres legibles a direcciones."}'),

((SELECT id FROM s6), 
 '{"en": "What is a provider in Web3?", "es": "¿Qué es un provider en Web3?"}', 
 '[{"en": "Connection to blockchain", "es": "Conexión a blockchain"}, {"en": "Token issuer", "es": "Emisor de token"}, {"en": "Mining company", "es": "Compañía de minería"}]', 
 0, 
 '{"en": "Providers connect your app to blockchain nodes.", "es": "Los providers conectan tu app a nodos blockchain."}'),

((SELECT id FROM s6), 
 '{"en": "What is a signer?", "es": "¿Qué es un signer?"}', 
 '[{"en": "Account that signs transactions", "es": "Cuenta que firma transacciones"}, {"en": "Mining device", "es": "Dispositivo de minería"}, {"en": "Token type", "es": "Tipo de token"}]', 
 0, 
 '{"en": "Signers are accounts with private key access.", "es": "Los signers son cuentas con acceso a clave privada."}'),

((SELECT id FROM s6), 
 '{"en": "What is a read vs write call?", "es": "¿Qué es una llamada de lectura vs escritura?"}', 
 '[{"en": "Free vs gas cost", "es": "Gratis vs costo de gas"}, {"en": "Fast vs slow", "es": "Rápido vs lento"}, {"en": "Public vs private", "es": "Público vs privado"}]', 
 0, 
 '{"en": "Read calls are free, write calls require gas.", "es": "Las llamadas de lectura son gratis, las de escritura requieren gas."}'),

((SELECT id FROM s6), 
 '{"en": "What is event listening?", "es": "¿Qué es escuchar eventos?"}', 
 '[{"en": "Reacting to blockchain events", "es": "Reaccionar a eventos blockchain"}, {"en": "Mining updates", "es": "Actualizaciones de minería"}, {"en": "Price watching", "es": "Ver precios"}]', 
 0, 
 '{"en": "Apps listen to contract events to update UI.", "es": "Las apps escuchan eventos de contratos para actualizar la UI."}'),

((SELECT id FROM s6), 
 '{"en": "What is a subgraph?", "es": "¿Qué es un subgraph?"}', 
 '[{"en": "Indexed blockchain data schema", "es": "Esquema de datos blockchain indexados"}, {"en": "Small chart", "es": "Gráfico pequeño"}, {"en": "Token type", "es": "Tipo de token"}]', 
 0, 
 '{"en": "Subgraphs define how to index and query blockchain data.", "es": "Los subgraphs definen cómo indexar y consultar datos blockchain."}'),

((SELECT id FROM s6), 
 '{"en": "What is transaction simulation?", "es": "¿Qué es simulación de transacción?"}', 
 '[{"en": "Preview before confirming", "es": "Vista previa antes de confirmar"}, {"en": "Fake transactions", "es": "Transacciones falsas"}, {"en": "Training mode", "es": "Modo de entrenamiento"}]', 
 0, 
 '{"en": "Simulation shows transaction results before execution.", "es": "La simulación muestra resultados de la transacción antes de ejecutar."}'),

((SELECT id FROM s6), 
 '{"en": "What is progressive decentralization?", "es": "¿Qué es descentralización progresiva?"}', 
 '[{"en": "Gradual move to decentralization", "es": "Movimiento gradual a descentralización"}, {"en": "Fast centralization", "es": "Centralización rápida"}, {"en": "Mining strategy", "es": "Estrategia de minería"}]', 
 0, 
 '{"en": "Start centralized, then gradually decentralize.", "es": "Empezar centralizado, luego descentralizar gradualmente."}');
