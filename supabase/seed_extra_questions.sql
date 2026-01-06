-- Add more questions to Section 1 (Blockchain Architecture) to ensure randomization works

WITH s1 AS (SELECT id FROM course_sections WHERE slug = 'blockchain-architecture' LIMIT 1)
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
VALUES
((SELECT id FROM s1), 
 '{"en": "What is a Smart Contract?", "es": "¿Qué es un Contrato Inteligente?"}', 
 '[{"en": "A paper contract", "es": "Un contrato de papel"}, {"en": "Self-executing code", "es": "Código auto-ejecutable"}, {"en": "A lawyer AI", "es": "Una IA abogada"}]', 
 1, 
 '{"en": "Smart contracts execute automatically when conditions are met.", "es": "Los contratos inteligentes se ejecutan automáticamente cuando se cumplen las condiciones."}'),

((SELECT id FROM s1), 
 '{"en": "Which is NOT a blockchain feature?", "es": "¿Cuál NO es una característica de blockchain?"}', 
 '[{"en": "Immutability", "es": "Inmutabilidad"}, {"en": "Centralization", "es": "Centralización"}, {"en": "Decentralization", "es": "Descentralización"}]', 
 1, 
 '{"en": "Blockchains are distributed, not centralized.", "es": "Las blockchains son distribuidas, no centralizadas."}'),

((SELECT id FROM s1), 
 '{"en": "What is Gas?", "es": "¿Qué es Gas?"}', 
 '[{"en": "Fuel for cars", "es": "Combustible de coches"}, {"en": "Transaction fee", "es": "Tarifa de transacción"}, {"en": "Air", "es": "Aire"}]', 
 1, 
 '{"en": "Gas is the fee paid to miners/validators.", "es": "Gas es la tarifa pagada a mineros/validadores."}'),

((SELECT id FROM s1), 
 '{"en": "Who created Bitcoin?", "es": "¿Quién creó Bitcoin?"}', 
 '[{"en": "Satoshi Nakamoto", "es": "Satoshi Nakamoto"}, {"en": "Vitalik Buterin", "es": "Vitalik Buterin"}, {"en": "Elon Musk", "es": "Elon Musk"}]', 
 0, 
 '{"en": "Satoshi Nakamoto is the pseudonym of the creator.", "es": "Satoshi Nakamoto es el seudónimo del creador."}')
;
