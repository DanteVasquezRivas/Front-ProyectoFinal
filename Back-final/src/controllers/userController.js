const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getAllUsers = async (req, res) => {
  try {
    const result = await req.db.query('SELECT * FROM usuarios');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

const createUser = async (req, res) => {
  const { nombre, apellido, email, contraseña } = req.body;
  
  try {
    const hashedPassword = await bcrypt.hash(contraseña, 10);
    const result = await req.db.query(
      'INSERT INTO usuarios (nombre, apellido, email, contraseña) VALUES ($1, $2, $3, $4) RETURNING *',
      [nombre, apellido, email, hashedPassword]
    );
    const user = result.rows[0];
    const token = jwt.sign({ id_user: user.id_user }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ user, token });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear usuario' });
  }
};

module.exports = { getAllUsers, createUser };
