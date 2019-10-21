import React from 'react';
import './allies.scss';
import Image from '../../units/Image';

const Allies = () => (
  <div className="allies">
    <h5 className="allies__title">Colaboradores</h5>
    <Image className="allies__item--size" source="./footer/TRIPARTITO-CETAV.png" alt="Ministerio de cultura y juventud,Parque la Libertad,CETAV Centro de Tecnología y Artes Visuales" />
    <Image className="allies__item" source="./footer/UMC-blanco.png" alt="UMC" />
    <Image className="allies__item" source="./footer/LOGO-TRIANGULO-blanco.png" alt="Triangulo Showroom Creative" />
    <Image className="allies__item" source="./footer/submarca-blanco2.png" alt="Cooperación Española" />
    <Image className="allies__item" source="./footer/logo-Telerad-blanco.png" alt="Telerad Telecomunicaciones Radiodigitales" />
  </div>
);

export default Allies;
