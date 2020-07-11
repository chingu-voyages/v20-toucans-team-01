// Old at the bottom
import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import lunr, { Index } from "lunr";
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
    const query = e.target.value || "";
    setValue(query);
    if (!query.length) {
      setResults([]);
    }
    const keywords = query.trim().replace(/\*/g, "").toLowerCase().split(/\s+/);

    if (keywords[keywords.length - 1].length < 2) {
      return;
    }
    try {
      let andSearch = [];
      keywords
        .filter((el) => el.length > 1)
        .forEach((el, i) => {
          // per-single-keyword results
          const keywordSearch = index
            .query(function (q) {
              q.term(el, {
                editDistance: el.length > 5 ? 1 : 0,
              });
              q.term(el, {
                wildcard:
                  lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING,
              });
            })
            .map(({ ref }) => {
              return {
                slug: ref,
                ...store[ref],
              };
            });
          andSearch =
            i > 0
              ? andSearch.filter((x) =>
                  keywordSearch.some((el) => el.slug === x.slug)
                )
              : keywordSearch;
        });
      setResults(andSearch);
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
      {value.trim().length > 1 && <SearchResults results={results} />}
    </Stack>
  );
}
