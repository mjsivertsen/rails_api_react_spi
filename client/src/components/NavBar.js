import React from "react";
import { Link } from "react-router-dom";

  const NavBar = () => {

    return (
      <div style={{display:'flex'}}>
        <Link style={styles.link} to="/">
          Home
        </Link>
        <Link style={styles.link} to="Recipes">
          Recipes
        </Link>
        <Link style={styles.link} to="RecipeForm">
          Add Recipe
        </Link>
      </div>
    );
  };

const styles = {
  link: {
    color: "#A020F0",
    size: "6px",
    padding: "6px",
    border: "1px solid orange",
    margin: "6px",
    boxShadow: "rgba(0, 0, 0, .6) 0px 6px 12px",
  }


}


export default NavBar;

