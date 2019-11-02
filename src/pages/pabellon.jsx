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
        <section className="desc-pabellon">
          <h1 className="pabellon__img">Pabellón</h1>
          <div className="wrapper__des">
            <p>
              En esta modalidad se participó con una obra de nuevos medios
              relacionados con la hiperrealidad para ser expuesta durante las
              fechas de la bienal.
            </p>
          </div>
        </section>
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
