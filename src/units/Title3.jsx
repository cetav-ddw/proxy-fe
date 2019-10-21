import React from 'react';
import PropTypes from 'prop-types';

function Title3({ className, inner }) {
  return <h3 className={className}>{inner}</h3>;
}

Title3.defaultProps = {
  className: '',
};

Title3.propTypes = {
  className: PropTypes.string,
  inner: PropTypes.string.isRequired,
};

export default Title3;
