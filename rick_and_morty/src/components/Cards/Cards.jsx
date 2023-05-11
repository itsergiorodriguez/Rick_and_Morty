import Card from '../Card/Card';
import style from './Cards.module.css';

 const Cards = ({characters, onClose}) => {
   
   return( 
          <div className={style.container}>
                  { 
                     characters.map(({id, name, species, gender, image, status} ) => {
                     return( 
                     <Card
                     key={id} 
                     detailId= {id}
                     name= {name}
                     species= {species}
                     gender= {gender}
                     image={image} 
                     origin= {origin.name}
                     status= {status}
                     onClose= {()=>{onClose(id)}}
                     
                     />
                                 
                    )
                     
                  })}
          </div>
   )
};

export default Cards;