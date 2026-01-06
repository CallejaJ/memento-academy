-- Create table for course sections (replacing hardcoded content)
CREATE TABLE IF NOT EXISTS course_sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id TEXT NOT NULL, -- e.g. 'blockchain-development'
  slug TEXT NOT NULL, -- e.g. 'blockchain-architecture'
  order_index INTEGER NOT NULL,
  title JSONB NOT NULL, -- e.g. {"en": "Blockchain Architecture", "es": "Arquitectura Blockchain"}
  description JSONB,
  content JSONB, -- Rich text content or components structure
  created_at TIMESTAMPTZ DEFAULT NOW(),
  
  UNIQUE(course_id, slug),
  UNIQUE(course_id, order_index)
);

-- Create table for quiz questions
CREATE TABLE IF NOT EXISTS quiz_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section_id UUID NOT NULL REFERENCES course_sections(id) ON DELETE CASCADE,
  question JSONB NOT NULL, -- e.g. {"en": "What is a blockchain?", "es": "¿Qué es una blockchain?"}
  options JSONB NOT NULL, -- Array of strings e.g. [{"en": "A", "es": "A"}, ...]
  correct_answer INTEGER NOT NULL, -- Index of correct option (0-based)
  explanation JSONB, -- Optional explanation for feedback
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE course_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_questions ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Public read access for course sections" ON course_sections
  FOR SELECT USING (true);

CREATE POLICY "Public read access for quiz questions" ON quiz_questions
  FOR SELECT USING (true);
  
-- Only admins can insert/update/delete (assuming service role or specific admin users, 
-- but for now we'll restrict public write. You'll need to seed via SQL or admin client)
