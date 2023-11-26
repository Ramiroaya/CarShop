import React, { useState } from "react";

import mapfre from "../../images/logos/mapfre.png";
import rivadavia1 from "../../images/logos/rivadavia1.png";
import segunda from "../../images/logos/segunda.png";

import "./seguro.css";
import "../../css/logos.css";

const Seguro = () => {
  const [carValue, setCarValue] = useState(0);
  const [age, setAge] = useState(0);
  const [coverageType, setCoverageType] = useState("basic");
  const [insuranceQuote, setInsuranceQuote] = useState(null);

  const calculateQuote = () => {
    const baseRate = 0.02;
    const ageFactor = age < 25 ? 1.5 : 1;
    const coverageFactor = coverageType === "premium" ? 1.2 : 1;

    const quote = carValue * baseRate * ageFactor * coverageFactor;

    setInsuranceQuote(quote);
  };

  return (
    <>
      <div className="insurance-container">
        <h2>SILULADOR DE SEGURO</h2>
        <form className="contenedor-seguro">
          <label>
            VALOR DEL VEHICULO:
            <input
              type="number"
              value={carValue}
              onChange={(e) => setCarValue(Number(e.target.value))}
            />
          </label>
          <label>
            AÑOS DEL VEHICULO:
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
            />
          </label>
          <label>
            TIPO DE COBERTURA:
            <select
              value={coverageType}
              onChange={(e) => setCoverageType(e.target.value)}
            >
              <option value="basic">Basic</option>
              <option value="premium">Premium</option>
            </select>
          </label>
        </form>
        <button onClick={calculateQuote}>CALCULAR CUOTA</button>
        <div className="resultado-seguro">
          {insuranceQuote !== null && (
            <p>Su cotización de seguro es: ${insuranceQuote.toFixed(2)}</p>
          )}
        </div>
      </div>
      <h6>EMPRESAS SUGERIDAS</h6>
      <div className="marcas-container">
        <div className="marcas-column">
          <img src={mapfre} className="icon-button" alt="mapfre" />
          <img src={rivadavia1} className="icon-button" alt="rivadavia1" />
          <img src={segunda} className="icon-button" alt="segunda" />
        </div>
      </div>
    </>
  );
};

export default Seguro;
