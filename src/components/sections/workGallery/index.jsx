import React from 'react';
import Button from '../../units/Button';
import Image from '../../units/Image';

import './workGallery.scss';

const WorkGallery = ({ mediaData }) => (
  <section className="gallery">
    {mediaData.length > 1 && (
      <>
        <Button
          variant="gallery__bnt gallery__bnt--left"
          handleClickbtn={() => {}}
        >
          <svg
            className="gallery__svg"
            width="14px"
            height="24px"
            viewBox="-2 -2 14 24"
            version="1.1"
          >
            <polyline
              id="Shape"
              stroke="#FFFFFF"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              points="10 0 0 10 10 20"
            ></polyline>
          </svg>
        </Button>
        <Button
          variant="gallery__bnt gallery__bnt--right"
          handleClickbtn={() => {}}
        >
          <svg
            className="gallery__svg"
            width="14px"
            height="24px"
            viewBox="-2 -2 14 24"
            version="1.1"
          >
            <polyline
              id="Shape"
              stroke="#FFFFFF"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              points="0 0 10 10 0 20"
            ></polyline>
          </svg>
        </Button>
      </>
    )}
    {mediaData.length > 0 && (
      <div className="gallery__wrapper-img">
        <Image variant="gallery__img-art" source={mediaData[0].url} alt="" />
      </div>
    )}
  </section>
);
export default WorkGallery;
