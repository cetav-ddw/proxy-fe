import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import MainLayout from '../components/layouts/MainLayout';
import Modalidades from '../components/sections/modalidades';
import Work from '../components/sections/workUnits';
import '../scss/styles.scss';

const titlePage = 'Inicio';

const IndexPage = ({ data }) => {
  IndexPage.defaultProps = { data: [] };
  IndexPage.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
  };

  return (
    <>
      <SEO title={titlePage} />
      <MainLayout
        videoOpt="home-videos/main.mp4"
        mainContent={<Modalidades />}
        content={<Work allWorks={data.allDatoCmsObra.edges} />}
      />
    </>
  );
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
          firstName
          secondName
        }
      }
    }
  }
`;

export default IndexPage;
