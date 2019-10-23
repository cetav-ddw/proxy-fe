import React from 'react';
import SEO from '../components/seo';
import MainLayout from '../components/layouts/MainLayout';
import SocialMedia from '../components/sections/social-media/index';
import '../scss/styles.scss';

const titlePage = 'home';

const IndexPage = () => (
  <>
    <SEO title={titlePage} />
    <MainLayout
      videoOpt="main.mp4"
      mainContent={
        <SocialMedia />
      }
      content={
        <p>works</p>
      }
    />
  </>
);

export default IndexPage;
