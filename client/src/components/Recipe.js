import React, {useState} from "react";


const Recipe = (props) => {
  const { id, title, description, rating, source, author, deleteRecipe, clickHandler } = props;

  return (
    <div>
    <h2>{title}</h2>
    <button onClick={()=>clickHandler(id)}>EDIT</button>
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