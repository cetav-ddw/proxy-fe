import React from 'react';
import Image from '../../units/Image';
import './workDetails.scss';

const detailsObra = ({ queryinfo }) => (
  <section className="about-artist">
    <div className="about-artist__wrapper-info">
      <h1 className="about-artist__title-name">{queryinfo.title}</h1>
      <div className="wapper-info">
        <ul className="about-artist__list-art-info list-artist-ui">
          <li className="about-artist__item technique">
            Técnica: {queryinfo.technique}
          </li>
          <li className="about-artist__item year">Año: {queryinfo.year}</li>
        </ul>
        <p className="about-artist__paragraph">
          {queryinfo.description}
          {
            queryinfo.link && 
            <a href={queryinfo.link} target="_blank" className="external-link">Ver obra completa</a>
          }
        </p>
      </div>
    </div>
    <div className="about-artist__wrapper-info">
      <h2 className="about-artist__subtitle">Artista</h2>
      <div className="wapper-info">
        <ul className="about-artist__list-artist-info list-artist-ui">
          <li className="about-artist__item name-artist">
            Nombre: {queryinfo.artist}
          </li>
          <li className="about-artist__item country">
            País: {queryinfo.country}
          </li>
        </ul>
        <p className="about-artist__paragraph">{queryinfo.bio}</p>
      </div>
    </div>
    {queryinfo.images.length > 1 && (
      <div className="about-artist__more-works">
        <h3>Otras obras</h3>
        <div className="container-images">
          {queryinfo.images.map(
            (item, index) =>
              index > 0 && (
                <Image
                  key={index}
                  variant="gallery__img-art"
                  source={item.url}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    )}
  </section>
);
export default detailsObra;
