import React from "react";
import { Link } from "react-router-dom";
import "../css/bloques.css";
import "../css/styles.css";

import chevrolet from "../images/brands/chevrolet.jpg";
import fiat from "../images/brands/fiat.jpg";
import ford from "../images/brands/ford.jpg";
import honda from "../images/brands/honda.jpg";
import peugeot from "../images/brands/peugeot.jpg";
import renault from "../images/brands/renault.jpg";
import vw from "../images/brands/vw.jpg";
import citroen from "../images/brands/citroen.jpg";
import jeep from "../images/brands/jeep.jpg";

const Marcas = () => {
  return (
    <div className="bloques">
      <h6>MARCAS MAS BUSCADAS</h6>
      <div className="marcas-container">
        <div className="marcas-column">
          <Link to="/vistas">
            <img src={chevrolet} className="icon-button" alt="Chevrolet" />
          </Link>
          <Link to="/vistas">
            <img src={fiat} className="icon-button" alt="Fiat" />
          </Link>
          <Link to="/vistas">
            <img src={ford} className="icon-button" alt="Ford" />
          </Link>
        </div>
        <div className="marcas-column">
          <Link to="/vistas">
            <img src={honda} className="icon-button" alt="Honda" />
          </Link>
          <Link to="/vistas">
            <img src={peugeot} className="icon-button" alt="Peugeot" />
          </Link>
          <Link to="/vistas">
            <img src={renault} className="icon-button" alt="Renault" />
          </Link>
        </div>
        <div className="marcas-column">
          <Link to="/vistas">
            <img src={vw} className="icon-button" alt="VW" />
          </Link>
          <Link to="/vistas">
            <img src={citroen} className="icon-button" alt="Citroen" />
          </Link>
          <Link to="/vistas">
            <img src={jeep} className="icon-button" alt="Jeep" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Marcas;
