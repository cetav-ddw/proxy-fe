import React from './node_modules/react';
import './media.scss';
import Image from '../../units/Image';

const Media = () => (
  <div className="media">
    <a className="media_link" href="https://www.instagram.com/proxy_hiperreal/?hl=es-la">
      <Image className="media__icon media__icon--mgl" source="./social/insta.svg" alt="Instagram de Proxy" />
    </a>
    <a className="media_link" href="https://www.facebook.com/proxy.hiperreal/">
      <Image className="media__icon" source="./social/face.svg" alt="Facebook de Proxy" />
    </a>
  </div>
);

export default Media;
