import React from 'react';

const HourlyForecast = ({ hourlyForecast }) => {
  const mockData = [
    { time: '8:00 AM', temperature: 12, icon: 'https://openweathermap.org/img/wn/01n.png' },
    { time: '10:00 AM', temperature: 18, icon: 'https://openweathermap.org/img/wn/01d.png' },
    { time: '12:00 PM', temperature: 22, icon: 'https://openweathermap.org/img/wn/02d.png' },
    { time: '2:00 PM', temperature: 26, icon: 'https://openweathermap.org/img/wn/03d.png' },
    { time: '4:00 PM', temperature: 24, icon: 'https://openweathermap.org/img/wn/04d.png' },
    { time: '6:00 PM', temperature: 20, icon: 'https://openweathermap.org/img/wn/09n.png' },
    { time: '8:00 PM', temperature: 15, icon: 'https://openweathermap.org/img/wn/10d.png' },
    { time: '10:00 PM', temperature: 12, icon: 'https://openweathermap.org/img/wn/11n.png' },
  ];

  return (
    <div className="hourly-forecast">
      <h2>Hourly Forecast</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Temperature</th>
            <th>Icon</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((forecast) => (
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