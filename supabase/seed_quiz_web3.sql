-- =============================================
-- QUIZ QUESTIONS - WEB3 BASICS (80 questions)
-- =============================================

INSERT INTO game_questions (category, difficulty, question_text, options, correct_index, explanation, from_course) VALUES

-- Easy questions (1-30)
('Web3 Basics', 'easy', 
 '{"en": "What does Web3 primarily refer to?", "es": "¿A qué se refiere principalmente Web3?"}',
 '[{"en": "A new version of web browsers", "es": "Una nueva versión de navegadores web"}, {"en": "The decentralized internet powered by blockchain", "es": "El internet descentralizado impulsado por blockchain"}, {"en": "A social media platform", "es": "Una plataforma de redes sociales"}, {"en": "A programming language", "es": "Un lenguaje de programación"}]',
 1, '{"en": "Web3 refers to the vision of a decentralized internet where users own their data and digital assets through blockchain technology.", "es": "Web3 se refiere a la visión de un internet descentralizado donde los usuarios son dueños de sus datos y activos digitales mediante tecnología blockchain."}', 'web3-basics'),

('Web3 Basics', 'easy',
 '{"en": "In Web3, who controls your data?", "es": "En Web3, ¿quién controla tus datos?"}',
 '[{"en": "Google and Facebook", "es": "Google y Facebook"}, {"en": "The government", "es": "El gobierno"}, {"en": "You, the user", "es": "Tú, el usuario"}, {"en": "Internet service providers", "es": "Proveedores de internet"}]',
 2, '{"en": "In Web3, users have ownership and control over their own data through cryptographic keys and decentralized storage.", "es": "En Web3, los usuarios tienen propiedad y control sobre sus propios datos mediante llaves criptográficas y almacenamiento descentralizado."}', 'web3-basics'),

('Web3 Basics', 'easy',
 '{"en": "What is a blockchain?", "es": "¿Qué es una blockchain?"}',
 '[{"en": "A type of cryptocurrency", "es": "Un tipo de criptomoneda"}, {"en": "A distributed ledger that records transactions", "es": "Un libro contable distribuido que registra transacciones"}, {"en": "A computer virus", "es": "Un virus informático"}, {"en": "A social network", "es": "Una red social"}]',
 1, '{"en": "A blockchain is a distributed, immutable ledger that records transactions across many computers so the record cannot be altered retroactively.", "es": "Una blockchain es un libro contable distribuido e inmutable que registra transacciones en muchas computadoras para que el registro no pueda alterarse retroactivamente."}', 'web3-basics'),

('Web3 Basics', 'easy',
 '{"en": "What is a crypto wallet?", "es": "¿Qué es una billetera crypto?"}',
 '[{"en": "A physical wallet for storing cash", "es": "Una billetera física para guardar efectivo"}, {"en": "A software that stores your private keys", "es": "Un software que almacena tus llaves privadas"}, {"en": "A bank account", "es": "Una cuenta bancaria"}, {"en": "A credit card", "es": "Una tarjeta de crédito"}]',
 1, '{"en": "A crypto wallet is software or hardware that stores your private keys, allowing you to send, receive, and manage your cryptocurrencies.", "es": "Una billetera crypto es software o hardware que almacena tus llaves privadas, permitiéndote enviar, recibir y gestionar tus criptomonedas."}', 'web3-basics'),

('Web3 Basics', 'easy',
 '{"en": "What is the main difference between Web2 and Web3?", "es": "¿Cuál es la principal diferencia entre Web2 y Web3?"}',
 '[{"en": "Web3 is faster", "es": "Web3 es más rápido"}, {"en": "Web3 is decentralized while Web2 is centralized", "es": "Web3 es descentralizado mientras Web2 es centralizado"}, {"en": "Web3 has more social media", "es": "Web3 tiene más redes sociales"}, {"en": "There is no difference", "es": "No hay diferencia"}]',
 1, '{"en": "The main difference is that Web2 relies on centralized platforms (like Google, Facebook) while Web3 uses decentralized protocols and gives users ownership.", "es": "La principal diferencia es que Web2 depende de plataformas centralizadas (como Google, Facebook) mientras Web3 usa protocolos descentralizados y da propiedad a los usuarios."}', 'web3-basics'),

