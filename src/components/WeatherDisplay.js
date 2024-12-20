import React from "react";

const WeatherDisplay = ({ weather }) => {
  const { temperature, conditions } = weather;

  const temperatureStyle = {
    color: temperature > 20 ? "red" : "blue",
    fontWeight: "bold",
    fontSize: "24px",
  };

  return (
    <div>
      <span style={temperatureStyle}>Temperature: {temperature}°C</span>
      <span> Conditions: {conditions}</span>
    </div>
  );
};

export default WeatherDisplay;
