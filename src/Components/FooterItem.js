import React from 'react';

const FooterItem = ({ footerItems }) => {
  return (
    <>
      {footerItems.map((item) => {
        const { id, name, symbol } = item;
        return (
          <article key={id} className='footer-item'>
            <h4>{name}</h4>
            <span>{symbol}</span>
          </article>
        );
      })}
    </>
  );
};
export default FooterItem;
