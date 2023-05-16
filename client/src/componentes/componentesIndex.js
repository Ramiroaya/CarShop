import React from 'react'

import '../css/componentesIndex.css';
import Descripcion from './descripcion';
import Tres from './tres';
import Dos from './dos';
import Uno from './uno';
import Contactos from './contactos';


const ComponentesIndex = () => {
  return (
    <div class='componentes-index'>
       <Uno/>
       <Dos/>
       <Tres/>
       <Descripcion/>
       <Contactos/>
       
    
    </div>
  )
}

export default ComponentesIndex;