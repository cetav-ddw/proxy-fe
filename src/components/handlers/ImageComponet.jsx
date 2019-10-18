import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/styles.scss';

function ImgComponent({ source, alt }) {
  return <img src={source} alt={alt} />;
}

ImgComponent.propTypes = {
  source: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export default ImgComponent;
