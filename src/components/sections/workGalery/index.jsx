import React from 'react';
import Button from '../../units/Button';
import Image from '../../units/Image';
import './styles.scss';

const workGalery = ({ querySrc }) => {
  let srcImage = (querySrc.images.length > 0 && querySrc.images);
  return (
    <section className="galery">
      {
        srcImage.length > 1
          ?
          <>
            <Button variant="galery__bnt galery__bnt--left arrow-left">
              <svg className="galery__svg" width="14px" height="24px" viewBox="-2 -2 14 24" version="1.1">
                <polyline id="Shape" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="10 0 0 10 10 20"></polyline>
              </svg>
            </Button>
            <Button variant="galery__bnt galery__bnt--right arrow-right">
              <svg className="galery__svg" width="14px" height="24px" viewBox="-2 -2 14 24" version="1.1">
                <polyline id="Shape" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="0 0 10 10 0 20"></polyline>
              </svg>
            </Button>
          </>
          : null
      }
      <div className="galery__wrapper-img">
        {srcImage ? srcImage.map((item, index) => <Image key={index} variant="galery__img-art" source={item.url} alt="art" />) : null}
      </div>
    </section>
  )
}
export default workGalery;