import React from 'react';
import SEO from '../components/seo';
import MainLayout from '../components/layouts/MainLayout';
import WProxy from '../components/Proxy';
import '../scss/styles.scss';

const titlePage = 'Proxy';

const Proxy = () => (
  <>
    <SEO title={titlePage} />
    <MainLayout
      mainContent={
        <WProxy />
      }
    />
  </>
);

export default Proxy;
