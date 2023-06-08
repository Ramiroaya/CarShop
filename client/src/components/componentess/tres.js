import React from 'react'
import "../css/autosIndex.css";


function tres({vehiculo="vehiculo",marca="marca",precio="precio" }) {
  return (
    <div className='tres'>
        <h2>{vehiculo}</h2>
        <p>{marca}</p>
        <p>{precio}</p>
    </div>
  );
}

export default tres; 