import './App.css';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/Nav/NavBar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx'
import Form from "./components/Form/Form.jsx";
import Favorites from './components/Favorites/Favorites.jsx'



function App() {


   const [characters, setCharacters] = useState([]);
   const { pathname } = useLocation();

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   async function login(userData) {
      try {
        const { email, password } = userData;
        const URL = "http://localhost:3001/rickandmorty/login/";
        const { data } = await axios(URL + `?email=${email}&password=${password}`);
        const { access } = data;
        setAccess(access);
        access && navigate("/home");
      } catch (error) {
        console.log(error.message);
      }
    }
     
   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);

   const onSearch = async (id) => {
    try {
          const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
          const personaje = response.data    
        
         if (personaje.name) {
             setCharacters((oldChars) => [...oldChars, personaje]);
         }       
    }catch (error) {
         alert('No hay personajes con este ID');
    }

   }

   const onClose = (id) => {
      setCharacters(
         characters.filter((char) => {
            return char.id !== Number(id)
         })
      )
   };

   return (
      <div className='App'>
         {pathname !== '/' && <NavBar onSearch={onSearch} />}
         <Routes>
            <Route path="/" element={<Form login={login} />} />
            <Route path='/home/home' element={<Cards characters={characters} onClose={onClose} />}></Route>
            <Route path='/about/about' element={<About />}></Route>
            <Route path='/detail/detail/:id' element={<Detail />}></Route>
            <Route path='/favorites/favorites' element={<Favorites />} />
         </Routes>

      </div>
   );
   
  }

export default App;
