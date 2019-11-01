import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layouts/Layout';
import Image from '../components/units/Image';
import SocialMedia from '../components/sections/social-media';

import '../scss/pages/proxy.scss';

const titlePage = 'Proxy';

function MainContentProxy() {
  return (
    <>
      <section className="desc-proxy">
        <div className="ws-proxy">
          <h1 className="img-proxy">Proxy</h1>
          <p>
<<<<<<< HEAD
            Es el pabellón para Costa Rica de la 4ta edición de la Bienal de Arte DigitalThe Wrong.
          </p>
          <p>
            Nuestro tema es la Hiperrealidad, haciendo una invitación a personas creativas a indagar 
            desde el arte digital conceptos en torno al tema principal como: el simulacro, la copia sin original, 
            la versión alterna, el sustituto, 
            la fantasía de lo hiperreal, etc., ligadas a la influencia de las tecnologías emergentes a nuestra cultura.
=======
          Es el pabellón para Costa Rica de la 4ta edición de la Bienal de Arte DigitalThe Wrong.
          </p>
          <p>
          Nuestro tema es la Hiperrealidad, haciendo una invitación a personas creativas a indagar desde el arte digital conceptos en torno al tema principal como: el simulacro, la copia sin original, la versión alterna, el sustituto, la fantasía de lo hiperreal, etc., ligadas a la influencia de lastecnologías emergentes a nuestra cultura.
>>>>>>> 06ad45c5e633c7dc1edc9a44c535486a46ce3421
          </p>
        </div>
      </section>
      <section className="wrapper-org">
        <h2 className="title-org">Organización</h2>
        <p className="org__text">
          Somos un colectivo de artistas y entusiastas de la cultura digital,
          interesadxs en generar espacios y situaciones de experimentación en
          torno al arte de los nuevos medios.
        </p>
        <div className="content-img">
          <Image
            variant="img-org"
            source="./secciones/org.jpeg"
            alt="En la imagen salen los organizadores del evento Prizcila Mendez y Randall Sáenz"
          />
        </div>
      </section>
    </>
  );
}

const Proxy = () => (
  <>
    <SEO title={titlePage} />
    <Layout>
      <SocialMedia />
      <MainContentProxy />
    </Layout>
  </>
);

export default Proxy;
