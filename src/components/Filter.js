import React from "react";
import SearchIcon from "../images/search.png";

const Filter = props => {
  const { query, getQuery } = props;
  return (
    <div className="filter-container">
      <img className="search-image" alt="search-icon" src={SearchIcon} />
      <input
        placeholder="Search by name"
        type="search"
        name="filter"
        onChange={getQuery}
        value={query}
      />
    </div>
  );
};

export default Filter;
