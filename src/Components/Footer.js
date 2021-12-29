import React, { useState } from 'react';
import FooterItem from './FooterItem';
import { MainFooterLinks } from '../data';
import '../main.css';

const Footer = () => {
  const [footer, setFooter] = useState(MainFooterLinks);
  return (
    <div className='footer'>
      <div className='footerLinks'>
        <FooterItem footerItems={footer} />
      </div>
    </div>
  );
};

export default Footer;
