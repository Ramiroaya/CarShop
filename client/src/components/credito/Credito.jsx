import React, { useState } from 'react';
import Title from '../login/Title';

const Credito = () => {
  const [monto, setMonto] = useState('');
  const [cuotas, setCuotas] = useState('');
  const [resultado, setResultado] =useState('');

  const handleChange = (e) => {
    e.preventDefault();
    const calcular = ()=> {
      let interes= monto * 5 / cuotas;
    }
  };

  const handleMontoChange = (e) => {
    setMonto(e.target.value);
  };

  const handleCuotasChange = (e) => {
    setCuotas(e.target.value);
  };

  return (
    <div className="contenedor-credito">
      <Title text="Simula tu Prestamo en Pesos" />
      <form className="ingreso-credito" onSubmit={handleChange}>
        <input
          type="number"
          className="input-credito"
          value={monto}
          onChange={handleMontoChange}
          placeholder="Monto del Prestamo"
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
    </div>
  );
};

export default Credito;
