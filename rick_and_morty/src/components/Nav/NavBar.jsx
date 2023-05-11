import SearchBar from "../SearchBar/SearchBar";
import style from './NavBar.module.css'
import { Link, NavLink} from "react-router-dom";

const NavBar = ({onSearch}) => {
    return (
        <div className={style.nav}>
            
            <div className={style.boton}>     
                 <Link   to='/'> LogOut  </Link>
            </div>
            
            <SearchBar   onSearch ={onSearch}/>
        
            <button className={style.boton}>
                <Link to='/About/about'>About</Link>   
            </button> 
            <button className={style.boton}>
                <Link to='/Home/home'>Home</Link>       
            </button>

            <NavLink className={style.boton} to='/favorites/favorites'>Favorites</NavLink>  

        </div>
          
        
    )
};

export default NavBar;