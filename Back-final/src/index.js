const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const { Pool } = require('pg');

dotenv.config();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// configuracion que une mi base de datos
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.use((req, res, next) => {
  req.db = pool;
  next();
});

// importa las rutas
const apiRoutes = require('./routes/apiRoutes');
app.use('/api', apiRoutes);

// Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
