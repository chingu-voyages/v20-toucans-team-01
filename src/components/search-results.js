import React from "react";
import { Link as GatsbyLink } from "gatsby";
import {
  Box,
  Heading,
  List,
  ListItem,
  Divider,
  Text,
  Link,
} from "@chakra-ui/core";

const SearchResults = ({ results }) => (
  <Box
    as="section"
    aria-label="search results for all recipes"
    position="absolute"
    zIndex={1}
    top={16}
    width={{ base: "50%", md: "17.5rem" }}
    maxW={{ base: "50%" }}
    boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
    border="solid gray.900"
    borderWidth={1}
    borderRadius="0.25rem"
    bgColor="white"
    p={5}
  >
    <List>
      <Heading
        aria-label="assertive"
        fontSize="lg"
        fontWeight="semibold"
        fontFamily="mono"
      >
        {results.length
          ? `${results.length} recipe${results.length > 1 ? "s" : ""} found!`
          : "Sorry, nothing but us crickets! 🦗"}
      </Heading>
      {results.length && (
        <>
          <Divider marginY={3} />
          {results.map(({ slug, title, type, difficulty, excerpt }) => (
            <ListItem key={slug} lineHeight={1.5}>
              <Link
                as={GatsbyLink}
                to={`/${type}/${difficulty}/${slug}`}
                fontWeight="semibold"
              >
                {title}
              </Link>
              <Text fontSize="sm">{excerpt}</Text>
            </ListItem>
          ))}
        </>
      )}
    </List>
  </Box>
);
export default SearchResults;
