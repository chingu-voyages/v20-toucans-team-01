// Old Search Form at the bottom
import React, { useState, useRef } from "react"
import { navigate } from "@reach/router"
import {
  Heading,
  Flex,
  InputGroup,
  InputLeftElement,
  Stack,
  Input,
  Icon,
} from "@chakra-ui/core";
import { MdSearch } from "react-icons/md";



const SearchForm = ({ initialQuery = "" }) => {
  // Create a piece of state, and initialize it to initialQuery
  // query will hold the current value of the state
  // and setQuery will let us change it
  const [query, setQuery] = useState(initialQuery);

  // We need to get reference to the search input element
  const inputEl = useRef(null);

  // On inout change use the current value of the input field (e.target.value)
  // to update the state's query value
  const handleChange = e => {
    setQuery(e.target.value)
  }

  // When the form is submitted navigate to /search
  // with a query parameter equal to the vaue within the inout search
  const handleSubmit = e => {
    e.preventDefault()
    // 'inoutEL.current points to the mounted search input element
    const q = inputEl.current.value
    navigate(`/search?q=${q}`)
  }
  return (
    <form role="search" onSubmit={handleSubmit}>
      <label htmlFor="search-input" >
        Search for:
      </label>
      <Input ref={inputEl} id="search-input" type="search" value={query} placeholder="Eggs" onChange={handleChange} />
      {/* <button type="submit">Search</button> */}
    </form>
    
  )
}

export default SearchForm








// import React from "react"
// import { navigate } from "gatsby"
// import "../styles/search-styles.css"

// const SearchForm = ({ query }) => (
//   <form role="search" method="GET">
//     <label htmlFor="search-input">
//       <h1>Search posts</h1>
//     </label>
//     <input
//       type="search"
//       id="search-input"
//       name="keywords"
//       aria-controls="search-results-count"
//       onChange={e =>
//         navigate(`/search?keywords=${encodeURIComponent(e.target.value)}`)
//       }
//       value={query}
//     />
//     <button type="submit">Submit</button>
//   </form>
// )

// export default SearchForm