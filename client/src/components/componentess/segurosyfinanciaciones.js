import React from 'react';

import creditoimg from '../images/creditoimg.jpg';
import seguroimg from '../images/seguroimg.jpg';

import '../css/autosIndex.css';

function Segurosyfinanciacion() {
  return (
    
      <div className='bloques'>
     <img src={seguroimg} alt="card shop" width="300" height="300" />
                
     <h2>ASEGURÁ TU AUTO</h2>
                
    <img src={creditoimg}  alt="card shop"  width="300" height="300"/>
                
    <h2>SIMULÁ TU CRÉDITO</h2>  
      </div>
    
  );
}

export default Segurosyfinanciacion;