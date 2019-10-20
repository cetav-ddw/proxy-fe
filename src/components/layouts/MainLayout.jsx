import React from 'react';
import PropTypes from 'prop-types';
// aquí estará el componente de Footer (se usa en todos los pages)

const MainLayout = ({ head, sections }) => (
  <>
    {head}
    {sections}
  </>
);

MainLayout.propTypes = {
  head: PropTypes.node.isRequired,
  sections: PropTypes.node.isRequired,
};


export default MainLayout;
