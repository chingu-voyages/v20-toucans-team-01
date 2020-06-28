import React from "react";
import { Helmet } from "react-helmet";
import useRecipes from "../hooks/use-recipes";
import RecipePreview from "../components/recipe-preview";
import Nav from "../components/Nav";
import { SimpleGrid, Flex, Heading, Text, Box, Link } from "@chakra-ui/core";
//import Difficulty from "../components/Difficulty";
//import Mealtype from "../components/Mealtype";

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

      {/* Main Content */}
      <Box as="main">
        {/* First Section*/}
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

        {/* Categories*/}
        <Flex align="center" justify="center" mt={5} mr={5} mb={5}>
          <Heading as="h2" size="xl" fontWeight="700">
            Categories
          </Heading>
        </Flex>
      </Box>

      {/* Footer*/}
      <Flex as="footer" justify="center" mt={4}>
        <Text>
          © 2020 Copyright{" "}
          <Link
            isExternal
            href="https://github.com/chingu-voyages/v20-toucans-team-01"
          >
            Voyage 20 Toucans Team 01
          </Link>
        </Text>
      </Flex>
    </React.StrictMode>
  );
}
