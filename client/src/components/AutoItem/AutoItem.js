import React from 'react';

const AutoItem = ({ name, image, characteristics, link }) => {
  return (
    <div className="car-item">
      <a href={link}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{characteristics}</p>
      </a>
    </div>
  );
};

export default AutoItem;