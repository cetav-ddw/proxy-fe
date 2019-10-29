import React from 'react';
import Button from '../../units/Button';
import Image from '../../units/Image';
import './styles.scss';

const workGallery = ({ mediaData }) => {
  const { imageArray, urlVideo } = mediaData;
  return (
    <section className="gallery">
      {
        imageArray.length > 1
          ?
          <>
            <Button variant="gallery__bnt gallery__bnt--left arrow-left">
              <svg className="gallery__svg" width="14px" height="24px" viewBox="-2 -2 14 24" version="1.1">
                <polyline id="Shape" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="10 0 0 10 10 20"></polyline>
              </svg>
            </Button>
            <Button variant="gallery__bnt gallery__bnt--right arrow-right">
              <svg className="gallery__svg" width="14px" height="24px" viewBox="-2 -2 14 24" version="1.1">
                <polyline id="Shape" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="0 0 10 10 0 20"></polyline>
              </svg>
            </Button>
          </>
          : null
      }
      <div className="gallery__wrapper-img">
        {imageArray.length > 0 ? imageArray.map((item, index) => <Image key={index} variant="gallery__img-art" source={item.url} alt="art" />) : null}
      </div>
    </section>
  )
}
export default workGallery;