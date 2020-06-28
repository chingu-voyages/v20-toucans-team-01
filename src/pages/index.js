import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import useRecipes from "../hooks/use-recipes";
import RecipePreview from "../components/recipe-preview";
import Layout from "../styles/layout";
import "../styles/bootstrap.min.css";
import "../styles/global.css";
import Difficulty from "../components/Difficulty";
import Mealtype from "../components/Mealtype";
import Nav from "../components/Nav";
import { SimpleGrid, Flex, Heading, Text, Box } from "@chakra-ui/core";

export default function App() {
  const recipes = useRecipes();

  return (
    <React.StrictMode>
      <Helmet>
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

      {/* Main page starts here */}
      <Box as="main">
        {/* First section starts here*/}

        <Flex align="center" justify="center" mt={5} mr={5} mb={5}>
          <Heading as="h2" size="xl" fontWeight="700">
            Weekly Chef&apos;s Specials
          </Heading>
        </Flex>
        <SimpleGrid
          align="center"
          justify="center"
          columns={{ xs: "1", md: "2" }}
          spacing="4"
        >
          {recipes.map((recipe) => (
            <RecipePreview key={recipe.slug} recipe={recipe} />
          ))}
        </SimpleGrid>
        {/* First section ends here */}

        {/* Second section starts here*/}
        <Flex align="center" justify="center" mt={5} mr={5} mb={5}>
          <Heading as="h2" size="xl" fontWeight="700">
            Categories
          </Heading>
        </Flex>
        {/* <div>
        <div>
          <h2>Categories</h2>
        </div>
        <div>
          {recipes.map((recipe) => (
            <RecipePreview key={recipe.slug} recipe={recipe} />
          ))}
        </div>
        <div>
          {recipes.map((recipe) => (
            <RecipePreview key={recipe.slug} recipe={recipe} />
          ))}
        </div>
        <div>
          {recipes.map((recipe) => (
            <RecipePreview key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      </div> */}
        {/* Second section ends here */}
      </Box>

      {/* Footer starts here */}
      <Flex as="footer" justify="center" mt={4}>
        <Text>
          © 2020 Copyright{" "}
          <a href="https://github.com/chingu-voyages/v20-toucans-team-01">
            Voyage 20 Toucans Team 01
          </a>
        </Text>
      </Flex>
      {/* Footer ends here */}
    </React.StrictMode>
  );
}
