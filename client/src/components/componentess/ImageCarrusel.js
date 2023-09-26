import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import muestraImagen1 from '../../images/fiestaImag/images2.jpg';
import muestraImagen2 from '../../images/fiestaImag/focus.webp';
import muestraImagen3 from '../../images/fiestaImag/peugeop308.webp';
import muestraImagen4 from '../../images/fiestaImag/images3.jpg';
import muestraImagen5 from '../../images/fiestaImag/volswaguen.webp';

import '../../css/autosIndex.css';

const ImageCarrusel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const imageStyle = {
    width: '600px', // Aumenta el ancho
    height: '400px', // Aumenta la altura
  };

  return (
    <div className="image-carrusel">
      <Slider ref={sliderRef} {...settings}>
        <div>
          <img src={muestraImagen1} alt="Imagen 1" style={imageStyle} />
        </div>
        <div>
          <img src={muestraImagen2} alt="Imagen 2" style={imageStyle} />
        </div>
        <div>
          <img src={muestraImagen3} alt="Imagen 3" style={imageStyle} />
        </div>
        <div>
          <img src={muestraImagen4} alt="Imagen 4" style={imageStyle} />
        </div>
        <div>
          <img src={muestraImagen5} alt="Imagen 5" style={imageStyle} />
        </div>
      </Slider>
      <div className="button-container">
        <button onClick={prevSlide} className="hidden">Anterior</button>
        <button onClick={nextSlide} className="hidden">Siguiente</button>
      </div>
    </div>
  );
};

export default ImageCarrusel;