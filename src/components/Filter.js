import React from "react";
import SearchIcon from "../images/search.png";

const Filter = () => {
  return (
    <div className="filter-container">
      <img className="search-image" alt="search-icon" src={SearchIcon} />
      <input placeholder="Search by name" />
    </div>
  );
};

export default Filter;
