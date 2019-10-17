// with Gatsby's useStaticQuery component

import 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import './layout.scss';

const Layout = ({ children }) => {
  useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return children;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
