import React from 'react';
import PropTypes from 'prop-types';
import './layout.scss';

const Header = ({ head, sections, allies }) => (
  <>
    <header className="header">
      {head}
    </header>
    {sections}
    <footer className="footer">
      {allies}
    </footer>
  </>
);

Header.propTypes = {
  head: PropTypes.node.isRequired,
  sections: PropTypes.node.isRequired,
  allies: PropTypes.node.isRequired,
};


export default Header;
