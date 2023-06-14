import React from 'react';
import '../css/autosIndex.css';
import Banner from '../components/banner';
import AutosIndex from '../components/componentess/autosIndex';
import Header from '../components/Header';
import Footer from '../components/Footer';



const Vistas = () => {
    return (
      <div className='vistas' >
        <Header/>
        <Banner />
        <AutosIndex />
        <Footer/>
  
      </div>
    )
  }
  export default Vistas