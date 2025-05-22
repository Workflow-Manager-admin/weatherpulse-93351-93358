import React from 'react';
import { useWeather } from '../context/WeatherContext';

// PUBLIC_INTERFACE
/**
 * Weather Insights component for the WeatherPulse application
 * Displays personalized weather insights based on current conditions
 */
const WeatherInsights = () => {
  const { insights, currentWeather, isLoading } = useWeather();

  if (isLoading || !currentWeather) {
    return <div className="loading">Loading insights...</div>;
  }

  if (!insights || insights.length === 0) {
    return <div className="no-data">No insights available</div>;
  }

  return (
    <div className="insights-card">
      <h2>Weather Insights</h2>
      
      <div className="insights-list">
        {insights.map((insight, index) => (
          <div key={index} className="insight-item">
            <span className="insight-icon">💡</span>
            <p className="insight-text">{insight}</p>
          </div>
        ))}
      </div>
      
      <div className="insights-footer">
        <p>Personalized for your location: {currentWeather.location}</p>
      </div>
    </div>
  );
};

export default WeatherInsights;
