import React from 'react';
import { useParams } from 'react-router-dom'; // Importa "useParams" para obtener el ID del automóvil de la URL.
import '../../css/detalles.css';


const Detalles = ({ carData }) => {
  const { id } = useParams(); // Obtiene el ID del automóvil de la URL.

  // Busca el automóvil con el ID correspondiente.
  const car = carData.find((car) => car.id === parseInt(id, 10));
  console.log("error  auto", car);
  if (!car) {
    return <div><p>Automóvil no encontrado</p></div>;
  }

  return (
    <div className="detalle-auto">
      <p>muestra de pooo tyukhgshdshgggggggggg</p>
      {/*  <img src={car.image} alt={`${car.marca} - ${car.modelo}`} />
      <h2>{car.marca}</h2>
      <p>Marca: {car.marca}</p> */}
      {/* Agrega más detalles, como modelo, combustible y año, según tu estructura de datos. */}
     {/*  <p>Modelo: {car.modelo}</p>
      <p>Combustible: {car.combustible}</p>
      <p>Año: {car.ano}</p>  */}
    </div>
  );
};

export default Detalles;