import React from "react";
import Filter from "./Filter";
import City from "./CityItem";

const Cities = props => {
  const { cities, query, getQuery } = props;
  return (
    <div className="left-panel">
      <Filter query={query} getQuery={getQuery} />
      <h2>Cities</h2>
      <ul className="cities">
        {cities
          .filter(filteredCity =>
            filteredCity.name.toLowerCase().includes(query.toLowerCase())
          )
          .map(city => {
            return (
              <li className="city-container" key={city.id}>
                <input type="checkbox" />
                <City
                  name={city.name}
                  id={city.id}
                  metadata={city.chineseName}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Cities;
