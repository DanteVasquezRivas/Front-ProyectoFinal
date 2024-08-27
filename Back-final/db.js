const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

pool.connect(function(err,client,done){
  if (err) console.log (err)
})
module.exports = pool;


/* DB_USER=postgres
DB_HOST=localhost 
DB_DATABASE=tienda_mascotas
DB_PASSWORD=isabella
DB_PORT=5432
PORT=3000
JWT_SECRET=mi_clave_secreta */