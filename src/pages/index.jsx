import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layouts/Layout';
import SocialMedia from '../components/sections/social-media';
import Modalidades from '../components/sections/modalidades';
import '../scss/styles.scss';
import '../scss/pages/index.scss';

const titlePage = 'Inicio';

const IndexPage = () => {
  return (
    <>
      <SEO title={titlePage} />
      <Layout imgOpt="home-videos/Home.jpg">
        <SocialMedia />
        <div className="wrapper-hiper">
          <h2>¿QUE ES LA HIPERREALIDAD?</h2>
          <ul>
            <li className="wrapper-hiper__item">&#34;Es la interpretación descompensada de la realidad, creada por nosotros que se admite como verosímil y que llega a sustituir a la realidad en la que se basó&#34;.</li>
            <li className="wrapper-hiper__item">&#34;En la hiperrealidad los simuladores buscan hacer que toda la realidad coincida con sus modelos de simulación&#34;.</li>
            <li className="wrapper-hiper__item">&#34;Es un medio para describir la forma en la conciencia define lo que es considerado real, en un mundo donde los medios de comunicación pueden modelar y filtrar de manera radical la manera en que percibimos un acontecimiento o experiencia&#34;.</li>
          </ul>
        </div>
        <Modalidades />
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
