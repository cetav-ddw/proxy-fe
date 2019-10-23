import React from 'react';
import SEO from '../components/seo';
import MainLayout from '../components/layouts/MainLayout';
import '../scss/styles.scss';

const titlePage = 'Proxy';


const Proxy = () => (
  <>
    <SEO title={titlePage} />
    <MainLayout
      mainContent={
        <p>contenido</p>
      }
      content={
        <p>organizacion</p>
      }
    />
  </>
);

export default Proxy;
