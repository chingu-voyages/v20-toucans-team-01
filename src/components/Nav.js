import React from "react";
import {
  Heading,
  Flex,
  InputGroup,
  InputLeftElement,
  Stack,
  Input,
  Icon,
} from "@chakra-ui/core";
import { Link as GatsbyLink } from "gatsby";
import { MdSearch } from "react-icons/md";


const Nav = ({ isHome }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1.5rem"
      maxW="1280px"
      m="0 auto"
    >
      <Flex align="center" mr={5}>
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

      {/* <Stack spacing={4} w={{ base: "50%", md: "inherit" }}>
        <InputGroup>
          <InputLeftElement>
            <Icon as={MdSearch} name="search" color="gray.300" />
          </InputLeftElement>

          <Input color="black" type="search" placeholder="Search" />
        </InputGroup>
      </Stack> */}
    </Flex>
  );
};

export default Nav;
