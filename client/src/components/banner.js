import React from 'react';
import '../css/banner.css';

import esquina from '../images/mercedesHome.mp4';


const Banner = () => {
  return (
    <div className='banner-container'>
      <div className='banner-style'>
        <video autoPlay muted loop playsInline className="banner-video">
          <source src={esquina} type="video/mp4" />
          Tu navegador no admite la reproducción de videos.
        </video>       
      </div>
    </div>
  );
}

export default Banner;



