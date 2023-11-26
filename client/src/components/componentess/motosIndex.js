import React from 'react'

import Banner from '../banner';

import DatosDeMotos from './DatosDeMotos';

import ImageCarrusel from './ImageCarrusel';
import Segurosyfinanciacion from './segurosyfinanciaciones';

import '../../css/autosIndex.css';




function MotosIndex  ()  {
  return (
    <div className='autosIndex'>

        <Banner/>

      <div className='prueba' >
        
        <ImageCarrusel/>
        
      </div>

      <div>
        
        <DatosDeMotos/>

      </div>

      <div className='prueba2'>

        <Segurosyfinanciacion/>

      </div>

     
    </div>
  )
}

export default MotosIndex;