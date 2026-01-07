-- =============================================
-- SMART CONTRACTS - QUIZ QUESTIONS SEED (Part 1)
-- Sections 1-3 (15 questions each = 45 questions)
-- =============================================

-- SECTION 1: Smart Contract Basics (15 questions)
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is a smart contract?", "es": "¿Qué es un contrato inteligente?"}$$,
  $$[{"en": "A legal document signed digitally", "es": "Un documento legal firmado digitalmente"}, {"en": "A self-executing program on a blockchain", "es": "Un programa autoejecutable en una blockchain"}, {"en": "A cryptocurrency wallet", "es": "Una billetera de criptomonedas"}, {"en": "An email agreement", "es": "Un acuerdo por email"}]$$,
  1,
  $${"en": "Smart contracts are self-executing programs stored on a blockchain that automatically execute when predetermined conditions are met.", "es": "Los contratos inteligentes son programas autoejecutables almacenados en una blockchain que se ejecutan automáticamente cuando se cumplen condiciones predeterminadas."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What does 'immutable' mean for smart contracts?", "es": "¿Qué significa 'inmutable' para los contratos inteligentes?"}$$,
  $$[{"en": "They can be easily changed", "es": "Se pueden cambiar fácilmente"}, {"en": "Once deployed, the code cannot be changed", "es": "Una vez desplegados, el código no se puede cambiar"}, {"en": "They run very slowly", "es": "Se ejecutan muy lentamente"}, {"en": "They are invisible", "es": "Son invisibles"}]$$,
  1,
  $${"en": "Immutability means once a smart contract is deployed to the blockchain, its code cannot be altered - a core security feature.", "es": "Inmutabilidad significa que una vez que un contrato inteligente se despliega en la blockchain, su código no se puede alterar - una característica de seguridad central."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What does 'trustless' mean in the context of smart contracts?", "es": "¿Qué significa 'sin confianza' en el contexto de contratos inteligentes?"}$$,
  $$[{"en": "You cannot trust anyone", "es": "No puedes confiar en nadie"}, {"en": "No need to trust a third party - code enforces rules", "es": "No necesitas confiar en terceros - el código hace cumplir las reglas"}, {"en": "The contract is unreliable", "es": "El contrato no es confiable"}, {"en": "It requires maximum trust", "es": "Requiere máxima confianza"}]$$,
  1,
  $${"en": "Trustless means you don't need to trust any intermediary - the code itself is the arbiter that enforces the agreed-upon rules.", "es": "Sin confianza significa que no necesitas confiar en ningún intermediario - el código mismo es el árbitro que hace cumplir las reglas acordadas."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is the EVM?", "es": "¿Qué es la EVM?"}$$,
  $$[{"en": "Ethereum Virtual Machine - executes smart contract code", "es": "Máquina Virtual de Ethereum - ejecuta código de contratos"}, {"en": "Electric Vehicle Motor", "es": "Motor de Vehículo Eléctrico"}, {"en": "Ethereum Value Monitor", "es": "Monitor de Valor de Ethereum"}, {"en": "External Verification Module", "es": "Módulo de Verificación Externa"}]$$,
  0,
  $${"en": "The EVM (Ethereum Virtual Machine) is the runtime environment that executes smart contract bytecode across all Ethereum nodes.", "es": "La EVM (Máquina Virtual de Ethereum) es el entorno de ejecución que ejecuta el bytecode de contratos inteligentes en todos los nodos de Ethereum."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Which is NOT a common use case for smart contracts?", "es": "¿Cuál NO es un caso de uso común para contratos inteligentes?"}$$,
  $$[{"en": "DeFi protocols", "es": "Protocolos DeFi"}, {"en": "NFT minting", "es": "Minteo de NFTs"}, {"en": "Sending physical mail", "es": "Enviar correo físico"}, {"en": "DAO governance", "es": "Gobernanza de DAOs"}]$$,
  2,
  $${"en": "Smart contracts cannot interact with the physical world directly. They're used for digital agreements like DeFi, NFTs, and DAOs.", "es": "Los contratos inteligentes no pueden interactuar directamente con el mundo físico. Se usan para acuerdos digitales como DeFi, NFTs y DAOs."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What happens when you deploy a smart contract?", "es": "¿Qué pasa cuando despliegas un contrato inteligente?"}$$,
  $$[{"en": "It gets a unique address on the blockchain", "es": "Obtiene una dirección única en la blockchain"}, {"en": "It replaces an existing contract", "es": "Reemplaza un contrato existente"}, {"en": "It gets sent via email", "es": "Se envía por email"}, {"en": "It disappears after 24 hours", "es": "Desaparece después de 24 horas"}]$$,
  0,
  $${"en": "When deployed, a smart contract receives a unique address on the blockchain where its code and state are permanently stored.", "es": "Al desplegarse, un contrato inteligente recibe una dirección única en la blockchain donde su código y estado se almacenan permanentemente."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is bytecode?", "es": "¿Qué es el bytecode?"}$$,
  $$[{"en": "A cryptocurrency", "es": "Una criptomoneda"}, {"en": "Compiled smart contract code that EVM executes", "es": "Código de contrato compilado que la EVM ejecuta"}, {"en": "A type of wallet", "es": "Un tipo de billetera"}, {"en": "Human-readable source code", "es": "Código fuente legible por humanos"}]$$,
  1,
  $${"en": "Bytecode is the compiled, machine-readable version of Solidity code that the EVM can execute.", "es": "El bytecode es la versión compilada y legible por máquina del código Solidity que la EVM puede ejecutar."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Why are smart contracts called 'deterministic'?", "es": "¿Por qué los contratos inteligentes se llaman 'deterministas'?"}$$,
  $$[{"en": "They make random decisions", "es": "Toman decisiones aleatorias"}, {"en": "Same input always produces same output", "es": "La misma entrada siempre produce la misma salida"}, {"en": "They decide what to do on their own", "es": "Deciden qué hacer por sí mismos"}, {"en": "They only work at certain times", "es": "Solo funcionan en ciertos momentos"}]$$,
  1,
  $${"en": "Deterministic means given the same input, the contract will always produce the same output - essential for consensus across nodes.", "es": "Determinista significa que dada la misma entrada, el contrato siempre producirá la misma salida - esencial para el consenso entre nodos."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What company lost $60M due to a smart contract bug in 2016?", "es": "¿Qué empresa perdió $60M por un bug en un contrato inteligente en 2016?"}$$,
  $$[{"en": "Bitcoin Foundation", "es": "Fundación Bitcoin"}, {"en": "The DAO", "es": "The DAO"}, {"en": "Coinbase", "es": "Coinbase"}, {"en": "Binance", "es": "Binance"}]$$,
  1,
  $${"en": "The DAO hack in 2016 exploited a reentrancy vulnerability, draining ~$60M and eventually leading to Ethereum's hard fork.", "es": "El hack de The DAO en 2016 explotó una vulnerabilidad de reentrancia, drenando ~$60M y eventualmente llevando al hard fork de Ethereum."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "How do users interact with a deployed smart contract?", "es": "¿Cómo interactúan los usuarios con un contrato inteligente desplegado?"}$$,
  $$[{"en": "By sending transactions to its address", "es": "Enviando transacciones a su dirección"}, {"en": "By calling the developer", "es": "Llamando al desarrollador"}, {"en": "By editing the code", "es": "Editando el código"}, {"en": "By sending SMS", "es": "Enviando SMS"}]$$,
  0,
  $${"en": "Users interact with smart contracts by sending transactions to the contract's address, which triggers function execution.", "es": "Los usuarios interactúan con contratos inteligentes enviando transacciones a la dirección del contrato, lo que dispara la ejecución de funciones."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is a key advantage of smart contracts over traditional contracts?", "es": "¿Cuál es una ventaja clave de los contratos inteligentes sobre los tradicionales?"}$$,
  $$[{"en": "They require lawyers", "es": "Requieren abogados"}, {"en": "They self-execute automatically", "es": "Se autoejecutann automáticamente"}, {"en": "They are handwritten", "es": "Están escritos a mano"}, {"en": "They take weeks to process", "es": "Tardan semanas en procesarse"}]$$,
  1,
  $${"en": "Smart contracts automatically execute when conditions are met, eliminating the need for courts or enforcement mechanisms.", "es": "Los contratos inteligentes se ejecutan automáticamente cuando se cumplen condiciones, eliminando la necesidad de tribunales o mecanismos de ejecución."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What protocol uses smart contracts to enable decentralized token swaps?", "es": "¿Qué protocolo usa contratos inteligentes para intercambios de tokens descentralizados?"}$$,
  $$[{"en": "PayPal", "es": "PayPal"}, {"en": "Visa", "es": "Visa"}, {"en": "Uniswap", "es": "Uniswap"}, {"en": "Western Union", "es": "Western Union"}]$$,
  2,
  $${"en": "Uniswap uses smart contracts with an AMM (Automated Market Maker) formula to enable trustless token swaps.", "es": "Uniswap usa contratos inteligentes con una fórmula AMM (Creador de Mercado Automatizado) para habilitar intercambios de tokens sin confianza."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What does 'autonomous' mean for smart contracts?", "es": "¿Qué significa 'autónomo' para los contratos inteligentes?"}$$,
  $$[{"en": "They need constant human supervision", "es": "Necesitan supervisión humana constante"}, {"en": "They execute automatically 24/7 without human intervention", "es": "Se ejecutan automáticamente 24/7 sin intervención humana"}, {"en": "They only work during business hours", "es": "Solo funcionan en horario laboral"}, {"en": "They require approval for each action", "es": "Requieren aprobación para cada acción"}]$$,
  1,
  $${"en": "Autonomous smart contracts run 24/7 without downtime or human intervention, executing whenever their conditions are met.", "es": "Los contratos inteligentes autónomos funcionan 24/7 sin interrupciones o intervención humana, ejecutándose cuando se cumplen sus condiciones."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Why is transparency important for smart contracts?", "es": "¿Por qué es importante la transparencia para los contratos inteligentes?"}$$,
  $$[{"en": "It hides the code from hackers", "es": "Oculta el código de los hackers"}, {"en": "Anyone can verify the code and execution", "es": "Cualquiera puede verificar el código y la ejecución"}, {"en": "It makes contracts invisible", "es": "Hace los contratos invisibles"}, {"en": "It slows down execution", "es": "Ralentiza la ejecución"}]$$,
  1,
  $${"en": "Transparency allows anyone to verify the contract's code and execution on the public blockchain, building trust through verification.", "es": "La transparencia permite a cualquiera verificar el código y la ejecución del contrato en la blockchain pública, construyendo confianza a través de la verificación."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'basics';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What type of insurance uses smart contracts for automatic payouts?", "es": "¿Qué tipo de seguro usa contratos inteligentes para pagos automáticos?"}$$,
  $$[{"en": "Car insurance", "es": "Seguro de auto"}, {"en": "Life insurance", "es": "Seguro de vida"}, {"en": "Parametric insurance", "es": "Seguro paramétrico"}, {"en": "Health insurance", "es": "Seguro de salud"}]$$,
  2,
  $${"en": "Parametric insurance uses smart contracts to automatically pay out based on external data feeds (e.g., weather data for crop insurance).", "es": "El seguro paramétrico usa contratos inteligentes para pagar automáticamente basado en feeds de datos externos (ej: datos climáticos para seguro de cosechas)."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'basics';

-- SECTION 2: Solidity Fundamentals (15 questions)
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is Solidity?", "es": "¿Qué es Solidity?"}$$,
  $$[{"en": "A cryptocurrency", "es": "Una criptomoneda"}, {"en": "A programming language for Ethereum smart contracts", "es": "Un lenguaje de programación para contratos de Ethereum"}, {"en": "A blockchain network", "es": "Una red blockchain"}, {"en": "A wallet application", "es": "Una aplicación de billetera"}]$$,
  1,
  $${"en": "Solidity is the most popular statically-typed programming language for writing smart contracts on Ethereum and EVM-compatible chains.", "es": "Solidity es el lenguaje de programación de tipado estático más popular para escribir contratos inteligentes en Ethereum y cadenas compatibles con EVM."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'solidity';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What does 'address' represent in Solidity?", "es": "¿Qué representa 'address' en Solidity?"}$$,
  $$[{"en": "A home address", "es": "Una dirección de casa"}, {"en": "A 20-byte Ethereum account address", "es": "Una dirección de cuenta Ethereum de 20 bytes"}, {"en": "An email address", "es": "Una dirección de email"}, {"en": "A postal code", "es": "Un código postal"}]$$,
  1,
  $${"en": "In Solidity, 'address' is a type that holds a 20-byte Ethereum account address (wallet or contract).", "es": "En Solidity, 'address' es un tipo que contiene una dirección de cuenta Ethereum de 20 bytes (billetera o contrato)."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'solidity';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is msg.sender?", "es": "¿Qué es msg.sender?"}$$,
  $$[{"en": "The contract creator", "es": "El creador del contrato"}, {"en": "The address that called the current function", "es": "La dirección que llamó la función actual"}, {"en": "A messaging app", "es": "Una app de mensajería"}, {"en": "The network name", "es": "El nombre de la red"}]$$,
  1,
  $${"en": "msg.sender is a global variable that holds the address of the account (wallet or contract) that called the current function.", "es": "msg.sender es una variable global que contiene la dirección de la cuenta (billetera o contrato) que llamó la función actual."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'solidity';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What does the 'public' visibility modifier mean?", "es": "¿Qué significa el modificador de visibilidad 'public'?"}$$,
  $$[{"en": "Only the owner can call", "es": "Solo el propietario puede llamar"}, {"en": "Callable by anyone, internally and externally", "es": "Llamable por cualquiera, interna y externamente"}, {"en": "Hidden from everyone", "es": "Oculto de todos"}, {"en": "Only callable once", "es": "Solo llamable una vez"}]$$,
  1,
  $${"en": "Public functions can be called by anyone - both from within the contract and from external transactions.", "es": "Las funciones públicas pueden ser llamadas por cualquiera - tanto desde dentro del contrato como de transacciones externas."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'solidity';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is a 'mapping' in Solidity?", "es": "¿Qué es un 'mapping' en Solidity?"}$$,
  $$[{"en": "A GPS system", "es": "Un sistema GPS"}, {"en": "A key-value storage data structure", "es": "Una estructura de datos de almacenamiento clave-valor"}, {"en": "A file format", "es": "Un formato de archivo"}, {"en": "A network protocol", "es": "Un protocolo de red"}]$$,
  1,
  $${"en": "A mapping is a hash table that maps keys to values - commonly used for storing balances (address => uint256).", "es": "Un mapping es una tabla hash que mapea claves a valores - comúnmente usado para almacenar balances (address => uint256)."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'solidity';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What does the 'view' modifier mean?", "es": "¿Qué significa el modificador 'view'?"}$$,
  $$[{"en": "The function can modify state", "es": "La función puede modificar estado"}, {"en": "The function reads but doesn't modify state", "es": "La función lee pero no modifica estado"}, {"en": "The function is invisible", "es": "La función es invisible"}, {"en": "The function requires payment", "es": "La función requiere pago"}]$$,
  1,
  $${"en": "View functions can read state but cannot modify it. When called externally, they don't cost gas.", "es": "Las funciones view pueden leer estado pero no modificarlo. Cuando se llaman externamente, no cuestan gas."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'solidity';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What does 'payable' mean for a function?", "es": "¿Qué significa 'payable' para una función?"}$$,
  $$[{"en": "The function costs money to call", "es": "La función cuesta dinero llamar"}, {"en": "The function can receive ETH", "es": "La función puede recibir ETH"}, {"en": "The function pays users", "es": "La función paga a usuarios"}, {"en": "The function is premium", "es": "La función es premium"}]$$,
  1,
  $${"en": "The 'payable' modifier allows a function to receive Ether along with the transaction call.", "es": "El modificador 'payable' permite a una función recibir Ether junto con la llamada de transacción."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'solidity';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is a constructor in Solidity?", "es": "¿Qué es un constructor en Solidity?"}$$,
  $$[{"en": "A function called every transaction", "es": "Una función llamada cada transacción"}, {"en": "A special function called once during deployment", "es": "Una función especial llamada una vez durante el despliegue"}, {"en": "A type of variable", "es": "Un tipo de variable"}, {"en": "A network node", "es": "Un nodo de red"}]$$,
  1,
  $${"en": "The constructor is a special function that runs only once when the contract is deployed, used to initialize state.", "es": "El constructor es una función especial que se ejecuta solo una vez cuando el contrato se despliega, usado para inicializar estado."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'solidity';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What are events used for in Solidity?", "es": "¿Para qué se usan los eventos en Solidity?"}$$,
  $$[{"en": "To schedule meetings", "es": "Para programar reuniones"}, {"en": "To log data to blockchain for off-chain indexing", "es": "Para registrar datos en blockchain para indexación off-chain"}, {"en": "To create new tokens", "es": "Para crear nuevos tokens"}, {"en": "To encrypt data", "es": "Para encriptar datos"}]$$,
  1,
  $${"en": "Events emit data to the blockchain's log, allowing off-chain applications to listen and index contract activity efficiently.", "es": "Los eventos emiten datos al log de la blockchain, permitiendo a aplicaciones off-chain escuchar e indexar actividad del contrato eficientemente."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'solidity';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Why are events cheaper than storage?", "es": "¿Por qué los eventos son más baratos que el storage?"}$$,
  $$[{"en": "Events are free", "es": "Los eventos son gratis"}, {"en": "Events aren't stored in contract state", "es": "Los eventos no se almacenan en el estado del contrato"}, {"en": "Events use a different blockchain", "es": "Los eventos usan otra blockchain"}, {"en": "Events are compressed", "es": "Los eventos están comprimidos"}]$$,
  1,
  $${"en": "Events are stored in transaction logs, not in expensive contract storage, making them about 10x cheaper.", "es": "Los eventos se almacenan en logs de transacción, no en el costoso storage del contrato, haciéndolos aproximadamente 10x más baratos."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'solidity';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What does 'require()' do in Solidity?", "es": "¿Qué hace 'require()' en Solidity?"}$$,
  $$[{"en": "Imports a library", "es": "Importa una librería"}, {"en": "Checks a condition and reverts if false", "es": "Chequea una condición y revierte si es falsa"}, {"en": "Creates a new variable", "es": "Crea una nueva variable"}, {"en": "Sends a transaction", "es": "Envía una transacción"}]$$,
  1,
  $${"en": "require() validates conditions and reverts the transaction with an error message if the condition is false.", "es": "require() valida condiciones y revierte la transacción con un mensaje de error si la condición es falsa."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'solidity';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is the difference between 'private' and 'internal'?", "es": "¿Cuál es la diferencia entre 'private' e 'internal'?"}$$,
  $$[{"en": "No difference", "es": "No hay diferencia"}, {"en": "Private: only this contract. Internal: this + derived contracts", "es": "Private: solo este contrato. Internal: este + contratos derivados"}, {"en": "Private is slower", "es": "Private es más lento"}, {"en": "Internal costs more gas", "es": "Internal cuesta más gas"}]$$,
  1,
  $${"en": "Private functions are only callable within the contract. Internal functions can also be called by contracts that inherit from it.", "es": "Las funciones private solo se pueden llamar dentro del contrato. Las funciones internal también pueden ser llamadas por contratos que heredan de él."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'solidity';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is msg.value?", "es": "¿Qué es msg.value?"}$$,
  $$[{"en": "The message text", "es": "El texto del mensaje"}, {"en": "Amount of ETH sent with the transaction", "es": "Cantidad de ETH enviado con la transacción"}, {"en": "The gas price", "es": "El precio del gas"}, {"en": "The block number", "es": "El número de bloque"}]$$,
  1,
  $${"en": "msg.value is a global variable containing the amount of Ether (in wei) sent with the current transaction.", "es": "msg.value es una variable global que contiene la cantidad de Ether (en wei) enviado con la transacción actual."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'solidity';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is a 'modifier' in Solidity?", "es": "¿Qué es un 'modifier' en Solidity?"}$$,
  $$[{"en": "A variable type", "es": "Un tipo de variable"}, {"en": "Reusable code that runs before/after functions", "es": "Código reutilizable que se ejecuta antes/después de funciones"}, {"en": "A comment style", "es": "Un estilo de comentario"}, {"en": "A compiler setting", "es": "Una configuración del compilador"}]$$,
  1,
  $${"en": "Modifiers are reusable code blocks that can run before and/or after a function, commonly used for access control (e.g., onlyOwner).", "es": "Los modifiers son bloques de código reutilizables que pueden ejecutarse antes y/o después de una función, comúnmente usados para control de acceso (ej: onlyOwner)."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'solidity';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is uint256?", "es": "¿Qué es uint256?"}$$,
  $$[{"en": "A signed 256-bit integer", "es": "Un entero con signo de 256 bits"}, {"en": "An unsigned 256-bit integer (0 to 2^256-1)", "es": "Un entero sin signo de 256 bits (0 a 2^256-1)"}, {"en": "A string type", "es": "Un tipo string"}, {"en": "A boolean", "es": "Un booleano"}]$$,
  1,
  $${"en": "uint256 is an unsigned (non-negative) integer that can hold values from 0 to 2^256-1, the most commonly used integer type.", "es": "uint256 es un entero sin signo (no negativo) que puede contener valores de 0 a 2^256-1, el tipo entero más comúnmente usado."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'solidity';

-- SECTION 3: Development Environment (15 questions)
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is Hardhat?", "es": "¿Qué es Hardhat?"}$$,
  $$[{"en": "A cryptocurrency", "es": "Una criptomoneda"}, {"en": "A professional smart contract development framework", "es": "Un framework profesional de desarrollo de contratos"}, {"en": "A blockchain network", "es": "Una red blockchain"}, {"en": "A hardware wallet", "es": "Una billetera de hardware"}]$$,
  1,
  $${"en": "Hardhat is the most popular development framework for smart contracts, offering testing, debugging, and deployment tools.", "es": "Hardhat es el framework de desarrollo más popular para contratos inteligentes, ofreciendo herramientas de testing, debugging y despliegue."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'development';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is Foundry?", "es": "¿Qué es Foundry?"}$$,
  $$[{"en": "A metal workshop", "es": "Un taller de metal"}, {"en": "A fast Rust-based development toolkit", "es": "Un kit de desarrollo rápido basado en Rust"}, {"en": "A token standard", "es": "Un estándar de token"}, {"en": "A wallet app", "es": "Una app de billetera"}]$$,
  1,
  $${"en": "Foundry is a blazing fast development toolkit written in Rust, allowing you to write tests in Solidity itself.", "es": "Foundry es un kit de desarrollo ultrarrápido escrito en Rust, que te permite escribir tests en Solidity mismo."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'development';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is Remix IDE best for?", "es": "¿Para qué es mejor Remix IDE?"}$$,
  $$[{"en": "Audio production", "es": "Producción de audio"}, {"en": "Learning and quick prototyping", "es": "Aprendizaje y prototipado rápido"}, {"en": "Video editing", "es": "Edición de video"}, {"en": "Sending emails", "es": "Enviar emails"}]$$,
  1,
  $${"en": "Remix IDE is a browser-based IDE perfect for beginners, requiring no setup and offering visual debugging.", "es": "Remix IDE es un IDE basado en navegador perfecto para principiantes, sin requerir instalación y ofreciendo debugging visual."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'development';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is OpenZeppelin Contracts?", "es": "¿Qué es OpenZeppelin Contracts?"}$$,
  $$[{"en": "A blockchain network", "es": "Una red blockchain"}, {"en": "Audited, battle-tested smart contract libraries", "es": "Librerías de contratos auditadas y probadas en batalla"}, {"en": "A wallet", "es": "Una billetera"}, {"en": "A cryptocurrency exchange", "es": "Un exchange de criptomonedas"}]$$,
  1,
  $${"en": "OpenZeppelin provides secure, community-audited implementations of common patterns like ERC-20, ERC-721, and access control.", "es": "OpenZeppelin proporciona implementaciones seguras y auditadas por la comunidad de patrones comunes como ERC-20, ERC-721 y control de acceso."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'development';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is a testnet?", "es": "¿Qué es una testnet?"}$$,
  $$[{"en": "The main Ethereum network", "es": "La red principal de Ethereum"}, {"en": "A test network with free tokens for testing", "es": "Una red de prueba con tokens gratis para testing"}, {"en": "A private network", "es": "Una red privada"}, {"en": "A faster version of mainnet", "es": "Una versión más rápida de mainnet"}]$$,
  1,
  $${"en": "Testnets are Ethereum test networks (like Sepolia, Goerli) where you can deploy and test with free test ETH.", "es": "Las testnets son redes de prueba de Ethereum (como Sepolia, Goerli) donde puedes desplegar y probar con ETH de prueba gratis."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'development';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is Sepolia?", "es": "¿Qué es Sepolia?"}$$,
  $$[{"en": "A city in Italy", "es": "Una ciudad en Italia"}, {"en": "An Ethereum testnet", "es": "Una testnet de Ethereum"}, {"en": "A token standard", "es": "Un estándar de token"}, {"en": "A wallet type", "es": "Un tipo de billetera"}]$$,
  1,
  $${"en": "Sepolia is the current recommended Ethereum testnet for testing smart contracts with free faucet ETH.", "es": "Sepolia es la testnet de Ethereum recomendada actualmente para probar contratos inteligentes con ETH gratis de faucet."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'development';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is ethers.js?", "es": "¿Qué es ethers.js?"}$$,
  $$[{"en": "A blockchain", "es": "Una blockchain"}, {"en": "A JavaScript library for interacting with Ethereum", "es": "Una librería JavaScript para interactuar con Ethereum"}, {"en": "A smart contract", "es": "Un contrato inteligente"}, {"en": "A token", "es": "Un token"}]$$,
  1,
  $${"en": "ethers.js is a popular JavaScript library for connecting to Ethereum, reading contracts, and sending transactions.", "es": "ethers.js es una librería JavaScript popular para conectar con Ethereum, leer contratos y enviar transacciones."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'development';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Why use dotenv in a Hardhat project?", "es": "¿Por qué usar dotenv en un proyecto Hardhat?"}$$,
  $$[{"en": "To write contracts", "es": "Para escribir contratos"}, {"en": "To manage private keys and API keys securely", "es": "Para gestionar claves privadas y API keys de forma segura"}, {"en": "To compile code", "es": "Para compilar código"}, {"en": "To run tests", "es": "Para ejecutar tests"}]$$,
  1,
  $${"en": "dotenv loads environment variables from a .env file, keeping sensitive data like private keys out of your codebase.", "es": "dotenv carga variables de entorno desde un archivo .env, manteniendo datos sensibles como claves privadas fuera de tu código."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'development';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What command initializes a new Hardhat project?", "es": "¿Qué comando inicializa un nuevo proyecto Hardhat?"}$$,
  $$[{"en": "npm start", "es": "npm start"}, {"en": "npx hardhat init", "es": "npx hardhat init"}, {"en": "hardhat new", "es": "hardhat new"}, {"en": "npm create hardhat", "es": "npm create hardhat"}]$$,
  1,
  $${"en": "npx hardhat init creates a new Hardhat project with sample contracts, tests, and configuration.", "es": "npx hardhat init crea un nuevo proyecto Hardhat con contratos de ejemplo, tests y configuración."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'development';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is Hardhat Network?", "es": "¿Qué es Hardhat Network?"}$$,
  $$[{"en": "A mainnet alternative", "es": "Una alternativa a mainnet"}, {"en": "A local blockchain for development and testing", "es": "Una blockchain local para desarrollo y testing"}, {"en": "A cloud service", "es": "Un servicio en la nube"}, {"en": "A file storage system", "es": "Un sistema de almacenamiento de archivos"}]$$,
  1,
  $${"en": "Hardhat Network is a local Ethereum network for development that offers instant mining, debugging, and console.log support.", "es": "Hardhat Network es una red Ethereum local para desarrollo que ofrece minado instantáneo, debugging y soporte para console.log."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'development';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What folder contains contracts in a Hardhat project?", "es": "¿Qué carpeta contiene los contratos en un proyecto Hardhat?"}$$,
  $$[{"en": "/src", "es": "/src"}, {"en": "/contracts", "es": "/contracts"}, {"en": "/code", "es": "/code"}, {"en": "/solidity", "es": "/solidity"}]$$,
  1,
  $${"en": "By default, Hardhat looks for Solidity contracts in the /contracts folder.", "es": "Por defecto, Hardhat busca contratos Solidity en la carpeta /contracts."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'development';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is viem?", "es": "¿Qué es viem?"}$$,
  $$[{"en": "A text editor", "es": "Un editor de texto"}, {"en": "A TypeScript interface for Ethereum", "es": "Una interfaz TypeScript para Ethereum"}, {"en": "A blockchain", "es": "Una blockchain"}, {"en": "A testing framework", "es": "Un framework de testing"}]$$,
  1,
  $${"en": "viem is a modern, lightweight TypeScript library for Ethereum that's an alternative to ethers.js with better types.", "es": "viem es una librería TypeScript moderna y ligera para Ethereum, alternativa a ethers.js con mejores tipos."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'development';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is a faucet in crypto?", "es": "¿Qué es un faucet en crypto?"}$$,
  $$[{"en": "A water tap", "es": "Un grifo de agua"}, {"en": "A service that gives free test tokens", "es": "Un servicio que da tokens de prueba gratis"}, {"en": "A trading bot", "es": "Un bot de trading"}, {"en": "A wallet type", "es": "Un tipo de billetera"}]$$,
  1,
  $${"en": "A faucet is a web service that distributes free test tokens for testnets like Sepolia, allowing developers to test without real money.", "es": "Un faucet es un servicio web que distribuye tokens de prueba gratis para testnets como Sepolia, permitiendo a desarrolladores probar sin dinero real."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'development';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Why are Layer 2 testnets useful?", "es": "¿Por qué son útiles las testnets de Layer 2?"}$$,
  $$[{"en": "They are more expensive", "es": "Son más caras"}, {"en": "They simulate L2 conditions with cheaper/faster testing", "es": "Simulan condiciones L2 con testing más barato/rápido"}, {"en": "They replace mainnet", "es": "Reemplazan mainnet"}, {"en": "They don't exist", "es": "No existen"}]$$,
  1,
  $${"en": "L2 testnets (like Mumbai, Arbitrum Goerli) let you test in realistic L2 conditions with fast, cheap transactions.", "es": "Las testnets L2 (como Mumbai, Arbitrum Goerli) te permiten probar en condiciones L2 realistas con transacciones rápidas y baratas."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'development';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What config file does Hardhat use?", "es": "¿Qué archivo de configuración usa Hardhat?"}$$,
  $$[{"en": "package.json", "es": "package.json"}, {"en": "hardhat.config.ts (or .js)", "es": "hardhat.config.ts (o .js)"}, {"en": "config.sol", "es": "config.sol"}, {"en": "settings.json", "es": "settings.json"}]$$,
  1,
  $${"en": "hardhat.config.ts (or hardhat.config.js) is the main configuration file where you set up networks, compiler versions, and plugins.", "es": "hardhat.config.ts (o hardhat.config.js) es el archivo de configuración principal donde configuras redes, versiones del compilador y plugins."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'development';
