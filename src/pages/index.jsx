import React from 'react';
import SEO from '../components/seo';
import MainLayout from '../components/layouts/MainLayout';
import Modalidades from '../components/sections/modalidades/Modalidades';
import '../scss/styles.scss';

const titlePage = 'Inicio';

const IndexPage = () => (
  <>
    <SEO title={titlePage} />
    <MainLayout
      videoOpt="main.mp4"
      mainContent={
        <Modalidades />
      }
      content={
        <p>works</p>
      }
    />

  </>
);

export default IndexPage;
