import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function dailyMaxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function dailyMinTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="dailyForecast">{day()}</div>
      <WeatherIcon code="01d" size={36} />
      <div className="dailyTemperature">
        <span className="dailyMaxTemperature">{dailyMaxTemperature()}</span>
        <span className="dailyMinTemperature">{dailyMinTemperature()}</span>
      </div>
    </div>
  );
}
