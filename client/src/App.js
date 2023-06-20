
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Ofertas from './components/Ofertas';
import Nosotros from './components/Nosotros';
import Login from './pages/Login';
import Contacto from './components/Contacto';
import NavBarHeader from './components/navBarHeader/NavBarHeader';
 import Layout from './pages/layout';
import Vistas from './pages/vistas'; 

function App() {
  return (
    <>
      <div>
        <Router>      
          <Routes>
            <Route path="/" element={<NavBarHeader/> } >
              <Route index element={<Home />} />
              <Route path="ofertas" element={<Ofertas />} />
              <Route path="usuario" element={<Login />} />
              <Route path="nosotros" element={<Nosotros />} />
              <Route path="contacto" element={<Contacto />} />
             </Route>
          </Routes>          
          <Routes>            
           <Route path="/vistas" element={<Vistas/>}/>
           <Route path="/layout" element={<Layout />}/>
          </Routes>
        </Router>
      </div>
      </>
  );
}


export default App;
