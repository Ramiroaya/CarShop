import React from 'react';
import { legalText } from '../../Data/legalText.js';
import Title from '../login/Title';
import './legales.css';

const Legales = () => {
  

  return (
    <div className='contenedor-legal'>
      <Title className='texto' text={legalText.text}/>
    </div>
  );
};

export default Legales;
