import React from 'react';
import PropTypes from 'prop-types';

function Title1({ className, inner }) {
  return <h1 className={className}>{inner}</h1>;
}

Title1.defaultProps = {
  className: '',
};

Title1.propTypes = {
  className: PropTypes.string,
  inner: PropTypes.string.isRequired,
};
export default Title1;
