import React from 'react';
import SEO from '../components/seo';
import Header from '../components/sections/header/Header';
import MainLayout from '../components/layouts/MainLayout';
import '../scss/styles.scss';

const titlePage = 'pabellon';

const Pabellon = () => (
  <>
    <SEO title={titlePage} />
    <MainLayout
      head={
        (
          <>
            <Header videoSrc="pabellon.mp4" useVideo />
          </>
        )
      }

      sections={
        <p>waiting</p>
      }
    />
  </>
);

export default Pabellon;
