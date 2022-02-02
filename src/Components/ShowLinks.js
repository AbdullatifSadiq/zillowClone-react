import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Links } from '../data';
import { FiChevronDown } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';

const ShowLinks = ({ onClose }) => {
  // const [Close, setClose] = useState(false);

  return (
    <div className='links-page'>
      <div className='links-nav'>
        <div className='close-page'>
          <FiX
            style={{
              color: 'rgb(0, 106, 255)',
              fontSize: '2rem',
            }}
            onClick={onClose}
          />
        </div>
        <div className='mobile-links-logo'>
          <img
            style={{ alignSelf: 'center' }}
            src='https://s.zillowstatic.com/pfs/static/z-logo-default.svg'
            alt='zillow logo'
          />
        </div>
      </div>
      <div className='mobile-links-container'>
        {Links.map((link) => {
          const { id, nav, url, linkSymbol } = link;
          return (
            <div className='mobile-link-container'>
            
                <div className='mobile-link'>
                  <ul>
                    <li key={id}>
                      <Link to={url}>{nav}</Link>
                    </li>
                  </ul>
                </div>
                <div className='mobile-link-arrow'>{linkSymbol}</div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowLinks;
