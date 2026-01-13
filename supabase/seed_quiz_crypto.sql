-- =============================================
-- QUIZ QUESTIONS - CRYPTO 101 (80 questions)
-- =============================================

INSERT INTO game_questions (category, difficulty, question_text, options, correct_index, explanation, from_course) VALUES

('Crypto 101', 'easy',
 '{"en": "Who created Bitcoin?", "es": "¿Quién creó Bitcoin?"}',
 '[{"en": "Vitalik Buterin", "es": "Vitalik Buterin"}, {"en": "Satoshi Nakamoto", "es": "Satoshi Nakamoto"}, {"en": "Elon Musk", "es": "Elon Musk"}, {"en": "Mark Zuckerberg", "es": "Mark Zuckerberg"}]',
 1, '{"en": "Bitcoin was created by the pseudonymous Satoshi Nakamoto, who published the whitepaper in 2008 and launched the network in 2009.", "es": "Bitcoin fue creado por el pseudónimo Satoshi Nakamoto, quien publicó el whitepaper en 2008 y lanzó la red en 2009."}', 'crypto-101'),

('Crypto 101', 'easy',
 '{"en": "What is the maximum supply of Bitcoin?", "es": "¿Cuál es el suministro máximo de Bitcoin?"}',
 '[{"en": "10 million", "es": "10 millones"}, {"en": "21 million", "es": "21 millones"}, {"en": "100 million", "es": "100 millones"}, {"en": "Unlimited", "es": "Ilimitado"}]',
 1, '{"en": "Bitcoin has a hard cap of 21 million coins that will ever exist, making it a deflationary asset.", "es": "Bitcoin tiene un límite duro de 21 millones de monedas que existirán, haciéndolo un activo deflacionario."}', 'crypto-101'),

('Crypto 101', 'easy',
 '{"en": "What is Ethereum primarily known for?", "es": "¿Por qué es principalmente conocido Ethereum?"}',
 '[{"en": "Being a digital gold", "es": "Ser oro digital"}, {"en": "Smart contracts and dApps", "es": "Contratos inteligentes y dApps"}, {"en": "Fast payments", "es": "Pagos rápidos"}, {"en": "Privacy transactions", "es": "Transacciones privadas"}]',
 1, '{"en": "Ethereum is primarily known for enabling smart contracts and decentralized applications (dApps) on its blockchain.", "es": "Ethereum es principalmente conocido por habilitar contratos inteligentes y aplicaciones descentralizadas (dApps) en su blockchain."}', 'crypto-101'),

('Crypto 101', 'easy',
 '{"en": "What is a stablecoin?", "es": "¿Qué es una stablecoin?"}',
 '[{"en": "A coin that never changes value", "es": "Una moneda que nunca cambia de valor"}, {"en": "A crypto pegged to a stable asset like USD", "es": "Una crypto vinculada a un activo estable como USD"}, {"en": "A physical coin", "es": "Una moneda física"}, {"en": "A mining reward", "es": "Una recompensa de minería"}]',
 1, '{"en": "A stablecoin is a cryptocurrency designed to maintain a stable value by being pegged to a fiat currency or other assets.", "es": "Una stablecoin es una criptomoneda diseñada para mantener un valor estable al estar vinculada a una moneda fiat u otros activos."}', 'crypto-101'),

('Crypto 101', 'easy',
 '{"en": "What is altcoin?", "es": "¿Qué es una altcoin?"}',
 '[{"en": "Another name for Bitcoin", "es": "Otro nombre para Bitcoin"}, {"en": "Any cryptocurrency other than Bitcoin", "es": "Cualquier criptomoneda que no sea Bitcoin"}, {"en": "A fake cryptocurrency", "es": "Una criptomoneda falsa"}, {"en": "A type of wallet", "es": "Un tipo de billetera"}]',
 1, '{"en": "Altcoin refers to any cryptocurrency other than Bitcoin. It comes from alternative coin.", "es": "Altcoin se refiere a cualquier criptomoneda que no sea Bitcoin. Viene de moneda alternativa."}', 'crypto-101'),

