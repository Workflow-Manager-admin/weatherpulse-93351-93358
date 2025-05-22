import React from 'react';
import { WeatherProvider } from '../context/WeatherContext';
import WeatherHeader from './WeatherHeader';
import WeatherSearch from './WeatherSearch';
import CurrentWeather from './CurrentWeather';
import WeatherForecast from './WeatherForecast';
import WeatherInsights from './WeatherInsights';

// PUBLIC_INTERFACE
/**
 * Main Container component for WeatherPulse application
 * Integrates all weather components and provides the WeatherContext
 */
const WeatherContainer = () => {
  return (
    <WeatherProvider>
      <div className="weather-container">
        <WeatherHeader />
        
        <div className="weather-content">
          <div className="search-section">
            <WeatherSearch />
          </div>
          
          <div className="current-weather-section">
            <CurrentWeather />
          </div>
          
          <div className="forecast-section">
            <WeatherForecast />
          </div>
          
          <div className="insights-section">
            <WeatherInsights />
          </div>
        </div>
      </div>
    </WeatherProvider>
  );
};

export default WeatherContainer;
