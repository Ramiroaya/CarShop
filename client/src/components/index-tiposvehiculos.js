import React from 'react';
import { Link } from 'react-router-dom';
import '../css/bloques.css';

import motocicleta from '../images/icons/motocicleta64.png';
import coche from '../images/icons/coche64.png';
import camion from '../images/icons/camion64.png';
import camioneta from '../images/icons/camioneta64.png';

const Tiposvehiculos = () => {
  return (
    <>
      <div className='bloques'>
        <h6>
          ELIJE TU OPCION
          <span className="badge badge-secondary"></span>
        </h6>
      </div>
      <div className='bloques'>
        <div className="row">
          <div className="col-xs-3 col-md-3">
            <Link to="/vistas">
              <img src={coche} className='icon-button' alt="Coche" />
            </Link>
          </div>
          <div className="col-xs-3 col-md-3">
            <img src={motocicleta} className='icon-button' alt="Motocicleta" />
          </div>
          <div className="col-xs-3 col-md-3">
            <img src={camioneta} className='icon-button' alt="Camioneta" />
          </div>
          <div className="col-xs-3 col-md-3">
            <img src={camion} className='icon-button' alt="Camión" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Tiposvehiculos;