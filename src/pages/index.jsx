import React from 'react';
import SEO from '../components/seo';
import MainLayout from '../components/layouts/MainLayout';
import '../scss/styles.scss';

const titlePage = 'Inicio';

const IndexPage = () => (
  <>
    <SEO title={titlePage} />
    <MainLayout
      videoOpt="main.mp4"
      mainContent={
        <p>modalidades component</p>
      }
      content={
        <p>works</p>
      }
    />
  </>
);

export default IndexPage;
