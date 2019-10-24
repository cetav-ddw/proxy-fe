import React from 'react';
import SEO from '../components/seo';
import MainLayout from '../components/layouts/MainLayout';
import SinestesiaD from '../components/sections/sinestesiaDesc';
import '../scss/styles.scss';

const titlePage = 'Sinestesia';

const Sinestesia = () => (
  <>
    <SEO title={titlePage} />
    <MainLayout
      videoOpt="sinestesia.mp4"
      mainContent={
        <SinestesiaD />
      // <p>info de sinestesia component</p>
      }
      content={
        <p>requisitos</p>
      }
    />
  </>
);

export default Sinestesia;
