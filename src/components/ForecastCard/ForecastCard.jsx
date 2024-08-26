import React from "react";
import "./card.css";

const ForecastCard = ({ text, temp, name }) => {
  return (
    <article className="card">
      <p className="card-text">{text}</p>
      <h3 className="card-temp">{temp}&#x00B0;</h3>
      <p className="card-name">{name}</p>
    </article>
  );
};

export default ForecastCard;
