import React from 'react';
import PropTypes from 'prop-types';
import EventDate from '../eventDate';
import HeroBanner from '../herobanner';
import Nav from '../nav';
import './header.scss';

const Header = ({ videoSrc }) => (
  <header className="header">
    <EventDate />
    {videoSrc && <HeroBanner videoSrc={videoSrc} />}
    <Nav />
  </header>
);

Header.defaultProps = {
  videoSrc: ''
};

Header.propTypes = {
  videoSrc: PropTypes.string
};

export default Header;
