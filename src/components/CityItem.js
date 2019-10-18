import React from "react";
import image from "../images/landscape.png";

const City = props => {
  return (
    <div className="city-details-container">
      <div>
        <img className="image" alt="mountain" src={image} />
      </div>
      <div>
        <p className="city-name">{props.name}</p>
        <p className="metadata">{props.metadata}</p>
      </div>
    </div>
  );
};

export default City;
