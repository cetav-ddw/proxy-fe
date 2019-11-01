import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import SEO from '../components/seo';
import MainLayout from '../components/layouts/MainLayout';
import Modalidades from '../components/sections/modalidades';
import ListaObras from '../components/sections/obras';
import '../scss/styles.scss';
import '../scss/pages/index.scss';

const titlePage = 'Inicio';

const IndexPage = ({ data }) => {
  const listaObras =
    (data && data.allDatoCmsObra && data.allDatoCmsObra.edges) || [];

  return (
    <>
      <SEO title={titlePage} />
      <MainLayout
        videoOpt="home-videos/main.mp4"
        mainContent={<Modalidades />}
        content={
          <>
            <div className="wrapper__des--center">
              <h2>¿QUE ES LA HIPERREALIDAD?</h2>
              <p>
                &quot;Es la interpretación descompensada de la realidad, creada por
                nosotros que se admite como verosímil y que llega a sustituir a la
                realidad en la que se basó&quot;.
              </p>
              <p>
                &quot;En la hiperrealidad los simuladores buscan hacer que toda la
                realidad coincida con sus modelos de simulación&quot;.
              </p>
              <p>
                &quot;Es un medio para describir la forma en la conciencia define lo
                que es considerado real, en un mundo donde los medios de
                comunicación pueden modelar y filtrar de manera radical la manera en
                que percibimos un acontecimiento o experiencia&quot;.
              </p>
            </div>
            <ListaObras obras={listaObras} />
            <Link to="/obras" className="btn-obras">
              <span className="btn-obras__text">Ver todas las Obras</span>
            </Link>
          </>
        }
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
