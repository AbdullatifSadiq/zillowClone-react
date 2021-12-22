import React, { useState } from 'react';
import { Services } from '../data';
import '../main.css';
import ServiceCard from './ServiceCard';

const Service = () => {
  const [services, setServices] = useState(Services);
  return (
    <div className='services'>
      <div className='title'>
        <h3>
          Whether you're buying, selling or renting, we can help you move
          forward.
        </h3>
      </div>
      <div>
        <ServiceCard services={services} />
      </div>
    </div>
  );
};

export default Service;
