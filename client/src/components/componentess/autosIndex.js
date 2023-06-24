import React from 'react'



import Banner from '../banner';
import Descripcion from './descripcion';
import Tres from './tres';
import Dos from './dos';
import Uno from './uno';
import Contactos from './contactos';
import Segurosyfinanciacion from './segurosyfinanciaciones';

import '../../css/autosIndex.css';



function autosIndex  ()  {
  return (
    <div class='autosIndex'>

        <Banner/>

      <div class='prueba' >
        <Uno/>
        <Dos/>
        <Tres/>
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

export default autosIndex;