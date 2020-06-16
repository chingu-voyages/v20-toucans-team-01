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
  var { title, author, time, servings } = recipe.frontmatter;
  return (
    <>
      <Helmet>
        <title>{title} | Toucan Recipes</title>
      </Helmet>
      <h1>{title}</h1>
      <p>by {author}</p>
      <p>Prep Time: {time}</p>
      {servings && <p>Serves {servings} people</p>}

      <MDXRenderer>{recipe.body}</MDXRenderer>
      <Link to="/">&larr; back to home</Link>
    </>
  );
}
