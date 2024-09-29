export const Movie = ({ movie }) => {
  const { 
    Title: title, 
    Type: type, 
    Year: year, 
    Plot: plot, 
    Poster: poster, 
    imdbRating
  } = movie;

  const defaultPosterSrc = poster === 'N/A'
    ? `https://via.placeholder.com/300x250?text=${title}`
    : poster;

  return (
    <div className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img alt="poster" src={defaultPosterSrc} onClick={() => null}/>
            <span className="card-title">{title}, {year}</span>
          </div>
          <div className="card-content">
            <p>Type: {type}</p>
            <p>IMDb score: {imdbRating}</p>
            <p>{plot}</p>
          </div>
        </div>
      </div>
    </div>
  );
}