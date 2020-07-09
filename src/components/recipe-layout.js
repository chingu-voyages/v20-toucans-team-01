import React from "react";
import { Box, Divider } from "@chakra-ui/core";
import { css } from "@emotion/core";

export default function RecipeLayout({ children }) {
  var sliceIndex = children.findIndex((el) => el.props.mdxType == "ol");
  return sliceIndex ? (
    <Box
      css={css`
        ul,
        ol {
          padding-left: 1.2rem;
        }
        li {
          margin-top: 0.25rem;
        }
        h1,
        h2,
        h3 {
          font-family: "aleo", "Courier New", Courier, monospace;
          font-size: 1.5rem;
          font-weight: 600;
        }
        max-width: 80vw;
      `}
    >
      <Box>
        <h2>Ingredients</h2>
        {children.slice(0, sliceIndex)}
      </Box>
      <Divider marginY={5} />
      <Box>
        <h2>Steps</h2>
        {children.slice(sliceIndex)}
      </Box>
    </Box>
  ) : (
    <>{children}</>
  );
}
