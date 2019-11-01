import React from 'react';
import PropTypes from 'prop-types';
import Header from '../sections/header';
import Footer from '../sections/footer';

const Layout = ({ children, videoOpt }) => (
  <>
    <Header videoSrc={videoOpt} />
    {children}
    <Footer />
  </>
);

Layout.defaultProps = {
  videoOpt: ''
};

Layout.propTypes = {
  mainContent: PropTypes.node,
  content: PropTypes.node,
  videoOpt: PropTypes.string
};

export default Layout;
