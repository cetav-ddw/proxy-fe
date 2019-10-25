import React from 'react';
import PropTypes from 'prop-types';

function Title1({ variant, children }) {
  return <h1 className={variant}>{children}</h1>;
}

Title1.defaultProps = {
  variant: ''
};

Title1.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Title1;
