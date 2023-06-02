const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios.get(`${URL}/${id}`);

    let character = {
      id: data.id,
      name: data.name,
      gender: data.gender,
      origin: data.origin,
      image: data.image,
      status: data.status,
      species: data.species,
    };
    return character.name
      ? res.json(character)
      : res.status(404).send("Not found!");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getCharById};

































// const axios = require ('axios');

// const URL = `https://rickandmortyapi.com/api/character/`

// const getCharById = async (req, res) =>{
 
//     try {

//         let {id}= req.params;
//         const response = await axios.get (`${URL} /${id}`)
//         const personaje = response.data;
       
//         if(!personaje.name)  throw  Error (`Faltan datos del personaje con ID: ${id}`);

//        let character = {
//                 id,
//                 name,
//                 species,
//                 origin,
//                 image,
//                 gender,
//                 status
//             }

//             return res.status(200).json(character)
                   
//      }catch (error){
//          return error.message.includes('ID')
//            ? res.status(404).send(error.message)
//            : res.status(500).send(error.response.data.error)     
//       }
//    }   
        
   
// module.exports = {
//     getCharById

// };   








//axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//       .then((result)=> result.data)
//       .then(({name, gender, origin, status, image, species})=>{
//             let character ={
//                  id,
//                  name, 
//                  gender,
//                  origin,
//                  image, 
//                  status,
//                  species
//             }
//             res.writeHead(200, {'Content-Type' : 'application/json'})
//             .end (JSON.stringify(character))
//       })
//       .catch((error) => res.writeHead(500, {'Content-Type': 'text/plain'})
//       .end (error.message))
//    };