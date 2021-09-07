import axios from "axios";
import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";


const Recipes = (props) => {
  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => {
    getRecipes()
  }, [])

  const getRecipes = async () => {
    try{ 
      let res = await axios.get("/api/recipes")
      setRecipes(res.data)
    } catch(err) {
      alert("error trying to get recipes, you did something wrong again you dink.")
    }
  };

  const renderRecipes = () => {
    if(recipes.length == 0){
      return (
      <h1> No Recipes to Show </h1>
      )};
    
    return recipes.map( recipe => {
      return <Recipe key={recipe.id} {...recipe} />
     })  
  };

  return (
    <>
    <h1> Recipes Here </h1>
    {renderRecipes()}
    </>
  );
};


export default Recipes;