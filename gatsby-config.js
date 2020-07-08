module.exports = {
  siteMetadata: {
    title: "Toucan Recipes",
    author: "Toucan Team 01",
    description: "A recipe tool to figure out what you can cook!",
  },
  // eslint-disable-next-line no-unused-labels
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-chakra-ui`,
    `gatsby-plugin-netlify`,
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    `gatsby-plugin-mdx`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "recipes",
        path: "recipes",
      },
    },
    {
      resolve: "gatsby-plugin-lunr",
      options: {
        languages: [{ name: "en" }],
        fields: [
          { name: "title", store: true },
          { name: "image", store: true },
          { name: "slug", store: true },
          { name: "type" },
          { name: "difficulty", store: true },
          { name: "time", store: true },
          { name: "author", store: true },
        ],
        resolvers: {
          Mdx: {
            title: (node) => node.frontmatter.title,
            image: (node) => node.frontmatter.image,
            slug: (node) => node.frontmatter.slug,
            type: (node) => node.frontmatter.type,
            difficulty: (node) => node.frontmatter.difficulty,
            time: (node) => node.frontmatter.time,
            author: (node) => node.frontmatter.author,
          },
        },
        filename: "search_index.json",
      },
    },
  ],
};
