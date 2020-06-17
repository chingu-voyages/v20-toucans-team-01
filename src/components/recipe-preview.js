import React from "react";
import { Link } from "gatsby";

export default function RecipePreview({ recipe: { slug, title, image } }) {
  return (
    <article>
      <Link to={slug}>
        <img
          width="200"
          height="200"
          src={
            image ||
            "https://images.unsplash.com/photo-1498579809087-ef1e558fd1da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          }
          alt={`Cooked ${title}`}
        />
      </Link>
    </article>
  );
}
