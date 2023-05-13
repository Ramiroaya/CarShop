import React from 'react';
import '../css/form.css';

const FormBusqueda = () => {
  return (
    <div>
      <form class="form">
        <select name="Categoria" size="1" class="selectForm">  
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

        <button type="button" class="buttonForm" id="btnBuscar">Buscar</button>

      </form>
    </div>
  )
}

export default FormBusqueda;