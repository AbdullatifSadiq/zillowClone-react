import React from 'react';
// import { FaAngleDown } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const FooterItem = ({ footerItems }) => {
  return (
    <>
      {footerItems.map((item) => {
        const { id, name, Symbol } = item;
        return (
          <article key={id} className='footer-item'>
            <h5>{name}</h5>
            <span>
              {/* <FaAngleDown className='arrow' /> */}
              <FiChevronDown className='arrow' />
            </span>
            {Symbol}
          </article>
          // <h4>Hello world</h4>
        );
      })}
    </>
  );
};
export default FooterItem;
