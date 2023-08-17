/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useUser } from "../context/CityContext";
import axios from "axios";
import rain from "../img/rain.svg";
import cloudy from "../img/cloudy.svg";
import clear from "../img/clear.svg";

function WeatherForecast() {
  const { city } = useUser();
  const [dailyForecasts, setDailyForecasts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    setDailyForecasts([]);

    axios
      .get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next7days?unitGroup=metric&key=9L5Q6RRL9DLEAPT6UNYPSW7TS&contentType=json`)
      .then((res) => {
        const dailyForecasts = res.data.days;

        setDailyForecasts(dailyForecasts); // dailyForecasts durumunu güncelle
        console.log("API Yanıtı:", dailyForecasts);
      })
      .finally(() => setLoading(true));
  }, [city]);

  const formatDate = (date) => {
    const parts = date.split("-");
    if (parts.length === 3) {
      return `${parts[2]}-${parts[1]}-${parts[0].slice(2)}`;
    } else {
      return "Geçersiz tarih formatı.";
    }
  };

  return (
    <div>
      <ul>
        {!loading && (
          <div className="loading-container">
            <div className="loading-animation">{}</div>
          </div>
        )}
        {loading &&
          dailyForecasts.map((forecast, key) => (
            <li key={key}>
              <p>{formatDate(forecast.datetime)}</p>
              {forecast.icon === "rain" ? <img src={rain}></img> : null}
              {forecast.icon === "partly-cloudy-day" ? <img src={cloudy}></img> : null}
              {forecast.icon === "clear-day" ? <img src={clear}></img> : null}

              <div className="temp">
                <p>{forecast.tempmax}°C</p>
                <p>{forecast.tempmin}°C</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default WeatherForecast;
