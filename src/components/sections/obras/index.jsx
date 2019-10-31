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
      <h2>Obras</h2>
      {obras.length > 0 ? (
        <ObrasProxy />
      ) : (
        <p className="no-obras">No hay obras publicadas.</p>
      )}
    </section>
  );
};

export default ListaObras;
