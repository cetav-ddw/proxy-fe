import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ inner, className }) => (
  <button type="button" className={className}>{inner}</button>
);

Button.propTypes = {
  inner: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
