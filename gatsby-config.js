module.exports = {
  // eslint-disable-next-line no-unused-labels
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-chakra-ui`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-mdx`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "recipes",
        path: "recipes",
      },
    },
  ],
};
