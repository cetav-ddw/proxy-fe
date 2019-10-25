import React from 'react';
import PropTypes from 'prop-types';
import Header from '../sections/header';
import SocialMedia from '../sections/social-media';
import Footer from '../sections/footer';

const MainLayout = ({ mainContent, content, videoOpt }) => (
  <>
    <Header videoSrc={videoOpt} />
    <SocialMedia />
    <div>
      {mainContent}
    </div>
    <div>
      {content}
    </div>
    <Footer />
  </>
);

MainLayout.defaultProps = {
  videoOpt: '',
};

MainLayout.propTypes = {
  mainContent: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  videoOpt: PropTypes.string,
};

export default MainLayout;
