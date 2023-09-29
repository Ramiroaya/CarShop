import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Ofertas from './components/oferta/Ofertas';
import IndexNosotros from './pages/IndexNosotros';
import IndexLogin from './pages/IndexLogin';
import NavBarHeader from './components/navBarHeader/NavBarHeader'; 
import Vistas from './pages/vistas'; 
import ContactoIndex from './pages/ContactoIndex';
import NoPage from './components/NoPage';
import IndexRegistro from './pages/IndexRegistro';
import IndexCredito from './pages/IndexCredito';
import Legales from './components/navBarFooter/Legales';
import Footer from './components/navBarFooter/Footer';
<<<<<<< HEAD
=======

>>>>>>> main


function App() {
  return (
    <>
      <div>
        <Router>      
          <Routes>
<<<<<<< HEAD
          <Route path="/" element={<><NavBarHeader /><Footer /></> } >
=======
            <Route path="/" element={<><NavBarHeader /><Footer/></> } >
>>>>>>> main
              <Route index element={<Home />} />
              <Route path="credito" element={<IndexCredito />} />
              <Route path="ofertas" element={<Ofertas />} />
              <Route path="usuario" element={<IndexLogin />} />
              <Route path="/usuario/registro" element={<IndexRegistro />} />
              <Route path="nosotros" element={<IndexNosotros />} />
              <Route path="contacto" element={<ContactoIndex />} /> 
              <Route path="vistas" element={<Vistas/>}/>  
              <Route path="/legales" element={<Legales/>}/>           
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>          
        </Router>
      </div>
      </>
  );
}


export default App;
