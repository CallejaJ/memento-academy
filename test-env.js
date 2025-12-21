import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
console.log('DATABASE_URL starts with:', process.env.DATABASE_URL?.substring(0, 20));
console.log('DIRECT_URL starts with:', process.env.DIRECT_URL?.substring(0, 20));
