import { graphql, useStaticQuery } from "gatsby";

export default function useRecipes() {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            type
            difficulty
            image
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map(
    ({ frontmatter: { title, slug, type, difficulty, image }, excerpt }) => ({
      title,
      slug,
      type,
      difficulty,
      image,
      excerpt,
    })
  );
}
