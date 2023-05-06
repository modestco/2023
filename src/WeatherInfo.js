import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div>
        <ul className="description">
          <li>
            Current time: <FormattedDate date={props.data.date} />,{" "}
            {props.data.description}
          </li>
          <li>
            Humidity: <strong>{props.data.humidity}%</strong>, Wind:{" "}
            <strong>{props.data.wind}km/h</strong>
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <span>
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={52} />
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
