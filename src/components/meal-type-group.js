import React from "react";
import { SimpleGrid } from "@chakra-ui/core";
import MealTypeBtn from "./MealTypeBtn";

export default function MealTypes() {
  return (
    <SimpleGrid spacing={10} columns={{ xs: 2, md: 4 }} mb={5}>
      <MealTypeBtn src="images/pancakes.png">Breakfast</MealTypeBtn>
      <MealTypeBtn src="images/tamagoyaki.png">Brunch</MealTypeBtn>
      <MealTypeBtn src="images/clam_chowder.png">Lunch</MealTypeBtn>
      <MealTypeBtn src="images/rosol.png">Dinner</MealTypeBtn>
    </SimpleGrid>
  );
}
