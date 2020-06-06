import React from "react";
import { css } from "@emotion/core";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

export default function App() {
  return (
    <React.StrictMode>
      <div
        className="App"
        css={css`
          margin: 0 auto;
          text-align: center;
          a {
            text-decoration: none;
          }
        `}
      >
        <Helmet>
          <meta charSet="UTF-8" />
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
        <header>
          <nav>
            <Link className="nav-brand" to="/">
              Toucan
            </Link>
          </nav>
        </header>
        <main></main>
        <footer></footer>
      </div>
    </React.StrictMode>
  );
}
