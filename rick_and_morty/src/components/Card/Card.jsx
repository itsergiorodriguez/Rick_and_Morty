import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {addFav, removeFav} from '../../redux/actions';
import { useState, useEffect } from 'react';

const Card = ({detailId, name, species, gender,onclose, image, onClose, addFav, removeFav, myFavorites}) => {

    const [isFav, setIsFav] = useState(false);

    const handleFavorite = () => {

      if (isFav){
         setIsFav (false);
         removeFav (detailId)
      } else {
            setIsFav(true);
            addFav({detailId, name, species, gender,   image, onclose})   
           
      }
    }
    useEffect(() => {
       myFavorites.forEach((fav) => {
          if (fav.id === detailId) {
             setIsFav(true);
          }
       });
    }, [detailId, myFavorites]);

   return (
      <div className={styles.container}>
           
         <Link to={`/detail/${detailId}`} >
         <h2>Name: {name}</h2>
         </Link>
        
         <h2>Species: {species} </h2>
         <h2>Gender: {gender}</h2>
       
         <img className= {styles.foto} src={image} alt="" />
         <button  onClick={()=>{onClose(detailId)}} className={styles.button}>Cerrar</button>

         {
               isFav ? (
                  <button onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
               )
            }
      </div>
   );

};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}


const mapDispatchToProps = (dispatch)=>{
    return{
    addFav: (character) => {dispatch(addFav(character))},
    removeFav: (id) => {dispatch(removeFav(id))}
    }
};



export default  connect(
   mapStateToProps,
   mapDispatchToProps)
   (Card);