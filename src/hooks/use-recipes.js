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
            image
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map(
    ({ frontmatter: { title, author, slug, image }, excerpt }) => ({
      title,
      author,
      slug,
      image,
      excerpt,
    })
  );
}
