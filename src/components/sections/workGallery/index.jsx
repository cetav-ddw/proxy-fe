import React from 'react';
import Image from '../../units/Image';
import './workGallery.scss';

const WorkGallery = ({ mediaData }) => (
  <section className="gallery">
    {mediaData.length > 0 && (
      <div className="gallery__wrapper-img">
        <Image variant="gallery__img-art" source={mediaData[0].url} alt="" />
      </div>
    )}
  </section>
);
export default WorkGallery;
