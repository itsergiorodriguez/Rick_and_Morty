// const URL = `https://rickandmortyapi.com/api/character/`
// const axios = require ('axios');

// const getCharById = (req, res) =>{
//     let {id}= req.params
//     axios.get (`${URL} /${id}`)
//     .then((result)=> result.data)
//     .then(({name, gender, origin, status, image, species})=>{
//      if(name){ 
//        let personaje = {
//                  id,
//                  name, 
//                  gender,
//                  origin,
//                  image, 
//                  status,
//                 species
         
//           }
//            return res.status(200).json(personaje);
//         }
  
//            return res.status(404).send('Not found');
  
//          })
    
//            .catch ((error)=> res.status(500).send(error.message))
//     };
     

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