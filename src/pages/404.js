import React from "react";
import Nav from "../components/Nav";
import { Heading, Center, Text } from "@chakra-ui/core";
import Footer from "../components/footer";
import Head from "../components/head";

export default function Page404() {
  return (
    <React.StrictMode>
      <Head title="UH OH" />
      <Nav />
      <Center textAlign="center" flexDirection="column">
        <Heading>Oops. This page doesn&apos;t exist!</Heading>
        <Text>
          Try again with another page{" "}
          <span role="img" aria-label="img">
            🐱‍💻
          </span>
        </Text>
      </Center>
      <Footer />
    </React.StrictMode>
  );
}
