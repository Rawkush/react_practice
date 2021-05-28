import './SeasonDisplay.css';
import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  console.log(props.season);
  const season = getSeason(props.lat, new Date().getMonth());
  const icon = season === "winter" ? "snowflakes" : "sun";
  return (
    <div className="season-display">
      <i className={`icon-left massive ${icon} icon`} />
      <h1>Season Display {season}</h1>
      <i className={`icon-right massive ${icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;
