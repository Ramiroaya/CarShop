import React from 'react';
import '../css/form.css'

const FormBusqueda = () => {
  return (
    <div>
      <form class="formBusqueda">

        <input type="text" class="inputForm" Placeholder="Tipo de vehículo"/>  
        <select name="Categoria" size="1">  
          <option value="Auto"> Auto </option>  
          <option value="Camioneta"> Camioneta </option>  
          <option value="Camion"> Camión </option>  
          <option value="Maquinaria"> Maquinaria </option>  
          <option value="Moto"> Moto </option>  
          <option value="Motorhome"> Motorhome </option>  
          <option value="Remloque"> Remloque o trailer </option>  
        </select>  

        <input type="text" class="inputForm" id="inputMarca" placeholder="Marca" />

        <input type="text" class="inputForm" id="inputModelo" placeholder="Modelo" />

        <input type="number" class="inputForm" id="inputanio" placeholder="Año" />

        <button type="button" class="btn" id="btnBuscar">Buscar</button>

      </form>
    </div>
  )
}

export default FormBusqueda