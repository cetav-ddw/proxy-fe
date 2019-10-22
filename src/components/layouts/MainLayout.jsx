import React from 'react';
import PropTypes from 'prop-types';
import Header from '../sections/header';
import Footer from '../sections/footer';

// aquí estará el componente de Footer (se usa en todos los pages)

const MainLayout = (
  {
    mainContent, content, videoOpt,
  },
) => (
  <>
    <Header videoSrc={videoOpt} />
    <div>
      redes aqui va ir el componente de redes sociales
    </div>
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
