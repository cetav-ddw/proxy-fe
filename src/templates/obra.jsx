import React from 'react';
import { graphql } from 'gatsby';
import ObraLayout from '../components/layouts/ObraLayout';
import Details from '../components/sections/workdetails';
import WorkGallery from '../components/sections/workGallery';
import WorkVideo from '../components/sections/work-video';
import WorkPaginator from '../components/sections/work-paginator';

const Obra = ({ data, pageContext }) => {
  const node = data.allDatoCmsObra.edges[0].node;
  const hasVideo = node.video || node.videoFile;
  const { next, previous } = pageContext;

  return (
    <ObraLayout>
      {hasVideo ? (
        <WorkVideo mediaData={node} />
      ) : (
        <WorkGallery mediaData={node.images} title={node.title} />
      )}
      <Details queryinfo={node} />
      <WorkPaginator next={next} previous={previous} />
    </ObraLayout>
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
            fluid(imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          link
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
