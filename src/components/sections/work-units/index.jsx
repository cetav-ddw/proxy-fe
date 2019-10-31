import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Image from '../../units/Image';
import './workUnit.scss';

// obra.video, video hospedado en Youtube/Vimeo
// obra.videoFile, file hospedado en DatoCMS
const Work = ({ obra, idx }) => {
  const itemPosition = idx % 2 !== 0 ? '--right' : '';
  const fallbackSrc = 'https://via.placeholder.com/500';
  const hasImage = obra.images && obra.images.length > 0;
  let imgSrc = hasImage ? obra.images[0].url : fallbackSrc;

  if ((obra.video || obra.videoFile) && !hasImage) {
    // thumbnailUrl lo provee Youtube/Vimeo cuando se agregue el link en Dato
    imgSrc = (obra.video && obra.video.thumbnailUrl) || fallbackSrc;
  }

  return (
    <div className="works__content-work">
      <div className={`wrapper-image${itemPosition} wrapper-images`}>
        <Image variant="wrapper-image__image" source={imgSrc} alt="" />
        <h3 className={`wrapper-image__name${itemPosition}`}>{obra.title}</h3>
      </div>
      <div className={`wrapper-text wrapper-text${itemPosition}`}>
        <p className={`wrapper-text__paragraph${itemPosition}`}>
          {obra.description}
        </p>
        <Link
          to={obra.slug}
          className={`wrapper-text__details${itemPosition} details-ui`}
        >
          M&aacute;s detalles +
        </Link>
      </div>
    </div>
  );
};

Work.defaultProps = { idx: 0 };
Work.propTypes = {
  idx: PropTypes.number
};

export default Work;
