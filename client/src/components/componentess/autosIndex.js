import React from 'react'

import Banner from '../banner';
import Descripcion from './descripcion';
import DatosDeAutos from './DatosDeAutos';


import ImageCarrusel from './ImageCarrusel';
import Segurosyfinanciacion from './segurosyfinanciaciones';

import '../../css/autosIndex.css';



function AutosIndex  ()  {
  return (
    <div className='autosIndex'>

        <Banner/>

      <div className='prueba' >
        
        <ImageCarrusel/>
        
      </div>
      <div>
      <DatosDeAutos/>

      </div>

      <div className='prueba2'>
        <Descripcion/>
        <Segurosyfinanciacion/>
      </div>

     
    </div>
  )
}

export default AutosIndex;