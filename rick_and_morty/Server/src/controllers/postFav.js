const { Favorite } = require('../DB_connection');

module.exports  = async (req, res) => {
  try {
    const { name, origin, status, image, species, gender } = req.body;

    // Verificar que se recibieron todos los datos
    if (!name || !origin || !status || !image || !species || !gender) {
      return res.status(401).json({ message: 'Faltan datos' });
    }

    // Guardar el personaje favorito en la base de datos
    await Favorite.findOrCreate({where: { name, origin, status, image, species, gender}});

    // Buscar todos los personajes favoritos
    const favorites = await Favorite.findAll();

    // Responder con el arreglo de personajes favoritos
    return res.json(favorites);

  } catch (error) {
    // Manejar el error
    return res.status(500).json({ message: error.message });
  }
};


