import React from "react";
import SelectedItem from "./SelectedItem";

const SelectedCities = props => {
  let { action, favs } = props;
  return (
    <div className="right-panel">
      <div>
        <div className="right-header">
          <p>{favs.length} items</p>
          <button className="clear-button" onClick={action}>
            CLEAR
          </button>
        </div>
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
