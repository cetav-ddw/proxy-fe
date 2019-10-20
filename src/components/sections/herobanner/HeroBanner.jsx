import React from 'react';
import PropTypes from 'prop-types';
import Video from '../../units/Video';
import './herobanner.scss';

const HeroBanner = ({ pathVideo }) => (
  <div className="herobanner">
    <Video className="herobanner__video" poster="bg-footer-h.jpg" source={pathVideo} />
  </div>
);

HeroBanner.propTypes = {
  pathVideo: PropTypes.string.isRequired,
};

export default HeroBanner;
