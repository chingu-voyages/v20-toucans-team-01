import React from "react";
import "../styles/bootstrap.min.css";
import "../styles/global.css";
import { Button } from "@chakra-ui/core";

const Nav = () => {
  return (
    <nav>
      <Button
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span></span>
      </Button>
      <div>
        <ul>
          <li>
            <a>Breakfast</a>
          </li>
          <li>
            <a>Brunch</a>
          </li>
          <li>
            <a>Lunch</a>
          </li>
          <li>
            <a>Dinner</a>
          </li>
        </ul>
      </div>
      <h1>Toucan Recipes</h1>

      <form>
        <input type="search" placeholder="Search" aria-label="Search"></input>
        <Button>Search</Button>
      </form>
    </nav>
  );
};

export default Nav;
