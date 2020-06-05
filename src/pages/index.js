import React from "react";
import { css } from "@emotion/core";
import { Helmet } from "react-helmet";

export default function App() {
  return (
    <React.StrictMode>
      <div
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
          <link
            rel="icon"
            href='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="12 0 100 100"><text y=".9em" font-size="90">🥘</text></svg>'
          />
        </Helmet>
        <h1>hi. 🦁</h1>
        <header>
          <nav></nav>
        </header>
        <main></main>
        <footer></footer>
      </div>
    </React.StrictMode>
  );
}
