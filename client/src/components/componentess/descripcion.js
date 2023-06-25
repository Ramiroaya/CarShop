import React from 'react'

import "../../css/autosIndex.css";


function Descripcion({vehiculo="vehiculo",marca="marca",modelo="modelo",anio="anio",version="version",motor="motor",combustible="combustible" }) {
  return (
    <div className='Descripcion'>
        <h2>{vehiculo}</h2>
        <p>{marca}</p>
        <p>{modelo}</p>
        <p>{anio}</p>
        <p>{version}</p>
        <p>{motor}</p>
        <p>{combustible}</p>
    </div>
  );
  }

export default Descripcion;