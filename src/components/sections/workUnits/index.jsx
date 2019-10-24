import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Image from '../../units/Image';
import './workUnit.scss';

const Work = (
  {
    imgProps,
    title,
    description,
    classList,
  },
) => (
  <div className="works__content-work">
    <div className={`wrapper-image${classList} wrapper-images`}>
      <Image
        source={imgProps.url}
        alt={imgProps.alt}
        className="wrapper-image__image"
      />
      <h4 className={`wrapper-image__name${classList}`}>{title}</h4>
      <h4 className={`wrapper-image__name${classList}  lastname`}>{title}</h4>
    </div>
    <div className={`wrapper-text${classList}`}>
      <p className={`wrapper-text__paragraph${classList}`}>{description}</p>
      <Link to="/" className={`nav-list__link${classList}`}>
        + Mas Detalles
      </Link>
    </div>
  </div>
);

Work.defaultProps = {
  classList: '',
};

Work.propTypes = {
  imgProps: PropTypes.objectOf.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  classList: PropTypes.string,
};

export default Work;
