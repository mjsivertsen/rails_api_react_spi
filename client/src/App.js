import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./components/NavBar";
import Recipes from "./components/Recipes";
import RecipeForm from "./components/RecipeForm";
import { Switch, Route } from "react-router-dom";
import HomeAbout from "./components/HomeAbout";
import './App.css';



const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editRecipe, setEditRecipe] = useState(null);
  
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

  const addRecipe = (recipe) => {
    setShowForm(false)
    setRecipes([recipe, ...recipes])
  };

  const updateRecipe = (editedRecipe) => {
    const updateRecipes = recipes.map (recipe => {
      return recipe.id !== editedRecipe.id ? recipe : editedRecipe
    })
    setEditRecipe(null);
    setRecipes(updateRecipes)
  };

  const getForm = () => {
    return showForm ? <RecipeForm addRecipe={addRecipe}/> :
           editRecipe ? <RecipeForm {...editRecipe} updateRecipe={updateRecipe} setEditRecipe={setEditRecipe}/> :
           <Recipes clickHandler={clickHandler} recipes={recipes} getForm={getForm} {...recipes}/>
  };


  const clickHandler = (id) => {
    let recipe = recipes.find(recipe => recipe.id === id)
    setEditRecipe(recipe);
  };

  return (
    <div className="App">
      <NavBar getForm={getForm} setShowForm={setShowForm}/>

      <div>
    
      <Switch>   
          <Route exact path ="/" component={HomeAbout}/>
          <Route exact path ="/Recipes" component={Recipes} />
          <Route exact path ="/RecipeForm" component={RecipeForm} />
      </Switch>

      </div>
      
    </div>
  );
};

export default App;
