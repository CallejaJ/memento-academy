-- Seed remaining sections for 'blockchain-development'

INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'blockchain-development', 
  'consensus-mechanisms', 
  2, 
  '{"en": "Consensus Mechanisms", "es": "Mecanismos de Consenso"}', 
  '{"en": "Agreeing on truth", "es": "Acordando la verdad"}',
  '{
    "en": {
      "desc": "Consensus mechanisms allow distributed networks to agree on the state of the blockchain without central authority.",
      "pow": {"title": "⛏️ Proof of Work (PoW)", "list": ["Used by: Bitcoin", "Pros: Secure", "Cons: Energy intensive"]},
      "pos": {"title": "🎯 Proof of Stake (PoS)", "list": ["Used by: Ethereum", "Pros: Efficient", "Cons: Plutocracy risk"]}
    },
    "es": {
      "desc": "Los mecanismos de consenso permiten que redes distribuidas acuerden el estado de la blockchain sin autoridad central.",
      "pow": {"title": "⛏️ Proof of Work (PoW)", "list": ["Usado por: Bitcoin", "Pros: Seguro", "Contra: Energía"]},
      "pos": {"title": "🎯 Proof of Stake (PoS)", "list": ["Usado por: Ethereum", "Pros: Eficiente", "Contra: Plutocracia"]}
    }
  }'
),
(
  'blockchain-development', 
  'state-management', 
  3, 
  '{"en": "State Management", "es": "Gestión de Estado"}', 
  '{"en": "Tracking blockchain data", "es": "Rastreando datos blockchain"}',
  '{"en": {"desc": "State is the current snapshot of accounts and storage."}, "es": {"desc": "El estado es la instantánea actual de cuentas y almacenamiento."}}'
),
(
  'blockchain-development', 
  'scalability-solutions', 
  4, 
  '{"en": "Scalability Solutions", "es": "Soluciones de Escalabilidad"}', 
  '{"en": "Making blockchains faster", "es": "Haciendo blockchains más rápidas"}',
  '{"en": {"desc": "Addressing the trilemma via Layer 2, Sharding, and Channels."}, "es": {"desc": "Abordando el trilema vía Capa 2, Sharding y Canales."}}'
),
(
  'blockchain-development', 
  'developer-tools', 
  5, 
  '{"en": "Developer Tools", "es": "Herramientas de Desarrollo"}', 
  '{"en": "Building on blockchain", "es": "Construyendo en blockchain"}',
  '{"en": {"desc": "Tools: Hardhat, Foundry, Remix, Ethers.js, Viem."}, "es": {"desc": "Herramientas: Hardhat, Foundry, Remix, Ethers.js, Viem."}}'
),
(
  'blockchain-development', 
  'building-dapps', 
  6, 
  '{"en": "Building dApps", "es": "Construyendo dApps"}', 
  '{"en": "Decentralized applications", "es": "Aplicaciones descentralizadas"}',
  '{"en": {"desc": "Combining Smart Contracts with Frontend (React/Next.js)."}, "es": {"desc": "Combinando Contratos Inteligentes con Frontend (React/Next.js)."}}'
)
ON CONFLICT (course_id, slug) DO NOTHING;

-- Seed dummy questions for them (so quizzes work)
WITH s2 AS (SELECT id FROM course_sections WHERE slug = 'consensus-mechanisms' LIMIT 1),
     s3 AS (SELECT id FROM course_sections WHERE slug = 'state-management' LIMIT 1),
     s4 AS (SELECT id FROM course_sections WHERE slug = 'scalability-solutions' LIMIT 1),
     s5 AS (SELECT id FROM course_sections WHERE slug = 'developer-tools' LIMIT 1),
     s6 AS (SELECT id FROM course_sections WHERE slug = 'building-dapps' LIMIT 1)
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
VALUES
-- Section 2 Questions
((SELECT id FROM s2), '{"en": "What is PoW?", "es": "¿Qué es PoW?"}', '[{"en": "Proof of Work", "es": "Prueba de Trabajo"}, {"en": "Proof of Wild", "es": "Prueba de Salvaje"}, {"en": "Piece of Waste", "es": "Pedazo de Basura"}]', 0, '{"en": "Miners solve puzzles.", "es": "Mineros resuelven acertijos."}'),
((SELECT id FROM s2), '{"en": "Which uses PoS?", "es": "¿Cuál usa PoS?"}', '[{"en": "Bitcoin", "es": "Bitcoin"}, {"en": "Ethereum", "es": "Ethereum"}, {"en": "Dogecoin", "es": "Dogecoin"}]', 1, '{"en": "Ethereum switched to PoS.", "es": "Ethereum cambió a PoS."}'),
((SELECT id FROM s2), '{"en": "Goal of consensus?", "es": "¿Objetivo del consenso?"}', '[{"en": "War", "es": "Guerra"}, {"en": "Agreement", "es": "Acuerdo"}, {"en": "Chaos", "es": "Caos"}]', 1, '{"en": "To agree on state.", "es": "Para acordar el estado."}'),

