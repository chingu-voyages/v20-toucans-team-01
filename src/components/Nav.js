import React from "react";
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
  Button,
} from "@chakra-ui/core";
import { Link as GatsbyLink } from "gatsby";
import { MdSearch } from "react-icons/md";

const MenuLink = ({ children }) => (
  <Link as={GatsbyLink} mt={{ base: 4, md: 0 }} mr={6} display="block">
    <Button variant="link" color="white" variantColor="teal">
      {children}
    </Button>
  </Link>
);

const Nav = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify={{ base: "center", md: "space-between" }}
      wrap="wrap"
      padding="1.5rem"
      bg="teal.500"
      color="white"
    >
      <Flex align="center" mr={{ sm: 5 }}>
        <Heading as="h1" size="lg" fontWeight="700">
          Toucan Recipes
        </Heading>
      </Flex>

      <Box
        display={{ base: "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
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
          <InputLeftElement>
            <Icon as={MdSearch} name="search" color="gray.300" />
          </InputLeftElement>

          <Input color="black" type="search" placeholder="Search" />
        </InputGroup>
      </Stack>
    </Flex>
  );
};

export default Nav;
