import React, { useState, useEffect } from 'react';
import Button from '../../units/Button';
import Image from '../../units/Image';
import Draw from './canvas';
import './styles.scss';

function drawCanvas(canvas) {
  const ctx = canvas.getContext('2d');
  const left = 0;
  const right = 0;
  canvas.height = 80;
  canvas.width = 55;
  const numbers = [];
  const arrayNum = [];
  const arrayElement = [];

  for (let num = 1; num <= 80; num++) {
    numbers.push(num);
  }

  const totalNumbers = numbers.filter(numero => numero % 2 === 0);
  totalNumbers.forEach((x) => {
    arrayNum.push((Math.random() * 0.5) + 0.05);
    arrayElement.push(new Draw(0, x, 40, 1, ctx, left, right));
  });

  function IteracionDraw() {
    requestAnimationFrame(IteracionDraw);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    arrayElement.forEach(item => item.animation());
  }

  function lineAnimation() {
    setInterval(() => {
      const max = Math.floor((Math.random() * (20 - 10)) + 10);
      arrayElement.forEach((items, index) => {
        const item = items;
        if (max >= item.w) {
          item.left = 0;
          item.right = arrayNum[index];
        } else if (item.w >= 35) {
          item.right = 0;
          item.left = arrayNum[index];
        }
      });
    }, 500);
  }
  IteracionDraw();
  lineAnimation();
}


const WorkGallery = ({ mediaData }) => {
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
              <canvas ref={(e) => {
                if(e) drawCanvas(e)
              }} />
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
export default WorkGallery;