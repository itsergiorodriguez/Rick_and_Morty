import './App.css';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/Nav/NavBar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import About from './components/About/About.jsx';
import Detail from './components/Deatil/Deatil.jsx'
import Form from "./components/Form/Form.jsx";
import Favorites from './components/Favorites/Favorites.jsx'
const EMAIL = 'srodriguez@soyhenry.com';
const PASSWORD = 'asd123';

function App() {


   const [characters, setCharacters] = useState([]);
   const { pathname } = useLocation();

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   };
   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
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
            <Route path='/detail/:detailId' element={<Detail />}></Route>
            <Route path='/favorites/favorites' element={<Favorites />} />
         </Routes>

      </div>
   );
}

export default App;
