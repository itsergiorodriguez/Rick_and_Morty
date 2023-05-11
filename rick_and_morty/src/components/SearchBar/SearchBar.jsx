import styles from './SearchBar.module.css';
import { useState } from 'react';

function SearchBar({onSearch}) {
  const [id, setId] = useState('');
 
 
  const handleChange = (event) => {
   setId(event.target.value)
 } ;


  return (
      <div className={styles.container}>
         
         <input className={styles.search2} type='search' onChange={handleChange} value={id
         } />
         <button className={styles.search} onClick={()=>{onSearch(id)}}>Agregar</button>
      </div>
   );
}

export default SearchBar;