-- =============================================
-- UPDATE: Eliminar emojis de blockchain-dev en Supabase
-- Ejecutar en SQL Editor de Supabase Dashboard
-- =============================================

-- Sección 2: Mecanismos de Consenso (quitar ⛏️ y 🎯)
UPDATE course_sections 
SET content = '{
  "en": {
    "desc": "Consensus mechanisms allow distributed networks to agree on the state of the blockchain without central authority.",
    "pow": {"title": "Proof of Work (PoW)", "list": ["Used by: Bitcoin", "Pros: Secure", "Cons: Energy intensive"]},
    "pos": {"title": "Proof of Stake (PoS)", "list": ["Used by: Ethereum", "Pros: Efficient", "Cons: Plutocracy risk"]}
  },
  "es": {
    "desc": "Los mecanismos de consenso permiten que redes distribuidas acuerden el estado de la blockchain sin autoridad central.",
    "pow": {"title": "Proof of Work (PoW)", "list": ["Usado por: Bitcoin", "Pros: Seguro", "Contra: Energía"]},
    "pos": {"title": "Proof of Stake (PoS)", "list": ["Usado por: Ethereum", "Pros: Eficiente", "Contra: Plutocracia"]}
  }
}'
WHERE course_id = 'blockchain-dev' AND slug = 'consensus-mechanisms';

-- Sección 1: Arquitectura Blockchain (quitar 🧱 y 🔐)
UPDATE course_sections 
SET content = '{
  "en": {
    "p1": "A **blockchain** is a distributed ledger that records transactions across many computers. Understanding its architecture is fundamental to blockchain development.",
    "components": {
      "title": "Core Components",
      "items": [
        {"title": "Blocks", "desc": "Container of transactions with timestamp, hash, and previous hash"},
        {"title": "Chain", "desc": "Linked blocks creating immutable history via cryptographic hashes"},
        {"title": "Nodes", "desc": "Computers that validate, store, and distribute blockchain data"},
        {"title": "Consensus", "desc": "Agreement mechanism for adding new blocks (PoW, PoS, etc.)"}
      ]
    },
    "crypto": {
      "title": "Cryptographic Foundations",
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
      "title": "Componentes Principales",
      "items": [
        {"title": "Bloques", "desc": "Contenedor de transacciones con marca de tiempo, hash y hash anterior"},
        {"title": "Cadena", "desc": "Bloques enlazados creando historia inmutable vía hashes criptográficos"},
        {"title": "Nodos", "desc": "Computadoras que validan, almacenan y distribuyen datos de blockchain"},
        {"title": "Consenso", "desc": "Mecanismo de acuerdo para añadir nuevos bloques (PoW, PoS, etc.)"}
      ]
    },
    "crypto": {
      "title": "Fundamentos Criptográficos",
      "list": [
        "**SHA-256:** Algoritmo de hash para integridad de bloques",
        "**Claves Pública/Privada:** Criptografía asimétrica para propiedad",
        "**Firmas Digitales:** Prueban autenticidad de transacciones",
        "**Árboles de Merkle:** Estructura eficiente de verificación de datos"
      ]
    }
  }
}'
WHERE course_id = 'blockchain-dev' AND slug = 'blockchain-architecture';
