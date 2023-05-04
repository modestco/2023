import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Thu</div>
            <WeatherIcon code="01d" size={40} />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">
                {forecast[0].temp.max}º
              </span>
              <span className="WeatherForecast-temperature-min">
                {forecast[0].temp.min}º
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "6a4aa8cf6b20df9a18b553b6c2de0a8d";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
