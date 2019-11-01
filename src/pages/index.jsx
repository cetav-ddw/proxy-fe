import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layouts/Layout';
import SocialMedia from '../components/sections/social-media';
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
      <Layout videoOpt="home-videos/main.mp4">
        <SocialMedia />
        <Modalidades />
        <ListaObras obras={listaObras} />
        <Link to="/obras" className="btn-obras">
          <span className="btn-obras__text">Ver todas las Obras</span>
        </Link>
      </Layout>
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

export default IndexPage;
