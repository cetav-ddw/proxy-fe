import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ inner, className }) => (
  <p className={className}>{inner}</p>
);

Paragraph.defaultProps = {
  className: '',
};

Paragraph.propTypes = {
  className: PropTypes.string,
  inner: PropTypes.string.isRequired,
};

export default Paragraph;
