import React from 'react';
import SEO from '../components/seo';
import MainLayout from '../components/layouts/MainLayout';
import '../scss/styles.scss';

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
  </>
);

export default Pabellon;
