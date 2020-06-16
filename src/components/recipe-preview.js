import React from "react";
import { Link } from "gatsby";

export default function RecipePreview({ recipe: { slug, title } }) {
  return (
    <article>
      <h2>
        <Link to={slug}>{title}</Link>
      </h2>
    </article>
  );
}
