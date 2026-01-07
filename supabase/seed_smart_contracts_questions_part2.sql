-- =============================================
-- SMART CONTRACTS - QUIZ QUESTIONS SEED (Part 2)
-- Sections 4-7 (15 questions each = 60 questions)
-- =============================================

-- SECTION 4: Security Best Practices (15 questions)
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is a reentrancy attack?", "es": "¿Qué es un ataque de reentrancia?"}$$,
  $$[{"en": "A phishing email", "es": "Un email de phishing"}, {"en": "Attacker calls back into contract before state updates", "es": "Atacante llama de vuelta al contrato antes de actualizar estado"}, {"en": "A password crack", "es": "Un crackeo de contraseña"}, {"en": "Network congestion", "es": "Congestión de red"}]$$,
  1,
  $${"en": "Reentrancy occurs when an external call allows an attacker to re-enter the function before state is updated, potentially draining funds.", "es": "La reentrancia ocurre cuando una llamada externa permite al atacante re-entrar en la función antes de que se actualice el estado, potencialmente drenando fondos."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'security';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is the Checks-Effects-Interactions pattern?", "es": "¿Qué es el patrón Checks-Effects-Interactions?"}$$,
  $$[{"en": "A testing method", "es": "Un método de testing"}, {"en": "Check conditions, update state, then make external calls", "es": "Chequear condiciones, actualizar estado, luego hacer llamadas externas"}, {"en": "A compiler option", "es": "Una opción del compilador"}, {"en": "A deployment tool", "es": "Una herramienta de despliegue"}]$$,
  1,
  $${"en": "This security pattern prevents reentrancy by updating state (Effects) before making external calls (Interactions).", "es": "Este patrón de seguridad previene reentrancia actualizando el estado (Effects) antes de hacer llamadas externas (Interactions)."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'security';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Why does Solidity 0.8+ help with integer overflow?", "es": "¿Por qué Solidity 0.8+ ayuda con overflow de enteros?"}$$,
  $$[{"en": "It runs faster", "es": "Se ejecuta más rápido"}, {"en": "It has built-in overflow/underflow checks", "es": "Tiene chequeos de overflow/underflow nativos"}, {"en": "It's cheaper", "es": "Es más barato"}, {"en": "It's more readable", "es": "Es más legible"}]$$,
  1,
  $${"en": "Solidity 0.8.0+ automatically reverts on integer overflow/underflow, eliminating a common vulnerability.", "es": "Solidity 0.8.0+ automáticamente revierte en overflow/underflow de enteros, eliminando una vulnerabilidad común."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'security';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is the onlyOwner modifier used for?", "es": "¿Para qué se usa el modificador onlyOwner?"}$$,
  $$[{"en": "Making functions faster", "es": "Hacer funciones más rápidas"}, {"en": "Restricting function access to the contract owner", "es": "Restringir acceso a funciones al propietario del contrato"}, {"en": "Saving gas", "es": "Ahorrar gas"}, {"en": "Logging events", "es": "Registrar eventos"}]$$,
  1,
  $${"en": "onlyOwner is a common access control modifier that ensures only the contract owner can call certain privileged functions.", "es": "onlyOwner es un modificador de control de acceso común que asegura que solo el propietario del contrato pueda llamar ciertas funciones privilegiadas."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'security';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is front-running in blockchain?", "es": "¿Qué es front-running en blockchain?"}$$,
  $$[{"en": "Running code faster", "es": "Ejecutar código más rápido"}, {"en": "Bots observing mempool and executing before your tx", "es": "Bots observando mempool y ejecutando antes de tu tx"}, {"en": "A testing technique", "es": "Una técnica de testing"}, {"en": "Running a frontend app", "es": "Ejecutar una app frontend"}]$$,
  1,
  $${"en": "Front-running occurs when MEV bots see pending transactions and place their own transactions first to profit.", "es": "El front-running ocurre cuando bots MEV ven transacciones pendientes y colocan sus propias transacciones primero para obtener ganancias."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'security';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is Slither?", "es": "¿Qué es Slither?"}$$,
  $$[{"en": "A snake game", "es": "Un juego de serpiente"}, {"en": "A static analysis security tool", "es": "Una herramienta de análisis estático de seguridad"}, {"en": "A blockchain network", "es": "Una red blockchain"}, {"en": "A wallet", "es": "Una billetera"}]$$,
  1,
  $${"en": "Slither is a static analysis framework by Trail of Bits that detects vulnerabilities in Solidity code.", "es": "Slither es un framework de análisis estático de Trail of Bits que detecta vulnerabilidades en código Solidity."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'security';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Why is tx.origin dangerous for authorization?", "es": "¿Por qué tx.origin es peligroso para autorización?"}$$,
  $$[{"en": "It's too slow", "es": "Es muy lento"}, {"en": "It can be exploited via phishing contracts", "es": "Puede ser explotado vía contratos de phishing"}, {"en": "It costs too much gas", "es": "Cuesta mucho gas"}, {"en": "It doesn't work", "es": "No funciona"}]$$,
  1,
  $${"en": "tx.origin is the original sender, so if a user interacts with a malicious contract, that contract can call your contract with the user's tx.origin.", "es": "tx.origin es el remitente original, así que si un usuario interactúa con un contrato malicioso, ese contrato puede llamar a tu contrato con el tx.origin del usuario."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'security';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is ReentrancyGuard?", "es": "¿Qué es ReentrancyGuard?"}$$,
  $$[{"en": "A firewall", "es": "Un firewall"}, {"en": "An OpenZeppelin contract to prevent reentrancy", "es": "Un contrato de OpenZeppelin para prevenir reentrancia"}, {"en": "A password manager", "es": "Un gestor de contraseñas"}, {"en": "A network protocol", "es": "Un protocolo de red"}]$$,
  1,
  $${"en": "ReentrancyGuard is an OpenZeppelin contract that provides a nonReentrant modifier to prevent reentrancy attacks.", "es": "ReentrancyGuard es un contrato de OpenZeppelin que proporciona un modificador nonReentrant para prevenir ataques de reentrancia."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'security';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is a circuit breaker/pause functionality?", "es": "¿Qué es un interruptor de circuito/funcionalidad de pausa?"}$$,
  $$[{"en": "A gas optimization", "es": "Una optimización de gas"}, {"en": "Emergency stop mechanism for contracts", "es": "Mecanismo de parada de emergencia para contratos"}, {"en": "A testing tool", "es": "Una herramienta de testing"}, {"en": "A deployment method", "es": "Un método de despliegue"}]$$,
  1,
  $${"en": "Pausable contracts can be stopped in emergencies (e.g., when a bug is discovered), preventing further damage.", "es": "Los contratos pausables pueden detenerse en emergencias (ej: cuando se descubre un bug), previniendo más daño."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'security';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is oracle manipulation?", "es": "¿Qué es manipulación de oráculo?"}$$,
  $$[{"en": "Hacking Oracle database", "es": "Hackear base de datos Oracle"}, {"en": "Manipulating price feeds to exploit DeFi protocols", "es": "Manipular feeds de precio para explotar protocolos DeFi"}, {"en": "A fortune telling scam", "es": "Una estafa de adivinación"}, {"en": "Editing smart contract code", "es": "Editar código de contrato"}]$$,
  1,
  $${"en": "Oracle manipulation involves manipulating external price data to trick DeFi protocols into making favorable (for the attacker) decisions.", "es": "La manipulación de oráculos implica manipular datos de precio externos para engañar a protocolos DeFi a tomar decisiones favorables (para el atacante)."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'security';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is Chainlink used for in security context?", "es": "¿Para qué se usa Chainlink en contexto de seguridad?"}$$,
  $$[{"en": "File storage", "es": "Almacenamiento de archivos"}, {"en": "Providing tamper-resistant price feeds", "es": "Proporcionar feeds de precio resistentes a manipulación"}, {"en": "Sending emails", "es": "Enviar emails"}, {"en": "Running nodes", "es": "Ejecutar nodos"}]$$,
  1,
  $${"en": "Chainlink provides decentralized oracles with multiple sources, making price manipulation much harder.", "es": "Chainlink proporciona oráculos descentralizados con múltiples fuentes, haciendo la manipulación de precios mucho más difícil."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'security';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Why should you get a security audit?", "es": "¿Por qué deberías obtener una auditoría de seguridad?"}$$,
  $$[{"en": "It's legally required", "es": "Es requerido legalmente"}, {"en": "Professional auditors find vulnerabilities you miss", "es": "Auditores profesionales encuentran vulnerabilidades que pasas por alto"}, {"en": "It makes code run faster", "es": "Hace que el código se ejecute más rápido"}, {"en": "It's free", "es": "Es gratis"}]$$,
  1,
  $${"en": "Security auditors specialize in finding vulnerabilities that developers often overlook, crucial before handling real value.", "es": "Los auditores de seguridad se especializan en encontrar vulnerabilidades que los desarrolladores a menudo pasan por alto, crucial antes de manejar valor real."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'security';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is fuzzing?", "es": "¿Qué es fuzzing?"}$$,
  $$[{"en": "Adding blur effects", "es": "Añadir efectos de desenfoque"}, {"en": "Testing with random inputs to find bugs", "es": "Probar con entradas aleatorias para encontrar bugs"}, {"en": "Compressing files", "es": "Comprimir archivos"}, {"en": "Encrypting data", "es": "Encriptar datos"}]$$,
  1,
  $${"en": "Fuzzing automatically generates random inputs to test contracts, finding edge cases and unexpected failures.", "es": "El fuzzing genera automáticamente entradas aleatorias para probar contratos, encontrando casos borde y fallos inesperados."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'security';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is a bug bounty program?", "es": "¿Qué es un programa de bug bounty?"}$$,
  $$[{"en": "A competition to write bugs", "es": "Una competición para escribir bugs"}, {"en": "Paying security researchers who find vulnerabilities", "es": "Pagar a investigadores de seguridad que encuentran vulnerabilidades"}, {"en": "A game", "es": "Un juego"}, {"en": "An insurance policy", "es": "Una póliza de seguro"}]$$,
  1,
  $${"en": "Bug bounty programs reward white-hat hackers for responsibly disclosing vulnerabilities instead of exploiting them.", "es": "Los programas de bug bounty recompensan a hackers white-hat por divulgar responsablemente vulnerabilidades en vez de explotarlas."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'security';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Which platform hosts crypto bug bounties?", "es": "¿Qué plataforma aloja bug bounties de crypto?"}$$,
  $$[{"en": "GitHub", "es": "GitHub"}, {"en": "Immunefi", "es": "Immunefi"}, {"en": "Stack Overflow", "es": "Stack Overflow"}, {"en": "LinkedIn", "es": "LinkedIn"}]$$,
  1,
  $${"en": "Immunefi is the leading bug bounty platform for Web3, hosting programs for major DeFi protocols.", "es": "Immunefi es la plataforma de bug bounty líder para Web3, alojando programas para protocolos DeFi importantes."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'security';

-- SECTION 5: Testing Smart Contracts (15 questions)
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Why is testing critical for smart contracts?", "es": "¿Por qué es crítico el testing para contratos inteligentes?"}$$,
  $$[{"en": "To make code readable", "es": "Para hacer el código legible"}, {"en": "You cannot patch bugs after deployment", "es": "No puedes parchear bugs después del despliegue"}, {"en": "To improve performance", "es": "Para mejorar rendimiento"}, {"en": "It's optional", "es": "Es opcional"}]$$,
  1,
  $${"en": "Unlike traditional software, deployed smart contracts cannot be updated, making thorough testing essential before deployment.", "es": "A diferencia del software tradicional, los contratos inteligentes desplegados no se pueden actualizar, haciendo el testing exhaustivo esencial antes del despliegue."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'testing';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What test coverage percentage should you aim for?", "es": "¿A qué porcentaje de cobertura de tests deberías apuntar?"}$$,
  $$[{"en": "50%", "es": "50%"}, {"en": "100%", "es": "100%"}, {"en": "25%", "es": "25%"}, {"en": "75%", "es": "75%"}]$$,
  1,
  $${"en": "For smart contracts, aim for 100% test coverage since bugs can be catastrophic and irreversible.", "es": "Para contratos inteligentes, apunta al 100% de cobertura de tests ya que los bugs pueden ser catastróficos e irreversibles."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'testing';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is a unit test?", "es": "¿Qué es un test unitario?"}$$,
  $$[{"en": "Testing an entire system", "es": "Probar un sistema entero"}, {"en": "Testing individual functions in isolation", "es": "Probar funciones individuales aisladas"}, {"en": "Testing user interface", "es": "Probar interfaz de usuario"}, {"en": "Testing network speed", "es": "Probar velocidad de red"}]$$,
  1,
  $${"en": "Unit tests verify that individual functions work correctly in isolation, testing both happy paths and error cases.", "es": "Los tests unitarios verifican que funciones individuales funcionan correctamente aisladas, probando tanto caminos felices como casos de error."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'testing';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is fork testing?", "es": "¿Qué es fork testing?"}$$,
  $$[{"en": "Testing eating utensils", "es": "Probar cubiertos"}, {"en": "Testing against a copy of mainnet state", "es": "Probar contra una copia del estado de mainnet"}, {"en": "Creating a new token", "es": "Crear un nuevo token"}, {"en": "Testing git forks", "es": "Probar forks de git"}]$$,
  1,
  $${"en": "Fork testing lets you test your contracts against actual mainnet state, simulating real-world interactions.", "es": "El fork testing te permite probar tus contratos contra el estado real de mainnet, simulando interacciones del mundo real."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'testing';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is Forge in Foundry?", "es": "¿Qué es Forge en Foundry?"}$$,
  $$[{"en": "A blacksmith tool", "es": "Una herramienta de herrero"}, {"en": "The testing component of Foundry", "es": "El componente de testing de Foundry"}, {"en": "A wallet", "es": "Una billetera"}, {"en": "A blockchain", "es": "Una blockchain"}]$$,
  1,
  $${"en": "Forge is Foundry's testing framework that lets you write tests in Solidity, offering fast execution and fuzzing.", "es": "Forge es el framework de testing de Foundry que te permite escribir tests en Solidity, ofreciendo ejecución rápida y fuzzing."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'testing';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is an integration test?", "es": "¿Qué es un test de integración?"}$$,
  $$[{"en": "Testing a single function", "es": "Probar una sola función"}, {"en": "Testing interactions between multiple contracts", "es": "Probar interacciones entre múltiples contratos"}, {"en": "Testing compilation", "es": "Probar compilación"}, {"en": "Testing deployment", "es": "Probar despliegue"}]$$,
  1,
  $${"en": "Integration tests verify that multiple contracts work together correctly, catching issues in cross-contract interactions.", "es": "Los tests de integración verifican que múltiples contratos funcionan correctamente juntos, detectando problemas en interacciones entre contratos."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'testing';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is Chai?", "es": "¿Qué es Chai?"}$$,
  $$[{"en": "A type of tea", "es": "Un tipo de té"}, {"en": "A JavaScript assertion library for testing", "es": "Una librería de aserciones JavaScript para testing"}, {"en": "A programming language", "es": "Un lenguaje de programación"}, {"en": "A blockchain", "es": "Una blockchain"}]$$,
  1,
  $${"en": "Chai is a JavaScript assertion library commonly used with Mocha for writing test expectations in Hardhat projects.", "es": "Chai es una librería de aserciones JavaScript comúnmente usada con Mocha para escribir expectativas de test en proyectos Hardhat."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'testing';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What should you test for access control?", "es": "¿Qué deberías probar para control de acceso?"}$$,
  $$[{"en": "UI design", "es": "Diseño de UI"}, {"en": "That unauthorized users get reverted", "es": "Que usuarios no autorizados sean revertidos"}, {"en": "Network speed", "es": "Velocidad de red"}, {"en": "Token prices", "es": "Precios de tokens"}]$$,
  1,
  $${"en": "Access control tests verify that only authorized users can call privileged functions and others are rejected.", "es": "Los tests de control de acceso verifican que solo usuarios autorizados pueden llamar funciones privilegiadas y otros son rechazados."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'testing';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is gas testing?", "es": "¿Qué es gas testing?"}$$,
  $$[{"en": "Testing fuel efficiency", "es": "Probar eficiencia de combustible"}, {"en": "Measuring gas consumption of functions", "es": "Medir consumo de gas de funciones"}, {"en": "Testing natural gas", "es": "Probar gas natural"}, {"en": "Testing air quality", "es": "Probar calidad del aire"}]$$,
  1,
  $${"en": "Gas testing measures how much gas functions consume, helping identify expensive operations and optimization opportunities.", "es": "El gas testing mide cuánto gas consumen las funciones, ayudando a identificar operaciones caras y oportunidades de optimización."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'testing';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is an edge case in testing?", "es": "¿Qué es un caso borde en testing?"}$$,
  $$[{"en": "Normal usage", "es": "Uso normal"}, {"en": "Extreme or boundary conditions like zero or max values", "es": "Condiciones extremas o límite como valores cero o máximos"}, {"en": "The fastest path", "es": "El camino más rápido"}, {"en": "The most common scenario", "es": "El escenario más común"}]$$,
  1,
  $${"en": "Edge cases test extreme conditions (zero values, max values, empty arrays) where bugs often hide.", "es": "Los casos borde prueban condiciones extremas (valores cero, valores máximos, arrays vacíos) donde los bugs a menudo se esconden."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'testing';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Why test event emissions?", "es": "¿Por qué probar emisiones de eventos?"}$$,
  $$[{"en": "Events don't matter", "es": "Los eventos no importan"}, {"en": "Off-chain systems depend on correct events", "es": "Sistemas off-chain dependen de eventos correctos"}, {"en": "Events make code faster", "es": "Los eventos hacen el código más rápido"}, {"en": "Events are required by law", "es": "Los eventos son requeridos por ley"}]$$,
  1,
  $${"en": "Front-ends and indexers rely on events to track contract activity. Wrong events can break entire applications.", "es": "Los front-ends e indexadores dependen de eventos para rastrear actividad del contrato. Eventos incorrectos pueden romper aplicaciones enteras."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'testing';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What does expect().to.be.revertedWith() test?", "es": "¿Qué prueba expect().to.be.revertedWith()?"}$$,
  $$[{"en": "Successful execution", "es": "Ejecución exitosa"}, {"en": "That a function reverts with a specific error message", "es": "Que una función revierte con un mensaje de error específico"}, {"en": "Gas consumption", "es": "Consumo de gas"}, {"en": "Event emissions", "es": "Emisiones de eventos"}]$$,
  1,
  $${"en": "This assertion verifies that a function call reverts with the expected error message, testing error handling.", "es": "Esta aserción verifica que una llamada a función revierte con el mensaje de error esperado, probando manejo de errores."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'testing';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is property-based testing?", "es": "¿Qué es testing basado en propiedades?"}$$,
  $$[{"en": "Testing real estate", "es": "Probar bienes raíces"}, {"en": "Testing that invariants always hold across random inputs", "es": "Probar que invariantes siempre se mantienen con entradas aleatorias"}, {"en": "Testing CSS properties", "es": "Probar propiedades CSS"}, {"en": "Testing user properties", "es": "Probar propiedades de usuario"}]$$,
  1,
  $${"en": "Property-based testing verifies that certain properties (invariants) always hold true regardless of random inputs.", "es": "El testing basado en propiedades verifica que ciertas propiedades (invariantes) siempre se mantienen verdaderas independientemente de entradas aleatorias."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'testing';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What command runs tests in Hardhat?", "es": "¿Qué comando ejecuta tests en Hardhat?"}$$,
  $$[{"en": "npm start", "es": "npm start"}, {"en": "npx hardhat test", "es": "npx hardhat test"}, {"en": "hardhat run", "es": "hardhat run"}, {"en": "npm test-all", "es": "npm test-all"}]$$,
  1,
  $${"en": "npx hardhat test runs all test files in the /test folder using the configured testing framework.", "es": "npx hardhat test ejecuta todos los archivos de test en la carpeta /test usando el framework de testing configurado."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'testing';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is Echidna?", "es": "¿Qué es Echidna?"}$$,
  $$[{"en": "An animal", "es": "Un animal"}, {"en": "A fuzzing tool for Solidity", "es": "Una herramienta de fuzzing para Solidity"}, {"en": "A wallet app", "es": "Una app de billetera"}, {"en": "A blockchain", "es": "Una blockchain"}]$$,
  1,
  $${"en": "Echidna is a powerful fuzzing tool that generates random inputs to find property violations in smart contracts.", "es": "Echidna es una herramienta de fuzzing potente que genera entradas aleatorias para encontrar violaciones de propiedades en contratos inteligentes."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'testing';

-- SECTION 6: Advanced Patterns & Deployment (15 questions)
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is the Proxy Pattern used for?", "es": "¿Para qué se usa el Patrón Proxy?"}$$,
  $$[{"en": "Hiding code", "es": "Ocultar código"}, {"en": "Enabling upgradeable contracts", "es": "Permitir contratos actualizables"}, {"en": "Faster execution", "es": "Ejecución más rápida"}, {"en": "Reducing gas", "es": "Reducir gas"}]$$,
  1,
  $${"en": "The Proxy Pattern separates logic from storage, allowing you to upgrade the implementation while keeping the same address.", "es": "El Patrón Proxy separa lógica de storage, permitiendo actualizar la implementación manteniendo la misma dirección."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'advanced';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is the Factory Pattern?", "es": "¿Qué es el Patrón Factory?"}$$,
  $$[{"en": "A manufacturing plant", "es": "Una planta de manufactura"}, {"en": "A contract that deploys other contracts", "es": "Un contrato que despliega otros contratos"}, {"en": "A testing method", "es": "Un método de testing"}, {"en": "A security tool", "es": "Una herramienta de seguridad"}]$$,
  1,
  $${"en": "Factory contracts deploy new contract instances programmatically - Uniswap uses this for creating trading pairs.", "es": "Los contratos Factory despliegan nuevas instancias de contratos programáticamente - Uniswap usa esto para crear pares de trading."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'advanced';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is the 24KB limit in Ethereum?", "es": "¿Cuál es el límite de 24KB en Ethereum?"}$$,
  $$[{"en": "Maximum transaction size", "es": "Tamaño máximo de transacción"}, {"en": "Maximum deployed contract bytecode size", "es": "Tamaño máximo de bytecode de contrato desplegado"}, {"en": "Maximum block size", "es": "Tamaño máximo de bloque"}, {"en": "Maximum gas limit", "es": "Límite máximo de gas"}]$$,
  1,
  $${"en": "Deployed contracts cannot exceed 24KB of bytecode. The Diamond Pattern helps work around this limitation.", "es": "Los contratos desplegados no pueden exceder 24KB de bytecode. El Patrón Diamond ayuda a evitar esta limitación."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'advanced';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Why is Pull Payment safer than pushing payments?", "es": "¿Por qué Pull Payment es más seguro que enviar pagos?"}$$,
  $$[{"en": "It's faster", "es": "Es más rápido"}, {"en": "User withdraws instead of contract pushing - prevents reentrancy", "es": "Usuario retira en vez de que el contrato envíe - previene reentrancia"}, {"en": "It's cheaper", "es": "Es más barato"}, {"en": "It's required by law", "es": "Es requerido por ley"}]$$,
  1,
  $${"en": "Pull payments let users withdraw funds, putting them in control and avoiding reentrancy risks from push payments.", "es": "Los pull payments permiten a usuarios retirar fondos, dándoles control y evitando riesgos de reentrancia de push payments."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'advanced';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Why use uint256 instead of uint8 when possible?", "es": "¿Por qué usar uint256 en vez de uint8 cuando sea posible?"}$$,
  $$[{"en": "More precision", "es": "Más precisión"}, {"en": "EVM pads smaller types to 256 bits anyway - saves gas", "es": "EVM rellena tipos menores a 256 bits de todos modos - ahorra gas"}, {"en": "It's required", "es": "Es requerido"}, {"en": "Better security", "es": "Mejor seguridad"}]$$,
  1,
  $${"en": "The EVM works in 256-bit words, so smaller types require padding/unpadding operations, making them more expensive.", "es": "La EVM trabaja en palabras de 256 bits, así que tipos menores requieren operaciones de relleno, haciéndolos más caros."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'advanced';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is storage packing?", "es": "¿Qué es empaquetado de storage?"}$$,
  $$[{"en": "Compressing files", "es": "Comprimir archivos"}, {"en": "Fitting multiple variables into one 32-byte slot", "es": "Encajar múltiples variables en un slot de 32 bytes"}, {"en": "Deleting unused variables", "es": "Eliminar variables no usadas"}, {"en": "Moving data off-chain", "es": "Mover datos off-chain"}]$$,
  1,
  $${"en": "Storage packing puts multiple smaller variables into a single slot, saving ~20,000 gas per slot saved.", "es": "El empaquetado de storage coloca múltiples variables menores en un solo slot, ahorrando ~20,000 gas por slot ahorrado."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'advanced';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What does the 'immutable' keyword do?", "es": "¿Qué hace la palabra clave 'immutable'?"}$$,
  $$[{"en": "Makes variables changeable", "es": "Hace variables cambiables"}, {"en": "Variables set once in constructor, stored in bytecode", "es": "Variables seteadas una vez en constructor, almacenadas en bytecode"}, {"en": "Deletes variables", "es": "Elimina variables"}, {"en": "Encrypts variables", "es": "Encripta variables"}]$$,
  1,
  $${"en": "Immutable variables are set in the constructor and stored in bytecode, making them cheaper to read than storage.", "es": "Las variables immutable se setean en el constructor y se almacenan en bytecode, haciéndolas más baratas de leer que storage."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'advanced';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is an 'unchecked' block used for?", "es": "¿Para qué se usa un bloque 'unchecked'?"}$$,
  $$[{"en": "Disabling security", "es": "Desactivar seguridad"}, {"en": "Skipping overflow checks when you know they're safe - saves gas", "es": "Saltear chequeos de overflow cuando sabes que son seguros - ahorra gas"}, {"en": "Adding debug logs", "es": "Añadir logs de debug"}, {"en": "Running tests", "es": "Ejecutar tests"}]$$,
  1,
  $${"en": "unchecked {} skips Solidity 0.8+ overflow checks, saving gas when you've verified the math is safe.", "es": "unchecked {} salta los chequeos de overflow de Solidity 0.8+, ahorrando gas cuando has verificado que la matemática es segura."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'advanced';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What should you do before mainnet deployment?", "es": "¿Qué deberías hacer antes de desplegar en mainnet?"}$$,
  $$[{"en": "Skip testing", "es": "Saltear testing"}, {"en": "Get a security audit", "es": "Obtener una auditoría de seguridad"}, {"en": "Delete all comments", "es": "Eliminar todos los comentarios"}, {"en": "Use the oldest Solidity version", "es": "Usar la versión más antigua de Solidity"}]$$,
  1,
  $${"en": "Professional security audits are essential before deploying contracts that will handle real value.", "es": "Las auditorías de seguridad profesionales son esenciales antes de desplegar contratos que manejarán valor real."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'advanced';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is Etherscan verification?", "es": "¿Qué es verificación en Etherscan?"}$$,
  $$[{"en": "Checking your identity", "es": "Verificar tu identidad"}, {"en": "Publishing source code to match deployed bytecode", "es": "Publicar código fuente que coincida con bytecode desplegado"}, {"en": "Scanning for viruses", "es": "Escanear por virus"}, {"en": "Checking wallet balance", "es": "Verificar balance de billetera"}]$$,
  1,
  $${"en": "Verifying on Etherscan publishes your source code, letting anyone read and audit the deployed contract.", "es": "Verificar en Etherscan publica tu código fuente, permitiendo a cualquiera leer y auditar el contrato desplegado."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'advanced';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is a timelock?", "es": "¿Qué es un timelock?"}$$,
  $$[{"en": "A physical lock", "es": "Un candado físico"}, {"en": "Delay between proposing and executing admin actions", "es": "Retraso entre proponer y ejecutar acciones admin"}, {"en": "A watch", "es": "Un reloj"}, {"en": "Transaction speed limit", "es": "Límite de velocidad de transacción"}]$$,
  1,
  $${"en": "Timelocks add a delay before admin changes take effect, giving users time to exit if they disagree with changes.", "es": "Los timelocks añaden un retraso antes de que cambios admin tomen efecto, dando tiempo a usuarios de salir si no están de acuerdo con los cambios."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'advanced';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is an EIP?", "es": "¿Qué es un EIP?"}$$,
  $$[{"en": "Ethereum Investment Program", "es": "Programa de Inversión Ethereum"}, {"en": "Ethereum Improvement Proposal", "es": "Propuesta de Mejora de Ethereum"}, {"en": "Emergency Incident Plan", "es": "Plan de Incidentes de Emergencia"}, {"en": "External Interface Protocol", "es": "Protocolo de Interfaz Externa"}]$$,
  1,
  $${"en": "EIPs are design documents proposing new features or standards for Ethereum, like EIP-20 (ERC-20 tokens).", "es": "Los EIPs son documentos de diseño que proponen nuevas características o estándares para Ethereum, como EIP-20 (tokens ERC-20)."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'advanced';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What monitoring tool is commonly used for smart contracts?", "es": "¿Qué herramienta de monitoreo se usa comúnmente para contratos?"}$$,
  $$[{"en": "Google Analytics", "es": "Google Analytics"}, {"en": "OpenZeppelin Defender", "es": "OpenZeppelin Defender"}, {"en": "AWS CloudWatch", "es": "AWS CloudWatch"}, {"en": "Datadog", "es": "Datadog"}]$$,
  1,
  $${"en": "OpenZeppelin Defender monitors contracts for suspicious activity, automates operations, and manages access control.", "es": "OpenZeppelin Defender monitorea contratos por actividad sospechosa, automatiza operaciones y gestiona control de acceso."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'advanced';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is a multisig wallet?", "es": "¿Qué es una billetera multisig?"}$$,
  $$[{"en": "A wallet with many passwords", "es": "Una billetera con muchas contraseñas"}, {"en": "A wallet requiring multiple signatures to authorize transactions", "es": "Una billetera que requiere múltiples firmas para autorizar transacciones"}, {"en": "A wallet with many tokens", "es": "Una billetera con muchos tokens"}, {"en": "A wallet with multiple addresses", "es": "Una billetera con múltiples direcciones"}]$$,
  1,
  $${"en": "Multisig wallets require M-of-N signatures (e.g., 3 of 5) to execute transactions, improving security for deployers.", "es": "Las billeteras multisig requieren M-de-N firmas (ej: 3 de 5) para ejecutar transacciones, mejorando seguridad para deployers."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'advanced';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What command verifies a contract on Etherscan via Hardhat?", "es": "¿Qué comando verifica un contrato en Etherscan vía Hardhat?"}$$,
  $$[{"en": "hardhat compile", "es": "hardhat compile"}, {"en": "npx hardhat verify --network <network> <address>", "es": "npx hardhat verify --network <network> <address>"}, {"en": "hardhat deploy", "es": "hardhat deploy"}, {"en": "npm run verify", "es": "npm run verify"}]$$,
  1,
  $${"en": "npx hardhat verify submits source code to Etherscan for verification, making your contract publicly readable.", "es": "npx hardhat verify envía código fuente a Etherscan para verificación, haciendo tu contrato públicamente legible."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'advanced';

-- SECTION 7: FAQs (15 questions)
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Can you update a deployed smart contract?", "es": "¿Puedes actualizar un contrato inteligente desplegado?"}$$,
  $$[{"en": "Yes, freely anytime", "es": "Sí, libremente en cualquier momento"}, {"en": "Not directly, but upgradeable patterns exist", "es": "No directamente, pero existen patrones actualizables"}, {"en": "Only the government can", "es": "Solo el gobierno puede"}, {"en": "Yes, via email request", "es": "Sí, vía solicitud por email"}]$$,
  1,
  $${"en": "Contracts are immutable by default. Proxy patterns allow upgradeability by separating logic from storage.", "es": "Los contratos son inmutables por defecto. Los patrones proxy permiten actualización separando lógica de storage."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What percentage of Ethereum contracts use Solidity?", "es": "¿Qué porcentaje de contratos Ethereum usan Solidity?"}$$,
  $$[{"en": "About 50%", "es": "Aproximadamente 50%"}, {"en": "Over 95%", "es": "Más del 95%"}, {"en": "About 25%", "es": "Aproximadamente 25%"}, {"en": "About 75%", "es": "Aproximadamente 75%"}]$$,
  1,
  $${"en": "Solidity is by far the dominant smart contract language, used in over 95% of Ethereum contracts.", "es": "Solidity es por lejos el lenguaje de contratos inteligentes dominante, usado en más del 95% de los contratos de Ethereum."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is Vyper?", "es": "¿Qué es Vyper?"}$$,
  $$[{"en": "A snake species", "es": "Una especie de serpiente"}, {"en": "A Python-like smart contract language", "es": "Un lenguaje de contratos inteligentes tipo Python"}, {"en": "A testing tool", "es": "Una herramienta de testing"}, {"en": "A wallet", "es": "Una billetera"}]$$,
  1,
  $${"en": "Vyper is an alternative to Solidity with Python-like syntax, designed to be simple and secure.", "es": "Vyper es una alternativa a Solidity con sintaxis tipo Python, diseñado para ser simple y seguro."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "How long to learn smart contract basics with coding experience?", "es": "¿Cuánto tiempo para aprender básicos de contratos con experiencia en código?"}$$,
  $$[{"en": "1 day", "es": "1 día"}, {"en": "2-4 weeks", "es": "2-4 semanas"}, {"en": "2 years", "es": "2 años"}, {"en": "1 hour", "es": "1 hora"}]$$,
  1,
  $${"en": "With programming experience, expect 2-4 weeks to learn basics, 2-3 months to be productive.", "es": "Con experiencia en programación, espera 2-4 semanas para aprender básicos, 2-3 meses para ser productivo."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is gas in Ethereum?", "es": "¿Qué es el gas en Ethereum?"}$$,
  $$[{"en": "Natural fuel", "es": "Combustible natural"}, {"en": "Unit measuring computational effort", "es": "Unidad que mide esfuerzo computacional"}, {"en": "A cryptocurrency", "es": "Una criptomoneda"}, {"en": "Network speed", "es": "Velocidad de red"}]$$,
  1,
  $${"en": "Gas measures computational work and prevents spam/infinite loops. Users pay gas price × gas used.", "es": "El gas mide trabajo computacional y previene spam/bucles infinitos. Los usuarios pagan precio de gas × gas usado."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What happens if a contract has a bug?", "es": "¿Qué pasa si un contrato tiene un bug?"}$$,
  $$[{"en": "It auto-fixes", "es": "Se auto-arregla"}, {"en": "The bug is permanent unless designed for upgrades", "es": "El bug es permanente a menos que esté diseñado para actualizaciones"}, {"en": "Ethereum fixes it", "es": "Ethereum lo arregla"}, {"en": "Nothing happens", "es": "No pasa nada"}]$$,
  1,
  $${"en": "Without upgrade mechanisms, bugs are permanent. Funds may be locked or vulnerable forever.", "es": "Sin mecanismos de actualización, los bugs son permanentes. Los fondos pueden quedar bloqueados o vulnerables para siempre."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is Alchemy University?", "es": "¿Qué es Alchemy University?"}$$,
  $$[{"en": "A chemistry school", "es": "Una escuela de química"}, {"en": "A free blockchain developer education platform", "es": "Una plataforma educativa gratis para desarrolladores blockchain"}, {"en": "A wallet service", "es": "Un servicio de billetera"}, {"en": "An exchange", "es": "Un exchange"}]$$,
  1,
  $${"en": "Alchemy University offers free courses and certifications for blockchain development, a great resource for beginners.", "es": "Alchemy University ofrece cursos y certificaciones gratis para desarrollo blockchain, un gran recurso para principiantes."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Why can't view functions be called for free inside transactions?", "es": "¿Por qué las funciones view no pueden llamarse gratis dentro de transacciones?"}$$,
  $$[{"en": "They're broken", "es": "Están rotas"}, {"en": "Any code in a transaction costs gas regardless of modifiers", "es": "Cualquier código en una transacción cuesta gas sin importar modificadores"}, {"en": "Ethereum blocks them", "es": "Ethereum las bloquea"}, {"en": "They're premium", "es": "Son premium"}]$$,
  1,
  $${"en": "View functions are only free when called externally (read-only). Within a transaction, all execution costs gas.", "es": "Las funciones view son gratis solo cuando se llaman externamente (solo lectura). Dentro de una transacción, toda ejecución cuesta gas."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is EIP-1559?", "es": "¿Qué es EIP-1559?"}$$,
  $$[{"en": "A token standard", "es": "Un estándar de token"}, {"en": "Fee market change introducing base fee + tip", "es": "Cambio de mercado de tarifas introduciendo base fee + tip"}, {"en": "A new blockchain", "es": "Una nueva blockchain"}, {"en": "A wallet update", "es": "Una actualización de billetera"}]$$,
  1,
  $${"en": "EIP-1559 changed Ethereum's fee market to use a base fee (burned) + priority tip (to validators).", "es": "EIP-1559 cambió el mercado de tarifas de Ethereum para usar base fee (quemado) + priority tip (para validadores)."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is gwei?", "es": "¿Qué es gwei?"}$$,
  $$[{"en": "A Chinese word", "es": "Una palabra china"}, {"en": "10^-9 ETH, used for gas prices", "es": "10^-9 ETH, usado para precios de gas"}, {"en": "A stablecoin", "es": "Una stablecoin"}, {"en": "A blockchain", "es": "Una blockchain"}]$$,
  1,
  $${"en": "Gwei (giga-wei) is 10^9 wei or 10^-9 ETH, the standard unit for expressing gas prices.", "es": "Gwei (giga-wei) es 10^9 wei o 10^-9 ETH, la unidad estándar para expresar precios de gas."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "How to get first smart contract job?", "es": "¿Cómo conseguir primer trabajo de smart contracts?"}$$,
  $$[{"en": "Just apply anywhere", "es": "Solo aplicar a cualquier lugar"}, {"en": "Build portfolio, contribute to open source, do bug bounties", "es": "Construir portafolio, contribuir a open source, hacer bug bounties"}, {"en": "Buy a certification", "es": "Comprar una certificación"}, {"en": "Wait for offers", "es": "Esperar ofertas"}]$$,
  1,
  $${"en": "Build projects on GitHub, contribute to protocols, participate in bug bounties, and network in crypto communities.", "es": "Construye proyectos en GitHub, contribuye a protocolos, participa en bug bounties y haz networking en comunidades crypto."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is Rust used for in blockchain?", "es": "¿Para qué se usa Rust en blockchain?"}$$,
  $$[{"en": "Ethereum contracts", "es": "Contratos Ethereum"}, {"en": "Solana smart contracts and high-performance tools", "es": "Contratos de Solana y herramientas de alto rendimiento"}, {"en": "Nothing", "es": "Nada"}, {"en": "Only wallets", "es": "Solo billeteras"}]$$,
  1,
  $${"en": "Rust is used for Solana contracts and high-performance tools like Foundry, NEAR, and Substrate (Polkadot).", "es": "Rust se usa para contratos de Solana y herramientas de alto rendimiento como Foundry, NEAR y Substrate (Polkadot)."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Why is Layer 2 deployment cheaper?", "es": "¿Por qué el despliegue en Layer 2 es más barato?"}$$,
  $$[{"en": "They use different gas", "es": "Usan gas diferente"}, {"en": "They batch transactions and have lower fees", "es": "Agrupan transacciones y tienen tarifas menores"}, {"en": "They're free", "es": "Son gratis"}, {"en": "They skip security", "es": "Saltan seguridad"}]$$,
  1,
  $${"en": "L2s like Arbitrum, Optimism, and Base batch transactions and post data to L1, reducing costs 10-100x.", "es": "L2s como Arbitrum, Optimism y Base agrupan transacciones y publican datos en L1, reduciendo costos 10-100x."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "What is a hard fork?", "es": "¿Qué es un hard fork?"}$$,
  $$[{"en": "A utensil", "es": "Un utensilio"}, {"en": "A blockchain upgrade that isn't backward compatible", "es": "Una actualización de blockchain que no es retrocompatible"}, {"en": "A wallet type", "es": "Un tipo de billetera"}, {"en": "A contract pattern", "es": "Un patrón de contrato"}]$$,
  1,
  $${"en": "A hard fork is a major protocol change. Ethereum's split after The DAO hack created Ethereum Classic.", "es": "Un hard fork es un cambio de protocolo importante. La división de Ethereum tras el hack de The DAO creó Ethereum Classic."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'faqs';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  $${"en": "Hardhat vs Foundry: which should beginners use?", "es": "Hardhat vs Foundry: ¿cuál deberían usar principiantes?"}$$,
  $$[{"en": "Neither", "es": "Ninguno"}, {"en": "Hardhat - easier for JavaScript developers", "es": "Hardhat - más fácil para desarrolladores JavaScript"}, {"en": "Foundry only", "es": "Solo Foundry"}, {"en": "Both simultaneously", "es": "Ambos simultáneamente"}]$$,
  1,
  $${"en": "Hardhat is easier for JavaScript developers with extensive documentation. Foundry is faster but has steeper learning curve.", "es": "Hardhat es más fácil para desarrolladores JavaScript con documentación extensa. Foundry es más rápido pero tiene curva de aprendizaje más pronunciada."}$$
FROM course_sections WHERE course_id = 'smart-contracts' AND slug = 'faqs';
