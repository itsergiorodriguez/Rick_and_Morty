import { connect } from 'react-redux'
import Card from '../Card/Card';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {  filterCards, orderCards} from '../../redux/actions';
import styles from '../Favorites/Favorites.module.css'

const Favorites = ({ myFavorites }) => {

    const [aux, setAux] = useState(false);
    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch (orderCards(event.target.value))
        setAux(!aux);
      }
 
  const handleFilter = (event) => {
    dispatch (filterCards(event.target.value))
   }
 
  return (
        <div>
            <select className={styles.select} onChange={handleOrder}>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
            </select>

            <select className={styles.select} onChange={handleFilter}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
            </select>

            {
                myFavorites?.map((fav) => {
                    return (
                        <Card
                                          
                            key= {fav.detailId}
                            id={fav.detailId}
                            name={fav.name}
                            status={fav.status}
                            species={fav.species}
                            gender={fav.gender}
                            image={fav.image}
                            onclose={fav.onclose}
                        />
                    )
                })
            }

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }

}


export default connect(
    mapStateToProps,
    null
)(Favorites)