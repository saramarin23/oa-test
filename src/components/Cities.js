import React from "react";
import Filter from "./Filter";
import City from "./CityItem";

const Cities = props => {
  const { cities, query, getQuery, selectCity, handleChange } = props;
  const filteredCities = cities.filter(filteredCity =>
    filteredCity.name.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className="left-panel">
      <Filter query={query} getQuery={getQuery} />
      <div className="total-items">
        <input
          className="select-all_input"
          value="checkAll"
          type="checkbox"
          onClick={handleChange}
        />
        <p>{filteredCities.length} items</p>
      </div>
      <ul className="cities">
        {filteredCities.map(city => {
          return (
            <li
              className="city-container"
              key={city.id}
              value={city.id}
              metadata={city.metadata}
            >
              <input type="checkbox" value={city.id} onChange={selectCity} />
              <City name={city.name} id={city.id} metadata={city.chineseName} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cities;
