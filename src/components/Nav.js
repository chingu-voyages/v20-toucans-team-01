import React from "react";
import "../styles/bootstrap.min.css";
import "../styles/global.css";
import { Button } from "@chakra-ui/core";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </Button>
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
        <Button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </Button>
      </form>
    </nav>
  );
};

export default Nav;
