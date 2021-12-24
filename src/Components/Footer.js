import React, { useState } from 'react';
import FooterItem from './FooterItem';
import { MainFooterLinks } from '../data';
import '../main.css';

const Footer = () => {
  const [footer, setFooter] = useState(MainFooterLinks);
  return (
    <div className='footer'>
      <div className='footerLinks'>
        {/* <FooterItem /> */}
        <h1>Hello world</h1>
      </div>
    </div>
  );
};

export default Footer;
