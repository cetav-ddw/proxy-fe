import React from 'react';
import Video from '../../units/Video';
import './herobanner.scss';

const HeroBanner = () => (
  // la ruta del video va cambair dependiendo en que página me encuentre
  // hacer lógica ...
  <div className="herobanner">
    <Video className="herobanner__video" poster="bg-footer-h" source="main.mp4" />
  </div>
);

export default HeroBanner;
