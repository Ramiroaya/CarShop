import React from 'react'

import muestraImagen1 from '../images/fiestaImag/images1.jpg';


function uno() {
  return (
    <div className='uno-stylos'>
      <img src={muestraImagen1} alt="CAR SHOP" className='muestra-imagen1'/> 
    <button
       className='btn btn-dark'
      
    >
      pulsame
    </button>
    </div>
  );
}

export default uno;

