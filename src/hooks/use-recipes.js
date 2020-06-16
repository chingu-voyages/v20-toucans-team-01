import { graphql, useStaticQuery } from "gatsby";

export default function useRecipes() {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            author
            time
            servings
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map((recipe) => ({
    title: recipe.frontmatter.title,
    author: recipe.frontmatter.author,
    slug: recipe.frontmatter.slug,
    time: recipe.frontmatter.time,
    servings: recipe.frontmatter.servings,
    excerpt: recipe.excerpt,
  }));
}
