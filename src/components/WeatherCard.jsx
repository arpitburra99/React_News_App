import React, { useContext, useEffect } from "react";
import WeatherContext from "../context/weather/WeatherContext";
import { fetchWeather } from "../context/weather/WeatherActions";

const WeatherCard = () => {
  const { weatherData, weatherDispatch } = useContext(WeatherContext);

  const getWeather = async () => {
    const data = await fetchWeather("New Delhi");
    weatherDispatch({
      type: "GET_WEATHER",
      payload: data,
    });
  };

  useEffect(() => {
    getWeather();
  }, []);

  if (!weatherData) {
    return (
      <div class="card" aria-hidden="true">
        <div class="card-body">
          <h5 class="card-title placeholder-glow mb-4">
            <span class="placeholder col-6"></span>
          </h5>
          <p class="card-text placeholder-glow">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
            <span class="placeholder col-8"></span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-header text-center text-bg-secondary">
        Today's Weather
      </div>
      <span className="d-flex align-item-center justify-content-between p-5">
        <span>
          <h1 className="card-title">{weatherData.location.name}</h1>
          <h2 className="card-text">{weatherData.current.temp_c + "°c"}</h2>
        </span>
        <span>
          <img src={weatherData.current.condition.icon} alt="icon" />
          <p className="text-secondry">{weatherData.current.condition.text}</p>
        </span>
      </span>
    </div>
  );
};

export default WeatherCard;
