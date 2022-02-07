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

export const HomesForRent = [
  {
    id:20,
    img:'https://photos.zillowstatic.com/fp/ca76b2e8c896037464e94f83c3efaaea-p_e.jpg',
    price:'$2,050',
    beds: 2,
    baths:1,
    address:'76 LITTLE BLACKTAIL RD',
    city:'CAREYWOOD',
    state:'ID',
    zip:83809,
  },
  {
    id:21,
    img:'https://photos.zillowstatic.com/fp/d1c5c207d573ccee8bbfed7bbf06774c-p_e.jpg',
    price:'$3,550',
    beds: 2,
    baths:1,
    address:'76 LITTLE BLACKTAIL RD',
    city:'CAREYWOOD',
    state:'ID',
    zip:83809,
  },
  {
    id:22,
    img:'https://photos.zillowstatic.com/fp/1da99ee239e4c03e1f1fb8e657d349b6-p_e.jpg',
    price:'$4,550',
    beds: 2,
    baths:1,
    address:'76 LITTLE BLACKTAIL RD',
    city:'CAREYWOOD',
    state:'ID',
    zip:83809,
  },
  {
    id:23,
    img:'https://photos.zillowstatic.com/fp/36b37a368492658e91c91403e1bcc96d-p_e.jpg',
    price:'$5,550',
    beds: 2,
    baths:1,
    address:'76 LITTLE BLACKTAIL RD',
    city:'CAREYWOOD',
    state:'ID',
    zip:83809,
  },
  {
    id:24,
    img:'https://photos.zillowstatic.com/fp/00e0ef87f09476526a79ab5e34eb5317-p_e.jpg',
    price:'3,105',
    beds: 2,
    baths:1,
    address:'76 LITTLE BLACKTAIL RD',
    city:'CAREYWOOD',
    state:'ID',
    zip:83809,
  },
  {
    id:25,
    img:'https://photos.zillowstatic.com/fp/dbb22740fa48c1607d903ec2c8f1d776-p_e.jpg',
    price:'$4,250',
    beds: 2,
    baths:1,
    address:'76 LITTLE BLACKTAIL RD',
    city:'CAREYWOOD',
    state:'ID',
    zip:83809,
  },
  {
    id:26,
    img:'https://photos.zillowstatic.com/fp/6754b60d08af9a52c28eb710681784c8-p_e.jpg',
    price:'$2,350',
    beds: 2,
    baths:1,
    address:'76 LITTLE BLACKTAIL RD',
    city:'CAREYWOOD',
    state:'ID',
    zip:83809,
  },
  {
    id:27,
    img:'https://photos.zillowstatic.com/fp/7150d54ac73468c4b5c34c9e6dd698af-p_e.jpg',
    price:'$5,550',
    beds: 2,
    baths:1,
    address:'76 LITTLE BLACKTAIL RD',
    city:'CAREYWOOD',
    state:'ID',
    zip:83809,
  },
  {
    id:28,
    img:'https://photos.zillowstatic.com/fp/d0e016a1358e5a5667f780bb4b7fb6fe-p_e.jpg',
    price:'$4,650',
    beds: 2,
    baths:1,
    address:'76 LITTLE BLACKTAIL RD',
    city:'CAREYWOOD',
    state:'ID',
    zip:83809,
  },  {
    id:29,
    img:'https://photos.zillowstatic.com/fp/55ac0e9ac975438b19c5d8ae85a988bf-p_e.jpg',
    price:'$3,980',
    beds: 2,
    baths:1,
    address:'76 LITTLE BLACKTAIL RD',
    city:'CAREYWOOD',
    state:'ID',
    zip:83809,
  }

]

export const HomesForSale = [
  {
    id:20,
    img:'https://photos.zillowstatic.com/fp/ca76b2e8c896037464e94f83c3efaaea-p_e.jpg',
    price:'$1550',
    beds: 2,
    baths:1,
    address:'76 LITTLE BLACKTAIL RD',
    city:'CAREYWOOD',
    state:'ID',
    zip:83809,
  },
  {
    id:21,
    img:'https://photos.zillowstatic.com/fp/d1c5c207d573ccee8bbfed7bbf06774c-p_e.jpg',
    price:'$1550',
    beds: 2,
    baths:1,
    address:'76 LITTLE BLACKTAIL RD',
    city:'CAREYWOOD',
    state:'ID',
    zip:83809,
  },
  {
    id:22,
    img:'https://photos.zillowstatic.com/fp/1da99ee239e4c03e1f1fb8e657d349b6-p_e.jpg',
    price:'$1550',
    beds: 2,
    baths:1,
    address:'76 LITTLE BLACKTAIL RD',
    city:'CAREYWOOD',
    state:'ID',
    zip:83809,
  },
  {
    id:23,
    img:'https://photos.zillowstatic.com/fp/36b37a368492658e91c91403e1bcc96d-p_e.jpg',
    price:'$1550',
    beds: 2,
    baths:1,
    address:'76 LITTLE BLACKTAIL RD',
    city:'CAREYWOOD',
    state:'ID',
    zip:83809,
  },
  {
    id:24,
    img:'https://photos.zillowstatic.com/fp/00e0ef87f09476526a79ab5e34eb5317-p_e.jpg',
    price:'$1550',
    beds: 2,
    baths:1,
    address:'76 LITTLE BLACKTAIL RD',
    city:'CAREYWOOD',
    state:'ID',
    zip:83809,
  },
  {
    id:25,
    img:'https://photos.zillowstatic.com/fp/dbb22740fa48c1607d903ec2c8f1d776-p_e.jpg',
    price:'$1550',
    beds: 2,
    baths:1,
    address:'76 LITTLE BLACKTAIL RD',
    city:'CAREYWOOD',
    state:'ID',
    zip:83809,
  },
  {
    id:26,
    img:'https://photos.zillowstatic.com/fp/6754b60d08af9a52c28eb710681784c8-p_e.jpg',
    price:'$1550',
    beds: 2,
    baths:1,
    address:'76 LITTLE BLACKTAIL RD',
    city:'CAREYWOOD',
    state:'ID',
    zip:83809,
  },
  {
    id:27,
    img:'https://photos.zillowstatic.com/fp/7150d54ac73468c4b5c34c9e6dd698af-p_e.jpg',
    price:'$1550',
    beds: 2,
    baths:1,
    address:'76 LITTLE BLACKTAIL RD',
    city:'CAREYWOOD',
    state:'ID',
    zip:83809,
  },
  {
    id:28,
    img:'https://photos.zillowstatic.com/fp/d0e016a1358e5a5667f780bb4b7fb6fe-p_e.jpg',
    price:'$1550',
    beds: 2,
    baths:1,
    address:'76 LITTLE BLACKTAIL RD',
    city:'CAREYWOOD',
    state:'ID',
    zip:83809,
  },  {
    id:29,
    img:'https://photos.zillowstatic.com/fp/55ac0e9ac975438b19c5d8ae85a988bf-p_e.jpg',
    price:'$1550',
    beds: 2,
    baths:1,
    address:'76 LITTLE BLACKTAIL RD',
    city:'CAREYWOOD',
    state:'ID',
    zip:83809,
  }

]