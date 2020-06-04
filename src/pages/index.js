import React from "react";
import css from "@emotion/core";
import { Helmet } from "react-helmet";

export default function App() {
  return (
    <React.StrictMode>
      <div
        className="center-contents"
        css={css`
          margin: 0 auto;
          text-align: center;
        `}
      >
        <Helmet>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1"
          />
          <title>Toucan Recipes</title>
        </Helmet>
        <h1>hi. 🦁</h1>
      </div>
    </React.StrictMode>
  );
}
