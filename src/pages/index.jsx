import React from 'react';
import SEO from '../components/seo';
import MainLayout from '../components/layouts/MainLayout';
import '../scss/styles.scss';
import Footer from '../components/sections/footer/index';

const titlePage = 'home';

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
    <Footer />
  </>
);

export default IndexPage;
