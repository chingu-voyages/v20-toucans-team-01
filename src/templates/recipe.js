import React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Helmet } from "react-helmet";

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        time
        servings
      }
      body
    }
  }
`;

export default function RecipeTemplate({ data: { mdx: recipe } }) {
  return (
    <>
      <Helmet>
        <title>{recipe.frontmatter.title} | Toucan Recipes</title>
      </Helmet>
      <h1>{recipe.frontmatter.title}</h1>
      <p>by {recipe.frontmatter.author}</p>
      <p>Prep Time: {recipe.frontmatter.time}</p>
      {recipe.frontmatter.servings && (
        <p>Serves {recipe.frontmatter.servings} people</p>
      )}

      <MDXRenderer>{recipe.body}</MDXRenderer>
      <Link to="/">&larr; back to home</Link>
    </>
  );
}
