-- =============================================
-- SMART CONTRACTS COURSE - SECTIONS SEED
-- 7 Sections (6 Content + 1 FAQs)
-- =============================================

-- SECTION 1: Smart Contract Basics
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'smart-contracts', 
  'basics', 
  1, 
  '{"en": "Smart Contract Basics", "es": "Fundamentos de Contratos Inteligentes"}', 
  '{"en": "What are smart contracts and how they work", "es": "Qué son los contratos inteligentes y cómo funcionan"}',
  $${
    "en": {
      "p1": "<strong class=\"text-white\">Smart Contracts</strong> are self-executing programs stored on a blockchain. They automatically execute when predetermined conditions are met, without intermediaries. Think of them as digital vending machines: insert the right input, get the guaranteed output.",
      "components": {
        "title": "Key Characteristics",
        "items": [
          {"title": "Autonomous", "desc": "Execute automatically when conditions are met, 24/7, with no downtime"},
          {"title": "Trustless", "desc": "No need to trust a third party - the code is the arbiter and enforces the rules"},
          {"title": "Immutable", "desc": "Once deployed, the code cannot be changed (unless designed with upgrade patterns)"},
          {"title": "Transparent", "desc": "Anyone can verify the code and execution on the public blockchain"},
          {"title": "Deterministic", "desc": "Same input always produces same output, ensuring predictable behavior"}
        ]
      },
      "example": {
        "title": "Real-World Use Cases",
        "list": [
          "<strong class=\"text-green-400\">DeFi:</strong> Uniswap executes token swaps using AMM formula without human intervention",
          "<strong class=\"text-purple-400\">NFTs:</strong> CryptoPunks contract created and manages 10,000 unique avatars",
          "<strong class=\"text-cyan-400\">DAOs:</strong> MakerDAO governance contract controls a $5B+ protocol through voting",
          "<strong class=\"text-pink-400\">Supply Chain:</strong> Track provenance of goods from factory to consumer",
          "<strong class=\"text-yellow-400\">Insurance:</strong> Parametric insurance pays out automatically based on data feeds"
        ]
      },
      "tech": {
        "title": "How Smart Contracts Work",
        "desc": "When you deploy a smart contract, you're uploading bytecode (compiled code) to an Ethereum address. This address holds the contract's code and state (storage variables). Users interact by sending transactions to this address, which triggers function execution. The Ethereum Virtual Machine (EVM) executes the code across thousands of nodes, ensuring consensus on the result.",
        "list": [
          "1. Developer writes contract in Solidity",
          "2. Code is compiled to EVM bytecode",
          "3. Bytecode is deployed via transaction (costs gas)",
          "4. Contract gets a unique address on blockchain",
          "5. Users interact by sending transactions to that address",
          "6. EVM executes code and updates state"
        ]
      },
      "comparison": {
        "title": "Smart Contracts vs Traditional Contracts",
        "table": [
          {"aspect": "Execution", "traditional": "Requires courts/enforcement", "smart": "Self-executing, automatic"},
          {"aspect": "Trust", "traditional": "Trust in legal system", "smart": "Trust in code (trust minimized)"},
          {"aspect": "Speed", "traditional": "Days to weeks", "smart": "Seconds to minutes"},
          {"aspect": "Cost", "traditional": "Lawyers, fees, courts", "smart": "Just gas fees"},
          {"aspect": "Transparency", "traditional": "Private documents", "smart": "Public, auditable code"}
        ]
      }
    },
    "es": {
      "p1": "Los <strong class=\"text-white\">Contratos Inteligentes</strong> son programas autoejecutables almacenados en una blockchain. Se ejecutan automáticamente cuando se cumplen condiciones predeterminadas, sin intermediarios. Piensa en ellos como máquinas expendedoras digitales: insertas la entrada correcta, obtienes la salida garantizada.",
      "components": {
        "title": "Características Clave",
        "items": [
          {"title": "Autónomos", "desc": "Se ejecutan automáticamente cuando se cumplen condiciones, 24/7, sin interrupciones"},
          {"title": "Sin Confianza", "desc": "No necesitas confiar en terceros - el código es el árbitro y hace cumplir las reglas"},
          {"title": "Inmutables", "desc": "Una vez desplegados, el código no se puede cambiar (a menos que se diseñe con patrones de actualización)"},
          {"title": "Transparentes", "desc": "Cualquiera puede verificar el código y la ejecución en la blockchain pública"},
          {"title": "Deterministas", "desc": "La misma entrada siempre produce la misma salida, asegurando comportamiento predecible"}
        ]
      },
      "example": {
        "title": "Casos de Uso Reales",
        "list": [
          "<strong class=\"text-green-400\">DeFi:</strong> Uniswap ejecuta intercambios de tokens usando fórmula AMM sin intervención humana",
          "<strong class=\"text-purple-400\">NFTs:</strong> El contrato de CryptoPunks creó y gestiona 10,000 avatares únicos",
          "<strong class=\"text-cyan-400\">DAOs:</strong> La gobernanza de MakerDAO controla un protocolo de $5B+ mediante votaciones",
          "<strong class=\"text-pink-400\">Cadena de Suministro:</strong> Rastrea la procedencia de bienes desde fábrica hasta consumidor",
          "<strong class=\"text-yellow-400\">Seguros:</strong> Seguros paramétricos pagan automáticamente basados en feeds de datos"
        ]
      },
      "tech": {
        "title": "Cómo Funcionan los Smart Contracts",
        "desc": "Cuando despliegas un contrato inteligente, estás subiendo bytecode (código compilado) a una dirección de Ethereum. Esta dirección contiene el código del contrato y su estado (variables de almacenamiento). Los usuarios interactúan enviando transacciones a esta dirección, lo que dispara la ejecución de funciones. La Máquina Virtual de Ethereum (EVM) ejecuta el código en miles de nodos, asegurando consenso sobre el resultado.",
        "list": [
          "1. El desarrollador escribe el contrato en Solidity",
          "2. El código se compila a bytecode EVM",
          "3. El bytecode se despliega vía transacción (cuesta gas)",
          "4. El contrato obtiene una dirección única en blockchain",
          "5. Los usuarios interactúan enviando transacciones a esa dirección",
          "6. La EVM ejecuta el código y actualiza el estado"
        ]
      },
      "comparison": {
        "title": "Contratos Inteligentes vs Contratos Tradicionales",
        "table": [
          {"aspect": "Ejecución", "traditional": "Requiere tribunales/ejecución", "smart": "Autoejecutable, automático"},
          {"aspect": "Confianza", "traditional": "Confianza en sistema legal", "smart": "Confianza en código (minimizada)"},
          {"aspect": "Velocidad", "traditional": "Días a semanas", "smart": "Segundos a minutos"},
          {"aspect": "Costo", "traditional": "Abogados, tasas, tribunales", "smart": "Solo tarifas de gas"},
          {"aspect": "Transparencia", "traditional": "Documentos privados", "smart": "Código público y auditable"}
        ]
      }
    }
  }$$
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 2: Solidity Fundamentals
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'smart-contracts', 
  'solidity', 
  2, 
  '{"en": "Solidity Fundamentals", "es": "Fundamentos de Solidity"}', 
  '{"en": "Learn the programming language for Ethereum", "es": "Aprende el lenguaje de programación de Ethereum"}',
  $${
    "en": {
      "p1": "<strong class=\"text-white\">Solidity</strong> is the most popular programming language for Ethereum smart contracts. It's statically-typed, supports inheritance, libraries, and complex user-defined types. While it looks similar to JavaScript/C++, it has unique concepts due to the blockchain environment.",
      "components": {
        "title": "Data Types & Variables",
        "items": [
          {"title": "Value Types", "desc": "bool, uint/int (8-256 bits), address (20 bytes), bytes1-32, enum"},
          {"title": "Reference Types", "desc": "arrays (fixed/dynamic), struct, mapping, string"},
          {"title": "Special Variables", "desc": "msg.sender (caller), msg.value (ETH sent), block.timestamp, tx.origin"},
          {"title": "State vs Local", "desc": "State variables persist on-chain (expensive), local only exist during execution (cheap)"}
        ]
      },
      "example": {
        "title": "Function Visibility & Modifiers",
        "list": [
          "<strong class=\"text-cyan-400\">public:</strong> Callable by anyone, internal and external",
          "<strong class=\"text-green-400\">private:</strong> Only within the contract itself",
          "<strong class=\"text-yellow-400\">internal:</strong> This contract and derived contracts",
          "<strong class=\"text-purple-400\">external:</strong> Only from outside (cannot be called internally)",
          "<strong class=\"text-pink-400\">view:</strong> Reads state but doesn't modify (no gas when called externally)",
          "<strong class=\"text-blue-400\">pure:</strong> Doesn't read or modify state",
          "<strong class=\"text-orange-400\">payable:</strong> Function can receive ETH"
        ]
      },
      "tech": {
        "title": "Key Solidity Concepts",
        "desc": "Understanding these concepts is essential for writing secure smart contracts:",
        "list": [
          "<strong>Constructor:</strong> Special function called once during deployment to initialize state",
          "<strong>Events:</strong> Log data to blockchain for off-chain indexing (much cheaper than storage)",
          "<strong>Modifiers:</strong> Reusable code that runs before/after functions (like onlyOwner)",
          "<strong>Inheritance:</strong> Contracts can inherit from others (is keyword)",
          "<strong>Interface:</strong> Define function signatures without implementation",
          "<strong>Library:</strong> Stateless, reusable code that contracts can link to"
        ]
      },
      "code": {
        "title": "Example: ERC-20 Token Basics",
        "snippet": "contract Token {\n  mapping(address => uint256) public balances;\n  event Transfer(address from, address to, uint256 amount);\n\n  function transfer(address to, uint256 amount) public {\n    require(balances[msg.sender] >= amount, 'Insufficient');\n    balances[msg.sender] -= amount;\n    balances[to] += amount;\n    emit Transfer(msg.sender, to, amount);\n  }\n}"
      }
    },
    "es": {
      "p1": "<strong class=\"text-white\">Solidity</strong> es el lenguaje de programación más popular para contratos inteligentes de Ethereum. Es de tipado estático, soporta herencia, librerías y tipos complejos definidos por usuario. Aunque se parece a JavaScript/C++, tiene conceptos únicos debido al entorno blockchain.",
      "components": {
        "title": "Tipos de Datos y Variables",
        "items": [
          {"title": "Tipos de Valor", "desc": "bool, uint/int (8-256 bits), address (20 bytes), bytes1-32, enum"},
          {"title": "Tipos de Referencia", "desc": "arrays (fijos/dinámicos), struct, mapping, string"},
          {"title": "Variables Especiales", "desc": "msg.sender (llamador), msg.value (ETH enviado), block.timestamp, tx.origin"},
          {"title": "Estado vs Local", "desc": "Variables de estado persisten on-chain (caro), locales solo existen durante ejecución (barato)"}
        ]
      },
      "example": {
        "title": "Visibilidad de Funciones y Modificadores",
        "list": [
          "<strong class=\"text-cyan-400\">public:</strong> Llamable por cualquiera, interna y externamente",
          "<strong class=\"text-green-400\">private:</strong> Solo dentro del propio contrato",
          "<strong class=\"text-yellow-400\">internal:</strong> Este contrato y contratos derivados",
          "<strong class=\"text-purple-400\">external:</strong> Solo desde fuera (no se puede llamar internamente)",
          "<strong class=\"text-pink-400\">view:</strong> Lee estado pero no modifica (sin gas cuando se llama externamente)",
          "<strong class=\"text-blue-400\">pure:</strong> No lee ni modifica estado",
          "<strong class=\"text-orange-400\">payable:</strong> La función puede recibir ETH"
        ]
      },
      "tech": {
        "title": "Conceptos Clave de Solidity",
        "desc": "Entender estos conceptos es esencial para escribir contratos seguros:",
        "list": [
          "<strong>Constructor:</strong> Función especial llamada una vez durante el despliegue para inicializar estado",
          "<strong>Eventos:</strong> Registra datos en blockchain para indexación off-chain (mucho más barato que storage)",
          "<strong>Modificadores:</strong> Código reutilizable que se ejecuta antes/después de funciones (como onlyOwner)",
          "<strong>Herencia:</strong> Los contratos pueden heredar de otros (palabra clave is)",
          "<strong>Interface:</strong> Define firmas de funciones sin implementación",
          "<strong>Library:</strong> Código sin estado, reutilizable que los contratos pueden enlazar"
        ]
      },
      "code": {
        "title": "Ejemplo: Básicos de Token ERC-20",
        "snippet": "contract Token {\n  mapping(address => uint256) public balances;\n  event Transfer(address from, address to, uint256 amount);\n\n  function transfer(address to, uint256 amount) public {\n    require(balances[msg.sender] >= amount, 'Insufficient');\n    balances[msg.sender] -= amount;\n    balances[to] += amount;\n    emit Transfer(msg.sender, to, amount);\n  }\n}"
      }
    }
  }$$
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 3: Development Environment
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'smart-contracts', 
  'development', 
  3, 
  '{"en": "Development Environment", "es": "Entorno de Desarrollo"}', 
  '{"en": "Tools and setup for smart contract development", "es": "Herramientas y configuración para desarrollo de contratos"}',
  $${
    "en": {
      "p1": "Setting up the right <strong class=\"text-white\">development environment</strong> is crucial for productive smart contract development. The ecosystem has matured significantly, offering powerful tools for compilation, testing, and deployment.",
      "components": {
        "title": "Essential Development Tools",
        "items": [
          {"title": "Hardhat", "desc": "The most popular professional development framework with built-in testing, debugging, and deployment"},
          {"title": "Foundry", "desc": "Blazing fast toolkit written in Rust - preferred by advanced developers"},
          {"title": "Remix IDE", "desc": "Browser-based IDE perfect for learning and quick prototyping"},
          {"title": "VS Code + Solidity Extension", "desc": "Best desktop editing experience with syntax highlighting and linting"}
        ]
      },
      "example": {
        "title": "Hardhat Project Setup",
        "list": [
          "1. npm init -y && npm install --save-dev hardhat",
          "2. npx hardhat init (choose TypeScript project)",
          "3. Configure hardhat.config.ts with networks and compiler",
          "4. Write contracts in /contracts folder",
          "5. Write tests in /test folder",
          "6. Deploy with scripts in /scripts folder"
        ]
      },
      "tech": {
        "title": "Key Dependencies",
        "desc": "A typical Hardhat project includes these packages:",
        "list": [
          "<strong>@openzeppelin/contracts:</strong> Battle-tested, audited contract libraries",
          "<strong>ethers.js or viem:</strong> Ethereum JavaScript libraries for interaction",
          "<strong>chai/mocha:</strong> Testing frameworks for JavaScript",
          "<strong>@nomicfoundation/hardhat-toolbox:</strong> All-in-one Hardhat plugins",
          "<strong>dotenv:</strong> Environment variable management for private keys"
        ]
      },
      "networks": {
        "title": "Networks & Testnets",
        "table": [
          {"network": "Hardhat Network", "purpose": "Local testing, instant mining, debugging", "cost": "Free (simulated)"},
          {"network": "Sepolia", "purpose": "Ethereum testnet for realistic testing", "cost": "Free (faucet ETH)"},
          {"network": "Goerli", "purpose": "Alternative Ethereum testnet", "cost": "Free (faucet ETH)"},
          {"network": "Mainnet", "purpose": "Production deployment", "cost": "Real ETH (expensive)"},
          {"network": "Polygon Mumbai", "purpose": "L2 testnet for cheaper testing", "cost": "Free (faucet MATIC)"}
        ]
      }
    },
    "es": {
      "p1": "Configurar el <strong class=\"text-white\">entorno de desarrollo</strong> correcto es crucial para el desarrollo productivo de contratos inteligentes. El ecosistema ha madurado significativamente, ofreciendo herramientas potentes para compilación, testing y despliegue.",
      "components": {
        "title": "Herramientas Esenciales de Desarrollo",
        "items": [
          {"title": "Hardhat", "desc": "El framework de desarrollo profesional más popular con testing, debugging y despliegue incluidos"},
          {"title": "Foundry", "desc": "Kit de herramientas ultrarrápido escrito en Rust - preferido por desarrolladores avanzados"},
          {"title": "Remix IDE", "desc": "IDE basado en navegador perfecto para aprender y prototipar rápido"},
          {"title": "VS Code + Extensión Solidity", "desc": "Mejor experiencia de edición de escritorio con resaltado de sintaxis y linting"}
        ]
      },
      "example": {
        "title": "Configuración de Proyecto Hardhat",
        "list": [
          "1. npm init -y && npm install --save-dev hardhat",
          "2. npx hardhat init (elige proyecto TypeScript)",
          "3. Configura hardhat.config.ts con redes y compilador",
          "4. Escribe contratos en carpeta /contracts",
          "5. Escribe tests en carpeta /test",
          "6. Despliega con scripts en carpeta /scripts"
        ]
      },
      "tech": {
        "title": "Dependencias Clave",
        "desc": "Un proyecto típico de Hardhat incluye estos paquetes:",
        "list": [
          "<strong>@openzeppelin/contracts:</strong> Librerías de contratos probadas y auditadas",
          "<strong>ethers.js o viem:</strong> Librerías JavaScript de Ethereum para interacción",
          "<strong>chai/mocha:</strong> Frameworks de testing para JavaScript",
          "<strong>@nomicfoundation/hardhat-toolbox:</strong> Plugins Hardhat todo-en-uno",
          "<strong>dotenv:</strong> Gestión de variables de entorno para claves privadas"
        ]
      },
      "networks": {
        "title": "Redes y Testnets",
        "table": [
          {"network": "Hardhat Network", "purpose": "Testing local, minado instantáneo, debugging", "cost": "Gratis (simulado)"},
          {"network": "Sepolia", "purpose": "Testnet de Ethereum para pruebas realistas", "cost": "Gratis (faucet ETH)"},
          {"network": "Goerli", "purpose": "Testnet alternativa de Ethereum", "cost": "Gratis (faucet ETH)"},
          {"network": "Mainnet", "purpose": "Despliegue en producción", "cost": "ETH real (caro)"},
          {"network": "Polygon Mumbai", "purpose": "Testnet L2 para pruebas más baratas", "cost": "Gratis (faucet MATIC)"}
        ]
      }
    }
  }$$
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 4: Security Best Practices
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'smart-contracts', 
  'security', 
  4, 
  '{"en": "Security Best Practices", "es": "Mejores Prácticas de Seguridad"}', 
  '{"en": "Protect against vulnerabilities and hacks", "es": "Protégete contra vulnerabilidades y hacks"}',
  $${
    "en": {
      "p1": "<strong class=\"text-white\">Security is paramount</strong> in smart contract development. A single bug can lead to millions in losses. The DAO hack (2016) lost $60M due to reentrancy. Always assume attackers will try to exploit your code.",
      "components": {
        "title": "Common Vulnerabilities",
        "items": [
          {"title": "Reentrancy", "desc": "Attacker calls back into your contract before state updates. Solution: Checks-Effects-Interactions pattern or ReentrancyGuard"},
          {"title": "Integer Overflow/Underflow", "desc": "Arithmetic exceeds max/min values. Solution: Solidity 0.8+ has built-in checks"},
          {"title": "Access Control", "desc": "Unauthorized users call privileged functions. Solution: onlyOwner modifiers, AccessControl"},
          {"title": "Front-running", "desc": "MEV bots observe mempool and front-run transactions. Solution: Commit-reveal schemes, deadlines"},
          {"title": "Oracle Manipulation", "desc": "Price oracles can be manipulated. Solution: Use Chainlink, TWAP, multiple sources"}
        ]
      },
      "example": {
        "title": "Security Checklist",
        "list": [
          "Use latest Solidity version (0.8.x+) for built-in overflow checks",
          "Import audited libraries (OpenZeppelin) instead of writing from scratch",
          "Follow Checks-Effects-Interactions pattern religiously",
          "Add require() statements for all input validation",
          "Use events for important state changes (for monitoring)",
          "Consider circuit breakers (pausable) for emergency stops",
          "Get professional audit before mainnet deployment",
          "Start with a bug bounty program"
        ]
      },
      "tech": {
        "title": "Reentrancy Deep Dive",
        "desc": "The most dangerous vulnerability. Here's how it works:",
        "list": [
          "1. Vulnerable contract has withdraw() that sends ETH before updating balance",
          "2. Attacker deploys contract with malicious receive() function",
          "3. Attacker calls withdraw() - contract sends ETH",
          "4. Attacker's receive() immediately calls withdraw() again",
          "5. Balance hasn't updated yet, so more ETH is sent",
          "6. Repeat until contract is drained"
        ],
        "fix": "Always update state BEFORE external calls: \n\nfunction withdraw() public {\n  uint256 amount = balances[msg.sender];\n  balances[msg.sender] = 0;  // Update FIRST\n  (bool success,) = msg.sender.call{value: amount}('');\n  require(success);\n}"
      },
      "tools": {
        "title": "Security Analysis Tools",
        "items": [
          {"name": "Slither", "desc": "Static analysis framework by Trail of Bits"},
          {"name": "Mythril", "desc": "Symbolic execution for finding vulnerabilities"},
          {"name": "Echidna", "desc": "Fuzzing tool for property-based testing"},
          {"name": "Foundry Fuzz", "desc": "Built-in fuzzing in Foundry framework"}
        ]
      }
    },
    "es": {
      "p1": "<strong class=\"text-white\">La seguridad es primordial</strong> en el desarrollo de contratos inteligentes. Un solo bug puede costar millones. El hack de The DAO (2016) perdió $60M por reentrancia. Siempre asume que los atacantes intentarán explotar tu código.",
      "components": {
        "title": "Vulnerabilidades Comunes",
        "items": [
          {"title": "Reentrancia", "desc": "El atacante llama de vuelta a tu contrato antes de actualizar estado. Solución: patrón Checks-Effects-Interactions o ReentrancyGuard"},
          {"title": "Overflow/Underflow de Enteros", "desc": "La aritmética excede valores máx/min. Solución: Solidity 0.8+ tiene chequeos nativos"},
          {"title": "Control de Acceso", "desc": "Usuarios no autorizados llaman funciones privilegiadas. Solución: modificadores onlyOwner, AccessControl"},
          {"title": "Front-running", "desc": "Bots MEV observan mempool y adelantan transacciones. Solución: esquemas commit-reveal, plazos"},
          {"title": "Manipulación de Oráculos", "desc": "Los oráculos de precios pueden manipularse. Solución: Usar Chainlink, TWAP, múltiples fuentes"}
        ]
      },
      "example": {
        "title": "Checklist de Seguridad",
        "list": [
          "Usa la última versión de Solidity (0.8.x+) para chequeos de overflow nativos",
          "Importa librerías auditadas (OpenZeppelin) en vez de escribir desde cero",
          "Sigue el patrón Checks-Effects-Interactions religiosamente",
          "Añade require() para toda validación de entrada",
          "Usa eventos para cambios de estado importantes (para monitoreo)",
          "Considera circuit breakers (pausable) para paradas de emergencia",
          "Obtén auditoría profesional antes de desplegar en mainnet",
          "Comienza con un programa de bug bounty"
        ]
      },
      "tech": {
        "title": "Profundizando en Reentrancia",
        "desc": "La vulnerabilidad más peligrosa. Así funciona:",
        "list": [
          "1. Contrato vulnerable tiene withdraw() que envía ETH antes de actualizar balance",
          "2. Atacante despliega contrato con función receive() maliciosa",
          "3. Atacante llama withdraw() - el contrato envía ETH",
          "4. El receive() del atacante inmediatamente llama withdraw() de nuevo",
          "5. El balance aún no se actualizó, así que se envía más ETH",
          "6. Repetir hasta vaciar el contrato"
        ],
        "fix": "Siempre actualiza estado ANTES de llamadas externas: \n\nfunction withdraw() public {\n  uint256 amount = balances[msg.sender];\n  balances[msg.sender] = 0;  // Actualiza PRIMERO\n  (bool success,) = msg.sender.call{value: amount}('');\n  require(success);\n}"
      },
      "tools": {
        "title": "Herramientas de Análisis de Seguridad",
        "items": [
          {"name": "Slither", "desc": "Framework de análisis estático por Trail of Bits"},
          {"name": "Mythril", "desc": "Ejecución simbólica para encontrar vulnerabilidades"},
          {"name": "Echidna", "desc": "Herramienta de fuzzing para testing basado en propiedades"},
          {"name": "Foundry Fuzz", "desc": "Fuzzing integrado en el framework Foundry"}
        ]
      }
    }
  }$$
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 5: Testing Smart Contracts
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'smart-contracts', 
  'testing', 
  5, 
  '{"en": "Testing Smart Contracts", "es": "Testing de Smart Contracts"}', 
  '{"en": "Ensuring code reliability before deployment", "es": "Asegurando fiabilidad del código antes del despliegue"}',
  $${
    "en": {
      "p1": "<strong class=\"text-white\">Testing is mandatory</strong> for smart contracts. Unlike traditional software, you cannot patch bugs after deployment. Aim for 100% code coverage and test every edge case imaginable.",
      "components": {
        "title": "Testing Frameworks",
        "items": [
          {"title": "Hardhat + Chai/Mocha", "desc": "JavaScript/TypeScript testing. Most common, extensive documentation."},
          {"title": "Foundry (Forge)", "desc": "Write tests in Solidity itself. Blazing fast, great for fuzzing."},
          {"title": "Brownie", "desc": "Python-based framework. Good for those who prefer Python."},
          {"title": "Ape Framework", "desc": "Modern Python framework by ApeWorX team."}
        ]
      },
      "example": {
        "title": "Types of Tests",
        "list": [
          "<strong>Unit Tests:</strong> Test individual functions in isolation. Test each function's happy path and error cases.",
          "<strong>Integration Tests:</strong> Test interactions between multiple contracts. Ensure they work together correctly.",
          "<strong>Fuzz Testing:</strong> Generate random inputs to find unexpected failures. Foundry excels at this.",
          "<strong>Fork Testing:</strong> Test against mainnet state. Simulate real-world scenarios.",
          "<strong>Gas Testing:</strong> Measure and optimize gas consumption. Track changes over time."
        ]
      },
      "tech": {
        "title": "Test Coverage Areas",
        "desc": "Critical areas every test suite should cover:",
        "list": [
          "Happy path: Normal usage works correctly",
          "Access control: Unauthorized calls revert",
          "Edge cases: Zero values, max values, empty arrays",
          "Reentrancy: External calls don't break state",
          "Overflow: Arithmetic doesn't exceed limits",
          "Events: Correct events emitted with right data",
          "Reverts: Functions revert with expected messages"
        ]
      },
      "code": {
        "title": "Example Hardhat Test",
        "snippet": "describe('Token', () => {\n  it('should transfer tokens', async () => {\n    const [owner, addr1] = await ethers.getSigners();\n    const token = await Token.deploy();\n    \n    await token.transfer(addr1.address, 100);\n    expect(await token.balanceOf(addr1.address)).to.equal(100);\n  });\n\n  it('should revert on insufficient balance', async () => {\n    await expect(token.transfer(addr1.address, 9999))\n      .to.be.revertedWith('Insufficient balance');\n  });\n});"
      }
    },
    "es": {
      "p1": "<strong class=\"text-white\">El testing es obligatorio</strong> para contratos inteligentes. A diferencia del software tradicional, no puedes parchear bugs después del despliegue. Apunta al 100% de cobertura de código y prueba cada caso borde imaginable.",
      "components": {
        "title": "Frameworks de Testing",
        "items": [
          {"title": "Hardhat + Chai/Mocha", "desc": "Testing en JavaScript/TypeScript. Más común, documentación extensa."},
          {"title": "Foundry (Forge)", "desc": "Escribe tests en Solidity mismo. Ultrarrápido, excelente para fuzzing."},
          {"title": "Brownie", "desc": "Framework basado en Python. Bueno para quienes prefieren Python."},
          {"title": "Ape Framework", "desc": "Framework moderno de Python por el equipo ApeWorX."}
        ]
      },
      "example": {
        "title": "Tipos de Tests",
        "list": [
          "<strong>Tests Unitarios:</strong> Prueba funciones individuales aisladas. Prueba el camino feliz y casos de error de cada función.",
          "<strong>Tests de Integración:</strong> Prueba interacciones entre múltiples contratos. Asegura que funcionan correctamente juntos.",
          "<strong>Fuzz Testing:</strong> Genera entradas aleatorias para encontrar fallos inesperados. Foundry destaca en esto.",
          "<strong>Fork Testing:</strong> Prueba contra estado de mainnet. Simula escenarios del mundo real.",
          "<strong>Gas Testing:</strong> Mide y optimiza consumo de gas. Rastrea cambios en el tiempo."
        ]
      },
      "tech": {
        "title": "Áreas de Cobertura de Test",
        "desc": "Áreas críticas que toda suite de tests debe cubrir:",
        "list": [
          "Camino feliz: El uso normal funciona correctamente",
          "Control de acceso: Llamadas no autorizadas revierten",
          "Casos borde: Valores cero, valores máximos, arrays vacíos",
          "Reentrancia: Llamadas externas no rompen el estado",
          "Overflow: La aritmética no excede límites",
          "Eventos: Se emiten eventos correctos con datos correctos",
          "Reverts: Las funciones revierten con mensajes esperados"
        ]
      },
      "code": {
        "title": "Ejemplo de Test en Hardhat",
        "snippet": "describe('Token', () => {\n  it('should transfer tokens', async () => {\n    const [owner, addr1] = await ethers.getSigners();\n    const token = await Token.deploy();\n    \n    await token.transfer(addr1.address, 100);\n    expect(await token.balanceOf(addr1.address)).to.equal(100);\n  });\n\n  it('should revert on insufficient balance', async () => {\n    await expect(token.transfer(addr1.address, 9999))\n      .to.be.revertedWith('Insufficient balance');\n  });\n});"
      }
    }
  }$$
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 6: Advanced Patterns & Deployment
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'smart-contracts', 
  'advanced', 
  6, 
  '{"en": "Advanced Patterns & Deployment", "es": "Patrones Avanzados y Despliegue"}', 
  '{"en": "Professional patterns and production deployment", "es": "Patrones profesionales y despliegue a producción"}',
  $${
    "en": {
      "p1": "<strong class=\"text-white\">Design patterns</strong> help you write efficient, secure, and maintainable smart contracts. Understanding these patterns is essential for professional development.",
      "components": {
        "title": "Essential Design Patterns",
        "items": [
          {"title": "Proxy Pattern", "desc": "Enable upgradeable contracts. Implementation logic is separate from storage. Used by USDC, USDT, most major protocols."},
          {"title": "Factory Pattern", "desc": "Deploy multiple contract instances programmatically. Uniswap uses this for creating trading pairs."},
          {"title": "Diamond Pattern (EIP-2535)", "desc": "Modular contracts with multiple facets. Breaks the 24KB contract size limit."},
          {"title": "Pull Payment", "desc": "Let users withdraw funds instead of pushing payments. Safer than direct transfers."}
        ]
      },
      "example": {
        "title": "Gas Optimization Tips",
        "list": [
          "Use uint256 instead of smaller uints (cheaper in EVM due to padding)",
          "Pack storage variables (uint128, uint128 in same slot saves 20K gas)",
          "Use immutable for constants set in constructor",
          "Avoid loops with unbounded arrays (gas limit risk)",
          "Cache storage variables in memory when used multiple times",
          "Use events instead of storage for historical data (10x cheaper)",
          "Use unchecked {} for safe arithmetic when you know it won't overflow",
          "Prefer bytes32 over string when possible"
        ]
      },
      "tech": {
        "title": "Deployment Checklist",
        "desc": "Before deploying to mainnet, ensure you've completed these steps:",
        "list": [
          "100% test coverage with all edge cases",
          "Security audit by reputable firm (Trail of Bits, OpenZeppelin, etc.)",
          "Verify contract on Etherscan for transparency",
          "Set up monitoring and alerting (Defender, Forta)",
          "Prepare incident response plan",
          "Consider timelock for admin functions",
          "Document all external dependencies",
          "Have emergency pause mechanism if appropriate"
        ]
      },
      "deploy": {
        "title": "Deployment Process",
        "steps": [
          {"step": "1. Final Testing", "desc": "Run full test suite, check coverage, run fuzzing"},
          {"step": "2. Deploy to Testnet", "desc": "Sepolia or other testnet for realistic testing"},
          {"step": "3. Verify on Etherscan", "desc": "npx hardhat verify --network sepolia CONTRACT_ADDRESS"},
          {"step": "4. Integration Testing", "desc": "Test with frontend, other contracts"},
          {"step": "5. Mainnet Deployment", "desc": "Triple-check gas price, use multisig for deployer"},
          {"step": "6. Post-Deploy", "desc": "Verify, set up monitoring, announce to users"}
        ]
      }
    },
    "es": {
      "p1": "Los <strong class=\"text-white\">patrones de diseño</strong> te ayudan a escribir contratos inteligentes eficientes, seguros y mantenibles. Entender estos patrones es esencial para el desarrollo profesional.",
      "components": {
        "title": "Patrones de Diseño Esenciales",
        "items": [
          {"title": "Patrón Proxy", "desc": "Permite contratos actualizables. La lógica de implementación está separada del storage. Usado por USDC, USDT, la mayoría de protocolos grandes."},
          {"title": "Patrón Factory", "desc": "Despliega múltiples instancias de contratos programáticamente. Uniswap lo usa para crear pares de trading."},
          {"title": "Patrón Diamond (EIP-2535)", "desc": "Contratos modulares con múltiples facetas. Rompe el límite de tamaño de 24KB."},
          {"title": "Pull Payment", "desc": "Permite a usuarios retirar fondos en vez de enviar pagos. Más seguro que transferencias directas."}
        ]
      },
      "example": {
        "title": "Tips de Optimización de Gas",
        "list": [
          "Usa uint256 en vez de uints más pequeños (más barato en EVM por padding)",
          "Empaqueta variables de storage (uint128, uint128 en mismo slot ahorra 20K gas)",
          "Usa immutable para constantes seteadas en constructor",
          "Evita bucles con arrays ilimitados (riesgo de límite de gas)",
          "Cachea variables de storage en memoria cuando se usan múltiples veces",
          "Usa eventos en vez de storage para datos históricos (10x más barato)",
          "Usa unchecked {} para aritmética segura cuando sabes que no hay overflow",
          "Prefiere bytes32 sobre string cuando sea posible"
        ]
      },
      "tech": {
        "title": "Checklist de Despliegue",
        "desc": "Antes de desplegar a mainnet, asegúrate de completar estos pasos:",
        "list": [
          "100% cobertura de tests con todos los casos borde",
          "Auditoría de seguridad por firma reputada (Trail of Bits, OpenZeppelin, etc.)",
          "Verificar contrato en Etherscan para transparencia",
          "Configurar monitoreo y alertas (Defender, Forta)",
          "Preparar plan de respuesta a incidentes",
          "Considerar timelock para funciones admin",
          "Documentar todas las dependencias externas",
          "Tener mecanismo de pausa de emergencia si es apropiado"
        ]
      },
      "deploy": {
        "title": "Proceso de Despliegue",
        "steps": [
          {"step": "1. Testing Final", "desc": "Ejecuta suite completa de tests, checa cobertura, corre fuzzing"},
          {"step": "2. Desplegar a Testnet", "desc": "Sepolia u otra testnet para testing realista"},
          {"step": "3. Verificar en Etherscan", "desc": "npx hardhat verify --network sepolia CONTRACT_ADDRESS"},
          {"step": "4. Testing de Integración", "desc": "Prueba con frontend, otros contratos"},
          {"step": "5. Despliegue Mainnet", "desc": "Triple-checa precio de gas, usa multisig para el deployer"},
          {"step": "6. Post-Despliegue", "desc": "Verifica, configura monitoreo, anuncia a usuarios"}
        ]
      }
    }
  }$$
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;

