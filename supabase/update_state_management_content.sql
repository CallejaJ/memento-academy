-- Update State Management section with rich content and ALL diagrams (BILINGUAL & SAFE URLS)
-- Run this SQL in your Supabase SQL Editor

UPDATE course_sections
SET content = '{
  "en": {
    "desc": "State is the **current snapshot** of all accounts, balances, and smart contract storage on the blockchain. Every transaction changes the state, and consensus ensures all nodes agree on the same state.",
    "diagrams": {
      "title": "State Management Diagrams",
      "items": [
        {
          "title": "State Transition Flow",
          "src": "/diagrams/state-transition-en.png",
          "alt": "State Transition Flow Diagram"
        },
        {
          "title": "UTXO vs Account Model",
          "src": "/diagrams/utxo-vs-account-en.png",
          "alt": "UTXO vs Account Model Comparison"
        },
        {
          "title": "World State Structure",
          "src": "/diagrams/world-state-en.png",
          "alt": "World State Structure Diagram"
        },
        {
          "title": "Patricia Merkle Trie",
          "src": "/diagrams/patricia-merkle-trie-en.png",
          "alt": "Patricia Merkle Trie Diagram"
        },
        {
          "title": "Mempool Flow",
          "src": "/diagrams/mempool-flow-en.png",
          "alt": "Mempool Transaction Flow Diagram"
        },
        {
          "title": "Storage Slots in Solidity",
          "src": "/diagrams/storage-slots-en.png",
          "alt": "Solidity Storage Slots Diagram"
        }
      ]
    },
    "concepts": {
      "world": {
        "title": "World State",
        "desc": "A mapping of all addresses to their account states. Contains every EOA and contract on the network."
      },
      "account": {
        "title": "Account Types",
        "desc": "EOAs (user wallets) have balance + nonce. Contract accounts also have code hash + storage root."
      },
      "trie": {
        "title": "State Trie",
        "desc": "Ethereum uses a Patricia Merkle Trie to efficiently store and verify state data."
      }
    },
    "components": {
      "title": "Key State Components",
      "items": [
        {"title": "Nonce", "desc": "Transaction counter for EOAs, prevents replay attacks"},
        {"title": "Balance", "desc": "Amount of native currency (ETH, etc.) in the account"},
        {"title": "Storage Root", "desc": "Hash of the contract storage trie (contracts only)"},
        {"title": "Code Hash", "desc": "Hash of the smart contract bytecode (contracts only)"}
      ]
    },
    "types": {
      "title": "UTXO vs Account Model",
      "items": [
        {"title": "Account Model (Ethereum)", "desc": "Tracks balances directly like a bank. Each account has a balance that gets updated with transactions."},
        {"title": "UTXO Model (Bitcoin)", "desc": "Tracks unspent outputs like cash. You spend entire coins and receive change back."}
      ]
    },
    "tech": {
      "title": "Technical Deep Dive",
      "desc": "Understanding how state is stored and synchronized across the network:",
      "list": [
        "**Storage Slots**: Smart contracts store data in 32-byte slots, starting at slot 0",
        "**Mempool**: Pending transactions waiting to be included in a block",
        "**State Sync**: New nodes download state to join the network quickly",
        "**Archive Nodes**: Store complete historical state (expensive but useful for analytics)"
      ]
    },
    "warn": {
      "title": "State Bloat Warning",
      "list": [
        "State grows over time as more accounts and contracts are created",
        "Larger state = higher hardware requirements for nodes",
        "Some chains implement state rent to discourage bloat",
        "State pruning removes old state but keeps current snapshot"
      ]
    }
  },
  "es": {
    "desc": "El estado es la **instantánea actual** de todas las cuentas, saldos y almacenamiento de contratos inteligentes en la blockchain. Cada transacción cambia el estado, y el consenso asegura que todos los nodos acuerden el mismo estado.",
    "diagrams": {
      "title": "Diagramas de Gestión de Estado",
      "items": [
        {
          "title": "Transición de Estado",
          "src": "/diagrams/state-transition-es.png",
          "alt": "Diagrama de transición de estado"
        },
        {
          "title": "UTXO vs Modelo de Cuentas",
          "src": "/diagrams/utxo-vs-account-es.png",
          "alt": "Comparación UTXO vs Account Model"
        },
        {
          "title": "Estructura del Estado Mundial",
          "src": "/diagrams/world-state-es.png",
          "alt": "Diagrama de World State"
        },
        {
          "title": "Patricia Merkle Trie",
          "src": "/diagrams/patricia-merkle-trie-es.png",
          "alt": "Diagrama de Patricia Merkle Trie"
        },
        {
          "title": "Flujo del Mempool",
          "src": "/diagrams/mempool-flow-es.png",
          "alt": "Diagrama de flujo del Mempool"
        },
        {
          "title": "Storage Slots en Solidity",
          "src": "/diagrams/storage-slots-es.png",
          "alt": "Diagrama de Storage Slots"
        }
      ]
    },
    "concepts": {
      "world": {
        "title": "Estado Mundial",
        "desc": "Un mapeo de todas las direcciones a sus estados de cuenta. Contiene cada EOA y contrato en la red."
      },
      "account": {
        "title": "Tipos de Cuenta",
        "desc": "Las EOAs (billeteras de usuario) tienen saldo + nonce. Las cuentas de contrato también tienen hash de código + raíz de almacenamiento."
      },
      "trie": {
        "title": "State Trie",
        "desc": "Ethereum usa un Patricia Merkle Trie para almacenar y verificar datos de estado eficientemente."
      }
    },
    "components": {
      "title": "Componentes Clave del Estado",
      "items": [
        {"title": "Nonce", "desc": "Contador de transacciones para EOAs, previene ataques de repetición"},
        {"title": "Balance", "desc": "Cantidad de moneda nativa (ETH, etc.) en la cuenta"},
        {"title": "Storage Root", "desc": "Hash del trie de almacenamiento del contrato (solo contratos)"},
        {"title": "Code Hash", "desc": "Hash del bytecode del contrato inteligente (solo contratos)"}
      ]
    },
    "types": {
      "title": "UTXO vs Modelo de Cuentas",
      "items": [
        {"title": "Modelo de Cuentas (Ethereum)", "desc": "Rastrea saldos directamente como un banco. Cada cuenta tiene un saldo que se actualiza con transacciones."},
        {"title": "Modelo UTXO (Bitcoin)", "desc": "Rastrea salidas no gastadas como efectivo. Gastas monedas enteras y recibes cambio."}
      ]
    },
    "tech": {
      "title": "Profundización Técnica",
      "desc": "Entendiendo cómo se almacena y sincroniza el estado a través de la red:",
      "list": [
        "**Storage Slots**: Los contratos almacenan datos en slots de 32 bytes, empezando en slot 0",
        "**Mempool**: Transacciones pendientes esperando ser incluidas en un bloque",
        "**State Sync**: Los nuevos nodos descargan el estado para unirse a la red rápidamente",
        "**Archive Nodes**: Almacenan el estado histórico completo (costoso pero útil para análisis)"
      ]
    },
    "warn": {
      "title": "Advertencia de Inflación de Estado",
      "list": [
        "El estado crece con el tiempo a medida que se crean más cuentas y contratos",
        "Mayor estado = mayores requisitos de hardware para nodos",
        "Algunas cadenas implementan alquiler de estado para desincentivar la inflación",
        "La poda de estado elimina estado antiguo pero mantiene la instantánea actual"
      ]
    }
  }
}'
WHERE course_id = 'blockchain-dev' AND slug = 'state-management';

-- Verify the update
SELECT slug, content FROM course_sections 
WHERE course_id = 'blockchain-dev' AND slug = 'state-management';
