import React from 'react';
import { Link } from 'gatsby';
import Paragraph from '../../../../units/Paragraph';
import Title3 from '../../../../units/Title3';
import './styles.scss';
import './sinestesia.mp4';

const Sinestesia = () => (
  <div className="column-type">
    <div className="column-type__content">
      <Title3 variant="column-type__title content-title" inner="Sinestesia" />
      <Paragraph variant="column-type__text" inner="Es una serie de performances improvisados que integran multimedia" />
      <Link to="../../pages/pabellon" className="column-type__details content-details glitch">Más detalles</Link>
    </div>
    <video variant="column-type__video" autoPlay muted loop src="./sinestesia.mp4" />
  </div>
);

export default Sinestesia;
