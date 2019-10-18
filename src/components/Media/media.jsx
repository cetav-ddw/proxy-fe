import React from 'react';
import './media.scss';

const Media = () => (
  <div className="media">
    <a className="media_link" href="https://www.instagram.com/proxy_hiperreal/?hl=es-la">
      <img className="media__icon media__icon--mgl" src="./social/insta.svg" alt="Instagram de Proxy" />
    </a>
    <a className="media_link" href="https://www.facebook.com/proxy.hiperreal/">
      <img className="media__icon" src="./social/face.svg" alt="Facebook de Proxy" />
    </a>
  </div>
);

export default Media;
