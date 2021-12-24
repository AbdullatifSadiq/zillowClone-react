import React from 'react';

const FooterItem = (footerItems) => {
  return (
    <>
      {footerItems.map((item) => {
        const { id, name, symbol } = item;
        return (
          <div key={id} className='footer-item'>
            <h4>{name}</h4>
            <span>{symbol}</span>
          </div>
        );
      })}
    </>
  );
};
export default FooterItem;
