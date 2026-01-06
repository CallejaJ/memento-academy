-- Fix course_id mismatch: 'blockchain-development' -> 'blockchain-dev'
-- Run this in Supabase SQL Editor

UPDATE course_sections 
SET course_id = 'blockchain-dev' 
WHERE course_id = 'blockchain-development';

UPDATE course_progress 
SET course_id = 'blockchain-dev' 
WHERE course_id = 'blockchain-development';

-- Also update seed files to use 'blockchain-dev' for future consistency
