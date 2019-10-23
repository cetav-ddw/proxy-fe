import React from 'react';
import { Link } from 'gatsby';
import './styles.scss';

const Modalidades = () => (
  <div className="modalities">
    <h2>Modalidades</h2>
    <div className="column-type">
      <div className="column-type__content">
        <h3 className="column-type__title content-title">Sinestesia</h3>
        <p className="column-type__text">Es una serie de performances improvisados que integran multimedia.</p>
        <Link to="/sinestesia" className="column-type__details content-details glitch">Más detalles</Link>
      </div>
      <video variant="column-type__video" autoPlay muted loop src="./sinestesia.mp4" />
    </div>
    <div className="column-type">
      <video variant="column-type__video" autoPlay muted loop>
        <source src="./pabellon.mp4" type="video/mp4" />
      </video>
      <div className="column-type__content">
        <h3 className="content-title column-type__title--right">Pabellón</h3>
        <p className="column-type__text--right content-text">Participa con una obra de nuevos medios relacionados con la hiperrealidad</p>
        <Link to="/pabellon" className="column-type__details--right glitch">Más detalles</Link>
      </div>
    </div>
  </div>
);

export default Modalidades;
