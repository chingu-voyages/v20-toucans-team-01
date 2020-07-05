import { graphql, useStaticQuery } from "gatsby";

export default function useRecipes() {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            difficulty
            author
            image
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map(
    ({ frontmatter: { title, slug, difficulty, author, image }, excerpt }) => ({
      title,
      difficulty,
      slug,
      author,
      image,
      excerpt,
    })
  );
}
