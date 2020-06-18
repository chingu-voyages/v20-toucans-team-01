import React from "react";
import { css } from "@emotion/core";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import useRecipes from "../hooks/use-recipes";
import RecipePreview from "../components/recipe-preview";
import Layout from "../styles/layout";
import "../styles/bootstrap.min.css";
import "../styles/global.css";

export default function App() {
  const recipes = useRecipes();

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
        {/* Main page starts here */}

        {/* Nav Bar starts here */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Breakfast
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Brunch
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Lunch
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Dinner
                </a>
              </li>
            </ul>
          </div>
          <h1>Toucan Recipes</h1>

          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </nav>
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
            <div className="col-3 col-md-3">
              <img src="https://via.placeholder.com/250" alt=""></img>
            </div>
            <div className="col-3 col-md-3">
              <img src="https://via.placeholder.com/250" alt=""></img>{" "}
            </div>
            <div className="col-3 col-md-3">
              <img src="https://via.placeholder.com/250" alt=""></img>{" "}
            </div>
            <div className="col-3 col-md-3">
              <img src="https://via.placeholder.com/250" alt=""></img>{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-3 col-md-3">
              <img src="https://via.placeholder.com/250" alt=""></img>{" "}
            </div>
            <div className="col-3 col-md-3">
              <img src="https://via.placeholder.com/250" alt=""></img>{" "}
            </div>
            <div className="col-3 col-md-3">
              <img src="https://via.placeholder.com/250" alt=""></img>{" "}
            </div>
            <div className="col-3 col-md-3">
              <img src="https://via.placeholder.com/250" alt=""></img>{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-3 col-md-3">
              <img src="https://via.placeholder.com/250" alt=""></img>{" "}
            </div>
            <div className="col-3 col-md-3">
              <img src="https://via.placeholder.com/250" alt=""></img>{" "}
            </div>
            <div className="col-3 col-md-3">
              <img src="https://via.placeholder.com/250" alt=""></img>{" "}
            </div>
            <div className="col-3 col-md-3">
              <img src="https://via.placeholder.com/250" alt=""></img>{" "}
            </div>
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
    </React.StrictMode>
  );
}
