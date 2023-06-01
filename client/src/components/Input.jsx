import React from 'react';
import '../css/Input.css';

const Input = ({ atributo, handleChange, param }) => {
  return (
    <div>
      <input
        id={atributo.id}
        name={atributo.name}
        placeholder={atributo.placeholder}
        type={atributo.type}
        onChange={ (e) => handleChange(e.target.name, e.target.value)}
        className='regular-style'
      />
    </div>
  )
}

export default Input;