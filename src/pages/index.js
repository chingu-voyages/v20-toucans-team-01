import React, { useState } from "react";
import { Helmet } from "react-helmet";
import useRecipes from "../hooks/use-recipes";
import RecipePreview from "../components/recipe-preview";
import Nav from "../components/Nav";
import {
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Box,
  Link,
  VStack,
  Button,
  ButtonGroup,
} from "@chakra-ui/core";
import MealTypeBtn from "../components/MealTypeBtn";
import { css } from "@emotion/core";
//import Difficulty from "../components/Difficulty";
//import Mealtype from "../components/Mealtype";

export default function App() {
  const recipes = useRecipes();
  const featuredRecipe = "first recipe";
  var [difficulty, setDifficulty] = useState();
  var [category, setCategory] = useState();

  function getSelHandler(v, setV) {
    return function makeHandler(btnV) {
      return function handler() {
        if (btnV != v) {
          setV(btnV);
        } else {
          setV(undefined);
        }
      };
    };
  }

  var getDiffHandler = getSelHandler(difficulty, setDifficulty);
  var getCategHandler = getSelHandler(category, setCategory);

  return (
    <React.StrictMode>
      <Helmet>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1"
        />
        <title>Toucan Recipes</title>
        <link
          rel="icon"
          href='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="12 0 100 100"><text y=".9em" font-size="90">🥘</text></svg>'
        />
      </Helmet>

      <Nav />

      {/* Main Content */}
      <Box as="main">
        {/* First Section*/}
        <VStack as="section" spacing={5}>
          <Heading fontFamily="aleo, monospace">Featured</Heading>
          <Text textAlign="center">
            Feeling hungry? Enjoy this recipe, curated weekly by a chef lead!
          </Text>
          <RecipePreview
            recipe={recipes.find(
              (recipe) => recipe.title.toLowerCase?.() == featuredRecipe
            )}
          />

          <Heading fontFamily="aleo, monospace">Difficulty</Heading>
          <Text textAlign="center">
            Make choices based on your cooking skill
          </Text>

          <SimpleGrid spacing={10} columns={{ xs: 2, md: 4 }} mb={5}>
            <MealTypeBtn>Breakfast</MealTypeBtn>
            <MealTypeBtn>Brunch</MealTypeBtn>
            <MealTypeBtn>Lunch</MealTypeBtn>
            <MealTypeBtn>Dinner</MealTypeBtn>
          </SimpleGrid>

          {/* Difficulty */}
          <ButtonGroup>
            <Button onClick={getDiffHandler("easy")}>Easy</Button>
            <Button onClick={getDiffHandler("medium")}>Medium</Button>
            <Button onClick={getDiffHandler("hard")}>Hard</Button>
          </ButtonGroup>

          {/* Categories Section */}
          <Heading fontFamily="aleo, monospace">Categories</Heading>
          <ButtonGroup
            css={css`
              button {
                margin-bottom: 1rem;
              }
            `}
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
          >
            <Button onClick={getCategHandler("american")}>American</Button>
            <Button onClick={getCategHandler("greek")}>Greek</Button>
            <Button onClick={getCategHandler("japanese")}>Japanese</Button>
            <Button onClick={getCategHandler("european")}>European</Button>
            <Button onClick={getCategHandler("korean")}>Korean</Button>
          </ButtonGroup>

          <SimpleGrid spacing={10} columns={{ xs: 1, md: 2 }} mb={5}>
            {recipes.map((recipe) => (
              <RecipePreview
                display={
                  /*Show based on difficulty and category*/
                  (!difficulty ||
                    difficulty == recipe.difficulty.toLowerCase?.()) &&
                  (!category || recipe.category?.includes((v) => v == category))
                    ? "unset"
                    : "none"
                }
                key={recipe.slug}
                recipe={recipe}
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Box>

      {/* Footer*/}
      <Flex as="footer" justify="center" mt={4}>
        <Text>
          © 2020 Copyright{" "}
          <Link
            isExternal
            href="https://github.com/chingu-voyages/v20-toucans-team-01"
            color="facebook.500"
          >
            Voyage 20 Toucans Team 01
          </Link>
        </Text>
      </Flex>
    </React.StrictMode>
  );
}
