const { Favorite } = require('../DB_connection');

module.exports  = async (req, res) => {
  try {
    const { id } = req.params;

    
    await Favorite.destroy({ where: { id } });

    // Buscar todos los personajes favoritos actualizados
    const favorites = await Favorite.findAll();

    // Responder con el arreglo de personajes favoritos
    return res.json(favorites);
  } catch (error) {
   
    return res.status(500).json({ message: error.message });
  }
};


