import React from 'react';

import creditoimg from '../../images/credito1.jpg';
import seguroimg from '../../images/seguro1.jpg';

import '../../css/autosIndex.css';
import { Link } from 'react-router-dom';

function Segurosyfinanciacion() {
  return (
    
      <div className='bloques'>
        <img src={seguroimg} alt="card shop" width="300" height="200" />                
        <h2>ASEGURÁ TU AUTO</h2>
        <Link to="/credito">          
           <img src={creditoimg}  alt="card shop"  width="300" height="200"/>
        </Link>
           <h2>SIMULÁ TU CRÉDITO</h2>  
      </div>
    
  );
}

export default Segurosyfinanciacion;