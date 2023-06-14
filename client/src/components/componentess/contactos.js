import React from 'react'

import "../../css/autosIndex.css"

function contactos({nombre="nombre",telefono="telefono",mail="mail",ciudad="ciudad"}) {
  return (
      
        <div className='contactos'>
            <h2>{nombre}</h2>
            <p>{telefono}</p>
            <p>{mail}</p>
            <p>{ciudad}</p>
            
        </div>
  );
}

export default contactos
