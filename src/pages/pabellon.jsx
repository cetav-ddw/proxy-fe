import React from 'react';
import SEO from '../components/seo';
import MainLayout from '../components/layouts/MainLayout';

import '../scss/pages/pabellon.scss';

const titlePage = 'Pabellón';

function MainContentPabellon() {
  return (
    <>
      <section className="desc-pabellon">
        <h1 className="pabellon__img">Pabellón</h1>
        <div className="wrapper__des">
          <p>
            En esta modalidad debes de participar con una obra de nuevos medios
            relacionados con la hiperrealidad para ser expuesta durante las
            fechas de la bienal.
          </p>
          <h2 className="desc-pabellon__subtitle">¿QUE ES LA HIPERREALIDAD?</h2>
          <p>
            &quot;Es la interpretación descompensada de la realidad, creada por
            nosotros que se admite como verosímil y que llega a sustituir a la
            realidad en la que se basó&quot;.
          </p>
          <p>
            &quot;En la hiperrealidad los simuladores buscan hacer que toda la
            realidad coincida con sus modelos de simulación&quot;.
          </p>
          <p>
            &quot;Es un medio para describir la forma en la conciencia define lo
            que es considerado real, en un mundo donde los medios de
            comunicación pueden modelar y filtrar de manera radical la manera en
            que percibimos un acontecimiento o experiencia&quot;.
          </p>
        </div>
      </section>
      <section className="desc-requi">
        <div className="requi">
          <h2 className="requi__title">Requisitos</h2>
          <ul className="requi__list">
            <li className="requi__list-item">
              Las obras serán registradas por la organización.
            </li>
            <li className="requi__list-item">
              Las obras deben ser arte digital y de nuevos medios.
            </li>
            <li className="requi__list-item">
              Los gastos que puedan surgir para la exposición física de los
              trabajos no corren por cuenta de la bienal, pero desde la
              organización podemos ayudar a conseguir financiamiento.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

const Pabellon = () => (
  <>
    <SEO title={titlePage} />
    <MainLayout videoOpt="pabellon.mp4" mainContent={<MainContentPabellon />} />
  </>
);

export default Pabellon;
