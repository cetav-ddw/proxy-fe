import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/styles.scss';

function Title2({ inner }) {
  return <h2>{inner}</h2>;
}

Title2.propTypes = {
  inner: PropTypes.string.isRequired,
};
export default Title2;
