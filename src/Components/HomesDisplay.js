import React from 'react';
import { FaBars } from 'react-icons/fa';

const HomesDisplay = () => {
  return (
    <>
      <div className='search-nav'>
        <button className='nav-toggle'>
          <FaBars
            style={{
              color: '#006aff',
              fontSize: '20px',
            }}
            className='nav-toggle'
            // onClick={() => setShowLinks(true)}
          />
        </button>
        <span>
          <img
            style={{
              alignSelf: 'center',
              height: '25px',
              paddingInline: '0.5rem',
            }}
            src='https://s.zillowstatic.com/pfs/static/z-logo-icon.svg'
            alt='zillow logo'
          />
        </span>
        {/* <div> */}
        <input
          className='search-box-homes'
          type='text'
          placeholder='Location'
          style={{ height: '34px' }}
        />
        {/* </div> */}
        <span>
          <a
            href='/'
            className='links'
            style={{
              color: '#006aff',
              fontSize: '0.9rem',
              paddingInline: '0.6rem',
              fontFamily:
                'Open Sans, Adjusted Arial, Tahoma, Geneva, sans-serif !important',
            }}
          >
            Sign In
          </a>
        </span>
      </div>
      <div className='variables-nav'>
        <button className='rent-sale-btn'>For Rent</button>
        <button className='rent-sale-btn'>Price</button>
        <button className='rent-sale-btn'>More</button>
        <button className='rent-sale-btn' style={{ border: '0px' }}>
          Save search
        </button>
      </div>
      <div className='homes'>Home Components</div>
    </>
  );
};

export default HomesDisplay;
