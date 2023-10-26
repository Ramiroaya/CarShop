import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


import FormBusqueda   from './formBusqueda/index-formBusqueda';
import Tiposvehiculos from './index-tiposvehiculos';
import Segurosyfinanciacion  from './index-segurosyfinanciacionacceso';
import Marcas  from './index-marcas';


import 'bootstrap/dist/css/bootstrap.min.css';

import '../css/bloques.css';
import VentaVehiculo from './ventaVehiculo/VentaVehiculo';




const ComponentesIndex = () => {
  return (

    <div className='bloques'>
      <div className="d-grid gap-2">
        <Link to="/vender-auto"> {VentaVehiculo}
            <Button variant="outline-info" size="lm">
              VENDÉ TU AUTO
            </Button>
        </Link>
      </div>     
      <FormBusqueda />
      <Tiposvehiculos />
      <Marcas />
      <Segurosyfinanciacion />
    </div>
    
  )
}

export default ComponentesIndex;