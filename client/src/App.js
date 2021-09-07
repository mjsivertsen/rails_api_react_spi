import { useEffect, useState } from "react";
import axios from "axios";
import Recipes from "./components/Recipes";
import './App.css';


function App() {

  return (
    <div className="App">
      <Recipes />
    </div>
  );
};

export default App;
