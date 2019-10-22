import React from 'react';
import SEO from '../components/seo';
import MainLayout from '../components/layouts/MainLayout';
import '../scss/styles.scss';

const titlePage = 'proxy';


const Proxy = () => (
  <>
    <SEO title={titlePage} />
    <MainLayout
      mainContent={
        <p>que es proxy</p>
      }
      content={
        <p>organizacion</p>
      }
    />
  </>
);

export default Proxy;
