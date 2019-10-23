import React from 'react';
import SEO from '../components/seo';
import MainLayout from '../components/layouts/MainLayout';
import SocialMedia from '../components/sections/social-media/index';
import '../scss/styles.scss';

const titlePage = 'Pabellón';

const Pabellon = () => (
  <>
    <SEO title={titlePage} />
    <MainLayout
      videoOpt="pabellon.mp4"
      mainContent={
        <SocialMedia />
      }
      content={
        <p>fechas importantes y info component</p>
      }
    />
  </>
);

export default Pabellon;
