import React from "react";
import { Box } from "@chakra-ui/core";

export default function RecipeLayout({ children }) {
  var sliceIndex = children.findIndex((el) => el.props.mdxType == "ol");
  return sliceIndex ? (
    <>
      <Box>
        <h2>Ingredients</h2>
        {children.slice(0, sliceIndex)}
      </Box>
      <Box>
        <h2>Steps</h2>
        {children.slice(sliceIndex)}
      </Box>
    </>
  ) : (
    <>{children}</>
  );
}
