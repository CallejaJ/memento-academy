-- =============================================
-- Advanced Questions for All Categories
-- Preguntas avanzadas para aumentar dificultad
-- Run this to add hard-level questions to each category
-- =============================================

INSERT INTO game_questions (category, difficulty, question_text, options, correct_index, explanation, from_course) VALUES

-- =============================================
-- DEFI ADVANCED (8 questions)
-- =============================================

('DeFi', 'hard',
 '{"en": "What is a flash loan attack?", "es": "¿Qué es un ataque de flash loan?"}',
 '[{"en": "Stealing funds from wallets", "es": "Robar fondos de billeteras"}, {"en": "Exploiting protocols with borrowed funds", "es": "Explotar protocolos con fondos prestados"}, {"en": "Mining blocks faster", "es": "Minar bloques más rápido"}, {"en": "Phishing for private keys", "es": "Phishing de claves privadas"}]',
 1,
 '{"en": "Flash loan attacks exploit DeFi protocols by borrowing large amounts without collateral in a single transaction.", "es": "Los ataques de flash loan explotan protocolos DeFi pidiendo grandes cantidades sin colateral en una sola transacción."}',
 'defi-deep-dive'),

('DeFi', 'hard',
 '{"en": "What is a reentrancy attack?", "es": "¿Qué es un ataque de reentrancy?"}',
 '[{"en": "Multiple login attempts", "es": "Múltiples intentos de login"}, {"en": "Recursive call before state update", "es": "Llamada recursiva antes de actualizar estado"}, {"en": "Double-spending tokens", "es": "Doble gasto de tokens"}, {"en": "Overloading the network", "es": "Sobrecargar la red"}]',
 1,
 '{"en": "Reentrancy exploits a contract by calling back into it before the first execution completes.", "es": "El reentrancy explota un contrato llamándolo de nuevo antes de que la primera ejecución termine."}',
 'defi-deep-dive'),

('DeFi', 'hard',
 '{"en": "What is MEV in DeFi?", "es": "¿Qué es MEV en DeFi?"}',
 '[{"en": "Maximum Exchange Value", "es": "Valor Máximo de Exchange"}, {"en": "Miner Extractable Value", "es": "Valor Extraíble por Mineros"}, {"en": "Minimum Entry Validation", "es": "Validación Mínima de Entrada"}, {"en": "Multi-Exchange Venue", "es": "Venue Multi-Exchange"}]',
 1,
 '{"en": "MEV (Maximal Extractable Value) is profit miners/validators can extract by reordering transactions.", "es": "MEV (Valor Máximo Extraíble) es la ganancia que mineros/validadores pueden extraer reordenando transacciones."}',
 'defi-deep-dive'),

('DeFi', 'hard',
 '{"en": "What is slippage in DEX trading?", "es": "¿Qué es el slippage en trading DEX?"}',
 '[{"en": "Transaction confirmation time", "es": "Tiempo de confirmación de transacción"}, {"en": "Price difference between expected and executed", "es": "Diferencia de precio entre esperado y ejecutado"}, {"en": "Gas fee fluctuation", "es": "Fluctuación de tarifa de gas"}, {"en": "Wallet connection error", "es": "Error de conexión de billetera"}]',
 1,
 '{"en": "Slippage is the difference between the expected price and the actual execution price of a trade.", "es": "El slippage es la diferencia entre el precio esperado y el precio real de ejecución de una operación."}',
 'defi-deep-dive'),

('DeFi', 'hard',
 '{"en": "What is a sandwich attack?", "es": "¿Qué es un ataque sandwich?"}',
 '[{"en": "DDoS attack on nodes", "es": "Ataque DDoS a nodos"}, {"en": "Front-running and back-running a trade", "es": "Front-running y back-running de una operación"}, {"en": "Stealing NFT metadata", "es": "Robar metadatos de NFT"}, {"en": "Wallet seed extraction", "es": "Extracción de semilla de billetera"}]',
 1,
 '{"en": "Sandwich attacks profit by placing orders before and after a victim''s large trade to exploit price movement.", "es": "Los ataques sandwich obtienen ganancia colocando órdenes antes y después de una operación grande de la víctima."}',
 'defi-deep-dive'),