-- Section 3 Questions
((SELECT id FROM s3), '{"en": "What is state?", "es": "¿Qué es estado?"}', '[{"en": "History", "es": "Historia"}, {"en": "Snapshot", "es": "Instantánea"}, {"en": "Future", "es": "Futuro"}]', 1, '{"en": "Current snapshot.", "es": "Instantánea actual."}'),
((SELECT id FROM s3), '{"en": "Where is storage?", "es": "¿Dónde está el almacenamiento?"}', '[{"en": "On-chain", "es": "En cadena"}, {"en": "Cloud", "es": "Nube"}, {"en": "Local", "es": "Local"}]', 0, '{"en": "Inside contracts.", "es": "Dentro de contratos."}'),
((SELECT id FROM s3), '{"en": "What is Mempool?", "es": "¿Qué es Mempool?"}', '[{"en": "Pending txs", "es": "Txs pendientes"}, {"en": "Pool party", "es": "Fiesta en piscina"}, {"en": "Memory", "es": "Memoria"}]', 0, '{"en": "Waiting area.", "es": "Área de espera."}'),

-- Section 4 Questions
((SELECT id FROM s4), '{"en": "What is L2?", "es": "¿Qué es L2?"}', '[{"en": "Layer 2", "es": "Capa 2"}, {"en": "Level 2", "es": "Nivel 2"}, {"en": "Left 2", "es": "Izquierda 2"}]', 0, '{"en": "Scaling solution.", "es": "Solución de escalado."}'),
((SELECT id FROM s4), '{"en": "Example of L2?", "es": "¿Ejemplo de L2?"}', '[{"en": "Bitcoin", "es": "Bitcoin"}, {"en": "Optimism", "es": "Optimism"}, {"en": "Solana", "es": "Solana"}]', 1, '{"en": "Optimism is an L2.", "es": "Optimism es una L2."}'),
((SELECT id FROM s4), '{"en": "Trilemma components?", "es": "¿Componentes del trilema?"}', '[{"en": "Speed, Cost, Fun", "es": "Velocidad, Coste, Diversión"}, {"en": "Decentralization, Security, Scalability", "es": "Descentralización, Seguridad, Escalabilidad"}, {"en": "A, B, C", "es": "A, B, C"}]', 1, '{"en": "The classic trilemma.", "es": "El trilema clásico."}'),

-- Section 5 Questions
((SELECT id FROM s5), '{"en": "Smart Contract Framework?", "es": "¿Framework de Contratos?"}', '[{"en": "React", "es": "React"}, {"en": "Hardhat", "es": "Hardhat"}, {"en": "Express", "es": "Express"}]', 1, '{"en": "Hardhat is standard.", "es": "Hardhat es estándar."}'),
((SELECT id FROM s5), '{"en": "Browser IDE?", "es": "¿IDE en navegador?"}', '[{"en": "VS Code", "es": "VS Code"}, {"en": "Remix", "es": "Remix"}, {"en": "Sublime", "es": "Sublime"}]', 1, '{"en": "Remix Ethereum IDE.", "es": "Remix Ethereum IDE."}'),
((SELECT id FROM s5), '{"en": "Library for Frontend?", "es": "¿Librería para Frontend?"}', '[{"en": "Axios", "es": "Axios"}, {"en": "Ethers.js", "es": "Ethers.js"}, {"en": "Lodash", "es": "Lodash"}]', 1, '{"en": "Interact with blockchain.", "es": "Interactuar con blockchain."}'),

-- Section 6 Questions
((SELECT id FROM s6), '{"en": "What is a dApp?", "es": "¿Qué es una dApp?"}', '[{"en": "Decentralized App", "es": "App Descentralizada"}, {"en": "Digital App", "es": "App Digital"}, {"en": "Daily App", "es": "App Diaria"}]', 0, '{"en": "Runs on blockchain.", "es": "Corre en blockchain."}'),
((SELECT id FROM s6), '{"en": "Wallet provider usage?", "es": "¿Uso del proveedor de wallet?"}', '[{"en": "To pay fees", "es": "Pagar tasas"}, {"en": "To store photos", "es": "Guardar fotos"}, {"en": "To chat", "es": "Chatear"}]', 0, '{"en": "Sign transactions.", "es": "Firmar transacciones."}'),
((SELECT id FROM s6), '{"en": "Best way to learn?", "es": "¿Mejor forma de aprender?"}', '[{"en": "Reading", "es": "Leer"}, {"en": "Building", "es": "Construir"}, {"en": "Sleeping", "es": "Dormir"}]', 1, '{"en": "Build dApps.", "es": "Construye dApps."}');
