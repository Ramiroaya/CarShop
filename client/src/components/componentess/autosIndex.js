import React from 'react'


import Descripcion from './descripcion';
import Tres from './tres';
import Dos from './dos';
import Uno from './uno';
import Contactos from './contactos';
import Segurosyfinanciacion from './segurosyfinanciaciones';



function autosIndex  ()  {
  return (
    <div class='autosIndex'>
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