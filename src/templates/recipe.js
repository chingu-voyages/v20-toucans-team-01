import React from "react";
import { graphql, Link as GatsbyLink } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Helmet } from "react-helmet";
import Layout from "../styles/layout";
import { MDXProvider } from "@mdx-js/react";
import RecipeLayout from "../components/recipe-layout";
import Nav from "../components/Nav";
import {
  Link,
  VStack,
  Box,
  Heading,
  Tag,
  HStack,
  TagLeftIcon,
} from "@chakra-ui/core";
import { IoMdTime } from "react-icons/io";
import { FaFlag } from "react-icons/fa";
import { GiChefToque } from "react-icons/gi";

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
              <Tag size="md" variant="outline" colorScheme="red">
                <TagLeftIcon as={IoMdTime} mr={1} />
                {type[0].toUpperCase() + type.substring(1)}
              </Tag>
              <Tag size="md" colorScheme="gray">
                <TagLeftIcon as={GiChefToque} mr={1} />
                {difficulty[0].toUpperCase() + difficulty.substring(1)}
              </Tag>
              <Tag size="md" variant="solid" colorScheme="blue">
                <TagLeftIcon as={FaFlag} mr={1} />
                {category[0].toUpperCase() + category.substring(1)}
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
