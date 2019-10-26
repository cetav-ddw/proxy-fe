import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Image from '../../units/Image';
import './workUnit.scss';

const Work = ({ allWorks }) => {
  const structure = allWorks.map((node, index) => {
    let modific = '';
    const workItem = node.node;
    if (index === 1) modific = '--right';
    return (
      <div className="works__content-work" key={workItem.id}>
        <div className={`wrapper-image${modific} wrapper-images`}>
          <Image
            variant="wrapper-image__image"
            source={workItem.images[0].url}
            alt=""
          />
          <h4 className={`wrapper-image__name${modific}`}>{workItem.title}</h4>
        </div>
        <div className={`wrapper-text wrapper-text${modific}`}>
          <p className={`wrapper-text__paragraph${modific}`}>
            {workItem.description}
          </p>
          <Link to="/" className={`wrapper-text__details${modific} details-ui`}>
            mas detalles +
          </Link>
        </div>
      </div>
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
  allWorks: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Work;
