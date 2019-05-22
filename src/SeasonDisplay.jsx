import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: "Hot outside- hit beach",
    iconName: "sun"
  },
  winter: {
    text: "It's chilly out- stay inside",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <div className="blocker">
        <p>Latitude: {props.lat.toFixed(2)}</p>
        <p>What to do: {text}</p>
      </div>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
