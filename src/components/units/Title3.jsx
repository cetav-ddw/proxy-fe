import React from 'react';
import PropTypes from 'prop-types';

function Title3({ variant, children }) {
  return <h3 className={variant}>{children}</h3>;
}

Title3.defaultProps = {
  variant: ''
};

Title3.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Title3;
