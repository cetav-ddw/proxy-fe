import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import MainLayout from '../components/layouts/MainLayout';
import Modalidades from '../components/sections/modalidades';
import Work from '../components/sections/workUnits';
import '../scss/styles.scss';

const titlePage = 'Inicio';

const IndexPage = ({ data: { allDatoCmsObra } }) => {
  IndexPage.defaultProps = { data: null };
  IndexPage.propTypes = { data: PropTypes.objectOf };

  const [works, setWorks] = useState(null);
  const [resived, setResived] = useState(false);

  useEffect(() => {
    setWorks(allDatoCmsObra.edges);
    setResived(true);
  }, [works]);

  return (
    <>
      <SEO title={titlePage} />
      <MainLayout
        videoOpt="home-videos/main.mp4"
        mainContent={<Modalidades />}
        content={
          resived && <Work allWorks={works} />
        }
      />
    </>
  );
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
            }
            firstName
            secondName
          }
        }
      }
  }
`;
