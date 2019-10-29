import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import MainLayout from '../components/layouts/MainLayout';
import Modalidades from '../components/sections/modalidades';
import ListaObras from '../components/sections/obras';
import '../scss/styles.scss';

const titlePage = 'Inicio';

const IndexPage = ({ data }) => {
  const listaObras =
    (data && data.allDatoCmsObra && data.allDatoCmsObra.edges) || [];

  return (
    <>
      <SEO title={titlePage} />
      <MainLayout
        videoOpt="home-videos/main.mp4"
        mainContent={ <Modalidades /> }
        content={ <ListaObras obras={listaObras} /> }
      />
    </>
  );
};

IndexPage.defaultProps = { data: {} };
IndexPage.propTypes = {
  data: PropTypes.object
};

export const query = graphql`
  {
    allDatoCmsObra(limit: 3) {
      edges {
        node {
          artist
          bio
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
          slug
        }
      }
    }
  }
`;

export default IndexPage;
