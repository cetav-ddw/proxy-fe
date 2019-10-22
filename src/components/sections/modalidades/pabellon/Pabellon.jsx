import React from 'react';
import { Link } from 'gatsby';
// import './styles.scss';

const Pabellon = () => (
  // eslint-disable-next-line no-trailing-spaces
  <div className="column-type"> 
    <video variant="column-type__video" autoPlay muted loop>
      <source src="./pabellon.mp4" type="video/mp4" />
    </video>
    <div className="column-type__content">
      <h3 className="content-title column-type__title--right">Pabellón</h3>
      <p className="column-type__text--right">Participa con una obra de nuevos medios relacionados con la hiperrealidad</p>
      <Link to="../../../../pages/pabellon.jsx" className=".column-type__details--right glitch">Más detalles</Link>
    </div>
  </div>
);


export default Pabellon;
