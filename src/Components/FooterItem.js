import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

const FooterItem = ({ footerItems }) => {
  return (
    <>
      {footerItems.map((item) => {
        const { id, name, Symbol } = item;
        return (
          <>
            <article key={id} className='footer-item'>
              <h5>{name}</h5>
              <span>
                <FiChevronDown className='arrow' />
              </span>
              {Symbol}
            </article>
            {/* <div></div> */}
          </>
        );
      })}
    </>
  );
};
export default FooterItem;
