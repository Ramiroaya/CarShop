import React, { useState } from 'react';

import './credito.css';


const Credito = () => {
  const [monto, setMonto] = useState('');
  const [cuotas, setCuotas] = useState('');
  const [resultado, setResultado] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    const calcular = () => {
      const interes = (parseFloat(monto) * 3 * cuotas) / 100;
      const valorCuota = (parseFloat(monto) + interes) / cuotas;
      setResultado(valorCuota.toLocaleString());
    };
    calcular();
  };

  const handleMontoChange = (e) => {
    setMonto(e.target.value);
  };

  const handleCuotasChange = (e) => {
    setCuotas(e.target.value);
  };

  return (
    <div className="contenedor-credito">
      <h2>SIMULADOR DE CREDITO</h2>
      <form className="ingreso-credito" onSubmit={handleChange}>
        <input
          type="number"
          className="input-credito"
          value={monto}
          onChange={handleMontoChange}
          placeholder="Monto del Préstamo"
        />
        <label htmlFor="cuotas">Cuotas</label>
        <select name="Cuotas" id="cuotas" value={cuotas} onChange={handleCuotasChange}>
          <option value="6">6</option>
          <option value="12">12</option>
          <option value="18">18</option>
          <option value="24">24</option>
          <option value="30">30</option>
          <option value="36">36</option>
        </select>
        <button className="boton-credito" type="submit">
          Simular
        </button>
      </form>
      <div className="resultado-credito">
        <p className="resultado">Valor de cuota mensual: $ {resultado}</p>
      </div>
    </div>
  );
};

export default Credito;



