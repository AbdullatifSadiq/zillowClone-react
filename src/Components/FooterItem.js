import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { MainFooterLinks } from '../data';


const FooterItem = ({ footerItems }) => {
  return (
    <>
      {MainFooterLinks.map((item) => {
        const { id, name, Symbol } = item;
        return (
        
            <article key={id} className='footer-item'>
              <h5>{name}</h5>
              <span>
                <FiChevronDown className='arrow' />
              </span>
              {Symbol}
            </article>
          
        );
      })}
    </>
  );
};
export default FooterItem;
