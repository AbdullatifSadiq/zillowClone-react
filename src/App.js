import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Service from './Components/Service';
import Footer from './Components/Footer';
import './main.css';

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
