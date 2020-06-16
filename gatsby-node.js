exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("failed to create recipes", result.errors);
  }

  const recipes = result.data.allMdx.nodes;

  recipes.forEach(({ frontmatter: { slug } }) => {
    if (slug) {
      actions.createPage({
        path: slug,
        component: require.resolve("./src/templates/recipe.js"),
        context: {
          slug: slug,
        },
      });
    }
  });
};
