import React from 'react';
import '../css/index.css';
import Banner from '../components/banner';
import ComponentesIndex from '../components/componentesIndex';
import Header from '../components/navBarHeader/Header';
import Footer from '../components/navBarFooter/Footer';






const Home = () => {
  return (
    
      <div className='index' >
        <Header/>
        <Banner />
        <ComponentesIndex />
        <Footer/>
      </div>
    
  )
}

export default Home;