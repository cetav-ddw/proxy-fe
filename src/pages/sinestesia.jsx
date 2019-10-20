import React from 'react';
import SEO from '../components/seo';
import Header from '../components/sections/header/Header';
import MainLayout from '../components/layouts/MainLayout';
import '../scss/styles.scss';

const titlePage = 'sinestesia';

const Sinestesia = () => (
  <>
    <SEO title={titlePage} />
    <MainLayout
      head={
        (
          <>
            <Header videoSrc="sinestesia.mp4" useVideo />
          </>
        )
      }

      sections={
        <p>waiting</p>
      }
    />
  </>
);

export default Sinestesia;
