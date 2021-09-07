

const RecipeForm = (props) => {
  const { id } = props;

  return id? "EditRecipe" : "NewRecipe"
};

export default RecipeForm;