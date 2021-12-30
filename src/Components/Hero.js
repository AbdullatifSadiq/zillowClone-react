import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='center-content'>
        <h3>Change starts here</h3>
        <div className='search {{}}'>
          <input
            className='search-box'
            type='text'
            placeholder='Address, neighborhood, city, ZIP'
          />
          <FaSearch className='icon' />
          <div
            className='search-icon'
            style={{
              background: '#fff',
              width: '17%',
              height: '3.4rem',
              borderTopRightRadius: '0.3rem',
              borderEndEndRadius: '0.3rem',
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
