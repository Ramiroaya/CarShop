import React from 'react'

import Banner from '../banner';
import DatosDeCamiones from './DatosDeCamiones';

import ImageCarrusel from './ImageCarrusel';
import Segurosyfinanciacion from './segurosyfinanciaciones';

import '../../css/autosIndex.css';




function CamionesIndex  ()  {
  return (
    <div className='autosIndex'>

        <Banner/>

      <div className='prueba' >
        
        <ImageCarrusel/>
        
      </div>

      <div>
        
        <DatosDeCamiones/>

      </div>

      <div className='prueba2'>

        <Segurosyfinanciacion/>

      </div>

     
    </div>
  )
}

export default CamionesIndex;