import React from "react";
import image from "../images/mountains.svg";

const City = props => {
  return (
    <div>
      <img className="image" alt="mountain" src={image} />
      <p className="city-name">{props.name}</p>
      <p className="metadata">{props.metadata}</p>
    </div>
  );
};

export default City;
