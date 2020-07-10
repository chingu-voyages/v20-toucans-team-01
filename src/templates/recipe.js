import React from "react";
import { graphql, Link as GatsbyLink } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Helmet } from "react-helmet";
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
  Image,
} from "@chakra-ui/core";
import { IoMdTime } from "react-icons/io";
import { FaFlag } from "react-icons/fa";
import { GiChefToque } from "react-icons/gi";
import GatsbyImage from "gatsby-image";

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        type
        difficulty
        category
        image {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
      body
    }
  }
`;

export default function RecipeTemplate({
  data: {
    mdx: {
      frontmatter: { title, type, difficulty, category, image },
      body,
    },
  },
}) {
  return (
    <Box>
      <Nav />
      <Helmet>
        <title>Cook {title} — Toucan Recipes</title>
      </Helmet>

      <VStack>
        {/* <Image
          as={GatsbyImage}
          fluid={image.sharp.fluid}
          w={{ base: "100%", md: "64" }}
          minH="50%"
          maxH="90vw"
        /> */}
        <Heading
          paddingX={5}
          fontFamily="'aleo', 'Courier New', Courier, monospace"
        >
          {title}
        </Heading>
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

        <Box mt={5}>
          <MDXProvider components={{ RecipeLayout }}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </Box>

        <Link as={GatsbyLink} to="/">
          &larr; back to home
        </Link>
      </VStack>
    </Box>
  );
}
