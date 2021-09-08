import React from "react";
import NavBar from "./components/NavBar";
import Recipes from "./components/Recipes";
import RecipeForm from "./components/RecipeForm";
import { Switch, Route } from "react-router-dom";
import HomeAbout from "./components/HomeAbout";
import './App.css';



const App = () => {

  return (
    <div className="App">
      <NavBar />

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
