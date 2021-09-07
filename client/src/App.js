import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./components/NavBar";
import Recipes from "./components/Recipes";
import RecipeForm from "./components/RecipeForm";
import { Switch, Route } from "react-router-dom";
import './App.css';



function App() {
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

  const getHome = () => {
    setShowForm(false);
    setEditRecipe(null);
  };

  const getNavBar = () => {
    return (showForm || editRecipe) ? <div onClick={getHome}>Home</div> :
    <div onClick={() => setShowForm(true)}>New</div>
  };

  const clickHandler = (id) => {
    let recipe = recipes.find(recipe => recipe.id === id)
    setEditRecipe(recipe)
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

  const deleteRecipe = async (id) => {
    try{ 
      await axios.delete(`/api/recipes/${id}`);
      const filterRecipes = recipes.filter((recipe) => recipe.id !== id);
      setRecipes(filterRecipes);
  } catch {
    alert("Hold up jelly belly, something went wrong.");
  }
};

  const getForm = () => {
    return showForm ? <RecipeForm addRecipe={addRecipe}/> :
           editRecipe ? <RecipeForm {...editRecipe} updateRecipe={updateRecipe} setEditRecipe={setEditRecipe}/> :
           <Recipes recipes={recipes} deleteRecipe={deleteRecipe} clickHandler={clickHandler} />
  };

  return (
    <div className="App">
      {getNavBar()}
      {getForm()}
      {/* <div> */}
        {/* <Switch>
          <Route exact path ="/" component={() => <h1> Home </h1>} />
          <Route exact path ="/components/Recipes" component={Recipes} />

        </Switch> */}

      {/* </div> */}
      
      
      {/* <Recipes /> */}
    </div>
  );
};

export default App;
