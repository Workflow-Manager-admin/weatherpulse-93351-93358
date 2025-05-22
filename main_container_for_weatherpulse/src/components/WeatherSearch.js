import React, { useState } from 'react';
import { useWeather } from '../context/WeatherContext';

// PUBLIC_INTERFACE
/**
 * Search component for the WeatherPulse application
 * Allows users to search for weather information by location
 */
const WeatherSearch = () => {
  const [searchInput, setSearchInput] = useState('');
  const { fetchWeatherData, favorites, addToFavorites, removeFromFavorites } = useWeather();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      fetchWeatherData(searchInput.trim());
      setSearchInput('');
    }
  };

  const handleFavoriteClick = (location) => {
    fetchWeatherData(location);
  };

  return (
    <div className="weather-search">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search location..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      
      {favorites.length > 0 && (
        <div className="favorites">
          <h3>Favorite Locations</h3>
          <div className="favorites-list">
            {favorites.map((fav, index) => (
              <div key={index} className="favorite-item">
                <button 
                  onClick={() => handleFavoriteClick(fav)}
                  className="favorite-button"
                >
                  {fav}
                </button>
                <button 
                  onClick={() => removeFromFavorites(fav)} 
                  className="remove-favorite"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherSearch;
