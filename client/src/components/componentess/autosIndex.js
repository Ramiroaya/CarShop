import React from 'react'

import Descripcion from './descripcion';
import Tres from './tres';
import Dos from './dos';
import Uno from './uno';
import Contactos from './contactos';
import Segurosyfinanciacion from './segurosyfinanciaciones';

import '../css/autosIndex.css';

function ComponentesIndex  ()  {
  return (
    <div class='componentesIndex'>
      <div class='prueba' >
        <Uno/>
        <Dos/>
        <Tres/>
      </div>

      <div class='prueba2'>
        <Descripcion/>
        <Segurosyfinanciacion/>
      </div>
      
        <Contactos/>
      
    </div>
  )
}

export default ComponentesIndex;