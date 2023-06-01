import React from 'react';
import '../css/index.css';
import Banner from '../components/banner';
import ComponentesIndex from '../components/componentesIndex';
import Header from '../components/Header';
import Footer from '../components/Footer';




const Index = () => {
  return (
    <div className='index' >
      <Header/>
      <Banner />
      <ComponentesIndex />
      <Footer/>

    </div>
  )
}

export default Index;