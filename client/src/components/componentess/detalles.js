import React from 'react';
import { useParams } from 'react-router-dom';
import { useCarData } from './carData';

import '../../css/detalles2.css';

const Detalles = () => {
  const { id } = useParams();
  const carData = useCarData();

  if (!carData || carData.length === 0) {
    return <p>Los datos del vehiculo no están disponibles.</p>;
  }

  const car = carData.find((car) => car.id === parseInt(id));

  if (!car) {
    return <p>No se encontró un vehiculo con el ID especificado.</p>;
  }

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="detalle-container"> {/* Agrega la clase CSS aquí */}
      <button onClick={goBack}>Regresar</button>
      <h2>Detalles del Vehiculo</h2>
      <p>Marca: {car.marca}</p>
      <p>Modelo: {car.modelo}</p>
      <p>Combustible: {car.combustible}</p>
      <p>Año: {car.ano}</p>
      <img src={car.image} alt={car.marca} />
    </div>
  );
};

export default Detalles;