import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import MainLayout from '../components/layouts/MainLayout';
import Modalidades from '../components/sections/modalidades';
import Work from '../components/sections/work';
import '../scss/styles.scss';

const titlePage = 'Inicio';

const IndexPage = ({ data }) => {
  // usar hooks para que la data sea se
  console.log(data.allDatoCmsObra.edges);
  return (
    <>
      <SEO title={titlePage} />
      <MainLayout
        videoOpt="home-videos/main.mp4"
        mainContent={<Modalidades />}
        content={
          (
            <Work
              allWorks={data.allDatoCmsObra.edges}
            />
          )
        }
      />
    </>
  );
};

IndexPage.propTypes = {
  data: PropTypes.objectOf.isRequired,
};

export default IndexPage;

export const query = graphql`
    { 
      allDatoCmsObra(limit: 3){
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
              alt
            }
            firstName
            secondName
          }
        }
      }
  }
`;
