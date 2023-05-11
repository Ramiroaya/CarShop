import React from 'react';
import bannerImage from '../images/bannerlogogrande.png';
import '../css/banner.css'

const Banner = () => {
  return (
    <div>
      <img src={bannerImage} alt="CAR SHOP" className='banner-style' />
    </div>
  )
}

export default Banner