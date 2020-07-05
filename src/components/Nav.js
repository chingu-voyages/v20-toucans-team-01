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

const MenuLink = ({ children, ...props }) => (
  <Link
    as={GatsbyLink}
    mt={{ base: 4, md: 0 }}
    mr={6}
    display="block"
    {...props}
  >
    <Button fontWeight="medium" variant="link" color="blackAlpha.800">
      {children}
    </Button>
  </Link>
);

const Nav = () => {
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

      <Stack spacing={4} w={{ base: "50%", md: "inherit" }}>
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
