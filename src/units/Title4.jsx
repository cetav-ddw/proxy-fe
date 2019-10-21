import React from 'react';
import PropTypes from 'prop-types';

function Title4({ className, inner }) {
  return <h4 className={className}>{inner}</h4>;
}

Title4.defaultProps = {
  className: '',
};

Title4.propTypes = {
  className: PropTypes.string,
  inner: PropTypes.string.isRequired,
};

export default Title4;
