import React from 'react';
import PropTypes from 'prop-types';
import Header from '../sections/header';
import SocialMedia from '../sections/social-media';
import Footer from '../sections/footer';

const MainLayout = ({ mainContent, content, imgOpt }) => (
  <>
    <Header imageSrc={imgOpt} />
    <SocialMedia />
    {mainContent}
    {content}
    <Footer />
  </>
);

MainLayout.defaultProps = {
  imgOpt: ''
};

MainLayout.propTypes = {
  mainContent: PropTypes.node,
  content: PropTypes.node,
  imgOpt: PropTypes.string
};

export default MainLayout;
