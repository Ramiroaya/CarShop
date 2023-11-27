import React from 'react'

import Banner from '../banner';

import DatosDeCamionetas from './DatosDeCamionetas';

import ImageCarrusel from './ImageCarrusel';
import Segurosyfinanciacion from './segurosyfinanciaciones';

import '../../css/autosIndex.css';




function CamionetasIndex  ()  {
  return (
    <div className='autosIndex'>

        <Banner/>

      <div className='prueba' >
        
        <ImageCarrusel/>
        
      </div>

      <div>
        
        <DatosDeCamionetas/>

      </div>

      <div className='prueba2'>

        <Segurosyfinanciacion/>

      </div>

     
    </div>
  )
}

export default CamionetasIndex;