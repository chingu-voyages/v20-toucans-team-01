import React from "react";
import { css, Global } from "@emotion/core";
import { Box } from "@chakra-ui/core";

// TODO: Currently unused
// Either use it later, or remove on project completion

export default function Layout({ children }) {
  return (
    <>
      <Global
        styles={css`
          /* page defaults */
          * {
            margin: 0;
          }

          * + * {
            margin-top: 1rem;
          }

          html,
          body {
            margin: 0;
            color: #555;
            font-size: 18px;
            line-height: 1.4;

            /* remove Gatsby wrapper margin */
            > div {
              margin-top: 0;
            }
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #222;
            line-height: 1.1;

            + * {
              margin-top: 0.5rem;
            }
          }

          strong {
            color: #222;
          }

          li {
            margin-top: 0.25rem;
          }
        `}
      />
      <Box
        as="main"
        css={css`
          margin: 2rem auto 4rem;
          max-width: 90vw;
        `}
      >
        {children}
      </Box>
    </>
  );
}
