import React from 'react';
import PropTypes from 'prop-types';

const Video = ({
  source,
  variant,
  poster,
  isMuted,
  autoPlay,
  loop,
  controls
}) => (
  <video
    className={variant}
    poster={poster}
    autoPlay={autoPlay}
    muted={isMuted}
    loop={loop}
    preload="auto"
    controls={controls}
  >
    <source src={source} type="video/mp4" />
  </video>
);

Video.defaultProps = {
  variant: '',
  isMuted: true,
  autoPlay: true,
  loop: true,
  controls: false
};

Video.propTypes = {
  source: PropTypes.string.isRequired,
  variant: PropTypes.string,
  poster: PropTypes.string.isRequired,
  isMuted: PropTypes.bool,
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
  controls: PropTypes.bool
};

export default Video;
