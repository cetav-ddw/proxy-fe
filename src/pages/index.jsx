import React from 'react';
import SEO from '../components/seo';
import Modalidades from '../components/sections/modalidades/Modalidades';
// Load styles.
import '../scss/styles.scss';

const IndexPage = () => (
  <div>
    <SEO title="proxy" />
    <h1>Proxy 2019</h1>
    <Modalidades />
  </div>
);

export default IndexPage;
