import React from 'react';
import SEO from '../components/seo';
import MainLayout from '../components/layouts/MainLayout';
import SocialMedia from '../components/sections/social-media/index';
import '../scss/styles.scss';

const titlePage = 'Sinestesia';

const Sinestesia = () => (
  <>
    <SEO title={titlePage} />
    <MainLayout
      videoOpt="sinestesia.mp4"
      mainContent={
        <SocialMedia />
      }
      content={
        <p>requisitos</p>
      }
    />
  </>
);

export default Sinestesia;
