import React from "react";

const SearchBar = ({ onSearch, onSort }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  const handleChangeSort = (e) => {
    onSort(e.target.checked);
  };

  return (
    <div className="search">
      <div>
        <input
          type="checkbox"
          id="sort"
          name="sort"
          onChange={handleChangeSort}
        />
        <label htmlFor="sort">Sort By Age</label>
      </div>
      <input
        className="searchTerm"
        name="search"
        placeholder="Search..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
