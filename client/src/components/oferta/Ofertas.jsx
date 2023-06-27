import React from 'react'
import { useState } from 'react';
import { RiCameraLine } from 'react-icons/ri';


import  cactusImage from '../../images/ofertas/cactus01.webp';
import  cronosImage  from '../../images/ofertas/cronos01.webp';
import ecosportImage from '../../images/ofertas/eco01.webp';
import f150Image from  '../../images/ofertas/f15001.jpg';
import focusImage from '../../images/ofertas/focus01.webp';
import peugeot208Image from '../../images/ofertas/peugeot208-01.webp';
import sw4Image from '../../images/ofertas/sw401.jpg';

import './ofertas.css';

const cards = [
  {
    title: "CACTUS",
    image: cactusImage,
    text: "Citroen C4 Cactus ",
  },
  {
    title: "CRONOS",
    image: cronosImage,
    text: "Fiat Cronos ",
  },
  {
    title: "ECOSPORT",
    image: ecosportImage,
    text: "Ford Ecosport ",
  },
  {
    title: "F-150",
    image: f150Image,
    text: "Ford F-150 ",
  },
  {
    title: "FOCUS ",
    image: focusImage,
    text: "Ford Focus ",
  },
  {
    title: "SW4",
    image: sw4Image,
    text: "Toyota SW4 ",
  },
  {
    title: "208",
    image: peugeot208Image,
    text: "Peugeot 208 ",
  }
];

const Ofertas = () => {
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
              <p>{card.text}</p>
            </div>
          </div>  
          </article>
      )
        )}
    </section>
  );
};

export default Ofertas