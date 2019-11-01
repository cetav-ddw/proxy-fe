import React from 'react';
import PropTypes from 'prop-types';
import EventDate from '../event-date';
import HeroBanner from '../hero-banner';
import Nav from '../nav';
import './header.scss';

const Header = ({ imageSrc }) => (
  <header className="header">
    <EventDate />
    {imageSrc && <HeroBanner imageSrc={imageSrc} />}
    <Nav />
  </header>
);

Header.defaultProps = {
  imageSrc: ''
};

Header.propTypes = {
  imageSrc: PropTypes.string
};

export default Header;
