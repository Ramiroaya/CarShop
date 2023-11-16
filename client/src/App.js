import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CarDataProvider } from './components/componentess/carData'; 
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
import RegistroPerfil from './components/registro/RegistroPerfil';
import Legales from './components/navBarFooter/Legales';
import Footer from './components/navBarFooter/Footer';
import VentaVehiculo from './components/ventaVehiculo/VentaVehiculo';
import Detalles from './components/componentess/detalles';

function App() {
  return (
    <CarDataProvider> {/* Envuelve la aplicación con el proveedor de datos */}
      <div>
        <Router>      
          <Routes>
            <Route path="/" element={<><NavBarHeader /><Footer/></> } >
              <Route index element={<Home />} />
              <Route path="credito" element={<IndexCredito />} />
              <Route path="ofertas" element={<Ofertas />} />
              <Route path="usuario" element={<IndexLogin />} />
              <Route path="/usuario/registro" element={<IndexRegistro />} />
              <Route path="/usuario/registroPerfil" element={<RegistroPerfil />} />
              <Route path="nosotros" element={<IndexNosotros />} />
              <Route path="contacto" element={<ContactoIndex />} /> 
              <Route path="vender-auto" element={<VentaVehiculo />} />
              <Route path="vistas" element={<Vistas/>}/>               
              <Route path="/detalles/:id" element={<Detalles />} />
              <Route path="/legales" element={<Legales/>}/>           
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>          
        </Router>
      </div>
    </CarDataProvider>
  );
}

export default App;