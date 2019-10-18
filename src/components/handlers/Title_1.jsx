import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/styles.scss';

function Title1({ inner }) {
  return <h1>{inner}</h1>;
}

Title1.propTypes = {
  inner: PropTypes.string.isRequired,
};
export default Title1;