('Web3 Basics', 'easy',
 '{"en": "What is decentralization?", "es": "¿Qué es la descentralización?"}',
 '[{"en": "Having one central authority control everything", "es": "Tener una autoridad central que controla todo"}, {"en": "Distributing control across many participants", "es": "Distribuir el control entre muchos participantes"}, {"en": "A type of internet connection", "es": "Un tipo de conexión a internet"}, {"en": "A programming technique", "es": "Una técnica de programación"}]',
 1, '{"en": "Decentralization means distributing control, data, and decision-making across a network rather than having a single point of control.", "es": "Descentralización significa distribuir el control, datos y toma de decisiones a través de una red en lugar de tener un solo punto de control."}', 'web3-basics'),

('Web3 Basics', 'easy',
 '{"en": "What is a smart contract?", "es": "¿Qué es un contrato inteligente?"}',
 '[{"en": "A legal document signed digitally", "es": "Un documento legal firmado digitalmente"}, {"en": "Self-executing code on the blockchain", "es": "Código auto-ejecutable en la blockchain"}, {"en": "An AI chatbot", "es": "Un chatbot de IA"}, {"en": "A mobile app", "es": "Una aplicación móvil"}]',
 1, '{"en": "A smart contract is self-executing code stored on a blockchain that automatically enforces and executes the terms of an agreement.", "es": "Un contrato inteligente es código auto-ejecutable almacenado en una blockchain que automáticamente hace cumplir y ejecuta los términos de un acuerdo."}', 'web3-basics'),

('Web3 Basics', 'easy',
 '{"en": "What is a private key?", "es": "¿Qué es una llave privada?"}',
 '[{"en": "A password for your email", "es": "Una contraseña para tu email"}, {"en": "A secret code that gives access to your crypto", "es": "Un código secreto que da acceso a tu crypto"}, {"en": "Your username", "es": "Tu nombre de usuario"}, {"en": "A physical key", "es": "Una llave física"}]',
 1, '{"en": "A private key is a secret cryptographic code that proves ownership of your crypto assets and allows you to sign transactions.", "es": "Una llave privada es un código criptográfico secreto que prueba propiedad de tus activos crypto y te permite firmar transacciones."}', 'web3-basics'),

('Web3 Basics', 'easy',
 '{"en": "What is a public key?", "es": "¿Qué es una llave pública?"}',
 '[{"en": "Your wallet address that others can see", "es": "Tu dirección de billetera que otros pueden ver"}, {"en": "Your private key", "es": "Tu llave privada"}, {"en": "A password", "es": "Una contraseña"}, {"en": "A government ID", "es": "Una identificación del gobierno"}]',
 0, '{"en": "A public key (or wallet address) is derived from your private key and can be shared publicly for others to send you crypto.", "es": "Una llave pública (o dirección de billetera) se deriva de tu llave privada y puede compartirse públicamente para que otros te envíen crypto."}', 'web3-basics'),

('Web3 Basics', 'easy',
 '{"en": "What is a dApp?", "es": "¿Qué es una dApp?"}',
 '[{"en": "A mobile app from Google Play", "es": "Una app móvil de Google Play"}, {"en": "A decentralized application running on blockchain", "es": "Una aplicación descentralizada corriendo en blockchain"}, {"en": "A desktop program", "es": "Un programa de escritorio"}, {"en": "A web browser", "es": "Un navegador web"}]',
 1, '{"en": "A dApp (decentralized application) is an application that runs on a blockchain network rather than centralized servers.", "es": "Una dApp (aplicación descentralizada) es una aplicación que corre en una red blockchain en lugar de servidores centralizados."}', 'web3-basics'),

