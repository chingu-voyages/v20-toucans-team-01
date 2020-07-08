import React from "react";
import { SimpleGrid } from "@chakra-ui/core";
import MealTypeBtn from "./MealTypeBtn";
import { useStaticQuery, graphql } from "gatsby";

export default function MealTypes() {
  var images = useStaticQuery(graphql`
    fragment getImg on File {
      sharp: childImageSharp {
        fluid {
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
      <MealTypeBtn fluid={images.breakfastImg.sharp.fluid}>
        Breakfast
      </MealTypeBtn>
      <MealTypeBtn fluid={images.brunchImg.sharp.fluid}>Brunch</MealTypeBtn>
      <MealTypeBtn fluid={images.lunchImg.sharp.fluid}>Lunch</MealTypeBtn>
      <MealTypeBtn fluid={images.dinnerImg.sharp.fluid}>Dinner</MealTypeBtn>
    </SimpleGrid>
  );
}
