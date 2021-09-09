import {useState} from "react";
import axios from "axios";

const RecipeForm = (props) => {
  const { id, showForm, setShowForm, updateRecipes } = props;
  
  const [title, setTitle] = useState(id ? props.title : "");
  const [description, setDescription] = useState(id ? props.description : "");
  const [rating, setRating] = useState(id ? props.rating : "");
  const [source, setSource] = useState(id ? props.source : "");
  const [author, setAuthor] = useState(id  ? props.author : "");



  const getFormName = () =>{
    return id ? "Edit Recipe" : "Add Recipe" 
  };


  const handleSubmit = async (e) => {
    e.preventDefault()
    let recipe = {title, description, rating, source, author}
    console.log(recipe)
    if(id){
      let res = await axios.put(`/api/recipes/${id}`, recipe);
      console.log(res.data);
      setShowForm(!showForm);
      updateRecipes(res.data);
      // props.history.push("/recipes");
    } else {
      let res = await axios.post("/api/recipes", recipe);
      console.log(res);
      props.history.push("/recipes");
    }
  };

  return(
    <div>
        <h1>{getFormName()}</h1>
        <form onSubmit={handleSubmit}>
          <p>Title:</p>
          <input value={props.title} onChange={(e)=> setTitle(e.target.value)} />
          <p>Description:</p>
          <input value={props.description} onChange={(e)=> setDescription(e.target.value)} />
          <p>Rating:</p>
          <input value={props.rating} type="float" onChange={(e)=> setRating(e.target.value)} />
          <p>Source:</p>
          <input value={props.source} type="url" onChange={(e)=> setSource(e.target.value)} />
          <p>Author:</p>
          <input value={props.author} onChange={(e)=> setAuthor(e.target.value)} />
          <br />
          <button type="submit">{!id? "Add Recipe" : "Update Recipe"} </button>
        </form>
    </div>
  );
};

export default RecipeForm;