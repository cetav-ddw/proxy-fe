import React from 'react';
import SEO from '../components/seo';
import Header from '../components/layouts/header';
import '../scss/styles.scss';

const titlePage = 'home';

const IndexPage = () => (
  <>
    <SEO title={titlePage} />
    <Header pageName={titlePage} />
  </>
);

export default IndexPage;
