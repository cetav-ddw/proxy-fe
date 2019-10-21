import React from 'react';
import './proxy.scss';
import Paragraph from '../../units/Paragraph';
import Title4 from '../../units/Title4';
import Title2 from '../../units/Title2';
import Image from '../../units/Image';

const WProxy = () => (
  <div>
    <section className="desc-proxy">
      <div className="ws-proxy">
        <Title4 className="img-proxy" inner="Proxy" />
        <Paragraph inner="Es el pabellón para Costa Rica de la 4ta edición de la Bienal de Arte Digital The Wrong." />
        <Paragraph inner="Y es un espacio que incentiva la exploración de Hiperrealidades generadas desde nuevos
        medios."
        />
        <Paragraph inner="En donde invitamos a personas creativas a indagar artísticamente el simulacro, la copia sin
          original, la versión alterna, el sustituto, la fantasía de lo hiperreal, ligadas a la influencia de las
          tecnologías emergentes a nuestra cultura."
        />
      </div>
    </section>
    <section className="wrapper-org">
      <Title2 className="title-org" inner="Organización" />
      <Paragraph
        className="org__text"
        inner="Somos un colectivo de artistas y entusiastas de la cultura digital, interesadxs en generar
        espacios y situaciones de experimentación en torno al arte de los nuevos medios."
      />
      <div className="content-img">
        <Image className="img-org" source="./org.jpeg" alt="En la imagen salen los organizadores del evento Prizcila Mendez y Randall Sáenz" />
      </div>
    </section>
  </div>
);

export default WProxy;
