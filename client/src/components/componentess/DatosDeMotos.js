import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useCarData } from './carData'; // Asegúrate de tener el hook correcto para las motos

import '../../css/detalles.css';

const DatosDeMotos = () => {
  // Obtén los datos de motos usando el hook useMotoData
  const carData = useCarData();
  // Función para regresar a la página anterior

  const goBack = () => {
    window.history.back();
  };

  // Dividir la lista de motoData en dos sublistas (arriba y abajo)
  const carsArriba = carData.slice(6, 9);
  const carsAbajo = carData.slice(9, 12);

  return (
    <div className="datos-autos">
    <button onClick={goBack}>Regresar</button>
   <div className="autos-arriba">
     {carsArriba.map((car) => (
       <div key={car.id} className="car-item">
         <NavLink to={`/Detalles/${car.id}`}>
           <img src={car.image} alt={car.marca} />
           <h3>{car.marca}</h3>
           <p>Modelo: {car.modelo}</p>
         </NavLink>
       </div>
     ))}
   </div>
   <div className="autos-abajo">
     {carsAbajo.map((car) => (
       <div key={car.id} className="car-item">
         <NavLink to={`/Detalles/${car.id}`}>
           <img src={car.image} alt={car.marca} />
           <h3>{car.marca}</h3>
           <p>Modelo: {car.modelo}</p>
         </NavLink>
       </div>
     ))}
   </div>
   <Outlet />
 </div>
  );
};

export default DatosDeMotos;