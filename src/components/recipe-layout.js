import React, { useContext } from "react";
import { Box, Divider, Flex, Image } from "@chakra-ui/core";
import GatsbyImage from "gatsby-image";
import { css } from "@emotion/core";
import ImageContext from "../context/image-context";

export default function RecipeLayout({ children }) {
  var sliceIndex = children.findIndex((el) => el.props.mdxType == "ol");
  const { alt, fluid } = useContext(ImageContext);

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
          margin-top: 1rem;
        }
        a {
          color: blueviolet;
        }
        max-width: 1280px;
        padding-right: 1.5rem;
        padding-left: 1.5rem;
      `}
    >
      <Image
        float={{ md: "right" }}
        marginX="auto"
        as={GatsbyImage}
        alt={alt}
        fluid={fluid}
        borderWidth={1}
        borderStyle="solid"
        borderColor="gray.300"
        boxShadow="rgba(0,0,0,0.1) 0px 1px 3px 0px, rgba(0,0,0,0.06) 0px 1px 2px 0px"
        borderRadius={10}
        boxSize="320px"
        minW="320px"
        mt={4}
      />
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
