import React from 'react';
import Sinestesia from './sinestesia/Sinestesia';
import Pabellon from './pabellon/Pabellon';
import './styles.scss';

const Modalidades = () => (
  <div className="modalities">
    <h2>Modalidades</h2>
    <Sinestesia />
    <Pabellon />
  </div>
);

export default Modalidades;
