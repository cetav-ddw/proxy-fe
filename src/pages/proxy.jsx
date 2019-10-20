import React from 'react';
import SEO from '../components/seo';
import Header from '../components/sections/header/Header';
import MainLayout from '../components/layouts/MainLayout';
import '../scss/styles.scss';

const titlePage = 'proxy';

const Proxy = () => (
  <>
    <SEO title={titlePage} />
    <MainLayout
      head={
        (
          <>
            <Header videoSrc="main.mp4" />
          </>
        )
      }

      sections={
        <p>waiting</p>
      }
    />
  </>
);

export default Proxy;
