import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import MainLayout from '../components/layouts/MainLayout';
import Modalidades from '../components/sections/modalidades';
import '../scss/styles.scss';

const titlePage = 'Inicio';

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <>
      <SEO title={titlePage} />
      <MainLayout
        videoOpt="home-videos/main.mp4"
        mainContent={<Modalidades />}
        content={<p>works</p>}
      />
    </>
  );
};

IndexPage.propTypes = {
  data: PropTypes.string.isRequired,
};

export default IndexPage;

export const query = graphql`
    { 
      allDatoCmsObra {
        edges {
          node {
            artist
            bio
            description
            id
            locale
            technique
            title
            year
          }
        }
      }
  }
`;
