import React, { useEffect, useState } from 'react';
import './style.css'; // Import the CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

import clearImage from '../animations/images/clearMAIN2.jpg';
import cloudyImage from '../animations/images/cloudMAIN2.png';
import rainyImage from '../animations/images/rainMAIN2.png';
import snowyImage from '../animations/images/snowMAIN2.png';


const HourlyForecast = () => {
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [currentWeather, setCurrentWeather] = useState({});
  const [cityName, setCityName] = useState('');
  const [backgroundGradient, setBackgroundGradient] = useState('');
  const apiKey = '214dbdaa94ab73b0003df4cde101c069';
  const cityId = 648900;
  let weatherimage = "";

  //  function for hourly forecast section
  const getHourlyForecastBackgroundGradient = () => {
    return 'linear-gradient(to bottom, #87CEEB, #1E90FF)';
  };

  // function for current weather section
  const getInfoSectionBackgroundGradient = (weatherDescription) => {
    const lowerCasedDescription = (weatherDescription ?? '').toLowerCase();

    if (lowerCasedDescription.includes('clear')) {
      weatherimage = clearImage;
      return 'linear-gradient(to bottom, #87CEEB, #1E90FF)';
    } else if (lowerCasedDescription.includes('cloud')) {
      weatherimage = cloudyImage;
      return 'linear-gradient(to bottom, #A9A9A9, #696969)';
    } else if (lowerCasedDescription.includes('rain')) {
      weatherimage = rainyImage;
      return 'linear-gradient(to bottom, #4682B4, #1E90FF)';
    } else if (lowerCasedDescription.includes('snow')) {
      weatherimage = snowyImage;
      return 'linear-gradient(to bottom, #EDF5F0, #C3C8C4)';
    } else {
      
      return 'linear-gradient(to bottom, #87CEEB, #1E90FF)';
    }
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
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

        const hourlyResponse = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}&units=metric`);
        const hourlyData = await hourlyResponse.json();

        const formattedHourlyForecast = hourlyData.list
          .slice(0, 5)
          .map(item => ({
            time: new Date(item.dt * 1000).toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit', hour12: false }),
            temperature: item.main.temp,
            icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`,
          }));

        setHourlyForecast(formattedHourlyForecast);

        setBackgroundGradient(getHourlyForecastBackgroundGradient());
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [cityId, apiKey]);

  return (
    <div className="weather-forecast container" style={{ background: backgroundGradient, borderRadius: '5px' }}>
      <div className="current-weather" style={{ background: getInfoSectionBackgroundGradient(currentWeather.description) }}>
        <h2>{cityName}</h2>
        {weatherimage && <img src={weatherimage} alt="Current Weather Icon" />}
        <p style={{ marginTop: "20px" }}>Temperature: {currentWeather.temperature}&deg;C</p>
        <p>Wind: {currentWeather.wind} m/s</p>
        <p>Humidity: {currentWeather.humidity}%</p>
        <p>{currentWeather.description}</p>
      </div>

      <h2>Hourly Forecast</h2>
      <div className="hourly-forecast-scrollable row" style={{ background: getHourlyForecastBackgroundGradient() }}>
        {hourlyForecast.map((forecast, index) => (
          <div key={index} className="col-lg-2 col-md-3 col-sm-4 col-6 hourly-forecast-item text-center">
            <p className="text-truncate">{forecast.time}</p>
            <p>{forecast.temperature}&deg;C</p>
            {forecast.icon && <img src={forecast.icon} alt={forecast.icon} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export { HourlyForecast };