('Crypto 101', 'medium',
 '{"en": "What is the halving in Bitcoin?", "es": "¿Qué es el halving en Bitcoin?"}',
 '[{"en": "Splitting Bitcoin in half", "es": "Dividir Bitcoin a la mitad"}, {"en": "When mining rewards are cut in half every ~4 years", "es": "Cuando las recompensas de minería se reducen a la mitad cada ~4 años"}, {"en": "A 50% price drop", "es": "Una caída de precio del 50%"}, {"en": "A security feature", "es": "Una característica de seguridad"}]',
 1, '{"en": "The Bitcoin halving occurs approximately every 4 years (210,000 blocks), cutting the block reward in half to control inflation.", "es": "El halving de Bitcoin ocurre aproximadamente cada 4 años (210,000 bloques), reduciendo la recompensa del bloque a la mitad para controlar la inflación."}', 'crypto-101'),

('Crypto 101', 'medium',
 '{"en": "What is market cap in cryptocurrency?", "es": "¿Qué es la capitalización de mercado en criptomonedas?"}',
 '[{"en": "The maximum price a coin can reach", "es": "El precio máximo que una moneda puede alcanzar"}, {"en": "Total value of all coins in circulation", "es": "Valor total de todas las monedas en circulación"}, {"en": "The trading volume", "es": "El volumen de trading"}, {"en": "The number of holders", "es": "El número de poseedores"}]',
 1, '{"en": "Market cap is calculated by multiplying the current price by the total circulating supply. It represents the total value of a cryptocurrency.", "es": "La capitalización de mercado se calcula multiplicando el precio actual por el suministro circulante total. Representa el valor total de una criptomoneda."}', 'crypto-101'),

('Crypto 101', 'medium',
 '{"en": "What does HODL mean?", "es": "¿Qué significa HODL?"}',
 '[{"en": "A trading strategy", "es": "Una estrategia de trading"}, {"en": "Hold On for Dear Life - long-term holding", "es": "Hold On for Dear Life - mantener a largo plazo"}, {"en": "A type of cryptocurrency", "es": "Un tipo de criptomoneda"}, {"en": "A mining method", "es": "Un método de minería"}]',
 1, '{"en": "HODL originated from a typo of hold and became a meme meaning to hold through volatility. It is often interpreted as Hold On for Dear Life.", "es": "HODL se originó de un error tipográfico de hold y se convirtió en un meme que significa mantener a través de la volatilidad. A menudo se interpreta como Hold On for Dear Life."}', 'crypto-101'),

('Crypto 101', 'medium',
 '{"en": "What is a token burn?", "es": "¿Qué es una quema de tokens?"}',
 '[{"en": "Physically destroying coins", "es": "Destruir físicamente monedas"}, {"en": "Permanently removing tokens from circulation", "es": "Eliminar permanentemente tokens de circulación"}, {"en": "A type of attack", "es": "Un tipo de ataque"}, {"en": "A wallet feature", "es": "Una característica de billetera"}]',
 1, '{"en": "Token burning permanently removes tokens from circulation by sending them to an inaccessible address, reducing supply.", "es": "La quema de tokens elimina permanentemente tokens de circulación enviándolos a una dirección inaccesible, reduciendo el suministro."}', 'crypto-101'),

('Crypto 101', 'medium',
 '{"en": "What is a CEX?", "es": "¿Qué es un CEX?"}',
 '[{"en": "A decentralized exchange", "es": "Un exchange descentralizado"}, {"en": "A centralized exchange like Coinbase or Binance", "es": "Un exchange centralizado como Coinbase o Binance"}, {"en": "A type of cryptocurrency", "es": "Un tipo de criptomoneda"}, {"en": "A wallet provider", "es": "Un proveedor de billeteras"}]',
 1, '{"en": "A CEX (Centralized Exchange) is a trading platform operated by a company that holds custody of user funds, like Coinbase or Binance.", "es": "Un CEX (Exchange Centralizado) es una plataforma de trading operada por una empresa que tiene custodia de los fondos de usuarios, como Coinbase o Binance."}', 'crypto-101'),

