const {User} = require ("../DB_connection.js");



module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;

   
    if (!email || !password) {
      return res.status(400).json({ message: 'Faltan datos' });
    }

    // Crear el usuario en la base de datos
    const user = await User.findOrCreate({
      where: { email, password },
     });

    // Devolver el usuario guardado
    return res.json(user);

  } catch (error) {
     return res.status(500).json({ message: error.message });
  }
};


