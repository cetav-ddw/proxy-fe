import React from 'react';
import SEO from '../components/seo';
import MainLayout from '../components/layouts/MainLayout';
import Image from '../components/units/Image';
import '../scss/styles.scss';
import '../scss/proxy.scss';

const titlePage = 'Proxy';


const Proxy = () => (
  <>
    <SEO title={titlePage} />
    <MainLayout
      mainContent={(
        <div>
          <section className="desc-proxy">
            <div className="ws-proxy">
              <h4 className="img-proxy">Proxy</h4>
              <p>
                Es el pabellón para Costa Rica de la
                4ta edición de la Bienal de Arte DigitalThe Wrong.
              </p>
              <p>
                Y es un espacio que incentiva la exploración de Hiperrealidades
                generadas desde nuevos medios.
              </p>
              <p>
                En donde invitamos a personas creativas a indagar artísticamente el simulacro,
                la copia sin original, la versión alterna,
                el sustituto, la fantasía de lo hiperreal,
                ligadas a la influencia de las tecnologías emergentes a nuestra cultura.
              </p>
            </div>
          </section>
          <section className="wrapper-org">
            <h2 className="title-org">Organización</h2>
            <p className="org__text">Somos un colectivo de artistas y entusiastas de la cultura digital, interesadxs en generar espacios y situaciones de experimentación en torno al arte de los nuevos medios.</p>
            <div className="content-img">
              <Image
                variant="img-org"
                source="./secciones/org.jpeg"
                alt="En la imagen salen los organizadores del evento Prizcila Mendez y Randall Sáenz"
              />
            </div>
          </section>
        </div>
      )}
    />
  </>
);

export default Proxy;
