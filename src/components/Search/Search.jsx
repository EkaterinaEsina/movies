import { useState } from "react";

export const Search = (props) => {
  const { handleSearch } = props;

  const [searchValue, setSearchValue] = useState('Matrix');
  const [searchType, setSearchType] = useState('all');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  }

  const handleSearchMovie = (event) => {
    if (event.key === 'Enter') {
      handleSearch(searchValue, searchType);
    }
  }

  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.dataset.type);

    handleSearch(searchValue, event.target.dataset.type);
  }

  return (
    <div className="row">
      <div className="col s12">
        <div className="input-field">
          <input
            id="email_inline"
            className="validate"
            placeholder="Enter your film"
            type="search"
            value={searchValue}
            onChange={handleSearchChange}
            onKeyDown={handleSearchMovie}
          />

          <button
            className="btn search-btn waves-effect waves-light"
            type="submit"
            name="action"
            onClick={() => handleSearch(searchValue, searchType)}
          >
            Search
          </button>
        </div>

        <div className="search-filters">
          <p>
            <label>
              <input
                className="with-gap"
                name="searchType"
                type="radio"
                checked={searchType === 'all'}
                onChange={handleSearchTypeChange}
                data-type="all"
              />
              <span>All</span>
            </label>
          </p>
          <p>
            <label>
              <input
                className="with-gap"
                name="searchType"
                type="radio"
                checked={searchType === 'movie'}
                onChange={handleSearchTypeChange}
                data-type="movie"
              />
              <span>Movies</span>
            </label>
          </p>
          <p>
            <label>
              <input
                className="with-gap"
                name="searchType"
                type="radio"
                checked={searchType === 'series'}
                onChange={handleSearchTypeChange}
                data-type="series"
              />
              <span>Series</span>
            </label>
          </p>
        </div>
      </div>
    </div>
  );
};