import React from 'react';
import { legalText } from '../../Data/legalText.js';

const Legales = () => {
  const texto = legalText;

  return (
    <div>
      <p>{texto.text}</p>
    </div>
  );
};

export default Legales;
