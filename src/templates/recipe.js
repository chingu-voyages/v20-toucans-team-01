import React from "react";
import { graphql, Link as GatsbyLink } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Helmet } from "react-helmet";
import Layout from "../styles/layout";
import { MDXProvider } from "@mdx-js/react";
import RecipeLayout from "../components/recipe-layout";
import Nav from "../components/Nav";
import { Link, VStack } from "@chakra-ui/core";

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
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
      frontmatter: { title, difficulty, author, time, servings },
      body,
    },
  },
}) {
  return (
    <div>
      <Nav />
      <Layout>
        <Helmet>
          <title>Cook {title} — Toucan Recipes</title>
        </Helmet>

        <VStack>
          <div>
            <h1>{title}</h1>
            <p>Difficulty: {difficulty}</p>
            <p>by {author}</p>
            <p>Prep Time: {time}</p>
            {servings && <p>Serves {servings} people</p>}

            <MDXProvider components={{ RecipeLayout }}>
              <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>

            <Link as={GatsbyLink} to="/">
              &larr; back to home
            </Link>
          </div>
        </VStack>
      </Layout>
    </div>
  );
}
