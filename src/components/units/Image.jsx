import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ source, alt, className }) => (
  <img src={source} alt={alt} className={className} />
);

Image.defaultProps = {
  alt: '',
  className: '',
};

Image.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  source: PropTypes.string.isRequired,
};

export default Image;
