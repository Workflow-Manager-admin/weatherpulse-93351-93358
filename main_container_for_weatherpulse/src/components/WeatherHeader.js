import React from 'react';
import { useWeather } from '../context/WeatherContext';

// PUBLIC_INTERFACE
/**
 * Header component for the WeatherPulse application
 * Displays the application title and current location
 */
const WeatherHeader = () => {
  const { location } = useWeather();
  
  return (
    <header className="weather-header">
      <div className="weather-header-content">
        <div className="logo">
          <span className="logo-symbol">☀</span> WeatherPulse
        </div>
        {location && (
          <div className="current-location">
            <span className="location-icon">📍</span> {location}
          </div>
        )}
      </div>
    </header>
  );
};

export default WeatherHeader;
