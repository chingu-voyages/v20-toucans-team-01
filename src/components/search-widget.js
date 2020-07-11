// Old at the bottom
import React, { useState } from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import { Index } from "lunr";
import SearchResults from "./search-results";
import {
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
} from "@chakra-ui/core";
import { MdSearch } from "react-icons/md";

export default function SearchWidget() {
  const [value, setValue] = useState("");
  // results is now a state variable
  const [results, setResults] = useState([]);
  // Since it's not a page component, useStaticQuery for querying data
  // https://www.gatsbyjs.org/docs/use-static-query/
  const { LunrIndex } = useStaticQuery(graphql`
    query {
      LunrIndex
    }
  `);
  const index = Index.load(LunrIndex.index);
  const { store } = LunrIndex;
  const handleChange = (e) => {
    if (!e.target.value) {
      // Skip query if no input
      return setValue(e.target.value);
    }
    const query = e.target.value;
    setValue(query);
    try {
      const search = index.search(query).map(({ ref }) => {
        return {
          slug: ref,
          ...store[ref],
        };
      });
      setResults(search);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Stack spacing={4} w={{ base: "50%", md: "inherit" }} mr={6}>
      <InputGroup role="search">
        <InputLeftElement>
          <Icon as={MdSearch} name="search" color="gray.300" />
        </InputLeftElement>
        <Input
          color="black"
          type="search"
          placeholder="Find recipes"
          value={value}
          onChange={handleChange}
        />
      </InputGroup>
      <SearchResults results={results} />
    </Stack>
  );
}
