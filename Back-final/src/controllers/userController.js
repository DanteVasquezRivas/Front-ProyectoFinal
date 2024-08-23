const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

const loginUser = async (req, res) => {
  const { email, contraseña } = req.body;

  try {
    const result = await userModel.getAllUsers(req.db); // llamar a todos los usuarios
    const user = result.find(u => u.email === email); // buscar por email

    if (!user) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const isMatch = await bcrypt.compare(contraseña, user.contraseña);

    if (!isMatch) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const token = jwt.sign({ id_user: user.id_user }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};

const createUser = async (req, res) => {
  const { email, contraseña } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(contraseña, 10);
    const newUser = await userModel.createUser(req.db, { email, contraseña: hashedPassword });

    res.status(201).json({ message: 'Usuario creado con éxito', user: newUser });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
};

module.exports = { createUser, loginUser };
