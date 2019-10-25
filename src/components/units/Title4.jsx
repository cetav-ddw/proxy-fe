import React from 'react';
import PropTypes from 'prop-types';

function Title4({ variant, children }) {
  return <h4 className={variant}>{children}</h4>;
}

Title4.defaultProps = {
  variant: ''
};

Title4.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Title4;
