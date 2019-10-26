import React from 'react';

import './social.scss';
// Hay que ponerle texto a los anchors
const SocialMedia = () => (
  <div className="wrapper-social">
    <div className="wrapper-social__block-icons">
      <a
        className="wrapper-social__icon insta"
        href="https://www.instagram.com/proxy_hiperreal/?hl=es-la"
      ></a>
      <a
        className="wrapper-social__icon face"
        href="https://www.facebook.com/proxy.hiperreal/"
      ></a>
    </div>
    <p className="wrapper-social__title">Síguenos</p>
  </div>
);

export default SocialMedia;
