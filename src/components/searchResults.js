import React from "react";
import "../styles/search-styles.css";

const SearchResults = ({ query, results }) => (
  <section className="search-results" aria-label="Search results for all posts">
    {!!results.length && query && (
      <h2
        className="search-results-count"
        id="search-results-count"
        aria-live="assertive"
      >
        Found {results.length} posts on "{query}"
      </h2>
    )}
    {!!results.length && (
      <ol className="search-results-list">
        {results.map(({ title, image, url, type }) => (
          <li key={title}>
            <h3 className="search-results-list__heading">
              <a href={url} className="search-results-list__link">
                {title}
              </a>
            </h3>
            <img src={image} alt="Recipe thumbnail" />
            <small>{type}</small>
          </li>
        ))}
      </ol>
    )}
  </section>
);

export default SearchResults;
