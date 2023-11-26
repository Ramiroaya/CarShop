// CarDataContext.js
import React, { createContext, useContext } from 'react';

import muestraImagen1 from '../../images/fiestaImag/images2.jpg';
import muestraImagen2 from '../../images/fiestaImag/ferrarif8.jpg';
import muestraImagen3 from '../../images/fiestaImag/fiat duna.jpg';
import muestraImagen4 from '../../images/fiestaImag/peugeot 307.jpg';
import muestraImagen5 from '../../images/fiestaImag/bmw explore.jpg';
import muestraImagen6 from '../../images/fiestaImag/honda civic.jpg';
import muestraImagen7 from '../../images/motos/ninja.jpg';
import muestraImagen8 from '../../images/motos/honda.jpg';
import muestraImagen9 from '../../images/motos/harley-davidson.jpg';
import muestraImagen10 from '../../images/motos/corven.jpg';
import muestraImagen11 from '../../images/motos/bmw.jpg';
import muestraImagen12 from '../../images/motos/zanella.jpg';
import muestraImagen13 from '../../images/camionetas/toro.jpg';
import muestraImagen14 from '../../images/motos/honda.jpg';
import muestraImagen15 from '../../images/motos/harley-davidson.jpg';
import muestraImagen16 from '../../images/motos/corven.jpg';
import muestraImagen17 from '../../images/motos/bmw.jpg';
import muestraImagen18 from '../../images/motos/zanella.jpg';
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
  {
    id: 7,
    marca: 'Kawasaki',
    modelo: 'ninja',
    combustible: 'Gasolina',
    ano: 2023,
    image: muestraImagen7,
  },
  {
    id: 8,
    marca: 'Honda',
    modelo: 'xr-150',
    combustible: 'Gasolina',
    ano: 2023,
    image: muestraImagen8,
  },
  {
    id: 9,
    marca: 'harley-davidson',
    modelo: 'custon',
    combustible: 'Gasolina',
    ano: 2023,
    image: muestraImagen9,
  },
  {
    id: 10,
    marca: 'corven',
    modelo: '110',
    combustible: 'Gasolina',
    ano: 2020,
    image: muestraImagen10,
  },
  
  {
    id: 11,
    marca: 'BMW',
    modelo: '1250',
    combustible: 'Gasolina',
    ano: 2025,
    image: muestraImagen11,
  },
  
  {
    id: 12,
    marca: 'zanella',
    modelo: '90',
    combustible: 'Gasolina',
    ano: 2023,
    image: muestraImagen12,
  },

  {
    id: 13,
    marca: 'toro',
    modelo: 'ninja',
    combustible: 'Gasolina',
    ano: 2023,
    image: muestraImagen13,
  },

  {
    id: 14,
    marca: 'Honda',
    modelo: 'xr-150',
    combustible: 'Gasolina',
    ano: 2023,
    image: muestraImagen14,
  },
  {
    id: 15,
    marca: 'harley-davidson',
    modelo: 'custon',
    combustible: 'Gasolina',
    ano: 2023,
    image: muestraImagen15,
  },
  
  {
    id: 16,
    marca: 'corven',
    modelo: '110',
    combustible: 'Gasolina',
    ano: 2020,
    image: muestraImagen16,
  },
  
  {
    id: 17,
    marca: 'BMW',
    modelo: '1250',
    combustible: 'Gasolina',
    ano: 2025,
    image: muestraImagen17,
  },
  
  {
    id: 18,
    marca: 'zanella',
    modelo: '90',
    combustible: 'Gasolina',
    ano: 2023,
    image: muestraImagen18,
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