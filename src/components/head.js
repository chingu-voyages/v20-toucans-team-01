import React from "react";
import { Helmet } from "react-helmet";

export default function Head({ title }) {
  return (
    <Helmet>
      <html lang="en" />
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1"
      />
      <title>{title ? `${title} · ` : ""}Toucan Recipes</title>
      <link
        rel="icon"
        href='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="12 0 100 100"><text y=".9em" font-size="90">🥘</text></svg>'
      />
    </Helmet>
  );
}
