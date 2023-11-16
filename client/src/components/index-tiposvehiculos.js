import React from 'react';
import { Link } from 'react-router-dom';
import '../css/bloques.css';

import motocicleta from '../images/icons/motito.png';
import coche from '../images/icons/autito.png';
import camion from '../images/icons/camioncito.png';
import camioneta from '../images/icons/camionetita.png';

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
            <Link to="/vistas">
              <img src={motocicleta} className='icon-button' alt="Motocicleta" />
            </Link>
          </div>
          <div className="col-xs-3 col-md-3">
            <Link to="/vistas">
              <img src={camioneta} className='icon-button' alt="Camioneta" />
            </Link>
          </div>
          <div className="col-xs-3 col-md-3">
            <Link to="/vistas">
              <img src={camion} className='icon-button' alt="Camión" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tiposvehiculos;