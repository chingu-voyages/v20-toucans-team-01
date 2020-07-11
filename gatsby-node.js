// Lunr Search Setup
const { GraphQLJSONObject } = require("graphql-type-json");
const striptags = require("striptags");
const lunr = require("lunr");

exports.createResolvers = ({ cache, createResolvers }) => {
  createResolvers({
    Query: {
      LunrIndex: {
        type: GraphQLJSONObject,
        resolve: (source, args, context, info) => {
          const recipeNodes = context.nodeModel.getAllNodes({
            type: "Mdx",
          });
          const type = info.schema.getType("Mdx");
          return createIndex(recipeNodes, type, cache);
        },
      },
    },
  });
};

const createIndex = async (recipeNodes, type, cache) => {
  const cacheKey = "LunrIndex";
  const cached = await cache.get(cacheKey);
  if (cached) {
    return cached;
  }
  const documents = [];
  const store = {};
  // Iterate over all recipes
  for (const node of recipeNodes) {
    const { slug } = node.frontmatter;
    const title = node.frontmatter.title;
    const [html, excerpt] = await Promise.all([
      // MDX uses body as html, MDX html for RSS feeds
      type.getFields().body.resolve(node),
      type.getFields().excerpt.resolve(node, { pruneLength: 40 }),
    ]);
    // Once html is resolved, add a slug-title-content object to the documents array
    documents.push({
      slug: node.frontmatter.slug,
      title: node.frontmatter.title,
      type: node.frontmatter.type,
      difficulty: node.frontmatter.difficulty,
      content: striptags(html),
    });
    store[slug] = {
      title,
      excerpt,
    };
  }
  const index = lunr(function () {
    this.ref("slug");
    this.field("title");
    this.field("excerpt");
    for (const doc of documents) {
      this.add(doc);
    }
  });
  const json = { index: index.toJSON(), store };
  await cache.set(cacheKey, json);
  return json;
};

// Recipe pages
exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
            type
            difficulty
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("failed to create recipes", result.errors);
  }

  const recipes = result.data.allMdx.nodes;

  recipes.forEach(({ frontmatter: { slug, type, difficulty } }) => {
    if (slug) {
      actions.createPage({
        path: `${type}/${difficulty}/${slug}`,
        component: require.resolve("./src/templates/recipe.js"),
        context: {
          slug: slug,
        },
      });
    }
  });
};
