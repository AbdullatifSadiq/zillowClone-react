import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const searchRef = useRef(null);

  const handleScroll = () => {
    if (searchRef.current.getBoundingClientRect().bottom < 0) {
      searchRef.current.classList = 'search-1';
    }
    if (window.pageYOffset === 0) {
      searchRef.current.classList = 'search-2';
    }
    console.log(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <section className='hero'>
      <div className='center-content'>
        <h3>Change starts here</h3>
        <div className='search-top'>
          <div className='search-1' ref={searchRef}>
            <input
              className='search-box'
              type='text'
              placeholder='Enter an address, neighborhood, city or ZIP Code'
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
      </div>
    </section>
  );
};
export default Hero;
