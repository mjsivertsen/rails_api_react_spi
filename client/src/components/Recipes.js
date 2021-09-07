import axios from "axios";
import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";

const Recipes = (props) => {
  const {setShowForm, clickHandler } = props;  
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

  const deleteRecipe = async (id) => {
    try{ 
      await axios.delete(`/api/recipes/${id}`);
      const filterRecipes = recipes.filter((recipe) => recipe.id !== id);
      setRecipes(filterRecipes);
  } catch {
    alert("Hold up jelly belly, something went wrong.");
  }
};
  
  const renderRecipes = () => {
    if(recipes.length === 0){
      return (
      <h1> No Recipes to Show </h1>
      )};
    
    return recipes.map( recipe => {
      return <Recipe key={recipe.id} clickHandler={clickHandler} setShowForm={setShowForm} deleteRecipe={deleteRecipe} {...recipe} />
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