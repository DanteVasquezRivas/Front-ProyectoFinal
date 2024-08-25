const { Pool } = require('pg'); // Asegúrate de usar pg si estás usando PostgreSQL

// Crea una instancia del pool de conexiones
const pool = new Pool({
  user: 'tu_usuario',
  host: 'localhost',
  database: 'tu_base_de_datos',
  password: 'tu_contraseña',
  port: 5432,
});

// Función para obtener todos los usuarios
const getAllUsers = async () => {
  try {
    const result = await pool.query('SELECT * FROM usuarios');
    return result.rows;
  } catch (error) {
    throw new Error('Error al obtener usuarios: ' + error.message);
  }
};

// Función para crear un nuevo usuario
const createUser = async (user) => {
  const { nombre, apellido, email, contraseña } = user;
  try {
    const result = await pool.query(
      'INSERT INTO perfiles (nombre, apellido, email, password) VALUES ($1, $2, $3, $4) RETURNING *',
      [nombre, apellido, email, contraseña]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error('Error al crear usuario: ' + error.message);
  }
};

module.exports = { getAllUsers, createUser };
