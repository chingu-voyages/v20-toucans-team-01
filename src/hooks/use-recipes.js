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
    excerpt: recipe.excerpt,
  }));
}
