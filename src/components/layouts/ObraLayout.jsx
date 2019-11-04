import React from 'react';
import PropTypes from 'prop-types';
import Header from '../sections/header';
import Footer from '../sections/footer';

const obraLayout = ({ children, imgOpt }) => (
  <>
    <Header ImageSrc={imgOpt} />
    {children}
    <Footer />
  </>
);

obraLayout.defaultProps = {
  imgOpt: ''
};

obraLayout.propTypes = {
  imgOpt: PropTypes.string
};

export default obraLayout;
