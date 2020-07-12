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
      borderRadius={10}
      as={GatsbyLink}
      to={`${type}/${difficulty}/${slug}`}
      {...props}
    >
      <Image
        as={GatsbyImage}
        borderWidth={1}
        borderStyle="solid"
        borderColor="gray.300"
        boxShadow="rgba(0,0,0,0.1) 0px 1px 3px 0px, rgba(0,0,0,0.06) 0px 1px 2px 0px"
        borderRadius={10}
        fluid={image.sharp.fluid}
        alt={`Cooked ${title}`}
        boxSize={64}
      />
    </Link>
  );
}
