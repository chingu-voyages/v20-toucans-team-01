import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Link, Image } from "@chakra-ui/core";

export default function RecipePreview({
  recipe: { slug, title, difficulty, image },
}) {
  return (
    <Link as={GatsbyLink} to={`${difficulty}/${slug}`}>
      <Image
        borderRadius="10%"
        src={
          image ??
          "https://images.unsplash.com/photo-1498579809087-ef1e558fd1da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        }
        alt={`Cooked ${title}`}
        width="64"
        height="64"
      />
    </Link>
  );
}
