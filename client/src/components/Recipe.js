


const Recipe = (props) => {
  const { title, description, rating, source, author } = props;
  
  return (
    <div>
    <h2>{title}</h2>
    <p>{description}</p>
    <p>Rating: {rating}/5</p>
    <h5> {author} </h5>
      <a src={source}> {source} </a>
    </div>
  );
};

//not sure why my anchor tag isn't working as a link?

export default Recipe;