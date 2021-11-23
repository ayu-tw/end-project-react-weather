import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="enter a city ..."
              className="form-control"
            />
          </div>
          <div className="col-3 ">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>

      <h1>Munich</h1>
      <ul>
        <li>Tuseday 12:14</li>
        <li>Sunny but cold</li>
      </ul>
      <div className="row">
        <div className="col-6 clearfix">
          <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />{" "}
          <strong className="temperature">4</strong>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation : 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
