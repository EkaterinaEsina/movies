import { useState } from "react";

export const Filter = ({ initialFilter = '', onSubmit }) => {
  const [searchValue, setSearchValue] = useState(initialFilter);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      onSubmit(searchValue);
    }
  };

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          id="search-field"
          className="validate"
          placeholder="Search"
          type="search"
          value={searchValue}
          onChange={handleSearchChange}
          onKeyDown={handleSearch}
        />

        <button className="btn search-btn" onClick={() => onSubmit(searchValue)}>
          Search
        </button>
      </div>
    </div>
  );
};