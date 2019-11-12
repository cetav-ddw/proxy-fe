import React from 'react';
import './workGallery.scss';
import Img from 'gatsby-image';

const WorkGallery = ({ mediaData, title }) => (
  <section className="gallery">
    {mediaData.length > 0 && (
      <div
        className="gallery__wrapper-img"
      >
        <Img fluid={mediaData[0].fluid} alt={title} />
      </div>
    )}
  </section>
);
export default WorkGallery;
