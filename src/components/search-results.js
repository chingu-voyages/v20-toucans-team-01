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
  <>
    {!!results.length && (
      <Box
        as="section"
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
          <Heading fontSize="lg" fontWeight="semibold" fontFamily="mono">
            {results.length} {`recipe${results.length > 1 ? "s" : ""}`} found!
          </Heading>
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
        </List>
      </Box>
    )}
  </>
);
export default SearchResults;

// TODO: Old. Only for reference, remove after completed
// <section className="search-results" aria-label="Search results for all posts">
//     {results.length && query && (
//       <h2
//         className="search-results-count"
//         id="search-results-count"
//         aria-live="assertive"
//       >
//         Found {results.length} posts on "{query}"
//       </h2>
//     )}
//     {results.length && (
//       <ol className="search-results-list">
//         {results.map(({ title, image, url, type }) => (
//           <li key={title}>
//             <h3 className="search-results-list__heading">
//               <a href={url} className="search-results-list__link">
//                 {title}
//               </a>
//             </h3>
//             <img src={image} alt="Recipe thumbnail" />
//             <small>{type}</small>
//           </li>
//         ))}
//       </ol>
//     )}
//   </section>
