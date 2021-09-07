

const RecipeForm = (props) => {
  const { id } = props;

  return id ? "Edit Recipe" : "Add Recipe"
};

export default RecipeForm;