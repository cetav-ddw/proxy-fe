import React from 'react';
import PropTypes from 'prop-types';
import Header from '../sections/header';
import Footer from '../sections/footer';

const obraLayout = ({ mainContent, content, videoOpt }) => (
  <>
    <Header videoSrc={videoOpt} />
    {mainContent}
    {content}
    <Footer />
  </>
);

obraLayout.defaultProps = {
  videoOpt: ''
};

obraLayout.propTypes = {
  mainContent: PropTypes.node,
  content: PropTypes.node,
  videoOpt: PropTypes.string
};

export default obraLayout;
