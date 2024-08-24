const loginUser = async (req, res) => {
  const { email, contraseña } = req.body;

  try {
    console.log('Recibida solicitud de inicio de sesión con email:', email);
    const users = await userModel.getAllUsers(req.db);
    const user = users.find(u => u.email === email);

    if (!user) {
      console.log('Usuario no encontrado');
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const isMatch = await bcrypt.compare(contraseña, user.password);
    if (!isMatch) {
      console.log('Contraseña incorrecta');
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const token = jwt.sign({ id_user: user.id_user }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error('Error en loginUser:', error);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};
