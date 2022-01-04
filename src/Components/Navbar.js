import React, { useState, useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { Links } from '../data';
import '../main.css';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav id='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <button className='nav-toggle'>
            <FaBars style={{ color: '#fff', fontSize: '20px' }} />
          </button>
          <span className='logo'>
            <img
              style={{ alignSelf: 'center' }}
              src='https://s.zillowstatic.com/pfs/static/z-logo-white.svg'
              alt='zillow logo'
            />
          </span>
          <span>
            <a href='/' className='links'>
              Sign In
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
