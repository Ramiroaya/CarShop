import React from 'react';
import '../css/bloques.css';
import creditoimg from '../images/credito1.jpg';
import seguroimg from '../images/seguro1.jpg';
import { Link } from 'react-router-dom';

const Segurosyfinanciacion = () => {
  return (
    <>
      <div className='bloques'>
        <div className="custom-row">
          <div className="custom-col" >
            <div className="custom-card">
            <Link to="/seguro">
              <img
                src={seguroimg}
                className="custom-card-img-top"
                alt="Asegura tu auto"
                style={{ width: '300%', height: 'auto' }}               
              />
            </Link>
              <div className="custom-card-body">
                <h5 className="custom-card-title">ASEGURÁ TU AUTO</h5>
              </div>
            </div>
          </div>
          <div className="custom-col" >
            <div className="custom-card">
              <Link to="/credito">
                <img
                  src={creditoimg}
                  className="custom-card-img-top"
                  alt="Simulá tu crédito"
                  style={{ width: '250%', height: 'auto' }}
                />
              </Link>
              <div className="custom-card-body">
                <h5 className="custom-card-title">SIMULÁ TU CRÉDITO</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Segurosyfinanciacion;