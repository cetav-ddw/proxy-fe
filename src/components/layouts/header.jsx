import React from 'react';
import DateHeader from '../sections/dateheader/DateHeader';
import HeroBanner from '../sections/herobanner/HeroBanner';
import './layout.scss';

const Header = () => (
  <header className="header">
    <DateHeader />
    <HeroBanner />
  </header>
);

export default Header;
