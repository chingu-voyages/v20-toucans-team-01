import React from "react";
import { Helmet } from "react-helmet";
import Nav from "../components/Nav";
import { Heading, Center, Text } from "@chakra-ui/core";

export default function Page404() {
  return (
    <React.StrictMode>
      <Helmet>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1"
        />
        <title>UH OH · Toucan Recipes</title>
        <link
          rel="icon"
          href='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="12 0 100 100"><text y=".9em" font-size="90">🥘</text></svg>'
        />
      </Helmet>
      <Nav />
      <Center textAlign="center" flexDirection="column">
        <Heading>Oops. This page doesn&apos;t exist!</Heading>
        <Text>Try again with another page... Please?</Text>
      </Center>
    </React.StrictMode>
  );
}
