import React, { useEffect, useState } from 'react';

const HourlyForecast = () => {
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const apiKey = '214dbdaa94ab73b0003df4cde101c069';
  const cityId = 524901; // Example city ID, replace it with your desired city ID

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        // Get current time in UTC
        const currentTime = new Date().getTime();

        // the API response structure
        const formattedForecast = data.list
          .filter(item => new Date(item.dt * 1000).getTime() > currentTime) // Filter next 12 hours
          .slice(0, 12) // Limit to 12 hours
          .map(item => {
            return {
              time: new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              temperature: item.main.temp,
              icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`,
            };
          });

        setHourlyForecast(formattedForecast);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [cityId, apiKey]);

  return (
    <div className="hourly-forecast">
      <h2>Hourly Forecast</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Temperature (°C)</th>
            <th>Icon</th>
          </tr>
        </thead>
        <tbody>
          {hourlyForecast.map((forecast) => (
            <tr key={forecast.time}>
              <td>{forecast.time}</td>
              <td>{forecast.temperature}&deg;C</td>
              <td>
                <img src={forecast.icon} alt={forecast.icon} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { HourlyForecast };