-- SECTION 7: FAQs
INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'smart-contracts', 
  'faqs', 
  7, 
  '{"en": "Smart Contract FAQs", "es": "FAQs de Contratos Inteligentes"}', 
  '{"en": "Common questions about smart contract development", "es": "Preguntas frecuentes sobre desarrollo de contratos"}',
  $${
    "en": {
      "p1": "Answers to the most common questions about smart contract development.",
      "faqs": {
        "title": "Frequently Asked Questions",
        "items": [
          {"title": "Can I update a smart contract after deployment?", "desc": "Not directly - immutability is a core feature. However, you can design upgradeable contracts using proxy patterns. The proxy stays at the same address while you swap the implementation logic behind it. OpenZeppelin has battle-tested upgradeable contract libraries."},
          {"title": "How much does it cost to deploy a contract?", "desc": "It depends on contract size and network congestion. A simple token contract might cost $20-100 on Ethereum mainnet. Complex DeFi protocols can cost $500-5000. Layer 2s like Polygon, Arbitrum, or Base are 10-100x cheaper."},
          {"title": "What programming languages can I use?", "desc": "Solidity is by far the most popular (95%+ of Ethereum contracts). Vyper is a Python-like alternative focused on security. Yul is a low-level assembly language. For Solana, you'd use Rust."},
          {"title": "How long does it take to learn smart contracts?", "desc": "With programming experience: 2-4 weeks for basics, 2-3 months to be productive, 6-12 months for advanced patterns. Without coding experience, add 2-3 months to learn programming fundamentals first."},
          {"title": "What's the difference between msg.sender and tx.origin?", "desc": "msg.sender is the immediate caller (can be another contract). tx.origin is always the original wallet that initiated the transaction. Never use tx.origin for authorization - it's a security vulnerability."},
          {"title": "Why do some function calls cost gas and others don't?", "desc": "view and pure functions that don't modify state are free when called externally (they just read from local node). Any function that writes to storage or is called from within a transaction costs gas."},
          {"title": "What happens if my contract has a bug?", "desc": "If there's no upgrade mechanism, the bug is permanent. Funds may be locked or vulnerable. This is why audits, testing, and bug bounties are critical. Some projects have recovered via hard forks, but that's extremely rare."},
          {"title": "Should I use Hardhat or Foundry?", "desc": "Hardhat is easier for JavaScript developers and has better ecosystem/plugins. Foundry is faster, lets you write tests in Solidity, and has superior fuzzing. Many teams use both - Hardhat for deployments, Foundry for testing."},
          {"title": "How do I get my first smart contract job?", "desc": "Build a portfolio of projects on GitHub. Contribute to open-source protocols. Participate in bug bounties (Immunefi). Get Alchemy University or similar certifications. Network in crypto Discord/Twitter communities."},
          {"title": "What is gas and why does it exist?", "desc": "Gas is the unit measuring computational effort. It exists to prevent infinite loops, spam, and to compensate validators. Users pay gas price (in gwei) times gas used. EIP-1559 introduced base fee + priority tip model."}
        ]
      }
    },
    "es": {
      "p1": "Respuestas a las preguntas más comunes sobre desarrollo de contratos inteligentes.",
      "faqs": {
        "title": "Preguntas Frecuentes",
        "items": [
          {"title": "¿Puedo actualizar un contrato después de desplegarlo?", "desc": "No directamente - la inmutabilidad es una característica central. Sin embargo, puedes diseñar contratos actualizables usando patrones proxy. El proxy se queda en la misma dirección mientras intercambias la lógica de implementación detrás. OpenZeppelin tiene librerías de contratos actualizables probadas en batalla."},
          {"title": "¿Cuánto cuesta desplegar un contrato?", "desc": "Depende del tamaño del contrato y la congestión de red. Un contrato de token simple puede costar $20-100 en mainnet de Ethereum. Protocolos DeFi complejos pueden costar $500-5000. L2s como Polygon, Arbitrum o Base son 10-100x más baratos."},
          {"title": "¿Qué lenguajes de programación puedo usar?", "desc": "Solidity es el más popular por lejos (95%+ de contratos Ethereum). Vyper es una alternativa tipo Python enfocada en seguridad. Yul es un lenguaje de ensamblador de bajo nivel. Para Solana, usarías Rust."},
          {"title": "¿Cuánto tiempo toma aprender smart contracts?", "desc": "Con experiencia en programación: 2-4 semanas para básicos, 2-3 meses para ser productivo, 6-12 meses para patrones avanzados. Sin experiencia en código, añade 2-3 meses para aprender fundamentos de programación primero."},
          {"title": "¿Cuál es la diferencia entre msg.sender y tx.origin?", "desc": "msg.sender es el llamador inmediato (puede ser otro contrato). tx.origin siempre es la wallet original que inició la transacción. Nunca uses tx.origin para autorización - es una vulnerabilidad de seguridad."},
          {"title": "¿Por qué algunas llamadas a funciones cuestan gas y otras no?", "desc": "Funciones view y pure que no modifican estado son gratis cuando se llaman externamente (solo leen del nodo local). Cualquier función que escribe a storage o se llama desde dentro de una transacción cuesta gas."},
          {"title": "¿Qué pasa si mi contrato tiene un bug?", "desc": "Si no hay mecanismo de actualización, el bug es permanente. Los fondos pueden quedar bloqueados o vulnerables. Por eso las auditorías, testing y bug bounties son críticos. Algunos proyectos se han recuperado vía hard forks, pero es extremadamente raro."},
          {"title": "¿Debería usar Hardhat o Foundry?", "desc": "Hardhat es más fácil para desarrolladores JavaScript y tiene mejor ecosistema/plugins. Foundry es más rápido, te permite escribir tests en Solidity y tiene fuzzing superior. Muchos equipos usan ambos - Hardhat para despliegues, Foundry para testing."},
          {"title": "¿Cómo consigo mi primer trabajo de smart contracts?", "desc": "Construye un portafolio de proyectos en GitHub. Contribuye a protocolos open-source. Participa en bug bounties (Immunefi). Obtén certificaciones de Alchemy University o similares. Haz networking en comunidades Discord/Twitter de crypto."},
          {"title": "¿Qué es el gas y por qué existe?", "desc": "Gas es la unidad que mide esfuerzo computacional. Existe para prevenir bucles infinitos, spam y compensar validadores. Los usuarios pagan precio de gas (en gwei) por gas usado. EIP-1559 introdujo el modelo de base fee + priority tip."}
        ]
      }
    }
  }$$
)
ON CONFLICT (course_id, slug) DO UPDATE SET content = EXCLUDED.content, title = EXCLUDED.title, description = EXCLUDED.description;
