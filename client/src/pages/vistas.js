import React from 'react';
import '../css/autosIndex.css';
import Banner from '../components/banner';
import AutosIndex from '../components/componentess/autosIndex';
import NavBarHeader from '../components/navBarHeader/NavBarHeader';
import NavBarFooter from '../components/navBarFooter/NavBarFooter';



const Vistas = () => {
    return (
      <div className='vistas' >
        <NavBarHeader/>
        <Banner />
        <AutosIndex />
        <NavBarFooter/>
  
      </div>
    )
  }
  export default Vistas