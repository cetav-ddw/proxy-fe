import React from 'react';
import SEO from '../components/seo';
import MainLayout from '../components/layouts/MainLayout';
import Footer from '../components/sections/footer/index';
import '../scss/styles.scss';

const titlePage = 'sinestesia';

const Sinestesia = () => (
  <>
    <SEO title={titlePage} />
    <MainLayout
      videoOpt="sinestesia.mp4"
      mainContent={
        <p>info de sinestesia component</p>
      }
      content={
        <p>requisitos</p>
      }
    />
    <Footer />
  </>
);

export default Sinestesia;
