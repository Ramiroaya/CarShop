import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './blackFriday.css';

function BlackFriday ()  {
  const navigate = useNavigate(); 
  const [mostrarBanner, setMostrarBanner] = useState(true);
  useEffect(() => {
    const fechaFinBlackFriday = new Date('2023-11-28T23:59:59'); 
    const ahora = new Date();

    if (ahora > fechaFinBlackFriday) {
      setMostrarBanner(false);
    } else {
      const tiempoRestante = fechaFinBlackFriday - ahora;

      const temporizador = setTimeout(() => {
        setMostrarBanner(false);
      }, tiempoRestante);
      return () => clearTimeout(temporizador);
    }
  }, []);

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



