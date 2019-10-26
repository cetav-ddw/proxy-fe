import React from 'react';

import './social.scss';

const SocialMedia = () => (
  <div className="wrapper-social">
    <div className="wrapper-social__block-icons">
      <a
        className="wrapper-social__icon insta"
        href="https://www.instagram.com/proxy_hiperreal/?hl=es-la"
      >
        instagram.com/proxy_hiperreal
      </a>
      <a
        className="wrapper-social__icon face"
        href="https://www.facebook.com/proxy.hiperreal/"
      >
        facebook.com/proxy.hiperreal
      </a>
    </div>
    <p className="wrapper-social__title">Síguenos</p>
  </div>
);

export default SocialMedia;
