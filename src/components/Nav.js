import React from "react";
import "../styles/bootstrap.min.css";
import "../styles/global.css";
import {
  Box,
  Heading,
  Flex,
  Link,
  InputGroup,
  InputLeftElement,
  Stack,
  Input,
  Icon,
} from "@chakra-ui/core";
import { Link as GatsbyLink } from "gatsby";
import { MdSearch } from "react-icons/md";

const MenuLink = ({ children }) => (
  <Link as={GatsbyLink} mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Link>
);

const Nav = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify={{ xs: "center", md: "space-between" }}
      wrap="wrap"
      padding="1.5rem"
      bg="teal.500"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg">
          Toucan Recipes
        </Heading>
      </Flex>

      <Box
        display={{ xs: "none", md: "flex" }}
        width={{ xs: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuLink>Breakfast</MenuLink>
        <MenuLink>Brunch</MenuLink>
        <MenuLink>Lunch</MenuLink>
        <MenuLink>Dinner</MenuLink>
      </Box>

      <Stack spacing={4}>
        <InputGroup>
          <InputLeftElement
            children={<Icon as={MdSearch} name="search" color="gray.300" />}
          />
          <Input color="black" type="search" placeholder="Search" />
        </InputGroup>
      </Stack>
    </Flex>
  );
};

export default Nav;
