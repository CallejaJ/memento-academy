-- Seed Course Sections for 'blockchain-development'

INSERT INTO course_sections (course_id, slug, order_index, title, description, content)
VALUES
(
  'blockchain-development', 
  'blockchain-architecture', 
  1, 
  '{"en": "Blockchain Architecture", "es": "Arquitectura Blockchain"}', 
  '{"en": "How blockchains work", "es": "Cómo funcionan las blockchains"}',
  '{
    "en": {
      "p1": "A **blockchain** is a distributed ledger that records transactions across many computers. Understanding its architecture is fundamental to blockchain development.",
      "components": {
        "title": "🧱 Core Components",
        "items": [
          {"title": "Blocks", "desc": "Container of transactions with timestamp, hash, and previous hash"},
          {"title": "Chain", "desc": "Linked blocks creating immutable history via cryptographic hashes"},
          {"title": "Nodes", "desc": "Computers that validate, store, and distribute blockchain data"},
          {"title": "Consensus", "desc": "Agreement mechanism for adding new blocks (PoW, PoS, etc.)"}
        ]
      },
      "crypto": {
        "title": "🔐 Cryptographic Foundations",
        "list": [
          "**SHA-256:** Hashing algorithm for block integrity",
          "**Public/Private Keys:** Asymmetric cryptography for ownership",
          "**Digital Signatures:** Prove transaction authenticity",
          "**Merkle Trees:** Efficient data verification structure"
        ]
      }
    },
    "es": {
      "p1": "Una **blockchain** es un libro mayor distribuido que registra transacciones en muchas computadoras. Entender su arquitectura es fundamental para el desarrollo.",
      "components": {
        "title": "🧱 Componentes Principales",
        "items": [
          {"title": "Bloques", "desc": "Contenedor de transacciones con marca de tiempo, hash y hash anterior"},
          {"title": "Cadena", "desc": "Bloques enlazados creando historia inmutable vía hashes criptográficos"},
          {"title": "Nodos", "desc": "Computadoras que validan, almacenan y distribuyen datos de blockchain"},
          {"title": "Consenso", "desc": "Mecanismo de acuerdo para añadir nuevos bloques (PoW, PoS, etc.)"}
        ]
      },
      "crypto": {
        "title": "🔐 Fundamentos Criptográficos",
        "list": [
          "**SHA-256:** Algoritmo de hash para integridad de bloques",
          "**Claves Pública/Privada:** Criptografía asimétrica para propiedad",
          "**Firmas Digitales:** Prueban autenticidad de transacciones",
          "**Árboles de Merkle:** Estructura eficiente de verificación de datos"
        ]
      }
    }
  }'
)
ON CONFLICT (course_id, slug) DO UPDATE SET 
  content = EXCLUDED.content,
  title = EXCLUDED.title,
  description = EXCLUDED.description;

-- Insert Questions for this section
WITH section AS (SELECT id FROM course_sections WHERE slug = 'blockchain-architecture' LIMIT 1)
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
VALUES
(
  (SELECT id FROM section),
  '{"en": "What is the primary function of a Merkle Tree in a blockchain?", "es": "¿Cuál es la función principal de un Árbol de Merkle en una blockchain?"}',
  '[
    {"en": "To enhance privacy", "es": "Para mejorar la privacidad"},
    {"en": "To mine new blocks", "es": "Para minar nuevos bloques"},
    {"en": "To efficiently verify data integrity", "es": "Para verificar eficientemente la integridad de los datos"}
   ]',
  2,
  '{"en": "Merkle Trees allow for efficient and secure verification of large data structures.", "es": "Los árboles de Merkle permiten una verificación eficiente y segura de grandes estructuras de datos."}'
),
(
  (SELECT id FROM section),
  '{"en": "Which cryptographic concept is used to prove ownership of assets?", "es": "¿Qué concepto criptográfico se usa para probar la propiedad de activos?"}',
  '[
    {"en": "Hashing", "es": "Hashing"},
    {"en": "Public/Private Keys", "es": "Claves Pública/Privada"},
    {"en": "Symmetric Encryption", "es": "Encriptación Simétrica"}
   ]',
  1,
  '{"en": "Private keys are used to sign transactions, proving ownership of the corresponding public key address.", "es": "Las claves privadas se usan para firmar transacciones, probando la propiedad de la dirección de clave pública correspondiente."}'
),
(
  (SELECT id FROM section),
  '{"en": "What links blocks together in a blockchain?", "es": "¿Qué conecta los bloques en una blockchain?"}',
  '[
    {"en": "The previous block hash", "es": "El hash del bloque anterior"},
    {"en": "The timestamp", "es": "La marca de tiempo"},
    {"en": "The transaction list", "es": "La lista de transacciones"}
   ]',
  0,
  '{"en": "Each block contains the cryptographic hash of the previous block, creating an unbroken chain.", "es": "Cada bloque contiene el hash criptográfico del bloque anterior, creando una cadena ininterrumpida."}'
);
