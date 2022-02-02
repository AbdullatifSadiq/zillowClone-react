import React from 'react';
import {
  FaSlash,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
} from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

export const Links = [
  {
    id: 0,
    nav: '',
    url: '/',
    linkSymbol: <FiChevronDown />,
  },
  {
    id: 1,
    nav: 'Buy',
    url: '/homesForSale',
    linkSymbol: <FiChevronDown />,
  },
  {
    id: 2,
    nav: 'Rent',
    url: '/homesForRent',
    linkSymbol: <FiChevronDown />,
  },
  {
    id: 3,
    nav: 'Sell',
    url: '/Error',
    linkSymbol: <FiChevronDown />,
  },
  {
    id: 4,
    nav: 'Home Loans',
    url: '/Error',
    linkSymbol: <FiChevronDown />,
  },
  {
    id: 5,
    nav: 'Agent Finder',
    url: '/Error',
    linkSymbol: <FiChevronDown />,
  },
  {
    id: 6,
    nav: 'Manage Rentals',
    url: '/Error',
    // linkSymbol: <FiChevronDown />,
  },
  {
    id: 7,
    nav: 'Advertise',
    url: '/Error',
    // linkSymbol: <FiChevronDown />,
  },
  {
    id: 8,
    nav: 'Help',
    url: '/Error',
    // linkSymbol: <FiChevronDown />,
  },
  // {
  //   id: 9,
  //   nav: 'Sign in',
  //   url: '/',
  // },
];

export const Services = [
  {
    id: 9,
    img: 'https://www.zillowstatic.com/s3/homepage/static/Buy_a_home.webp',
    title: ' Buy a home',
    text: 'Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.',
    action: 'Search homes',
  },
  {
    id: 10,
    img: 'https://www.zillowstatic.com/s3/homepage/static/Sell_a_home.webp',
    title: ' Sell a home',
    text: 'No matter what path you take to sell your home, we can help you navigate a successful sale.',
    action: 'See your options',
  },
  {
    id: 11,
    img: 'https://www.zillowstatic.com/s3/homepage/static/Rent_a_home.webp',
    title: ' Rent a home',
    text: 'We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.',
    action: 'Find rentals',
  },
];

export const MainFooterLinks = [
  {
    id: 12,
    name: 'Real Estate',
    Symbol: <FaSlash className='bar fa-0.5x' />,
  },
  {
    id: 13,
    name: 'Rentals',
    Symbol: '',
  },
  {
    id: 14,
    name: 'Mortgage Rates',
    Symbol: <FaSlash className='bar' />,
  },
  {
    id: 15,
    name: 'Browse Homes',
    Symbol: ' ',
  },
];
export const SocialMediaLinks = [
  {
    id: 16,
    name: 'Facebook',
    socialSymbol: <FaFacebook />,
  },
  {
    id: 17,
    name: 'Instagram',
    socialSymbol: <FaInstagram />,
  },
  {
    id: 18,
    name: 'TikTok',
    socialSymbol: <FaTiktok />,
  },
  {
    id: 19,
    name: 'Twitter',
    socialSymbol: <FaTwitter />,
  },
];
