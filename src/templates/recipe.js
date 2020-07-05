import React from "react";
import { graphql, Link as GatsbyLink } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Helmet } from "react-helmet";
import Layout from "../styles/layout";
import { MDXProvider } from "@mdx-js/react";
import RecipeLayout from "../components/recipe-layout";
import Nav from "../components/Nav";
import { Link, VStack, Box, Heading, Text } from "@chakra-ui/core";

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        type
        difficulty
        author
        time
        servings
      }
      body
    }
  }
`;

export default function RecipeTemplate({
  data: {
    mdx: {
      frontmatter: { title, type, difficulty, author, time, servings },
      body,
    },
  },
}) {
  return (
    <Box>
      <Nav />
      <Layout>
        <Helmet>
          <title>Cook {title} — Toucan Recipes</title>
        </Helmet>

        <VStack>
          <Box>
            <Heading>{title}</Heading>
            <Text>{type}</Text>
            <Text>{difficulty}</Text>
            <Text>by {author}</Text>
            <Text>Prep Time: {time}</Text>
            {servings && <Text>Serves {servings} people</Text>}

            <MDXProvider components={{ RecipeLayout }}>
              <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>

            <Link as={GatsbyLink} to="/">
              &larr; back to home
            </Link>
          </Box>
        </VStack>
      </Layout>
    </Box>
  );
}
