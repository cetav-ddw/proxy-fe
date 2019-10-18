import React from 'react';
import PropTypes from 'prop-types';

function Title2({ className, inner }) {
  return <h2 className={className}>{inner}</h2>;
}

Title2.defaultProps = {
  className: '',
};

Title2.propTypes = {
  className: PropTypes.string,
  inner: PropTypes.string.isRequired,
};

export default Title2;
