const { Client } = require('pg');
const client = new Client({
    connectionString: 'postgres://postgres.jmmmxgnakjefsjkhqaat:Y%40somos4@aws-1-eu-west-1.pooler.supabase.com:5432/postgres'
});

client.connect()
    .then(() => {
        console.log('Connected successfully');
        return client.query('SELECT 1');
    })
    .then(res => {
        console.log('Query successful:', res.rows);
        return client.end();
    })
    .catch(err => {
        console.error('Connection error:', err);
        process.exit(1);
    });