-- Medium questions (11-50)
('Web3 Basics', 'medium',
 '{"en": "What consensus mechanism does Bitcoin use?", "es": "¿Qué mecanismo de consenso usa Bitcoin?"}',
 '[{"en": "Proof of Stake", "es": "Prueba de Participación"}, {"en": "Proof of Work", "es": "Prueba de Trabajo"}, {"en": "Delegated Proof of Stake", "es": "Prueba de Participación Delegada"}, {"en": "Proof of Authority", "es": "Prueba de Autoridad"}]',
 1, '{"en": "Bitcoin uses Proof of Work (PoW), where miners compete to solve complex mathematical puzzles to validate transactions and create new blocks.", "es": "Bitcoin usa Prueba de Trabajo (PoW), donde los mineros compiten para resolver puzzles matemáticos complejos para validar transacciones y crear nuevos bloques."}', 'web3-basics'),

('Web3 Basics', 'medium',
 '{"en": "What is gas in Ethereum?", "es": "¿Qué es el gas en Ethereum?"}',
 '[{"en": "Fuel for cars", "es": "Combustible para autos"}, {"en": "The fee paid to process transactions", "es": "La tarifa pagada para procesar transacciones"}, {"en": "A type of cryptocurrency", "es": "Un tipo de criptomoneda"}, {"en": "A mining reward", "es": "Una recompensa de minería"}]',
 1, '{"en": "Gas is the unit measuring the computational effort required to execute operations on Ethereum. Users pay gas fees to compensate miners/validators.", "es": "Gas es la unidad que mide el esfuerzo computacional requerido para ejecutar operaciones en Ethereum. Los usuarios pagan tarifas de gas para compensar a los mineros/validadores."}', 'web3-basics'),

('Web3 Basics', 'medium',
 '{"en": "What is a seed phrase?", "es": "¿Qué es una frase semilla?"}',
 '[{"en": "A password for websites", "es": "Una contraseña para sitios web"}, {"en": "12-24 words that can recover your wallet", "es": "12-24 palabras que pueden recuperar tu billetera"}, {"en": "A username", "es": "Un nombre de usuario"}, {"en": "A type of cryptocurrency", "es": "Un tipo de criptomoneda"}]',
 1, '{"en": "A seed phrase (recovery phrase) is a series of 12-24 words that can be used to recover access to your crypto wallet if you lose your device.", "es": "Una frase semilla (frase de recuperación) es una serie de 12-24 palabras que pueden usarse para recuperar acceso a tu billetera crypto si pierdes tu dispositivo."}', 'web3-basics'),

('Web3 Basics', 'medium',
 '{"en": "What is a DAO?", "es": "¿Qué es una DAO?"}',
 '[{"en": "A type of cryptocurrency", "es": "Un tipo de criptomoneda"}, {"en": "A decentralized autonomous organization", "es": "Una organización autónoma descentralizada"}, {"en": "A mining pool", "es": "Un pool de minería"}, {"en": "A web browser", "es": "Un navegador web"}]',
 1, '{"en": "A DAO (Decentralized Autonomous Organization) is an organization governed by smart contracts and token-holder voting rather than traditional management.", "es": "Una DAO (Organización Autónoma Descentralizada) es una organización gobernada por contratos inteligentes y votación de poseedores de tokens en lugar de administración tradicional."}', 'web3-basics'),

('Web3 Basics', 'medium',
 '{"en": "What is the purpose of a hash in blockchain?", "es": "¿Cuál es el propósito de un hash en blockchain?"}',
 '[{"en": "To encrypt messages", "es": "Para encriptar mensajes"}, {"en": "To create a unique fingerprint of data", "es": "Para crear una huella digital única de datos"}, {"en": "To mine cryptocurrency", "es": "Para minar criptomonedas"}, {"en": "To send emails", "es": "Para enviar correos"}]',
 1, '{"en": "A hash creates a unique fixed-length fingerprint of any data. In blockchain, it links blocks together and ensures data integrity.", "es": "Un hash crea una huella digital única de longitud fija de cualquier dato. En blockchain, enlaza bloques y asegura la integridad de datos."}', 'web3-basics'),

('Web3 Basics', 'medium',
 '{"en": "What is a node in blockchain?", "es": "¿Qué es un nodo en blockchain?"}',
 '[{"en": "A type of cryptocurrency", "es": "Un tipo de criptomoneda"}, {"en": "A computer that maintains a copy of the blockchain", "es": "Una computadora que mantiene una copia de la blockchain"}, {"en": "A smart contract", "es": "Un contrato inteligente"}, {"en": "A wallet address", "es": "Una dirección de billetera"}]',
 1, '{"en": "A node is a computer that maintains a copy of the blockchain and helps validate and relay transactions across the network.", "es": "Un nodo es una computadora que mantiene una copia de la blockchain y ayuda a validar y transmitir transacciones a través de la red."}', 'web3-basics'),

