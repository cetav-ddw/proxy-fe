import React from 'react';
import { graphql } from 'gatsby';
import ObraLayout from '../components/layouts/ObraLayout';
import Details from '../components/sections/workdetails/';
import WorkGallery from '../components/sections/workGallery/';
import WorkVideo from '../components/sections/work-video';

const Obra = ({ data }) => {
  const node = data.allDatoCmsObra.edges[0].node;
  const hasVideo = node.video || node.videoFile;

  return (
    <ObraLayout
      mainContent={
        hasVideo ? (
          <WorkVideo mediaData={node} />
        ) : (
          <WorkGallery mediaData={node.images} />
        )
      }
      content={<Details queryinfo={node} />}
    />
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
          thumbnail {
            url
          }
          images {
            url
          }
          video {
            url
            thumbnailUrl
            providerUid
            provider
            title
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
