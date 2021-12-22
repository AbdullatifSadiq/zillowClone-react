import React from 'react';
import { Services } from '../data';
import '../main.css';
import ServiceCard from './ServiceCard';

const Service = ({ ServiceCard }) => {
  return (
    <div className='services'>
      <h3>
        Whether you're buying, selling or renting, we can help you move forward.
      </h3>
      <div>
        {Services.map((service)=>{
          return <ServiceCard key={Services.id }><ServiceCard/>
        })}
        
      </div>
    </div>
  );
};

export default Service;
