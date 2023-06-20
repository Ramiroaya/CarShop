import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Ofertas from './components/Ofertas';
import Nosotros from './components/Nosotros';
import Login from './pages/Login';
import Contacto from './components/Contacto';
import NavBarHeader from './components/navBarHeader/NavBarHeader';


function App() {
  return ( 
    <BrowserRouter>   
        <Routes>
          <Route path="/" element={<NavBarHeader/> } >
            <Route index element={<Home />} />
            <Route path="ofertas" element={<Ofertas />} />
            <Route path="usuario" element={<Login />} />
            <Route path="nosotros" element={<Nosotros />} />
            <Route path="contacto" element={<Contacto />} />
          </Route>
      </Routes> 
    </BrowserRouter>     
  );
}


export default App;
