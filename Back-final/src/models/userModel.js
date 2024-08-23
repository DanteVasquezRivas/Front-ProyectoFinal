const bcrypt = require('bcrypt');

const getAllUsers = async (db) => {
  try {
    const result = await db.query('SELECT * FROM usuarios');
    return result.rows;
  } catch (error) {
    throw new Error('Error al obtener usuarios');
  }
};

const createUser = async (db, { nombre, apellido, email, contraseña }) => {
  try {
    const hashedPassword = await bcrypt.hash(contraseña, 10);
    const result = await db.query(
      'INSERT INTO usuarios (nombre, apellido, email, contraseña) VALUES ($1, $2, $3, $4) RETURNING *',
      [nombre, apellido, email, hashedPassword]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error('Error al crear usuario');
  }
};

module.exports = { getAllUsers, createUser };
