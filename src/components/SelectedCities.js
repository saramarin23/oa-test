import React from "react";
import SelectedItem from "./SelectedItem";

const SelectedCities = props => {
  let { action, favs } = props;
  return (
    <div>
      <div>
        <p>{favs.length} items</p>
        <button onClick={action}>CLEAR</button>
        <ul className="selected-list">
          {favs.map(city => {
            return (
              <li key={city}>
                <SelectedItem city={city} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SelectedCities;
