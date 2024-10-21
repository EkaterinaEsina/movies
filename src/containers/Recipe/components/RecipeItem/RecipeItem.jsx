import { useNavigate } from 'react-router-dom';

export const RecipeItem = ({ recipe }) => {
  const navigate = useNavigate();

  if (!recipe) {
    return null;
  }

  const {
    idMeal,
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strYoutube,
    ...restRecipe
  } = recipe;

  const defaultPosterSrc = !strMealThumb
  ? `https://via.placeholder.com/300x250?text=${strMeal}`
  : strMealThumb;

  return (
    <>
      <button className="btn" onClick={() => navigate(-1)}>
        <i className="material-icons">arrow_back</i>
        GO BACK
      </button>

      <div className="card">
        <div className="card-image">
          <img alt="poster" src={defaultPosterSrc} onClick={() => null}/>
        </div>

        <div className="card-content">
          <span className="card-title">{strMeal}</span>

          <p>Category: {strCategory}</p>
          <p>Area: {strArea}</p>

          <table className="centered">
            <thead>
              <tr>
                  <th>Ingrediaent</th>
                  <th>Measure</th>
              </tr>
            </thead>

            <tbody>
              {
                Object.keys(restRecipe).map((key) => {
                  if (key.includes('Ingredient') && restRecipe[key].trim()) {
                    const keyNumber = key.replace('strIngredient', '');

                    return (
                      <tr key={key}>
                          <td>{restRecipe[key]}</td>
                          <td>{restRecipe[`strMeasure${keyNumber}`]}</td>
                      </tr>
                    );
                  }

                  return null;
                })
              }
            </tbody>
          </table>

          <br />

          <p>Instructions: {strInstructions}</p>

          <br />

          {strYoutube && (
            <div className="row">
              <h5>VIDEO RECIPE</h5>

              <iframe
                className="video-recipe"
                src={`https://www.youtube.com/embed/${strYoutube.split('=')[1]}`}
                title={idMeal}
                allowFullScreen
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}