import React from 'react'

import "../../css/autosIndex.css"

function Contactos({nombre="nombre",telefono="telefono",mail="mail",ciudad="ciudad"}) {
  return (
      
        <div className='Contactos'>
            <h2>{nombre}</h2>
            <p>{telefono}</p>
            <p>{mail}</p>
            <p>{ciudad}</p>
            
        </div>
  );
}

export default Contactos
