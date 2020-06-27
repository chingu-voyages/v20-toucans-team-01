import React from "react";
import { css } from "@emotion/core";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import useRecipes from "../hooks/use-recipes";
import RecipePreview from "../components/recipe-preview";
import Layout from "../styles/layout";
import "../styles/bootstrap.min.css";
import "../styles/global.css";
import Difficulty from "../components/Difficulty";
import Mealtype from "../components/Mealtype";
import Nav from "../components/Nav";
import { StylesProvider } from "@material-ui/core/styles";

export default function App() {
  const recipes = useRecipes();

  return (
    <React.StrictMode>
      <StylesProvider injectFirst>
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
          {/* Main page starts here */}

          {/* Nav Bar starts here */}
          <Nav />

          {/* Nav Bar ends here */}

          {/* First section starts here*/}

          <div className="container">
            <div className="row">
              <h2 className="title">Weelky chief recommendation</h2>
            </div>
            <div className="row">
              {recipes.map((recipe) => (
                <RecipePreview key={recipe.slug} recipe={recipe} />
              ))}
            </div>
          </div>
          {/* First section ends here */}

          {/* Second section starts here*/}
          <div className="container">
            <div className="row">
              <h2 className="title">Categories</h2>
            </div>
            <div className="row">
              {recipes.map((recipe) => (
                <RecipePreview key={recipe.slug} recipe={recipe} />
              ))}
            </div>
            <div className="row">
              {recipes.map((recipe) => (
                <RecipePreview key={recipe.slug} recipe={recipe} />
              ))}
            </div>
            <div className="row">
              {recipes.map((recipe) => (
                <RecipePreview key={recipe.slug} recipe={recipe} />
              ))}
            </div>
          </div>
          {/* Second section ends here */}

          {/* Footer starts here */}
          <footer className="page-footer font-small bg-light">
            <div className="footer-copyright text-center py-3">
              © 2020 Copyright{" "}
              <a href="https://github.com/chingu-voyages/v20-toucans-team-01">
                Voyage 20 Toucans Team 01
              </a>
            </div>
          </footer>
          {/* Footer ends here */}
        </div>
      </StylesProvider>
    </React.StrictMode>
  );
}
