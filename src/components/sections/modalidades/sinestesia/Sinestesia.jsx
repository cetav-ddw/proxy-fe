import React from 'react';
import { Link } from 'gatsby';
import Paragraph from '../../../../units/Paragraph';
import Title3 from '../../../../units/Title3';

const Sinestesia = () => (
  <div>
    <video variant="column-type__video" autoPlay muted loop source="sinestesia.mp4" />
    <div className="column-type__content">
      <Title3 variant="content-title column-type__title--right">Sinestesia</Title3>
      <Paragraph variant="column-type__text--right content-text">Es una serie de performances improvisados que integran multimedia.</Paragraph>
      <Link to="../../pages/pabellon">Más detalles</Link>
    </div>
  </div>
);


export default Sinestesia;
