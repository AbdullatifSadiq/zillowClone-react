import React from 'react';
// import Services from '../data';

const ServiceCard = ({ id, img, title, text, action }) => {
  return (
    <>
      <article className='service-card'>
        <img src={img} alt={title} />
      </article>
    </>
  );
};

export default ServiceCard;
