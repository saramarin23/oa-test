import React from "react";
import City from "./CityItem";

const SelectedItem = props => {
  return <City name={props.city} />;
};

export default SelectedItem;
