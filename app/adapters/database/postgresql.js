const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();


const pool = new Pool({
    user:"postgres",
    password:"123",
    database:"truck_system",
    host:"localhost",
    port:5432
});

pool.on('error', (err, client) => {
  console.log('Beklenmedik hata', err)
  process.exit(-1);
});

pool.on('connect', () => {
  console.log('Bağlantı başarılı!')
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