('DeFi', 'hard',
 '{"en": "What is the constant product formula?", "es": "¿Qué es la fórmula de producto constante?"}',
 '[{"en": "A mining difficulty algorithm", "es": "Un algoritmo de dificultad de minería"}, {"en": "x * y = k for AMM pricing", "es": "x * y = k para precios de AMM"}, {"en": "A staking reward calculation", "es": "Un cálculo de recompensa de staking"}, {"en": "Gas price estimation method", "es": "Método de estimación de precio de gas"}]',
 1,
 '{"en": "The constant product formula (x*y=k) is used by AMMs like Uniswap to determine token prices.", "es": "La fórmula de producto constante (x*y=k) es usada por AMMs como Uniswap para determinar precios de tokens."}',
 'defi-deep-dive'),

('DeFi', 'hard',
 '{"en": "What is a lending protocol liquidation?", "es": "¿Qué es una liquidación en protocolo de préstamos?"}',
 '[{"en": "Closing a lending platform", "es": "Cerrar una plataforma de préstamos"}, {"en": "Selling collateral when undercollateralized", "es": "Vender colateral cuando está subcololateralizado"}, {"en": "Converting tokens to stablecoins", "es": "Convertir tokens a stablecoins"}, {"en": "Withdrawing all deposits", "es": "Retirar todos los depósitos"}]',
 1,
 '{"en": "Liquidation occurs when a borrower''s collateral falls below the required ratio, and it is sold to repay the loan.", "es": "La liquidación ocurre cuando el colateral del prestatario cae por debajo del ratio requerido y se vende para pagar el préstamo."}',
 'defi-deep-dive'),

('DeFi', 'hard',
 '{"en": "What is a bonding curve?", "es": "¿Qué es una curva de bonding?"}',
 '[{"en": "A wallet security feature", "es": "Una característica de seguridad de billetera"}, {"en": "Mathematical price/supply relationship", "es": "Relación matemática precio/suministro"}, {"en": "A mining difficulty chart", "es": "Un gráfico de dificultad de minería"}, {"en": "A staking rewards graph", "es": "Un gráfico de recompensas de staking"}]',
 1,
 '{"en": "A bonding curve is a mathematical formula that determines token price based on supply.", "es": "Una curva de bonding es una fórmula matemática que determina el precio del token basado en el suministro."}',
 'defi-deep-dive'),

-- =============================================
-- SECURITY ADVANCED (7 questions)
-- =============================================

('Security', 'hard',
 '{"en": "What tool is used for smart contract auditing?", "es": "¿Qué herramienta se usa para auditar contratos inteligentes?"}',
 '[{"en": "Photoshop and Figma", "es": "Photoshop y Figma"}, {"en": "Slither and Mythril", "es": "Slither y Mythril"}, {"en": "Excel and PowerPoint", "es": "Excel y PowerPoint"}, {"en": "Chrome and Firefox", "es": "Chrome y Firefox"}]',
 1,
 '{"en": "Slither and Mythril are popular security analysis tools for auditing Solidity smart contracts.", "es": "Slither y Mythril son herramientas populares de análisis de seguridad para auditar contratos Solidity."}',
 'safety'),

('Security', 'hard',
 '{"en": "What is the checks-effects-interactions pattern?", "es": "¿Qué es el patrón checks-effects-interactions?"}',
 '[{"en": "A wallet backup method", "es": "Un método de respaldo de billetera"}, {"en": "Secure contract coding order", "es": "Orden seguro de codificación de contratos"}, {"en": "A token approval process", "es": "Un proceso de aprobación de tokens"}, {"en": "A mining optimization", "es": "Una optimización de minería"}]',
 1,
 '{"en": "This pattern prevents reentrancy by checking conditions, updating state, then making external calls.", "es": "Este patrón previene reentrancy verificando condiciones, actualizando estado, luego haciendo llamadas externas."}',
 'safety'),

