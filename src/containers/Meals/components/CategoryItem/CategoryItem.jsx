import { Link } from 'react-router-dom';

export const CategoryItem = ({ category }) => {
  if (!category) {
    return null;
  }

  const { strCategory, strCategoryDescription, strCategoryThumb } = category;

  const defaultPosterSrc = !strCategoryThumb
  ? `https://via.placeholder.com/300x250?text=${strCategory}`
  : strCategoryThumb;

  return (
    <div className="card">
      <div className="card-image">
        <img alt="poster" src={defaultPosterSrc} onClick={() => null}/>
      </div>

      <div className="card-content">
        <span className="card-title">{strCategory}</span>
        <p>Description: {strCategoryDescription}</p>
      </div>

      <div className="card-action">
        <Link to={`meal/${strCategory}`} className="btn">Show details</Link>
      </div>
    </div>
  );
}