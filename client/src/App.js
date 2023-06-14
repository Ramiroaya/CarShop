import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Index from './pages/index';
 import Layout from './pages/layout';
import Vistas from './pages/vistas'; 

function App() {
  return (
    <>
      <div>
         <Router>
          <Routes>
           <Route path="/" element={<Index />}/> 
           <Route path="/vistas" element={<Vistas/>}/>
           <Route path="/layout" element={<Layout />}/>
          </Routes>
        </Router>
        
      </div>
      </>
  );
}

export default App;
