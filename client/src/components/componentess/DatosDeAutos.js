import React from 'react';

import muestraImagen1 from '../../images/fiestaImag/images2.jpg';
import muestraImagen2 from '../../images/fiestaImag/images1.jpg';
import muestraImagen3 from '../../images/fiestaImag/images3.jpg';
import muestraImagen4 from '../../images/fiestaImag/focus.webp';
import muestraImagen5 from '../../images/fiestaImag/peugeop308.webp';
import muestraImagen6 from '../../images/fiestaImag/volswaguen.webp';

const carData = [
  {
    id: 1,
    name: 'Auto 1',
    image: muestraImagen1,
    characteristics: 'Características del Auto 1',
  },
  {
    id: 2,
    name: 'Auto 2',
    image: muestraImagen2,
    characteristics: 'Características del Auto 2',
  },
  {
    id:3,
    name: 'Auto 3',
    image: muestraImagen3,
    characteristics: 'Características del Auto 3',
  },
  {
    id: 4,
    name: 'Auto 4',
    image: muestraImagen4,
    characteristics: 'Características del Auto 4',
  },
  {
    id: 5,
    name: 'Auto 5',
    image: muestraImagen5,
    characteristics: 'Características del Auto 5',
  },
  {
    id: 6,
    name: 'Auto 6',
    image: muestraImagen6,
    characteristics: 'Características del Auto 6',
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
            <img src={car.image} alt={car.name} />
            <h3>{car.name}</h3>
            <p>{car.characteristics}</p>
          </div>
        ))}
      </div>
      <div className="autos-abajo">
        {carsAbajo.map((car) => (
          <div key={car.id} className="car-item">
            <img src={car.image} alt={car.name} />
            <h3>{car.name}</h3>
            <p>{car.characteristics}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatosDeAutos;