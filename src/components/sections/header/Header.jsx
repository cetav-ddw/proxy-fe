import React from 'react';
import PropTypes from 'prop-types';
import EventData from '../eventDate/EventDate';
import HeroBanner from '../herobanner/HeroBanner';
import Nav from '../nav/Nav';
import './header.scss';

const Header = ({ videoSrc, useVideo }) => (
  <header className="header">
    <EventData />
    {useVideo && <HeroBanner videoSrc={videoSrc} /> }
    <Nav />
  </header>
);

Header.defaultProps = {
  useVideo: false,
};

Header.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  useVideo: PropTypes.bool,
};

export default Header;
