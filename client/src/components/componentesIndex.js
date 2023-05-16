import React from 'react'
import FormBusqueda   from './index-formBusqueda';
import Tiposvehiculos from './index-tiposvehiculos';
import Segurosyfinanciacion  from './index-segurosyfinanciacionacceso';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/componentesIndex.css';



const ComponentesIndex = () => {
  return (
    <div class='container'>
      <FormBusqueda />
      <Tiposvehiculos />
      <Segurosyfinanciacion />
    </div>
  )
}

export default ComponentesIndex;