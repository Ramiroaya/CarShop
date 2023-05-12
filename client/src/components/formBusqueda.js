import React from 'react';
import '../css/form.css'

const FormBusqueda = () => {
  return (
    <div>
      <form class="formBusqueda">

        <label class="labelForm">Tipo de vehículo</label>
        <input type="text" class="inputForm" Placeholder="Elegí categoría"/>  
        <select name="Categoria" size="7">  
          <option value="Auto"> Auto </option>  
          <option value="Camioneta"> Camioneta </option>  
          <option value="Camion"> Camión </option>  
          <option value="Maquinaria"> Maquinaria </option>  
          <option value="Moto"> Moto </option>  
          <option value="Motorhome"> Motorhome </option>  
          <option value="Remloque"> Remloque o trailer </option>  
        </select>  

        <label class="labelForm">Marca</label>
        <input type="text" class="inputForm" id="inputMarca"
        placeholder="Marca" />

        <label class="labelForm">Modelo</label>
        <input type="text" class="inputForm" id="inputModelo" placeholder="Modelo" />

        <label class="labelForm">Año</label>
        <input type="number" class="inputForm" id="inputanio" placeholder="Año" />

        <button type="button" class="btn" id="btnBuscar">Buscar</button>

      </form>
    </div>
  )
}

export default FormBusqueda