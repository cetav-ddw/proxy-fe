import React from 'react';
import SEO from '../components/seo';
import MainLayout from '../components/layouts/MainLayout';
import SinestesiaD from '../components/sections/sinestesiaDesc';
import '../scss/styles.scss';

const titlePage = 'Sinestesia';

const Sinestesia = () => (
  <>
    <SEO title={titlePage} />
    <MainLayout
      videoOpt="sinestesia.mp4"
      mainContent={
        <SinestesiaD />
      // <p>info de sinestesia component</p>
      }
      content={(
        <div className="sinestesia-dates">
          <h2 className="sinestesia-dates__title">Fechas Importantes</h2>
          <p>requisitos</p>
        </div>
      )}
    />
  </>
);

export default Sinestesia;
