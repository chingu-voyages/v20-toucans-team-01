import React from "react";
import { SimpleGrid } from "@chakra-ui/core";
import MealTypeBtn from "./MealTypeBtn";
import { useStaticQuery, graphql } from "gatsby";

export default function MealTypes({ getTypeHandler }) {
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
      <MealTypeBtn
        onClick={getTypeHandler("breakfast")}
        fluid={images.breakfastImg.sharp.fluid}
      >
        Breakfast
      </MealTypeBtn>
      <MealTypeBtn
        onClick={getTypeHandler("brunch")}
        fluid={images.brunchImg.sharp.fluid}
      >
        Brunch
      </MealTypeBtn>
      <MealTypeBtn
        onClick={getTypeHandler("lunch")}
        fluid={images.lunchImg.sharp.fluid}
      >
        Lunch
      </MealTypeBtn>
      <MealTypeBtn
        onClick={getTypeHandler("dinner")}
        fluid={images.dinnerImg.sharp.fluid}
      >
        Dinner
      </MealTypeBtn>
    </SimpleGrid>
  );
}
