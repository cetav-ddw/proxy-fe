import React from 'react';
import { graphql } from 'gatsby';

const Obra = ({ data }) => {
  return (
    <>
      <h1>Aqui va el detalle de la obra</h1>
    </>
  );
};

export const query = graphql`
  query WorkQuery($slug: String!) {
    allDatoCmsObra(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          id
          technique
          originalId
          images {
            path
            originalId
          }
          title
        }
      }
    }
  }
`;

export default Obra;
