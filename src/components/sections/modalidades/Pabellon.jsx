import React from 'react';
import { Link } from 'gatsby';
import Paragraph from '../../../units/Paragraph';
import Title3 from '../../../units/Title3';

const Pabellon = () => (
  // eslint-disable-next-line no-trailing-spaces
  <div> 
    <video variant="column-type__video" autoPlay muted loop>
      <source src="./pabellon.mp4" type="video/mp4" />
    </video>
    <div className="column-type__content">
      <Title3 variant="content-title column-type__title--right">Pabellón</Title3>
      <Paragraph variant="column-type__text--right content-text">Participa con una obra de nuevos medios relacionados con la hiperrealidad.</Paragraph>
      <Link to="../../pages/pabellon">Más detalles</Link>
    </div>
  </div>
);


export default Pabellon;
