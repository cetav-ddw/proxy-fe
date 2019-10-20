import React from 'react';
import PropTypes from 'prop-types';
import './btn.scss';

const NavBtn = ({ toggleNav, displayNav }) => {
  const handleClick = () => displayNav();

  return (
    <button onClick={handleClick} type="button" className="btn-nav" id="open">
      <span className="btn-nav__text">
        {
          toggleNav ? 'Cerrar' : 'Menú'
        }
      </span>
      <span className="circle-animation">
        <svg className="btn-nav__svg " height="60" width="60">
          <circle className="progress-inner" cx="35" cy="35" r="13" strokeWidth="4" fill="none" stroke="#16E024" />
        </svg>
      </span>
    </button>
  );
};

NavBtn.propTypes = {
  toggleNav: PropTypes.bool.isRequired,
  displayNav: PropTypes.func.isRequired,
};

export default NavBtn;
