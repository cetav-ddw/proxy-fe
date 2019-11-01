import React from 'react';
import PropTypes from 'prop-types';
import Header from '../sections/header';
import SocialMedia from '../sections/social-media';
import Footer from '../sections/footer';

const MainLayout = ({ mainContent, content, videoOpt }) => (
  <>
    <Header videoSrc={videoOpt} />
    <SocialMedia />
    
    {content}
    {mainContent}
    <Footer />
  </>
);

MainLayout.defaultProps = {
  videoOpt: ''
};

MainLayout.propTypes = {
  mainContent: PropTypes.node,
  content: PropTypes.node,
  videoOpt: PropTypes.string
};

export default MainLayout;
