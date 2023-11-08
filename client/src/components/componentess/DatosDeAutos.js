import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useCarData } from './carData'; // Importa el hook useCarData

import '../../css/detalles.css';

const DatosDeAutos = () => {
  // Obtén los datos de automóviles usando el hook useCarData
  const carData = useCarData();
    // Función para regresar a la página anterior

    const goBack = () => {
      window.history.back();
    };

  // Dividir la lista de carData en dos sublistas (arriba y abajo)
  const carsArriba = carData.slice(0, 3);
  const carsAbajo = carData.slice(3, 6);

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

export default DatosDeAutos;




