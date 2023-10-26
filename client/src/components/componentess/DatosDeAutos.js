import React from 'react';
import { NavLink, Outlet } from 'react-router-dom'; // Asumiendo que estás usando react-router-dom para la navegación.

import muestraImagen1 from '../../images/fiestaImag/images2.jpg';
import muestraImagen2 from '../../images/fiestaImag/ferrarif8.jpg';
import muestraImagen3 from '../../images/fiestaImag/fiat duna.jpg';
import muestraImagen4 from '../../images/fiestaImag/peugeot 307.jpg';
import muestraImagen5 from '../../images/fiestaImag/bmw explore.jpg';
import muestraImagen6 from '../../images/fiestaImag/honda civic.webp';

import '../../css/detalles.css';

 const carData = [
  {
    id: 1,
    marca: 'Ford',
    modelo: 'Fiesta',
    combustible: 'Gasolina',
    ano: 2023,
    image: muestraImagen1,
  },
  {
    id: 2,
    marca: 'Ferrari',
    modelo: 'F8',
    combustible: 'Gasolina',
    ano: 2023,
    image: muestraImagen2,
  },
  {
    id: 3,
    marca: 'Fiat',
    modelo: 'Duna',
    combustible: 'Gasolina',
    ano: 2023,
    image: muestraImagen3,
  },
  {
    id: 4,
    marca: 'Peugeot',
    modelo: '307',
    combustible: 'Gasolina',
    ano: 2023,
    image: muestraImagen4,
  },
  {
    id: 5,
    marca: 'BMW',
    modelo: 'Z22',
    combustible: 'Gasolina',
    ano: 2023,
    image: muestraImagen5,
  },
  {
    id: 6,
    marca: 'Honda',
    modelo: 'XR6',
    combustible: 'Gasolina',
    ano: 2023,
    image: muestraImagen6,
  },
];

const DatosDeAutos = () => {
  // Dividir la lista de carData en dos sublistas (arriba y abajo)
  const carsArriba = carData.slice(0, 3);
  const carsAbajo = carData.slice(3, 6);

  return (
    <div className="datos-autos">
      <div className="autos-arriba">
        {carsArriba.map((car) => (
          <div key={car.id} className="car-item">
            <NavLink  to={`/Deetalles/${car.id}`}>
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
            <NavLink  to={`/Deetalles/${car.id}`}>
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




