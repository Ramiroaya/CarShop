// Seguro.js
import React, { useState } from 'react';
import './seguro.css';

const Seguro = () => {
  const [carValue, setCarValue] = useState(0);
  const [age, setAge] = useState(0);
  const [coverageType, setCoverageType] = useState('basic');
  const [insuranceQuote, setInsuranceQuote] = useState(null);

  const calculateQuote = () => {
    const baseRate = 0.02;
    const ageFactor = age < 25 ? 1.5 : 1;
    const coverageFactor = coverageType === 'premium' ? 1.2 : 1;

    const quote = carValue * baseRate * ageFactor * coverageFactor;

    setInsuranceQuote(quote);
  };

  return (
    <div className="insurance-container">
      <h2>SILULADOR DE SEGURO</h2>
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
      <button onClick={calculateQuote}>CALCULAR CUOTA</button>
      {insuranceQuote !== null && (
        <p>
          Su cotización de seguro es: ${insuranceQuote.toFixed(2)}
        </p>
      )}
    </div>
  );
};

export default Seguro;