import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './blackFriday.css';

const BlackFriday = () => {
  const navigate = useNavigate(); 
  const [mostrarBanner, setMostrarBanner] = useState(true);

  const cerrarBanner = () => {
    setMostrarBanner(false);
  };

  const irAOfertas = () => {
    navigate('/ofertas');
  };

  return (
    <>
      {mostrarBanner && (
        <div className="bannerBlack">
          <span>¡Grandes ofertas esta semana!</span>
          <span className="close-btn" onClick={cerrarBanner}>X</span>
          <div className='contenedor-blackF'>
            <h1>LLEGÓ EL BLACK FRIDAY</h1>
            <p>Hasta el 28 de Noviembre</p>
            <p>Encuentra los mejores OFERTAS de este BLACK FRIDAY en nuestros precios especiales.</p>
            <button className="botonBlack" type="button" onClick={irAOfertas}>OFERTAS</button>
          </div>
        </div>
      )}
    </>
  );
};

export default BlackFriday;



