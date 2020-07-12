import React from "react";
import { SimpleGrid } from "@chakra-ui/core";
import MealTypeBtn from "./MealTypeBtn";
import { useStaticQuery, graphql } from "gatsby";

export default function MealTypes({ getTypeHandler, type }) {
  var images = useStaticQuery(graphql`
    fragment getImg on File {
      sharp: childImageSharp {
        fluid(maxWidth: 256, maxHeight: 256) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    query {
      breakfastImg: file(relativePath: { eq: "breakfast.png" }) {
        ...getImg
      }
      brunchImg: file(relativePath: { eq: "brunch.png" }) {
        ...getImg
      }
      lunchImg: file(relativePath: { eq: "lunch.png" }) {
        ...getImg
      }
      dinnerImg: file(relativePath: { eq: "dinner.png" }) {
        ...getImg
      }
    }
  `);
  return (
    <SimpleGrid spacing={10} columns={{ xs: 2, md: 4 }} mb={5}>
      {["breakfast", "brunch", "lunch", "dinner"].map((btnType) => (
        <MealTypeBtn
          key={btnType}
          btnType={btnType}
          getTypeHandler={getTypeHandler}
          type={type}
          fluid={images[`${btnType}Img`].sharp.fluid}
        />
      ))}
    </SimpleGrid>
  );
}
