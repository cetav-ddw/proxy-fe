import React from 'react';
import './footer.scss';
import FooterTitle from '../../components/Footer-title/footer-title';
import Allies from '../../components/Allies/allies';
import Copy from '../../components/Copy/copy';
import Media from '../../components/Media/media';

const Footer = () => (
  <footer>
    <FooterTitle />
    <Allies />
    <Copy />
    <Media />
  </footer>
);

export default Footer;
