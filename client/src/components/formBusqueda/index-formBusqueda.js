import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './formBusqueda.css'; 


const FormBusqueda = () => {
  const [tipoVehiculo, setTipoVehiculo] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [año, setAño] = useState('');
  const [resultados, setResultados] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:3001/vehiculo', {
        params: { tipoVehiculo, marca, modelo, año },
      });
      setResultados(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error al buscar vehículos:', error);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // Realiza una búsqueda inicial cuando el componente se carga
    handleSearch();
  }, [handleSearch]);

  return (
    <div className='searchContainer'>
      <h1 align='center'>Buscador de Vehículos</h1>
      <div>
        <div className="form-row">
          <label></label>
          <select className="form-field" defaultValue="Auto" onChange={(e) => setTipoVehiculo(e.target.value)}>
            <option value="Auto"> Auto </option>
            <option value="Camioneta"> Camioneta </option>
            <option value="Camion"> Camión </option>
            <option value="Moto"> Moto </option>
          </select>
        </div>

        <div className="form-row">
          <label></label>
          <input type="text" className="form-field" placeholder="Marca" onChange={(e) => setMarca(e.target.value)} />
        </div>

        <div className="form-row">
          <label></label>
          <input type="text" className="form-field" placeholder="Modelo" onChange={(e) => setModelo(e.target.value)} />
        </div>

        <div className="form-row">
          <label></label>
          <input type="number" className="form-field" placeholder="Año" onChange={(e) => setAño(e.target.value)} />
        </div>

        <div className="form-row">
          <button type="button" className="button-info" onClick={handleSearch}>BUSCAR</button>
        </div>
      </div>
      <div>
        <ul>
          {resultados.map((vehiculo) => (
            <li key={vehiculo.id}>
              {vehiculo.marca} {vehiculo.modelo} Año: {vehiculo.año}
            </li>
          ))}
        </ul>
      </div>   
    </div>
  );
};

export default FormBusqueda;
