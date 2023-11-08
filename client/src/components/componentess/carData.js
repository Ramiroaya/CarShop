// CarDataContext.js
import React, { createContext, useContext } from 'react';

import muestraImagen1 from '../../images/fiestaImag/images2.jpg';
import muestraImagen2 from '../../images/fiestaImag/ferrarif8.jpg';
import muestraImagen3 from '../../images/fiestaImag/fiat duna.jpg';
import muestraImagen4 from '../../images/fiestaImag/peugeot 307.jpg';
import muestraImagen5 from '../../images/fiestaImag/bmw explore.jpg';
import muestraImagen6 from '../../images/fiestaImag/honda civic.jpg';

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
    ano: 2020,
    image: muestraImagen4,
  },
  {
    id: 5,
    marca: 'BMW',
    modelo: 'Z22',
    combustible: 'Gasolina',
    ano: 2025,
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

const CarDataContext = createContext();

export function CarDataProvider({ children }) {
  return (
    <CarDataContext.Provider value={carData}>
      {children}
    </CarDataContext.Provider>
  );
}

export function useCarData() {
  return useContext(CarDataContext);
}