('Web3 Basics', 'medium',
 '{"en": "What does immutability mean in blockchain?", "es": "¿Qué significa inmutabilidad en blockchain?"}',
 '[{"en": "Data can be easily changed", "es": "Los datos pueden cambiarse fácilmente"}, {"en": "Once data is recorded, it cannot be altered", "es": "Una vez que los datos se registran, no pueden alterarse"}, {"en": "Data is encrypted", "es": "Los datos están encriptados"}, {"en": "Data is private", "es": "Los datos son privados"}]',
 1, '{"en": "Immutability means that once data is written to the blockchain, it cannot be altered or deleted. This creates a permanent, tamper-proof record.", "es": "Inmutabilidad significa que una vez que los datos se escriben en la blockchain, no pueden alterarse o eliminarse. Esto crea un registro permanente a prueba de manipulación."}', 'web3-basics'),

('Web3 Basics', 'medium',
 '{"en": "What is the difference between Layer 1 and Layer 2?", "es": "¿Cuál es la diferencia entre Capa 1 y Capa 2?"}',
 '[{"en": "Layer 2 is slower than Layer 1", "es": "Capa 2 es más lenta que Capa 1"}, {"en": "Layer 2 is built on top of Layer 1 for scalability", "es": "Capa 2 se construye sobre Capa 1 para escalabilidad"}, {"en": "They are the same", "es": "Son iguales"}, {"en": "Layer 1 is a wallet", "es": "Capa 1 es una billetera"}]',
 1, '{"en": "Layer 1 is the base blockchain (like Ethereum). Layer 2 solutions (like Polygon, Arbitrum) are built on top to increase speed and reduce costs.", "es": "Capa 1 es la blockchain base (como Ethereum). Las soluciones de Capa 2 (como Polygon, Arbitrum) se construyen encima para aumentar velocidad y reducir costos."}', 'web3-basics'),

('Web3 Basics', 'medium',
 '{"en": "What is an NFT?", "es": "¿Qué es un NFT?"}',
 '[{"en": "A type of cryptocurrency like Bitcoin", "es": "Un tipo de criptomoneda como Bitcoin"}, {"en": "A unique digital token representing ownership", "es": "Un token digital único que representa propiedad"}, {"en": "A blockchain network", "es": "Una red blockchain"}, {"en": "A wallet application", "es": "Una aplicación de billetera"}]',
 1, '{"en": "An NFT (Non-Fungible Token) is a unique digital token that represents ownership of a specific item like art, music, or collectibles.", "es": "Un NFT (Token No Fungible) es un token digital único que representa propiedad de un artículo específico como arte, música o coleccionables."}', 'web3-basics'),

('Web3 Basics', 'medium',
 '{"en": "What is DeFi?", "es": "¿Qué es DeFi?"}',
 '[{"en": "A social media platform", "es": "Una plataforma de redes sociales"}, {"en": "Decentralized finance services on blockchain", "es": "Servicios financieros descentralizados en blockchain"}, {"en": "A cryptocurrency exchange", "es": "Un exchange de criptomonedas"}, {"en": "A mining pool", "es": "Un pool de minería"}]',
 1, '{"en": "DeFi (Decentralized Finance) refers to financial services built on blockchain that operate without traditional intermediaries like banks.", "es": "DeFi (Finanzas Descentralizadas) se refiere a servicios financieros construidos en blockchain que operan sin intermediarios tradicionales como bancos."}', 'web3-basics'),

-- Hard questions (21-30)
('Web3 Basics', 'hard',
 '{"en": "What is the Byzantine Generals Problem?", "es": "¿Qué es el Problema de los Generales Bizantinos?"}',
 '[{"en": "A historical battle strategy", "es": "Una estrategia de batalla histórica"}, {"en": "A problem of achieving consensus in distributed systems", "es": "Un problema de lograr consenso en sistemas distribuidos"}, {"en": "A type of cryptocurrency", "es": "Un tipo de criptomoneda"}, {"en": "A smart contract bug", "es": "Un error de contrato inteligente"}]',
 1, '{"en": "The Byzantine Generals Problem describes the challenge of achieving consensus among distributed nodes that may include faulty or malicious participants.", "es": "El Problema de los Generales Bizantinos describe el desafío de lograr consenso entre nodos distribuidos que pueden incluir participantes defectuosos o maliciosos."}', 'web3-basics'),

('Web3 Basics', 'hard',
 '{"en": "What is a Merkle tree used for in blockchain?", "es": "¿Para qué se usa un árbol Merkle en blockchain?"}',
 '[{"en": "To store cryptocurrency", "es": "Para almacenar criptomonedas"}, {"en": "To efficiently verify data integrity", "es": "Para verificar eficientemente la integridad de datos"}, {"en": "To mine blocks", "es": "Para minar bloques"}, {"en": "To create wallets", "es": "Para crear billeteras"}]',
 1, '{"en": "A Merkle tree is a data structure that allows efficient verification of data integrity by organizing transaction hashes in a hierarchical tree.", "es": "Un árbol Merkle es una estructura de datos que permite verificación eficiente de integridad de datos organizando hashes de transacciones en un árbol jerárquico."}', 'web3-basics'),

('Web3 Basics', 'hard',
 '{"en": "What is the trilemma in blockchain?", "es": "¿Qué es el trilema en blockchain?"}',
 '[{"en": "Choosing between three cryptocurrencies", "es": "Elegir entre tres criptomonedas"}, {"en": "Trade-off between decentralization, security, and scalability", "es": "Equilibrio entre descentralización, seguridad y escalabilidad"}, {"en": "Three types of wallets", "es": "Tres tipos de billeteras"}, {"en": "Three mining methods", "es": "Tres métodos de minería"}]',
 1, '{"en": "The blockchain trilemma refers to the trade-off where optimizing for two of decentralization, security, and scalability often sacrifices the third.", "es": "El trilema de blockchain se refiere al equilibrio donde optimizar dos de descentralización, seguridad y escalabilidad a menudo sacrifica la tercera."}', 'web3-basics'),

('Web3 Basics', 'hard',
 '{"en": "What is sharding in blockchain?", "es": "¿Qué es el sharding en blockchain?"}',
 '[{"en": "Breaking a blockchain into smaller pieces for scalability", "es": "Dividir una blockchain en piezas más pequeñas para escalabilidad"}, {"en": "A type of cryptocurrency", "es": "Un tipo de criptomoneda"}, {"en": "A wallet backup method", "es": "Un método de respaldo de billetera"}, {"en": "A mining technique", "es": "Una técnica de minería"}]',
 0, '{"en": "Sharding divides a blockchain into smaller partitions (shards) that can process transactions in parallel, improving scalability.", "es": "Sharding divide una blockchain en particiones más pequeñas (shards) que pueden procesar transacciones en paralelo, mejorando la escalabilidad."}', 'web3-basics'),

('Web3 Basics', 'hard',
 '{"en": "What is a 51% attack?", "es": "¿Qué es un ataque del 51%?"}',
 '[{"en": "When half the nodes go offline", "es": "Cuando la mitad de los nodos se desconectan"}, {"en": "When an entity controls majority of mining power", "es": "Cuando una entidad controla la mayoría del poder de minería"}, {"en": "A type of wallet hack", "es": "Un tipo de hackeo de billetera"}, {"en": "A smart contract exploit", "es": "Un exploit de contrato inteligente"}]',
 1, '{"en": "A 51% attack occurs when an entity controls more than 50% of the networks mining power, potentially allowing them to manipulate the blockchain.", "es": "Un ataque del 51% ocurre cuando una entidad controla más del 50% del poder de minería de la red, potencialmente permitiéndoles manipular la blockchain."}', 'web3-basics'),

