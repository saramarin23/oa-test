import React from "react";
import Filter from "./Filter";
import City from "./CityItem";

const Cities = props => {
  const {
    cities,
    query,
    getQuery,
    selectAllCities,
    selectCity,
    items,
    loadingState
  } = props;
  const filteredCities = cities.filter(filteredCity =>
    filteredCity.name.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className="left-panel">
      <Filter query={query} getQuery={getQuery} />
      <div className="total-items">
        <input type="checkbox" onClick={selectAllCities} />
        <p>{filteredCities.length} items</p>
      </div>
      <ul className="cities">
        {filteredCities.map(city => {
          return (
            <li className="city-container" key={city.id}>
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
