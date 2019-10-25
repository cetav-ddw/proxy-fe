import React from 'react';
import PropTypes from 'prop-types';
import Video from '../../units/Video';
import './herobanner.scss';

const HeroBanner = ({ videoSrc }) => (
  <div className="herobanner">
    <Video
      variant="herobanner__video"
      poster="bg-footer-h.jpg"
      source={videoSrc}
    />
  </div>
);

HeroBanner.propTypes = {
  videoSrc: PropTypes.string.isRequired,
};

export default HeroBanner;
