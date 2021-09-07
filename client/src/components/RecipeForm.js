import {useState} from "react";
import axios from "axios";

const RecipeForm = (props) => {
  const { id } = props;
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [rating, setRating] = useState(props.rating);
  const [source, setSource] = useState(props.source);
  const [author, setAuthor] = useState(props.author);

  const getFormName = () =>{
    return id ? "Edit Recipe" : "Add Recipe"
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    let recipe = {title, description, rating, source, author}
    console.log(recipe)
    if(id){
      let res = await axios.put(`/api/recipes/${id}`, recipe)
      console.log(res)
    } else {
      let res = await axios.post("/api/recipes", recipe)
      console.log(res)
    }
  };

  return(
    <div>
        <h1>{getFormName()}</h1>
        <form onSubmit={handleSubmit}>
          <p>Title:</p>
          <input value={title} onChange={(e)=> setTitle(e.target.value)} />
          <p>Description:</p>
          <input value={description} onChange={(e)=> setDescription(e.target.value)} />
          <p>Rating:</p>
          <input value={rating} type="float" onChange={(e)=> setRating(e.target.value)} />
          <p>Source:</p>
          <input value={source} type="url" onChange={(e)=> setSource(e.target.value)} />
          <p>Author:</p>
          <input value={author} onChange={(e)=> setAuthor(e.target.value)} />
          <br />
          <button type="submit">{!id? "Add Recipe" : "Update Recipe"} </button>
        </form>
    </div>
  );
};

export default RecipeForm;