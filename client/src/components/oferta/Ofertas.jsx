import React from 'react'
import { useState, useEffect } from 'react';
import { RiCameraLine } from 'react-icons/ri';


import  cactusImage from '../../images/ofertas/cactus01.webp';
import  cronosImage  from '../../images/ofertas/cronos01.webp';
import territoryImage from '../../images/ofertas/usado1.webp';
import renegadeImage from '../../images/ofertas/usados4.webp';
import fiestaImage from '../../images/ofertas/usados6.1.webp';
import mercedesImage from '../../images/ofertas/usados3.webp';
import f150Image from  '../../images/ofertas/f15001.jpg';
import focusImage from '../../images/ofertas/focus01.webp';
import peugeot208Image from '../../images/ofertas/peugeot208-01.webp';
import sw4Image from '../../images/ofertas/sw401.jpg';

import './ofertas.css';

const cards = [
  {
    title: "CACTUS",
    image: cactusImage,
    text: "Citroen C4 Cactus",
    año: " Año 2021 ",
    kilometros: "42.000 Km",
  },
  {
    title: "MERCEDES",
    image: mercedesImage,
    text: "Mercedes-Benz Clase GLC 3.0",
    año:" Año 2019  ",
    kilometros: "88.000 Km",
  },
  {
    title: "RENEGADE",
    image: renegadeImage,
    text: "Jeep Renegade 1.8 Sport At",
    año:" Año 2017 ",
    kilometros: "67.000 Km",
  },
  {
    title: "CRONOS",
    image: cronosImage,
    text: "Fiat Cronos 1.3",
    año:" Año 2022 ",
    kilometros: "47.000 Km",
  },
  {
    title: "FIESTA",
    image: fiestaImage,
    text: "Ford Fiesta Kinetic Desig",
    año: "Año 2016",
    kilometros: "62.000 Km",
  },
  {
    title: "TERRITORY",
    image: territoryImage,
    text: "Ford Territory 1.8t Titanium ",
    año: "Año 2023",
    kilometros: "33.000 Km",
  },
  {
    title: "F-150",
    image: f150Image,
    text: "Ford F-150 4x4 ",
    año: "Año 2018",
    kilometros: "142.000 Km",
  },
  {
    title: "FOCUS ",
    image: focusImage,
    text: "Ford Focus 2.0 Ghia",
    año:" Año 2018 ",
    kilometros: "112.000 Km",
  },
  {
    title: "SW4",
    image: sw4Image,
    text: "Toyota SW4",
    año:" Año 2015",
    kilometros: "230.000 Km",
  },
  {
    title: "208",
    image: peugeot208Image,
    text: "Peugeot 208 Feline ",
    año: "Año 2021 ",
    kilometros: "18.000 Km",
  }
];

const Ofertas = () => {
  useEffect(() => {
    console.log('desplazamiento a la parte superior');
    window.scrollTo(0, 0);
    
  }, []);
  const [active, setActive] = useState(0);


  return (
    <section className="contenedor-ofertas">
      {cards.map((card, index) => (
        <article
          key = {card.image}
          className={
            active === index? "active": ""
          }
          onClick={() => setActive(index)}
          >
          <img src={card.image} alt="imagen-oferta"/>
          <div className="content">
            <span>
              <RiCameraLine/>
            </span>
            <div>
              <h2>{card.title}</h2>
              <h3>{card.text}</h3>
              <h3>{card.año}</h3>
              <h4>{card.kilometros}</h4>
              <button>Ver</button>
            </div>
          </div>  
          </article>
      )
        )}
    </section>
  );
};

export default Ofertas