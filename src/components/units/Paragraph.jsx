import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ children, variant }) => (
  <p className={variant}>{children}</p>
);

Paragraph.defaultProps = {
  variant: ''
};

Paragraph.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Paragraph;
