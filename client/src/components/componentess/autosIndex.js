import React from 'react'

import Banner from '../banner';
import Descripcion from './Descripcion';
import DatosDeAutos from './DatosDeAutos';
import ImagenPrincipal from './ImagenPrincipal';
import ImagenesDiferentes from './ImagenesDiferentes';
import Contactos from './Contactos';
import Segurosyfinanciacion from './Segurosyfinanciaciones';

import '../../css/autosIndex.css';



function AutosIndex  ()  {
  return (
    <div class='autosIndex'>

        <Banner/>

      <div class='prueba' >
        <ImagenesDiferentes/>
        <ImagenPrincipal/>
        <DatosDeAutos/>
      </div>

      <div class='prueba2'>
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