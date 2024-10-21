import { Link } from 'react-router-dom';

export const DishItem = ({ dish }) => {
  if (!dish) {
    return null;
  }

  const { idMeal, strMeal, strMealThumb } = dish;

  const defaultPosterSrc = !strMealThumb
  ? `https://via.placeholder.com/300x250?text=${strMeal}`
  : strMealThumb;

  return (
    <div className="card">
      <div className="card-image">
        <img alt="poster" src={defaultPosterSrc} onClick={() => null}/>
      </div>

      <div className="card-content">
        <span className="card-title">{strMeal}</span>
      </div>

      <div className="card-action">
        <Link to={`recipe/${idMeal}`} className="btn">Watch recipe</Link>
      </div>
    </div>
  );
}