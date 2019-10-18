import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/styles.scss';

function Title4({ inner }) {
  return <h4>{inner}</h4>;
}

Title4.propTypes = {
  inner: PropTypes.string.isRequired,
};

export default Title4;
