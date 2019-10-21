import React from 'react';
import SEO from '../components/seo';
import MainLayout from '../components/layouts/MainLayout';
import '../scss/styles.scss';
import Footer from '../components/sections/footer/index';

const titlePage = 'pabellon';

const Pabellon = () => (
  <>
    <SEO title={titlePage} />
    <MainLayout
      videoOpt="pabellon.mp4"
      mainContent={
        <p>info de pabellon</p>
      }
      content={
        <p>fechas importantes y info component</p>
      }
    />
    <Footer />
  </>
);

export default Pabellon;
