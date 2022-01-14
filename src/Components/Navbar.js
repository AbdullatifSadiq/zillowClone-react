import React, { useState, useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { Links } from '../data';
import '../main.css';
import ShowLinks from './ShowLinks';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toogleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav id='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <button className='nav-toggle'>
            <FaBars
              style={{ color: '#fff', fontSize: '20px' }}
              className='nav-toggle'
              onClick={toogleLinks}
            />
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
        <div className='links-container show-container'>
          <ul className='links'>
            {Links.map((link) => {
              const { id, nav, url } = link;
              return (
                <li key={id}>
                  <a href={url}>{nav}</a>
                </li>
              );
            })}
          </ul>
        </div>
        {showLinks && <ShowLinks />}
      </div>
    </nav>
  );
};

export default Navbar;
