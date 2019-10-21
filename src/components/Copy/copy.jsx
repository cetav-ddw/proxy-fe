import React from 'react';
import './copy.scss';
import Paragraph from '../../units/Paragraph';

const Copy = () => (
  <div>
    <Paragraph className="copy-year" inner="©2019" />
    <span className="copy-proxy__img">Proxy</span>
    <Paragraph className="copy__contact" inner="| Contactenos" />
  </div>
);

export default Copy;
