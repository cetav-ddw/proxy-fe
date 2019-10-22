import React from 'react';
import { Link } from 'gatsby';

const Sinestesia = () => (
  <div className="column-type">
    <div className="column-type__content">
      <h3 className="column-type__title content-title">Sinestesia</h3>
      <p className="column-type__text">Es una serie de performances improvisados que integran multimedia.</p>
      <Link to="../../pages/pabellon" className="column-type__details content-details glitch">Más detalles</Link>
    </div>
    <video variant="column-type__video" autoPlay muted loop src="./sinestesia.mp4" />
  </div>
);

export default Sinestesia;
