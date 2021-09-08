import axios from "axios";
import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";

const Recipes = (props) => {
  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => {
    getRecipes()
  }, []);

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
  


  // const addRecipe = (recipe) => {
  //   setShowForm(false)
  //   setRecipes([recipe, ...recipes])
  // };

  // const getForm = () => {
  //   return showForm ? <RecipeForm addRecipe={addRecipe}/> :
  //          editRecipe ? <RecipeForm addRecipe={addRecipe} {...editRecipe} updateRecipe={updateRecipe} setEditRecipe={setEditRecipe}/> :
  //          <Recipes clickHandler={clickHandler} recipes={recipes} getForm={getForm} {...recipes}/>
  // };



  const renderRecipes = () => {
    if(recipes.length === 0){
      return (
      <h1> No Recipes to Show </h1>
      )};
    
    return recipes.map( recipe => {
      return <Recipe key={recipe.id} setRecipes={setRecipes} deleteRecipe={deleteRecipe} recipes={recipes} {...recipe} />
     })  
  };

  return (
    <>
    <h1> Good Recipes for Good Michaela </h1>
    {renderRecipes()}
    </>
  );
};


export default Recipes;