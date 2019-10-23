import React from 'react';
import SEO from '../components/seo';
import MainLayout from '../components/layouts/MainLayout';
import SocialMedia from '../components/sections/social-media/index';
import '../scss/styles.scss';

const titlePage = 'Proxy';


const Proxy = () => (
  <>
    <SEO title={titlePage} />
    <MainLayout
      mainContent={
        <SocialMedia />
      }
      content={
        <p>organizacion</p>
      }
    />
  </>
);

export default Proxy;
