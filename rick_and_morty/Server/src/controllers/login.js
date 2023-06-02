const { User } = require('../DB_connection');

module.exports = async (req, res) => {
  try {
    const { email, password } = req.query;

    
    if (!email || !password) {
      return res.status(400).json({ message: 'Faltan datos' });
    }

    // Buscar el usuario por email
    const user = await User.findOne({ where: { email } });

    // Verificar si se encontró el usuario
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Verificar si la contraseña coincide
    if (user.password !== password) {
      return res.status(403).json({ message: 'Contraseña incorrecta' });
    }

    // Contraseña correcta, responder con acceso true
    return res.json({ access: true });

  } catch (error) {
   
    return res.status(500).json({ message: error.message });
  }
};
