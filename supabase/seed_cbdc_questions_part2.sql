-- =============================================
-- CBDC COURSE - QUIZ QUESTIONS SEED (PART 2)
-- Sections 5-7
-- =============================================

-- SECTION 5: Global Landscape
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Which country is a leader in CBDC with a live pilot?", "es": "¿Qué país es líder en CBDC con un piloto en vivo?"}',
  '[{"en": "USA", "es": "EE.UU."}, {"en": "China (e-CNY)", "es": "China (e-CNY)"}, {"en": "Germany", "es": "Alemania"}, {"en": "Japan", "es": "Japón"}]',
  1,
  '{"en": "China is a global leader with its Digital Yuan (e-CNY) pilot reaching hundreds of millions of users.", "es": "China es un líder global con su piloto de Yuan Digital (e-CNY) alcanzando cientos de millones de usuarios."}'
FROM course_sections WHERE course_id = 'cbdc' AND slug = 'global-landscape';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What was the first nationwide CBDC?", "es": "¿Cuál fue la primera CBDC nacional?"}',
  '[{"en": "Bitcoin", "es": "Bitcoin"}, {"en": "Sand Dollar (Bahamas)", "es": "Sand Dollar (Bahamas)"}, {"en": "Digital Euro", "es": "Euro Digital"}, {"en": "US Dollar", "es": "Dólar EE.UU."}]',
  1,
  '{"en": "The Sand Dollar in the Bahamas was the first fully launched nationwide CBDC in 2020.", "es": "El Sand Dollar en las Bahamas fue la primera CBDC nacional completamente lanzada en 2020."}'
FROM course_sections WHERE course_id = 'cbdc' AND slug = 'global-landscape';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Does the USA have a Digital Dollar?", "es": "¿Tiene EE.UU. un Dólar Digital?"}',
  '[{"en": "Yes, live everywhere", "es": "Sí, en vivo en todas partes"}, {"en": "No, mostly research stage", "es": "No, mayormente en etapa de investigación"}, {"en": "Yes, launched in 2010", "es": "Sí, lanzado en 2010"}, {"en": "Only in Texas", "es": "Solo en Texas"}]',
  1,
  '{"en": "The USA is still exploring the concept and faces significant political debate.", "es": "EE.UU. todavía está explorando el concepto y enfrenta debate político significativo."}'
FROM course_sections WHERE course_id = 'cbdc' AND slug = 'global-landscape';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is the Brazilian CBDC pilot called?", "es": "¿Cómo se llama el piloto de CBDC brasileño?"}',
  '[{"en": "Real Coin", "es": "Real Coin"}, {"en": "Drex", "es": "Drex"}, {"en": "Samba", "es": "Samba"}, {"en": "Amazon", "es": "Amazon"}]',
  1,
  '{"en": "Brazils CBDC project is named Drex.", "es": "El proyecto CBDC de Brasil se llama Drex."}'
FROM course_sections WHERE course_id = 'cbdc' AND slug = 'global-landscape';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Are all countries launching CBDCs?", "es": "¿Están todos los países lanzando CBDCs?"}',
  '[{"en": "Yes, forced by UN", "es": "Sí, forzados por la ONU"}, {"en": "No, but most are researching it", "es": "No, pero la mayoría lo está investigando"}, {"en": "No, only China", "es": "No, solo China"}, {"en": "Yes, next week", "es": "Sí, la próxima semana"}]',
  1,
  '{"en": "While not all have launched, over 100 countries are exploring CBDCs.", "es": "Aunque no todos han lanzado, más de 100 países están explorando CBDCs."}'
FROM course_sections WHERE course_id = 'cbdc' AND slug = 'global-landscape';

-- SECTION 6: Timeline
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "When did the first CBDC launch?", "es": "¿Cuándo se lanzó la primera CBDC?"}',
  '[{"en": "2000", "es": "2000"}, {"en": "2020 (Bahamas)", "es": "2020 (Bahamas)"}, {"en": "2025", "es": "2025"}, {"en": "1990", "es": "1990"}]',
  1,
  '{"en": "2020 marked the launch of the Sand Dollar.", "es": "2020 marcó el lanzamiento del Sand Dollar."}'
FROM course_sections WHERE course_id = 'cbdc' AND slug = 'timeline';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Which phase are we in currently?", "es": "¿En qué fase estamos actualmente?"}',
  '[{"en": "Concept only", "es": "Concepto solo"}, {"en": "Global Pilot Phase", "es": "Fase Piloto Global"}, {"en": "Finished", "es": "Terminado"}, {"en": "Nobody cares", "es": "A nadie le importa"}]',
  1,
  '{"en": "We are in a phase of active pilots and legal preparation globally.", "es": "Estamos en una fase de pilotos activos y preparación legal globalmente."}'
FROM course_sections WHERE course_id = 'cbdc' AND slug = 'timeline';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "When might major economies launch CBDCs?", "es": "¿Cuándo podrían lanzar CBDCs las grandes economías?"}',
  '[{"en": "Tomorrow", "es": "Mañana"}, {"en": "2027-2030", "es": "2027-2030"}, {"en": "Never", "es": "Nunca"}, {"en": "2050", "es": "2050"}]',
  1,
  '{"en": "Estimates for the Digital Euro and others target the 2027-2030 window.", "es": "Las estimaciones para el Euro Digital y otros apuntan a la ventana 2027-2030."}'
