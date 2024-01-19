// HourlyForecast.js

import React, { useEffect, useState } from 'react';
import './style.css'; // Import the CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles


const HourlyForecast = () => {
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [currentWeather, setCurrentWeather] = useState({});
  const [cityName, setCityName] = useState('');
  const [backgroundGradient, setBackgroundGradient] = useState('');
  const apiKey ='214dbdaa94ab73b0003df4cde101c069';
  const cityId = 648900; // ID for Lappeenranta City

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        // Fetch current weather
        const currentResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=metric`);
        const currentData = await currentResponse.json();

        setCurrentWeather({
          temperature: currentData.main.temp,
          wind: currentData.wind.speed,
          humidity: currentData.main.humidity,
          description: currentData.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${currentData.weather[0].icon}.png`,
        });

        setCityName(currentData.name);

        // Fetch hourly forecast
        const hourlyResponse = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}&units=metric`);
        const hourlyData = await hourlyResponse.json();

        // Get current time in UTC
        const currentTime = new Date().getTime();

        // Format hourly forecast data for the next 24 hours
        const formattedHourlyForecast = hourlyData.list
          .filter(item => new Date(item.dt * 1000).getTime() > currentTime && new Date(item.dt * 1000).getTime() <= currentTime + 24 * 60 * 60 * 1000)
          .map(item => ({
            time: new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            temperature: item.main.temp,
            icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`,
          }));

        setHourlyForecast(formattedHourlyForecast);

        // Set background gradient based on current weather condition
        setBackgroundGradient(getBackgroundGradient(currentData.weather[0].main));
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    const getBackgroundGradient = (weatherCondition) => {
      // Implement your logic for current weather gradient
      // This is just a placeholder
      return 'linear-gradient(to bottom, #87CEEB, #1E90FF)';
    };

    fetchWeatherData();
  }, [cityId, apiKey]);

  return (
    <div className="weather-forecast container" style={{ background: backgroundGradient }}>
      <div className="current-weather">
        <h2>{cityName}</h2>
        {currentWeather.icon && <img src={currentWeather.icon} alt="Current Weather Icon" />}
        <p>Temperature: {currentWeather.temperature}&deg;C</p>
        <p>Wind: {currentWeather.wind} m/s</p>
        <p>Humidity: {currentWeather.humidity}%</p>
        <p>{currentWeather.description}</p>
      </div>

      <h2>Hourly Forecast </h2>
      <div className="hourly-forecast-scrollable row" style={{ background: backgroundGradient }}>
        {hourlyForecast.map((forecast, index) => (
          <div key={index} className="col-2 hourly-forecast-item">
            <p>{forecast.time}</p>
            <p>{forecast.temperature}&deg;C</p>
            {forecast.icon && <img src={forecast.icon} alt={forecast.icon} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export { HourlyForecast };