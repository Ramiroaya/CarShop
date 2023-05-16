import React from 'react'
import FormBusqueda from './formBusqueda';
import Tiposvehiculos from './tiposvehiculos';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/componentesIndex.css';



const ComponentesIndex = () => {
  return (
    <div class='container'>
      <FormBusqueda />
      <Tiposvehiculos />
    </div>
  )
}

export default ComponentesIndex;