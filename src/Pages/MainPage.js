import React from 'react';
import Hero from '../Components/Hero';
import Service from '../Components/Service';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

import '../main.css';

function App() {
  return (
    <>
      <div className='container'>
        <Navbar />
        <Hero />
        <Service />
        <Footer />
      </div>
    </>
  );
}

export default App;
