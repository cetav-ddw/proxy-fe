import React from 'react';
import SEO from '../components/seo';
import MainLayout from '../components/layouts/MainLayout';
import SinestesiaD from '../components/sections/sinestesiaDesc';
import '../scss/styles.scss';
import '../scss/sinestesia.scss';

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
          <div className="wrapper__txt--columns">
            <p className="txt--columns">Pronto más información</p>
          </div>
          <h3 className="note__title">Nota</h3>
          <div className="wrapper__txt--columns">
            <p className="txt--columns">
              Brindaremos talleres para que las personas interesadas profundicen sobre
              temas de improvisación en música, teatro y
              danza así como live coding, visuales y sensores de movimiento.
            </p>
            <p className="txt--columns">
              No es necesaria tener experiencia con el uso de este tipo de herramientas.
              Solo la disposición a jugar o interactuar con estas.
            </p>
          </div>
        </div>
      )}
    />
  </>
);

export default Sinestesia;
