import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Service from './Components/Service';
import Footer from './Components/Footer';
import HomesDisplay from './Components/HomesDisplay';

import './main.css';

function App() {
  return (
    <>
      <div className='container'>
        {/* <Navbar />
        <Hero />
        <Service />
        <Footer /> */}
        <HomesDisplay/>
      </div>
    </>
  );
}

export default App;
