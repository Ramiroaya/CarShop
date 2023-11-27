import React from 'react';
import '../css/index.css';
import Banner from '../components/banner';
import ComponentesIndex from '../components/componentesIndex';
import BlackFriday from '../components/blackFriday/BlackFriday';






const Home = () => {
  return (
    
      <div className='index' >   
        <BlackFriday/>
        <Banner />
        <ComponentesIndex />
      </div>
    
  )
}

export default Home;