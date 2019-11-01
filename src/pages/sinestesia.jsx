import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layouts/Layout';
import SocialMedia from '../components/sections/social-media';

import '../scss/pages/sinestesia.scss';

const titlePage = 'Sinestesia';

function MainContentSinestesia() {
  return (
    <>
      <section className="des-sinestesia">
        <h1 className="sinestesia__title">Sinestesia</h1>
        <div className="wrapper__des">
          <p>
            Es una serie de performances improvisados que integran multimedia.
          </p>
          <p>
            Se juntan artistas de artes visuales, sonoras, literarias y del
            movimiento en escenarios intervenidos para generar un diálogo
            artístico interdisciplinario digno de la era digital.
          </p>
          <p>
            Se da un tiempo determinado para realizar un performance improvisado
            que haga uso de herramientas tecnológicas (luces, video mapping,
            live coding, música electrónica, sensores, amplificación y efectos).
          </p>
        </div>
      </section>
      <section className="sinestesia-dates">
        <h2 className="sinestesia-dates__title">Fechas Importantes</h2>
        <div className="wrapper__txt--columns">
          <p className="txt--columns">Pronto más información</p>
        </div>
        <h3 className="note__title">Nota</h3>
        <div className="wrapper__txt--columns">
          <p className="txt--columns">
            Brindaremos talleres para que las personas interesadas profundicen
            sobre temas de improvisación en música, teatro y danza así como live
            coding, visuales y sensores de movimiento.
          </p>
          <p className="txt--columns">
            No es necesaria tener experiencia con el uso de este tipo de
            herramientas. Solo la disposición a jugar o interactuar con estas.
          </p>
        </div>
      </section>
    </>
  );
}

const Sinestesia = () => (
  <>
    <SEO title={titlePage} />
    <Layout videoOpt="sinestesia.mp4">
      <SocialMedia />
      <MainContentSinestesia />
    </Layout>
  </>
);

export default Sinestesia;
