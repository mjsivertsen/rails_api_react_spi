import React, { useState } from "react";
import RecipeForm from "./RecipeForm";


const Recipe = (props) => {
  const { id, title, description, rating, source, author, deleteRecipe, recipes, setRecipes, updateRecipes} = props;
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
    <h2>{title}</h2>
    <button onClick = { () => setShowForm(!showForm)}> {!showForm ? "EDIT" : "DON'T EDIT" } </button>
    {showForm && <RecipeForm id={id} recipes={recipes} setRecipe={setRecipes} {...recipes} showForm={showForm} setShowForm={setShowForm} updateRecipes={updateRecipes}/>}

    <button onClick={()=>deleteRecipe(id)}>DELETE</button>
    <p>{description}</p>
    <p>Rating: {rating}/5</p>
    <h5> {author} </h5>
    <a href={source}> {source} </a>
    <hr />
    </div>
  );
};


export default Recipe;