('Security', 'hard',
 '{"en": "What is a front-running attack?", "es": "¿Qué es un ataque de front-running?"}',
 '[{"en": "Attacking network nodes", "es": "Atacar nodos de la red"}, {"en": "Placing transaction before victim''s", "es": "Colocar transacción antes de la víctima"}, {"en": "Stealing private keys", "es": "Robar claves privadas"}, {"en": "Creating fake websites", "es": "Crear sitios web falsos"}]',
 1,
 '{"en": "Front-running places a transaction ahead of a pending one to profit from the anticipated price change.", "es": "Front-running coloca una transacción antes de una pendiente para beneficiarse del cambio de precio anticipado."}',
 'safety'),

('Security', 'hard',
 '{"en": "What is a time-lock in smart contracts?", "es": "¿Qué es un time-lock en contratos inteligentes?"}',
 '[{"en": "A wallet password timer", "es": "Un temporizador de contraseña de billetera"}, {"en": "Delay before executing changes", "es": "Retraso antes de ejecutar cambios"}, {"en": "Automatic transaction retry", "es": "Reintento automático de transacción"}, {"en": "A mining speed limiter", "es": "Un limitador de velocidad de minería"}]',
 1,
 '{"en": "Time-locks enforce a waiting period before critical changes take effect, allowing users to react.", "es": "Los time-locks imponen un período de espera antes de que cambios críticos tengan efecto, permitiendo a usuarios reaccionar."}',
 'safety'),

('Security', 'hard',
 '{"en": "What is a proxy contract vulnerability?", "es": "¿Qué es una vulnerabilidad de contrato proxy?"}',
 '[{"en": "Slow transaction speeds", "es": "Velocidades de transacción lentas"}, {"en": "Storage collision or unauthorized upgrades", "es": "Colisión de almacenamiento o upgrades no autorizados"}, {"en": "High gas consumption", "es": "Alto consumo de gas"}, {"en": "Network congestion issues", "es": "Problemas de congestión de red"}]',
 1,
 '{"en": "Proxy vulnerabilities include storage collisions and unauthorized implementation changes.", "es": "Las vulnerabilidades de proxy incluyen colisiones de almacenamiento y cambios de implementación no autorizados."}',
 'safety'),

('Security', 'hard',
 '{"en": "What is an oracle manipulation attack?", "es": "¿Qué es un ataque de manipulación de oráculo?"}',
 '[{"en": "Hacking prediction websites", "es": "Hackear sitios de predicción"}, {"en": "Feeding false data to smart contracts", "es": "Alimentar datos falsos a contratos inteligentes"}, {"en": "Stealing from exchanges", "es": "Robar de exchanges"}, {"en": "Breaking encryption keys", "es": "Romper claves de encriptación"}]',
 1,
 '{"en": "Oracle manipulation provides false external data to smart contracts to exploit price-dependent logic.", "es": "La manipulación de oráculos proporciona datos externos falsos a contratos inteligentes para explotar lógica dependiente de precios."}',
 'safety'),

('Security', 'hard',
 '{"en": "What is infinite approval risk?", "es": "¿Qué es el riesgo de aprobación infinita?"}',
 '[{"en": "Too many wallet connections", "es": "Demasiadas conexiones de billetera"}, {"en": "Unlimited token spending permission", "es": "Permiso ilimitado de gasto de tokens"}, {"en": "Excessive gas fees", "es": "Tarifas de gas excesivas"}, {"en": "Slow transaction confirmations", "es": "Confirmaciones de transacción lentas"}]',
 1,
 '{"en": "Infinite approvals let contracts spend unlimited tokens, creating risk if the contract is compromised.", "es": "Las aprobaciones infinitas permiten a contratos gastar tokens ilimitados, creando riesgo si el contrato es comprometido."}',
 'safety')

ON CONFLICT DO NOTHING;
