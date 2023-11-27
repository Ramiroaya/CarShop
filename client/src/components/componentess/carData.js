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
import muestraImagen14 from '../../images/camionetas/chevrolet.jpg';
import muestraImagen15 from '../../images/camionetas/ford.jpg';
import muestraImagen16 from '../../images/camionetas/hilux.jpg';
import muestraImagen17 from '../../images/camionetas/ram.jpg';
import muestraImagen18 from '../../images/camionetas/volkswagen.jpg';
import muestraImagen19 from '../../images/camiones/volkswagen.jpg';
import muestraImagen20 from '../../images/camiones/fiat.webp';
import muestraImagen21 from '../../images/camiones/mercedes.webp';
import muestraImagen22 from '../../images/camiones/escania.jpg';
import muestraImagen23 from '../../images/camiones/ford.jpg';
import muestraImagen24 from '../../images/camiones/volvo.jpg';
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
    marca: 'fiat',
    modelo: 'toro',
    combustible: 'Gasolina',
    ano: 2023,
    image: muestraImagen13,
  },
  {
    id: 14,
    marca: 'chevrolet',
    modelo: 's10',
    combustible: 'Gasolina',
    ano: 2023,
    image: muestraImagen14,
  },
  {
    id: 15,
    marca: 'ford',
    modelo: 'custon',
    combustible: 'Gasolina',
    ano: 2023,
    image: muestraImagen15,
  },
  {
    id: 16,
    marca: 'toyota',
    modelo: 'hilux',
    combustible: 'Gasolina',
    ano: 2020,
    image: muestraImagen16,
  },
  {
    id: 17,
    marca: 'dodge',
    modelo: 'ram',
    combustible: 'Gasolina',
    ano: 2025,
    image: muestraImagen17,
  },
  {
    id: 18,
    marca: 'volkswagen',
    modelo: 'amarok',
    combustible: 'Gasolina',
    ano: 2023,
    image: muestraImagen18,
  },
  {
    id: 19,
    marca: 'volkswagen',
    modelo: '2215',
    combustible: 'Gasoil',
    ano: 2023,
    image: muestraImagen19,
  },
  {
    id: 20,
    marca: 'fiat',
    modelo: 'ducato',
    combustible: 'Gasolina',
    ano: 2023,
    image: muestraImagen20,
  },
  {
    id: 21,
    marca: 'mercedes',
    modelo: 'actros',
    combustible: 'Gasolina',
    ano: 2023,
    image: muestraImagen21,
  },
  {
    id: 22,
    marca: 'escania',
    modelo: 't112',
    combustible: 'Gasolina',
    ano: 2020,
    image: muestraImagen22,
  },
  {
    id: 23,
    marca: 'ford',
    modelo: 'cargo',
    combustible: 'Gasolina',
    ano: 2025,
    image: muestraImagen23,
  },
  {
    id: 24,
    marca: 'volvo',
    modelo: 'carretero',
    combustible: 'Gasolina',
    ano: 2023,
    image: muestraImagen24,
  }
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