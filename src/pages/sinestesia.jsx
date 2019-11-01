import React from 'react';
import SEO from '../components/seo';
import MainLayout from '../components/layouts/MainLayout';

import '../scss/pages/sinestesia.scss';

const titlePage = 'Sinestesia';

function MainContentSinestesia() {
  return (
    <>
      <section className="des-sinestesia">
        <h1 className="sinestesia__title">Sinestesia</h1>
        <div className="wrapper__des">
          <p>
            Son una serie de performances improvisados donde artistas de diversas disciplinas buscan
            ampliar sus conocimientos y experimentar con nuevas herramientas digitales, para generar
            diálogos artísticos interdisciplinarios entorno al arte de los nuevos medios.
          </p>
          <p>
          Para dicha modalidad, ayudamos a personas a agruparse para crear una propuesta de
          performance multimediático en tiempo real, en donde las personas puedan complementarse en
          cuanto conocimientos técnicos y conceptuales.
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
    <MainLayout
      videoOpt="sinestesia.mp4"
      mainContent={<MainContentSinestesia />}
    />
  </>
);

export default Sinestesia;
