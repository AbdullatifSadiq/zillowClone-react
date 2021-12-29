import React from 'react';

const FooterItem = ({ footerItems }) => {
  return (
    <>
      {footerItems.map((item) => {
        const { id, name, Symbol } = item;
        return (
          <article key={id} className='footer-item'>
            <h5>{name}</h5>
            {/* <span>{Symbol}</span> */}
          </article>
          // <h4>Hello world</h4>
        );
      })}
    </>
  );
};
export default FooterItem;