('Crypto 101', 'hard',
 '{"en": "What is the difference between ERC-20 and ERC-721?", "es": "¿Cuál es la diferencia entre ERC-20 y ERC-721?"}',
 '[{"en": "ERC-721 is faster", "es": "ERC-721 es más rápido"}, {"en": "ERC-20 is fungible, ERC-721 is non-fungible (NFT)", "es": "ERC-20 es fungible, ERC-721 es no fungible (NFT)"}, {"en": "They are the same", "es": "Son iguales"}, {"en": "ERC-20 is for Ethereum, ERC-721 for Bitcoin", "es": "ERC-20 es para Ethereum, ERC-721 para Bitcoin"}]',
 1, '{"en": "ERC-20 tokens are fungible (interchangeable, like currencies), while ERC-721 tokens are non-fungible (unique, like NFTs).", "es": "Los tokens ERC-20 son fungibles (intercambiables, como monedas), mientras que los tokens ERC-721 son no fungibles (únicos, como NFTs)."}', 'crypto-101'),

('Crypto 101', 'hard',
 '{"en": "What is the UTXO model?", "es": "¿Qué es el modelo UTXO?"}',
 '[{"en": "A type of wallet", "es": "Un tipo de billetera"}, {"en": "Unspent Transaction Output model used by Bitcoin", "es": "Modelo de Salida de Transacción No Gastada usado por Bitcoin"}, {"en": "A consensus mechanism", "es": "Un mecanismo de consenso"}, {"en": "A smart contract system", "es": "Un sistema de contratos inteligentes"}]',
 1, '{"en": "UTXO (Unspent Transaction Output) is the accounting model Bitcoin uses, where each transaction consumes previous outputs and creates new ones.", "es": "UTXO (Salida de Transacción No Gastada) es el modelo contable que usa Bitcoin, donde cada transacción consume salidas anteriores y crea nuevas."}', 'crypto-101'),

('Crypto 101', 'hard',
 '{"en": "What is a hard fork?", "es": "¿Qué es un hard fork?"}',
 '[{"en": "A wallet backup", "es": "Un respaldo de billetera"}, {"en": "A permanent blockchain split creating a new chain", "es": "Una división permanente de blockchain creando una nueva cadena"}, {"en": "A mining pool", "es": "Un pool de minería"}, {"en": "A type of token", "es": "Un tipo de token"}]',
 1, '{"en": "A hard fork is a permanent divergence in the blockchain, creating a new chain with different rules. Bitcoin Cash is a hard fork of Bitcoin.", "es": "Un hard fork es una divergencia permanente en la blockchain, creando una nueva cadena con reglas diferentes. Bitcoin Cash es un hard fork de Bitcoin."}', 'crypto-101'),

('Crypto 101', 'hard',
 '{"en": "What is Proof of Stake (PoS)?", "es": "¿Qué es Prueba de Participación (PoS)?"}',
 '[{"en": "Mining with computers", "es": "Minar con computadoras"}, {"en": "Consensus where validators stake tokens to secure the network", "es": "Consenso donde validadores apuestan tokens para asegurar la red"}, {"en": "A type of stablecoin", "es": "Un tipo de stablecoin"}, {"en": "A wallet feature", "es": "Una característica de billetera"}]',
 1, '{"en": "Proof of Stake is a consensus mechanism where validators lock up tokens as collateral to validate transactions and earn rewards.", "es": "Prueba de Participación es un mecanismo de consenso donde los validadores bloquean tokens como colateral para validar transacciones y ganar recompensas."}', 'crypto-101'),

('Crypto 101', 'hard',
 '{"en": "What is atomic swap?", "es": "¿Qué es un intercambio atómico?"}',
 '[{"en": "A fast trading strategy", "es": "Una estrategia de trading rápida"}, {"en": "Trustless exchange between two different blockchains", "es": "Intercambio sin confianza entre dos blockchains diferentes"}, {"en": "A type of NFT", "es": "Un tipo de NFT"}, {"en": "A wallet backup", "es": "Un respaldo de billetera"}]',
 1, '{"en": "Atomic swaps enable direct, trustless cryptocurrency exchanges between different blockchains without intermediaries using hash time-locked contracts.", "es": "Los intercambios atómicos permiten intercambios directos y sin confianza de criptomonedas entre diferentes blockchains sin intermediarios usando contratos con bloqueo temporal hash."}', 'crypto-101')

ON CONFLICT DO NOTHING;
