import React from 'react';
import SEO from '../components/seo';
import MainLayout from '../components/layouts/MainLayout';
import EventData from '../components/sections/eventDate/EventDate';
import Nav from '../components/sections/nav/Nav';
import '../scss/styles.scss';

const titlePage = 'obras';

const Obras = () => (
  <>
    <SEO title={titlePage} />
    <MainLayout
      head={
        (
          <>
            <EventData />
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

export default Obras;
