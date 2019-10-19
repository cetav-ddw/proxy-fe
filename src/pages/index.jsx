import React from 'react';
import SEO from '../components/seo';
import Header from '../components/layouts/header';

const IndexPage = () => (
  // posibles soluciones (nota para que no se me olvide)
  // poner variables constantes de el nombre de mi router para
  // hacer logica y decidir en que momentos se renderea video en (infoartist y todas las obras)
  <>
    <SEO title="proxy" />
    <Header />
  </>
);

export default IndexPage;
