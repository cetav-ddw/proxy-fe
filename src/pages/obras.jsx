import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Header from '../components/sections/header';
import SocialMedia from '../components/sections/social-media';
import ListaObras from '../components/sections/obras';
import Footer from '../components/sections/footer';

const titlePage = 'Obras';

const Obras = ({ data }) => {
  const listaObras =
    (data && data.allDatoCmsObra && data.allDatoCmsObra.edges) || [];

  return (
    <>
      <SEO title={titlePage} />
      <Header />
      <SocialMedia />
      <ListaObras obras={listaObras} />
      <Footer />
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
