import React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../components/seo';
import Image from '../components/units/Image';
import Header from '../components/sections/header';
import SocialMedia from '../components/sections/social-media';
import Footer from '../components/sections/footer';

import '../scss/pages/obras.scss';

const titlePage = 'Obras';

const Obras = ({ data }) => {
  const obrasProxy = data.allDatoCmsObra.edges.map(({ node: obra }) => {
    return (
      <Link to={obra.slug} className="obra__item" key={obra.id}>
        <div className="obra__item-details">
          <Image
            variant="obra__item-image"
            source={obra.images[0].url}
            alt=""
          />
          <h2 className="obra__item-title">{obra.title}</h2>
          <p className="obra__item-tech">{obra.technique}</p>
        </div>
      </Link>
    );
  });

  return (
    <>
      <SEO title={titlePage} />
      <Header />
      <SocialMedia />
      <section className="obras__wrap">{obrasProxy}</section>
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
          originalId
          images {
            url
            originalId
          }
          title
          slug
        }
      }
    }
  }
`;

export default Obras;
