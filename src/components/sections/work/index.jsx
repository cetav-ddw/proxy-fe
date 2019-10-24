import React from 'react';
import PropTypes from 'prop-types';
import WorkComp from '../workUnits';

const Work = ({ allWorks }) => {
  const structure = (
    allWorks.node.map((item, index) => (
      <section className="works">
        <WorkComp
          imgProps={
            { url: item.images.url, alt: item.images.alt }
          }
          title={
            { firName: item.firstName, secondName: item.secondName }
          }
          description={item.description}
          classList={
            index === 1 && 'right'
          }
        />
      </section>
    ))
  );

  return (
    <>
      {
        structure
      }
    </>
  );
};

Work.propTypes = {
  allWorks: PropTypes.arrayOf.isRequired,
};

export default Work;
