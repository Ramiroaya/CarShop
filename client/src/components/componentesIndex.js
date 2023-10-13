import React from 'react';
import Button from 'react-bootstrap/Button';

import FormBusqueda   from './formBusqueda/index-formBusqueda';
import Tiposvehiculos from './index-tiposvehiculos';
import Segurosyfinanciacion  from './index-segurosyfinanciacionacceso';
import Marcas  from './index-marcas';


import 'bootstrap/dist/css/bootstrap.min.css';

import '../css/bloques.css';




const ComponentesIndex = () => {
  return (

    <div className='bloques'>
      <div className="d-grid gap-2">
      <Button variant="outline-info" size="lm">
        VENDÉ TU AUTO
      </Button>
      </div>     
      <FormBusqueda />
      <Tiposvehiculos />
      <Marcas />
      <Segurosyfinanciacion />
    </div>
    
  )
}

export default ComponentesIndex;