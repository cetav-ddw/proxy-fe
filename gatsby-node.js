const path = require(`path`);

const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsObra {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsObra.edges.map(({ node: obra }) => {
        createPage({
          path: obra.slug,
          component: path.resolve(`./src/templates/obra.jsx`),
          context: {
            slug: obra.slug
          }
        });
      });
      resolve();
    });
  });
};
