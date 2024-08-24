// src/models/userModel.js
const { Pool } = require('pg'); // Asegúrate de usar pg si estás usando PostgreSQL

const createUser = async (db, user) => {
  const { nombre, apellido, email, contraseña } = user;
  try {
    const result = await db.query(
      'INSERT INTO perfiles (nombre, apellido, email, password) VALUES ($1, $2, $3, $4) RETURNING *',
      [nombre, apellido, email, contraseña]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error('Error al crear usuario: ' + error.message);
  }
};

module.exports = { createUser };
