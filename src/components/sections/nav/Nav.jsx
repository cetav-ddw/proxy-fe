import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import './nav.scss';

const Nav = ({ toggleNav }) => (
  <div
    className={
      toggleNav ? 'nav-open' : 'wrapper-nav'
    }
  >
    <ul className="nav-list">
      <li className="nav-list__item">
        <Link to="/" className="nav-list__link">Inicio</Link>
      </li>
      <li className="nav-list__item">
        <Link to="/proxy" className="nav-list__link">Proxy</Link>
      </li>
      <li className="nav-list__item">
        <Link to="./sinestesia" className="nav-list__link">Sinestesia</Link>
      </li>
      <li className="nav-list__item">
        <Link to="./pabellon" className="nav-list__link">Pabellón</Link>
      </li>
    </ul>
  </div>
);


Nav.propTypes = {
  toggleNav: PropTypes.bool.isRequired,
};

export default Nav;
