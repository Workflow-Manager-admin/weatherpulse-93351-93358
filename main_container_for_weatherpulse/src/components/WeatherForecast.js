import React from 'react';
import { useWeather } from '../context/WeatherContext';

// PUBLIC_INTERFACE
/**
 * Weather Forecast component for the WeatherPulse application
 * Displays multi-day forecast for the selected location
 */
const WeatherForecast = () => {
  const { forecast, isLoading, error } = useWeather();

  if (isLoading) {
    return <div className="loading">Loading forecast...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!forecast || forecast.length === 0) {
    return <div className="no-data">No forecast data available</div>;
  }

  return (
    <div className="forecast-card">
      <h2>7-Day Forecast</h2>
      
      <div className="forecast-list">
        {forecast.map((day, index) => (
          <div key={index} className="forecast-item">
            <div className="forecast-day">{day.day}</div>
            <div className="forecast-condition">{day.condition}</div>
            <div className="forecast-temp">
              <span className="high-temp">{day.highTemp}°</span>
              <span className="low-temp">{day.lowTemp}°</span>
            </div>
            <div className="forecast-precip">
              <span className="precip-icon">💧</span>
              <span className="precip-chance">{day.precipitation}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
