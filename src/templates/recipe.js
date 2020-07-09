import React from "react";
import { graphql, Link as GatsbyLink } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Helmet } from "react-helmet";
import Layout from "../styles/layout";
import { MDXProvider } from "@mdx-js/react";
import RecipeLayout from "../components/recipe-layout";
import Nav from "../components/Nav";
import { Link, VStack, Box, Heading, Tag, HStack } from "@chakra-ui/core";

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        type
        difficulty
        category
      }
      body
    }
  }
`;

export default function RecipeTemplate({
  data: {
    mdx: {
      frontmatter: { title, type, difficulty, category },
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
            <HStack isInline>
              <Tag size="sm" variant="outline" colorScheme="red">
                {type[0].toLowerCase() + type.substring(1)}
              </Tag>
              <Tag size="sm" colorScheme="gray">
                {difficulty[0].toLowerCase() + difficulty.substring(1)}
              </Tag>
              <Tag size="sm" variant="solid" colorScheme="blue">
                {category[0].toLowerCase() + category.substring(1)}
              </Tag>
            </HStack>

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
