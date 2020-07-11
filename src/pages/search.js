// Old at the bottom
import React from "react";
import { Link, graphql } from "gatsby";
import { Index } from "lunr";
import SearchForm from "../components/searchForm";
import Layout from "../styles/layout";

// We can access the results of the page GraphQL query via the data props
const SearchPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.siteTitle;

  // We can read what follows the ?q=here
  // URL SearchParams provides a native way to get URL params
  // location.search.slice(1) gets rid of the "?"
  const params = new URLSearchParams(location.search.slice(1));
  const q = params.get("q") || "";

  // LunrIndex is available via page query
  const { store } = data.LunrIndex;
  // Lunr in action here
  const index = Index.load(data.LunrIndex.index);
  let results = [];
  results = index.search(q).map(({ ref }) => {
    // Map search results to an array of {slug, title, excerpt} objects
    return {
      slug: ref,
      ...store[ref],
    };
  });

  return (
    <Layout location={location} title={siteTitle}>
      {q ? <h1>Search results</h1> : <h1>What are you looking for?</h1>}
      <SearchForm initialQuery={q} />
      {results.length ? (
        results.map(({ slug, title, type, difficulty, excerpt }) => {
          return (
            <article key={slug}>
              <h2>
                <Link to={`/${type}/${difficulty}/${slug}`}>
                  {title || slug}
                </Link>
              </h2>
              <p>{excerpt}</p>
            </article>
          );
        })
      ) : (
        <p>Nothing found.</p>
      )}
    </Layout>
  );
};

export default SearchPage;
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    LunrIndex
  }
`;

// import React, { useState, useEffect } from "react"
// import { graphql } from 'gatsby'
// import debounce from "lodash.debounce"
// import SearchForm from "../components/searchForm"
// import SearchResults from "../components/searchResults"

// const Search = ({ data, location }) => {
//   const [results, setResults] = useState([])
//   const searchQuery = new URLSearchParams(location.search).get("keywords") || ""

//   useEffect(() => {
//     if (searchQuery && window.__LUNR__) {
//       const debouncedSearch = debounce(async () => {
//         const lunr = await window.__LUNR__.__loaded
//         const refs = lunr.en.index.search(searchQuery)
//         const posts = refs.map(({ ref }) => lunr.en.store[ref])

//         setResults(posts)
//       }, 500)

//       debouncedSearch()
//     }

//     if (!searchQuery) setResults([])
//   }, [location.search])

//   return (
//     <div location={location} >
//       <SearchForm query={searchQuery} />
//       <SearchResults query={searchQuery} results={results} />
//     </div>
//   )
// }

// export default Search

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
