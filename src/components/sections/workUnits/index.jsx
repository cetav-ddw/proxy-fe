import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Image from '../../units/Image';
import './workUnit.scss';


const Work = ({ allWorks }) => {
  const node = allWorks.map((item) => item.node);
  let modific = '';
  const structure = node.map((i, index) => {
    if (index === 1) modific = '--right';
    return (
      <>
        <div className="works__content-work">
          <div className={`wrapper-image${modific} wrapper-images`}>
            <Image variant="wrapper-image__image" source={i.images[0].url} alt="arte" />
            <h4 className={`wrapper-image__name${modific}`}>{i.firstName}</h4>
            <h4 className={`wrapper-image__name${modific} lastname`}>{i.secondName}</h4>
          </div>
          <div className={`wrapper-text wrapper-text${modific}`}>
            <p className={`wrapper-text__paragraph${modific}`}>{i.description}</p>
            <Link to="/" className={`wrapper-text__details${modific} details-ui`}>mas detalles +</Link>
          </div>
        </div>
      </>
    );
  });

  return (
    <section className="works">
      <h2>Obras</h2>
      {structure}
    </section>
  );
};

Work.propTypes = {
  allWorks: PropTypes.objectOf.isRequired,
};

export default Work;
