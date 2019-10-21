import React from 'react';
import { Link } from 'gatsby';
import Paragraph from '../../../../units/Paragraph';
import Title3 from '../../../../units/Title3';
import './styles.scss';

const Pabellon = () => (
  // eslint-disable-next-line no-trailing-spaces
  <div className="column-type"> 
    <video variant="column-type__video" autoPlay muted loop>
      <source src="./pabellon.mp4" type="video/mp4" />
    </video>
    <div className="column-type__content">
      <Title3 variant="content-title column-type__title--right" inner="Pabellón" />
      <Paragraph variant="column-type__text--right" inner="Participa con una obra de nuevos medios relacionados con la hiperrealidad" />
      <Link to="../../../../pages/pabellon.jsx" className=".column-type__details--right glitch">Más detalles</Link>
    </div>
  </div>
);


export default Pabellon;
