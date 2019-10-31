import React from 'react';
import './workDetails.scss';

const detailsObra = ({ queryinfo }) => (
  <section className="about-artist">
    <div className="about-artist__wrapper-info">
      <h1 className="about-artist__title-name">{queryinfo.title}</h1>
      <ul className="about-artist__list-art-info list-artist-ui">
        <li className="about-artist__item technique">Técnica: {queryinfo.technique}</li>
        <li className="about-artist__item year">Año: {queryinfo.year}</li>
      </ul>
      <p className="about-artist__paragraph">{queryinfo.description}</p>
    </div>
    <div className="about-artist__wrapper-info">
      <h2 className="about-artist__subtitle">Artista</h2>
      <ul className="about-artist__list-artist-info list-artist-ui">
        <li className="about-artist__item name-artist">Nombre: {queryinfo.artist}</li>
        <li className="about-artist__item country">País: {queryinfo.country}</li>
      </ul>
      <p className="about-artist__paragraph">{queryinfo.bio}</p>
    </div>
  </section>
);

export default detailsObra;