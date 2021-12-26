const { Pool } = require('pg');

const options = {
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: Number(process.env.PGPORT),// number sor?
}

const pg_client = new Pool(options)
try {
    pg_client.connect();
    console.log("::> PostgreSQL Hazır");
} catch (err) {
    console.log(err.stack);
}

exports.pg_client = pg_client
