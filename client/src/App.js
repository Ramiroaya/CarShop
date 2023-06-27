
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Ofertas from './components/oferta/Ofertas';
import Nosotros from './components/nosotros/Nosotros';
import IndexLogin from './pages/IndexLogin';
import NavBarHeader from './components/navBarHeader/NavBarHeader';
import Vistas from './pages/vistas'; 
import ContactoIndex from './pages/ContactoIndex';
import NoPage from './components/NoPage';
import IndexRegistro from './pages/IndexRegistro';
import IndexCredito from './pages/IndexCredito';
import Legales from './components/navBarFooter/Legales';



function App() {
  return (
    <>
      <div>
        <Router>      
          <Routes>
            <Route path="/" element={<NavBarHeader/> } >
              <Route index element={<Home />} />
              <Route path="credito" element={<IndexCredito />} />
              <Route path="ofertas" element={<Ofertas />} />
              <Route path="usuario" element={<IndexLogin />} />
              <Route path="/usuario/registro" element={<IndexRegistro />} />
              <Route path="nosotros" element={<Nosotros />} />
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
