// Page reserved for breakfast logic.

import React from "react";
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

export default function Breakfast() {
  const recipes = useRecipes();

  return (
    <React.StrictMode>
      <Helmet>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1"
        />
        <title>Breakfast | Toucan Recipes</title>
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
          <Text textAlign="center">
            Feeling hungry? Enjoy this recipe, curated weekly by a chef lead!
          </Text>

          {/* TODO: Refactor this to a smaller page */}
          <Heading fontFamily="aleo, monospace">Featured</Heading>

          <SimpleGrid spacing={10} columns={{ xs: 1, md: 2 }} mb={5}>
            {recipes.map((recipe) => (
              <RecipePreview
                display={
                  recipe.type.toLowerCase?.() == "breakfast" ? "unset" : "none"
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
