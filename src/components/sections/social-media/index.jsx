import React from 'react';
import { Link } from 'gatsby';
import './social.scss';

const SocialMedia = () => (
  <div className="wrapper-social">
    <div className="wrapper-social__block-icons">
      <Link
        className="wrapper-social__icon insta"
        to="https://www.instagram.com/proxy_hiperreal/?hl=es-la"
      />
      <Link
        className="wrapper-social__icon face"
        to="https://www.facebook.com/proxy.hiperreal/"
      />
    </div>
    <p className="wrapper-social__title">síguenos</p>
  </div>
);

export default SocialMedia;
