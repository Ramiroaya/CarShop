import React from 'react'
import "../../css/autosIndex.css";


function DatosDeAutos({vehiculo="vehiculo",marca="marca",precio="precio" }) {
  return (
    <div className='DatosDeAutos'>
        <h2>{vehiculo}</h2>
        <p>{marca}</p>
        <p>{precio}</p>
    </div>
  );
}

export default DatosDeAutos; 