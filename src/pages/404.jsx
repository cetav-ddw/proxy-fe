import React from 'react';
import SEO from '../components/seo';
import '../scss/styles.scss';

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesnt exist... the sadness.</p>
  </>
);

export default NotFoundPage;