('Web3 Basics', 'hard',
 '{"en": "What is an oracle in blockchain?", "es": "¿Qué es un oráculo en blockchain?"}',
 '[{"en": "A fortune teller", "es": "Un adivino"}, {"en": "A service that brings external data to smart contracts", "es": "Un servicio que trae datos externos a contratos inteligentes"}, {"en": "A type of wallet", "es": "Un tipo de billetera"}, {"en": "A consensus mechanism", "es": "Un mecanismo de consenso"}]',
 1, '{"en": "A blockchain oracle is a service that provides external, real-world data to smart contracts, enabling them to react to events outside the blockchain.", "es": "Un oráculo de blockchain es un servicio que proporciona datos externos del mundo real a contratos inteligentes, permitiéndoles reaccionar a eventos fuera de la blockchain."}', 'web3-basics'),

('Web3 Basics', 'hard',
 '{"en": "What is slashing in Proof of Stake?", "es": "¿Qué es el slashing en Prueba de Participación?"}',
 '[{"en": "Reducing transaction fees", "es": "Reducir tarifas de transacción"}, {"en": "Penalty for validator misbehavior", "es": "Penalización por mal comportamiento del validador"}, {"en": "A type of reward", "es": "Un tipo de recompensa"}, {"en": "Mining difficulty adjustment", "es": "Ajuste de dificultad de minería"}]',
 1, '{"en": "Slashing is a penalty mechanism in PoS where validators lose part of their staked tokens if they act maliciously or fail to perform duties.", "es": "Slashing es un mecanismo de penalización en PoS donde los validadores pierden parte de sus tokens apostados si actúan maliciosamente o no cumplen sus deberes."}', 'web3-basics'),

('Web3 Basics', 'hard',
 '{"en": "What is a flash loan?", "es": "¿Qué es un préstamo flash?"}',
 '[{"en": "A fast bank loan", "es": "Un préstamo bancario rápido"}, {"en": "An uncollateralized loan that must be repaid in the same transaction", "es": "Un préstamo sin colateral que debe pagarse en la misma transacción"}, {"en": "A staking reward", "es": "Una recompensa de staking"}, {"en": "A type of token", "es": "Un tipo de token"}]',
 1, '{"en": "A flash loan is a DeFi mechanism where you can borrow any amount without collateral, as long as it is repaid within the same blockchain transaction.", "es": "Un préstamo flash es un mecanismo DeFi donde puedes pedir prestado cualquier cantidad sin colateral, siempre que se pague en la misma transacción de blockchain."}', 'web3-basics'),

('Web3 Basics', 'hard',
 '{"en": "What is MEV (Maximal Extractable Value)?", "es": "¿Qué es MEV (Valor Máximo Extraíble)?"}',
 '[{"en": "A cryptocurrency token", "es": "Un token de criptomoneda"}, {"en": "Profit from reordering or inserting transactions in a block", "es": "Ganancia de reordenar o insertar transacciones en un bloque"}, {"en": "A type of wallet", "es": "Un tipo de billetera"}, {"en": "A consensus mechanism", "es": "Un mecanismo de consenso"}]',
 1, '{"en": "MEV is the profit miners/validators can extract by reordering, inserting, or censoring transactions within blocks they produce.", "es": "MEV es la ganancia que los mineros/validadores pueden extraer reordenando, insertando o censurando transacciones dentro de los bloques que producen."}', 'web3-basics'),

('Web3 Basics', 'hard',
 '{"en": "What is a rollup in Layer 2 scaling?", "es": "¿Qué es un rollup en escalado de Capa 2?"}',
 '[{"en": "A type of cryptocurrency", "es": "Un tipo de criptomoneda"}, {"en": "Bundling many transactions and submitting as one to Layer 1", "es": "Agrupar muchas transacciones y enviarlas como una a Capa 1"}, {"en": "A wallet feature", "es": "Una característica de billetera"}, {"en": "A mining pool", "es": "Un pool de minería"}]',
 1, '{"en": "A rollup bundles hundreds of transactions off-chain, then posts the compressed data to Layer 1, inheriting its security while improving throughput.", "es": "Un rollup agrupa cientos de transacciones fuera de cadena, luego publica los datos comprimidos a Capa 1, heredando su seguridad mientras mejora el rendimiento."}', 'web3-basics')

ON CONFLICT DO NOTHING;
