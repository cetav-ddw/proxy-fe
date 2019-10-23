import React from 'react';
import SEO from '../components/seo';
import MainLayout from '../components/layouts/MainLayout';
import '../scss/styles.scss';

const titlePage = 'Sinestesia';

const Sinestesia = () => (
  <>
    <SEO title={titlePage} />
    <MainLayout
      videoOpt="sinestesia.mp4"
      mainContent={
        <p>Contenido</p>
      }
      content={
        <p>requisitos</p>
      }
    />
  </>
);

export default Sinestesia;
