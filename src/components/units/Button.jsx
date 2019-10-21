import React from 'react';
import PropTypes from 'prop-types';
// un btn siempre ejecuta un evento
const Button = ({ children, variant, handleClickbtn }) => (
  <button
    onClick={handleClickbtn}
    type="button"
    className={variant}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string.isRequired,
  handleClickbtn: PropTypes.func.isRequired,
};

export default Button;
