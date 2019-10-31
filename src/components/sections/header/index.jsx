import React from 'react';
import PropTypes from 'prop-types';
import EventDate from '../event-date';
import HeroBanner from '../hero-banner';
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
