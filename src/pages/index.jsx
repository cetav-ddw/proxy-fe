import React from 'react';
import SEO from '../components/seo';
import Header from '../components/sections/header/Header';
import MainLayout from '../components/layouts/MainLayout';
import '../scss/styles.scss';

const titlePage = 'home';

const IndexPage = () => (
  <>
    <SEO title={titlePage} />
    <MainLayout
      head={
        (
          <>
            <Header videoSrc="main.mp4" useVideo />
          </>
        )
      }

      sections={
        <p>waiting</p>
      }
    />
  </>
);

export default IndexPage;
