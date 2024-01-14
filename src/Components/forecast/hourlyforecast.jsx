// app.js
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

class HourlyForecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecastData: [],
    };
  }

  componentDidMount() {
    // Mock data for testing
    const mockData = {
      hourly: [
        { dt: 1642173600, temp: 20 },
        { dt: 1642177200, temp: 22 },
        { dt: 1642180800, temp: 18 },
        // Add more mock data as needed
      ],
    };

    // Process mock data
    const formattedForecast = mockData.hourly.map(hourlyData => {
      return {
        time: new Date(hourlyData.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        temperature: hourlyData.temp,
      };
    });

    // Set state with mock data
    this.setState({ forecastData: formattedForecast });
  }

  render() {
    if (!this.state.forecastData.length) {
      return <p className="loading-text">Loading hourly forecast...</p>;
    }

    return (
      <div className="container">
        <div className="hourly-forecast">
          <h2 className="forecast-header">Hourly Forecast</h2>
          {this.state.forecastData.map((forecastItem, index) => (
            <div className="forecast-row" key={index}>
              <span className="forecast-time">{forecastItem.time}</span>
              <span className="forecast-temp">{forecastItem.temperature}°C</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default HourlyForecast;