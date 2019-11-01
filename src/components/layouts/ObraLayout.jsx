import React from 'react';
import PropTypes from 'prop-types';
import Header from '../sections/header';
import Footer from '../sections/footer';

const obraLayout = ({ mainContent, content, imgOpt }) => (
  <>
    <Header ImageSrc={imgOpt} />
    {mainContent}
    {content}
    <Footer />
  </>
);

obraLayout.defaultProps = {
  imgOpt: ''
};

obraLayout.propTypes = {
  mainContent: PropTypes.node,
  content: PropTypes.node,
  imgOpt: PropTypes.string
};

export default obraLayout;
