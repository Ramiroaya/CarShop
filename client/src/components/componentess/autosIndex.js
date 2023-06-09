import React from 'react'

import Banner from '../banner';
import Descripcion from './descripcion';
import DatosDeAutos from './DatosDeAutos';
import ImagenPrincipal from './ImagenPrincipal';
import ImagenesDiferentes from './ImagenesDiferentes';
import Contactos from './contactos';
import Segurosyfinanciacion from './segurosyfinanciaciones';

import '../../css/autosIndex.css';



function AutosIndex  ()  {
  return (
    <div className='autosIndex'>

        <Banner/>

      <div className='prueba' >
        <ImagenesDiferentes/>
        <ImagenPrincipal/>
        <DatosDeAutos/>
      </div>

      <div className='prueba2'>
        <Descripcion/>
        <Segurosyfinanciacion/>
      </div>

      <div>
        <Contactos/>

      </div>
    </div>
  )
}

export default AutosIndex;