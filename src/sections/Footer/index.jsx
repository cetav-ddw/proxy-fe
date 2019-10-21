import React from './node_modules/react';
import './footer.scss';
import FooterTitle from '../footer-title/footer-title';
import Allies from '../allies/allies';
import '../copy/copy.scss';
import Media from '../media/media';

const Footer = () => (
  <footer>
    <FooterTitle />
    <Allies />
    <div>
    <Paragraph className="copy-year" inner="©2019" />
    <span className="copy-proxy__img">Proxy</span>
    <Paragraph className="copy__contact" inner="| Contactenos" />
  </div>
    <Media />
  </footer>
);

export default Footer;
