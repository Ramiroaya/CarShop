import React from 'react'

import muestraImagen from '../../images/fordFiesta.imgs.full.high.webp';


import  '../../css/autosIndex.css';

function ImagenPrincipal() {
  return (
    <div className='ImagenPrincipal'>
      
      <img src={muestraImagen} alt="CAR SHOP" className='muestra-imagen' />  
      
    </div>
  );
}

export default ImagenPrincipal;
 

