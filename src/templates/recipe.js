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
  Flex,
  Text,
} from "@chakra-ui/core";
import { IoMdTime } from "react-icons/io";
import { FaFlag } from "react-icons/fa";
import { GiChefToque } from "react-icons/gi";
import ImageContext from "../context/image-context";

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
      frontmatter: {
        title,
        type,
        difficulty,
        category,
        image: {
          sharp: { fluid },
        },
      },
      body,
    },
  },
}) {
  return (
    <Box>
      <Nav />
      <Helmet>
        <title>Cook {title} · Toucan Recipes</title>
      </Helmet>

      <VStack>
        <Heading paddingX={5} fontFamily="mono" textAlign="center">
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
            <ImageContext.Provider
              value={{ alt: `${title} recipe image`, fluid }}
            >
              <MDXRenderer>{body}</MDXRenderer>
            </ImageContext.Provider>
          </MDXProvider>
        </Box>

        <Link as={GatsbyLink} to="/" fontWeight="semibold" mb={5}>
          &larr; back to home
        </Link>

        {/* Footer*/}
        <Flex as="footer" justify="center" marginY={4}>
          <Text>
            © 2020 Copyright{" "}
            <Link
              isExternal
              href="https://github.com/chingu-voyages/v20-toucans-team-01"
              color="facebook.500"
            >
              Voyage 20 Toucans Team 01
            </Link>
          </Text>
        </Flex>
      </VStack>
    </Box>
  );
}
