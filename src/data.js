import React from 'react';
import {
  FaSlash,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
} from 'react-icons/fa';

export const Links = [
  {
    id: 1,
    nav: 'Buy',
    url: '/',
  },
  {
    id: 2,
    nav: 'Sell',
    url: '/',
  },
  {
    id: 3,
    nav: 'Rent',
    url: '/',
  },
  {
    id: 4,
    nav: 'Home Loans',
    url: '/',
  },
  {
    id: 5,
    nav: 'Agent Finder',
    url: '/',
  },
  {
    id: 6,
    nav: 'Manage Rentals',
    url: '/',
  },
  {
    id: 7,
    nav: 'Advertise',
    url: '/',
  },
  {
    id: 8,
    nav: 'Help',
    url: '/',
  },
  {
    id: 9,
    nav: 'Sign in',
    url: '/',
  },
];

export const Services = [
  {
    id: 1,
    img: 'https://www.zillowstatic.com/s3/homepage/static/Buy_a_home.webp',
    title: ' Buy a home',
    text: 'Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.',
    action: 'Search homes',
  },
  {
    id: 1,
    img: 'https://www.zillowstatic.com/s3/homepage/static/Sell_a_home.webp',
    title: ' Sell a home',
    text: 'No matter what path you take to sell your home, we can help you navigate a successful sale.',
    action: 'See your options',
  },
  {
    id: 1,
    img: 'https://www.zillowstatic.com/s3/homepage/static/Rent_a_home.webp',
    title: ' Rent a home',
    text: 'We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.',
    action: 'Find rentals',
  },
];

export const MainFooterLinks = [
  {
    id: 1,
    name: 'Real Estate',
    Symbol: <FaSlash className='bar fa-0.5x' />,
  },
  {
    id: 2,
    name: 'Rentals',
    Symbol: '',
  },
  {
    id: 3,
    name: 'Mortgage Rates',
    Symbol: <FaSlash className='bar' />,
  },
  {
    id: 4,
    name: 'Browse Homes',
    Symbol: ' ',
  },
];
export const SocialMediaLinks = [
  {
    id: 1,
    name: 'Facebook',
    socialSymbol: <FaFacebook />,
  },
  {
    id: 2,
    name: 'Instagram',
    socialSymbol: <FaInstagram />,
  },
  {
    id: 3,
    name: 'TikTok',
    socialSymbol: <FaTiktok />,
  },
  {
    id: 4,
    name: 'Twitter',
    socialSymbol: <FaTwitter />,
  },
];
