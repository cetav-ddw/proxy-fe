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
            next {
              slug
            }
            previous {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsObra.edges.map(({node, next, previous}) => {
        const { slug } = node;

        function getSlug(node){
          return node ? node.slug : null
        }

        createPage({
          path: slug,
          component: path.resolve(`./src/templates/obra.jsx`),
          context: {
            slug: slug,
            previous: getSlug(previous),
            next: getSlug(next)
          }
        });
      });
      resolve();
    });
  });
};
