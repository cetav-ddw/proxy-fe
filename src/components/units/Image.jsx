import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ source, alt, variant }) => (
  <img src={source} alt={alt} className={variant} />
);

Image.defaultProps = {
  alt: '',
  variant: '',
};

Image.propTypes = {
  alt: PropTypes.string,
  variant: PropTypes.string,
  source: PropTypes.string.isRequired,
};

export default Image;
