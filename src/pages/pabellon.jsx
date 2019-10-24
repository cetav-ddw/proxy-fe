import React from 'react';
import SEO from '../components/seo';
import MainLayout from '../components/layouts/MainLayout';
import Title4 from '../components/units/Title4';
import Title2 from '../components/units/Title2';
import '../scss/styles.scss';
import '../scss/pabellon.scss';

const titlePage = 'Pabellón';

const Pabellon = () => (
  <>
    <SEO title={titlePage} />
    <MainLayout
      videoOpt="pabellon.mp4"
      mainContent={(
        <div>
          <section className="desc-pabellon">
            <Title4 variant="pabellon__img">Pabellón</Title4>
            <div className="wrapper__des">
              <p>
                En esta modalidad debes de participar con una obra de nuevos medios relacionados
                con la hiperrealidad para ser expuesta durante las fechas de la bienal.
              </p>
              <Title4 variant="desc-pabellon__subtitle">¿QUE ES LA HIPERREALIDAD?</Title4>
              <p>
                &quot; Es la interpretación descompensada de la realidad, creada por
                nosotros que se admite como verosímil y que
                llega a sustituir a la realidad en la que se basó &quot;.
              </p>
              <p>
                &quot; En la hiperrealidad los simuladores buscan hacer que toda la
                realidad coincida con sus modelos de simulación &quot;.
              </p>
              <p>
                &quot; Es un medio para describir la forma en la conciencia define lo que es
                considerado real, en un mundo donde los medios de comunicación pueden
                modelar y filtrar de manera radical la manera en que percibimos
                un acontecimiento o experiencia &quot;.
              </p>
            </div>
          </section>
          <section className="desc-requi">
            <div className="requi">
              <Title2 variant="requi__title">Requisitos</Title2>
              <ul className="requi__list">
                <li className="requi__list-item">Las obras serán registradas por la organización.</li>
                <li className="requi__list-item">Las obras deben ser arte digital y de nuevos medios.</li>
                <li className="requi__list-item">
                  Los gastos que puedan surgir para la exposición física de
                  los trabajos no corren por cuenta de la bienal, pero desde la organización
                  podemos ayudar a conseguir financiamiento.
                </li>
              </ul>
            </div>
          </section>
        </div>
      )}


    />
  </>
);

export default Pabellon;
