import React from 'react';
import './copy.scss';
import './footer-title.scss';
import './media.scss';
import './footer.scss';
import './allies.scss';
import Image from '../../units/Image';

const Footer = () => (
  <footer>
    <div className="wapper-footer">
      <h4 className="wapper-title">
        <span className="footer-title__proxy">Proxy</span>
        <span className="footer-title__concat">partcipa con</span>
        <span className="footer-title__wrong">The Wrong</span>
      </h4>
      <h5 className="allies__title">Colaboradores</h5>
      <div className="allies">
        <Image
          variant="allies__item--size"
          source="./footer/TRIPARTITO-CETAV.png"
          alt="Ministerio de cultura y juventud,Parque la Libertad,CETAV Centro de Tecnología y Artes Visuales"
        />
        <Image
          variant="allies__item"
          source="./footer/UMC-blanco.png"
          alt="UMC"
        />
        <Image
          variant="allies__item"
          source="./footer/LOGO-TRIANGULO-blanco.png"
          alt="Triangulo Showroom Creative"
        />
        <Image
          variant="allies__item"
          source="./footer/submarca-blanco2.png"
          alt="Cooperación Española"
        />
        <Image
          variant="allies__item"
          source="./footer/logo-Telerad-blanco.png"
          alt="Telerad Telecomunicaciones Radiodigitales"
        />
      </div>
      <p>
        <span className="copy-year">©2019</span>
        <span className="copy-proxy__img">Proxy</span>
        <span className="copy__contact"> | Contactenos</span>
      </p>
      <div className="media">
        <a
          className="media_link"
          href="https://www.instagram.com/proxy_hiperreal/?hl=es-la"
        >
          <Image
            variant="media__icon media__icon--mgl"
            source="./social/insta.svg"
            alt="Instagram de Proxy"
          />
        </a>
        <a
          className="media_link"
          href="https://www.facebook.com/proxy.hiperreal/"
        >
          <Image
            variant="media__icon"
            source="./social/face.svg"
            alt="Facebook de Proxy"
          />
        </a>
      </div>
    </div>

  </footer>
);

export default Footer;
