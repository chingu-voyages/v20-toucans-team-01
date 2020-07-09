import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Link, Image } from "@chakra-ui/core";
import GatsbyImage from "gatsby-image";

export default function RecipePreview({
  recipe: { title, slug, type, difficulty, image },
  ...props
}) {
  return (
    <Link
      borderRadius="10%"
      as={GatsbyLink}
      to={`${type}/${difficulty}/${slug}`}
      {...props}
    >
      <Image
        as={GatsbyImage}
        borderRadius="10%"
        fluid={image.sharp.fluid}
        alt={`Cooked ${title}`}
        boxSize={64}
      />
    </Link>
  );
}
