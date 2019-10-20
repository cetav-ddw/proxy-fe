import React from 'react';
import PropTypes from 'prop-types';

function Title2({ variant, children }) {
  return <h2 className={variant}>{children}</h2>;
}

Title2.defaultProps = {
  variant: '',
};

Title2.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Title2;
