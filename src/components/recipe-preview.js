import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";

export default function RecipePreview({ recipe: { slug, title, image } }) {
  return (
    <article className="col-lg-3 col-md-4 col-sm-6">
      <Link to={slug}>
        <img
          css={css`
            border-radius: 10%;
          `}
          width="200"
          height="200"
          src={
            image ??
            "https://images.unsplash.com/photo-1498579809087-ef1e558fd1da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          }
          alt={`Cooked ${title}`}
        />
      </Link>
    </article>
  );
}