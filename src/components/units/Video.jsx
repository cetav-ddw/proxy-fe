import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ source, className, poster }) => (
  <video className={className} poster={poster} autoPlay muted loop>
    <source src={source} type="video/mp4" />
  </video>
);


Video.propTypes = {
  source: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Video;