FROM course_sections WHERE course_id = 'cbdc' AND slug = 'timeline';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What happened in 2022 regarding CBDC?", "es": "¿Qué pasó en 2022 respecto a CBDC?"}',
  '[{"en": "Bitcoin died", "es": "Bitcoin murió"}, {"en": "China expanded e-CNY pilot", "es": "China expandió el piloto e-CNY"}, {"en": "US launched digital dollar", "es": "EE.UU. lanzó el dólar digital"}, {"en": "Nothing", "es": "Nada"}]',
  1,
  '{"en": "China significantly expanded its Digital Yuan usage during the 2022 Winter Olympics.", "es": "China expandió significativamente el uso de su Yuan Digital durante los Olímpicos de Invierno 2022."}'
FROM course_sections WHERE course_id = 'cbdc' AND slug = 'timeline';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Is the transition to CBDC instant?", "es": "¿Es instantánea la transición a CBDC?"}',
  '[{"en": "Yes, overnight", "es": "Sí, de la noche a la mañana"}, {"en": "No, it is gradual", "es": "No, es gradual"}, {"en": "It already happened", "es": "Ya pasó"}, {"en": "No idea", "es": "Ni idea"}]',
  1,
  '{"en": "It is a multi-year process involving research, legislation, and testing.", "es": "Es un proceso de múltiples años involucrando investigación, legislación y pruebas."}'
FROM course_sections WHERE course_id = 'cbdc' AND slug = 'timeline';

-- SECTION 7: Recommendations
INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is the best defense against financial control?", "es": "¿Cuál es la mejor defensa contra el control financiero?"}',
  '[{"en": "Hide under bed", "es": "Esconderse bajo la cama"}, {"en": "Diversification and information", "es": "Diversificación e información"}, {"en": "Compliance", "es": "Cumplimiento"}, {"en": "Using only one bank", "es": "Usar solo un banco"}]',
  1,
  '{"en": "Diversifying assets (cash, crypto, traditional) decreases your reliance on any single point of failure.", "es": "Diversificar activos (efectivo, cripto, tradicional) disminuye tu dependencia de cualquier punto único de falla."}'
FROM course_sections WHERE course_id = 'cbdc' AND slug = 'recommendations';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Why hold cash?", "es": "¿Por qué tener efectivo?"}',
  '[{"en": "Paperweight", "es": "Pisapapeles"}, {"en": "Privacy and offline use", "es": "Privacidad y uso offline"}, {"en": "To burn it", "es": "Para quemarlo"}, {"en": "No reason", "es": "Sin razón"}]',
  1,
  '{"en": "Cash remains the only truly anonymous and offline form of payment.", "es": "El efectivo permanece como la única forma de pago verdaderamente anónima y offline."}'
FROM course_sections WHERE course_id = 'cbdc' AND slug = 'recommendations';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What does knowing your rights mean here?", "es": "¿Qué significa conocer tus derechos aquí?"}',
  '[{"en": "Advocating for privacy laws", "es": "Abogar por leyes de privacidad"}, {"en": "Nothing", "es": "Nada"}, {"en": "Being angry", "es": "Estar enojado"}, {"en": "Watching TV", "es": "Ver TV"}]',
  0,
  '{"en": "It means supporting legislation that protects financial privacy and cash usage.", "es": "Significa apoyar legislación que proteja la privacidad financiera y el uso de efectivo."}'
FROM course_sections WHERE course_id = 'cbdc' AND slug = 'recommendations';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "What is self-custody?", "es": "¿Qué es autocustodia?"}',
  '[{"en": "Being your own boss", "es": "Ser tu propio jefe"}, {"en": "Holding your own crypto keys", "es": "Tener tus propias claves crypto"}, {"en": "Selfishness", "es": "Egoísmo"}, {"en": "Banking online", "es": "Banca en línea"}]',
  1,
  '{"en": "Self-custody means holding your own private keys (like a hardware wallet) so no bank controls your funds.", "es": "Autocustodia significa tener tus propias claves privadas (como una hardware wallet) para que ningún banco controle tus fondos."}'
FROM course_sections WHERE course_id = 'cbdc' AND slug = 'recommendations';

INSERT INTO quiz_questions (section_id, question, options, correct_answer, explanation)
SELECT id,
  '{"en": "Is ignoring CBDCs a good strategy?", "es": "¿Es ignorar las CBDC una buena estrategia?"}',
  '[{"en": "Yes", "es": "Sí"}, {"en": "No, stay informed", "es": "No, mantente informado"}, {"en": "Maybe", "es": "Tal vez"}, {"en": "I dont know", "es": "No sé"}]',
  1,
  '{"en": "They are likely coming, so understanding how they work is crucial for your financial future.", "es": "Es probable que lleguen, así que entender cómo funcionan es crucial para tu futuro financiero."}'
FROM course_sections WHERE course_id = 'cbdc' AND slug = 'recommendations';
