import React from 'react';
import { graphql } from 'gatsby';
import ObraLayout from '../components/layouts/ObraLayout';
import Details from '../components/sections/workdetails/';
import WorkGallery from '../components/sections/workGallery/'

const Obra = ({ data }) => {
  const node = data.allDatoCmsObra.edges[0].node;
  return (
    <>
      <ObraLayout
        mainContent={<WorkGallery mediaData={node.images} />}
        content={<Details queryinfo={node} />}
      />
    </>
  );
};

export const query = graphql`
  query WorkQuery($slug: String!) {
    allDatoCmsObra(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          artist
          bio
          country
          description
          id
          locale
          technique
          year
          images {
            url
          }
          video {
            url
            thumbnailUrl
          }
          videoFile {
            url
          }
          title
        }
      }
    }
  }
`;

export default Obra;
