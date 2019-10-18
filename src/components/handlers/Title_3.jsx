import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/styles.scss';

function Title3({ inner }) {
  return <h3>{inner}</h3>;
}

Title3.propTypes = {
  inner: PropTypes.string.isRequired,
};
export default Title3;
