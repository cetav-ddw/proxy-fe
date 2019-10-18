import React from 'react';
import './media.scss';

const Media = () => (
  <div className="media">
    <a className="media_link" href="https://www.instagram.com/proxy_hiperreal/?hl=es-la">
      <img className="media__icon media__icon--pdl" src="../../../static/insta.sgv" alt="Instagram de Proxy" />
    </a>
    <a className="media_link" href="https://www.facebook.com/proxy.hiperreal/">
      <img className="media__icon media__icon--pdl" src="../../../static/face.sgv" alt="Facebook de Proxy" />
    </a>
  </div>
);

export default Media;
