import React from 'react';
import { useWeather } from '../context/WeatherContext';

// PUBLIC_INTERFACE
/**
 * Current Weather component for the WeatherPulse application
 * Displays current weather conditions for the selected location
 */
const CurrentWeather = () => {
  const { currentWeather, isLoading, error, location, addToFavorites } = useWeather();

  if (isLoading) {
    return <div className="loading">Loading current weather...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!currentWeather) {
    return <div className="no-data">No weather data available</div>;
  }

  return (
    <div className="current-weather-card">
      <div className="card-header">
        <h2>Current Weather</h2>
        <button 
          onClick={() => addToFavorites(location)} 
          className="favorite-btn"
          title="Add to favorites"
        >
          ★
        </button>
      </div>
      
      <div className="weather-main">
        <div className="temperature">
          {currentWeather.temperature}°C
        </div>
        <div className="condition">
          {currentWeather.condition}
        </div>
      </div>
      
      <div className="weather-details">
        <div className="weather-detail">
          <span className="detail-label">Feels Like:</span>
          <span className="detail-value">{currentWeather.feelsLike}°C</span>
        </div>
        <div className="weather-detail">
          <span className="detail-label">Humidity:</span>
          <span className="detail-value">{currentWeather.humidity}%</span>
        </div>
        <div className="weather-detail">
          <span className="detail-label">Wind:</span>
          <span className="detail-value">{currentWeather.windSpeed} km/h</span>
        </div>
      </div>
      
      <div className="weather-updated">
        Last updated: {currentWeather.updatedAt}
      </div>
    </div>
  );
};

export default CurrentWeather;
