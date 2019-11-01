import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../units/Image'
import './herobanner.scss';

const HeroBanner = ({ imageSrc }) => (
  <div className="herobanner">
    <Image
      variant="herobanner__video"
      poster="Home.jpg"
      source={imageSrc}
    />
  </div>
);

HeroBanner.propTypes = {
  imageSrc: PropTypes.string.isRequired
};

export default HeroBanner;
