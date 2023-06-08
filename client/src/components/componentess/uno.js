import React from 'react'

import  "../css/autosIndex.css"

import muestraImagen1 from '../images/fiestaImag/images1.jpg';
import muestraImagen2 from '../images/fiestaImag/images2.jpg';
import muestraImagen3 from '../images/fiestaImag/images3.jpg';



function uno() {
  return (
    <div className='uno'>

      <button type="button">
       <img src={muestraImagen1} alt="CAR SHOP" width="280" height="220"/> 
      </button>
      <button type="button">
      <img src={muestraImagen2} alt="CAR SHOP" width="280" height="220"/> 
      </button>
      <button type="button">
      <img src={muestraImagen3} alt="CAR SHOP" width="280" height="220"/>
      </button>
    </div>
  );
}

export default uno;

 