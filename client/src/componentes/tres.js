import React from 'react'
import "../css/descripcion.css";


function tres({vehiculo="vehiculo",marca="marca",precio="precio" }) {
  return (
    <div className='descripcion'>
        <h2>{vehiculo}</h2>
        <p>{marca}</p>
        <p>{precio}</p>
    </div>
  );
}

export default tres;