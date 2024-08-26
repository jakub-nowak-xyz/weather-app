import React from "react";
import "./current.css";

import { WiStrongWind } from "react-icons/wi";
import { WiRaindrop } from "react-icons/wi";

const Current = ({ data }) => {
  const {
    temp_c,
    wind_kph,
    humidity,
    condition: { text },
  } = data;
  return (
    <article className="current">
      <div className="current-info">
        <div className="current-temp">
          <h1>{temp_c}&#x00B0;</h1>
          <h3>{text}</h3>
        </div>

        <div className="current-data">
          <p>
            <WiStrongWind />
            <span>{wind_kph} kph</span>
          </p>
          <p>
            <WiRaindrop />
            <span>{humidity}%</span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default Current;
