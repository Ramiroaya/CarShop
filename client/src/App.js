
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Ofertas from './components/Ofertas';
import Nosotros from './components/Nosotros';
import Login from './pages/Login';
import NavBarHeader from './components/navBarHeader/NavBarHeader';
 import Layout from './pages/layout';
import Vistas from './pages/vistas'; 
import FeedbackForm from './components/FeedBack';
import NoPage from './components/NoPage';
import Registro from './pages/Registro';



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
              <Route path="/usuario/registro" element={<Registro />} />
              <Route path="nosotros" element={<Nosotros />} />
              <Route path="contacto" element={<FeedbackForm />} />              
              <Route path="*" element={<NoPage />} />
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
