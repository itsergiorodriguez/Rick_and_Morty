import styles from './Deatil.module.css'
import axios from 'axios';
import { useParams } from 'react-router-dom'; 
import { useState, useEffect} from 'react';

const Deatil = () =>{
    const {detailId} = useParams()
    const [character, setCharacter] = useState({}); 

useEffect(()=>{
    axios(`https://rickandmortyapi.com/api/character/${detailId}`).then(({ data }) => {
      if (data.name) {
         setCharacter(data);
      } else {
         window.alert('No hay personajes con ese ID');
      }
   });
   return setCharacter({});

}, [detailId])

return (

    <div className={styles.container}>
           <img src={character.image && character.image} alt='' />
           <h1>Name: "{character.name && character.name}"</h1>
           <h1>Status: "{character.status && character.status}"</h1>
           <h1>Species: "{character.species && character.species}"</h1>
           <h1>Gender: "{character.gender && character.gender}"</h1>
           <h1>Origins: "{character.origin?.name && character.origin?.name}"</h1>

    </div>
 )

};

export default Deatil;