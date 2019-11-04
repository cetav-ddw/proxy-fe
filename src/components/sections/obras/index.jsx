import React from 'react';
import Work from '../work-units';

const ListaObras = ({ obras }) => {
  function ObrasProxy() {
    return obras.map(({ node: obra }, index) => (
      <Work obra={obra} key={obra.id} idx={index} />
    ));
  }

  return (
    <section className="works">
      <h2>Pabellón/Pavillion</h2>
      <p className="works__text">
        En esta modalidad se participó con una obra de nuevos medios
        relacionados con la hiperrealidad para ser expuesta durante las fechas
        de la bienal.
      </p>
      {obras.length > 0 ? (
        <ObrasProxy />
      ) : (
        <p className="no-obras">No hay obras publicadas.</p>
      )}
    </section>
  );
};

export default ListaObras;
