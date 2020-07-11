import React from "react";
import { Heading, Flex } from "@chakra-ui/core";
import { Link as GatsbyLink } from "gatsby";
import SearchWidget from "./search-widget";

const Nav = ({ isHome }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      maxW="1280px"
      m="1.5rem auto"
    >
      <Flex align="center" mr={5} ml={6}>
        <GatsbyLink to={!isHome && "/"}>
          <Heading
            as="h1"
            color="facebook.500"
            size="lg"
            fontWeight="700"
            fontFamily='"roboto slab", monospace'
            whiteSpace="nowrap"
          >
            toucan recipes
          </Heading>
        </GatsbyLink>
      </Flex>

      <SearchWidget />
    </Flex>
  );
};

export default Nav;
