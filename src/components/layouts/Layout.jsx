import React from 'react';
import PropTypes from 'prop-types';
import Header from '../sections/header';
import Footer from '../sections/footer';

const Layout = ({ children, imgOpt }) => (
  <>
    <Header imageSrc={imgOpt} />
    {children}
    <Footer />
  </>
);

Layout.defaultProps = {
  imgOpt: ''
};

Layout.propTypes = {
  mainContent: PropTypes.node,
  content: PropTypes.node,
  imgOpt: PropTypes.string
};

export default Layout;
