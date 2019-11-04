import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layouts/Layout';
import SocialMedia from '../components/sections/social-media';
import ListaObras from '../components/sections/obras';

const titlePage = 'Pabellón/Pavillion';

const Obras = ({ data }) => {
  const listaObras =
    (data && data.allDatoCmsObra && data.allDatoCmsObra.edges) || [];

  return (
    <>
      <SEO title={titlePage} />
      <Layout>
        <SocialMedia />          
        <ListaObras obras={listaObras} />
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  query AllObrasQuery {
    allDatoCmsObra {
      edges {
        node {
          id
          technique
          description
          originalId
          thumbnail {
            url
          }
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
          slug
        }
      }
    }
  }
`;

export default Obras;
