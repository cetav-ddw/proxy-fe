import React from 'react';
import SEO from '../components/seo';
import MainLayout from '../components/layouts/MainLayout';
import EventData from '../components/sections/eventDate/EventDate';
import HeroBanner from '../components/sections/herobanner/HeroBanner';
import Nav from '../components/sections/nav/Nav';
import '../scss/styles.scss';

const titlePage = 'pabellon';

const Pabellon = () => (
  <>
    <SEO title={titlePage} />
    <MainLayout
      head={
        (
          <>
            <EventData />
            <HeroBanner videoSrc="pabellon.mp4" />
            <Nav />
          </>
        )
      }

      sections={
        <p>waiting</p>
      }

      allies={
        <p>waiting</p>
      }
    />
  </>
);

export default Pabellon;
